import type { GrammarLesson } from '../types';

/**
 * A2 grammar: the past, the future, and the pronouns that let you stop
 * repeating nouns.
 *
 * The centre of gravity is the passato prossimo / imperfetto pair. Italian
 * makes a distinction English does not — one form for what happened, another
 * for what was going on — and no amount of vocabulary compensates for getting
 * it wrong, because the choice changes the meaning rather than the style.
 */
export const GRAMMAR_A2: GrammarLesson[] = [
  {
    id: 'gr-a2-passato-avere',
    level: 'A2',
    title: 'Il passato prossimo con avere',
    focus: 'ho parlato, ho preso, ho dormito — the everyday past',
    explanation:
      'The passato prossimo is the ordinary past of spoken Italian: it covers both "I spoke" and "I have spoken". It is built from a present-tense auxiliary plus a past participle, and most verbs take avere. Regular participles are predictable — parlare gives parlato, credere gives creduto, dormire gives dormito — but the commonest verbs have their own, and those are the ones you need first.',
    tables: [
      {
        caption: 'Regular participles',
        headers: ['Infinitive', 'Participle', 'Example'],
        rows: [
          ['-are → -ato', 'parlato', 'Ho parlato con Marco.'],
          ['-ere → -uto', 'creduto', 'Non ho creduto una parola.'],
          ['-ire → -ito', 'dormito', 'Ho dormito otto ore.'],
        ],
      },
      {
        caption: 'Irregular participles worth knowing on day one',
        headers: ['Verb', 'Participle', 'Verb', 'Participle'],
        rows: [
          ['fare', 'fatto', 'dire', 'detto'],
          ['prendere', 'preso', 'mettere', 'messo'],
          ['leggere', 'letto', 'scrivere', 'scritto'],
          ['vedere', 'visto', 'chiedere', 'chiesto'],
          ['aprire', 'aperto', 'chiudere', 'chiuso'],
          ['bere', 'bevuto', 'rispondere', 'risposto'],
        ],
      },
    ],
    examples: [
      { it: 'Ieri ho fatto la spesa al mercato.', en: 'Yesterday I did the shopping at the market.' },
      { it: 'Hai già letto il messaggio?', en: 'Have you read the message yet?' },
      { it: 'Non ho capito niente.', en: 'I did not understand a thing.' },
      { it: 'Abbiamo preso il treno delle sei.', en: 'We took the six o’clock train.' },
    ],
    pitfall:
      'Adverbs like già, mai, ancora and sempre go between the auxiliary and the participle: ho già mangiato, non ho mai visto. Putting them at the end is the commonest English-speaker word-order error in this tense.',
    questions: [
      {
        id: 'gr-pa-q1',
        prompt: 'Quale participio è corretto per «prendere»?',
        options: ['prenduto', 'preso', 'prendato', 'prendito'],
        answer: 1,
        explanation: 'Prendere is irregular: preso. Its compounds follow it — comprendere gives compreso.',
      },
      {
        id: 'gr-pa-q2',
        prompt: 'Dove va «già»?',
        options: ['Ho mangiato già.', 'Ho già mangiato.', 'Già ho mangiato.', 'Ho mangiato, già.'],
        answer: 1,
        explanation: 'These adverbs sit between the auxiliary and the participle.',
      },
      {
        id: 'gr-pa-q3',
        prompt: 'Come si dice «I have read the book»?',
        options: ['Ho leggiuto il libro', 'Ho letto il libro', 'Ho lettuto il libro', 'Sono letto il libro'],
        answer: 1,
        explanation: 'Leggere gives letto, and it takes avere because it has a direct object.',
      },
    ],
  },
  {
    id: 'gr-a2-passato-essere',
    level: 'A2',
    title: 'Il passato prossimo con essere',
    focus: 'sono andato, è partita, siamo usciti — and why the ending changes',
    explanation:
      'A minority of verbs take essere instead of avere, and with them the participle agrees with the subject like an adjective: Marco è andato, Anna è andata, i ragazzi sono andati. The group is small and learnable: verbs of movement and change of state (andare, venire, partire, arrivare, entrare, uscire, salire, scendere, nascere, morire, diventare, restare), essere and stare themselves, and every reflexive verb without exception.',
    tables: [
      {
        caption: 'Agreement with essere',
        headers: ['Subject', 'Form', 'English'],
        rows: [
          ['Marco', 'è andato', 'he went'],
          ['Anna', 'è andata', 'she went'],
          ['Marco e Luca', 'sono andati', 'they went'],
          ['Anna e Sara', 'sono andate', 'they went'],
          ['Anna e Marco', 'sono andati', 'mixed company takes the masculine'],
        ],
      },
      {
        caption: 'The same verb, both auxiliaries',
        headers: ['With avere (object)', 'With essere (no object)'],
        rows: [
          ['Ho finito il lavoro.', 'Il film è finito.'],
          ['Ho cominciato la lezione.', 'La lezione è cominciata.'],
          ['Ho passato tre giorni a Roma.', 'Sono passato da Roma.'],
          ['Ho cambiato idea.', 'Il tempo è cambiato.'],
        ],
      },
    ],
    examples: [
      { it: 'Mia sorella è partita stamattina.', en: 'My sister left this morning.' },
      { it: 'Ci siamo svegliati tardi.', en: 'We woke up late.' },
      { it: 'Sono nato a Glasgow.', en: 'I was born in Glasgow.' },
      { it: 'Le ragazze sono uscite alle otto.', en: 'The girls went out at eight.' },
    ],
    pitfall:
      'Every reflexive verb takes essere, whatever the verb would do on its own: ho lavato la macchina but mi sono lavato. The reflexive pronoun is the signal — see it, and the auxiliary is settled.',
    questions: [
      {
        id: 'gr-pe-q1',
        prompt: 'Anna parla di sé: quale forma usa?',
        options: ['Sono andato al mare', 'Sono andata al mare', 'Ho andato al mare', 'Ho andata al mare'],
        answer: 1,
        explanation: 'Andare takes essere, so the participle agrees with Anna: andata.',
      },
      {
        id: 'gr-pe-q2',
        prompt: 'Quale frase è corretta?',
        options: ['Mi ho lavato le mani', 'Mi sono lavato le mani', 'Ho mi lavato le mani', 'Sono lavato mi le mani'],
        answer: 1,
        explanation: 'Reflexives always take essere, and the pronoun comes before the auxiliary.',
      },
      {
        id: 'gr-pe-q3',
        prompt: '«Il film ___ alle undici.» (finire)',
        options: ['ha finito', 'è finito', 'è finita', 'ha finita'],
        answer: 1,
        explanation: 'With no direct object, finire takes essere and agrees with il film.',
      },
    ],
  },
  {
    id: 'gr-a2-imperfetto',
    level: 'A2',
    title: 'L’imperfetto',
    focus: 'ero, avevo, facevo — how things used to be',
    explanation:
      'The imperfetto describes rather than reports. It is the tense for what things were like, what you used to do, and what was going on when something else happened: da bambino andavo al mare ogni estate. It is also almost completely regular — only essere is properly irregular, and fare, dire and bere simply keep their old Latin stems.',
    tables: [
      {
        caption: 'Endings',
        headers: ['', 'parlare', 'prendere', 'dormire', 'essere'],
        rows: [
          ['io', 'parlavo', 'prendevo', 'dormivo', 'ero'],
          ['tu', 'parlavi', 'prendevi', 'dormivi', 'eri'],
          ['lui / lei', 'parlava', 'prendeva', 'dormiva', 'era'],
          ['noi', 'parlavamo', 'prendevamo', 'dormivamo', 'eravamo'],
          ['voi', 'parlavate', 'prendevate', 'dormivate', 'eravate'],
          ['loro', 'parlavano', 'prendevano', 'dormivano', 'erano'],
        ],
      },
      {
        caption: 'The three that keep an old stem',
        headers: ['Verb', 'Stem', 'io'],
        rows: [
          ['fare', 'face-', 'facevo'],
          ['dire', 'dice-', 'dicevo'],
          ['bere', 'beve-', 'bevevo'],
        ],
      },
    ],
    examples: [
      { it: 'Da bambino abitavo in campagna.', en: 'As a child I lived in the countryside.' },
      { it: 'Era tardi e pioveva.', en: 'It was late and it was raining.' },
      { it: 'Mentre cucinavo, ascoltavo la radio.', en: 'While I cooked, I listened to the radio.' },
      { it: 'Volevo chiederti una cosa.', en: 'I wanted to ask you something. (softened by the imperfect)' },
    ],
    pitfall:
      'Volevo, potevo and dovevo in the imperfect are the polite way to open a request: volevo un caffè is softer than voglio un caffè. It is not a mistake about time — it is distance, used for courtesy.',
    questions: [
      {
        id: 'gr-imf-q1',
        prompt: 'Quale verbo è irregolare all’imperfetto?',
        options: ['andare', 'essere', 'parlare', 'dormire'],
        answer: 1,
        explanation: 'Essere gives ero, eri, era. Everything else builds regularly on the infinitive stem.',
      },
      {
        id: 'gr-imf-q2',
        prompt: '«Da bambino ___ al mare ogni estate.»',
        options: ['sono andato', 'andavo', 'andrò', 'ero andato'],
        answer: 1,
        explanation: 'A repeated habit in the past is the imperfetto’s core job.',
      },
      {
        id: 'gr-imf-q3',
        prompt: 'Quale forma è l’imperfetto di «fare» alla prima persona?',
        options: ['facevo', 'faccevo', 'farevo', 'fecevo'],
        answer: 0,
        explanation: 'Fare keeps its Latin stem face-, giving facevo, facevi, faceva.',
      },
    ],
  },
  {
    id: 'gr-a2-passato-imperfetto',
    level: 'A2',
    title: 'Passato prossimo o imperfetto?',
    focus: 'the one choice English does not make you make',
    explanation:
      'English has a single past for both; Italian forces a decision every time. The passato prossimo reports a completed event that moves the story on. The imperfetto paints the scene it happens against: the weather, the time, what was already going on, how things habitually were. Ieri ho incontrato Luca is what happened; era tardi e pioveva is the world it happened in. The clearest signal is the pairing "mentre + imperfetto" for the background and passato prossimo for the interruption.',
    tables: [
      {
        caption: 'What each tense is for',
        headers: ['Imperfetto', 'Passato prossimo'],
        rows: [
          ['background, scene, weather', 'a completed event'],
          ['habits: ogni giorno, sempre, di solito', 'one time: ieri, l’altro giorno, nel 2019'],
          ['what was going on', 'what happened next'],
          ['age, time, description', 'a change, an action, a result'],
        ],
      },
      {
        caption: 'Same verb, different meaning',
        headers: ['Imperfetto', 'Passato prossimo'],
        rows: [
          ['sapevo — I knew', 'ho saputo — I found out'],
          ['conoscevo — I knew (a person)', 'ho conosciuto — I met'],
          ['dovevo — I was supposed to', 'ho dovuto — I had to, and did'],
          ['volevo — I wanted', 'ho voluto — I insisted'],
        ],
      },
    ],
    examples: [
      { it: 'Mentre uscivo, ho incontrato Luca.', en: 'As I was leaving, I ran into Luca.' },
      { it: 'Era tardi, così ho preso un taxi.', en: 'It was late, so I took a taxi.' },
      { it: 'Da piccola suonavo il piano; poi ho smesso.', en: 'As a child I played the piano; then I stopped.' },
      { it: 'Ho saputo la notizia ieri, ma la sapevo già.', en: 'I found out yesterday, but I already knew.' },
    ],
    pitfall:
      'C’era una volta, not c’è stata una volta: every fairy tale in Italian opens in the imperfect, because it is setting a scene rather than reporting an event.',
    questions: [
      {
        id: 'gr-pi2-q1',
        prompt: '«Mentre ___ , ho incontrato Luca.» (uscire)',
        options: ['sono uscito', 'uscivo', 'uscirò', 'ero uscito'],
        answer: 1,
        explanation: 'Mentre introduces the ongoing background, which is the imperfetto’s job.',
      },
      {
        id: 'gr-pi2-q2',
        prompt: 'Come si dice «I met her last year» (per la prima volta)?',
        options: ['La conoscevo l’anno scorso', 'L’ho conosciuta l’anno scorso', 'La sapevo l’anno scorso', 'L’ho saputa l’anno scorso'],
        answer: 1,
        explanation: 'The passato prossimo of conoscere marks the moment of meeting; the imperfetto would mean you already knew her.',
      },
      {
        id: 'gr-pi2-q3',
        prompt: 'Quale frase descrive uno sfondo, non un evento?',
        options: ['Ho aperto la porta.', 'Pioveva e faceva freddo.', 'Sono uscito alle otto.', 'Ha telefonato Marco.'],
        answer: 1,
        explanation: 'Weather and setting are description, so they take the imperfetto.',
      },
    ],
  },
  {
    id: 'gr-a2-futuro',
    level: 'A2',
    title: 'Il futuro semplice',
    focus: 'partirò, sarà, andremo — and the future that means "probably"',
    explanation:
      'The future is formed from the infinitive: -are verbs change their a to e, so parlare gives parlerò, and everything takes the same endings. A handful of very common verbs contract — andare gives andrò, avere avrò, essere sarò. Italian also uses the future for present-tense guessing: sarà stanco does not mean he will be tired, it means he must be tired. That second use is far more frequent in speech than the first.',
    tables: [
      {
        caption: 'Endings, and the -are shift',
        headers: ['', 'parlare', 'prendere', 'dormire'],
        rows: [
          ['io', 'parlerò', 'prenderò', 'dormirò'],
          ['tu', 'parlerai', 'prenderai', 'dormirai'],
          ['lui / lei', 'parlerà', 'prenderà', 'dormirà'],
          ['noi', 'parleremo', 'prenderemo', 'dormiremo'],
          ['voi', 'parlerete', 'prenderete', 'dormirete'],
          ['loro', 'parleranno', 'prenderanno', 'dormiranno'],
        ],
      },
      {
        caption: 'Contracted stems',
        headers: ['Verb', 'io', 'Verb', 'io'],
        rows: [
          ['essere', 'sarò', 'avere', 'avrò'],
          ['andare', 'andrò', 'venire', 'verrò'],
          ['potere', 'potrò', 'dovere', 'dovrò'],
          ['volere', 'vorrò', 'vedere', 'vedrò'],
          ['fare', 'farò', 'stare', 'starò'],
          ['rimanere', 'rimarrò', 'bere', 'berrò'],
        ],
      },
    ],
    examples: [
      { it: 'Domani partirò presto.', en: 'Tomorrow I will leave early.' },
      { it: 'Che ora sarà? — Saranno le tre.', en: 'What time can it be? — It must be three.' },
      { it: 'Non verrà, ne sono sicuro.', en: 'He will not come, I am sure of it.' },
      { it: 'Quando avrai tempo, chiamami.', en: 'When you have time, call me.' },
    ],
    pitfall:
      'For plans, spoken Italian mostly uses the present: domani parto alle sei. The future tense is not wrong there, but reaching for it every time is a sign of translating from English rather than speaking Italian.',
    questions: [
      {
        id: 'gr-fut-q1',
        prompt: 'Qual è il futuro di «andare» alla prima persona?',
        options: ['anderò', 'andrò', 'andarò', 'anderei'],
        answer: 1,
        explanation: 'Andare contracts to andr-: andrò, andrai, andrà.',
      },
      {
        id: 'gr-fut-q2',
        prompt: 'Che cosa significa «Saranno le tre»?',
        options: ['Saranno le tre più tardi', 'Sono circa le tre, suppongo', 'Erano le tre', 'Alle tre succederà qualcosa'],
        answer: 1,
        explanation: 'The future of supposition: a guess about the present, not a statement about the future.',
      },
      {
        id: 'gr-fut-q3',
        prompt: 'Come cambia la desinenza di «parlare» al futuro?',
        options: ['parlarò', 'parlerò', 'parlirò', 'parlarei'],
        answer: 1,
        explanation: 'The a of -are becomes e before the future endings: parlerò.',
      },
    ],
  },
  {
    id: 'gr-a2-condizionale',
    level: 'A2',
    title: 'Il condizionale presente',
    focus: 'vorrei, potresti, mi piacerebbe — the polite tense',
    explanation:
      'The conditional uses the same stems as the future, with its own endings, which means learning it costs almost nothing once the future is in place. Its everyday job is politeness and softening: vorrei rather than voglio, potresti rather than puoi. It also states what would happen — andrei ma non posso — and reports advice: dovresti riposare.',
    tables: [
      {
        caption: 'Endings',
        headers: ['', 'parlare', 'essere', 'volere'],
        rows: [
          ['io', 'parlerei', 'sarei', 'vorrei'],
          ['tu', 'parleresti', 'saresti', 'vorresti'],
          ['lui / lei', 'parlerebbe', 'sarebbe', 'vorrebbe'],
          ['noi', 'parleremmo', 'saremmo', 'vorremmo'],
          ['voi', 'parlereste', 'sareste', 'vorreste'],
          ['loro', 'parlerebbero', 'sarebbero', 'vorrebbero'],
        ],
      },
      {
        caption: 'What it does',
        headers: ['Use', 'Example'],
        rows: [
          ['polite request', 'Vorrei un caffè, per favore.'],
          ['softened suggestion', 'Potresti aiutarmi?'],
          ['advice', 'Dovresti dormire di più.'],
          ['what would happen', 'Verrei volentieri, ma lavoro.'],
          ['reported rumour', 'Secondo il giornale, sarebbe già partito.'],
        ],
      },
    ],
    examples: [
      { it: 'Mi piacerebbe vedere quel film.', en: 'I would like to see that film.' },
      { it: 'Sarebbe meglio partire presto.', en: 'It would be better to leave early.' },
      { it: 'Potrebbe ripetere, per favore?', en: 'Could you repeat that, please?' },
      { it: 'Al posto tuo, non lo farei.', en: 'In your position, I would not do it.' },
    ],
    pitfall:
      'Watch the double m in noi: parleremmo is the conditional, parleremo the future. One letter separates "we would speak" from "we will speak", and Italians hear the difference clearly.',
    questions: [
      {
        id: 'gr-con-q1',
        prompt: 'Quale forma è il condizionale?',
        options: ['parleremo', 'parleremmo', 'parlavamo', 'parliamo'],
        answer: 1,
        explanation: 'The double m marks the conditional; a single m is the future.',
      },
      {
        id: 'gr-con-q2',
        prompt: 'Al bar, la richiesta più educata è:',
        options: ['Voglio un caffè', 'Vorrei un caffè', 'Ho voluto un caffè', 'Volevo volere un caffè'],
        answer: 1,
        explanation: 'Vorrei is the standard polite request; volevo is an equally common softened alternative.',
      },
      {
        id: 'gr-con-q3',
        prompt: 'Come si dà un consiglio a un amico?',
        options: ['Devi dormire di più', 'Dovresti dormire di più', 'Dormirai di più', 'Dormissi di più'],
        answer: 1,
        explanation: 'The conditional of dovere turns an order into advice.',
      },
    ],
  },
  {
    id: 'gr-a2-imperativo-formale',
    level: 'A2',
    title: 'L’imperativo formale',
    focus: 'scusi, senta, mi dica — giving instructions to someone you call Lei',
    explanation:
      'To a stranger, instructions take the Lei form, which is borrowed from the subjunctive: -are verbs end in -i (scusi, guardi) and -ere / -ire verbs end in -a (prenda, senta). This is why the polite forms look "swapped" compared to the tu imperative. Pronouns behave differently too: with Lei they go before the verb — mi dica, si accomodi — while with tu they attach to the end.',
    tables: [
      {
        caption: 'tu against Lei',
        headers: ['Verb', 'tu', 'Lei', 'English'],
        rows: [
          ['scusare', 'scusa', 'scusi', 'excuse me'],
          ['sentire', 'senti', 'senta', 'listen'],
          ['prendere', 'prendi', 'prenda', 'take'],
          ['dire', 'di’ / dimmi', 'dica / mi dica', 'tell me'],
          ['andare', 'vai / va’', 'vada', 'go'],
          ['fare', 'fai / fa’', 'faccia', 'do'],
          ['accomodarsi', 'accomodati', 'si accomodi', 'take a seat'],
        ],
      },
    ],
    examples: [
      { it: 'Scusi, mi sa dire dov’è la stazione?', en: 'Excuse me, can you tell me where the station is?' },
      { it: 'Prego, si accomodi.', en: 'Please, take a seat.' },
      { it: 'Vada dritto e poi giri a destra.', en: 'Go straight on and then turn right.' },
      { it: 'Non si preoccupi.', en: 'Do not worry.' },
    ],
    pitfall:
      'With Lei, the negative is regular — non si preoccupi — unlike the tu form, which uses the bare infinitive: non preoccuparti. The two negatives look nothing alike, and mixing them is instantly audible.',
    questions: [
      {
        id: 'gr-impf-q1',
        prompt: 'A uno sconosciuto, come si dice «listen»?',
        options: ['Senti', 'Senta', 'Sentite', 'Sentire'],
        answer: 1,
        explanation: '-ire verbs take -a in the Lei imperative: senta.',
      },
      {
        id: 'gr-impf-q2',
        prompt: 'Dove va il pronome con il Lei?',
        options: ['Dicami', 'Mi dica', 'Dica mi', 'Midica'],
        answer: 1,
        explanation: 'With the formal imperative the pronoun goes before the verb, unlike the informal dimmi.',
      },
      {
        id: 'gr-impf-q3',
        prompt: 'Quale forma è corretta al negativo formale?',
        options: ['Non si preoccupare', 'Non si preoccupi', 'Non preoccuparsi Lei', 'Non ti preoccupi'],
        answer: 1,
        explanation: 'The formal negative is regular; the infinitive trick belongs only to tu.',
      },
    ],
  },
  {
    id: 'gr-a2-pronomi-diretti',
    level: 'A2',
    title: 'I pronomi diretti e il ne',
    focus: 'lo, la, li, le, ne — and the participle that agrees with them',
    explanation:
      'Direct object pronouns replace a noun already mentioned: hai visto il film? — sì, l’ho visto. Italians use them constantly, and repeating the noun instead sounds laboured. In the passato prossimo the participle agrees with lo, la, li and le — l’ho vista, li ho comprati — which is one of the few places agreement is compulsory rather than decorative. Ne does the same job for quantities: quante ne vuoi? — ne voglio due.',
    tables: [
      {
        caption: 'The pronouns',
        headers: ['Replaces', 'Pronoun', 'Example'],
        rows: [
          ['il libro', 'lo', 'Lo leggo stasera.'],
          ['la rivista', 'la', 'La compro domani.'],
          ['i libri', 'li', 'Li ho letti tutti.'],
          ['le riviste', 'le', 'Le ho lette ieri.'],
          ['di questo / quantity', 'ne', 'Ne prendo due.'],
        ],
      },
      {
        caption: 'Agreement in the passato prossimo',
        headers: ['Question', 'Answer', 'Note'],
        rows: [
          ['Hai visto il film?', 'Sì, l’ho visto.', 'no visible change'],
          ['Hai visto la mostra?', 'Sì, l’ho vista.', 'agrees: -a'],
          ['Hai comprato i biglietti?', 'Sì, li ho comprati.', 'agrees: -i'],
          ['Hai letto le lettere?', 'Sì, le ho lette.', 'agrees: -e'],
          ['Quanti caffè hai preso?', 'Ne ho presi tre.', 'ne agrees with the number'],
        ],
      },
    ],
    examples: [
      { it: 'Le chiavi? Non le trovo.', en: 'The keys? I cannot find them.' },
      { it: 'Ho comprato la torta e l’ho già mangiata.', en: 'I bought the cake and I have already eaten it.' },
      { it: 'Quanti anni hai? — Ne ho trenta.', en: 'How old are you? — I am thirty. (literally: I have thirty of them)' },
      { it: 'Di pane ne serve poco.', en: 'We do not need much bread.' },
    ],
    pitfall:
      'Lo and la elide before a vowel — l’ho visto — but li and le never do: li ho visti, not l’ho visti. The plural forms keep their own shape however awkward it sounds to an English ear.',
    questions: [
      {
        id: 'gr-pd-q1',
        prompt: '«Hai comprato le mele?» — «Sì, ___ .»',
        options: ['le ho comprato', 'le ho comprate', 'l’ho comprate', 'ne ho comprato'],
        answer: 1,
        explanation: 'The participle agrees with le, giving comprate.',
      },
      {
        id: 'gr-pd-q2',
        prompt: '«Quanti fratelli hai?» — «___ due.»',
        options: ['Ho', 'Ne ho', 'Li ho', 'Ce ne ho'],
        answer: 1,
        explanation: 'A bare number needs ne in Italian; ho due sounds unfinished.',
      },
      {
        id: 'gr-pd-q3',
        prompt: 'Quale forma NON elide mai?',
        options: ['lo', 'la', 'li', 'entrambe lo e la'],
        answer: 2,
        explanation: 'Li never elides: li ho visti, never l’ho visti for a plural.',
      },
    ],
  },
  {
    id: 'gr-a2-pronomi-combinati',
    level: 'A2',
    title: 'I pronomi combinati',
    focus: 'me lo, te la, glielo — two pronouns in one breath',
    explanation:
      'When an indirect and a direct pronoun meet, the indirect one comes first and its i becomes e: mi + lo gives me lo, ti + la gives te la. The third person is the odd one out: gli and le both become glie-, written joined to what follows — glielo, gliela, glieli, gliele, gliene. That single form covers "to him", "to her" and "to them", so context carries the difference.',
    tables: [
      {
        caption: 'The combinations',
        headers: ['', 'lo', 'la', 'li', 'le', 'ne'],
        rows: [
          ['mi', 'me lo', 'me la', 'me li', 'me le', 'me ne'],
          ['ti', 'te lo', 'te la', 'te li', 'te le', 'te ne'],
          ['gli / le', 'glielo', 'gliela', 'glieli', 'gliele', 'gliene'],
          ['ci', 'ce lo', 'ce la', 'ce li', 'ce le', 'ce ne'],
          ['vi', 've lo', 've la', 've li', 've le', 've ne'],
        ],
      },
    ],
    examples: [
      { it: 'Il libro? Te lo porto domani.', en: 'The book? I will bring it to you tomorrow.' },
      { it: 'Non gliel’ho ancora detto.', en: 'I have not told him yet.' },
      { it: 'Me ne hai parlato ieri.', en: 'You spoke to me about it yesterday.' },
      { it: 'Ce li hanno mandati per posta.', en: 'They sent them to us by post.' },
    ],
    pitfall:
      'With an infinitive the pair attaches to the end as one word and the final e drops: voglio dartelo, sto per dirglielo. Splitting them — voglio te lo dare — is not Italian.',
    questions: [
      {
        id: 'gr-pc-q1',
        prompt: '«Mi dai il libro?» — «Sì, ___ do subito.»',
        options: ['mi lo', 'me lo', 'me il', 'mi il'],
        answer: 1,
        explanation: 'Mi becomes me before another pronoun: me lo do… — here, te lo do.',
      },
      {
        id: 'gr-pc-q2',
        prompt: 'Come si dice «I told her»?',
        options: ['Le lo ho detto', 'Gliel’ho detto', 'Gli lo ho detto', 'La ho detto'],
        answer: 1,
        explanation: 'Gli and le both become glie- before another pronoun, written as one word.',
      },
      {
        id: 'gr-pc-q3',
        prompt: 'Con l’infinito, quale forma è corretta?',
        options: ['Voglio te lo dare', 'Voglio dartelo', 'Voglio dare te lo', 'Voglio darti lo'],
        answer: 1,
        explanation: 'The pronouns attach to the infinitive, which drops its final e.',
      },
    ],
  },
  {
    id: 'gr-a2-riflessivi',
    level: 'A2',
    title: 'I verbi riflessivi e reciproci',
    focus: 'mi alzo, ci vediamo — and the verbs that are reflexive for no obvious reason',
    explanation:
      'A reflexive verb turns the action back on the subject: mi lavo, ti vesti, si sveglia. The plural forms double as reciprocals — ci vediamo domani means we will see each other. What trips up English speakers is the third group: verbs that are reflexive in Italian with no reflexive sense at all, such as arrabbiarsi, annoiarsi, ricordarsi, dimenticarsi and accorgersi. They simply have to be learned with their pronoun attached.',
    tables: [
      {
        caption: 'Three kinds',
        headers: ['Kind', 'Example', 'Meaning'],
        rows: [
          ['true reflexive', 'mi lavo', 'I wash myself'],
          ['reciprocal', 'ci scriviamo', 'we write to each other'],
          ['inherently reflexive', 'mi arrabbio', 'I get angry (nothing reflexive about it)'],
        ],
      },
      {
        caption: 'Where the pronoun goes',
        headers: ['Structure', 'Example'],
        rows: [
          ['simple tense', 'mi alzo alle sette'],
          ['compound tense (always essere)', 'mi sono alzato tardi'],
          ['with a modal', 'mi devo alzare / devo alzarmi'],
          ['infinitive', 'prima di alzarmi'],
          ['imperative (tu)', 'alzati!'],
        ],
      },
    ],
    examples: [
      { it: 'Mi sveglio alle sei ma mi alzo alle sette.', en: 'I wake at six but get up at seven.' },
      { it: 'Ci siamo conosciuti a Roma.', en: 'We met in Rome.' },
      { it: 'Non ti arrabbiare, non è successo niente.', en: 'Do not get angry, nothing happened.' },
      { it: 'Mi sono dimenticato le chiavi.', en: 'I forgot my keys.' },
    ],
    pitfall:
      'With a modal verb the pronoun may sit in either place — mi voglio riposare or voglio riposarmi — but it cannot appear twice, and it must match the subject: mi voglio riposare, never si voglio riposare.',
    questions: [
      {
        id: 'gr-rif-q1',
        prompt: 'Quale ausiliare prende un verbo riflessivo?',
        options: ['sempre avere', 'sempre essere', 'dipende dal verbo', 'nessuno dei due'],
        answer: 1,
        explanation: 'Reflexives take essere without exception, and the participle agrees with the subject.',
      },
      {
        id: 'gr-rif-q2',
        prompt: 'Come si dice «we met last year»?',
        options: ['Ci siamo conosciuti l’anno scorso', 'Abbiamo conosciuto l’anno scorso', 'Ci abbiamo conosciuti', 'Siamo conosciuto'],
        answer: 0,
        explanation: 'The reciprocal uses ci plus essere, with agreement on the participle.',
      },
      {
        id: 'gr-rif-q3',
        prompt: 'Quale frase è corretta con un modale?',
        options: ['Voglio mi riposare', 'Mi voglio riposare', 'Voglio riposare mi', 'Mi voglio riposarmi'],
        answer: 1,
        explanation: 'The pronoun goes before the modal or attaches to the infinitive — but only once.',
      },
    ],
  },
  {
    id: 'gr-a2-comparativi',
    level: 'A2',
    title: 'Comparativi e superlativi',
    focus: 'più di, meno che, il più bello, bellissimo',
    explanation:
      'Comparisons use più or meno, and the tricky part is which word follows. Use di when comparing two things by one quality — Marco è più alto di Luca — and che when comparing two qualities, two verbs, or anything introduced by a preposition: è più stanco che arrabbiato. The relative superlative repeats the article — il ragazzo più alto della classe — while the absolute superlative just adds -issimo: bellissimo, stanchissimo.',
    tables: [
      {
        caption: 'di or che',
        headers: ['Use di', 'Use che'],
        rows: [
          ['two nouns, one quality: più alto di me', 'two qualities: più furbo che intelligente'],
          ['before a number: più di dieci', 'two verbs: meglio parlare che tacere'],
          ['before a pronoun: meno di lui', 'before a preposition: più caldo in Sicilia che in Piemonte'],
        ],
      },
      {
        caption: 'Irregular comparatives',
        headers: ['Adjective', 'Comparative', 'Superlative'],
        rows: [
          ['buono', 'migliore (più buono)', 'ottimo'],
          ['cattivo', 'peggiore (più cattivo)', 'pessimo'],
          ['grande', 'maggiore (più grande)', 'massimo'],
          ['piccolo', 'minore (più piccolo)', 'minimo'],
          ['bene (adv.)', 'meglio', 'benissimo'],
          ['male (adv.)', 'peggio', 'malissimo'],
        ],
      },
    ],
    examples: [
      { it: 'Questo caffè è più buono di quello.', en: 'This coffee is better than that one.' },
      { it: 'È più stanco che arrabbiato.', en: 'He is more tired than angry.' },
      { it: 'È il ristorante più caro della città.', en: 'It is the most expensive restaurant in town.' },
      { it: 'La cena era buonissima.', en: 'Dinner was delicious.' },
    ],
    pitfall:
      'Meglio and migliore are not interchangeable: migliore is an adjective (un vino migliore) and meglio an adverb (si mangia meglio qui). Saying è più meglio, which you will hear, is emphatically non-standard.',
    questions: [
      {
        id: 'gr-comp-q1',
        prompt: '«Marco è più alto ___ Luca.»',
        options: ['che', 'di', 'da', 'come'],
        answer: 1,
        explanation: 'Two people compared for one quality takes di.',
      },
      {
        id: 'gr-comp-q2',
        prompt: '«È più stanco ___ arrabbiato.»',
        options: ['di', 'che', 'da', 'come'],
        answer: 1,
        explanation: 'Two qualities compared in the same person takes che.',
      },
      {
        id: 'gr-comp-q3',
        prompt: 'Quale frase è corretta?',
        options: ['Questo vino è più meglio', 'Questo vino è migliore', 'Questo vino è più migliore', 'Questo vino è meglio di buono'],
        answer: 1,
        explanation: 'Migliore already contains the comparison; adding più is a redundancy Italians notice.',
      },
    ],
  },
  {
    id: 'gr-a2-gerundio-si',
    level: 'A2',
    title: 'Sto facendo, si fa così',
    focus: 'the progressive, and the impersonal si',
    explanation:
      'Stare plus the gerund describes something happening right now, and only right now: sto mangiando means I am eating at this moment, not that I eat regularly. For habits Italian uses the plain present. Separately, si plus a third-person verb is how Italian says "one", "you" in general, or "people": in Italia si cena tardi. When what follows is plural, the verb goes plural too — qui si mangiano ottimi dolci — which surprises learners who expect si to be fixed.',
    tables: [
      {
        caption: 'The gerund',
        headers: ['Infinitive', 'Gerund', 'Example'],
        rows: [
          ['-are', 'parlando', 'Sto parlando con lei.'],
          ['-ere', 'prendendo', 'Sta prendendo il treno.'],
          ['-ire', 'dormendo', 'Stanno dormendo.'],
          ['fare (irregular)', 'facendo', 'Che stai facendo?'],
          ['dire / bere', 'dicendo / bevendo', 'Sto dicendo la verità.'],
        ],
      },
      {
        caption: 'The impersonal si',
        headers: ['Italian', 'English', 'Note'],
        rows: [
          ['In Italia si cena tardi.', 'In Italy people dine late.', 'singular'],
          ['Qui si mangiano ottimi dolci.', 'They serve excellent cakes here.', 'plural noun → plural verb'],
          ['Come si dice in italiano?', 'How do you say it in Italian?', 'the most useful phrase in the language'],
          ['Si è mangiato bene.', 'We ate well.', 'compound tenses take essere'],
        ],
      },
    ],
    examples: [
      { it: 'Che stai facendo? — Sto studiando.', en: 'What are you doing? — I am studying.' },
      { it: 'Come si arriva alla stazione?', en: 'How does one get to the station?' },
      { it: 'In questo ufficio si lavora troppo.', en: 'People work too much in this office.' },
      { it: 'Non si può fumare qui.', en: 'You cannot smoke here.' },
    ],
    pitfall:
      'Do not use the progressive for the future or for habits. Sto andando domani is wrong — domani vado is right — and sto lavorando ogni giorno should be lavoro ogni giorno. The Italian progressive is strictly about this moment.',
    questions: [
      {
        id: 'gr-ger-q1',
        prompt: 'Come si dice «I am going tomorrow»?',
        options: ['Sto andando domani', 'Vado domani', 'Sto per andare domani', 'Sono andando domani'],
        answer: 1,
        explanation: 'The present covers scheduled plans; the progressive is only for right now.',
      },
      {
        id: 'gr-ger-q2',
        prompt: '«Qui ___ ottimi dolci.» (si mangiare)',
        options: ['si mangia', 'si mangiano', 'si è mangiato', 'si mangiava'],
        answer: 1,
        explanation: 'With a plural noun the impersonal si takes a plural verb.',
      },
      {
        id: 'gr-ger-q3',
        prompt: 'Qual è il gerundio di «fare»?',
        options: ['fando', 'facendo', 'faciendo', 'fandosi'],
        answer: 1,
        explanation: 'Fare keeps its old stem: facendo, like dicendo and bevendo.',
      },
    ],
  },
];
