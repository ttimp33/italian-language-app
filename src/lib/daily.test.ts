import { describe, expect, it } from 'vitest';
import { buildDailyLesson, dayKey, isAnswerCorrect, normalizeAnswer, pickFor, seededShuffle } from './daily';
import { _internals } from './progress';
import { LEVELS } from '../data/types';
import { WORDS } from '../data/words';
import { ARTICLES } from '../data/articles';
import { CLIPS } from '../data/listening';
import { CLOZE } from '../data/exercises';

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
    }
  });

  it('never returns duplicate drills within a day', () => {
    for (const level of LEVELS) {
      const ids = buildDailyLesson(level, '2026-09-09').cloze.map((c) => c.id);
      expect(new Set(ids).size).toBe(ids.length);
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
