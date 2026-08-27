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

const B2: Unit[] = [
  unit('b2-u1', 'B2', 'Il congiuntivo imperfetto', 'Carry the subjunctive into past contexts, and handle come se.', [
    ['grammar', 'gr-b2-congiuntivo-imperfetto'],
    ['drills', 'b2-cz-1', 'b2-cz-2'],
    ['word', 'b2-accorgersi'],
  ]),
  unit('b2-u2', 'B2', 'Il congiuntivo trapassato', 'Talk about a past that never happened.', [
    ['grammar', 'gr-b2-congiuntivo-trapassato'],
    ['drills', 'b2-cz-3'],
    ['article', 'b2-art-numero-chiuso'],
  ]),
  unit('b2-u3', 'B2', 'Ipotesi impossibili e miste', 'Build the third conditional, and mix times when the sense requires it.', [
    ['grammar', 'gr-b2-ipotetico-terzo'],
    ['drills', 'b2-cz-4', 'b2-cz-5'],
    ['listening', 'b2-clip-esame'],
    ['word', 'b2-sottovalutare'],
  ]),
  unit('b2-u4', 'B2', 'La concordanza dei tempi', 'Keep a complex sentence consistent from main clause to subordinate.', [
    ['grammar', 'gr-b2-concordanza'],
    ['drills', 'b2-cz-6', 'b2-cz-7'],
    ['article', 'b2-disconnessione'],
  ]),
  unit('b2-u5', 'B2', 'Va fatto, si è deciso', 'Express obligation and impersonality the way official Italian does.', [
    ['grammar', 'gr-b2-passivo-avanzato'],
    ['drills', 'b2-cz-8'],
    ['listening', 'b2-clip-progetto'],
    ['word', 'b2-scadenza'],
  ]),
  unit('b2-u6', 'B2', 'Cavarsela, prendersela', 'Use the pronominal verbs that carry most of spoken Italian.', [
    ['grammar', 'gr-b2-verbi-pronominali'],
    ['conversation', 'cv-b2-appunto', 'cv-b2-praticamente', 'cv-b2-diciamo', 'cv-b2-mah', 'cv-b2-in-effetti'],
    ['word', 'b2-affrontare'],
  ]),
  unit('b2-u7', 'B2', 'Costruzioni implicite', 'Compress subordinate clauses the way written Italian prefers.', [
    ['grammar', 'gr-b2-implicite-avanzate'],
    ['drills', 'b2-cz-9'],
    ['article', 'b2-spopolamento'],
    ['word', 'b2-incidere'],
  ]),
  unit('b2-u8', 'B2', 'Argomentare', 'Concede, qualify and reframe instead of merely contrasting.', [
    ['grammar', 'gr-b2-connettivi-argomentativi'],
    ['article', 'b2-art-settimana-corta'],
    ['conversation', 'cv-b2-piuttosto', 'cv-b2-del-resto', 'cv-b2-spunto', 'cv-b2-sfumatura', 'cv-b2-azzeccato'],
    ['word', 'b2-altrimenti'],
  ]),
  unit('b2-u9', 'B2', 'Dove va l’aggettivo', 'Place an adjective where it says what you mean.', [
    ['grammar', 'gr-b2-aggettivi-posizione'],
    ['drills', 'b2-cz-10'],
    ['listening', 'b2-clip-turismo'],
    ['word', 'b2-pregiudizio'],
  ]),
  unit('b2-u10', 'B2', 'Riportare domande e ordini', 'Report a question, a command and a hypothesis without losing the thread.', [
    ['grammar', 'gr-b2-discorso-indiretto-avanzato'],
    ['listening', 'b2-clip-trasloco'],
    ['convdrill', 'cc-b2-1', 'cc-b2-2', 'cc-b2-3'],
  ]),
  unit('b2-u11', 'B2', 'Questione di registro', 'Write the same message formally, neutrally and informally — and keep it consistent.', [
    ['grammar', 'gr-b2-registri'],
    ['article', 'b2-cibo'],
    ['article', 'b2-art-volontariato'],
    ['listening', 'b2-clip-smart'],
    ['listening', 'b2-clip-sport'],
    ['word', 'b2-sfida'],
    ['convdrill', 'cc-b2-4', 'cc-b2-5', 'cc-b2-6'],
  ]),
];

