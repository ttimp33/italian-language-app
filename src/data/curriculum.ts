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

const A2: Unit[] = [
  unit('a2-u1', 'A2', 'Che cosa è successo', 'Report what you did: the everyday past with avere.', [
    ['grammar', 'gr-a2-passato-avere'],
    ['drills', 'a2-cz-1', 'a2-cz-2'],
    ['word', 'a2-prenotare'],
    ['article', 'a2-art-domenica'],
  ]),
  unit('a2-u2', 'A2', 'Sono andato, è partita', 'Use essere in the past, and make the participle agree.', [
    ['grammar', 'gr-a2-passato-essere'],
    ['drills', 'a2-cz-3'],
    ['listening', 'a2-clip-weekend'],
    ['word', 'a2-trasferirsi'],
  ]),
  unit('a2-u3', 'A2', 'Com’era una volta', 'Describe how things used to be, and set a scene.', [
    ['grammar', 'gr-a2-imperfetto'],
    ['drills', 'a2-cz-4'],
    ['article', 'a2-art-vicini'],
    ['conversation', 'cv-a2-allora', 'cv-a2-beh', 'cv-a2-dai', 'cv-a2-ecco', 'cv-a2-pero'],
  ]),
  unit('a2-u4', 'A2', 'Sfondo o evento', 'Choose between the two pasts the way an Italian does, without thinking.', [
    ['grammar', 'gr-a2-passato-imperfetto'],
    ['drills', 'a2-cz-5', 'a2-cz-6'],
    ['listening', 'a2-clip-casa'],
    ['article', 'a2-mercato'],
  ]),
  unit('a2-u5', 'A2', 'Domani e forse', 'Talk about what will happen — and guess about what is happening.', [
    ['grammar', 'gr-a2-futuro'],
    ['drills', 'a2-cz-7'],
    ['word', 'a2-magari'],
    ['listening', 'a2-clip-appuntamento'],
  ]),
  unit('a2-u6', 'A2', 'Vorrei, potresti', 'Ask for things politely and give advice without giving orders.', [
    ['grammar', 'gr-a2-condizionale'],
    ['word', 'a2-abbastanza'],
    ['listening', 'a2-clip-bar'],
    ['convdrill', 'cc-a2-1', 'cc-a2-2'],
  ]),
  unit('a2-u7', 'A2', 'Dare del Lei', 'Handle an office, a doctor and a stranger in the formal register.', [
    ['grammar', 'gr-a2-imperativo-formale'],
    ['listening', 'a2-clip-posta'],
    ['listening', 'a2-clip-medico'],
    ['article', 'a2-treno'],
  ]),
  unit('a2-u8', 'A2', 'Lo, la, ne', 'Stop repeating the noun: replace it the way Italians do.', [
    ['grammar', 'gr-a2-pronomi-diretti'],
    ['drills', 'a2-cz-8'],
    ['word', 'a2-bancone'],
    ['article', 'a2-caffe'],
  ]),
  unit('a2-u9', 'A2', 'Due pronomi insieme', 'Say glielo, me lo and te ne without stopping to think.', [
    ['grammar', 'gr-a2-pronomi-combinati'],
    ['drills', 'a2-cz-9'],
    ['convdrill', 'cc-a2-3', 'cc-a2-4'],
  ]),
  unit('a2-u10', 'A2', 'Mi alzo, ci vediamo', 'Reflexive and reciprocal verbs, and the ones that are reflexive for no reason.', [
    ['grammar', 'gr-a2-riflessivi'],
    ['drills', 'a2-cz-10'],
    ['word', 'a2-sbrigarsi'],
  ]),
  unit('a2-u11', 'A2', 'Più di, meno che', 'Compare two things — and get di and che the right way round.', [
    ['grammar', 'gr-a2-comparativi'],
    ['word', 'a2-affollato'],
    ['word', 'a2-riuscire'],
    ['conversation', 'cv-a2-quindi', 'cv-a2-poi', 'cv-a2-roba', 'cv-a2-voglia', 'cv-a2-simpatico'],
  ]),
  unit('a2-u12', 'A2', 'Sto facendo, si fa così', 'Say what is happening right now, and how things are done in general.', [
    ['grammar', 'gr-a2-gerundio-si'],
    ['article', 'a2-art-mare'],
    ['convdrill', 'cc-a2-5', 'cc-a2-6'],
  ]),
];

