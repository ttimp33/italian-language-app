import { beforeEach, describe, expect, it } from 'vitest';
import {
  EASE_MAX,
  EASE_MIN,
  EASE_START,
  LEARNED_INTERVAL,
  SESSION_CAP,
  addDays,
  dueCards,
  isDue,
  isLearned,
  newCard,
  schedule,
  summarise,
  type SrsCard,
} from './srs';
import { actions, setActiveUser, _internals } from './progress';

const TODAY = '2026-06-01';

describe('scheduling', () => {
  it('starts a card due immediately, with no interval', () => {
    const card = newCard('lx-a1-casa', TODAY);
    expect(card.due).toBe(TODAY);
    expect(card.interval).toBe(0);
    expect(card.ease).toBe(EASE_START);
    expect(isDue(card, TODAY)).toBe(true);
  });

  it('walks a new card out along fixed first steps, then by ease', () => {
    let card = newCard('x', TODAY);
    card = schedule(card, 'good', TODAY);
    expect(card.interval).toBe(1);
    expect(card.due).toBe('2026-06-02');

    card = schedule(card, 'good', '2026-06-02');
    expect(card.interval).toBe(3);

    // Only now does the ease factor drive the growth.
    card = schedule(card, 'good', '2026-06-05');
    expect(card.interval).toBe(Math.round(3 * EASE_START));
    expect(card.due).toBe(addDays('2026-06-05', card.interval));
  });

  it('never traps a card at a zero-length interval', () => {
    // Multiplying interval 0 by any ease gives 0 — the classic hand-rolled SM-2
    // bug that loops a card inside the same session for ever.
    let card = newCard('x', TODAY);
    for (const grade of ['good', 'easy'] as const) {
      const next = schedule({ ...card }, grade, TODAY);
      expect(next.interval, `${grade} from zero`).toBeGreaterThan(0);
      expect(next.due).not.toBe(TODAY);
    }
    card = schedule(card, 'again', TODAY);
    expect(card.interval).toBe(0);
    // But a lapse must still be recoverable on the next good answer.
    expect(schedule(card, 'good', TODAY).interval).toBe(1);
  });

  it('sends a lapse back to the start of the ladder and lowers the ease', () => {
    const mature: SrsCard = { id: 'x', due: TODAY, interval: 30, ease: 2.5, reps: 6, lapses: 0 };
    const lapsed = schedule(mature, 'again', TODAY);
    expect(lapsed.interval).toBe(0);
    expect(lapsed.due).toBe(TODAY);
    expect(lapsed.ease).toBeCloseTo(2.3, 5);
    expect(lapsed.lapses).toBe(1);
  });

  it('grows the interval faster for easy than for good', () => {
    const base: SrsCard = { id: 'x', due: TODAY, interval: 10, ease: 2.5, reps: 4, lapses: 0 };
    const good = schedule(base, 'good', TODAY);
    const easy = schedule(base, 'easy', TODAY);
    expect(easy.interval).toBeGreaterThan(good.interval);
    expect(easy.ease).toBeGreaterThan(good.ease);
  });

  it('keeps the ease inside its bounds however it is graded', () => {
    let card = newCard('x', TODAY);
    for (let i = 0; i < 20; i++) card = schedule(card, 'again', TODAY);
    expect(card.ease).toBe(EASE_MIN);

    card = newCard('y', TODAY);
    for (let i = 0; i < 20; i++) card = schedule(card, 'easy', card.due);
    expect(card.ease).toBeLessThanOrEqual(EASE_MAX);
  });

  it('counts every grade as a repetition', () => {
    let card = newCard('x', TODAY);
    card = schedule(card, 'good', TODAY);
    card = schedule(card, 'again', TODAY);
    card = schedule(card, 'easy', TODAY);
    expect(card.reps).toBe(3);
    expect(card.lapses).toBe(1);
  });

  it('treats a long interval as retained', () => {
    expect(isLearned({ id: 'x', due: TODAY, interval: LEARNED_INTERVAL, ease: 2.5, reps: 5, lapses: 0 })).toBe(true);
    expect(isLearned({ id: 'x', due: TODAY, interval: 3, ease: 2.5, reps: 2, lapses: 0 })).toBe(false);
  });
});

