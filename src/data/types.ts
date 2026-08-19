export type Level = 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export const LEVELS: Level[] = ['A2', 'B1', 'B2', 'C1', 'C2'];

export const LEVEL_BLURB: Record<Level, string> = {
  A2: 'Elementary — everyday routines, past and future basics, concrete vocabulary.',
  B1: 'Intermediate — opinions, hypotheticals, the subjunctive enters the picture.',
  B2: 'Upper intermediate — abstract argument, register control, complex tenses.',
  C1: 'Advanced — nuance, implicit constructions, journalistic and academic prose.',
  C2: 'Mastery — literary and bureaucratic registers, idiom, near-native precision.',
};

/** Suggested TTS rate per level: lower levels get a touch slower, never sluggish. */
export const LEVEL_RATE: Record<Level, number> = {
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
