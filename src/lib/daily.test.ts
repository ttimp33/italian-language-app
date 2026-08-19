import { describe, expect, it } from 'vitest';
import {
  blankLineIndex,
  buildDailyLesson,
  dayKey,
  isAnswerCorrect,
  isConvAnswerCorrect,
  normalizeAnswer,
  pickFor,
  seededShuffle,
} from './daily';
import { _internals, actions, CONV_MASTERY } from './progress';
import { LEVELS } from '../data/types';
import { WORDS } from '../data/words';
import { ARTICLES } from '../data/articles';
import { CLIPS } from '../data/listening';
import { CLOZE } from '../data/exercises';
import { CONV_ITEMS } from '../data/conversation';
import { CONV_CLOZE } from '../data/conversationDrills';

describe('daily selection', () => {
  it('is stable for the same day and level', () => {
    const a = buildDailyLesson('B1', '2026-03-04');
    const b = buildDailyLesson('B1', '2026-03-04');
    expect(a.word.id).toBe(b.word.id);
    expect(a.article.id).toBe(b.article.id);
    expect(a.clip.id).toBe(b.clip.id);
    expect(a.cloze.map((c) => c.id)).toEqual(b.cloze.map((c) => c.id));
  });

  it('changes from one day to the next', () => {
    const a = buildDailyLesson('B2', '2026-03-04');
    const b = buildDailyLesson('B2', '2026-03-05');
    expect(a.word.id).not.toBe(b.word.id);
  });

  it('cycles through the whole bank before repeating a word', () => {
    for (const level of LEVELS) {
      const bank = WORDS.filter((w) => w.level === level);
      const seen = new Set<string>();
      for (let i = 0; i < bank.length; i++) {
        const d = new Date(Date.UTC(2026, 0, 1 + i));
        seen.add(buildDailyLesson(level, dayKey(d)).word.id);
      }
      expect(seen.size).toBe(bank.length);
    }
  });

  it('builds a complete lesson for every level', () => {
    for (const level of LEVELS) {
      const lesson = buildDailyLesson(level, '2026-06-15');
      expect(lesson.word.level).toBe(level);
      expect(lesson.article.level).toBe(level);
      expect(lesson.clip.level).toBe(level);
      expect(lesson.cloze).toHaveLength(4);
      expect(lesson.cloze.every((c) => c.level === level)).toBe(true);
      expect(lesson.vocabQuiz).toHaveLength(3);
      expect(lesson.convCards).toHaveLength(6);
      expect(lesson.convCards.every((c) => c.level === level)).toBe(true);
      expect(lesson.convCloze).toHaveLength(3);
      expect(lesson.convCloze.every((c) => c.level === level)).toBe(true);
    }
  });

  it('never returns duplicate drills within a day', () => {
    for (const level of LEVELS) {
      const lesson = buildDailyLesson(level, '2026-09-09');
      for (const ids of [
        lesson.cloze.map((c) => c.id),
        lesson.convCards.map((c) => c.id),
        lesson.convCloze.map((c) => c.id),
      ]) {
        expect(new Set(ids).size).toBe(ids.length);
      }
    }
  });

  it('generates vocab questions whose answer index points at the right option', () => {
    for (const level of LEVELS) {
      const { vocabQuiz } = buildDailyLesson(level, '2026-02-02');
      for (const q of vocabQuiz) {
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.options).toHaveLength(4);
        expect(new Set(q.options).size).toBe(4);
      }
    }
  });

  it('pickFor returns undefined only for an empty bank', () => {
    expect(pickFor([], '2026-01-01', 'A2', 'word')).toBeUndefined();
    expect(pickFor(['x'], '2026-01-01', 'A2', 'word')).toBe('x');
  });

  it('seededShuffle is deterministic and preserves membership', () => {
    const input = ['a', 'b', 'c', 'd'];
    expect(seededShuffle(input, 's')).toEqual(seededShuffle(input, 's'));
    expect([...seededShuffle(input, 's')].sort()).toEqual(input);
  });
});

describe('answer checking', () => {
  it('ignores case, accents, whitespace and apostrophe style', () => {
    expect(normalizeAnswer('  È Andata ')).toBe('e andata');
    expect(normalizeAnswer('l’ho')).toBe("l'ho");
  });

  it('accepts the canonical answer and the listed alternatives', () => {
    const ex = CLOZE.find((c) => c.id === 'a2-cz-1')!;
    expect(isAnswerCorrect('è andata', ex)).toBe(true);
    expect(isAnswerCorrect('E ANDATA', ex)).toBe(true);
    expect(isAnswerCorrect('è andato', ex)).toBe(false);
    expect(isAnswerCorrect('', ex)).toBe(false);
  });
});

describe('streak logic', () => {
  const { bumpStreak, daysBetween, EMPTY } = _internals;

  it('measures whole calendar days', () => {
    expect(daysBetween('2026-03-01', '2026-03-02')).toBe(1);
    expect(daysBetween('2026-02-28', '2026-03-01')).toBe(1); // 2026 is not a leap year
    expect(daysBetween('2026-12-31', '2027-01-01')).toBe(1);
  });

  it('starts at one, advances on consecutive days, resets after a gap', () => {
    expect(bumpStreak(EMPTY, '2026-03-01').streak).toBe(1);
    const day1 = { ...EMPTY, streak: 1, lastActiveDay: '2026-03-01' };
    expect(bumpStreak(day1, '2026-03-02').streak).toBe(2);
    expect(bumpStreak(day1, '2026-03-04').streak).toBe(1);
  });

  it('does not advance twice in the same day', () => {
    const day = { ...EMPTY, streak: 3, lastActiveDay: '2026-03-01' };
    expect(bumpStreak(day, '2026-03-01').streak).toBe(3);
  });
});

