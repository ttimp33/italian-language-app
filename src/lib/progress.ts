import { useCallback, useSyncExternalStore } from 'react';
import type { StepKind } from '../data/types';
import { type Grade, type SrsCard, newCard, schedule } from './srs';
import { dayKey } from './daily';

/** What each kind of step is worth, and what to call it. */
export const STEP_META: Record<StepKind, { label: string; xp: number }> = {
  phonics: { label: 'Pronuncia', xp: 15 },
  grammar: { label: 'Grammatica', xp: 20 },
  word: { label: 'Parola', xp: 10 },
  article: { label: 'Lettura', xp: 20 },
  listening: { label: 'Ascolto', xp: 20 },
  drills: { label: 'Esercizi', xp: 15 },
  conversation: { label: 'Conversazione', xp: 15 },
  convdrill: { label: 'Dialoghi', xp: 15 },
};

/**
 * What the store remembers about one step of the course. `best` is the highest
 * score so far rather than the latest: a learner who passes and then replays a
 * unit for revision must not be able to un-finish it with a careless run.
 */
export interface StepRecord {
  done: boolean;
  best: number;
  attempts: number;
}

export interface Progress {
  xp: number;
  streak: number;
  lastActiveDay: string | null;
  /**
   * Course progress, keyed by step id. This is the whole model: the level a
   * learner is at is derived from which steps are passed, never stored, so
   * there is no way for the two to disagree.
   */
  steps: Record<string, StepRecord>;
  /** Steps finished per calendar day, for the activity heatmap. */
  history: Record<string, number>;
  /** starred word ids, for the review deck */
  saved: string[];
  drills: { correct: number; attempted: number };
  quiz: { correct: number; attempted: number };
  /**
   * Confidence per conversation card: +1 each time it is recalled, back to 0
   * when it is not. A card at 3 counts as learned, so the deck can report real
   * progress rather than how many times it has been flipped.
   */
  convDeck: Record<string, number>;
  /**
   * Scenes worked through, in no particular order. The vocabulary section is
   * self-paced rather than rationed by the calendar, so this is a library of
   * what has been done, not a daily checklist.
   */
  scenesDone: string[];
  /**
   * The spaced-repetition schedule, keyed by lexicon entry id. Coverage of the
   * core is simply how many cards exist; retention is how many have survived
   * out to a long interval.
   */
  srs: Record<string, SrsCard>;
}

/** Confidence at which a conversation card is treated as learned. */
export const CONV_MASTERY = 3;

/**
 * Progress is stored per profile, so two people sharing a device keep separate
 * streaks, statistics and decks. The pre-profile key is migrated once, on the
 * first sign-in of the account that was using the app before profiles existed.
 */
const KEY_PREFIX = 'italiano-quotidiano/v1';
const LEGACY_KEY = KEY_PREFIX;
const LEGACY_HEIR = 'tyler';

let activeUser: string | null = null;

function storageKey(user: string): string {
  return `${KEY_PREFIX}/${user}`;
}

/** How many steps were finished on a given day. */
export function completedOn(progress: Progress, day: string): number {
  return progress.history[day] ?? 0;
}

const EMPTY: Progress = {
  xp: 0,
  streak: 0,
  lastActiveDay: null,
  steps: {},
  history: {},
  saved: [],
  drills: { correct: 0, attempted: 0 },
  quiz: { correct: 0, attempted: 0 },
  convDeck: {},
  scenesDone: [],
  srs: {},
};

/**
 * The vocabulary section originally recorded a flat list of words met. Those
 * entries become real scheduler cards, due immediately, so nothing learned
 * before spaced repetition existed is thrown away.
 */
function migrateSrs(parsed: Partial<Progress> & { lexMet?: string[] }): Record<string, SrsCard> {
  const srs = { ...(parsed.srs ?? {}) };
  for (const id of parsed.lexMet ?? []) {
    if (!srs[id]) srs[id] = newCard(id);
  }
  return srs;
}

