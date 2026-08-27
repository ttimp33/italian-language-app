import type { Level, Step, StepKind, Unit } from './types';

/**
 * The course path.
 *
 * Levels run A1 → C2 and units run in order inside a level. Nothing rotates and
 * nothing is chosen by the calendar: a learner works down the list, and a level
 * opens only when the one before it is finished. That is the whole model.
 *
 * Units hold *references* into the content banks, never copies, so a lesson
 * lives in exactly one file. A test asserts that every reference resolves and
 * that every piece of content at a level with a written course appears exactly
 * once — no orphans, no accidental repeats.
 */

/**
 * Step ids are derived from the unit and the first thing the step points at,
 * rather than numbered. Renumbering a course would otherwise silently
 * invalidate stored progress the moment a unit gained a step in the middle.
 */
function unit(
  id: string,
  level: Level,
  title: string,
  goal: string,
  steps: [StepKind, ...string[]][],
): Unit {
  return {
    id,
    level,
    title,
    goal,
    steps: steps.map(([kind, ...refs]): Step => ({ id: `${id}/${kind}/${refs[0]}`, kind, refs })),
  };
}

const A1: Unit[] = [
  unit('a1-u1', 'A1', 'I suoni e l’alfabeto', 'Read Italian aloud and be understood: the alphabet and the five pure vowels.', [
    ['phonics', 'ph-a1-alfabeto'],
    ['phonics', 'ph-a1-vocali'],
    ['conversation', 'cv-a1-ciao', 'cv-a1-grazie', 'cv-a1-prego', 'cv-a1-scusa', 'cv-a1-e'],
  ]),
  unit('a1-u2', 'A1', 'Le consonanti difficili', 'Say ciao, chiesa, gnocchi and sciare without hesitating.', [
    ['phonics', 'ph-a1-c-g'],
    ['phonics', 'ph-a1-gn-gl-sc'],
    ['word', 'a1-piccolo'],
  ]),
  unit('a1-u3', 'A1', 'Doppie e accento', 'Hear and produce the difference between nono and nonno, and put the stress where Italians put it.', [
    ['phonics', 'ph-a1-doppie'],
    ['phonics', 'ph-a1-accento'],
    ['convdrill', 'cc-a1-1', 'cc-a1-2'],
  ]),
  unit('a1-u4', 'A1', 'Presentarsi', 'Say who you are, where you are from and how you are.', [
    ['grammar', 'gr-a1-pronomi-soggetto'],
    ['grammar', 'gr-a1-essere-avere'],
    ['listening', 'a1-clip-presentarsi'],
    ['word', 'a1-famiglia'],
  ]),
  unit('a1-u5', 'A1', 'Il presente', 'Talk about what you do, every day and right now.', [
    ['grammar', 'gr-a1-presente-regolare'],
    ['grammar', 'gr-a1-presente-irregolare'],
    ['drills', 'a1-cz-1', 'a1-cz-2'],
    ['article', 'a1-art-giornata'],
  ]),
  unit('a1-u6', 'A1', 'Nomi e articoli', 'Put the right article in front of any noun, singular or plural.', [
    ['grammar', 'gr-a1-articoli'],
    ['grammar', 'gr-a1-nomi-plurale'],
    ['word', 'a1-pane'],
    ['drills', 'a1-cz-3', 'a1-cz-4'],
  ]),
  unit('a1-u7', 'A1', 'Genere e numero', 'Make adjectives agree with what they describe, every time.', [
    ['grammar', 'gr-a1-accordo'],
    ['word', 'a1-grande'],
    ['drills', 'a1-cz-5'],
  ]),
  unit('a1-u8', 'A1', 'Dove sono le cose', 'Say what there is, where it is, and how to get there.', [
    ['grammar', 'gr-a1-ce-ci-sono'],
    ['grammar', 'gr-a1-preposizioni'],
    ['listening', 'a1-clip-dove'],
    ['word', 'a1-casa'],
    ['drills', 'a1-cz-6'],
  ]),
  unit('a1-u9', 'A1', 'Numeri, ora e prezzi', 'Tell the time, give a date and ask what something costs.', [
    ['grammar', 'gr-a1-numeri-ora'],
    ['listening', 'a1-clip-che-ore'],
    ['listening', 'a1-clip-quanto-costa'],
    ['word', 'a1-giorno'],
  ]),
  unit('a1-u10', 'A1', 'La mia famiglia', 'Introduce your family and say what belongs to whom.', [
    ['grammar', 'gr-a1-possessivi'],
    ['article', 'a1-art-famiglia'],
    ['word', 'a1-acqua'],
  ]),
  unit('a1-u11', 'A1', 'Chiedere e ottenere', 'Ask a question, make a polite request, book a room, order a meal.', [
    ['grammar', 'gr-a1-interrogativi'],
    ['grammar', 'gr-a1-modali'],
    ['listening', 'a1-clip-albergo'],
    ['article', 'a1-art-ristorante'],
    ['convdrill', 'cc-a1-3', 'cc-a1-4'],
  ]),
  unit('a1-u12', 'A1', 'Mi piace', 'Say what you like, what you need, and what suits you — with the verb the other way round.', [
    ['grammar', 'gr-a1-pronomi-indiretti'],
    ['grammar', 'gr-a1-servire-piacere'],
    ['word', 'a1-bello'],
    ['drills', 'a1-cz-7', 'a1-cz-8'],
    ['article', 'a1-art-citta'],
  ]),
  unit('a1-u13', 'A1', 'Dare istruzioni', 'Tell someone what to do, and what not to do.', [
    ['grammar', 'gr-a1-imperativo'],
    ['listening', 'a1-clip-come-stai'],
    ['conversation', 'cv-a1-ma', 'cv-a1-perche', 'cv-a1-cosa', 'cv-a1-momento', 'cv-a1-bravo'],
  ]),
  unit('a1-u14', 'A1', 'Cavarsela', 'Handle a weekend, a working day and the phrases that hold a conversation together.', [
    ['grammar', 'gr-a1-farcela-andarsene'],
    ['word', 'a1-buono'],
    ['word', 'a1-stanco'],
    ['drills', 'a1-cz-9', 'a1-cz-10'],
    ['article', 'a1-art-weekend'],
    ['article', 'a1-art-lavoro'],
    ['convdrill', 'cc-a1-5', 'cc-a1-6'],
  ]),
];

export const CURRICULUM: Unit[] = [...A1];

/** The levels that have a course written, in order. */
export const COURSE_LEVELS: Level[] = [...new Set(CURRICULUM.map((u) => u.level))];

export function unitsFor(level: Level): Unit[] {
  return CURRICULUM.filter((u) => u.level === level);
}

export const unitById = new Map(CURRICULUM.map((u) => [u.id, u]));

export const ALL_STEPS: Step[] = CURRICULUM.flatMap((u) => u.steps);

export const stepById = new Map(ALL_STEPS.map((s) => [s.id, s]));

/** The unit a step belongs to. */
export const unitOfStep = new Map(CURRICULUM.flatMap((u) => u.steps.map((s) => [s.id, u] as const)));
