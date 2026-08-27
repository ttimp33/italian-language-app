import type { ClozeExercise, ConvCloze, Question, WordEntry } from '../data/types';

/** Local calendar day as YYYY-MM-DD (not UTC — the learner's day is the local one). */
export function dayKey(d: Date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Stable 32-bit hash (FNV-1a). Same input always yields the same lesson. */
export function hash(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Deterministic shuffle, so option order is stable for a given seed. */
export function seededShuffle<T>(items: T[], seed: string): T[] {
  const out = [...items];
  let h = hash(seed);
  for (let i = out.length - 1; i > 0; i--) {
    h = (Math.imul(h, 0x01000193) ^ i) >>> 0;
    const j = h % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Build three questions from a word's own entry: the word in context, its
 * meaning, and a collocation. Seeded by the word rather than the date, so the
 * same step always asks the same thing — a course step you retry must not
 * quietly become a different exercise.
 */
export function buildVocabQuestions(target: WordEntry, pool: WordEntry[]): Question[] {
  const seed = target.id;
  const others = pool.filter((w) => w.id !== target.id);
  const questions: Question[] = [];

  // 1. The word in context.
  const example = target.examples[0];
  const head = target.lemma.replace(/^(il|lo|la|l')\s*/i, '').replace(/\s*\(.*\)$/, '');
  const stem = head.split(/\s+/)[0].slice(0, Math.max(4, Math.floor(head.length * 0.6)));
  const blanked = example.it.replace(new RegExp(stem + '\\S*', 'i'), '___');
  const contextDistractors = seededShuffle(others, `${seed}:ctx`).slice(0, 3).map((w) => w.lemma);
  const contextOptions = seededShuffle([target.lemma, ...contextDistractors], `${seed}:ctxopt`);
  questions.push({
    id: `vq-ctx-${target.id}`,
    prompt: blanked.includes('___') ? blanked : `___ — ${example.it}`,
    options: contextOptions,
    answer: contextOptions.indexOf(target.lemma),
    explanation: `${example.it} — "${example.en}"`,
  });

  // 2. Meaning recall, drawn from the same level so the distractors bite.
  const glossDistractors = seededShuffle(others, `${seed}:gloss`).slice(0, 3).map((w) => w.gloss);
  const glossOptions = seededShuffle([target.gloss, ...glossDistractors], `${seed}:glossopt`);
  questions.push({
    id: `vq-gloss-${target.id}`,
    prompt: `Che cosa significa «${target.lemma}»?`,
    options: glossOptions,
    answer: glossOptions.indexOf(target.gloss),
    explanation: target.nuance,
  });

  // 3. Collocation check — which pairing a native speaker would actually produce.
  const collocation = target.collocations[0];
  const collocDistractors = seededShuffle(others, `${seed}:coll`)
    .slice(0, 3)
    .map((w) => w.collocations[0]);
  const collocOptions = seededShuffle([collocation, ...collocDistractors], `${seed}:collopt`);
  questions.push({
    id: `vq-coll-${target.id}`,
    prompt: `Quale espressione contiene «${target.lemma}» in una combinazione corrente?`,
    options: collocOptions,
    answer: collocOptions.indexOf(collocation),
    explanation: `Collocazioni frequenti: ${target.collocations.join(' · ')}`,
  });

  return questions;
}

/** Locate the line carrying the blank in a dialogue drill. */
export function blankLineIndex(item: ConvCloze): number {
  return item.lines.findIndex((l) => l.it.includes('___'));
}

export function isConvAnswerCorrect(input: string, item: ConvCloze): boolean {
  const given = normalizeAnswer(input);
  if (!given) return false;
  return [item.answer, ...item.accepted].some((a) => normalizeAnswer(a) === given);
}

/**
 * Compare a typed answer to the expected one: case, accents, apostrophe style
 * and extra whitespace should never cost a learner a point.
 */
export function normalizeAnswer(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, ' ');
}

export function isAnswerCorrect(input: string, exercise: ClozeExercise): boolean {
  const given = normalizeAnswer(input);
  if (!given) return false;
  return [exercise.answer, ...exercise.accepted].some((a) => normalizeAnswer(a) === given);
}
