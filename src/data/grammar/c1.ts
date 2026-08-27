import type { GrammarLesson } from '../types';

/**
 * C1 grammar: the written language, and the syntax that carries emphasis.
 *
 * By this level the paradigms are finished. What is left is the machinery
 * educated Italians use without noticing — the narrative tenses, the four jobs
 * of si, nominalisation, and word order used as a tool rather than a habit.
 */
export const GRAMMAR_C1: GrammarLesson[] = [
  {
    id: 'gr-c1-passato-remoto',
    level: 'C1',
    title: 'Il passato remoto',
    focus: 'fu, disse, vide — the tense of narrative and of the south',
    explanation:
      'The passato remoto reports a completed action with no bearing on the present. In the north it survives almost exclusively in writing — novels, history, journalism — while in much of the south it is ordinary speech. You need it to read anything literary at all. Its irregularity is concentrated and patterned: many verbs are irregular only in the first and third singular and the third plural, with the other three persons regular, which is why dissi, dicesti, disse alternates the way it does.',
    tables: [
      {
        caption: 'Regular forms',
        headers: ['', 'parlare', 'credere', 'partire'],
        rows: [
          ['io', 'parlai', 'credei / credetti', 'partii'],
          ['tu', 'parlasti', 'credesti', 'partisti'],
          ['lui / lei', 'parlò', 'credé / credette', 'partì'],
          ['noi', 'parlammo', 'credemmo', 'partimmo'],
          ['voi', 'parlaste', 'credeste', 'partiste'],
          ['loro', 'parlarono', 'crederono / credettero', 'partirono'],
        ],
      },
      {
        caption: 'The 1-3-3 pattern: irregular only in three persons',
        headers: ['Verb', 'io', 'tu', 'lui', 'loro'],
        rows: [
          ['dire', 'dissi', 'dicesti', 'disse', 'dissero'],
          ['fare', 'feci', 'facesti', 'fece', 'fecero'],
          ['vedere', 'vidi', 'vedesti', 'vide', 'videro'],
          ['prendere', 'presi', 'prendesti', 'prese', 'presero'],
          ['essere', 'fui', 'fosti', 'fu', 'furono'],
          ['avere', 'ebbi', 'avesti', 'ebbe', 'ebbero'],
        ],
      },
    ],
    examples: [
      { it: 'Nel 1861 l’Italia divenne uno stato unitario.', en: 'In 1861 Italy became a unified state.' },
      { it: 'Si alzò, prese il cappotto e uscì senza dire niente.', en: 'He got up, took his coat and left without saying anything.' },
      { it: 'Dante nacque a Firenze e morì a Ravenna.', en: 'Dante was born in Florence and died in Ravenna.' },
      { it: 'Fu allora che capii.', en: 'It was then that I understood.' },
    ],
    pitfall:
      'The passato remoto cannot be used for anything still connected to now. Stamattina andai al mercato is wrong wherever you are from: recency requires the passato prossimo, and the remoto marks a break with the present.',
    questions: [
      {
        id: 'gr-pr-q1',
        prompt: 'Qual è il passato remoto di «fare» (lui)?',
        options: ['facè', 'fece', 'fecé', 'facette'],
        answer: 1,
        explanation: 'Fare follows the 1-3-3 pattern: feci, facesti, fece, facemmo, faceste, fecero.',
      },
      {
        id: 'gr-pr-q2',
        prompt: 'Quale frase è sbagliata?',
        options: ['Nel 1492 Colombo arrivò in America', 'Dante morì nel 1321', 'Stamattina andai al mercato', 'Fu un momento decisivo'],
        answer: 2,
        explanation: 'This morning is still connected to now, so it needs the passato prossimo.',
      },
      {
        id: 'gr-pr-q3',
        prompt: 'In quali persone i verbi irregolari restano regolari?',
        options: ['io, lui, loro', 'tu, noi, voi', 'solo noi', 'tutte'],
        answer: 1,
        explanation: 'The irregularity sits in the first singular, third singular and third plural.',
      },
    ],
  },
  {
    id: 'gr-c1-tempi-narrativi',
    level: 'C1',
    title: 'Il sistema dei tempi narrativi',
    focus: 'how a story places its events in relation to each other',
    explanation:
      'Narrative Italian runs on a division of labour. The passato remoto or passato prossimo carries the chain of events; the imperfetto holds the background still around them; the trapassato reaches back before the chain began; and the condizionale composto looks forward from a point inside the past. The trapassato remoto — appena ebbe finito — appears only after a temporal conjunction with a passato remoto main verb, which is why it is rare and instantly recognisable as literary.',
    tables: [
      {
        caption: 'What each tense does in a narrative',
        headers: ['Tense', 'Role', 'Example'],
        rows: [
          ['passato remoto', 'the chain of events', 'Entrò e si sedette.'],
          ['imperfetto', 'the surrounding scene', 'Fuori pioveva.'],
          ['trapassato prossimo', 'before the chain', 'Aveva già cenato.'],
          ['trapassato remoto', 'immediately before, after a conjunction', 'Appena ebbe finito, uscì.'],
          ['condizionale composto', 'the future from inside the past', 'Non sapeva che sarebbe tornato.'],
        ],
      },
    ],
    examples: [
      { it: 'Quando ebbe letto la lettera, la bruciò.', en: 'Once he had read the letter, he burnt it.' },
      { it: 'Pioveva da giorni; la strada era deserta e nessuno usciva più.', en: 'It had rained for days; the road was deserted and nobody went out any more.' },
      { it: 'Aveva promesso che sarebbe tornato prima di sera.', en: 'He had promised he would be back before evening.' },
      { it: 'Si voltò: alle sue spalle non c’era nessuno.', en: 'He turned: there was nobody behind him.' },
    ],
    pitfall:
      'The trapassato remoto is legal only after dopo che, appena, quando or non appena, and only when the main verb is a passato remoto. With a passato prossimo it is simply wrong, which is why it has almost vanished from modern prose.',
    questions: [
      {
        id: 'gr-tn-q1',
        prompt: 'Quale tempo regge lo sfondo di una narrazione?',
        options: ['passato remoto', 'imperfetto', 'trapassato remoto', 'condizionale'],
        answer: 1,
        explanation: 'The imperfetto holds the scene still while the events move.',
      },
      {
        id: 'gr-tn-q2',
        prompt: 'Dopo quale congiunzione può comparire il trapassato remoto?',
        options: ['perché', 'appena', 'sebbene', 'mentre'],
        answer: 1,
        explanation: 'Appena, dopo che, quando — with a passato remoto in the main clause.',
      },
      {
        id: 'gr-tn-q3',
        prompt: '«Aveva promesso che ___ .» (tornare)',
        options: ['tornerebbe', 'sarebbe tornato', 'tornava', 'fosse tornato'],
        answer: 1,
        explanation: 'A future seen from a past point takes the past conditional.',
      },
    ],
  },
  {
    id: 'gr-c1-congiuntivo-subordinate',
    level: 'C1',
    title: 'Il congiuntivo nelle subordinate',
    focus: 'relative, concessive and comparative clauses that demand it',
    explanation:
      'Beyond the familiar triggers, the subjunctive appears wherever a clause describes something hypothetical rather than actual. A relative clause defining a sought-after thing takes it — cerco una casa che abbia il giardino, because the house may not exist. Superlatives and negatives do too: è la cosa più bella che abbia visto, non c’è nessuno che lo sappia. So does any comparative with di quanto: è più difficile di quanto pensassi.',
    tables: [
      {
        caption: 'Where it appears',
        headers: ['Context', 'Example', 'Why'],
        rows: [
          ['sought, not known', 'Cerco un libro che spieghi questo.', 'the book may not exist'],
          ['known', 'Ho un libro che spiega questo.', 'indicative: it exists'],
          ['after a superlative', 'È il film più bello che abbia visto.', 'evaluative'],
          ['after a negative', 'Non c’è nulla che possa fare.', 'nothing is asserted'],
          ['di quanto', 'È più caro di quanto credessi.', 'comparison with a belief'],
          ['chiunque, qualunque, ovunque', 'Chiunque sia, non apro.', 'indefinite'],
        ],
      },
    ],
    examples: [
      { it: 'Cerco qualcuno che sappia il tedesco.', en: 'I am looking for someone who knows German.' },
      { it: 'Conosco qualcuno che sa il tedesco.', en: 'I know someone who knows German. (indicative: he exists)' },
      { it: 'È stata la giornata più lunga che io ricordi.', en: 'It was the longest day I can remember.' },
      { it: 'Ovunque tu vada, ti troverò.', en: 'Wherever you go, I will find you.' },
    ],
    pitfall:
      'The same relative clause takes either mood depending on whether the thing is known to exist. Cerco una segretaria che parli russo advertises a post; cerco la segretaria che parla russo means you are looking for a specific colleague.',
    questions: [
      {
        id: 'gr-cs-q1',
        prompt: '«Cerco una casa che ___ il giardino.» (avere)',
        options: ['ha', 'abbia', 'avrà', 'avrebbe'],
        answer: 1,
        explanation: 'The house is sought rather than known, so the clause is hypothetical.',
      },
      {
        id: 'gr-cs-q2',
        prompt: '«È il film più bello che ___ mai visto.»',
        options: ['ho', 'abbia', 'avrei', 'avevo'],
        answer: 1,
        explanation: 'A superlative makes the relative clause evaluative, and the subjunctive follows.',
      },
      {
        id: 'gr-cs-q3',
        prompt: '«È più difficile di quanto ___ .» (pensare)',
        options: ['pensavo', 'pensassi', 'penserei', 'ho pensato'],
        answer: 1,
        explanation: 'Di quanto governs the subjunctive in careful Italian.',
      },
    ],
  },
  {
    id: 'gr-c1-nominalizzazione',
    level: 'C1',
    title: 'Nominalizzazione e stile giornalistico',
    focus: 'l’approvazione della legge — turning verbs into nouns',
    explanation:
      'Italian newspapers and official prose prefer nouns where speech uses verbs: dopo che la legge è stata approvata becomes dopo l’approvazione della legge. It compresses, and it removes the agent without a passive. Headlines take it further, dropping articles and verbs altogether — Approvata la riforma, Aumento dei prezzi — which is why a headline can be hard to parse even when every word is known.',
    tables: [
      {
        caption: 'Verb to noun',
        headers: ['Verbal', 'Nominal'],
        rows: [
          ['dopo che è arrivato', 'dopo il suo arrivo'],
          ['quando la legge è stata approvata', 'con l’approvazione della legge'],
          ['perché i prezzi sono aumentati', 'a causa dell’aumento dei prezzi'],
          ['se si riduce la spesa', 'con la riduzione della spesa'],
        ],
      },
      {
        caption: 'Headline grammar',
        headers: ['Headline', 'Full sentence'],
        rows: [
          ['Approvata la riforma', 'La riforma è stata approvata.'],
          ['Aumento dei prezzi in vista', 'I prezzi stanno per aumentare.'],
          ['Al via i lavori', 'I lavori sono cominciati.'],
          ['Nessun accordo sul bilancio', 'Non è stato raggiunto un accordo sul bilancio.'],
        ],
      },
    ],
    examples: [
      { it: 'L’entrata in vigore della norma è prevista per gennaio.', en: 'The regulation is due to come into force in January.' },
      { it: 'Si registra un calo delle vendite.', en: 'A drop in sales has been recorded.' },
      { it: 'A seguito della chiusura dello stabilimento…', en: 'Following the closure of the plant…' },
      { it: 'Il varo del provvedimento ha suscitato polemiche.', en: 'The launch of the measure caused controversy.' },
    ],
    pitfall:
      'Nominalised prose is standard in writing and stilted in speech. Saying a seguito della chiusura to a friend, rather than dopo che hanno chiuso, sounds like reading aloud from a circular.',
    questions: [
      {
        id: 'gr-nom-q1',
        prompt: 'Come si nominalizza «dopo che è arrivato»?',
        options: ['dopo l’arrivare', 'dopo il suo arrivo', 'dopo essere arrivo', 'dopo l’arrivato'],
        answer: 1,
        explanation: 'The verb becomes a noun with a possessive or a di phrase.',
      },
      {
        id: 'gr-nom-q2',
        prompt: '«Approvata la riforma» corrisponde a:',
        options: ['La riforma approva', 'La riforma è stata approvata', 'Approvare la riforma', 'Si approverà la riforma'],
        answer: 1,
        explanation: 'Headlines drop the auxiliary of a passive, leaving the participle in front.',
      },
      {
        id: 'gr-nom-q3',
        prompt: 'Dove è fuori luogo la nominalizzazione?',
        options: ['in un articolo di giornale', 'in una circolare', 'in una conversazione tra amici', 'in un testo di legge'],
        answer: 2,
        explanation: 'In speech it sounds like reading from a document.',
      },
    ],
  },
  {
    id: 'gr-c1-dislocazioni',
    level: 'C1',
    title: 'Dislocazioni e messa in rilievo',
    focus: 'il libro l’ho letto, è Marco che l’ha detto',
    explanation:
      'Italian word order is far freer than English, and it uses that freedom to mark what matters. Left dislocation moves the object to the front with a resumptive pronoun — il libro, l’ho già letto — and is the normal spoken way to set a topic. Right dislocation adds it as an afterthought: l’ho già letto, il libro. The cleft è … che isolates one element as the point: è Marco che l’ha detto, non io. None of these is careless speech; they are the ordinary machinery of emphasis.',
    tables: [
      {
        caption: 'The constructions',
        headers: ['Construction', 'Example', 'Effect'],
        rows: [
          ['neutral', 'Ho già letto il libro.', 'no marking'],
          ['left dislocation', 'Il libro, l’ho già letto.', 'the book is the topic'],
          ['right dislocation', 'L’ho già letto, il libro.', 'afterthought, very spoken'],
          ['cleft', 'È il libro che ho letto.', 'that, and not something else'],
          ['cleft on a person', 'È stato Marco a dirlo.', 'he, and nobody else'],
          ['fronting', 'Bello, quel film.', 'evaluative, emphatic'],
        ],
      },
    ],
    examples: [
      { it: 'Di soldi non ne ho.', en: 'Money, I do not have any.' },
      { it: 'È a te che parlo.', en: 'It is you I am talking to.' },
      { it: 'Al mare ci andiamo ad agosto.', en: 'To the seaside, we go in August.' },
      { it: 'Non è che non voglia: non posso.', en: 'It is not that I do not want to: I cannot.' },
    ],
    pitfall:
      'A dislocated object needs its resumptive pronoun: il libro l’ho letto, never il libro ho letto. The pronoun is what licenses the fronting, and dropping it produces a sentence no Italian would say.',
    questions: [
      {
        id: 'gr-dis-q1',
        prompt: 'Quale frase è corretta?',
        options: ['Il libro ho letto', 'Il libro l’ho letto', 'Il libro lo ho letto ieri il libro', 'Ho letto il libro l’ho'],
        answer: 1,
        explanation: 'Left dislocation requires the resumptive pronoun.',
      },
      {
        id: 'gr-dis-q2',
        prompt: 'Che cosa fa «È Marco che l’ha detto»?',
        options: ['Attenua l’affermazione', 'Isola Marco come il punto della frase', 'Rende la frase formale', 'Riporta un discorso indiretto'],
        answer: 1,
        explanation: 'The cleft singles out one element as the focus.',
      },
      {
        id: 'gr-dis-q3',
        prompt: '«Di soldi non ne ho» è un esempio di:',
        options: ['dislocazione a sinistra con ne', 'passivo', 'nominalizzazione', 'discorso indiretto libero'],
        answer: 0,
        explanation: 'The partitive is fronted and resumed by ne.',
      },
    ],
  },
  {
    id: 'gr-c1-si-quattro',
    level: 'C1',
    title: 'Le quattro funzioni del si',
    focus: 'one syllable, four grammars',
    explanation:
      'Si does four different jobs, and telling them apart is what lets you parse a difficult sentence. Reflexive: si lava, he washes himself. Reciprocal: si guardano, they look at each other. Passivante: si vendono case, houses are sold. Impersonal: si mangia bene qui, one eats well here. The last two look identical until you check agreement — the passivante has a grammatical subject and agrees with it, while the impersonal has none and stays singular.',
    tables: [
      {
        caption: 'Telling them apart',
        headers: ['Function', 'Example', 'Test'],
        rows: [
          ['reflexive', 'Marco si lava.', 'the subject acts on itself'],
          ['reciprocal', 'Si scrivono ogni giorno.', 'plural, "each other"'],
          ['passivante', 'Si vendono case.', 'a real subject, verb agrees'],
          ['impersonale', 'Si mangia bene.', 'no subject, always singular'],
        ],
      },
      {
        caption: 'Agreement in compound tenses',
        headers: ['Type', 'Example', 'Note'],
        rows: [
          ['passivante', 'Si sono vendute molte case.', 'agrees with case'],
          ['impersonale', 'Si è mangiato bene.', 'singular, but essere'],
          ['impersonale + aggettivo', 'Quando si è stanchi…', 'the adjective goes plural'],
        ],
      },
    ],
    examples: [
      { it: 'In quel ristorante si mangia benissimo.', en: 'You eat very well at that restaurant.' },
      { it: 'Si sono costruite troppe case.', en: 'Too many houses have been built.' },
      { it: 'Quando si è giovani non ci si pensa.', en: 'When you are young you do not think about it.' },
      { it: 'Non ci si annoia mai qui.', en: 'One is never bored here.' },
    ],
    pitfall:
      'The impersonal of a reflexive verb needs ci si, not si si: ci si alza presto, ci si annoia. The doubling is avoided by changing the first si to ci.',
    questions: [
      {
        id: 'gr-si-q1',
        prompt: '«Si ___ molte case negli anni Sessanta.» (costruire)',
        options: ['è costruito', 'sono costruite', 'ha costruito', 'è costruita'],
        answer: 1,
        explanation: 'The passivante has case as its subject, so the verb agrees and takes essere.',
      },
      {
        id: 'gr-si-q2',
        prompt: 'Come si rende impersonale «alzarsi»?',
        options: ['si si alza', 'ci si alza', 'si alza si', 'se si alza'],
        answer: 1,
        explanation: 'The first si becomes ci to avoid the doubling.',
      },
      {
        id: 'gr-si-q3',
        prompt: '«Quando si è ___ , si dorme male.» (stanco)',
        options: ['stanco', 'stanchi', 'stanca', 'stanche'],
        answer: 1,
        explanation: 'The impersonal si is grammatically singular but semantically plural, so the adjective goes plural.',
      },
    ],
  },
  {
    id: 'gr-c1-concessive',
    level: 'C1',
    title: 'Concessive, limitative, eccettuative',
    focus: 'per quanto, sia pure, tranne che, fuorché',
    explanation:
      'A C1 argument needs to concede ground precisely. Per quanto plus subjunctive concedes a degree — per quanto sia difficile, ci provo. Sia pure and pur concede grudgingly. Limitatives narrow the claim: per quel che ne so, limitatamente a. Exceptives carve something out: tranne che, salvo che, fuorché, a meno che non. Each takes its own mood, and the subjunctive is the default across the group.',
    tables: [
      {
        caption: 'By type',
        headers: ['Type', 'Connective', 'Example'],
        rows: [
          ['concessive', 'per quanto, benché, sebbene, nonostante', 'Per quanto sia tardi, resto.'],
          ['concessive (grudging)', 'sia pure, pur + gerundio', 'Sia pure con ritardo, è arrivato.'],
          ['limitative', 'per quel che, per quanto ne so, limitatamente a', 'Per quanto ne so, è ancora aperto.'],
          ['exceptive', 'tranne che, salvo che, fuorché, eccetto che', 'Vengono tutti, tranne che Marco.'],
          ['exceptive + subj.', 'a meno che non', 'Vengo, a meno che non piova.'],
        ],
      },
    ],
    examples: [
      { it: 'Per quanto ci provi, non ci riesco.', en: 'However hard I try, I cannot do it.' },
      { it: 'Nonostante avesse ragione, ha ceduto.', en: 'Although he was right, he gave in.' },
      { it: 'Non esce mai, salvo che per andare al lavoro.', en: 'He never goes out, except to go to work.' },
      { it: 'Per quel che mi riguarda, la questione è chiusa.', en: 'As far as I am concerned, the matter is closed.' },
    ],
    pitfall:
      'Anche se takes the indicative while benché, sebbene and nonostante take the subjunctive. They translate identically into English, so the mood has to be attached to the Italian connective, not to the meaning.',
    questions: [
      {
        id: 'gr-conc2-q1',
        prompt: '«Per quanto ___ tardi, resto.» (essere)',
        options: ['è', 'sia', 'sarà', 'era'],
        answer: 1,
        explanation: 'Per quanto in its concessive sense governs the subjunctive.',
      },
      {
        id: 'gr-conc2-q2',
        prompt: 'Quale connettivo regge l’indicativo?',
        options: ['benché', 'sebbene', 'anche se', 'nonostante'],
        answer: 2,
        explanation: 'Anche se is the one concessive of the group that takes the indicative.',
      },
      {
        id: 'gr-conc2-q3',
        prompt: '«Vengo, ___ non piova.»',
        options: ['tranne che', 'a meno che', 'fuorché', 'salvo'],
        answer: 1,
        explanation: 'A meno che non plus subjunctive is the standard exceptive with a clause.',
      },
    ],
  },
  {
    id: 'gr-c1-reggenze',
    level: 'C1',
    title: 'Reggenze verbali',
    focus: 'the prepositions verbs demand, and the pairs that change meaning',
    explanation:
      'At C1 the remaining errors are rarely morphological — they are prepositional. Italian verbs govern fixed prepositions that do not map onto English, and some verbs change meaning with the preposition: pensare a is to think about, pensare di is to intend. Contare su is to rely on, contare di is to plan to. These have to be learned as pairs, because both versions are grammatical and only one says what you mean.',
    tables: [
      {
        caption: 'Same verb, different preposition',
        headers: ['Verb + prep.', 'Meaning', 'Example'],
        rows: [
          ['pensare a', 'to think about', 'Penso a te.'],
          ['pensare di', 'to intend, to have an opinion', 'Penso di partire.'],
          ['contare su', 'to rely on', 'Conto su di te.'],
          ['contare di', 'to plan to', 'Conto di finire domani.'],
          ['finire di', 'to stop doing', 'Ho finito di lavorare.'],
          ['finire per', 'to end up doing', 'Ho finito per accettare.'],
          ['decidere di', 'to decide to', 'Ho deciso di restare.'],
          ['decidersi a', 'to bring oneself to', 'Si è deciso a partire.'],
        ],
      },
      {
        caption: 'Fixed prepositions worth memorising',
        headers: ['a', 'di', 'da', 'su'],
        rows: [
          ['riuscire a', 'cercare di', 'dipendere da', 'contare su'],
          ['cominciare a', 'smettere di', 'guardarsi da', 'riflettere su'],
          ['abituarsi a', 'accorgersi di', 'astenersi da', 'basarsi su'],
          ['rinunciare a', 'rendersi conto di', 'derivare da', 'insistere su'],
        ],
      },
    ],
    examples: [
      { it: 'Conto su di te.', en: 'I am counting on you. (note the su di before a pronoun)' },
      { it: 'Ha finito per accettare la proposta.', en: 'He ended up accepting the proposal.' },
      { it: 'Non riesco ad abituarmi a questo orario.', en: 'I cannot get used to these hours.' },
      { it: 'Si è deciso a parlargliene.', en: 'He finally brought himself to speak to him about it.' },
    ],
    pitfall:
      'Before a personal pronoun, su and its relatives insert di: conto su di te, not conto su te. The same happens with sopra di me, dietro di lui, contro di noi.',
    questions: [
      {
        id: 'gr-reg2-q1',
        prompt: '«___ partire domani.» (intenzione)',
        options: ['Penso a', 'Penso di', 'Penso su', 'Penso per'],
        answer: 1,
        explanation: 'Pensare di plus infinitive expresses intention; pensare a is to think about something.',
      },
      {
        id: 'gr-reg2-q2',
        prompt: 'Come si dice «I am counting on you»?',
        options: ['Conto su te', 'Conto su di te', 'Conto di te', 'Conto a te'],
        answer: 1,
        explanation: 'Su takes di before a personal pronoun.',
      },
      {
        id: 'gr-reg2-q3',
        prompt: 'Che cosa significa «ha finito per accettare»?',
        options: ['Ha smesso di accettare', 'Alla fine ha accettato', 'Ha accettato per finire', 'Ha rifiutato'],
        answer: 1,
        explanation: 'Finire per means to end up doing, quite different from finire di.',
      },
    ],
  },
  {
    id: 'gr-c1-connettivi-testuali',
    level: 'C1',
    title: 'Connettivi testuali',
    focus: 'organising a text, not just a sentence',
    explanation:
      'At C1 connectives stop joining clauses and start structuring a text: announcing a plan, signalling a digression, returning from one, and closing. In primo luogo, per inciso, riprendendo il discorso, in conclusione. Used well they let a reader follow a long argument; used mechanically they read as a template. The rule of thumb is that a connective should mark a turn the reader could not have predicted.',
    tables: [
      {
        caption: 'By position in a text',
        headers: ['Move', 'Connectives'],
        rows: [
          ['announce', 'in primo luogo, anzitutto, per cominciare'],
          ['continue', 'inoltre, per di più, va poi aggiunto che'],
          ['digress', 'per inciso, tra parentesi, a margine'],
          ['return', 'riprendendo, tornando a, dicevamo'],
          ['exemplify', 'nella fattispecie, per esempio, si pensi a'],
          ['contrast', 'per contro, viceversa, di converso'],
          ['conclude', 'in conclusione, in definitiva, alla luce di quanto detto'],
        ],
      },
    ],
    examples: [
      { it: 'In primo luogo, occorre definire i termini.', en: 'First, the terms need defining.' },
      { it: 'Per inciso, la stessa cosa vale per il resto.', en: 'Incidentally, the same goes for the rest.' },
      { it: 'Tornando al punto, la questione resta aperta.', en: 'Returning to the point, the matter remains open.' },
      { it: 'Alla luce di quanto detto, la scelta appare obbligata.', en: 'In the light of the above, the choice appears inevitable.' },
    ],
    pitfall:
      'In primo luogo commits you to a secondo luogo. Announcing a structure and then abandoning it is more damaging to a text than using no connectives at all.',
    questions: [
      {
        id: 'gr-ct2-q1',
        prompt: 'Quale connettivo segnala una digressione?',
        options: ['in primo luogo', 'per inciso', 'in conclusione', 'inoltre'],
        answer: 1,
        explanation: 'Per inciso, tra parentesi and a margine all flag an aside.',
      },
      {
        id: 'gr-ct2-q2',
        prompt: '«Alla luce di quanto detto» serve a:',
        options: ['aprire un tema', 'concludere', 'esemplificare', 'contrastare'],
        answer: 1,
        explanation: 'It gathers the argument before the conclusion.',
      },
      {
        id: 'gr-ct2-q3',
        prompt: 'Che cosa impegna «in primo luogo»?',
        options: ['Nulla', 'A un secondo luogo', 'A una conclusione', 'A una citazione'],
        answer: 1,
        explanation: 'Announcing an order commits the writer to completing it.',
      },
    ],
  },
  {
    id: 'gr-c1-lessico-formale',
    level: 'C1',
    title: 'Lessico formale e latinismi',
    focus: 'the Latin register educated Italian reaches for',
    explanation:
      'Italian has a productive high register drawn straight from Latin, and it is not decorative — it is what administrative, legal and academic prose is written in. Effettuare for fare, adire for rivolgersi a, de facto and ipso facto used unchanged. The skill at C1 is passive as much as active: reading a contract or a court report requires recognising these, even if you would never write ottemperare in an email.',
    tables: [
      {
        caption: 'Everyday and formal',
        headers: ['Everyday', 'Formal', 'Context'],
        rows: [
          ['fare', 'effettuare', 'effettuare un pagamento'],
          ['dare', 'erogare', 'erogare un finanziamento'],
          ['chiedere', 'richiedere, istanza', 'presentare istanza'],
          ['dire', 'comunicare, rendere noto', 'si rende noto che'],
          ['finire', 'ultimare, portare a termine', 'ultimare i lavori'],
          ['rispettare', 'ottemperare a', 'ottemperare alle norme'],
        ],
      },
      {
        caption: 'Latin still in use',
        headers: ['Phrase', 'Meaning'],
        rows: [
          ['de facto', 'in fact, in practice'],
          ['ipso facto', 'by that very fact'],
          ['ad hoc', 'purpose-made'],
          ['in extremis', 'at the last moment'],
          ['una tantum', 'one-off'],
          ['pro capite', 'per head'],
        ],
      },
    ],
    examples: [
      { it: 'Si rende noto che i lavori saranno ultimati entro marzo.', en: 'It is hereby announced that the works will be completed by March.' },
      { it: 'È previsto un contributo una tantum.', en: 'A one-off payment is provided for.' },
      { it: 'Il pagamento va effettuato entro trenta giorni.', en: 'Payment must be made within thirty days.' },
      { it: 'Una commissione ad hoc esaminerà i ricorsi.', en: 'A purpose-appointed committee will examine the appeals.' },
    ],
    pitfall:
      'This register is for documents. Using effettuare un acquisto when you mean comprare, in conversation, is the Italian equivalent of saying "I shall now proceed to purchase" in a shop.',
    questions: [
      {
        id: 'gr-lf-q1',
        prompt: 'Quale verbo è il corrispettivo formale di «fare un pagamento»?',
        options: ['operare', 'effettuare', 'adempiere', 'esperire'],
        answer: 1,
        explanation: 'Effettuare un pagamento is the standard administrative phrasing.',
      },
      {
        id: 'gr-lf-q2',
        prompt: 'Che cosa significa «una tantum»?',
        options: ['annuale', 'una sola volta', 'a rate', 'facoltativo'],
        answer: 1,
        explanation: 'A one-off, as opposed to a recurring payment.',
      },
      {
        id: 'gr-lf-q3',
        prompt: 'Dove è inappropriato «ottemperare»?',
        options: ['in una circolare', 'in un contratto', 'in un messaggio a un amico', 'in una sentenza'],
        answer: 2,
        explanation: 'The high register belongs to documents, not to conversation.',
      },
    ],
  },
];
