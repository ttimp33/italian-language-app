import type { WordEntry } from './types';

export const WORDS: WordEntry[] = [
  // ─────────────────────────────── A2 ───────────────────────────────
  {
    id: 'a2-prenotare',
    level: 'A2',
    lemma: 'prenotare',
    pos: 'verbo',
    ipa: '/prenoˈta:re/',
    gloss: 'to book, to reserve (a table, a room, a ticket, an appointment)',
    nuance:
      'Regular -are verb. Italian uses prenotare where English switches between "book" and "reserve"; there is no distinction. For medical appointments Italians say prenotare una visita, never "fissare un appuntamento dal dottore" in official contexts.',
    examples: [
      { it: 'Ho prenotato un tavolo per due alle otto.', en: 'I booked a table for two at eight.' },
      { it: 'Devi prenotare il posto, altrimenti rischi di stare in piedi.', en: 'You have to reserve a seat, otherwise you risk standing.' },
    ],
    collocations: ['prenotare un tavolo', 'prenotare una camera', 'prenotare online', 'prenotazione obbligatoria'],
    related: ['la prenotazione', 'prenotato'],
  },
  {
    id: 'a2-affollato',
    level: 'A2',
    lemma: 'affollato',
    pos: 'aggettivo',
    ipa: '/affolˈla:to/',
    gloss: 'crowded, packed',
    nuance:
      'Agrees with the noun: un bar affollato, una piazza affollata. For a place that is crowded right now Italians often prefer c\'è molta gente; affollato describes a general state.',
    examples: [
      { it: 'La spiaggia è troppo affollata ad agosto.', en: 'The beach is too crowded in August.' },
      { it: 'Preferisco un locale meno affollato per parlare.', en: 'I prefer a less crowded place so we can talk.' },
    ],
    collocations: ['un treno affollato', 'una piazza affollata', 'poco affollato'],
    related: ['la folla', 'affollarsi'],
  },
  {
    id: 'a2-sbrigarsi',
    level: 'A2',
    lemma: 'sbrigarsi',
    pos: 'verbo',
    ipa: '/zbriˈgarsi/',
    gloss: 'to hurry up, to get a move on',
    nuance:
      'Reflexive, and overwhelmingly used in the imperative: Sbrigati! (informal singular), Sbrighiamoci! (let\'s hurry). In compound tenses it takes essere: mi sono sbrigato.',
    examples: [
      { it: 'Sbrigati, il treno parte tra cinque minuti!', en: 'Hurry up, the train leaves in five minutes!' },
      { it: 'Mi sono sbrigata a finire il lavoro.', en: 'I hurried to finish the work.' },
    ],
    collocations: ['Sbrigati!', 'sbrigarsi a fare qualcosa', 'sbrigare una pratica'],
    related: ['sbrigare (to deal with, to get done)'],
  },
  {
    id: 'a2-magari',
    level: 'A2',
    lemma: 'magari',
    pos: 'avverbio',
    ipa: '/maˈga:ri/',
    gloss: 'maybe; (as an exclamation) I wish!',
    nuance:
      'Two lives in one word. As an adverb it means "maybe, perhaps". Alone, as a reply, it means "if only!" — an enthusiastic yes to something unlikely. With a wish it takes the imperfect subjunctive: Magari potessi! (If only I could!)',
    examples: [
      { it: 'Magari ci vediamo domani, ti scrivo io.', en: 'Maybe we\'ll see each other tomorrow, I\'ll text you.' },
      { it: '— Vieni in Sicilia con noi? — Magari!', en: '— Are you coming to Sicily with us? — I wish!' },
    ],
    collocations: ['magari domani', 'Magari!', 'magari fosse vero'],
  },
  {
    id: 'a2-riuscire',
    level: 'A2',
    lemma: 'riuscire (a)',
    pos: 'verbo',
    ipa: '/riuˈʃʃi:re/',
    gloss: 'to manage to, to be able to, to succeed in',
    nuance:
      'The workhorse for "can" when you mean actual success, not permission or skill. Always riuscire a + infinitive. It takes essere in compound tenses: non sono riuscito a dormire. Beginners overuse potere here — potere is permission/possibility, riuscire is achievement.',
    examples: [
      { it: 'Non riesco ad aprire questa bottiglia.', en: "I can't manage to open this bottle." },
      { it: 'Sei riuscito a parlare con il direttore?', en: 'Did you manage to speak to the manager?' },
    ],
    collocations: ['riuscire a fare', 'non ci riesco', 'ci sono riuscito'],
    related: ['la riuscita', 'riuscito (successful)'],
    falseFriend: 'Not "to reuse". And unlike English "succeed", it is completely everyday — you use it about opening jars.',
  },
  {
    id: 'a2-bancone',
    level: 'A2',
    lemma: 'il bancone',
    pos: 'sostantivo',
    gender: 'm',
    ipa: '/banˈko:ne/',
    gloss: 'the counter (in a bar or shop)',
    nuance:
      'Central to Italian bar culture: al bancone you stand and pay less; al tavolo you sit and pay more. Do not confuse with la banca (bank) or il banco (school desk, market stall).',
    examples: [
      { it: 'Prendo il caffè al bancone, faccio prima.', en: "I'll have my coffee at the counter, it's quicker." },
      { it: 'Il barista pulisce il bancone con uno straccio.', en: 'The barista wipes the counter with a cloth.' },
    ],
    collocations: ['al bancone', 'appoggiarsi al bancone', 'dietro il bancone'],
    related: ['il banco', 'il barista'],
    falseFriend: 'Nothing to do with a bank — that is la banca.',
  },
  {
    id: 'a2-trasferirsi',
    level: 'A2',
    lemma: 'trasferirsi',
    pos: 'verbo',
    ipa: '/trasfeˈrirsi/',
    gloss: 'to move (house, city, country)',
    nuance:
      'An -isc- verb: mi trasferisco, ti trasferisci, si trasferisce. Use it for changing where you live; for moving an object use spostare, and for moving house physically, traslocare.',
    examples: [
      { it: 'Mi sono trasferito a Bologna per lavoro.', en: 'I moved to Bologna for work.' },
      { it: 'Si trasferiscono in campagna il mese prossimo.', en: "They're moving to the countryside next month." },
    ],
    collocations: ['trasferirsi all\'estero', 'trasferirsi per lavoro', 'il trasferimento'],
    related: ['il trasferimento', 'traslocare', 'spostare'],
  },
  {
    id: 'a2-abbastanza',
    level: 'A2',
    lemma: 'abbastanza',
    pos: 'avverbio',
    ipa: '/abbasˈtantsa/',
    gloss: 'enough; quite, fairly',
    nuance:
      'Invariable, and it sits before adjectives but after verbs: è abbastanza caro / ho mangiato abbastanza. In speech the "quite" sense is far more common than "enough", and tone decides whether abbastanza bene means "pretty good" or a lukewarm "so-so".',
    examples: [
      { it: 'Il film era abbastanza interessante.', en: 'The film was fairly interesting.' },
      { it: 'Grazie, ho mangiato abbastanza.', en: "Thanks, I've eaten enough." },
    ],
    collocations: ['abbastanza bene', 'non abbastanza', 'averne abbastanza (to be fed up)'],
  },

  // ─────────────────────────────── B1 ───────────────────────────────
  {
    id: 'b1-cavarsela',
    level: 'B1',
    lemma: 'cavarsela',
    pos: 'verbo',
    ipa: '/kaˈvarsela/',
    gloss: 'to manage, to get by, to get away with',
    nuance:
      'A pronominal verb bundling cavare + si + la. The la never changes but the reflexive does: me la cavo, te la cavi, se la cava. In compound tenses the participle agrees with la: me la sono cavata. The standard modest answer to "do you speak Italian?" is Me la cavo.',
    examples: [
      { it: '— Come va con il tedesco? — Me la cavo.', en: '— How is your German? — I get by.' },
      { it: 'Se l\'è cavata con una multa leggera.', en: 'He got off with a light fine.' },
    ],
    collocations: ['me la cavo', 'cavarsela bene', 'cavarsela con poco'],
    related: ['cavare', 'la cavata'],
  },
  {
    id: 'b1-tirocinio',
    level: 'B1',
    lemma: 'il tirocinio',
    pos: 'sostantivo',
    gender: 'm',
    ipa: '/tiroˈtʃi:njo/',
    gloss: 'internship, traineeship',
    nuance:
      'The formal, contractual word — what appears on documents and job listings. In speech young people say lo stage (pronounced the French way, /staʒ/), which is invariable in the plural: due stage.',
    examples: [
      { it: 'Ho fatto un tirocinio di sei mesi in uno studio legale.', en: 'I did a six-month internship at a law firm.' },
      { it: 'Il tirocinio è retribuito, ma poco.', en: 'The internship is paid, but not much.' },
    ],
    collocations: ['tirocinio formativo', 'tirocinio retribuito', 'svolgere un tirocinio'],
    related: ['il tirocinante', 'lo stage'],
  },
  {
    id: 'b1-affidabile',
    level: 'B1',
    lemma: 'affidabile',
    pos: 'aggettivo',
    ipa: '/affiˈda:bile/',
    gloss: 'reliable, trustworthy, dependable',
    nuance:
      'Covers both people and things — un collega affidabile, una macchina affidabile. Same form for masculine and feminine; only the plural changes (affidabili). Built on fidarsi (to trust).',
    examples: [
      { it: 'È una fonte affidabile, l\'ho verificata.', en: "It's a reliable source, I checked it." },
      { it: 'Cerchiamo persone affidabili e puntuali.', en: 'We are looking for reliable and punctual people.' },
    ],
    collocations: ['una fonte affidabile', 'poco affidabile', "l'affidabilità"],
    related: ['fidarsi', "l'affidabilità", 'affidare'],
  },
  {
    id: 'b1-rendersi-conto',
    level: 'B1',
    lemma: 'rendersi conto (di)',
    pos: 'espressione',
    ipa: '/ˈrendersi ˈkonto/',
    gloss: 'to realize, to become aware',
    nuance:
      'Conto stays fixed; only rendersi conjugates: mi rendo conto, ti rendi conto. Follow with di + noun or che + clause. Ti rendi conto? on its own is an exclamation: "Can you believe it?" Note the contrast with realizzare, which in careful Italian means "to bring about, to achieve".',
    examples: [
      { it: 'Solo dopo mi sono reso conto dell\'errore.', en: 'Only afterwards did I realize the mistake.' },
      { it: 'Non si rende conto di quanto sia fortunato.', en: "He doesn't realize how lucky he is." },
    ],
    collocations: ['rendersi conto di', 'Ti rendi conto?', 'senza rendersene conto'],
    falseFriend: 'English "realize" ≠ realizzare in formal Italian; realizzare un progetto means to carry a project out.',
  },
  {
    id: 'b1-sportello',
    level: 'B1',
    lemma: 'lo sportello',
    pos: 'sostantivo',
    gender: 'm',
    ipa: '/sporˈtɛllo/',
    gloss: 'service window, counter, desk; (also) car door',
    nuance:
      'The word for any counter where you are served by an official — bank, post office, town hall. Lo sportello bancomat is the ATM. It also means the door of a car or a cupboard, which surprises learners.',
    examples: [
      { it: 'Deve rivolgersi allo sportello numero tre.', en: 'You need to go to window number three.' },
      { it: 'Lo sportello è aperto solo la mattina.', en: 'The desk is only open in the morning.' },
    ],
    collocations: ['sportello bancomat', 'allo sportello', 'sportello al pubblico'],
    related: ['la porta', "l'impiegato"],
  },
  {
    id: 'b1-peggiorare',
    level: 'B1',
    lemma: 'peggiorare',
    pos: 'verbo',
    ipa: '/peddʒoˈra:re/',
    gloss: 'to get worse; to make worse',
    nuance:
      'Works both ways, and the auxiliary tells them apart: with no object it takes essere (la situazione è peggiorata), with an object it takes avere (ha peggiorato le cose). Its opposite is migliorare, which behaves identically.',
    examples: [
      { it: 'Il tempo è peggiorato nel pomeriggio.', en: 'The weather got worse in the afternoon.' },
      { it: 'Rispondendo così hai peggiorato la situazione.', en: 'By answering like that you made the situation worse.' },
    ],
    collocations: ['peggiorare la situazione', 'le condizioni sono peggiorate', 'nel peggiore dei casi'],
    related: ['peggio', 'peggiore', 'migliorare'],
  },
  {
    id: 'b1-tuttaltro',
    level: 'B1',
    lemma: "tutt'altro",
    pos: 'locuzione',
    ipa: '/tutˈtaltro/',
    gloss: 'quite the opposite; anything but',
    nuance:
      'As a one-word reply it is an emphatic denial: — È noioso? — Tutt\'altro! Before an adjective, tutt\'altro che flips it to the negative: tutt\'altro che semplice = anything but simple. A compact way to sound idiomatic at B1.',
    examples: [
      { it: '— Ti ha annoiato? — Tutt\'altro, mi è piaciuto molto.', en: '— Did it bore you? — Quite the opposite, I really liked it.' },
      { it: 'La prova è stata tutt\'altro che facile.', en: 'The test was anything but easy.' },
    ],
    collocations: ["tutt'altro che", "Tutt'altro!", "tutt'altro discorso"],
  },
  {
    id: 'b1-impegnativo',
    level: 'B1',
    lemma: 'impegnativo',
    pos: 'aggettivo',
    ipa: '/impeɲɲaˈti:vo/',
    gloss: 'demanding, challenging, requiring commitment',
    nuance:
      'Not "difficult" in the sense of hard to understand — it means it asks a lot of your time and energy. Un lavoro impegnativo may be perfectly simple, just relentless. Also used of relationships and commitments.',
    examples: [
      { it: 'È un corso impegnativo, ma ne vale la pena.', en: "It's a demanding course, but it's worth it." },
      { it: 'Ho un periodo impegnativo al lavoro.', en: "I'm having a demanding stretch at work." },
    ],
    collocations: ['un impegno impegnativo', 'poco impegnativo', 'un ruolo impegnativo'],
    related: ["l'impegno", 'impegnarsi', 'impegnato'],
  },

  // ─────────────────────────────── B2 ───────────────────────────────
  {
    id: 'b2-affrontare',
    level: 'B2',
    lemma: 'affrontare',
    pos: 'verbo',
    ipa: '/affronˈta:re/',
    gloss: 'to face, to tackle, to address (a problem, a topic, a cost)',
    nuance:
      'Neutral and extremely productive: you affronti a problem, a subject, an expense, an opponent. English "confront" carries hostility that affrontare does not. The noun un affronto, however, does mean an insult.',
    examples: [
      { it: 'Il governo deve affrontare il problema alla radice.', en: 'The government must tackle the problem at its root.' },
      { it: 'Nel saggio si affronta il tema della memoria.', en: 'The essay addresses the theme of memory.' },
    ],
    collocations: ['affrontare un problema', 'affrontare le spese', 'affrontare un tema'],
    related: ["l'affronto", 'il confronto', 'confrontarsi'],
    falseFriend: 'To "affront" someone is offendere; un affronto is the insult, not the act of facing something.',
  },
  {
    id: 'b2-scadenza',
    level: 'B2',
    lemma: 'la scadenza',
    pos: 'sostantivo',
    gender: 'f',
    ipa: '/skaˈdɛntsa/',
    gloss: 'deadline; expiry date; due date',
    nuance:
      'One word for three English ones. On food it is the expiry date (data di scadenza); at work it is the deadline; on a bill it is the due date. A breve/lungo termine competes with a breve/lunga scadenza in formal writing.',
    examples: [
      { it: 'La scadenza per la domanda è il 30 settembre.', en: 'The deadline for the application is 30 September.' },
      { it: 'Controlla sempre la scadenza sul latte.', en: 'Always check the expiry date on the milk.' },
    ],
    collocations: ['rispettare la scadenza', 'a breve scadenza', 'scadenza improrogabile'],
    related: ['scadere', 'scaduto'],
  },
  {
    id: 'b2-sottovalutare',
    level: 'B2',
    lemma: 'sottovalutare',
    pos: 'verbo',
    ipa: '/sottovaluˈta:re/',
    gloss: 'to underestimate, to undervalue',
    nuance:
      'Transparently built: sotto + valutare. Its mirror image is sopravvalutare (to overestimate). Very common in the negative imperative as advice: Non sottovalutare il jet lag.',
    examples: [
      { it: 'Abbiamo sottovalutato i tempi di consegna.', en: 'We underestimated the delivery times.' },
      { it: 'Non sottovalutare la sua esperienza.', en: "Don't underestimate his experience." },
    ],
    collocations: ['sottovalutare il rischio', 'non va sottovalutato', 'sopravvalutare'],
    related: ['valutare', 'la valutazione', 'sopravvalutare'],
  },
  {
    id: 'b2-accorgersi',
    level: 'B2',
    lemma: 'accorgersi (di)',
    pos: 'verbo',
    ipa: '/akˈkɔrdʒersi/',
    gloss: 'to notice, to become aware of',
    nuance:
      'Irregular past participle: accorto (mi sono accorto). Where rendersi conto is a dawning understanding, accorgersi is often perceptual and sudden — you notice a detail. Note the adjective accorto means shrewd.',
    examples: [
      { it: 'Non mi ero accorto che fossi già arrivato.', en: "I hadn't noticed you had already arrived." },
      { it: 'Se ne accorgerà prima o poi.', en: "She'll notice sooner or later." },
    ],
    collocations: ['accorgersi di qualcosa', 'senza accorgersene', 'me ne sono accorto'],
    related: ['accorto', 'rendersi conto'],
  },
  {
    id: 'b2-pregiudizio',
    level: 'B2',
    lemma: 'il pregiudizio',
    pos: 'sostantivo',
    gender: 'm',
    ipa: '/predʒuˈdittsjo/',
    gloss: 'prejudice, bias; (in law) detriment, harm',
    nuance:
      'The social sense is the everyday one. In legal and formal registers it means damage or detriment: senza pregiudizio per i diritti acquisiti. The adjective pregiudicato is a noun in practice: someone with a criminal record.',
    examples: [
      { it: 'Bisogna combattere i pregiudizi con i dati.', en: 'We need to fight prejudice with data.' },
      { it: 'Lo ha detto senza pregiudizio, in buona fede.', en: 'He said it without prejudice, in good faith.' },
    ],
    collocations: ['avere pregiudizi', 'privo di pregiudizi', 'pregiudizio di genere'],
    related: ['pregiudicare', 'il pregiudicato'],
  },
  {
    id: 'b2-incidere',
    level: 'B2',
    lemma: 'incidere (su)',
    pos: 'verbo',
    ipa: '/inˈtʃi:dere/',
    gloss: 'to affect, to have an impact on; (literally) to carve, to engrave, to record',
    nuance:
      'The abstract sense — incidere su — is the one you meet in journalism and analysis: le nuove regole incidono sui costi. Irregular participle: inciso. The literal senses (carving stone, cutting skin, recording an album) share the same verb.',
    examples: [
      { it: "L'inflazione incide pesantemente sui redditi bassi.", en: 'Inflation weighs heavily on low incomes.' },
      { it: 'Il nome era inciso sulla pietra.', en: 'The name was carved into the stone.' },
    ],
    collocations: ['incidere sui costi', 'incidere profondamente', "l'incidenza"],
    related: ["l'incidenza", 'inciso', "l'incisione"],
  },
  {
    id: 'b2-altrimenti',
    level: 'B2',
    lemma: 'altrimenti',
    pos: 'avverbio',
    ipa: '/altriˈmenti/',
    gloss: 'otherwise, or else; differently',
    nuance:
      'Two functions worth separating. As a connector it introduces the consequence of not acting: Sbrigati, altrimenti perdiamo il treno. As a manner adverb it means "differently": non poteva fare altrimenti — he could not have done otherwise.',
    examples: [
      { it: 'Parti subito, altrimenti troverai traffico.', en: "Leave now, otherwise you'll hit traffic." },
      { it: 'Non potevo comportarmi altrimenti.', en: 'I could not have behaved otherwise.' },
    ],
    collocations: ['altrimenti detto', 'non poteva fare altrimenti', 'salvo che sia altrimenti disposto'],
  },
  {
    id: 'b2-sfida',
    level: 'B2',
    lemma: 'la sfida',
    pos: 'sostantivo',
    gender: 'f',
    ipa: '/ˈsfi:da/',
    gloss: 'challenge; contest, match',
    nuance:
      'Covers the motivational sense (una sfida importante) and the sporting one (la sfida di domenica = Sunday\'s match). The verb sfidare means to challenge or defy — sfidare le previsioni, to defy expectations.',
    examples: [
      { it: 'La vera sfida è mantenere i risultati nel tempo.', en: 'The real challenge is sustaining the results over time.' },
      { it: 'Ha raccolto la sfida senza esitare.', en: 'She took up the challenge without hesitating.' },
    ],
    collocations: ['raccogliere la sfida', 'una sfida aperta', 'lanciare una sfida'],
    related: ['sfidare', 'lo sfidante'],
  },

  // ─────────────────────────────── C1 ───────────────────────────────
  {
    id: 'c1-sopperire',
    level: 'C1',
    lemma: 'sopperire (a)',
    pos: 'verbo',
    ipa: '/soppeˈri:re/',
    gloss: 'to make up for, to compensate for, to meet (a need)',
    nuance:
      'An -isc- verb of formal register, always with a: sopperire alla carenza di personale. It implies filling a gap with substitute means, not merely balancing — that would be compensare. Frequent in administrative and journalistic prose.',
    examples: [
      { it: 'I volontari sopperiscono alla carenza di personale.', en: 'Volunteers make up for the staff shortage.' },
      { it: 'Si è cercato di sopperire con fondi privati.', en: 'They tried to make up the shortfall with private funds.' },
    ],
    collocations: ['sopperire a una carenza', 'sopperire alle esigenze', 'sopperire con'],
    related: ['supplire', 'ovviare a'],
  },
  {
    id: 'c1-inasprimento',
    level: 'C1',
    lemma: "l'inasprimento",
    pos: 'sostantivo',
    gender: 'm',
    ipa: '/inaspriˈmento/',
    gloss: 'tightening, toughening; worsening, escalation',
    nuance:
      'From aspro (harsh, sour). Used of penalties, rules, taxes and tensions: l\'inasprimento delle sanzioni. The verb inasprire and reflexive inasprirsi (of a conflict, to escalate) belong to the same family.',
    examples: [
      { it: "L'inasprimento delle pene non ha ridotto i reati.", en: 'Toughening the penalties has not reduced offences.' },
      { it: 'Si teme un inasprimento del conflitto.', en: 'An escalation of the conflict is feared.' },
    ],
    collocations: ['inasprimento delle sanzioni', 'inasprimento fiscale', 'inasprimento dei toni'],
    related: ['inasprire', 'aspro', 'inasprirsi'],
  },
  {
    id: 'c1-ravvisare',
    level: 'C1',
    lemma: 'ravvisare',
    pos: 'verbo',
    ipa: '/ravviˈza:re/',
    gloss: 'to discern, to detect, to identify (formally)',
    nuance:
      'Markedly formal, at home in legal and institutional language: non si ravvisano gli estremi del reato — no grounds for an offence are found. Using it in conversation sounds like quoting a court document, which is occasionally the joke.',
    examples: [
      { it: 'Gli ispettori hanno ravvisato gravi irregolarità.', en: 'The inspectors identified serious irregularities.' },
      { it: 'Non si ravvisa alcun conflitto di interessi.', en: 'No conflict of interest is discerned.' },
    ],
    collocations: ['ravvisare gli estremi', 'ravvisare responsabilità', 'ravvisare un rischio'],
    related: ['il ravvedimento', 'riscontrare'],
  },
  {
    id: 'c1-divario',
    level: 'C1',
    lemma: 'il divario',
    pos: 'sostantivo',
    gender: 'm',
    ipa: '/diˈva:rjo/',
    gloss: 'gap, divide, disparity',
    nuance:
      'The standard term for structural inequalities: il divario digitale, il divario di genere, il divario Nord-Sud. Distinct from la differenza (neutral) and lo scarto (a measured deviation). It implies a gap that ought to be closed.',
    examples: [
      { it: 'Il divario tra Nord e Sud resta ampio.', en: 'The gap between North and South remains wide.' },
      { it: 'Colmare il divario richiederà anni.', en: 'Closing the gap will take years.' },
    ],
    collocations: ['colmare il divario', 'divario digitale', 'divario retributivo'],
    related: ['lo scarto', 'la disparità'],
  },
  {
    id: 'c1-stemperare',
    level: 'C1',
    lemma: 'stemperare',
    pos: 'verbo',
    ipa: '/stempeˈra:re/',
    gloss: 'to soften, to tone down, to dilute (a tone, a tension)',
    nuance:
      'Originally to dissolve a substance in liquid; figuratively to take the edge off something — stemperare la tensione, stemperare i toni. Prized in commentary for describing rhetorical de-escalation.',
    examples: [
      { it: 'Una battuta ha stemperato la tensione in sala.', en: 'A joke defused the tension in the room.' },
      { it: 'Ha stemperato le critiche con qualche apertura.', en: 'He softened the criticism with a few concessions.' },
    ],
    collocations: ['stemperare la tensione', 'stemperare i toni', 'stemperare le polemiche'],
    related: ['smorzare', 'attenuare'],
  },
  {
    id: 'c1-a-fronte-di',
    level: 'C1',
    lemma: 'a fronte di',
    pos: 'locuzione',
    ipa: '/a ˈfronte di/',
    gloss: 'in the face of; as against, compared with; in return for',
    nuance:
      'Three readings settled by context. Contrastive statistics: 200 assunzioni a fronte di 800 domande. Confronting circumstances: a fronte di una crisi. Consideration in contracts: a fronte di un compenso. Very frequent in written registers, rare in speech.',
    examples: [
      { it: 'A fronte di un aumento dei costi, i prezzi sono rimasti fermi.', en: 'Despite a rise in costs, prices have stayed put.' },
      { it: 'Sono stati assunti in dieci a fronte di quattrocento candidature.', en: 'Ten people were hired out of four hundred applications.' },
    ],
    collocations: ['a fronte di un compenso', 'a fronte di tale situazione', 'far fronte a'],
    related: ['far fronte a', 'di fronte a'],
  },
  {
    id: 'c1-lungimiranza',
    level: 'C1',
    lemma: 'la lungimiranza',
    pos: 'sostantivo',
    gender: 'f',
    ipa: '/lundʒimiˈrantsa/',
    gloss: 'foresight, far-sightedness, long-term vision',
    nuance:
      'Literally "long-seeing", and always approving — the quality praised in leaders and planners. Its opposite, miopia (in the figurative sense), is a favourite of editorial writers.',
    examples: [
      { it: 'Il progetto dimostra una rara lungimiranza.', en: 'The project shows rare foresight.' },
      { it: 'È mancata la lungimiranza politica necessaria.', en: 'The necessary political foresight was lacking.' },
    ],
    collocations: ['con lungimiranza', 'mancanza di lungimiranza', 'una scelta lungimirante'],
    related: ['lungimirante', 'la miopia'],
  },
  {
    id: 'c1-arginare',
    level: 'C1',
    lemma: 'arginare',
    pos: 'verbo',
    ipa: '/ardʒiˈna:re/',
    gloss: 'to contain, to stem, to hold back',
    nuance:
      "From l'argine, a riverbank or levee — the image is holding back a flood. Applied to phenomena that threaten to overflow: arginare il fenomeno, arginare la crisi. Stronger and more physical than contenere.",
    examples: [
      { it: 'Le misure non sono bastate ad arginare il fenomeno.', en: 'The measures were not enough to stem the phenomenon.' },
      { it: 'Si cerca di arginare la diffusione delle fake news.', en: 'Efforts are being made to contain the spread of fake news.' },
    ],
    collocations: ['arginare la crisi', 'arginare il fenomeno', "correre ai ripari"],
    related: ["l'argine", 'contenere', 'frenare'],
  },

  // ─────────────────────────────── C2 ───────────────────────────────
  {
    id: 'c2-lambire',
    level: 'C2',
    lemma: 'lambire',
    pos: 'verbo',
    ipa: '/lamˈbi:re/',
    gloss: 'to lap against, to graze, to brush; (figuratively) to touch on the edge of',
    nuance:
      "An -isc- verb. Literally water or flame licking a surface: le fiamme lambivano il tetto. Figuratively, of a scandal reaching the edge of someone's position — l'inchiesta lambisce il ministero — implying proximity without direct involvement. That figurative use is journalistic gold.",
    examples: [
      { it: 'Le onde lambiscono gli scogli.', en: 'The waves lap against the rocks.' },
      { it: "L'inchiesta lambisce i vertici dell'azienda.", en: "The investigation is reaching the company's top ranks." },
    ],
    collocations: ["l'inchiesta lambisce", 'lambire la costa', 'lambito dalle fiamme'],
    related: ['sfiorare', 'accarezzare'],
  },
  {
    id: 'c2-appannaggio',
    level: 'C2',
    lemma: "l'appannaggio",
    pos: 'sostantivo',
    gender: 'm',
    ipa: '/appanˈnaddʒo/',
    gloss: 'prerogative, exclusive preserve; (historically) an allowance to a royal',
    nuance:
      'Now almost exclusively in the formula essere appannaggio di — to be the exclusive preserve of. Frequently used critically: l\'istruzione superiore non deve essere appannaggio di pochi. The historical sense survives only in writing about monarchies.',
    examples: [
      { it: 'La cultura non è appannaggio di una élite.', en: 'Culture is not the preserve of an elite.' },
      { it: 'Quel ruolo è stato a lungo appannaggio maschile.', en: 'That role was long a male preserve.' },
    ],
    collocations: ['essere appannaggio di', 'appannaggio esclusivo', 'appannaggio di pochi'],
    related: ['la prerogativa', 'il privilegio'],
  },
  {
    id: 'c2-dirimere',
    level: 'C2',
    lemma: 'dirimere',
    pos: 'verbo',
    ipa: '/diˈri:mere/',
    gloss: 'to settle, to resolve (a dispute or question) definitively',
    nuance:
      'Legal-institutional register, and defective in practice: the past participle dirimuto is avoided, so writers use the present and imperfect, or switch to risolvere. The adjective dirimente ("decisive, settling the matter") is far more common: una questione dirimente.',
    examples: [
      { it: 'Spetta alla Corte dirimere il conflitto di competenza.', en: 'It falls to the Court to settle the jurisdictional conflict.' },
      { it: "L'argomento non è dirimente ai fini della decisione.", en: 'The argument is not decisive for the purposes of the ruling.' },
    ],
    collocations: ['dirimere una controversia', 'questione dirimente', 'dirimere il dubbio'],
    related: ['dirimente', 'risolvere', 'la controversia'],
  },
  {
    id: 'c2-caparbieta',
    level: 'C2',
    lemma: 'la caparbietà',
    pos: 'sostantivo',
    gender: 'f',
    ipa: '/kaparbjeˈta/',
    gloss: 'doggedness, stubborn determination',
    nuance:
      'Ambivalent where testardaggine is plainly negative: caparbietà can be admiring — ha vinto con caparbietà — or reproachful, depending on framing. Invariable in the plural, like all -tà nouns.',
    examples: [
      { it: 'Ha portato avanti il progetto con caparbietà.', en: 'She pushed the project through with dogged determination.' },
      { it: 'La sua caparbietà gli ha alienato molti alleati.', en: 'His stubbornness alienated many allies.' },
    ],
    collocations: ['con caparbietà', 'caparbietà e talento', 'una caparbia difesa'],
    related: ['caparbio', 'la testardaggine', 'la tenacia'],
  },
  {
    id: 'c2-blandire',
    level: 'C2',
    lemma: 'blandire',
    pos: 'verbo',
    ipa: '/blanˈdi:re/',
    gloss: 'to cajole, to coax, to flatter into compliance',
    nuance:
      "An -isc- verb carrying a whiff of manipulation — you blandisci an audience or an opponent you intend to win over. Note that blando means mild or weak (una terapia blanda), a sense the verb does not share.",
    examples: [
      { it: "Ha blandito l'elettorato con promesse impossibili.", en: 'He cajoled the electorate with impossible promises.' },
      { it: 'Non serve blandire la commissione: servono dati.', en: 'There is no point flattering the committee: data is what is needed.' },
    ],
    collocations: ["blandire l'opinione pubblica", 'blandire gli alleati', 'lusingare'],
    related: ['blando', 'lusingare', 'adulare'],
  },
  {
    id: 'c2-surrettizio',
    level: 'C2',
    lemma: 'surrettizio',
    pos: 'aggettivo',
    ipa: '/surretˈtittsjo/',
    gloss: 'surreptitious, obtained by stealth or misrepresentation',
    nuance:
      'Sharper than the English cognate: it accuses. In legal Latin surreptio is obtaining something by concealing the truth, and the Italian keeps that charge — una modifica surrettizia is a change smuggled in improperly. The adverb surrettiziamente is equally at home in polemic.',
    examples: [
      { it: 'Denuncia una modifica surrettizia del regolamento.', en: 'He denounces a surreptitious amendment of the rules.' },
      { it: 'La norma è stata introdotta surrettiziamente.', en: 'The provision was introduced surreptitiously.' },
    ],
    collocations: ['modifica surrettizia', 'in modo surrettizio', 'surrettiziamente'],
    related: ['occulto', 'clandestino'],
  },
  {
    id: 'c2-coacervo',
    level: 'C2',
    lemma: 'il coacervo',
    pos: 'sostantivo',
    gender: 'm',
    ipa: '/koaˈtʃɛrvo/',
    gloss: 'a jumble, a tangled mass, a heterogeneous agglomeration',
    nuance:
      'Learned and faintly disparaging: un coacervo di norme, un coacervo di interessi. It insists the parts do not cohere. In tax law it has a technical sense (aggregating prior gifts into an estate), which is worth recognising but not imitating.',
    examples: [
      { it: 'La riforma è un coacervo di norme contraddittorie.', en: 'The reform is a jumble of contradictory rules.' },
      { it: 'Un coacervo di interessi divergenti ha bloccato il progetto.', en: 'A tangle of diverging interests blocked the project.' },
    ],
    collocations: ['un coacervo di norme', 'un coacervo di interessi', 'coacervo disomogeneo'],
    related: ['il guazzabuglio', "l'accozzaglia"],
  },
  {
    id: 'c2-ottemperare',
    level: 'C2',
    lemma: 'ottemperare (a)',
    pos: 'verbo',
    ipa: '/ottempeˈra:re/',
    gloss: 'to comply with, to abide by (an order, an obligation)',
    nuance:
      'Strictly administrative and always with a: ottemperare a un ordine, ottemperare agli obblighi. It presupposes a binding duty, unlike rispettare (broader) or conformarsi (to bring oneself into line). The noun ottemperanza appears in the standard formula in ottemperanza a.',
    examples: [
      { it: "L'azienda non ha ottemperato all'ordine del giudice.", en: "The company failed to comply with the judge's order." },
      { it: 'In ottemperanza alle disposizioni vigenti, la sede resterà chiusa.', en: 'In compliance with the regulations in force, the office will remain closed.' },
    ],
    collocations: ['ottemperare agli obblighi', 'in ottemperanza a', "ottemperare all'ordine"],
    related: ["l'ottemperanza", 'adempiere', 'conformarsi'],
  },
];

export const wordsByLevel = (level: WordEntry['level']) => WORDS.filter((w) => w.level === level);