describe('the queue', () => {
  const card = (id: string, due: string, lapses = 0): SrsCard => ({
    id,
    due,
    interval: 5,
    ease: 2.5,
    reps: 3,
    lapses,
  });

  it('takes what is due and leaves what is not', () => {
    const cards = [card('a', '2026-05-30'), card('b', TODAY), card('c', '2026-06-09')];
    expect(dueCards(cards, TODAY).map((c) => c.id)).toEqual(['a', 'b']);
  });

  it('puts the most overdue first, then the words that keep slipping', () => {
    const cards = [card('fresh', TODAY, 0), card('slippery', TODAY, 4), card('old', '2026-05-20', 0)];
    expect(dueCards(cards, TODAY).map((c) => c.id)).toEqual(['old', 'slippery', 'fresh']);
  });

  it('caps a session so a long absence does not produce an unusable backlog', () => {
    const many = Array.from({ length: 60 }, (_, i) => card(`c${i}`, '2026-05-01'));
    expect(dueCards(many, TODAY)).toHaveLength(SESSION_CAP);
  });

  it('summarises the deck and forecasts the week', () => {
    const cards = [
      card('a', '2026-05-01'), // overdue
      card('b', TODAY),
      card('c', '2026-06-03'),
      { ...card('d', '2026-07-01'), interval: 30 },
    ];
    const s = summarise(cards, TODAY);
    expect(s.total).toBe(4);
    expect(s.due).toBe(2);
    expect(s.learned).toBe(1);
    expect(s.learning).toBe(3);
    expect(s.forecast).toHaveLength(7);
    // Day zero absorbs the overdue backlog, which is what the learner faces.
    expect(s.forecast[0].count).toBe(2);
    expect(s.forecast[2].count).toBe(1);
  });
});

describe('date arithmetic', () => {
  it('crosses month and year boundaries', () => {
    expect(addDays('2026-01-31', 1)).toBe('2026-02-01');
    expect(addDays('2026-02-28', 1)).toBe('2026-03-01'); // 2026 is not a leap year
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01');
    expect(addDays('2026-06-01', 0)).toBe('2026-06-01');
  });
});

describe('the store side of it', () => {
  beforeEach(() => {
    setActiveUser('tyler');
    actions.reset();
  });

  it('adds a scene’s words to the schedule only when the scene is finished', () => {
    actions.completeScene('sc-a1-bar', ['lx-a1-caffe', 'lx-a1-prendere'], TODAY);
    const p = _internals.read();
    expect(Object.keys(p.srs).sort()).toEqual(['lx-a1-caffe', 'lx-a1-prendere']);
    expect(p.scenesDone).toEqual(['sc-a1-bar']);
    expect(p.srs['lx-a1-caffe'].due).toBe(TODAY);
  });

  it('does not reset a word’s progress when its scene is replayed', () => {
    actions.completeScene('sc-a1-bar', ['lx-a1-caffe'], TODAY);
    actions.gradeCard('lx-a1-caffe', 'good', TODAY);
    const afterGrade = _internals.read().srs['lx-a1-caffe'];
    expect(afterGrade.interval).toBe(1);

    // Replaying the scene must not knock a word back to new.
    actions.completeScene('sc-a1-bar', ['lx-a1-caffe'], TODAY);
    expect(_internals.read().srs['lx-a1-caffe']).toEqual(afterGrade);
    // And the scene is not listed twice.
    expect(_internals.read().scenesDone).toEqual(['sc-a1-bar']);
  });

  it('adds words without any scene being finished', () => {
    // The gate this replaces: words only entered the schedule once every
    // exercise in a scene had been answered, which left most of a thousand-word
    // bank unreachable.
    actions.addWords(['lx-a1-casa', 'lx-a1-pane'], TODAY);
    const p = _internals.read();
    expect(Object.keys(p.srs).sort()).toEqual(['lx-a1-casa', 'lx-a1-pane']);
    expect(p.scenesDone).toEqual([]);
    expect(p.srs['lx-a1-casa'].due).toBe(TODAY);
  });

  it('never resets a word that is added again', () => {
    actions.addWords(['lx-a1-casa'], TODAY);
    actions.gradeCard('lx-a1-casa', 'easy', TODAY);
    const graded = _internals.read().srs['lx-a1-casa'];
    expect(graded.interval).toBe(3);

    actions.addWords(['lx-a1-casa'], TODAY);
    expect(_internals.read().srs['lx-a1-casa']).toEqual(graded);
  });

  it('removes a word from the schedule on request', () => {
    actions.addWords(['lx-a1-casa', 'lx-a1-pane'], TODAY);
    actions.removeWord('lx-a1-casa');
    expect(Object.keys(_internals.read().srs)).toEqual(['lx-a1-pane']);
    // Removing something absent is a no-op, not a crash.
    actions.removeWord('lx-a1-nonexistent');
    expect(Object.keys(_internals.read().srs)).toEqual(['lx-a1-pane']);
  });

  it('grades a card that has never been seen without throwing', () => {
    actions.gradeCard('lx-a1-casa', 'good', TODAY);
    expect(_internals.read().srs['lx-a1-casa'].interval).toBe(1);
  });

  it('clears the schedule on reset', () => {
    actions.completeScene('sc-a1-bar', ['lx-a1-caffe'], TODAY);
    actions.reset();
    expect(_internals.read().srs).toEqual({});
    expect(_internals.read().scenesDone).toEqual([]);
  });
});