/**
 * The app used to serve a rotating daily lesson, and recorded which of that
 * day's tasks were done under a `day::level` key. Those records cannot become
 * course progress — a day's tasks were a slice of a level, not a step of a
 * path — so the count per day is kept for the activity heatmap and the rest is
 * let go. Streak, XP, saved words, the conversation deck and the whole spaced
 * repetition schedule carry over untouched.
 */
function migrateHistory(parsed: Partial<Progress> & { completed?: Record<string, string[]> }): Record<string, number> {
  const history = { ...(parsed.history ?? {}) };
  for (const [key, tasks] of Object.entries(parsed.completed ?? {})) {
    const day = key.split('::')[0];
    history[day] = (history[day] ?? 0) + (Array.isArray(tasks) ? tasks.length : 0);
  }
  return history;
}

function parse(raw: string | null): Progress | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      ...EMPTY,
      ...parsed,
      steps: parsed.steps ?? {},
      history: migrateHistory(parsed),
      drills: { ...EMPTY.drills, ...parsed.drills },
      quiz: { ...EMPTY.quiz, ...parsed.quiz },
      convDeck: { ...EMPTY.convDeck, ...parsed.convDeck },
      scenesDone: parsed.scenesDone ?? [],
      srs: migrateSrs(parsed),
    };
  } catch {
    return null;
  }
}

function load(user: string | null): Progress {
  if (!user) return EMPTY;
  try {
    // Reading `localStorage` at all throws in a sandboxed iframe, so the access
    // itself has to sit inside the try — an uncaught throw here would blank the
    // page rather than degrade it.
    if (typeof localStorage === 'undefined') return EMPTY;
    const own = parse(localStorage.getItem(storageKey(user)));
    if (own) return own;

    // One-time inheritance of pre-profile data, so the person who had been
    // using the app does not lose their streak the day profiles arrive.
    if (user === LEGACY_HEIR) {
      const legacy = parse(localStorage.getItem(LEGACY_KEY));
      if (legacy) {
        localStorage.setItem(storageKey(user), JSON.stringify(legacy));
        localStorage.removeItem(LEGACY_KEY);
        return legacy;
      }
    }
    return EMPTY;
  } catch {
    return EMPTY;
  }
}

let state: Progress = EMPTY;
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

/** Swap the whole store to another profile, or to nobody when signed out. */
export function setActiveUser(user: string | null): void {
  activeUser = user;
  state = load(user);
  emit();
}

function persist() {
  // Nothing to write while signed out — and nothing should be written, or the
  // next person to sign in would inherit whatever happened on the gate.
  if (!activeUser) return;
  try {
    localStorage.setItem(storageKey(activeUser), JSON.stringify(state));
  } catch {
    // Storage unavailable (private mode, quota). The session still works in memory.
  }
}

