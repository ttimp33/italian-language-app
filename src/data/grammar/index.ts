import type { GrammarLesson } from '../types';
import { GRAMMAR_A1 } from './a1';
import { GRAMMAR_A2 } from './a2';
import { GRAMMAR_B1 } from './b1';

/**
 * Every grammar lesson in the app, one file per level.
 *
 * The order of this array carries no meaning: what a learner meets, and when,
 * is decided by the course path in `curriculum.ts`. Keeping the two apart means
 * a lesson can be re-sequenced without touching its content.
 */
export const GRAMMAR: GrammarLesson[] = [...GRAMMAR_A1, ...GRAMMAR_A2, ...GRAMMAR_B1];

export const grammarByLevel = (level: GrammarLesson['level']) => GRAMMAR.filter((g) => g.level === level);
