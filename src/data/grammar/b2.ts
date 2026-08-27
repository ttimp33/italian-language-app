import type { GrammarLesson } from '../types';

/**
 * B2 grammar: the past subjunctive system, and the constructions that let you
 * argue rather than merely report.
 *
 * The dividing line between B1 and B2 in real Italian is not vocabulary but
 * subordination. A B2 speaker can hold a hypothesis, a concession and a
 * consequence in one sentence without losing the thread — which is a matter of
 * sequence of tenses and implicit clauses more than anything else.
 */
export const GRAMMAR_B2: GrammarLesson[] = [
  {
    id: 'gr-b2-congiuntivo-imperfetto',
    level: 'B2',
    title: 'Il congiuntivo imperfetto',
    focus: 'fossi, avessi, facesse — the subjunctive in past contexts',
    explanation:
      'The imperfect subjunctive is what the present subjunctive becomes when the main verb moves into the past: penso che sia stanco becomes pensavo che fosse stanco. It is also the tense of the hypothetical se clause. Formation is unusually regular — the stem plus -ssi endings — with only essere, dare and stare stepping out of line.',
    tables: [
      {
        caption: 'Endings',
        headers: ['', 'parlare', 'prendere', 'dormire', 'essere'],
        rows: [
          ['che io', 'parlassi', 'prendessi', 'dormissi', 'fossi'],
          ['che tu', 'parlassi', 'prendessi', 'dormissi', 'fossi'],
          ['che lui', 'parlasse', 'prendesse', 'dormisse', 'fosse'],
          ['che noi', 'parlassimo', 'prendessimo', 'dormissimo', 'fossimo'],
          ['che voi', 'parlaste', 'prendeste', 'dormiste', 'foste'],
          ['che loro', 'parlassero', 'prendessero', 'dormissero', 'fossero'],
        ],
      },
      {
        caption: 'Where it appears',
        headers: ['Context', 'Example'],
        rows: [
          ['past main verb', 'Credevo che fosse più facile.'],
          ['hypothetical se', 'Se avessi tempo, verrei.'],
          ['come se — always', 'Parla come se fosse un esperto.'],
          ['magari — wish', 'Magari piovesse!'],
          ['polite request', 'Volevo chiederle se potesse aiutarmi.'],
        ],
      },
    ],
    examples: [
      { it: 'Pensavo che fossi già partito.', en: 'I thought you had already left.' },
      { it: 'Si comporta come se fosse a casa sua.', en: 'He behaves as if he were at home.' },
      { it: 'Magari vincessimo!', en: 'If only we would win!' },
      { it: 'Bisognava che qualcuno lo dicesse.', en: 'Someone needed to say it.' },
    ],
    pitfall:
      'Come se takes the imperfect subjunctive without exception, even when the main verb is present: parla come se fosse, never parla come se è. There is no version of this construction with the indicative.',
    questions: [
      {
        id: 'gr-ci-q1',
        prompt: '«Parla come se ___ un esperto.»',
        options: ['è', 'sia', 'fosse', 'sarebbe'],
        answer: 2,
        explanation: 'Come se always governs the imperfect subjunctive, whatever the main tense.',
      },
      {
        id: 'gr-ci-q2',
        prompt: '«Credevo che ___ più facile.»',
        options: ['sia', 'fosse', 'è', 'sarebbe'],
        answer: 1,
        explanation: 'A past main verb pulls the subjunctive back to the imperfect.',
      },
      {
        id: 'gr-ci-q3',
        prompt: 'Quale verbo è irregolare al congiuntivo imperfetto?',
        options: ['parlare', 'essere', 'prendere', 'dormire'],
        answer: 1,
        explanation: 'Essere gives fossi; only dare and stare are similarly irregular.',
      },
    ],
  },
  {
    id: 'gr-b2-congiuntivo-trapassato',
    level: 'B2',
    title: 'Il congiuntivo trapassato',
    focus: 'avessi saputo, fosse stato — the subjunctive of the unrealised past',
    explanation:
      'Imperfect subjunctive of essere or avere plus the participle. It expresses a past that did not happen, or a past prior to another past seen through a mind: se avessi saputo, sarei venuto. Together with the past conditional it forms the third conditional, which is the pattern for regret and reproach in Italian.',
    tables: [
      {
        caption: 'Formation and use',
        headers: ['Use', 'Example', 'English'],
        rows: [
          ['unrealised past', 'Se avessi saputo, sarei venuto.', 'If I had known, I would have come.'],
          ['anterior in a past frame', 'Pensavo che fosse già partito.', 'I thought he had already left.'],
          ['unattainable wish', 'Magari l’avessi comprato!', 'If only I had bought it!'],
          ['reproach with come se', 'Parlava come se avesse letto tutto.', 'He talked as if he had read it all.'],
        ],
      },
    ],
    examples: [
      { it: 'Se me l’avessi detto, avrei fatto in tempo.', en: 'If you had told me, I would have made it in time.' },
      { it: 'Non credevo che fossero già arrivati.', en: 'I did not think they had already arrived.' },
      { it: 'Magari avessi studiato di più!', en: 'If only I had studied more!' },
      { it: 'Era come se non fosse successo niente.', en: 'It was as if nothing had happened.' },
    ],
    pitfall:
      'In speech, especially in the centre and south, both halves of the third conditional are often replaced by the imperfect indicative: se lo sapevo, venivo. It is extremely common and perfectly intelligible, but it is not what you write.',
    questions: [
      {
        id: 'gr-ct-q1',
        prompt: '«Se ___ , sarei venuto.» (sapere)',
        options: ['sapessi', 'avessi saputo', 'avrei saputo', 'sapevo'],
        answer: 1,
        explanation: 'A past unreal condition needs the pluperfect subjunctive.',
      },
      {
        id: 'gr-ct-q2',
        prompt: 'Come si forma?',
        options: [
          'congiuntivo presente + participio',
          'congiuntivo imperfetto di essere/avere + participio',
          'condizionale + participio',
          'imperfetto indicativo + infinito',
        ],
        answer: 1,
        explanation: 'Avessi / fossi plus the participle.',
      },
      {
        id: 'gr-ct-q3',
        prompt: '«Magari ___ di più!» (studiare — rimpianto)',
        options: ['studiassi', 'avessi studiato', 'ho studiato', 'studierei'],
        answer: 1,
        explanation: 'A regret about a past that cannot be changed takes the pluperfect subjunctive.',
      },
    ],
  },
  {
    id: 'gr-b2-ipotetico-terzo',
    level: 'B2',
    title: 'Il periodo ipotetico III e misto',
    focus: 'se avessi saputo, sarei venuto — and conditions that straddle two times',
    explanation:
      'The third pattern refers to a past that did not happen: imperfect-subjunctive-plus-participle in the se clause, past conditional in the other. Mixed conditionals are the useful extension: a past cause with a present result — se avessi studiato, adesso saprei — or a permanent condition with a past result — se fossi più paziente, non avrei litigato. Italian handles these by simply choosing each half for its own time.',
    tables: [
      {
        caption: 'All three, side by side',
        headers: ['Type', 'se clause', 'Main clause'],
        rows: [
          ['I — real', 'presente', 'presente / futuro'],
          ['II — possible', 'congiuntivo imperfetto', 'condizionale presente'],
          ['III — impossible', 'congiuntivo trapassato', 'condizionale passato'],
          ['mixed — past cause, present result', 'congiuntivo trapassato', 'condizionale presente'],
          ['mixed — standing condition, past result', 'congiuntivo imperfetto', 'condizionale passato'],
        ],
      },
    ],
    examples: [
      { it: 'Se avessi studiato, avrei passato l’esame.', en: 'If I had studied, I would have passed the exam.' },
      { it: 'Se avessi studiato, adesso saprei la risposta.', en: 'If I had studied, I would know the answer now.' },
      { it: 'Se fossi meno testardo, non avresti litigato.', en: 'If you were less stubborn, you would not have argued.' },
      { it: 'Se non fosse per te, non ce l’avrei fatta.', en: 'If it were not for you, I would not have managed.' },
    ],
    pitfall:
      'The conditional stays out of the se clause in every pattern without exception. Se avrei saputo is wrong at every level of the language, and it is the error that most reliably marks a foreign speaker.',
    questions: [
      {
        id: 'gr-ip3-q1',
        prompt: '«Se ___ , avrei passato l’esame.» (studiare)',
        options: ['studiassi', 'avessi studiato', 'avrei studiato', 'studiavo'],
        answer: 1,
        explanation: 'Third conditional: pluperfect subjunctive plus past conditional.',
      },
      {
        id: 'gr-ip3-q2',
        prompt: 'Causa passata, risultato presente: «Se avessi studiato, adesso ___ la risposta.»',
        options: ['avrei saputo', 'saprei', 'sapevo', 'sappia'],
        answer: 1,
        explanation: 'The present result takes the present conditional even though the cause is past.',
      },
      {
        id: 'gr-ip3-q3',
        prompt: 'Che cosa non compare mai dopo «se»?',
        options: ['il congiuntivo', 'il condizionale', 'l’indicativo', 'l’imperfetto'],
        answer: 1,
        explanation: 'The conditional belongs in the main clause only.',
      },
    ],
  },
  {
    id: 'gr-b2-concordanza',
    level: 'B2',
    title: 'La concordanza dei tempi',
    focus: 'which subjunctive follows which main verb',
    explanation:
      'Once the main verb is in the past, everything downstream shifts. A present main verb takes the present or past subjunctive; a past main verb takes the imperfect or pluperfect. Getting this right is what makes a complex sentence hold together, and getting it wrong is audible even when every individual form is correct.',
    tables: [
      {
        caption: 'Present main verb',
        headers: ['Relationship', 'Subordinate', 'Example'],
        rows: [
          ['same time or later', 'congiuntivo presente', 'Penso che venga.'],
          ['earlier', 'congiuntivo passato', 'Penso che sia venuto.'],
        ],
      },
      {
        caption: 'Past main verb',
        headers: ['Relationship', 'Subordinate', 'Example'],
        rows: [
          ['same time', 'congiuntivo imperfetto', 'Pensavo che venisse.'],
          ['earlier', 'congiuntivo trapassato', 'Pensavo che fosse venuto.'],
          ['later', 'condizionale passato', 'Pensavo che sarebbe venuto.'],
        ],
      },
    ],
    examples: [
      { it: 'Speravo che avesse capito.', en: 'I hoped he had understood.' },
      { it: 'Spero che abbia capito.', en: 'I hope he has understood.' },
      { it: 'Credevo che sarebbe arrivato prima.', en: 'I thought he would arrive earlier.' },
      { it: 'Era necessario che qualcuno intervenisse.', en: 'It was necessary for someone to step in.' },
    ],
    pitfall:
      'For something later than a past main verb, Italian uses the past conditional, not the present: credevo che sarebbe arrivato. Credevo che arriverebbe is not an option.',
    questions: [
      {
        id: 'gr-conc-q1',
        prompt: '«Pensavo che ___ .» (venire — stesso momento)',
        options: ['venga', 'venisse', 'sia venuto', 'verrebbe'],
        answer: 1,
        explanation: 'A past main verb takes the imperfect subjunctive for simultaneous action.',
      },
      {
        id: 'gr-conc-q2',
        prompt: '«Credevo che ___ prima.» (arrivare — posteriorità)',
        options: ['arrivasse', 'sarebbe arrivato', 'arriverebbe', 'fosse arrivato'],
        answer: 1,
        explanation: 'Posteriority after a past verb takes the past conditional.',
      },
      {
        id: 'gr-conc-q3',
        prompt: '«Spero che ___ .» (capire — già successo)',
        options: ['capisca', 'abbia capito', 'avesse capito', 'capiva'],
        answer: 1,
        explanation: 'Present main verb plus an earlier event: past subjunctive.',
      },
    ],
  },
  {
    id: 'gr-b2-passivo-avanzato',
    level: 'B2',
    title: 'Andare passivo e si passivante',
    focus: 'va fatto, si è deciso — obligation and impersonality',
    explanation:
      'Andare plus a participle forms a passive that carries obligation: il modulo va compilato in stampatello means it must be filled in, not that it is being filled in. It works only in simple tenses. Separately, the si passivante is the workhorse of written Italian — si sono prese decisioni importanti — and in compound tenses it takes essere and agreement, which surprises even advanced learners.',
    tables: [
      {
        caption: 'Andare = must be',
        headers: ['Italian', 'English', 'Note'],
        rows: [
          ['Il modulo va firmato.', 'The form must be signed.', 'obligation'],
          ['Le domande vanno inviate entro venerdì.', 'Applications must be sent by Friday.', 'agrees'],
          ['Andava fatto prima.', 'It should have been done earlier.', 'imperfect'],
          ['—', 'no compound tenses', 'è andato fatto does not exist'],
        ],
      },
      {
        caption: 'Si passivante in compound tenses',
        headers: ['Simple', 'Compound'],
        rows: [
          ['Si vende la casa.', 'Si è venduta la casa.'],
          ['Si vendono le case.', 'Si sono vendute le case.'],
          ['Si prende una decisione.', 'Si è presa una decisione.'],
        ],
      },
    ],
    examples: [
      { it: 'Questo problema va risolto subito.', en: 'This problem must be solved at once.' },
      { it: 'Si sono spesi troppi soldi.', en: 'Too much money has been spent.' },
      { it: 'In quel periodo si viaggiava poco.', en: 'People travelled little in that period.' },
      { it: 'Le regole vanno rispettate da tutti.', en: 'The rules must be respected by everyone.' },
    ],
    pitfall:
      'The si passivante takes essere in compound tenses even when the verb would take avere on its own: si è mangiato bene, si sono prese decisioni. The agreement follows the noun, not the si.',
    questions: [
      {
        id: 'gr-pav-q1',
        prompt: 'Che cosa significa «Il modulo va firmato»?',
        options: [
          'Il modulo sta andando a essere firmato',
          'Il modulo deve essere firmato',
          'Il modulo è stato firmato',
          'Il modulo verrà firmato domani',
        ],
        answer: 1,
        explanation: 'Andare plus participle carries obligation, not movement.',
      },
      {
        id: 'gr-pav-q2',
        prompt: '«___ decisioni importanti.» (si prendere, passato)',
        options: ['Si è preso', 'Si sono prese', 'Si ha preso', 'Si sono preso'],
        answer: 1,
        explanation: 'Essere as auxiliary, and agreement with decisioni.',
      },
      {
        id: 'gr-pav-q3',
        prompt: 'Quale forma non esiste?',
        options: ['va fatto', 'andava fatto', 'è andato fatto', 'vanno fatte'],
        answer: 2,
        explanation: 'The andare passive has no compound tenses.',
      },
    ],
  },
  {
    id: 'gr-b2-verbi-pronominali',
    level: 'B2',
    title: 'I verbi pronominali',
    focus: 'cavarsela, prendersela, farcela, andarsene, sentirsela',
    explanation:
      'These verbs have pronouns baked into them, and the pronouns no longer mean anything separately: the ce of farcela and the la of cavarsela cannot be analysed, only learned. They are extremely common in speech and almost absent from textbooks, which is why fluent-sounding Italian often depends on them. Conjugating them means moving two pronouns at once, and in compound tenses they take essere with agreement on the la: me la sono cavata.',
    tables: [
      {
        caption: 'The core set',
        headers: ['Verb', 'Meaning', 'io', 'Past'],
        rows: [
          ['farcela', 'to manage it', 'ce la faccio', 'ce l’ho fatta'],
          ['cavarsela', 'to get by, to cope', 'me la cavo', 'me la sono cavata'],
          ['prendersela', 'to take offence', 'me la prendo', 'me la sono presa'],
          ['andarsene', 'to leave, to clear off', 'me ne vado', 'me ne sono andato'],
          ['sentirsela', 'to feel up to it', 'me la sento', 'me la sono sentita'],
          ['fregarsene', 'not to care at all', 'me ne frego', 'me ne sono fregato'],
        ],
      },
    ],
    examples: [
      { it: 'Non ce la faccio più.', en: 'I cannot take any more.' },
      { it: 'In inglese me la cavo.', en: 'I get by in English.' },
      { it: 'Non te la prendere, scherzavo.', en: 'Do not take it badly, I was joking.' },
      { it: 'Se non ti va, ce ne andiamo.', en: 'If you do not fancy it, we will leave.' },
    ],
    pitfall:
      'In compound tenses the participle agrees with the la, not with the subject: Anna se l’è cavata, Marco se l’è cavata. The a is not about Anna — it is the la buried in the verb.',
    questions: [
      {
        id: 'gr-vp-q1',
        prompt: 'Come si dice «I cannot manage it»?',
        options: ['Non lo faccio', 'Non ce la faccio', 'Non mi faccio', 'Non ne faccio'],
        answer: 1,
        explanation: 'Farcela is fixed: ce la faccio, ce la fai, ce la fa.',
      },
      {
        id: 'gr-vp-q2',
        prompt: 'Marco parla di sé: «Me l’___ cavata.»',
        options: ['ho', 'sono', 'avevo', 'ero'],
        answer: 1,
        explanation: 'Pronominal verbs take essere; the participle agrees with the la, giving cavata.',
      },
      {
        id: 'gr-vp-q3',
        prompt: 'Che cosa significa «non me la sento»?',
        options: ['Non la sento bene', 'Non me la ricordo', 'Non me la sento di farlo', 'Non ho sentito'],
        answer: 2,
        explanation: 'Sentirsela means to feel up to something; it has nothing to do with hearing.',
      },
    ],
  },
  {
    id: 'gr-b2-implicite-avanzate',
    level: 'B2',
    title: 'Costruzioni implicite avanzate',
    focus: 'pur essendo, una volta finito, nel fare',
    explanation:
      'Written Italian compresses subordinate clauses far more than English does, and doing the same is most of what separates B2 prose from B1 prose. Pur plus gerund gives concession — pur essendo stanco, ha continuato. A participle can open a sentence with its own subject: finita la riunione, siamo usciti. Nel plus infinitive gives simultaneity, and a plus infinitive can carry a condition: a saperlo prima, non sarei venuto.',
    tables: [
      {
        caption: 'The constructions',
        headers: ['Form', 'Example', 'Equivalent'],
        rows: [
          ['pur + gerundio', 'Pur essendo giovane, è molto competente.', 'benché sia giovane'],
          ['participio assoluto', 'Finita la riunione, siamo usciti.', 'dopo che la riunione è finita'],
          ['nel + infinito', 'Nel dire questo, si è commosso.', 'mentre diceva'],
          ['a + infinito (condizione)', 'A dirla tutta, non mi convince.', 'se devo dire tutto'],
          ['gerundio composto', 'Avendo finito, se ne è andato.', 'dopo che aveva finito'],
        ],
      },
    ],
    examples: [
      { it: 'Pur non conoscendolo, mi fido.', en: 'Even though I do not know him, I trust him.' },
      { it: 'Arrivati a destinazione, abbiamo scaricato tutto.', en: 'Having arrived, we unloaded everything.' },
      { it: 'A pensarci bene, hai ragione.', en: 'Come to think of it, you are right.' },
      { it: 'Avendo già pagato, non ha detto niente.', en: 'Having already paid, he said nothing.' },
    ],
    pitfall:
      'In an absolute participle construction with a transitive verb, the participle agrees with its object: finita la riunione, letto il libro. It is not agreeing with the subject of the main clause, which is a different person entirely.',
    questions: [
      {
        id: 'gr-ia-q1',
        prompt: '«Pur ___ stanco, ha continuato.»',
        options: ['è', 'essendo', 'stato', 'sia'],
        answer: 1,
        explanation: 'Pur is followed by a gerund and expresses concession.',
      },
      {
        id: 'gr-ia-q2',
        prompt: '«___ la riunione, siamo usciti.» (finire)',
        options: ['Finito', 'Finita', 'Finendo', 'Finire'],
        answer: 1,
        explanation: 'The absolute participle agrees with riunione, which is feminine.',
      },
      {
        id: 'gr-ia-q3',
        prompt: 'Che cosa esprime «avendo finito»?',
        options: ['contemporaneità', 'anteriorità', 'posteriorità', 'condizione'],
        answer: 1,
        explanation: 'The compound gerund places its action before the main verb.',
      },
    ],
  },
  {
    id: 'gr-b2-connettivi-argomentativi',
    level: 'B2',
    title: 'Connettivi argomentativi',
    focus: 'd’altra parte, semmai, piuttosto che, in quanto',
    explanation:
      'Arguing in Italian means conceding, qualifying and reframing rather than simply contrasting. This set does that work: d’altra parte introduces the other side, semmai qualifies with "if anything", in quanto gives a reason with the weight of "inasmuch as", and non tanto… quanto reframes what the real point is. They are the connectives that make written Italian sound like an argument rather than a translation.',
    tables: [
      {
        caption: 'By rhetorical move',
        headers: ['Move', 'Connectives', 'Example'],
        rows: [
          ['concede', 'certo… ma, è vero che… tuttavia', 'Certo è caro, ma dura.'],
          ['other side', 'd’altra parte, per contro', 'D’altra parte, i costi salgono.'],
          ['qualify', 'semmai, se non altro, quantomeno', 'Semmai è il contrario.'],
          ['give a reason', 'in quanto, dato che, visto che', 'Non è venuto in quanto malato.'],
          ['reframe', 'non tanto… quanto, più che altro', 'Non tanto caro quanto inutile.'],
          ['conclude', 'in definitiva, tutto sommato, alla fine', 'In definitiva, conviene.'],
        ],
      },
    ],
    examples: [
      { it: 'D’altra parte, nessuno ci obbliga ad accettare.', en: 'On the other hand, nobody is forcing us to accept.' },
      { it: 'Non è tanto una questione di soldi quanto di tempo.', en: 'It is not so much a question of money as of time.' },
      { it: 'Semmai, il problema è un altro.', en: 'If anything, the problem is a different one.' },
      { it: 'In quanto responsabile, deve firmare lui.', en: 'As the person responsible, he has to sign.' },
    ],
    pitfall:
      'Piuttosto che means "rather than", but in northern speech it has spread to mean "or", which is widely criticised. In writing, keep it to its original exclusive sense: preferisco camminare piuttosto che guidare.',
    questions: [
      {
        id: 'gr-ca-q1',
        prompt: 'Che cosa fa «semmai»?',
        options: ['conclude', 'concede il contrario', 'introduce una precisazione o un ribaltamento', 'aggiunge un esempio'],
        answer: 2,
        explanation: 'Semmai qualifies or overturns: "if anything, it is the opposite".',
      },
      {
        id: 'gr-ca-q2',
        prompt: '«Non è ___ una questione di soldi ___ di tempo.»',
        options: ['tanto … quanto', 'più … che', 'così … come', 'sia … sia'],
        answer: 0,
        explanation: 'Non tanto… quanto reframes which factor really matters.',
      },
      {
        id: 'gr-ca-q3',
        prompt: '«In quanto» introduce:',
        options: ['una conseguenza', 'una causa o una qualifica', 'un contrasto', 'una condizione'],
        answer: 1,
        explanation: 'In quanto gives a reason, or states the capacity in which someone acts.',
      },
    ],
  },
  {
    id: 'gr-b2-aggettivi-posizione',
    level: 'B2',
    title: 'La posizione dell’aggettivo',
    focus: 'un vecchio amico or un amico vecchio — when the order changes the meaning',
    explanation:
      'Italian adjectives usually follow the noun, and that is the neutral, descriptive position: una casa grande. Put the adjective first and it becomes evaluative or expected rather than distinguishing: una grande casa. With a small group the shift changes the meaning outright — un vecchio amico is a friend of long standing, un amico vecchio is an elderly friend. This is not stylistic; it is a difference in what you have said.',
    tables: [
      {
        caption: 'Meaning changes with position',
        headers: ['Before the noun', 'After the noun'],
        rows: [
          ['un vecchio amico — of long standing', 'un amico vecchio — elderly'],
          ['un povero uomo — poor fellow', 'un uomo povero — with no money'],
          ['un grande uomo — a great man', 'un uomo grande — a big man'],
          ['diverse persone — several people', 'persone diverse — different people'],
          ['certe idee — certain, some', 'idee certe — sure, established'],
          ['un semplice errore — merely an error', 'un errore semplice — a simple one'],
        ],
      },
      {
        caption: 'General tendency',
        headers: ['Position', 'Effect'],
        rows: [
          ['after (default)', 'distinguishes this one from others'],
          ['before', 'evaluative, expected, or emotional'],
          ['with a modifier (molto, troppo)', 'almost always after'],
        ],
      },
    ],
    examples: [
      { it: 'È un vecchio amico di famiglia.', en: 'He is an old family friend.' },
      { it: 'Ho conosciuto diverse persone interessanti.', en: 'I met several interesting people.' },
      { it: 'La bianca neve copriva i tetti.', en: 'The white snow covered the roofs. (poetic: whiteness is expected)' },
      { it: 'Voglio una macchina bianca, non nera.', en: 'I want a white car, not a black one. (distinguishing)' },
    ],
    pitfall:
      'Colours, nationalities, shapes and past participles used as adjectives stay after the noun in ordinary prose: una macchina rossa, un vino italiano, un tavolo rotondo. Fronting them is a poetic effect, not a neutral option.',
    questions: [
      {
        id: 'gr-agg-q1',
        prompt: 'Che cosa significa «un vecchio amico»?',
        options: ['un amico anziano', 'un amico di lunga data', 'un amico stanco', 'un ex amico'],
        answer: 1,
        explanation: 'Before the noun, vecchio refers to the length of the friendship.',
      },
      {
        id: 'gr-agg-q2',
        prompt: '«Ho visto ___ persone.» (parecchie, non «differenti»)',
        options: ['persone diverse', 'diverse persone', 'le diverse persone', 'persone di diverso'],
        answer: 1,
        explanation: 'Before the noun, diverse means several; after it, it means different.',
      },
      {
        id: 'gr-agg-q3',
        prompt: 'Dove va normalmente un aggettivo di colore?',
        options: ['prima del nome', 'dopo il nome', 'indifferentemente', 'prima solo al plurale'],
        answer: 1,
        explanation: 'Colours distinguish, so they take the default position after the noun.',
      },
    ],
  },
  {
    id: 'gr-b2-discorso-indiretto-avanzato',
    level: 'B2',
    title: 'Discorso indiretto complesso',
    focus: 'reporting questions, orders and hypotheses',
    explanation:
      'Beyond simple statements, reported speech has to handle questions, commands and conditionals. Yes-or-no questions become se plus, usually, a subjunctive: mi ha chiesto se avessi tempo. Wh-questions keep their question word. Commands become di plus the infinitive. And a reported second conditional keeps both halves intact, which makes for a long but entirely standard sentence: ha detto che se avesse avuto tempo sarebbe venuto.',
    tables: [
      {
        caption: 'By speech act',
        headers: ['Direct', 'Reported'],
        rows: [
          ['«Hai tempo?»', 'Mi ha chiesto se avessi tempo.'],
          ['«Dove abiti?»', 'Mi ha chiesto dove abitassi.'],
          ['«Vieni con me!»', 'Mi ha detto di andare con lui.'],
          ['«Non farlo»', 'Mi ha detto di non farlo.'],
          ['«Se avessi tempo, verrei»', 'Ha detto che se avesse avuto tempo sarebbe venuto.'],
        ],
      },
    ],
    examples: [
      { it: 'Mi ha chiesto se fossi già stato in Italia.', en: 'He asked me whether I had been to Italy before.' },
      { it: 'Ci ha ordinato di uscire immediatamente.', en: 'He ordered us to leave immediately.' },
      { it: 'Voleva sapere quanto costasse.', en: 'He wanted to know how much it cost.' },
      { it: 'Ha risposto che non ne sapeva nulla.', en: 'He replied that he knew nothing about it.' },
    ],
    pitfall:
      'Pronouns and possessives shift with the point of view, and it is easy to leave one behind: «vieni con me» reported by a third party becomes gli ha detto di andare con lui, not con me.',
    questions: [
      {
        id: 'gr-dia-q1',
        prompt: '«Hai tempo?» → Mi ha chiesto ___ .',
        options: ['che ho tempo', 'se avessi tempo', 'di avere tempo', 'se ho tempo avuto'],
        answer: 1,
        explanation: 'A yes-or-no question becomes se plus, after a past verb, the imperfect subjunctive.',
      },
      {
        id: 'gr-dia-q2',
        prompt: '«Non farlo!» → Mi ha detto ___ .',
        options: ['che non lo faccio', 'di non farlo', 'non farlo', 'che non lo facessi fare'],
        answer: 1,
        explanation: 'Negative commands become di non plus the infinitive.',
      },
      {
        id: 'gr-dia-q3',
        prompt: 'Riportando «vieni con me», un terzo dice:',
        options: ['gli ha detto di venire con me', 'gli ha detto di andare con lui', 'gli ha detto che viene con me', 'gli ha detto di andare con me'],
        answer: 1,
        explanation: 'Both the verb of motion and the pronoun shift with the new point of view.',
      },
    ],
  },
  {
    id: 'gr-b2-registri',
    level: 'B2',
    title: 'Registro: formale e informale',
    focus: 'the same message in three keys',
    explanation:
      'Italian marks register more sharply than English, and the marking is grammatical as well as lexical. Formal Italian prefers Lei, the passive, nominalisations (l’invio del modulo rather than mandare il modulo), and verbs of Latin origin — richiedere over chiedere, effettuare over fare. Informal Italian prefers the active voice, dislocation for emphasis, and short verbs. Mixing the two registers inside one sentence is the commonest stylistic error at this level.',
    tables: [
      {
        caption: 'The same message',
        headers: ['Informal', 'Neutral', 'Formal'],
        rows: [
          ['Ti mando il modulo', 'Le invio il modulo', 'Si trasmette in allegato il modulo'],
          ['Scusa, non posso', 'Mi dispiace, non posso', 'La informo che non mi è possibile'],
          ['Fammi sapere', 'Mi faccia sapere', 'Resto in attesa di un cortese riscontro'],
          ['Ci vediamo', 'A presto', 'Distinti saluti'],
        ],
      },
      {
        caption: 'Grammatical markers',
        headers: ['Formal', 'Informal'],
        rows: [
          ['passive and si passivante', 'active voice'],
          ['nominalisation: l’invio, la richiesta', 'verbs: mandare, chiedere'],
          ['Lei, La, Le', 'tu, ti'],
          ['subordination', 'short coordinated clauses, dislocation'],
        ],
      },
    ],
    examples: [
      { it: 'La informo che la riunione è stata rinviata.', en: 'I am writing to inform you that the meeting has been postponed.' },
      { it: 'Senti, la riunione è saltata.', en: 'Listen, the meeting is off.' },
      { it: 'Resto in attesa di un cortese riscontro.', en: 'I look forward to your reply.' },
      { it: 'Il libro, l’ho già letto.', en: 'The book — I have already read it. (dislocation: informal)' },
    ],
    pitfall:
      'Gentile and Egregio open a letter; Caro is for someone you know. And an email that opens with Gentile Dottore should not close with Ciao — the register has to hold from the first line to the last.',
    questions: [
      {
        id: 'gr-reg-q1',
        prompt: 'Quale tratto è tipicamente formale?',
        options: ['la dislocazione', 'la nominalizzazione', 'le frasi coordinate brevi', 'il tu'],
        answer: 1,
        explanation: 'Turning verbs into nouns — l’invio, la richiesta — is a hallmark of formal Italian.',
      },
      {
        id: 'gr-reg-q2',
        prompt: 'Come si chiude una lettera formale?',
        options: ['Ciao ciao', 'A presto', 'Distinti saluti', 'Un bacio'],
        answer: 2,
        explanation: 'Distinti saluti, or Cordiali saluti for something slightly warmer.',
      },
      {
        id: 'gr-reg-q3',
        prompt: '«Il libro, l’ho già letto» è un esempio di:',
        options: ['passivo', 'dislocazione a sinistra', 'nominalizzazione', 'discorso indiretto'],
        answer: 1,
        explanation: 'Left dislocation with a resumptive pronoun: very common in speech, out of place in a formal letter.',
      },
    ],
  },
];