const C1: Unit[] = [
  unit('c1-u1', 'C1', 'Il passato remoto', 'Read narrative Italian, and recognise the tense the south still speaks.', [
    ['grammar', 'gr-c1-passato-remoto'],
    ['drills', 'c1-cz-1', 'c1-cz-2'],
    ['article', 'c1-dialetti'],
  ]),
  unit('c1-u2', 'C1', 'I tempi della narrazione', 'Place events, background and anteriority in a long narrative.', [
    ['grammar', 'gr-c1-tempi-narrativi'],
    ['drills', 'c1-cz-3'],
    ['listening', 'c1-clip-memoria'],
    ['word', 'c1-ravvisare'],
  ]),
  unit('c1-u3', 'C1', 'Il congiuntivo nelle subordinate', 'Use the mood that marks the hypothetical, the sought and the evaluated.', [
    ['grammar', 'gr-c1-congiuntivo-subordinate'],
    ['drills', 'c1-cz-4', 'c1-cz-5'],
    ['article', 'c1-art-precariato'],
  ]),
  unit('c1-u4', 'C1', 'Lo stile giornalistico', 'Read a headline and an official notice at speed.', [
    ['grammar', 'gr-c1-nominalizzazione'],
    ['article', 'c1-art-divario'],
    ['listening', 'c1-clip-editoria'],
    ['word', 'c1-divario'],
  ]),
  unit('c1-u5', 'C1', 'Mettere in rilievo', 'Use word order to say what matters, the way spoken Italian does.', [
    ['grammar', 'gr-c1-dislocazioni'],
    ['drills', 'c1-cz-6'],
    ['conversation', 'cv-c1-per-lappunto', 'cv-c1-a-dire-il-vero', 'cv-c1-se-vogliamo', 'cv-c1-figurati', 'cv-c1-peraltro'],
  ]),
  unit('c1-u6', 'C1', 'Le quattro funzioni del si', 'Parse any si, and get the agreement right in each case.', [
    ['grammar', 'gr-c1-si-quattro'],
    ['drills', 'c1-cz-7'],
    ['article', 'c1-urbanistica'],
    ['word', 'c1-sopperire'],
  ]),
  unit('c1-u7', 'C1', 'Concedere e limitare', 'Concede ground precisely, and carve out exceptions.', [
    ['grammar', 'gr-c1-concessive'],
    ['drills', 'c1-cz-8'],
    ['listening', 'c1-clip-sanita'],
    ['word', 'c1-stemperare'],
  ]),
  unit('c1-u8', 'C1', 'Le reggenze', 'Fix the prepositions that survive every other kind of accuracy.', [
    ['grammar', 'gr-c1-reggenze'],
    ['drills', 'c1-cz-9', 'c1-cz-10'],
    ['listening', 'c1-clip-restauro'],
    ['word', 'c1-a-fronte-di'],
  ]),
  unit('c1-u9', 'C1', 'Organizzare un testo', 'Signal structure across paragraphs, not just clauses.', [
    ['grammar', 'gr-c1-connettivi-testuali'],
    ['article', 'c1-art-paesaggio'],
    ['conversation', 'cv-c1-oltretutto', 'cv-c1-non-a-caso', 'cv-c1-risvolto', 'cv-c1-premessa', 'cv-c1-calzante'],
    ['word', 'c1-lungimiranza'],
  ]),
  unit('c1-u10', 'C1', 'Il registro alto', 'Read administrative and academic Italian without stumbling.', [
    ['grammar', 'gr-c1-lessico-formale'],
    ['article', 'c1-art-poverta'],
    ['listening', 'c1-clip-radio'],
    ['listening', 'c1-clip-insegnanti'],
    ['word', 'c1-inasprimento'],
    ['word', 'c1-arginare'],
    ['convdrill', 'cc-c1-1', 'cc-c1-2', 'cc-c1-3', 'cc-c1-4', 'cc-c1-5', 'cc-c1-6'],
  ]),
];

