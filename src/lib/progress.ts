import { useCallback, useSyncExternalStore } from 'react';
import type { Level } from '../data/types';
import type { DailyLesson } from './daily';
import { dayKey } from './daily';

export type TaskId =
  | 'word'
  | 'article'
  | 'listening'
  | 'vocab'
  | 'drills'
  | 'conversation'
  | 'phonics'
  | 'grammar';

/**
 * The full catalogue. Not every task exists at every level — pronunciation and
 * grammar lessons are only written for the levels that need them — so the UI
 * derives the day's actual list from the lesson, not from this array.
 */
export const TASKS: { id: TaskId; label: string; xp: number }[] = [
  { id: 'phonics', label: 'Pronuncia', xp: 15 },
  { id: 'grammar', label: 'Grammatica', xp: 20 },
  { id: 'word', label: 'Parola del giorno', xp: 10 },
  { id: 'article', label: 'Lettura', xp: 20 },
  { id: 'listening', label: 'Ascolto', xp: 20 },
  { id: 'vocab', label: 'Quiz lessico', xp: 15 },
  { id: 'drills', label: 'Coniugazioni', xp: 15 },
  { id: 'conversation', label: 'Conversazione', xp: 15 },
];

export interface Progress {
  level: Level;
  xp: number;
  streak: number;
  lastActiveDay: string | null;
  /**
   * `${day}::${level}` → task ids completed that day at that level.
   *
   * Keyed by level as well as day because the levels are separate courses:
   * finishing the A1 word of the day says nothing about the A2 one, and
   * marking both done from a single tap made a whole level look complete
   * when it had not been started.
   */
  completed: Record<string, TaskId[]>;
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

/** Completion is tracked per day *and* per level. */
export function completionKey(day: string, level: Level): string {
  return `${day}::${level}`;
}

/** Every task completed on a day, across all levels — for the activity heatmap. */
export function completedOn(progress: Progress, day: string): TaskId[] {
  return Object.entries(progress.completed)
    .filter(([key]) => key.startsWith(`${day}::`))
    .flatMap(([, tasks]) => tasks);
}

const EMPTY: Progress = {
  level: 'B1',
  xp: 0,
  streak: 0,
  lastActiveDay: null,
  completed: {},
  saved: [],
  drills: { correct: 0, attempted: 0 },
  quiz: { correct: 0, attempted: 0 },
  convDeck: {},
};

/**
 * Completion used to be keyed by day alone. Old entries are re-filed under the
 * level the profile was last using — the only level information those records
 * carry — so an existing streak and heatmap survive the change.
 */
function migrateCompletion(completed: Record<string, TaskId[]>, level: Level): Record<string, TaskId[]> {
  const out: Record<string, TaskId[]> = {};
  for (const [key, tasks] of Object.entries(completed)) {
    out[key.includes('::') ? key : completionKey(key, level)] = tasks;
  }
  return out;
}

function parse(raw: string | null): Progress | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<Progress>;
    const level = parsed.level ?? EMPTY.level;
    return {
      ...EMPTY,
      ...parsed,
      level,
      completed: migrateCompletion(parsed.completed ?? {}, level),
      drills: { ...EMPTY.drills, ...parsed.drills },
      quiz: { ...EMPTY.quiz, ...parsed.quiz },
      convDeck: { ...EMPTY.convDeck, ...parsed.convDeck },
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
  setLevel(level: Level) {
    set((p) => ({ ...p, level }));
  },

  completeTask(task: TaskId, day: string = dayKey(), level?: Level) {
    set((p) => {
      const key = completionKey(day, level ?? p.level);
      const done = p.completed[key] ?? [];
      if (done.includes(task)) return p;
      const xp = TASKS.find((t) => t.id === task)?.xp ?? 0;
      return {
        ...p,
        xp: p.xp + xp,
        ...bumpStreak(p, day),
        completed: { ...p.completed, [key]: [...done, task] },
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

  toggleSaved(wordId: string) {
    set((p) => ({
      ...p,
      saved: p.saved.includes(wordId) ? p.saved.filter((id) => id !== wordId) : [...p.saved, wordId],
    }));
  },

  reset() {
    set(() => ({ ...EMPTY, completed: {}, saved: [], convDeck: {} }));
  },
};

/**
 * The tasks that actually exist in a given day's lesson. Levels differ — A1
 * has pronunciation and grammar lessons and the higher levels do not — and
 * counting a task with no content would leave the day permanently unfinished.
 */
export function activeTasks(lesson: DailyLesson): TaskId[] {
  return TASKS.filter((t) => {
    if (t.id === 'phonics') return Boolean(lesson.phonics);
    if (t.id === 'grammar') return Boolean(lesson.grammar);
    return true;
  }).map((t) => t.id);
}

export function useProgress() {
  const progress = useSyncExternalStore(subscribe, snapshot, snapshot);
  const isDone = useCallback(
    // Defaults to the level currently in play, so no call site has to thread it
    // through and none can accidentally read another level's state.
    (task: TaskId, day: string = dayKey(), level: Level = progress.level) =>
      (progress.completed[completionKey(day, level)] ?? []).includes(task),
    [progress],
  );
  return { progress, isDone, ...actions };
}

/** Exported for tests. */
export const _internals = { daysBetween, bumpStreak, EMPTY, read: snapshot, storageKey, LEGACY_KEY, migrateCompletion };
