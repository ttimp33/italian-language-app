export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const LEVEL_BLURB: Record<Level, string> = {
  A1: 'Beginner — the sounds of Italian, everyday words, and your first sentences.',
  A2: 'Elementary — everyday routines, past and future basics, concrete vocabulary.',
  B1: 'Intermediate — opinions, hypotheticals, the subjunctive enters the picture.',
  B2: 'Upper intermediate — abstract argument, register control, complex tenses.',
  C1: 'Advanced — nuance, implicit constructions, journalistic and academic prose.',
  C2: 'Mastery — literary and bureaucratic registers, idiom, near-native precision.',
};

/** Suggested TTS rate per level: lower levels get a touch slower, never sluggish. */
export const LEVEL_RATE: Record<Level, number> = {
  // Slow enough at A1 to hear every syllable, which is the whole point at that stage.
  A1: 0.78,
  A2: 0.85,
  B1: 0.92,
  B2: 0.97,
  C1: 1.0,
  C2: 1.05,
};

export interface Example {
  it: string;
  en: string;
}

export type PartOfSpeech =
  | 'sostantivo'
  | 'verbo'
  | 'aggettivo'
  | 'avverbio'
  | 'espressione'
  | 'locuzione';

export interface WordEntry {
  id: string;
  level: Level;
  lemma: string;
  pos: PartOfSpeech;
  /** Grammatical gender for nouns. */
  gender?: 'm' | 'f' | 'm/f';
  ipa: string;
  gloss: string;
  /** Usage note written for a native English speaker. */
  nuance: string;
  examples: Example[];
  collocations: string[];
  /** Words in the same family worth learning alongside. */
  related?: string[];
  /** Trap for English speakers, when there is one. */
  falseFriend?: string;
}

export interface Question {
  id: string;
  prompt: string;
  options: string[];
  /** Index into options. */
  answer: number;
  explanation: string;
}

export interface Article {
  id: string;
  level: Level;
  title: string;
  titleEn: string;
  category: string;
  minutes: number;
  /** Parallel text, paragraph by paragraph. */
  paragraphs: Example[];
  glossary: { term: string; gloss: string }[];
  questions: Question[];
}

export interface ListeningClip {
  id: string;
  level: Level;
  title: string;
  /** The fictional programme this clip is presented as coming from. */
  show: string;
  setting: string;
  /** Sentence-level so the player can highlight, repeat and shadow one line at a time. */
  transcript: Example[];
  keyPhrases: Example[];
  questions: Question[];
}

/**
 * Conversational vocabulary is sorted by the job a word does in live speech,
 * which is not the same as its part of speech: `insomma` is an adverb in a
 * dictionary and a turn-management device in a conversation.
 */
export type ConvCategory = 'segnale' | 'connettivo' | 'sostantivo' | 'aggettivo';

export const CONV_CATEGORY_LABEL: Record<ConvCategory, string> = {
  segnale: 'segnale discorsivo',
  connettivo: 'connettivo',
  sostantivo: 'sostantivo',
  aggettivo: 'aggettivo',
};

export const CONV_CATEGORY_EN: Record<ConvCategory, string> = {
  segnale: 'filler / discourse marker',
  connettivo: 'transition word',
  sostantivo: 'noun',
  aggettivo: 'adjective',
};

export type Register = 'informale' | 'neutro' | 'formale';

export interface ConvItem {
  id: string;
  level: Level;
  term: string;
  category: ConvCategory;
  ipa?: string;
  gloss: string;
  /** What the word *does* in a conversation — the part a dictionary gloss misses. */
  role: string;
  register: Register;
  /** Short exchanges: these words only make sense as turns, not as citations. */
  examples: Example[];
  pitfall?: string;
}

export interface ConvLine {
  speaker: string;
  it: string;
  en: string;
}

export interface ConvCloze {
  id: string;
  level: Level;
  context: string;
  /** Exactly one line contains `___`. */
  lines: ConvLine[];
  answer: string;
  accepted: string[];
  /** Candidates revealed on request, so one drill serves recall and recognition. */
  hints: string[];
  explanation: string;
}

