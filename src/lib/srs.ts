import { dayKey } from './daily';

/**
 * Spaced repetition for the core lexicon.
 *
 * A simplified SM-2: each card carries an interval in days and an ease factor
 * that rises when recall is easy and falls when it is not. The point of the
 * ease factor is that the schedule adapts per word — `però` and `ottemperare`
 * should not come back on the same cadence just because they were learned on
 * the same day.
 *
 * Deliberately *not* a Leitner box ladder. Fixed boxes give every word the same
 * curve, which wastes reviews on the words you already own and under-serves the
 * handful that keep slipping.
 */

export type Grade = 'again' | 'good' | 'easy';

export interface SrsCard {
  /** Lexicon entry id. */
  id: string;
  /** Day the card next comes up, as YYYY-MM-DD. */
  due: string;
  /** Current spacing in days. Zero means "still being learned". */
  interval: number;
  /** SM-2 ease factor; higher means the interval grows faster. */
  ease: number;
  reps: number;
  lapses: number;
}

export const EASE_MIN = 1.3;
export const EASE_MAX = 2.8;
export const EASE_START = 2.5;

/** Cap on one sitting, so a long absence does not produce an unusable backlog. */
export const SESSION_CAP = 20;

export function addDays(day: string, days: number): string {
  const [y, m, d] = day.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d + days));
  return dayKey(new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

/** A brand-new card, due immediately. */
export function newCard(id: string, today: string = dayKey()): SrsCard {
  return { id, due: today, interval: 0, ease: EASE_START, reps: 0, lapses: 0 };
}

function clampEase(ease: number): number {
  return Math.min(EASE_MAX, Math.max(EASE_MIN, Number(ease.toFixed(2))));
}

/**
 * Apply a grade and return the rescheduled card.
 *
 * The first two successful intervals are fixed (1 day, then 3) rather than
 * derived from the ease factor. Multiplying a zero-length interval by an ease
 * factor yields zero, which is the classic way a hand-rolled SM-2 traps a card
 * in a same-day loop for ever.
 */
export function schedule(card: SrsCard, grade: Grade, today: string = dayKey()): SrsCard {
  if (grade === 'again') {
    return {
      ...card,
      // Back to the start of the ladder, and due again in this same session.
      interval: 0,
      due: today,
      ease: clampEase(card.ease - 0.2),
      reps: card.reps + 1,
      lapses: card.lapses + 1,
    };
  }

  const ease = grade === 'easy' ? clampEase(card.ease + 0.15) : card.ease;

  let interval: number;
  if (card.interval === 0) {
    interval = grade === 'easy' ? 3 : 1;
  } else if (card.interval === 1) {
    interval = grade === 'easy' ? 6 : 3;
  } else {
    interval = Math.round(card.interval * ease * (grade === 'easy' ? 1.3 : 1));
  }

  return {
    ...card,
    interval,
    due: addDays(today, interval),
    ease,
    reps: card.reps + 1,
  };
}

export function isDue(card: SrsCard, today: string = dayKey()): boolean {
  return card.due <= today;
}

/**
 * The cards to study now: everything due, oldest first, then by how often it
 * has been forgotten — the words that keep slipping earn their place at the
 * front — and capped so a session stays finishable.
 */
export function dueCards(cards: SrsCard[], today: string = dayKey(), cap = SESSION_CAP): SrsCard[] {
  return cards
    .filter((c) => isDue(c, today))
    .sort((a, b) => a.due.localeCompare(b.due) || b.lapses - a.lapses || a.id.localeCompare(b.id))
    .slice(0, cap);
}

/** How many cards a word has to survive before it counts as retained. */
export const LEARNED_INTERVAL = 21;

export function isLearned(card: SrsCard): boolean {
  return card.interval >= LEARNED_INTERVAL;
}

export interface SrsSummary {
  total: number;
  due: number;
  learning: number;
  learned: number;
  /** Cards due on each of the next seven days, for the forecast strip. */
  forecast: { day: string; count: number }[];
}

export function summarise(cards: SrsCard[], today: string = dayKey()): SrsSummary {
  const forecast = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(today, i);
    // Day zero absorbs everything overdue, which is what the learner faces.
    const count = cards.filter((c) => (i === 0 ? c.due <= day : c.due === day)).length;
    return { day, count };
  });

  return {
    total: cards.length,
    due: cards.filter((c) => isDue(c, today)).length,
    learning: cards.filter((c) => !isLearned(c)).length,
    learned: cards.filter(isLearned).length,
    forecast,
  };
}
