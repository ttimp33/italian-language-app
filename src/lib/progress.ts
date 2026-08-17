import { useCallback, useSyncExternalStore } from 'react';
import type { Level } from '../data/types';
import { dayKey } from './daily';

export type TaskId = 'word' | 'article' | 'listening' | 'vocab' | 'drills';

export const TASKS: { id: TaskId; label: string; xp: number }[] = [
  { id: 'word', label: 'Parola del giorno', xp: 10 },
  { id: 'article', label: 'Lettura', xp: 20 },
  { id: 'listening', label: 'Ascolto', xp: 20 },
  { id: 'vocab', label: 'Quiz lessico', xp: 15 },
  { id: 'drills', label: 'Coniugazioni', xp: 15 },
];

export interface Progress {
  level: Level;
  xp: number;
  streak: number;
  lastActiveDay: string | null;
  /** day → task ids completed that day */
  completed: Record<string, TaskId[]>;
  /** starred word ids, for the review deck */
  saved: string[];
  drills: { correct: number; attempted: number };
  quiz: { correct: number; attempted: number };
}

const STORAGE_KEY = 'italiano-quotidiano/v1';

const EMPTY: Progress = {
  level: 'B1',
  xp: 0,
  streak: 0,
  lastActiveDay: null,
  completed: {},
  saved: [],
  drills: { correct: 0, attempted: 0 },
  quiz: { correct: 0, attempted: 0 },
};

function load(): Progress {
  try {
    // Reading `localStorage` at all throws in a sandboxed iframe, so the access
    // itself has to sit inside the try — this runs at module load, and an
    // uncaught throw here would blank the page rather than degrade it.
    if (typeof localStorage === 'undefined') return EMPTY;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return { ...EMPTY, ...parsed, drills: { ...EMPTY.drills, ...parsed.drills }, quiz: { ...EMPTY.quiz, ...parsed.quiz } };
  } catch {
    return EMPTY;
  }
}

let state: Progress = load();
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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

  completeTask(task: TaskId, day: string = dayKey()) {
    set((p) => {
      const today = p.completed[day] ?? [];
      if (today.includes(task)) return p;
      const xp = TASKS.find((t) => t.id === task)?.xp ?? 0;
      return {
        ...p,
        xp: p.xp + xp,
        ...bumpStreak(p, day),
        completed: { ...p.completed, [day]: [...today, task] },
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

  toggleSaved(wordId: string) {
    set((p) => ({
      ...p,
      saved: p.saved.includes(wordId) ? p.saved.filter((id) => id !== wordId) : [...p.saved, wordId],
    }));
  },

  reset() {
    set(() => ({ ...EMPTY, completed: {}, saved: [] }));
  },
};

export function useProgress() {
  const progress = useSyncExternalStore(subscribe, snapshot, snapshot);
  const isDone = useCallback(
    (task: TaskId, day: string = dayKey()) => (progress.completed[day] ?? []).includes(task),
    [progress],
  );
  return { progress, isDone, ...actions };
}

/** Exported for tests. */
export const _internals = { daysBetween, bumpStreak, EMPTY };
