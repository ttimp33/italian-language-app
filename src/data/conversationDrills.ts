import type { ConvCloze } from './types';

/**
 * Gap-fill set inside a real exchange rather than an isolated sentence.
 * Discourse markers have no meaning outside a turn — testing `insomma` on a
 * standalone line tests nothing, because what it does depends entirely on what
 * was said before it.
 *
 * `accepted` is generous by design: where a native speaker could plausibly use
 * a different marker, the drill takes it and the explanation says why the
 * keyed answer fits best.
 */
export const CONV_CLOZE: ConvCloze[] = [
  // ─────────────────────────────── A2 ───────────────────────────────
  {
    id: 'cc-a2-1',
    level: 'A2',
    context: 'Due amici decidono come passare la serata.',
    lines: [
      { speaker: 'Marco', it: 'Ho finito di lavorare.', en: 'I have finished work.' },
      { speaker: 'Sara', it: '___, che facciamo stasera?', en: 'So, what are we doing tonight?' },
      { speaker: 'Marco', it: 'Non lo so, decidi tu.', en: 'I do not know, you decide.' },
    ],
    answer: 'Allora',
    accepted: ['allora', 'e allora', 'beh'],
    hints: ['Allora', 'Infatti', 'Comunque', 'Però'],
    explanation:
      'Allora opens the turn and signals that a decision is coming — the standard way an Italian starts organising a plan out loud.',
  },
  {
    id: 'cc-a2-2',
    level: 'A2',
    context: 'Aspettando alla stazione.',
    lines: [
      { speaker: 'Luca', it: 'Non ho ancora comprato il biglietto.', en: 'I have not bought the ticket yet.' },
      { speaker: 'Anna', it: '___, sbrigati! Il treno parte fra dieci minuti.', en: 'Come on, hurry up! The train leaves in ten minutes.' },
    ],
    answer: 'Dai',
    accepted: ['dai', 'su', 'forza'],
    hints: ['Dai', 'Ecco', 'Quindi', 'Poi'],
    explanation:
      'Dai urges someone into action. It pairs naturally with an imperative like sbrigati, and is far more common than su or forza in speech.',
  },
  {
    id: 'cc-a2-3',
    level: 'A2',
    context: 'In un negozio di abbigliamento.',
    lines: [
      { speaker: 'Cliente', it: 'Questa giacca mi piace molto.', en: 'I really like this jacket.' },
      { speaker: 'Cliente', it: 'Costa duecento euro, ___.', en: 'It costs two hundred euros, though.' },
      { speaker: 'Commessa', it: 'Da giovedì è in saldo.', en: 'From Thursday it is on sale.' },
    ],
    answer: 'però',
    accepted: ['pero'],
    hints: ['però', 'quindi', 'invece', 'allora'],
    explanation:
      'Italian can place però at the end of a clause, where English needs "though". Quindi would draw a consequence, not a contrast.',
  },
  {
    id: 'cc-a2-4',
    level: 'A2',
    context: 'Al bar, il barista porta il caffè.',
    lines: [
      { speaker: 'Barista', it: '___ il suo caffè.', en: 'Here is your coffee.' },
      { speaker: 'Cliente', it: 'Grazie mille.', en: 'Thank you very much.' },
    ],
    answer: 'Ecco',
    accepted: ['ecco'],
    hints: ['Ecco', 'Allora', 'Dai', 'Beh'],
    explanation: 'Ecco presents something at the moment it appears — handing over an object, arriving, producing a document.',
  },
  {
    id: 'cc-a2-5',
    level: 'A2',
    context: 'Un collega spiega perché non è venuto.',
    lines: [
      { speaker: 'Paolo', it: 'Ieri stavo male.', en: 'Yesterday I was unwell.' },
      { speaker: 'Paolo', it: '___ sono rimasto a casa.', en: 'So I stayed home.' },
      { speaker: 'Giulia', it: 'Hai fatto bene.', en: 'You did the right thing.' },
    ],
    answer: 'Quindi',
    accepted: ['quindi', 'perciò', 'percio', 'allora', 'così', 'cosi'],
    hints: ['Quindi', 'Però', 'Invece', 'Ecco'],
    explanation: 'Quindi draws the consequence of the previous sentence. Però would set up a contrast that the context does not support.',
  },
  {
    id: 'cc-a2-6',
    level: 'A2',
    context: 'Un invito rifiutato gentilmente.',
    lines: [
      { speaker: 'Elena', it: 'Andiamo al cinema stasera?', en: 'Shall we go to the cinema tonight?' },
      { speaker: 'Davide', it: 'Scusa, non ho ___ di uscire. Sono stanchissimo.', en: 'Sorry, I do not feel like going out. I am exhausted.' },
    ],
    answer: 'voglia',
    accepted: ['la voglia'],
    hints: ['voglia', 'roba', 'tempo', 'casino'],
    explanation:
      'Avere voglia di carries the whole idea of "feeling like". Non ho tempo would also be grammatical, but says something different — no time, rather than no inclination.',
  },

  // ─────────────────────────────── B1 ───────────────────────────────
  {
    id: 'cc-b1-1',
    level: 'B1',
    context: 'Dopo un lungo racconto confuso su una trattativa.',
    lines: [
      { speaker: 'Chiara', it: 'Prima ha detto di sì, poi ha cambiato idea, poi ha richiamato…', en: 'First he said yes, then he changed his mind, then he called back…' },
      { speaker: 'Chiara', it: '___, alla fine non se ne è fatto niente.', en: 'Anyway, in the end nothing came of it.' },
    ],
    answer: 'Insomma',
    accepted: ['insomma', 'comunque', 'in breve'],
    hints: ['Insomma', 'Infatti', 'Anzi', 'Appunto'],
    explanation:
      'Insomma closes off a rambling account and delivers the upshot. Comunque works too, though it suggests returning to a thread rather than summing up.',
  },
  {
    id: 'cc-b1-2',
    level: 'B1',
    context: 'Una conversazione che si è allontanata dal tema.',
    lines: [
      { speaker: 'Matteo', it: '…e mio fratello si è trasferito a Berlino, sai.', en: '…and my brother moved to Berlin, you know.' },
      { speaker: 'Sofia', it: 'Interessante. ___, tornando a noi: hai firmato il contratto?', en: 'Interesting. Anyway, back to us: did you sign the contract?' },
    ],
    answer: 'Comunque',
    accepted: ['comunque', 'insomma'],
    hints: ['Comunque', 'Infatti', 'Cioè', 'Piuttosto'],
    explanation: 'Comunque marks the return to the main thread after a digression — its most frequent job in conversation.',
  },
  {
    id: 'cc-b1-3',
    level: 'B1',
    context: 'Correggere al rialzo la propria affermazione.',
    lines: [
      { speaker: 'Giorgio', it: 'Il film non mi è dispiaciuto.', en: 'I did not dislike the film.' },
      { speaker: 'Giorgio', it: '___, mi è piaciuto moltissimo.', en: 'On the contrary, I liked it enormously.' },
    ],
    answer: 'Anzi',
    accepted: ['anzi'],
    hints: ['Anzi', 'Infatti', 'Quindi', 'Comunque'],
    explanation:
      'Anzi replaces what you just said with something stronger. Infatti would be wrong here: it confirms an expectation rather than upgrading a claim.',
  },
  {
    id: 'cc-b1-4',
    level: 'B1',
    context: 'Due colleghi confrontano le loro abitudini.',
    lines: [
      { speaker: 'Ilaria', it: 'Io la mattina bevo solo tè.', en: 'In the morning I only drink tea.' },
      { speaker: 'Marco', it: 'Io ___ non riesco a svegliarmi senza caffè.', en: 'I, on the other hand, cannot wake up without coffee.' },
    ],
    answer: 'invece',
    accepted: [],
    hints: ['invece', 'infatti', 'comunque', 'appunto'],
    explanation:
      'Invece placed straight after the subject is the compact Italian way to say "I, on the other hand" — a construction English needs a whole phrase for.',
  },
  {
    id: 'cc-b1-5',
    level: 'B1',
    context: 'Chiedere un favore a un amico.',
    lines: [
      { speaker: 'Valeria', it: '___, posso chiederti una cosa?', en: 'Listen, can I ask you something?' },
      { speaker: 'Nico', it: 'Certo, dimmi.', en: 'Sure, go ahead.' },
    ],
    answer: 'Senti',
    accepted: ['senti', 'guarda', 'scusa'],
    hints: ['Senti', 'Ecco', 'Insomma', 'Quindi'],
    explanation:
      'Senti claims the floor before a request. With someone you address as Lei it must become senta — the register error learners make most often.',
  },
  {
    id: 'cc-b1-6',
    level: 'B1',
    context: 'Entrando in un appartamento dopo una festa.',
    lines: [
      { speaker: 'Luca', it: 'Oddio, che ___ qui dentro!', en: 'God, what a mess in here!' },
      { speaker: 'Anna', it: 'Lo so, puliamo domani.', en: 'I know, we will clean tomorrow.' },
    ],
    answer: 'casino',
    accepted: ['disordine', 'casino'],
    hints: ['casino', 'roba', 'fregatura', 'voglia'],
    explanation:
      'Che casino! is the standard exclamation for chaos among friends. Disordine is the neutral word you would use in front of a landlord.',
  },

  // ─────────────────────────────── B2 ───────────────────────────────
  {
    id: 'cc-b2-1',
    level: 'B2',
    context: "L'interlocutore arriva da solo alla conclusione che volevi suggerire.",
    lines: [
      { speaker: 'Elena', it: 'Se nessuno controlla i risultati, il problema resta invisibile.', en: 'If nobody checks the results, the problem stays invisible.' },
      { speaker: 'Franco', it: '___. È esattamente quello che sostengo da mesi.', en: 'Precisely. That is exactly what I have been arguing for months.' },
    ],
    answer: 'Appunto',
    accepted: ['appunto', 'esatto', 'esattamente'],
    hints: ['Appunto', 'Insomma', 'Piuttosto', 'Diciamo'],
    explanation: 'Appunto signals that the other person has landed on the very point you were driving at.',
  },
  {
    id: 'cc-b2-2',
    level: 'B2',
    context: 'Concedere un punto dopo averci riflettuto un attimo.',
    lines: [
      { speaker: 'Rita', it: 'Se rimandiamo, avremo i dati completi.', en: 'If we postpone, we will have the complete data.' },
      { speaker: 'Aldo', it: '___ non ci avevo pensato. Hai ragione.', en: 'Actually, I had not thought of that. You are right.' },
    ],
    answer: 'In effetti',
    accepted: ['in effetti', 'effettivamente', 'a dire il vero'],
    hints: ['In effetti', 'Infatti', 'Anzi', 'Appunto'],
    explanation:
      'In effetti concedes a point on reflection — you were not expecting to agree. Infatti would claim you expected it all along.',
  },
  {
    id: 'cc-b2-3',
    level: 'B2',
    context: 'Spiegare senza rancore perché qualcuno non ha risposto.',
    lines: [
      { speaker: 'Marta', it: 'Non mi ha ancora risposto alla mail.', en: 'He still has not answered my email.' },
      { speaker: 'Pietro', it: '___, era in ferie tutta la settimana.', en: 'Then again, he was on leave all week.' },
    ],
    answer: 'Del resto',
    accepted: ['del resto', "d'altronde", 'daltronde', "d'altra parte"],
    hints: ['Del resto', 'Piuttosto', 'Anzi', 'Quindi'],
    explanation:
      'Del resto adds a consideration that makes the previous statement unsurprising — it excuses rather than argues.',
  },
  {
    id: 'cc-b2-4',
    level: 'B2',
    context: 'Attenuare un giudizio negativo su una riunione.',
    lines: [
      { speaker: 'Sara', it: "Com'è andata la presentazione?", en: 'How did the presentation go?' },
      { speaker: 'Dario', it: '___ che non è andata benissimo.', en: 'Let us just say it did not go brilliantly.' },
    ],
    answer: 'Diciamo',
    accepted: ['diciamo'],
    hints: ['Diciamo', 'Appunto', 'Infatti', 'Beninteso'],
    explanation:
      'Diciamo che… frames the whole statement as a provisional, softened formulation — the polite way to deliver bad news about yourself.',
  },
  {
    id: 'cc-b2-5',
    level: 'B2',
    context: 'Valutare la reazione del pubblico a una proposta.',
    lines: [
      { speaker: 'Giulia', it: 'Come hanno accolto la proposta?', en: 'How was the proposal received?' },
      { speaker: 'Luca', it: 'La reazione è stata ___ fredda, a essere onesti.', en: 'The reaction was rather cold, to be honest.' },
    ],
    answer: 'piuttosto',
    accepted: ['abbastanza', 'alquanto'],
    hints: ['piuttosto', 'appunto', 'praticamente', 'invece'],
    explanation:
      'Before an adjective, piuttosto intensifies: "rather, quite". Its other sense — preferring one option — needs piuttosto che and a second term.',
  },
  {
    id: 'cc-b2-6',
    level: 'B2',
    context: 'Esprimere dubbio senza pronunciarsi.',
    lines: [
      { speaker: 'Anna', it: 'Secondo te accetteranno le nostre condizioni?', en: 'Do you think they will accept our terms?' },
      { speaker: 'Carlo', it: '___, io non ne sarei così sicuro.', en: 'Hmm, I would not be so sure.' },
    ],
    answer: 'Mah',
    accepted: ['mah', 'boh'],
    hints: ['Mah', 'Ecco', 'Appunto', 'Infatti'],
    explanation:
      'Mah withholds judgement without refusing to answer. Note it is not ma ("but"): mah stands alone, ma joins clauses.',
  },

  // ─────────────────────────────── C1 ───────────────────────────────
  {
    id: 'cc-c1-1',
    level: 'C1',
    context: 'Dissentire cortesemente in una riunione.',
    lines: [
      { speaker: 'Direttore', it: 'Immagino che siamo tutti favorevoli.', en: 'I assume we are all in favour.' },
      { speaker: 'Consulente', it: '___, la penso diversamente.', en: 'To tell the truth, I see it differently.' },
    ],
    answer: 'A dire il vero',
    accepted: ['a dire il vero', 'a onor del vero', 'in realtà', 'per la verità'],
    hints: ['A dire il vero', 'Non a caso', 'Peraltro', 'Beninteso'],
    explanation:
      'A dire il vero buys goodwill before contradicting — the most serviceable polite disagreement in Italian.',
  },
  {
    id: 'cc-c1-2',
    level: 'C1',
    context: 'Commento a margine su una proposta che torna in discussione.',
    lines: [
      { speaker: 'Relatore', it: 'La proposta, ___ già respinta lo scorso anno, torna oggi in aula.', en: 'The proposal, which incidentally was already rejected last year, returns to the floor today.' },
      { speaker: 'Relatore', it: 'Vale la pena chiedersi perché.', en: 'It is worth asking why.' },
    ],
    answer: 'peraltro',
    accepted: ['tra l\'altro', "tra l'altro", 'del resto'],
    hints: ['peraltro', 'quantomeno', 'appunto', 'insomma'],
    explanation:
      'Peraltro slips in a related fact that complicates the picture — additive and faintly concessive at once.',
  },
  {
    id: 'cc-c1-3',
    level: 'C1',
    context: 'Elencare le ragioni di un disservizio, con crescente esasperazione.',
    lines: [
      { speaker: 'Cliente', it: 'Il tecnico è arrivato con tre ore di ritardo.', en: 'The technician arrived three hours late.' },
      { speaker: 'Cliente', it: '___, senza avvisare e senza i pezzi di ricambio.', en: 'On top of that, without warning and without the spare parts.' },
    ],
    answer: 'Oltretutto',
    accepted: ['oltretutto', 'per giunta', 'in più', 'in piu'],
    hints: ['Oltretutto', 'Non a caso', 'Beninteso', 'A rigore'],
    explanation:
      'Oltretutto adds a final grievance to a list, carrying an exasperation that a neutral inoltre lacks.',
  },
  {
    id: 'cc-c1-4',
    level: 'C1',
    context: 'Scetticismo su una possibile scusa.',
    lines: [
      { speaker: 'Sara', it: 'Pensi che si scuserà?', en: 'Do you think he will apologise?' },
      { speaker: 'Marco', it: '___ se si scusa. Non lo ha mai fatto in vita sua.', en: 'As if he would apologise. He has never done it in his life.' },
    ],
    answer: 'Figurati',
    accepted: ['figurati', 'figuriamoci'],
    hints: ['Figurati', 'Beninteso', 'Appunto', 'Quantomeno'],
    explanation:
      'Figurati se… looks like a conditional but asserts the opposite: it states firmly that the thing will not happen.',
  },
  {
    id: 'cc-c1-5',
    level: 'C1',
    context: 'Presentare un dato come conferma della propria tesi.',
    lines: [
      { speaker: 'Ricercatrice', it: 'Dove i servizi chiudono, la popolazione cala più in fretta.', en: 'Where services close, the population falls faster.' },
      { speaker: 'Ricercatrice', it: '___ i comuni più colpiti sono proprio quelli senza scuola.', en: 'Tellingly, the worst-hit municipalities are precisely those without a school.' },
    ],
    answer: 'Non a caso',
    accepted: ['non a caso'],
    hints: ['Non a caso', 'A dire il vero', 'Del resto', 'Per contro'],
    explanation:
      'Non a caso presents a fact as evidence for the point just made, asserting the causal link without arguing for it.',
  },
  {
    id: 'cc-c1-6',
    level: 'C1',
    context: 'Prendere la parola a un convegno.',
    lines: [
      { speaker: 'Ospite', it: 'Faccio una ___: non sono un esperto del settore.', en: 'Let me preface this: I am not an expert in the field.' },
      { speaker: 'Ospite', it: 'Detto questo, qualche osservazione posso farla.', en: 'That said, I can make a few observations.' },
    ],
    answer: 'premessa',
    accepted: ['la premessa'],
    hints: ['premessa', 'postilla', 'sfumatura', 'spunto'],
    explanation:
      'Fare una premessa announces that everything following will be qualified — a very Italian conversational manoeuvre.',
  },

  // ─────────────────────────────── C2 ───────────────────────────────
  {
    id: 'cc-c2-1',
    level: 'C2',
    context: 'Concedere l’ovvio prima che venga obiettato.',
    lines: [
      { speaker: 'Oratore', it: 'La misura andrà valutata nei suoi effetti.', en: 'The measure will have to be judged by its effects.' },
      { speaker: 'Oratore', it: 'Resta, ___, la libertà di ciascuno di dissentire.', en: 'There remains, of course, everyone’s freedom to disagree.' },
    ],
    answer: 'beninteso',
    accepted: ['s\'intende', "s'intende", 'ovviamente', 'naturalmente'],
    hints: ['beninteso', 'quantomeno', 'per contro', 'a rigore'],
    explanation:
      'Beninteso inserts a concession treated as too obvious to argue, pre-empting an objection before it is raised.',
  },
  {
    id: 'cc-c2-2',
    level: 'C2',
    context: 'Distinguere fra applicazione stretta della norma e prassi.',
    lines: [
      { speaker: 'Legale', it: '___, la domanda era inammissibile.', en: 'Strictly speaking, the application was inadmissible.' },
      { speaker: 'Legale', it: 'In pratica, però, la commissione l’ha esaminata lo stesso.', en: 'In practice, though, the committee examined it anyway.' },
    ],
    answer: 'A rigore',
    accepted: ['a rigore', 'a rigor di termini', 'in linea di principio'],
    hints: ['A rigore', 'Beninteso', 'Non a caso', 'Oltretutto'],
    explanation:
      'A rigore announces that the strict rule gives one answer while practice gives another — and the following però confirms the contrast.',
  },
  {
    id: 'cc-c2-3',
    level: 'C2',
    context: 'Presentare due effetti simmetrici e opposti.',
    lines: [
      { speaker: 'Analista', it: "L'automazione riduce i costi di produzione.", en: 'Automation reduces production costs.' },
      { speaker: 'Analista', it: '___, comprime l’occupazione nelle mansioni ripetitive.', en: 'Conversely, it squeezes employment in repetitive roles.' },
    ],
    answer: 'Per contro',
    accepted: ['per contro', 'di converso', "per converso", 'per contro,'],
    hints: ['Per contro', 'Tanto più che', 'Beninteso', 'Quantomeno'],
    explanation:
      'Per contro introduces the symmetrical opposite of what was just stated — cleaner and more analytical than invece.',
  },
  {
    id: 'cc-c2-4',
    level: 'C2',
    context: 'Aprire una trattativa mettendo al riparo un principio.',
    lines: [
      { speaker: 'Negoziatore', it: '___ che i termini di consegna vanno rispettati, sul prezzo possiamo discutere.', en: 'It being understood that the delivery deadlines must be met, we can discuss the price.' },
      { speaker: 'Controparte', it: 'Su questo siamo d’accordo.', en: 'On that we agree.' },
    ],
    answer: 'Fermo restando',
    accepted: ['fermo restando', 'premesso', 'posto'],
    hints: ['Fermo restando', 'Tanto più', 'A rigore', 'Per contro'],
    explanation:
      'Fermo restando che fences off a non-negotiable point before opening everything else. Fermo agrees with what follows: fermi restando gli obblighi.',
  },
  {
    id: 'cc-c2-5',
    level: 'C2',
    context: 'Critica misurata, e proprio per questo severa.',
    lines: [
      { speaker: 'Commissario', it: 'Non voglio parlare di malafede.', en: 'I do not wish to speak of bad faith.' },
      { speaker: 'Commissario', it: 'Si è trattato però di una condotta ___ imprudente.', en: 'It was, however, conduct that was at the very least imprudent.' },
    ],
    answer: 'quantomeno',
    accepted: ['quanto meno', 'perlomeno', 'per lo meno', 'quantomeno,'],
    hints: ['quantomeno', 'beninteso', 'peraltro', 'a rigore'],
    explanation:
      'Quantomeno retreats to a weaker claim after implying a stronger one — in criticism, the understatement is what makes it damning.',
  },
  {
    id: 'cc-c2-6',
    level: 'C2',
    context: 'Impazienza verso obiezioni che rinviano la decisione.',
    lines: [
      { speaker: 'Presidente', it: 'Sono tre riunioni che discutiamo lo stesso comma.', en: 'We have spent three meetings discussing the same clause.' },
      { speaker: 'Presidente', it: 'Basta con i ___, decidiamo.', en: 'Enough hair-splitting, let us decide.' },
    ],
    answer: 'distinguo',
    accepted: ['distinguo', 'cavilli'],
    hints: ['distinguo', 'risvolti', 'postille', 'spunti'],
    explanation:
      'I distinguo are the fine distinctions that stall a decision — usually disparaging, and invariable in the plural (never i distingui).',
  },
];

export const convClozeByLevel = (level: ConvCloze['level']) => CONV_CLOZE.filter((c) => c.level === level);
