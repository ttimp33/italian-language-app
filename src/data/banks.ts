import { ARTICLES } from './articles';
import { CONV_ITEMS } from './conversation';
import { CONV_CLOZE } from './conversationDrills';
import { CLOZE } from './exercises';
import { GRAMMAR } from './grammar';
import { CLIPS } from './listening';
import { PHONICS } from './phonics';
import { WORDS } from './words';
import type { StepKind } from './types';

/**
 * By-id lookups for everything the course path can point at.
 *
 * The curriculum stores references, so resolving one is the hot path of the
 * whole app. Building the maps once here also gives the test suite a single
 * place to check that every reference in the course resolves to real content.
 */
export const BANKS = {
  phonics: new Map(PHONICS.map((x) => [x.id, x])),
  grammar: new Map(GRAMMAR.map((x) => [x.id, x])),
  word: new Map(WORDS.map((x) => [x.id, x])),
  article: new Map(ARTICLES.map((x) => [x.id, x])),
  listening: new Map(CLIPS.map((x) => [x.id, x])),
  drills: new Map(CLOZE.map((x) => [x.id, x])),
  conversation: new Map(CONV_ITEMS.map((x) => [x.id, x])),
  convdrill: new Map(CONV_CLOZE.map((x) => [x.id, x])),
} as const;

/** Every id a step of this kind could legitimately name. */
export function bankIds(kind: StepKind): string[] {
  return [...BANKS[kind].keys()];
}

/** A short, human title for a step, for the unit list. */
export function stepTitle(kind: StepKind, refs: string[]): string {
  switch (kind) {
    case 'phonics':
    case 'grammar':
      return BANKS[kind].get(refs[0])?.title ?? refs[0];
    case 'word':
      return BANKS.word.get(refs[0])?.lemma ?? refs[0];
    case 'article':
      return BANKS.article.get(refs[0])?.title ?? refs[0];
    case 'listening':
      return BANKS.listening.get(refs[0])?.title ?? refs[0];
    case 'drills':
      return `${refs.length} esercizi · ${BANKS.drills.get(refs[0])?.skill ?? ''}`.trim();
    case 'conversation':
      return `${refs.length} carte · ${refs.map((r) => BANKS.conversation.get(r)?.term).filter(Boolean).join(', ')}`;
    case 'convdrill':
      return `${refs.length} dialoghi`;
  }
}