export interface ClozeExercise {
  id: string;
  level: Level;
  /** The grammar point under test, e.g. "congiuntivo imperfetto". */
  skill: string;
  /** Sentence containing exactly one `___` placeholder. */
  sentence: string;
  answer: string;
  /** Other spellings/forms accepted as correct (compared case- and accent-insensitively). */
  accepted: string[];
  hint: string;
  translation: string;
  explanation: string;
}

/* ───────────────────── pronunciation (A1 and up) ───────────────────── */

export interface PhonicsExample {
  it: string;
  ipa: string;
  en: string;
}

export interface PhonicsRow {
  /** The letter or letter combination being taught, e.g. "ci / ce" or "gn". */
  grapheme: string;
  ipa: string;
  /** How to make the sound, written for an English speaker. */
  note: string;
  examples: PhonicsExample[];
}

export interface PhonicsLesson {
  id: string;
  level: Level;
  title: string;
  focus: string;
  intro: string;
  rows: PhonicsRow[];
  /** Pairs that differ in one sound, where getting it wrong changes the word. */
  minimalPairs?: { a: string; b: string; note: string }[];
  tip: string;
  questions: Question[];
}

/* ───────────────────── grammar lessons (A1 and up) ───────────────────── */

export interface GrammarTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface GrammarLesson {
  id: string;
  level: Level;
  title: string;
  focus: string;
  explanation: string;
  tables: GrammarTable[];
  examples: Example[];
  pitfall?: string;
  questions: Question[];
}

/* ───────────────── core lexicon (A1–A2 vocabulary building) ───────────────── */

/**
 * Parts of speech for the frequency lexicon. Wider than `PartOfSpeech` because
 * the high-frequency core is dominated by function words — the first hundred
 * items of any Italian frequency list are mostly prepositions and pronouns.
 */
export type LexPos =
  | 'verbo'
  | 'sostantivo'
  | 'aggettivo'
  | 'avverbio'
  | 'pronome'
  | 'preposizione'
  | 'congiunzione'
  | 'numerale'
  | 'espressione';

/**
 * Semantic clusters. Vocabulary is learned and retrieved by situation, not
 * alphabetically, so the bank is grouped the way a speaker reaches for it.
 */
export type LexCluster =
  | 'grammaticali'
  | 'persone'
  | 'famiglia'
  | 'casa'
  | 'cibo'
  | 'città'
  | 'viaggio'
  | 'lavoro'
  | 'scuola'
  | 'tempo'
  | 'corpo e salute'
  | 'acquisti'
  | 'sentimenti'
  | 'quantità'
  | 'azioni'
  | 'qualità';

export interface LexEntry {
  id: string;
  /** Position in the high-frequency core; 1 is the commonest. */
  rank: number;
  level: Level;
  lemma: string;
  pos: LexPos;
  gender?: 'm' | 'f';
  gloss: string;
  cluster: LexCluster;
  /**
   * A chunk, not a definition: the shape the word actually arrives in. Learning
   * `mano` alone is near-useless; learning `dammi una mano` is immediately usable.
   */
  chunk: Example;
}

/**
 * A situation that teaches its words by using them. The dialogue comes first
 * and the word list is derived from it, which is the opposite of a flashcard
 * deck and the reason this exists.
 */
export interface Scene {
  id: string;
  level: Level;
  title: string;
  situation: string;
  /** Lexicon ids this scene puts to work. */
  teaches: string[];
  lines: ConvLine[];
  /** Pragmatics: what an Italian would actually say here, and why. */
  notes: { point: string; detail: string }[];
  /** Gap-fills taken from the dialogue itself, so practice stays in context. */
  practice: {
    id: string;
    sentence: string;
    answer: string;
    accepted: string[];
    why: string;
  }[];
  /**
   * Discrimination task: the grammatical calque against what a native produces.
   * This is where "how Italians actually use it" is taught explicitly.
   */
  choices: {
    id: string;
    prompt: string;
    options: string[];
    answer: number;
    why: string;
  }[];
}
