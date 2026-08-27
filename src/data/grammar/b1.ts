import type { GrammarLesson } from '../types';

/**
 * B1 grammar: the level where the subjunctive arrives.
 *
 * It is the point most learners stall at, usually because it is taught as a
 * list of trigger phrases. It is presented here as one idea — the indicative
 * states, the subjunctive submits something to a mind — with the trigger lists
 * as evidence for that idea rather than as the thing to memorise.
 */
export const GRAMMAR_B1: GrammarLesson[] = [
  {
    id: 'gr-b1-congiuntivo-forme',
    level: 'B1',
    title: 'Il congiuntivo presente: le forme',
    focus: 'sia, abbia, faccia, vada — and why the three singulars are identical',
    explanation:
      'The present subjunctive is built from the io form of the present indicative: faccio gives faccia, vengo gives venga, esco gives esca. That single observation removes most of the apparent irregularity. The three singular persons share one form, which is why a subject pronoun often reappears in subjunctive clauses — che tu sia rather than che sia — purely to say who is meant.',
    tables: [
      {
        caption: 'Regular endings',
        headers: ['', 'parlare', 'prendere', 'dormire', 'capire'],
        rows: [
          ['che io / tu / lui', 'parli', 'prenda', 'dorma', 'capisca'],
          ['che noi', 'parliamo', 'prendiamo', 'dormiamo', 'capiamo'],
          ['che voi', 'parliate', 'prendiate', 'dormiate', 'capiate'],
          ['che loro', 'parlino', 'prendano', 'dormano', 'capiscano'],
        ],
      },
      {
        caption: 'Built from the io form',
        headers: ['Verb', 'io (indicative)', 'Subjunctive', 'Note'],
        rows: [
          ['fare', 'faccio', 'faccia', 'the stem carries over'],
          ['venire', 'vengo', 'venga', 'same'],
          ['uscire', 'esco', 'esca', 'same'],
          ['potere', 'posso', 'possa', 'same'],
          ['essere', '—', 'sia', 'genuinely irregular'],
          ['avere', '—', 'abbia', 'genuinely irregular'],
          ['sapere', '—', 'sappia', 'genuinely irregular'],
          ['dare / stare', '—', 'dia / stia', 'genuinely irregular'],
        ],
      },
    ],
    examples: [
      { it: 'Penso che sia una buona idea.', en: 'I think it is a good idea.' },
      { it: 'Voglio che tu venga con noi.', en: 'I want you to come with us.' },
      { it: 'Spero che abbiano tempo.', en: 'I hope they have time.' },
      { it: 'Non credo che faccia freddo.', en: 'I do not think it is cold.' },
    ],
    pitfall:
      'Because the three singulars are identical, Italians insert the pronoun where English would not: spero che tu stia bene. Leaving it out is grammatical but often genuinely ambiguous.',
    questions: [
      {
        id: 'gr-cp-q1',
        prompt: 'Da quale forma si ricava il congiuntivo di «venire»?',
        options: ['dall’infinito', 'dalla prima persona del presente', 'dal participio', 'dal futuro'],
        answer: 1,
        explanation: 'Vengo gives venga. The same works for faccio → faccia and esco → esca.',
      },
      {
        id: 'gr-cp-q2',
        prompt: 'Perché si dice spesso «che tu sia» invece di «che sia»?',
        options: [
          'Per enfasi retorica',
          'Perché le tre persone singolari hanno la stessa forma',
          'Perché è più formale',
          'Perché il congiuntivo lo richiede sempre',
        ],
        answer: 1,
        explanation: 'One form covers io, tu and lui, so the pronoun does the work the ending cannot.',
      },
      {
        id: 'gr-cp-q3',
        prompt: 'Quale è il congiuntivo presente di «sapere» (io)?',
        options: ['sapia', 'sappia', 'sepa', 'sapesse'],
        answer: 1,
        explanation: 'Sapere is one of the handful of genuine irregulars: sappia, sappiamo, sappiate.',
      },
    ],
  },
  {
    id: 'gr-b1-congiuntivo-usi',
    level: 'B1',
    title: 'Quando si usa il congiuntivo',
    focus: 'opinion, doubt, emotion, will — one idea, not a list',
    explanation:
      'The indicative states what is; the subjunctive puts something through a mind — a hope, a doubt, an opinion, a wish. So è vero che viene takes the indicative because it asserts a fact, while credo che venga takes the subjunctive because it filters that fact through a belief. Certainty verbs (sapere, essere sicuro, è vero) keep the indicative for exactly the same reason. Note that the negative flips it: non è vero che venga.',
    tables: [
      {
        caption: 'What triggers it',
        headers: ['Trigger', 'Example'],
        rows: [
          ['opinion: penso, credo, mi pare', 'Credo che sia tardi.'],
          ['doubt: dubito, non sono sicuro', 'Dubito che venga.'],
          ['will: voglio, spero, preferisco', 'Voglio che tu stia bene.'],
          ['emotion: sono contento, ho paura', 'Ho paura che piova.'],
          ['impersonal: è possibile, bisogna, è meglio', 'È meglio che parta ora.'],
          ['conjunctions: benché, affinché, prima che, a meno che', 'Benché sia tardi, resto.'],
        ],
      },
      {
        caption: 'Indicative instead',
        headers: ['Certainty', 'Example'],
        rows: [
          ['so che', 'So che viene.'],
          ['è vero che', 'È vero che costa molto.'],
          ['sono sicuro che', 'Sono sicuro che arriva.'],
          ['si vede che', 'Si vede che è stanco.'],
        ],
      },
    ],
    examples: [
      { it: 'Penso che tu abbia ragione.', en: 'I think you are right.' },
      { it: 'So che hai ragione.', en: 'I know you are right. (certainty → indicative)' },
      { it: 'Bisogna che qualcuno glielo dica.', en: 'Somebody needs to tell him.' },
      { it: 'Nonostante piova, usciamo lo stesso.', en: 'Even though it is raining, we are going out anyway.' },
    ],
    pitfall:
      'When both clauses share a subject, Italian avoids the subjunctive entirely and uses di plus the infinitive: penso di avere ragione, not penso che io abbia ragione. Learners who have just discovered the subjunctive tend to over-apply it here.',
    questions: [
      {
        id: 'gr-cu-q1',
        prompt: 'Quale frase richiede il congiuntivo?',
        options: ['So che viene', 'È vero che viene', 'Credo che venga', 'Ho visto che viene'],
        answer: 2,
        explanation: 'Credere filters the fact through an opinion; the other three assert it.',
      },
      {
        id: 'gr-cu-q2',
        prompt: 'Il soggetto è lo stesso in entrambe le frasi. Quale forma è corretta?',
        options: ['Penso che io abbia ragione', 'Penso di avere ragione', 'Penso che ho ragione', 'Penso avere ragione'],
        answer: 1,
        explanation: 'With one subject Italian uses di plus the infinitive rather than a che clause.',
      },
      {
        id: 'gr-cu-q3',
        prompt: '«Benché ___ tardi, resto ancora un po’.»',
        options: ['è', 'sia', 'sarà', 'era'],
        answer: 1,
        explanation: 'Benché, sebbene and nonostante always govern the subjunctive.',
      },
    ],
  },
  {
    id: 'gr-b1-congiuntivo-passato',
    level: 'B1',
    title: 'Il congiuntivo passato',
    focus: 'che sia arrivato, che abbia detto — a subjunctive about something already done',
    explanation:
      'Formed from the present subjunctive of essere or avere plus the participle, this is what you use when the main verb is in the present but the event it doubts, hopes or judges is already over: penso che sia partito ieri. The auxiliary follows the same rules as the passato prossimo, agreement included, so nothing new has to be learned about which verb takes which.',
    tables: [
      {
        caption: 'Formation',
        headers: ['Auxiliary', 'Example', 'English'],
        rows: [
          ['abbia + participle', 'Credo che abbia capito.', 'I think he has understood.'],
          ['sia + participle (agrees)', 'Credo che sia partita.', 'I think she has left.'],
          ['reflexive → sia', 'Spero che si sia divertito.', 'I hope he enjoyed himself.'],
        ],
      },
      {
        caption: 'Choosing the tense',
        headers: ['Main clause', 'Subordinate event', 'Form'],
        rows: [
          ['present', 'at the same time or later', 'congiuntivo presente: penso che venga'],
          ['present', 'already over', 'congiuntivo passato: penso che sia venuto'],
        ],
      },
    ],
    examples: [
      { it: 'Mi dispiace che tu non sia venuto.', en: 'I am sorry you did not come.' },
      { it: 'Non credo che abbiano finito.', en: 'I do not think they have finished.' },
      { it: 'È strano che non abbia chiamato.', en: 'It is odd that he has not called.' },
      { it: 'Spero che sia andato tutto bene.', en: 'I hope it all went well.' },
    ],
    pitfall:
      'The two subjunctives are not interchangeable. Spero che venga is a hope about what is still to come; spero che sia venuto is a hope about something that has already happened one way or the other.',
    questions: [
      {
        id: 'gr-cpa-q1',
        prompt: '«Credo che Anna ___ ieri.» (partire)',
        options: ['parta', 'sia partita', 'sia partito', 'abbia partito'],
        answer: 1,
        explanation: 'Partire takes essere, and the participle agrees with Anna.',
      },
      {
        id: 'gr-cpa-q2',
        prompt: 'Quale frase parla di un fatto già concluso?',
        options: ['Spero che venga', 'Spero che sia venuto', 'Spero che verrà', 'Spero di venire'],
        answer: 1,
        explanation: 'The past subjunctive places the event before the moment of hoping.',
      },
      {
        id: 'gr-cpa-q3',
        prompt: 'Come si forma il congiuntivo passato?',
        options: [
          'imperfetto di essere/avere + participio',
          'congiuntivo presente di essere/avere + participio',
          'futuro di essere/avere + participio',
          'condizionale + infinito',
        ],
        answer: 1,
        explanation: 'Sia / abbia plus the participle, exactly parallel to the passato prossimo.',
      },
    ],
  },
  {
    id: 'gr-b1-ipotetico',
    level: 'B1',
    title: 'Il periodo ipotetico I e II',
    focus: 'se piove resto, se piovesse resterei',
    explanation:
      'Two of the three conditional patterns belong at this level. The first is real: se piove, resto a casa — indicative in both halves, and about something that may well happen. The second is hypothetical: se piovesse, resterei a casa — imperfect subjunctive in the se clause, present conditional in the other. The rule that matters most is negative: the conditional never appears after se. Se avrei is the single most recognisable learner error in Italian.',
    tables: [
      {
        caption: 'The two patterns',
        headers: ['Type', 'se clause', 'Main clause', 'Example'],
        rows: [
          ['I — real', 'presente indicativo', 'presente / futuro / imperativo', 'Se piove, resto a casa.'],
          ['II — possible', 'congiuntivo imperfetto', 'condizionale presente', 'Se piovesse, resterei a casa.'],
        ],
      },
      {
        caption: 'The imperfect subjunctive, in outline',
        headers: ['', 'essere', 'avere', 'parlare'],
        rows: [
          ['che io', 'fossi', 'avessi', 'parlassi'],
          ['che tu', 'fossi', 'avessi', 'parlassi'],
          ['che lui', 'fosse', 'avesse', 'parlasse'],
          ['che noi', 'fossimo', 'avessimo', 'parlassimo'],
          ['che voi', 'foste', 'aveste', 'parlaste'],
          ['che loro', 'fossero', 'avessero', 'parlassero'],
        ],
      },
    ],
    examples: [
      { it: 'Se hai tempo, passa da me.', en: 'If you have time, drop by.' },
      { it: 'Se avessi tempo, verrei volentieri.', en: 'If I had time, I would gladly come.' },
      { it: 'Se fossi in te, non lo farei.', en: 'If I were you, I would not do it.' },
      { it: 'Cosa faresti se vincessi?', en: 'What would you do if you won?' },
    ],
    pitfall:
      'Never se avrei, se vorrei, se sarei. The conditional lives in the other half of the sentence: se avessi tempo, verrei. Italians notice this error immediately, including in speech where much else is forgiven.',
    questions: [
      {
        id: 'gr-ip-q1',
        prompt: '«Se ___ tempo, verrei volentieri.»',
        options: ['avrei', 'avessi', 'ho', 'avrò'],
        answer: 1,
        explanation: 'The se clause takes the imperfect subjunctive; the conditional belongs in the main clause.',
      },
      {
        id: 'gr-ip-q2',
        prompt: 'Quale frase è del primo tipo (reale)?',
        options: ['Se piovesse, resterei', 'Se piove, resto', 'Se fosse piovuto, sarei restato', 'Se piovesse, resto'],
        answer: 1,
        explanation: 'Indicative in both halves, and a real possibility.',
      },
      {
        id: 'gr-ip-q3',
        prompt: 'Come si dice «if I were you»?',
        options: ['Se sarei te', 'Se fossi in te', 'Se ero te', 'Se sono te'],
        answer: 1,
        explanation: 'Se fossi in te is the fixed phrase — note the in, which English does not have.',
      },
    ],
  },
  {
    id: 'gr-b1-condizionale-passato',
    level: 'B1',
    title: 'Il condizionale passato',
    focus: 'avrei voluto, sarebbe partito — regret, and the future seen from the past',
    explanation:
      'Formed from the conditional of essere or avere plus the participle. It says what would have happened but did not — sarei venuto, ma non potevo — which is the language of regret and excuse. It has a second job with no English parallel: reporting a future seen from a past vantage point. English says "he said he would come"; Italian says ha detto che sarebbe venuto, using the past conditional where English uses the simple one.',
    tables: [
      {
        caption: 'Two jobs',
        headers: ['Use', 'Example', 'English'],
        rows: [
          ['unrealised past', 'Sarei venuto, ma stavo male.', 'I would have come, but I was ill.'],
          ['regret', 'Avrei dovuto dirtelo.', 'I should have told you.'],
          ['future in the past', 'Ha detto che sarebbe venuto.', 'He said he would come.'],
          ['unconfirmed news', 'Il ladro sarebbe fuggito all’estero.', 'The thief is said to have fled abroad.'],
        ],
      },
    ],
    examples: [
      { it: 'Avrei voluto vederti.', en: 'I would have liked to see you.' },
      { it: 'Sapevo che non sarebbero venuti.', en: 'I knew they would not come.' },
      { it: 'Avresti dovuto chiamare.', en: 'You should have called.' },
      { it: 'Mi aveva promesso che avrebbe pagato.', en: 'He had promised me he would pay.' },
    ],
    pitfall:
      'For "he said he would come", Italian requires the past conditional: ha detto che sarebbe venuto. Ha detto che verrebbe is a genuine error, not a stylistic choice, and it is one English speakers make constantly.',
    questions: [
      {
        id: 'gr-cpas-q1',
        prompt: '«Ha detto che ___ .» (venire — futuro nel passato)',
        options: ['verrebbe', 'sarebbe venuto', 'verrà', 'veniva'],
        answer: 1,
        explanation: 'A future seen from the past takes the past conditional in Italian.',
      },
      {
        id: 'gr-cpas-q2',
        prompt: 'Come si dice «I should have told you»?',
        options: ['Dovrei dirtelo', 'Avrei dovuto dirtelo', 'Dovevo dirtelo', 'Ho dovuto dirtelo'],
        answer: 1,
        explanation: 'The past conditional of dovere expresses an unfulfilled obligation.',
      },
      {
        id: 'gr-cpas-q3',
        prompt: 'Con quale ausiliare si forma il condizionale passato di «partire»?',
        options: ['avrei partito', 'sarei partito', 'avrei parto', 'fossi partito'],
        answer: 1,
        explanation: 'The auxiliary is the one the verb takes anyway: partire → essere.',
      },
    ],
  },
  {
    id: 'gr-b1-trapassato',
    level: 'B1',
    title: 'Il trapassato prossimo',
    focus: 'avevo già mangiato — the past before the past',
    explanation:
      'Imperfect of essere or avere plus the participle. It marks an event that had already happened before another past event: quando sono arrivato, erano già partiti. Italian uses it more strictly than English uses the pluperfect — where English can get away with a simple past, Italian generally wants the sequence made explicit.',
    tables: [
      {
        caption: 'Formation',
        headers: ['Auxiliary (imperfect)', 'Example'],
        rows: [
          ['avevo, avevi, aveva…', 'Avevo già mangiato.'],
          ['ero, eri, era… (agrees)', 'Era già partita.'],
          ['reflexive → ero', 'Mi ero appena svegliato.'],
        ],
      },
      {
        caption: 'Sequence',
        headers: ['Earlier', 'Later', 'Sentence'],
        rows: [
          ['loro partono', 'io arrivo', 'Quando sono arrivato, erano già partiti.'],
          ['io mangio', 'lui telefona', 'Avevo già mangiato quando ha telefonato.'],
        ],
      },
    ],
    examples: [
      { it: 'Quando sono arrivato, erano già andati via.', en: 'When I arrived, they had already left.' },
      { it: 'Non sapevo che avessi già finito.', en: 'I did not know you had already finished.' },
      { it: 'Aveva studiato molto, perciò l’esame è andato bene.', en: 'He had studied a lot, so the exam went well.' },
      { it: 'Me l’avevi detto, ma l’ho dimenticato.', en: 'You had told me, but I forgot.' },
    ],
    pitfall:
      'Già and appena sit between the auxiliary and the participle here too: avevo già finito, mi ero appena alzato. The word order is the same as in the passato prossimo.',
    questions: [
      {
        id: 'gr-tp-q1',
        prompt: '«Quando sono arrivato, loro ___ già ___ .» (partire)',
        options: ['hanno / partito', 'erano / partiti', 'avevano / partito', 'sono / partiti'],
        answer: 1,
        explanation: 'Partire takes essere, so the pluperfect is erano partiti, with agreement.',
      },
      {
        id: 'gr-tp-q2',
        prompt: 'Con quale tempo si forma il trapassato prossimo?',
        options: ['presente di essere/avere', 'imperfetto di essere/avere', 'futuro di essere/avere', 'passato remoto'],
        answer: 1,
        explanation: 'The imperfect of the auxiliary plus the participle.',
      },
      {
        id: 'gr-tp-q3',
        prompt: 'Dove va «già»?',
        options: ['Già avevo finito', 'Avevo già finito', 'Avevo finito già', 'Avevo finito, già'],
        answer: 1,
        explanation: 'Between auxiliary and participle, as in every compound tense.',
      },
    ],
  },
  {
    id: 'gr-b1-futuro-anteriore',
    level: 'B1',
    title: 'Il futuro anteriore',
    focus: 'avrò finito, sarà arrivato — and guessing about the past',
    explanation:
      'Future of essere or avere plus the participle: quando avrò finito, ti chiamo. Like the simple future, it doubles as a way of guessing — but about the past rather than the present. Sarà arrivato tardi does not mean he will arrive late; it means he probably arrived late. In speech this second use is far commoner than the first.',
    tables: [
      {
        caption: 'Two jobs',
        headers: ['Use', 'Example', 'English'],
        rows: [
          ['finished before a future point', 'Quando avrò finito, esco.', 'When I have finished, I will go out.'],
          ['supposition about the past', 'Sarà arrivato tardi.', 'He must have arrived late.'],
          ['with a time conjunction', 'Dopo che sarò tornato, ne parliamo.', 'After I get back, we will discuss it.'],
        ],
      },
    ],
    examples: [
      { it: 'Appena avrò letto il contratto, ti dico.', en: 'As soon as I have read the contract, I will let you know.' },
      { it: 'Non risponde: avrà perso il telefono.', en: 'He is not answering: he must have lost his phone.' },
      { it: 'Saranno state le due quando è tornato.', en: 'It must have been two o’clock when he got back.' },
      { it: 'Quando sarete arrivati, chiamateci.', en: 'When you have arrived, call us.' },
    ],
    pitfall:
      'In everyday speech the simple future often replaces it after quando and appena — quando finisco, ti chiamo. The futuro anteriore is not obligatory there; using it always is a mark of textbook Italian rather than fluent Italian.',
    questions: [
      {
        id: 'gr-fa2-q1',
        prompt: 'Che cosa significa «Sarà arrivato tardi»?',
        options: [
          'Arriverà tardi domani',
          'Probabilmente è arrivato tardi',
          'Deve arrivare tardi',
          'Stava arrivando tardi',
        ],
        answer: 1,
        explanation: 'The future perfect of supposition: a guess about something already past.',
      },
      {
        id: 'gr-fa2-q2',
        prompt: 'Come si forma?',
        options: [
          'condizionale di essere/avere + participio',
          'futuro di essere/avere + participio',
          'imperfetto + infinito',
          'presente + gerundio',
        ],
        answer: 1,
        explanation: 'Avrò / sarò plus the participle.',
      },
      {
        id: 'gr-fa2-q3',
        prompt: '«Quando ___ il lavoro, ti chiamo.» (finire)',
        options: ['avrò finito', 'avrei finito', 'ho finito', 'finivo'],
        answer: 0,
        explanation: 'The action is complete before the other future event.',
      },
    ],
  },
  {
    id: 'gr-b1-relativi',
    level: 'B1',
    title: 'I pronomi relativi',
    focus: 'che, cui, il quale — joining two sentences into one',
    explanation:
      'Che covers both subject and direct object, whatever the gender or number: il libro che leggo, la donna che parla. After a preposition, che is impossible and cui takes over: la casa in cui vivo, l’amico con cui esco. Il quale is a formal alternative that also disambiguates when two candidates compete. One special case is worth memorising: cui with a definite article means "whose" — il ragazzo la cui sorella è medico.',
    tables: [
      {
        caption: 'Which to use',
        headers: ['Position', 'Form', 'Example'],
        rows: [
          ['subject', 'che', 'Il treno che parte alle sei.'],
          ['direct object', 'che', 'Il libro che ho letto.'],
          ['after a preposition', 'cui', 'La città in cui abito.'],
          ['whose', 'il / la cui', 'L’autore i cui libri leggo.'],
          ['formal / disambiguating', 'il quale, la quale', 'Il fratello di Anna, il quale vive a Roma.'],
        ],
      },
    ],
    examples: [
      { it: 'Questo è l’amico di cui ti ho parlato.', en: 'This is the friend I told you about.' },
      { it: 'La ragione per cui non vengo è semplice.', en: 'The reason I am not coming is simple.' },
      { it: 'Il paese in cui sono nato è piccolissimo.', en: 'The village I was born in is tiny.' },
      { it: 'Lo scrittore le cui opere studiamo è napoletano.', en: 'The writer whose works we are studying is Neapolitan.' },
    ],
    pitfall:
      'Italian cannot strand a preposition at the end of the clause. English "the friend I told you about" must become l’amico di cui ti ho parlato — the preposition moves to the front, and it can never be dropped.',
    questions: [
      {
        id: 'gr-rel-q1',
        prompt: '«La casa ___ abito è vecchia.»',
        options: ['che', 'in cui', 'cui', 'la quale'],
        answer: 1,
        explanation: 'A preposition is needed, and after a preposition che becomes cui.',
      },
      {
        id: 'gr-rel-q2',
        prompt: 'Come si traduce «the friend I told you about»?',
        options: [
          'L’amico che ti ho parlato',
          'L’amico di cui ti ho parlato',
          'L’amico che ti ho parlato di',
          'L’amico quale ti ho parlato',
        ],
        answer: 1,
        explanation: 'Parlare di requires the di, and Italian never leaves it at the end.',
      },
      {
        id: 'gr-rel-q3',
        prompt: 'Come si dice «whose»?',
        options: ['di che', 'il cui / la cui', 'che di', 'cuius'],
        answer: 1,
        explanation: 'Article plus cui, agreeing with the thing owned: la cui sorella, i cui libri.',
      },
    ],
  },
  {
    id: 'gr-b1-discorso-indiretto',
    level: 'B1',
    title: 'Il discorso indiretto',
    focus: 'ha detto che… — what shifts when you report someone',
    explanation:
      'Reporting speech moves tenses, pronouns and time words one step back. Present becomes imperfect, passato prossimo becomes trapassato, future becomes past conditional, and imperatives become di plus the infinitive. Domani becomes il giorno dopo, ieri becomes il giorno prima, qui becomes lì. The shifts are mechanical, but there are enough of them that they need practising as a set.',
    tables: [
      {
        caption: 'Tense shifts after a past reporting verb',
        headers: ['Direct', 'Reported'],
        rows: [
          ['«Sono stanco»', 'Ha detto che era stanco.'],
          ['«Ho finito»', 'Ha detto che aveva finito.'],
          ['«Verrò domani»', 'Ha detto che sarebbe venuto il giorno dopo.'],
          ['«Vieni!»', 'Mi ha detto di venire.'],
          ['«Dove sei?»', 'Mi ha chiesto dove fossi.'],
        ],
      },
      {
        caption: 'Time and place shift too',
        headers: ['Direct', 'Reported'],
        rows: [
          ['oggi', 'quel giorno'],
          ['domani', 'il giorno dopo'],
          ['ieri', 'il giorno prima'],
          ['qui', 'lì'],
          ['questo', 'quello'],
        ],
      },
    ],
    examples: [
      { it: 'Ha detto che sarebbe tornato il giorno dopo.', en: 'He said he would come back the next day.' },
      { it: 'Mi ha chiesto se avessi tempo.', en: 'He asked me whether I had time.' },
      { it: 'Ci ha detto di aspettare.', en: 'He told us to wait.' },
      { it: 'Diceva sempre che l’italiano era facile.', en: 'He always said Italian was easy.' },
    ],
    pitfall:
      'An imperative never survives as an imperative. «Aspetta!» becomes mi ha detto di aspettare — di plus the infinitive — not mi ha detto che aspetta.',
    questions: [
      {
        id: 'gr-di-q1',
        prompt: '«Verrò domani» → Ha detto che ___ .',
        options: ['verrà domani', 'sarebbe venuto il giorno dopo', 'verrebbe domani', 'veniva domani'],
        answer: 1,
        explanation: 'The future becomes the past conditional, and domani shifts to il giorno dopo.',
      },
      {
        id: 'gr-di-q2',
        prompt: '«Aspetta!» → Mi ha detto ___ .',
        options: ['che aspetto', 'di aspettare', 'che aspettassi pure', 'aspettare'],
        answer: 1,
        explanation: 'Reported commands take di plus the infinitive.',
      },
      {
        id: 'gr-di-q3',
        prompt: '«Sono stanco» → Ha detto che ___ .',
        options: ['è stanco', 'era stanco', 'fosse stanco', 'sarà stanco'],
        answer: 1,
        explanation: 'After a past reporting verb the present becomes the imperfect.',
      },
    ],
  },
  {
    id: 'gr-b1-passivo',
    level: 'B1',
    title: 'La forma passiva',
    focus: 'è stato costruito, viene fatto — two auxiliaries, two flavours',
    explanation:
      'The passive is built with essere plus the participle, which always agrees: la casa è stata costruita nel 1920. Italian also uses venire for the passive, but only in simple tenses, and it stresses the process rather than the result: la porta viene chiusa alle otto. Because Italian dislikes long passives, the si passivante often replaces them: si vendono case rather than case sono vendute.',
    tables: [
      {
        caption: 'Three ways to avoid naming the agent',
        headers: ['Form', 'Example', 'Flavour'],
        rows: [
          ['essere + participio', 'La lettera è stata spedita.', 'neutral, all tenses'],
          ['venire + participio', 'La lettera viene spedita ogni lunedì.', 'process, simple tenses only'],
          ['si passivante', 'Si spediscono le lettere il lunedì.', 'commonest in everyday Italian'],
        ],
      },
      {
        caption: 'Agreement',
        headers: ['Subject', 'Passive'],
        rows: [
          ['il libro', 'è stato letto'],
          ['la lettera', 'è stata letta'],
          ['i libri', 'sono stati letti'],
          ['le lettere', 'sono state lette'],
        ],
      },
    ],
    examples: [
      { it: 'Il ponte è stato costruito nel 1890.', en: 'The bridge was built in 1890.' },
      { it: 'Le domande vengono esaminate in due settimane.', en: 'Applications are examined within two weeks.' },
      { it: 'In questo negozio si vendono libri usati.', en: 'Second-hand books are sold in this shop.' },
      { it: 'La riunione è stata rinviata dal direttore.', en: 'The meeting was postponed by the director.' },
    ],
    pitfall:
      'Venire cannot form compound tenses in the passive: è venuto costruito is not Italian. Once you need a compound tense, only essere will do.',
    questions: [
      {
        id: 'gr-pas-q1',
        prompt: '«La casa ___ nel 1920.» (costruire)',
        options: ['è stato costruito', 'è stata costruita', 'ha costruito', 'viene stata costruita'],
        answer: 1,
        explanation: 'The participle agrees with casa, feminine singular.',
      },
      {
        id: 'gr-pas-q2',
        prompt: 'Quale ausiliare NON può formare i tempi composti del passivo?',
        options: ['essere', 'venire', 'entrambi', 'nessuno dei due'],
        answer: 1,
        explanation: 'Venire works only in simple tenses: viene chiusa, but never è venuta chiusa.',
      },
      {
        id: 'gr-pas-q3',
        prompt: 'Quale forma userebbe più spesso un italiano in un annuncio?',
        options: ['Case sono vendute', 'Si vendono case', 'Case vengono state vendute', 'Case hanno venduto'],
        answer: 1,
        explanation: 'The si passivante is the natural everyday alternative to a full passive.',
      },
    ],
  },
  {
    id: 'gr-b1-implicite',
    level: 'B1',
    title: 'Gerundio, participio, infinito',
    focus: 'saying in three words what a clause would say in eight',
    explanation:
      'Italian compresses subordinate clauses into non-finite forms far more readily than English. The gerund covers means, time and cause — sbagliando si impara, tornando a casa ho visto Luca. The past participle can open a sentence on its own: finito il lavoro, siamo usciti. And prima di, dopo, senza and invece di all take an infinitive. The rule that governs all of them: the implicit clause must share its subject with the main one, or the sentence goes wrong in a way that is hard to hear as a learner.',
    tables: [
      {
        caption: 'What each does',
        headers: ['Form', 'Example', 'Meaning'],
        rows: [
          ['gerundio — means', 'Sbagliando si impara.', 'by making mistakes'],
          ['gerundio — time', 'Tornando a casa, ho visto Luca.', 'while coming home'],
          ['gerundio — cause', 'Essendo tardi, siamo andati via.', 'since it was late'],
          ['participio assoluto', 'Finito il lavoro, siamo usciti.', 'once the work was done'],
          ['infinito', 'Prima di uscire, chiudi la porta.', 'before going out'],
          ['stare per + infinito', 'Sto per uscire.', 'I am about to go out'],
        ],
      },
    ],
    examples: [
      { it: 'Pur essendo stanco, ha continuato.', en: 'Although tired, he carried on.' },
      { it: 'Dopo aver mangiato, siamo usciti.', en: 'After eating, we went out.' },
      { it: 'Se ne è andato senza dire niente.', en: 'He left without saying anything.' },
      { it: 'Arrivati a Roma, abbiamo cercato l’albergo.', en: 'Having arrived in Rome, we looked for the hotel.' },
    ],
    pitfall:
      'The gerund must share the main clause’s subject. Tornando a casa, il telefono ha squillato says the telephone was coming home. English tolerates that dangling; Italian does not.',
    questions: [
      {
        id: 'gr-imp2-q1',
        prompt: 'Quale frase è corretta?',
        options: [
          'Tornando a casa, il telefono ha squillato',
          'Tornando a casa, ho sentito squillare il telefono',
          'Tornando a casa, squillava il telefono da solo',
          'Il telefono, tornando a casa, ha squillato',
        ],
        answer: 1,
        explanation: 'The gerund’s subject must be the main clause’s subject — here, io.',
      },
      {
        id: 'gr-imp2-q2',
        prompt: 'Come si dice «after eating»?',
        options: ['Dopo mangiando', 'Dopo aver mangiato', 'Dopo di mangiare', 'Dopo che mangiare'],
        answer: 1,
        explanation: 'Dopo takes the past infinitive; it never takes di or a gerund.',
      },
      {
        id: 'gr-imp2-q3',
        prompt: 'Che cosa significa «Sto per uscire»?',
        options: ['Sto uscendo adesso', 'Uscirò fra poco', 'Esco ogni giorno', 'Sono uscito'],
        answer: 1,
        explanation: 'Stare per plus infinitive is the imminent future: about to.',
      },
    ],
  },
  {
    id: 'gr-b1-connettivi',
    level: 'B1',
    title: 'Connettivi del discorso',
    focus: 'holding a paragraph together: quindi, tuttavia, infatti, anzi',
    explanation:
      'At B1 the difficulty stops being the sentence and becomes the paragraph. Connectives are what make a stretch of Italian read as an argument rather than a list, and several of them mislead English speakers. Infatti confirms what was just said, it does not introduce a contrast; anzi corrects and intensifies; comunque closes a topic rather than opening one; and quindi and perciò draw a consequence where invece marks a substitution.',
    tables: [
      {
        caption: 'By job',
        headers: ['Job', 'Connectives', 'Example'],
        rows: [
          ['consequence', 'quindi, perciò, dunque, di conseguenza', 'Pioveva, quindi siamo rimasti.'],
          ['contrast', 'ma, però, tuttavia, invece', 'Volevo uscire, però pioveva.'],
          ['confirmation', 'infatti, in effetti', 'È bravo: infatti ha vinto.'],
          ['correction', 'anzi, al contrario', 'Non è brutto, anzi.'],
          ['addition', 'inoltre, per di più, oltretutto', 'È caro e inoltre è lento.'],
          ['closing', 'comunque, in ogni caso, insomma', 'Comunque, decidiamo domani.'],
        ],
      },
    ],
    examples: [
      { it: 'Non ho studiato, quindi non ho passato l’esame.', en: 'I did not study, so I did not pass the exam.' },
      { it: 'Dicono che sia difficile: infatti lo è.', en: 'They say it is hard: and indeed it is.' },
      { it: 'Non mi è dispiaciuto, anzi mi è piaciuto molto.', en: 'I did not dislike it — quite the opposite, I loved it.' },
      { it: 'Tuttavia, resta un problema di costi.', en: 'Nevertheless, a cost problem remains.' },
    ],
    pitfall:
      'Infatti is not "in fact" in the English sense of correcting someone. It confirms: hai detto che pioveva, e infatti piove. To correct, Italian uses anzi or in realtà.',
    questions: [
      {
        id: 'gr-conn-q1',
        prompt: 'Che cosa fa «infatti»?',
        options: ['introduce un contrasto', 'conferma quanto detto', 'corregge quanto detto', 'chiude il discorso'],
        answer: 1,
        explanation: 'Infatti confirms; the English "in fact" often contradicts, which is the trap.',
      },
      {
        id: 'gr-conn-q2',
        prompt: '«Non è brutto, ___ , è bellissimo.»',
        options: ['infatti', 'anzi', 'quindi', 'inoltre'],
        answer: 1,
        explanation: 'Anzi overturns the previous statement and strengthens the opposite.',
      },
      {
        id: 'gr-conn-q3',
        prompt: 'Quale connettivo introduce una conseguenza?',
        options: ['tuttavia', 'perciò', 'invece', 'anzi'],
        answer: 1,
        explanation: 'Perciò, quindi and dunque all draw a consequence.',
      },
    ],
  },
];