function set(updater: (prev: Progress) => Progress) {
  state = updater(state);
  persist();
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function snapshot() {
  return state;
}

/** Days between two YYYY-MM-DD keys, ignoring time and DST. */
function daysBetween(a: string, b: string): number {
  const toUtc = (s: string) => {
    const [y, m, d] = s.split('-').map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((toUtc(b) - toUtc(a)) / 86_400_000);
}

/** A streak advances once per calendar day, and survives only a single-day gap of zero. */
function bumpStreak(prev: Progress, day: string): Pick<Progress, 'streak' | 'lastActiveDay'> {
  if (prev.lastActiveDay === day) return { streak: prev.streak, lastActiveDay: day };
  if (prev.lastActiveDay && daysBetween(prev.lastActiveDay, day) === 1) {
    return { streak: prev.streak + 1, lastActiveDay: day };
  }
  return { streak: 1, lastActiveDay: day };
}

export const actions = {
  /**
   * Record an attempt at a step. The score decides whether it counts: a step is
   * finished at PASS_MARK and stays finished, so replaying a unit for revision
   * can raise a score but never take a level away.
   *
   * `pass` is passed in rather than computed here to keep the store ignorant of
   * the course rules — the caller already knows what a pass means for its kind.
   */
  completeStep(
    stepId: string,
    { correct, total, pass, xp, day = dayKey() }: { correct: number; total: number; pass: boolean; xp: number; day?: string },
  ) {
    set((p) => {
      const prev = p.steps[stepId];
      const score = total > 0 ? correct / total : pass ? 1 : 0;
      const record: StepRecord = {
        done: Boolean(prev?.done) || pass,
        best: Math.max(prev?.best ?? 0, score),
        attempts: (prev?.attempts ?? 0) + 1,
      };
      // Only the first pass pays: XP and the streak reward progress, not laps.
      const firstPass = record.done && !prev?.done;
      return {
        ...p,
        steps: { ...p.steps, [stepId]: record },
        xp: p.xp + (firstPass ? xp : 0),
        history: firstPass ? { ...p.history, [day]: (p.history[day] ?? 0) + 1 } : p.history,
        ...(firstPass ? bumpStreak(p, day) : { streak: p.streak, lastActiveDay: p.lastActiveDay }),
      };
    });
  },

  recordQuiz(correct: number, attempted: number) {
    set((p) => ({ ...p, quiz: { correct: p.quiz.correct + correct, attempted: p.quiz.attempted + attempted } }));
  },

  recordDrill(correct: boolean) {
    set((p) => ({
      ...p,
      drills: { correct: p.drills.correct + (correct ? 1 : 0), attempted: p.drills.attempted + 1 },
    }));
  },

  /** Grade a conversation card: recalled advances it, a miss sends it back to 0. */
  gradeConvCard(itemId: string, recalled: boolean) {
    set((p) => ({
      ...p,
      convDeck: { ...p.convDeck, [itemId]: recalled ? (p.convDeck[itemId] ?? 0) + 1 : 0 },
    }));
  },

  /**
   * Put words into the schedule. Available at any point — from a scene, from the
   * word list, a whole cluster at a time — because gating the bank behind
   * finishing exercises left most of a thousand words unreachable.
   *
   * Words already scheduled keep the progress they have: adding a word twice, or
   * replaying a scene, must never reset something held for three weeks.
   */
  addWords(wordIds: string[], today?: string) {
    set((p) => {
      const srs = { ...p.srs };
      let added = false;
      for (const id of wordIds) {
        if (!srs[id]) {
          srs[id] = newCard(id, today);
          added = true;
        }
      }
      return added ? { ...p, srs } : p;
    });
  },

  /** Mark a scene worked through. Independent of whether its words are scheduled. */
  completeScene(sceneId: string, wordIds: string[], today?: string) {
    set((p) => {
      const srs = { ...p.srs };
      for (const id of wordIds) {
        if (!srs[id]) srs[id] = newCard(id, today);
      }
      const scenesDone = p.scenesDone.includes(sceneId) ? p.scenesDone : [...p.scenesDone, sceneId];
      return { ...p, srs, scenesDone };
    });
  },

  /** Drop a word from the schedule, for something already known. */
  removeWord(wordId: string) {
    set((p) => {
      if (!p.srs[wordId]) return p;
      const srs = { ...p.srs };
      delete srs[wordId];
      return { ...p, srs };
    });
  },

  /** Grade a card in a review session and reschedule it. */
  gradeCard(id: string, grade: Grade, today?: string) {
    set((p) => {
      const card = p.srs[id] ?? newCard(id, today);
      return { ...p, srs: { ...p.srs, [id]: schedule(card, grade, today) } };
    });
  },

  toggleSaved(wordId: string) {
    set((p) => ({
      ...p,
      saved: p.saved.includes(wordId) ? p.saved.filter((id) => id !== wordId) : [...p.saved, wordId],
    }));
  },

  reset() {
    set(() => ({ ...EMPTY, steps: {}, history: {}, saved: [], convDeck: {}, scenesDone: [], srs: {} }));
  },
};

export function useProgress() {
  const progress = useSyncExternalStore(subscribe, snapshot, snapshot);
  const isDone = useCallback((stepId: string) => Boolean(progress.steps[stepId]?.done), [progress]);
  return { progress, isDone, ...actions };
}

/** Exported for tests. */
export const _internals = { daysBetween, bumpStreak, EMPTY, read: snapshot, storageKey, LEGACY_KEY, migrateHistory };
