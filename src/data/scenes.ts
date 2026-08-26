import type { Scene } from './types';

/**
 * Scenes teach vocabulary by using it.
 *
 * The dialogue is written first and the word list is derived from it, which is
 * the opposite of a deck. That ordering matters: a word met inside a turn
 * arrives with its register, its collocations and its grammar attached, and a
 * learner who has heard `mi serve` in a pharmacy will produce it correctly long
 * before one who has memorised `servire = to be needed`.
 *
 * Each scene ends with a discrimination task, which is where "how Italians
 * actually say it" is taught explicitly: the plausible English calque against
 * what a native produces, with the reason spelled out.
 */
export const SCENES: Scene[] = [
  // ─────────────────────────────── A1 ───────────────────────────────
  {
    id: 'sc-a1-bar',
    level: 'A1',
    title: 'Al bar, la mattina',
    situation: 'Colazione in piedi al bancone, come la fa quasi tutta Italia.',
    teaches: [
      'lx-a1-caffe',
      'lx-a1-prendere',
      'lx-a1-volere',
      'lx-a1-pagare',
      'lx-a1-costare',
      'lx-a1-mangiare',
      'lx-a1-per',
      'lx-a1-anche',
    ],
    lines: [
      { speaker: 'Barista', it: 'Buongiorno! Dica pure.', en: 'Good morning! Go ahead.' },
      { speaker: 'Cliente', it: 'Buongiorno. Un caffè, per favore.', en: 'Good morning. A coffee, please.' },
      { speaker: 'Barista', it: 'Subito. Anche qualcosa da mangiare?', en: 'Right away. Something to eat as well?' },
      { speaker: 'Cliente', it: 'Sì, prendo anche un cornetto.', en: 'Yes, I will have a croissant too.' },
      { speaker: 'Barista', it: 'Ecco a lei.', en: 'Here you are.' },
      { speaker: 'Cliente', it: 'Quanto costa?', en: 'How much is it?' },
      { speaker: 'Barista', it: 'Due e quaranta. Paga alla cassa.', en: 'Two forty. Pay at the till.' },
      { speaker: 'Cliente', it: 'Va bene, grazie mille.', en: 'All right, thank you very much.' },
    ],
    notes: [
      {
        point: 'Un caffè means an espresso',
        detail:
          'You never have to specify. Asking for un espresso is understood but marks you as a visitor; asking for un caffè normale gets you exactly the same thing.',
      },
      {
        point: 'Prendo, not voglio',
        detail:
          'Italians order with prendo ("I will have") or vorrei ("I would like"). Voglio un caffè is grammatical and sounds brusque to the point of rudeness.',
      },
      {
        point: 'Standing costs less',
        detail:
          'Al bancone you pay the counter price; sitting down can double or triple it. In many bars you pay at the cassa first and hand the receipt to the barista.',
      },
    ],
    practice: [
      {
        id: 'sc-a1-bar-p1',
        sentence: 'Un caffè, ___ favore.',
        answer: 'per',
        accepted: [],
        why: 'Per favore is the fixed form. Per piacere also exists and is equally polite.',
      },
      {
        id: 'sc-a1-bar-p2',
        sentence: 'Quanto ___ ?',
        answer: 'costa',
        accepted: ['viene'],
        why: 'Quanto costa? or Quanto viene? — both standard. Quanto è? is heard but less careful.',
      },
      {
        id: 'sc-a1-bar-p3',
        sentence: 'Sì, ___ anche un cornetto.',
        answer: 'prendo',
        accepted: ['vorrei'],
        why: 'Prendo is how you order. Vorrei works too; voglio would sound blunt.',
      },
    ],
    choices: [
      {
        id: 'sc-a1-bar-c1',
        prompt: 'Vuoi ordinare un caffè. Che cosa dici?',
        options: ['Voglio un caffè.', 'Un caffè, per favore.', 'Io avrò un caffè.'],
        answer: 1,
        why:
          'Voglio is grammatical but sounds demanding. «Io avrò» is a literal translation of "I will have" and is not used for ordering — Italian uses the present, prendo, or simply names the item.',
      },
      {
        id: 'sc-a1-bar-c2',
        prompt: 'Il barista ti dà il caffè. Come ringrazi?',
        options: ['Grazie mille.', 'Molto grazie.', 'Grazie molto.'],
        answer: 0,
        why: 'Grazie is intensified with mille or tante, never with molto. Molto grazie is a direct calque of "many thanks" and is wrong.',
      },
    ],
  },
  {
    id: 'sc-a1-presentarsi',
    level: 'A1',
    title: 'Presentarsi a qualcuno',
    situation: 'Primo giorno di corso: due studenti si conoscono.',
    teaches: [
      'lx-a1-chiamarsi',
      'lx-a1-essere',
      'lx-a1-avere',
      'lx-a1-abitare',
      'lx-a1-studiare',
      'lx-a1-parlare',
      'lx-a1-anno',
      'lx-a1-amico',
    ],
    lines: [
      { speaker: 'Sara', it: 'Ciao! Come ti chiami?', en: 'Hi! What is your name?' },
      { speaker: 'Peter', it: 'Mi chiamo Peter. E tu?', en: 'My name is Peter. And you?' },
      { speaker: 'Sara', it: 'Sara. Di dove sei?', en: 'Sara. Where are you from?' },
      { speaker: 'Peter', it: 'Sono americano, di Boston. Abito qui da due mesi.', en: 'I am American, from Boston. I have lived here for two months.' },
      { speaker: 'Sara', it: 'E quanti anni hai, se posso?', en: 'And how old are you, if I may?' },
      { speaker: 'Peter', it: 'Ho ventotto anni. Studio italiano la sera.', en: 'I am twenty-eight. I study Italian in the evenings.' },
      { speaker: 'Sara', it: 'Parli già bene!', en: 'You already speak well!' },
      { speaker: 'Peter', it: 'Grazie, ma capisco più di quanto parlo.', en: 'Thanks, but I understand more than I speak.' },
    ],
    notes: [
      {
        point: 'Age is something you have',
        detail:
          'Ho ventotto anni — literally "I have twenty-eight years". Sono ventotto is meaningless, and anni cannot be dropped the way "years old" can in English.',
      },
      {
        point: 'Di dove sei? not Dove sei da?',
        detail:
          'The preposition comes first: di dove sei. Dove vieni da is a word-for-word calque of "where do you come from" and does not work.',
      },
      {
        point: 'Abito qui da due mesi',
        detail:
          'Italian uses the present with da for something still going on. Ho abitato qui per due mesi means you no longer live here — a real change of meaning, not a stylistic preference.',
      },
    ],
    practice: [
      {
        id: 'sc-a1-pres-p1',
        sentence: 'Come ti ___ ?',
        answer: 'chiami',
        accepted: [],
        why: 'Chiamarsi is reflexive: mi chiamo, ti chiami, si chiama.',
      },
      {
        id: 'sc-a1-pres-p2',
        sentence: '___ ventotto anni.',
        answer: 'Ho',
        accepted: ['ho'],
        why: 'Age takes avere, never essere.',
      },
      {
        id: 'sc-a1-pres-p3',
        sentence: 'Abito qui ___ due mesi.',
        answer: 'da',
        accepted: [],
        why: 'Da + present for an action still in progress: "I have been living here for two months".',
      },
    ],
    choices: [
      {
        id: 'sc-a1-pres-c1',
        prompt: 'Hai 28 anni. Come lo dici?',
        options: ['Sono ventotto.', 'Ho ventotto anni.', 'Sono ventotto anni vecchio.'],
        answer: 1,
        why: 'Age is expressed with avere plus anni. The third option translates "years old" literally and is not Italian.',
      },
      {
        id: 'sc-a1-pres-c2',
        prompt: 'Vivi in Italia da due mesi e ci vivi ancora. Che tempo usi?',
        options: ['Ho abitato qui per due mesi.', 'Abito qui da due mesi.', 'Abitavo qui da due mesi.'],
        answer: 1,
        why: 'The present with da covers what English does with a perfect. The first option says you have left.',
      },
    ],
  },
  {
    id: 'sc-a1-negozio',
    level: 'A1',
    title: 'Comprare qualcosa',
    situation: 'In un piccolo negozio di alimentari.',
    teaches: [
      'lx-a1-comprare',
      'lx-a1-pane',
      'lx-a1-acqua',
      'lx-a1-potere',
      'lx-a1-soldi',
      'lx-a1-euro',
      'lx-a1-altro',
      'lx-a1-servire',
    ],
    lines: [
      { speaker: 'Commessa', it: 'Buongiorno, mi dica.', en: 'Good morning, what can I get you?' },
      { speaker: 'Cliente', it: 'Buongiorno. Mi serve del pane.', en: 'Good morning. I need some bread.' },
      { speaker: 'Commessa', it: 'Quanto ne vuole?', en: 'How much would you like?' },
      { speaker: 'Cliente', it: 'Mezzo chilo, grazie. E anche due bottiglie d’acqua.', en: 'Half a kilo, thanks. And two bottles of water too.' },
      { speaker: 'Commessa', it: 'Naturale o frizzante?', en: 'Still or sparkling?' },
      { speaker: 'Cliente', it: 'Naturale. Basta così.', en: 'Still. That is all.' },
      { speaker: 'Commessa', it: 'Allora sono quattro euro e dieci.', en: 'That comes to four euros ten, then.' },
      { speaker: 'Cliente', it: 'Ecco. Posso pagare con la carta?', en: 'Here. Can I pay by card?' },
      { speaker: 'Commessa', it: 'Certo. Ecco lo scontrino.', en: 'Of course. Here is the receipt.' },
    ],
    notes: [
      {
        point: 'Mi serve, not ho bisogno di',
        detail:
          'Both are correct, but mi serve is far commoner in a shop and shorter. Remember it inverts: mi serve del pane, mi servono due bottiglie — the verb agrees with the thing.',
      },
      {
        point: 'Basta così',
        detail:
          'The standard way to close an order. It means "that is enough", and it is neither abrupt nor impolite — it is what the shopkeeper is waiting to hear.',
      },
      {
        point: 'Naturale o frizzante',
        detail:
          'You will be asked this every time you order water. A choice is expected; answering just "acqua" leaves the question open.',
      },
    ],
    practice: [
      {
        id: 'sc-a1-neg-p1',
        sentence: 'Mi ___ del pane.',
        answer: 'serve',
        accepted: [],
        why: 'Del pane is singular, so servire stays singular: mi serve.',
      },
      {
        id: 'sc-a1-neg-p2',
        sentence: 'Mi ___ due bottiglie d’acqua.',
        answer: 'servono',
        accepted: [],
        why: 'Two bottles is plural, so the verb becomes servono. The person stays mi.',
      },
      {
        id: 'sc-a1-neg-p3',
        sentence: 'Posso ___ con la carta?',
        answer: 'pagare',
        accepted: [],
        why: 'After a modal (posso, devo, voglio) the second verb stays in the infinitive.',
      },
    ],
    choices: [
      {
        id: 'sc-a1-neg-c1',
        prompt: 'Ti servono due bottiglie. Come lo dici?',
        options: ['Mi serve due bottiglie.', 'Mi servono due bottiglie.', 'Io servo due bottiglie.'],
        answer: 1,
        why: 'Servire agrees with the thing needed, not the person. The third option says you are serving the bottles.',
      },
      {
        id: 'sc-a1-neg-c2',
        prompt: 'Hai finito di ordinare. Come chiudi?',
        options: ['Basta così.', 'Sono finito.', 'Ho finito tutto.'],
        answer: 0,
        why: 'Basta così is the fixed closing. Sono finito means something closer to "I am done for" — a well-known trap.',
      },
    ],
  },

  // ─────────────────────────────── A2 ───────────────────────────────
  {
    id: 'sc-a2-appuntamento',
    level: 'A2',
    title: 'Fissare un appuntamento',
    situation: 'Telefonata per prenotare una visita.',
    teaches: [
      'lx-a2-prenotare',
      'lx-a2-appuntamento',
      'lx-a2-documento',
      'lx-a2-disponibile',
      'lx-a2-purtroppo',
      'lx-a2-di-solito',
      'lx-a2-momento',
      'lx-a2-ritardo',
    ],
    lines: [
      { speaker: 'Segretaria', it: 'Studio Rinaldi, buongiorno.', en: 'Rinaldi practice, good morning.' },
      { speaker: 'Paziente', it: 'Buongiorno, vorrei prenotare una visita.', en: 'Good morning, I would like to book an appointment.' },
      { speaker: 'Segretaria', it: 'Certo. È già nostro paziente?', en: 'Of course. Are you already a patient of ours?' },
      { speaker: 'Paziente', it: 'No, è la prima volta.', en: 'No, it is the first time.' },
      { speaker: 'Segretaria', it: 'Allora mi serve un documento. Quando è disponibile?', en: 'Then I need an ID. When are you available?' },
      { speaker: 'Paziente', it: 'Di solito sono libero il pomeriggio.', en: 'I am usually free in the afternoon.' },
      { speaker: 'Segretaria', it: 'Giovedì alle quindici?', en: 'Thursday at three?' },
      { speaker: 'Paziente', it: 'Giovedì purtroppo lavoro. Venerdì?', en: 'Unfortunately I work on Thursday. Friday?' },
      { speaker: 'Segretaria', it: 'Venerdì alle otto e quarantacinque. Un momento che confermo.', en: 'Friday at a quarter to nine. One moment while I confirm.' },
      { speaker: 'Paziente', it: 'Perfetto. Se sono in ritardo vi chiamo.', en: 'Perfect. If I am running late I will call you.' },
    ],
    notes: [
      {
        point: 'Vorrei, not voglio',
        detail:
          'The conditional is the standard register for a request to someone you do not know. Voglio prenotare is grammatical and lands as a demand.',
      },
      {
        point: 'Prenotare una visita',
        detail:
          'Medical appointments are prenotate, like tables and tickets. Fissare un appuntamento exists but belongs to business rather than a doctor’s surgery.',
      },
      {
        point: 'Purtroppo does real work',
        detail:
          'Placed before the refusal it softens it. Bare Giovedì lavoro is a flat no; Giovedì purtroppo lavoro signals regret and invites an alternative.',
      },
    ],
    practice: [
      {
        id: 'sc-a2-app-p1',
        sentence: '___ prenotare una visita.',
        answer: 'Vorrei',
        accepted: ['vorrei'],
        why: 'The conditional of volere is the polite request form.',
      },
      {
        id: 'sc-a2-app-p2',
        sentence: '___ sono libero il pomeriggio.',
        answer: 'Di solito',
        accepted: ['di solito', 'Normalmente', 'normalmente'],
        why: 'Di solito states a habit. Usualmente exists but is far rarer in speech.',
      },
      {
        id: 'sc-a2-app-p3',
        sentence: 'Se sono in ___ vi chiamo.',
        answer: 'ritardo',
        accepted: [],
        why: 'Essere in ritardo is the fixed expression for being late. Essere tardi is not used of a person.',
      },
    ],
    choices: [
      {
        id: 'sc-a2-app-c1',
        prompt: 'Chiami uno studio medico che non conosci. Come apri?',
        options: ['Voglio un appuntamento.', 'Vorrei prenotare una visita.', 'Ho bisogno di vedere il dottore adesso.'],
        answer: 1,
        why: 'The conditional plus prenotare is the expected formula. The first is a demand; the third is what you would say in an emergency, not to book.',
      },
      {
        id: 'sc-a2-app-c2',
        prompt: 'Non puoi giovedì. Come rifiuti senza chiudere la porta?',
        options: ['No, giovedì no.', 'Giovedì purtroppo lavoro.', 'Giovedì è impossibile per me.'],
        answer: 1,
        why: 'Purtroppo marks regret and keeps the negotiation open. The others end the exchange without offering an alternative.',
      },
    ],
  },
  {
    id: 'sc-a2-treno',
    level: 'A2',
    title: 'Alla biglietteria',
    situation: 'Comprare un biglietto e capire da che binario si parte.',
    teaches: [
      'lx-a2-salire',
      'lx-a2-scendere',
      'lx-a2-perdere',
      'lx-a2-ritardo',
      'lx-a2-fermarsi',
      'lx-a2-cambiare',
      'lx-a2-quasi',
      'lx-a2-appena',
    ],
    lines: [
      { speaker: 'Viaggiatore', it: 'Buongiorno, un biglietto per Bologna.', en: 'Good morning, a ticket to Bologna.' },
      { speaker: 'Impiegato', it: 'Andata o andata e ritorno?', en: 'Single or return?' },
      { speaker: 'Viaggiatore', it: 'Solo andata. C’è un treno diretto?', en: 'Single only. Is there a direct train?' },
      { speaker: 'Impiegato', it: 'Quello delle dieci sì. Quello delle nove si ferma a Firenze e deve cambiare.', en: 'The ten o’clock one, yes. The nine o’clock stops in Florence and you have to change.' },
      { speaker: 'Viaggiatore', it: 'Allora prendo quello diretto. Da che binario parte?', en: 'Then I will take the direct one. Which platform does it leave from?' },
      { speaker: 'Impiegato', it: 'Binario sette. Ma guardi il tabellone, a volte cambia.', en: 'Platform seven. But check the board, sometimes it changes.' },
      { speaker: 'Viaggiatore', it: 'Va bene. Quanto ci mette?', en: 'All right. How long does it take?' },
      { speaker: 'Impiegato', it: 'Poco più di due ore, se non è in ritardo.', en: 'A little over two hours, if it is not delayed.' },
      { speaker: 'Viaggiatore', it: 'Sono appena arrivato, faccio in tempo?', en: 'I have just arrived, will I make it?' },
      { speaker: 'Impiegato', it: 'Sì, ma si sbrighi: mancano quasi dieci minuti.', en: 'Yes, but hurry: there are almost ten minutes left.' },
    ],
    notes: [
      {
        point: 'Quanto ci mette?',
        detail:
          'The everyday way to ask how long a journey takes. Metterci is a pronominal verb: ci metto un’ora, ci mette due ore. Quanto tempo prende is an English calque and is not said.',
      },
      {
        point: 'Salire and scendere',
        detail:
          'You get on a train with salire and off with scendere — literally "go up" and "go down". Entrare nel treno is understood but sounds odd; nobody says it.',
      },
      {
        point: 'Perdere il treno',
        detail:
          'You lose a train, you do not miss it. Mancare il treno is not used; perdere covers trains, planes and appointments alike.',
      },
    ],
    practice: [
      {
        id: 'sc-a2-tre-p1',
        sentence: 'Quanto ci ___ da Roma a Bologna?',
        answer: 'mette',
        accepted: ['vuole'],
        why: 'Metterci for the time a journey takes. Ci vuole also works and focuses on the time required rather than the traveller.',
      },
      {
        id: 'sc-a2-tre-p2',
        sentence: 'Devo ___ alla prossima fermata.',
        answer: 'scendere',
        accepted: [],
        why: 'Scendere is to get off. Its opposite, salire, is to get on.',
      },
      {
        id: 'sc-a2-tre-p3',
        sentence: 'Sono ___ arrivato, non ho ancora comprato il biglietto.',
        answer: 'appena',
        accepted: [],
        why: 'Appena + passato prossimo means "I have just…".',
      },
    ],
    choices: [
      {
        id: 'sc-a2-tre-c1',
        prompt: 'Non sei riuscito a prendere il treno. Come lo dici?',
        options: ['Ho mancato il treno.', 'Ho perso il treno.', 'Ho fallito il treno.'],
        answer: 1,
        why: 'Italian loses a train. Mancare is not used this way, and fallire means to fail in business or in an attempt.',
      },
      {
        id: 'sc-a2-tre-c2',
        prompt: 'Vuoi sapere la durata del viaggio.',
        options: ['Quanto tempo prende?', 'Quanto ci mette?', 'Quanto è lungo?'],
        answer: 1,
        why: 'Quanto ci mette? is the idiom. The first translates English word for word; the third asks about physical length.',
      },
    ],
  },
  {
    id: 'sc-a2-vicino',
    level: 'A2',
    title: 'Un favore al vicino',
    situation: 'Chiedere aiuto a chi abita di fronte, senza esagerare.',
    teaches: [
      'lx-a2-aiutare',
      'lx-a2-chiedere',
      'lx-a2-preoccuparsi',
      'lx-a2-dimenticare',
      'lx-a2-gentile',
      'lx-a2-bisogno',
      'lx-a2-problema',
      'lx-a2-certo',
    ],
    lines: [
      { speaker: 'Anna', it: 'Scusa Marco, posso chiederti un favore?', en: 'Sorry Marco, can I ask you a favour?' },
      { speaker: 'Marco', it: 'Certo, dimmi.', en: 'Of course, go ahead.' },
      { speaker: 'Anna', it: 'Parto domani per tre giorni. Mi daresti una mano con il gatto?', en: 'I am leaving tomorrow for three days. Would you give me a hand with the cat?' },
      { speaker: 'Marco', it: 'Nessun problema. Cosa devo fare?', en: 'No problem. What do I have to do?' },
      { speaker: 'Anna', it: 'Solo dargli da mangiare la sera. Ti lascio le chiavi.', en: 'Just feed him in the evening. I will leave you the keys.' },
      { speaker: 'Marco', it: 'Va bene. E se dimentico?', en: 'All right. And if I forget?' },
      { speaker: 'Anna', it: 'Ti mando un messaggio, non ti preoccupare.', en: 'I will send you a message, do not worry.' },
      { speaker: 'Marco', it: 'Perfetto. Buon viaggio!', en: 'Perfect. Have a good trip!' },
      { speaker: 'Anna', it: 'Grazie mille, sei molto gentile.', en: 'Thank you so much, that is very kind of you.' },
    ],
    notes: [
      {
        point: 'Dammi una mano',
        detail:
          'The natural way to ask for help with a small task. Aiutami is correct but heavier, and can sound like you are in difficulty rather than asking a favour.',
      },
      {
        point: 'Non ti preoccupare',
        detail:
          'The negative imperative of a reflexive verb. Both non ti preoccupare and non preoccuparti are correct and equally common — the pronoun can go either side.',
      },
      {
        point: 'Sei molto gentile',
        detail:
          'The standard thanks for a favour, said about the person rather than the act. English "that is so nice of you" maps onto it almost exactly.',
      },
    ],
    practice: [
      {
        id: 'sc-a2-vic-p1',
        sentence: 'Posso ___ un favore?',
        answer: 'chiederti',
        accepted: ['chiedere'],
        why: 'The pronoun attaches to the infinitive: chiederti. Ti posso chiedere is equally correct.',
      },
      {
        id: 'sc-a2-vic-p2',
        sentence: 'Non ti ___ , ci penso io.',
        answer: 'preoccupare',
        accepted: [],
        why: 'Negative imperative with a reflexive verb: non ti preoccupare, or non preoccuparti.',
      },
      {
        id: 'sc-a2-vic-p3',
        sentence: 'Mi daresti una ___ con il gatto?',
        answer: 'mano',
        accepted: [],
        why: 'Dare una mano is the fixed idiom for helping out.',
      },
    ],
    choices: [
      {
        id: 'sc-a2-vic-c1',
        prompt: 'Chiedi a un amico un piccolo aiuto pratico.',
        options: ['Mi dai una mano?', 'Mi fai un aiuto?', 'Puoi aiutare me?'],
        answer: 0,
        why: 'Dare una mano is the idiom. Fare un aiuto does not exist, and the third puts the stressed pronoun where the unstressed mi belongs.',
      },
      {
        id: 'sc-a2-vic-c2',
        prompt: 'Un amico si scusa per un ritardo di due minuti. Come rispondi?',
        options: ['Non è niente di importante.', 'Non ti preoccupare, figurati.', 'Non ho problema.'],
        answer: 1,
        why: 'Non ti preoccupare, figurati is what an Italian actually says. Non ho problema is a calque; the Italian would be nessun problema.',
      },
    ],
  },
];

export const scenesByLevel = (level: Scene['level']) => SCENES.filter((s) => s.level === level);
