import type {
  Article,
  ClozeExercise,
  ConvCloze,
  ConvItem,
  GrammarLesson,
  Level,
  ListeningClip,
  PhonicsLesson,
  Question,
  Scene,
  WordEntry,
} from '../data/types';
import { WORDS } from '../data/words';
import { ARTICLES } from '../data/articles';
import { CLIPS } from '../data/listening';
import { CLOZE } from '../data/exercises';
import { CONV_ITEMS } from '../data/conversation';
import { CONV_CLOZE } from '../data/conversationDrills';
import { PHONICS } from '../data/phonics';
import { GRAMMAR } from '../data/grammar';
import { SCENES } from '../data/scenes';

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

/**
 * Pick one item deterministically from a list for a given day/level/slot.
 * Rotates through the whole list before repeating, offset by level so two
 * levels never march in lockstep.
 */
export function pickFor<T>(items: T[], day: string, level: Level, slot: string): T | undefined {
  if (items.length === 0) return undefined;
  const daysSinceEpoch = Math.floor(Date.parse(`${day}T00:00:00`) / 86_400_000);
  const offset = hash(`${level}:${slot}`) % items.length;
  const index = (((daysSinceEpoch + offset) % items.length) + items.length) % items.length;
  return items[index];
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

export interface DailyLesson {
  day: string;
  level: Level;
  word: WordEntry;
  article: Article;
  clip: ListeningClip;
  cloze: ClozeExercise[];
  vocabQuiz: Question[];
  /** Conversation cards for the flashcard deck. */
  convCards: ConvItem[];
  /** Dialogue gap-fills using those same registers. */
  convCloze: ConvCloze[];
  /**
   * Pronunciation and grammar exist only where a level needs them — a C1
   * learner does not need the alphabet — so both are optional, and the UI
   * shows their tabs only when the day's lesson actually has one.
   */
  phonics?: PhonicsLesson;
  grammar?: GrammarLesson;
  /** Vocabulary-in-context scene; A1 and A2 only, where the core is built. */
  scene?: Scene;
}

/**
 * Take `count` consecutive items from a bank, wrapping around, starting at a
 * day-seeded offset. Consecutive rather than random so a day's set never
 * repeats an item, and the window advances predictably across days.
 */
function windowFrom<T>(bank: T[], seed: string, count: number): T[] {
  if (bank.length === 0) return [];
  const start = hash(seed) % bank.length;
  return Array.from({ length: Math.min(count, bank.length) }, (_, i) => bank[(start + i) % bank.length]);
}

/**
 * Build a vocabulary question from a word's own example sentence: blank out the
 * headword, offer three same-level distractors. Testing recognition in context
 * beats testing an isolated gloss.
 */
function buildVocabQuestions(level: Level, day: string, target: WordEntry, pool: WordEntry[]): Question[] {
  const others = pool.filter((w) => w.id !== target.id);
  const questions: Question[] = [];

  // 1. The word in context.
  const example = target.examples[0];
  const head = target.lemma.replace(/^(il|lo|la|l')\s*/i, '').replace(/\s*\(.*\)$/, '');
  const stem = head.split(/\s+/)[0].slice(0, Math.max(4, Math.floor(head.length * 0.6)));
  const blanked = example.it.replace(new RegExp(stem + '\\S*', 'i'), '___');
  const contextDistractors = seededShuffle(others, `${day}:${level}:ctx`).slice(0, 3).map((w) => w.lemma);
  const contextOptions = seededShuffle([target.lemma, ...contextDistractors], `${day}:${level}:ctxopt`);
  questions.push({
    id: `vq-ctx-${target.id}`,
    prompt: blanked.includes('___') ? blanked : `___ — ${example.it}`,
    options: contextOptions,
    answer: contextOptions.indexOf(target.lemma),
    explanation: `${example.it} — "${example.en}"`,
  });

  // 2. Meaning recall, drawn from the same level so the distractors bite.
  const glossDistractors = seededShuffle(others, `${day}:${level}:gloss`).slice(0, 3).map((w) => w.gloss);
  const glossOptions = seededShuffle([target.gloss, ...glossDistractors], `${day}:${level}:glossopt`);
  questions.push({
    id: `vq-gloss-${target.id}`,
    prompt: `Che cosa significa «${target.lemma}»?`,
    options: glossOptions,
    answer: glossOptions.indexOf(target.gloss),
    explanation: target.nuance,
  });

  // 3. Collocation check — which pairing a native speaker would actually produce.
  const collocation = target.collocations[0];
  const collocDistractors = seededShuffle(others, `${day}:${level}:coll`)
    .slice(0, 3)
    .map((w) => w.collocations[0]);
  const collocOptions = seededShuffle([collocation, ...collocDistractors], `${day}:${level}:collopt`);
  questions.push({
    id: `vq-coll-${target.id}`,
    prompt: `Quale espressione contiene «${target.lemma}» in una combinazione corrente?`,
    options: collocOptions,
    answer: collocOptions.indexOf(collocation),
    explanation: `Collocazioni frequenti: ${target.collocations.join(' · ')}`,
  });

  return questions;
}

export function buildDailyLesson(level: Level, day: string = dayKey()): DailyLesson {
  const words = WORDS.filter((w) => w.level === level);
  const articles = ARTICLES.filter((a) => a.level === level);
  const clips = CLIPS.filter((c) => c.level === level);
  const drills = CLOZE.filter((c) => c.level === level);

  const word = pickFor(words, day, level, 'word')!;
  const article = pickFor(articles, day, level, 'article')!;
  const clip = pickFor(clips, day, level, 'clip')!;

  return {
    day,
    level,
    word,
    article,
    clip,
    // Four drills a day, rotating through the level's bank without repeats.
    cloze: windowFrom(drills, `${day}:${level}:cloze`, 4),
    vocabQuiz: buildVocabQuestions(level, day, word, words),
    convCards: windowFrom(
      CONV_ITEMS.filter((c) => c.level === level),
      `${day}:${level}:convcards`,
      6,
    ),
    convCloze: windowFrom(
      CONV_CLOZE.filter((c) => c.level === level),
      `${day}:${level}:convcloze`,
      3,
    ),
    phonics: pickFor(
      PHONICS.filter((p) => p.level === level),
      day,
      level,
      'phonics',
    ),
    grammar: pickFor(
      GRAMMAR.filter((g) => g.level === level),
      day,
      level,
      'grammar',
    ),
    scene: pickFor(
      SCENES.filter((sc) => sc.level === level),
      day,
      level,
      'scene',
    ),
  };
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