describe('content integrity', () => {
  it('has content at every level', () => {
    for (const level of LEVELS) {
      expect(WORDS.filter((w) => w.level === level).length).toBeGreaterThanOrEqual(8);
      expect(ARTICLES.filter((a) => a.level === level).length).toBeGreaterThanOrEqual(3);
      expect(CLIPS.filter((c) => c.level === level).length).toBeGreaterThanOrEqual(3);
      expect(CLOZE.filter((c) => c.level === level).length).toBeGreaterThanOrEqual(10);
    }
  });

  it('uses unique ids throughout', () => {
    const ids = [
      ...WORDS.map((w) => w.id),
      ...ARTICLES.map((a) => a.id),
      ...CLIPS.map((c) => c.id),
      ...CLOZE.map((c) => c.id),
      ...CONV_ITEMS.map((c) => c.id),
      ...CONV_CLOZE.map((c) => c.id),
    ];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('keeps every multiple-choice answer index in range', () => {
    const questions = [...ARTICLES.flatMap((a) => a.questions), ...CLIPS.flatMap((c) => c.questions)];
    expect(questions.length).toBeGreaterThan(0);
    for (const q of questions) {
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThan(q.options.length);
      expect(new Set(q.options).size).toBe(q.options.length);
    }
  });

  it('gives every cloze exercise exactly one blank that its answer fills', () => {
    for (const ex of CLOZE) {
      expect(ex.sentence.split('___').length - 1, `${ex.id} blank count`).toBe(1);
      expect(isAnswerCorrect(ex.answer, ex), `${ex.id} accepts its own answer`).toBe(true);
      expect(ex.explanation.length).toBeGreaterThan(20);
    }
  });

  it('pairs every article and transcript line with a translation', () => {
    for (const a of ARTICLES) {
      expect(a.paragraphs.every((p) => p.it.trim() && p.en.trim())).toBe(true);
    }
    for (const c of CLIPS) {
      expect(c.transcript.every((t) => t.it.trim() && t.en.trim())).toBe(true);
      expect(c.keyPhrases.every((k) => k.it.trim() && k.en.trim())).toBe(true);
    }
  });
});

describe('conversation bank', () => {
  it('covers every level with all four word roles represented', () => {
    for (const level of LEVELS) {
      const items = CONV_ITEMS.filter((c) => c.level === level);
      expect(items.length, `${level} items`).toBeGreaterThanOrEqual(10);
      // A level teaching only fillers, or only nouns, would not teach conversation.
      const categories = new Set(items.map((i) => i.category));
      expect(categories, `${level} categories`).toEqual(
        new Set(['segnale', 'connettivo', 'sostantivo', 'aggettivo']),
      );
      expect(CONV_CLOZE.filter((c) => c.level === level).length, `${level} drills`).toBeGreaterThanOrEqual(6);
    }
  });

  it('gives every card a function note and at least one worked example', () => {
    for (const item of CONV_ITEMS) {
      expect(item.role.length, `${item.id} role`).toBeGreaterThan(30);
      expect(item.examples.length, `${item.id} examples`).toBeGreaterThanOrEqual(1);
      expect(item.examples.every((e) => e.it.trim() && e.en.trim()), `${item.id} parallel text`).toBe(true);
    }
  });

  it('gives every dialogue exactly one blank, in a line that has a speaker', () => {
    for (const drill of CONV_CLOZE) {
      const blanks = drill.lines.filter((l) => l.it.includes('___'));
      expect(blanks.length, `${drill.id} blank count`).toBe(1);
      const at = blankLineIndex(drill);
      expect(at, `${drill.id} blank located`).toBeGreaterThanOrEqual(0);
      expect(drill.lines[at].speaker.trim(), `${drill.id} speaker`).not.toBe('');
      expect(drill.lines.every((l) => l.en.trim()), `${drill.id} translations`).toBe(true);
    }
  });

  it('accepts its own answer and every listed alternative', () => {
    for (const drill of CONV_CLOZE) {
      expect(isConvAnswerCorrect(drill.answer, drill), `${drill.id} own answer`).toBe(true);
      for (const alt of drill.accepted) {
        expect(isConvAnswerCorrect(alt, drill), `${drill.id} accepts ${alt}`).toBe(true);
      }
      expect(isConvAnswerCorrect('', drill)).toBe(false);
    }
  });

  it('offers hints that include the keyed answer, so the hint list is answerable', () => {
    for (const drill of CONV_CLOZE) {
      expect(drill.hints.length, `${drill.id} hint count`).toBeGreaterThanOrEqual(4);
      const answerable = drill.hints.some((h) => isConvAnswerCorrect(h, drill));
      expect(answerable, `${drill.id} hints contain a correct option`).toBe(true);
      expect(new Set(drill.hints).size, `${drill.id} distinct hints`).toBe(drill.hints.length);
    }
  });
});

describe('flashcard grading', () => {
  it('advances on recall and resets to zero on a miss', () => {
    actions.reset();
    const id = CONV_ITEMS[0].id;
    for (let i = 0; i < CONV_MASTERY; i++) actions.gradeConvCard(id, true);
    expect(_internals.read().convDeck[id]).toBe(CONV_MASTERY);
    actions.gradeConvCard(id, false);
    expect(_internals.read().convDeck[id]).toBe(0);
    actions.reset();
  });
});