const C2: Unit[] = [
  unit('c2-u1', 'C2', 'Burocratese', 'Read a contract, a summons and a circular for what they actually say.', [
    ['grammar', 'gr-c2-burocratese'],
    ['drills', 'c2-cz-1', 'c2-cz-2'],
    ['article', 'c2-art-canone'],
    ['word', 'c2-ottemperare'],
  ]),
  unit('c2-u2', 'C2', 'Registro letterario', 'Recognise marked syntax as meaning rather than as difficulty.', [
    ['grammar', 'gr-c2-letterario'],
    ['drills', 'c2-cz-3'],
    ['article', 'c2-retorica'],
    ['word', 'c2-lambire'],
  ]),
  unit('c2-u3', 'C2', 'Fraseologia', 'Use and understand the fixed expressions that cannot be assembled.', [
    ['grammar', 'gr-c2-fraseologia'],
    ['drills', 'c2-cz-4'],
    ['conversation', 'cv-c2-beninteso', 'cv-c2-per-inciso', 'cv-c2-a-rigore', 'cv-c2-quantomeno', 'cv-c2-per-contro'],
  ]),
  unit('c2-u4', 'C2', 'Il congiuntivo fossile', 'Handle the subjunctive where no rule explains it any more.', [
    ['grammar', 'gr-c2-congiuntivo-formule'],
    ['drills', 'c2-cz-5'],
    ['listening', 'c2-clip-traduzione'],
    ['word', 'c2-dirimere'],
  ]),
  unit('c2-u5', 'C2', 'Il discorso indiretto libero', 'Hear a character’s voice inside the narrator’s sentence.', [
    ['grammar', 'gr-c2-indiretto-libero'],
    ['article', 'c2-art-perizia'],
    ['article', 'c2-art-caparbieta'],
    ['listening', 'c2-clip-doppiaggio'],
    ['word', 'c2-caparbieta'],
  ]),
  unit('c2-u6', 'C2', 'Ironia e attenuazione', 'Say less than you mean, and hear when someone else is.', [
    ['grammar', 'gr-c2-ironia'],
    ['drills', 'c2-cz-6'],
    ['listening', 'c2-clip-comico'],
    ['word', 'c2-blandire'],
  ]),
  unit('c2-u7', 'C2', 'Varietà e standard', 'Tell regional from substandard from what has quietly become normal.', [
    ['grammar', 'gr-c2-varieta'],
    ['drills', 'c2-cz-7'],
    ['article', 'c2-art-certificazioni'],
    ['word', 'c2-appannaggio'],
  ]),
  unit('c2-u8', 'C2', 'Prestiti e falsi amici', 'Handle loanwords, calques and the false friends that outlive everything else.', [
    ['grammar', 'gr-c2-neologismi'],
    ['drills', 'c2-cz-8'],
    ['listening', 'c2-clip-archivio'],
    ['word', 'c2-surrettizio'],
  ]),
  unit('c2-u9', 'C2', 'Coesione e coerenza', 'Make a long text hold together the way Italian expects.', [
    ['grammar', 'gr-c2-coesione'],
    ['drills', 'c2-cz-9'],
    ['article', 'c2-art-coacervo'],
    ['word', 'c2-coacervo'],
    ['conversation', 'cv-c2-fermo-restando', 'cv-c2-tanto-piu-che', 'cv-c2-postilla', 'cv-c2-distinguo', 'cv-c2-lapidario'],
  ]),
  unit('c2-u10', 'C2', 'Sfumature', 'Choose between near-synonyms the way someone who grew up with them does.', [
    ['grammar', 'gr-c2-sfumature'],
    ['drills', 'c2-cz-10'],
    ['listening', 'c2-clip-mostra'],
    ['listening', 'c2-clip-fonti'],
    ['convdrill', 'cc-c2-1', 'cc-c2-2', 'cc-c2-3', 'cc-c2-4', 'cc-c2-5', 'cc-c2-6'],
  ]),
];

export const CURRICULUM: Unit[] = [...A1, ...A2, ...B1, ...B2, ...C1, ...C2];

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