const B1: Unit[] = [
  unit('b1-u1', 'B1', 'Il congiuntivo: le forme', 'Build the present subjunctive from the io form, and stop fearing it.', [
    ['grammar', 'gr-b1-congiuntivo-forme'],
    ['drills', 'b1-cz-1', 'b1-cz-2'],
    ['word', 'b1-rendersi-conto'],
  ]),
  unit('b1-u2', 'B1', 'Quando serve il congiuntivo', 'Tell an assertion from an opinion, and pick the mood that fits.', [
    ['grammar', 'gr-b1-congiuntivo-usi'],
    ['drills', 'b1-cz-3'],
    ['article', 'b1-art-coinquilini'],
    ['conversation', 'cv-b1-insomma', 'cv-b1-cioe', 'cv-b1-comunque', 'cv-b1-senti', 'cv-b1-invece'],
  ]),
  unit('b1-u3', 'B1', 'Il congiuntivo passato', 'Doubt, hope and judge something that has already happened.', [
    ['grammar', 'gr-b1-congiuntivo-passato'],
    ['drills', 'b1-cz-4'],
    ['listening', 'b1-clip-vicini'],
  ]),
  unit('b1-u4', 'B1', 'Se piovesse', 'Handle both real and hypothetical conditions — and never write se avrei.', [
    ['grammar', 'gr-b1-ipotetico'],
    ['drills', 'b1-cz-5', 'b1-cz-6'],
    ['word', 'b1-cavarsela'],
    ['article', 'b1-cena'],
  ]),
  unit('b1-u5', 'B1', 'Avrei voluto', 'Express regret, and report a future seen from the past.', [
    ['grammar', 'gr-b1-condizionale-passato'],
    ['drills', 'b1-cz-7'],
    ['listening', 'b1-clip-colloquio'],
    ['word', 'b1-tirocinio'],
  ]),
  unit('b1-u6', 'B1', 'Il passato prima del passato', 'Order two past events without ambiguity.', [
    ['grammar', 'gr-b1-trapassato'],
    ['drills', 'b1-cz-8'],
    ['article', 'b1-art-tirocinio'],
  ]),
  unit('b1-u7', 'B1', 'Quando avrò finito', 'Use the future perfect for sequence — and for guessing about the past.', [
    ['grammar', 'gr-b1-futuro-anteriore'],
    ['drills', 'b1-cz-9'],
    ['listening', 'b1-clip-viaggio'],
    ['word', 'b1-affidabile'],
  ]),
  unit('b1-u8', 'B1', 'Che, cui, il quale', 'Join clauses with a relative pronoun, preposition and all.', [
    ['grammar', 'gr-b1-relativi'],
    ['drills', 'b1-cz-10'],
    ['article', 'b1-borghi'],
    ['word', 'b1-sportello'],
  ]),
  unit('b1-u9', 'B1', 'Riportare quello che è stato detto', 'Shift tenses, pronouns and time words when you report speech.', [
    ['grammar', 'gr-b1-discorso-indiretto'],
    ['listening', 'b1-clip-operatore'],
    ['convdrill', 'cc-b1-1', 'cc-b1-2'],
  ]),
  unit('b1-u10', 'B1', 'La forma passiva', 'Say what was done without saying who did it, three different ways.', [
    ['grammar', 'gr-b1-passivo'],
    ['article', 'b1-art-patente'],
    ['listening', 'b1-clip-reso'],
    ['word', 'b1-peggiorare'],
  ]),
  unit('b1-u11', 'B1', 'Le forme implicite', 'Compress a clause into a gerund, a participle or an infinitive.', [
    ['grammar', 'gr-b1-implicite'],
    ['article', 'b1-art-sospeso'],
    ['listening', 'b1-clip-palestra'],
    ['word', 'b1-impegnativo'],
  ]),
  unit('b1-u12', 'B1', 'Tenere insieme un discorso', 'Move from sentences to paragraphs with the connectives that carry an argument.', [
    ['grammar', 'gr-b1-connettivi'],
    ['conversation', 'cv-b1-infatti', 'cv-b1-anzi', 'cv-b1-casino', 'cv-b1-fregatura', 'cv-b1-pesante'],
    ['word', 'b1-tuttaltro'],
    ['convdrill', 'cc-b1-3', 'cc-b1-4', 'cc-b1-5', 'cc-b1-6'],
  ]),
];

export const CURRICULUM: Unit[] = [...A1, ...A2, ...B1];

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
