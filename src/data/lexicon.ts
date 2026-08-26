import type { Example, LexCluster, LexEntry, LexPos, Level } from './types';

/**
 * The high-frequency core of Italian, for A1 and A2.
 *
 * The target is the *vocabolario fondamentale* — the roughly two thousand words
 * that account for the overwhelming majority of everyday Italian, of which the
 * first thousand does most of the work. That set maps almost exactly onto what
 * CEFR expects at A1 and A2, which is why this bank stops there: a C1 learner
 * does not need a frequency list, they need collocations and register.
 *
 * Two decisions worth stating, because they are what make this more than a
 * word list:
 *
 * 1. Every entry carries a *chunk*, not a definition. Knowing that `mano` means
 *    "hand" is close to useless; knowing `dammi una mano` is immediately usable.
 *    Words are stored in the shape they actually arrive in.
 *
 * 2. Entries are grouped in semantic clusters rather than alphabetically,
 *    because that is how a speaker reaches for them under time pressure.
 *
 * Rows are tuples rather than objects on purpose. At a thousand entries the
 * object form is unreadable and unmaintainable; one line per word is not.
 */
type Row = [
  rank: number,
  lemma: string,
  pos: LexPos,
  gloss: string,
  cluster: LexCluster,
  chunkIt: string,
  chunkEn: string,
  gender?: 'm' | 'f',
];

function slug(lemma: string): string {
  return lemma
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function expand(rows: Row[], level: Level): LexEntry[] {
  return rows.map(([rank, lemma, pos, gloss, cluster, chunkIt, chunkEn, gender]) => {
    const chunk: Example = { it: chunkIt, en: chunkEn };
    return {
      id: `lx-${level.toLowerCase()}-${slug(lemma)}`,
      rank,
      level,
      lemma,
      pos,
      gloss,
      cluster,
      chunk,
      ...(gender ? { gender } : {}),
    };
  });
}

/* ─────────────────────────────── A1 ─────────────────────────────── */

const A1_ROWS: Row[] = [
  // ── parole grammaticali: the first hundred of any frequency list ──
  [1, 'essere', 'verbo', 'to be', 'grammaticali', 'Sono di Boston.', 'I am from Boston.'],
  [2, 'avere', 'verbo', 'to have', 'grammaticali', 'Ho due fratelli.', 'I have two brothers.'],
  [3, 'che', 'pronome', 'that; which; what', 'grammaticali', 'Penso che sia giusto.', 'I think that is right.'],
  [4, 'di', 'preposizione', 'of; from', 'grammaticali', 'Un bicchiere di acqua.', 'A glass of water.'],
  [5, 'e', 'congiunzione', 'and', 'grammaticali', 'Pane e vino.', 'Bread and wine.'],
  [6, 'a', 'preposizione', 'to; at', 'grammaticali', 'Vado a casa.', 'I am going home.'],
  [7, 'in', 'preposizione', 'in; to (a country, a room)', 'grammaticali', 'Abito in Italia.', 'I live in Italy.'],
  [8, 'per', 'preposizione', 'for; in order to', 'grammaticali', 'Questo è per te.', 'This is for you.'],
  [9, 'non', 'avverbio', 'not', 'grammaticali', 'Non ho capito.', 'I did not understand.'],
  [10, 'con', 'preposizione', 'with', 'grammaticali', 'Vengo con te.', 'I am coming with you.'],
  [11, 'da', 'preposizione', 'from; since; at (someone’s place)', 'grammaticali', 'Vengo da Roma.', 'I come from Rome.'],
  [12, 'su', 'preposizione', 'on', 'grammaticali', 'Il libro è sul tavolo.', 'The book is on the table.'],
  [13, 'ma', 'congiunzione', 'but', 'grammaticali', 'È piccolo ma bello.', 'It is small but nice.'],
  [14, 'come', 'avverbio', 'how; like, as', 'grammaticali', 'Come stai?', 'How are you?'],
  [15, 'anche', 'avverbio', 'also, too', 'grammaticali', 'Vengo anch’io.', 'I am coming too.'],
  [16, 'più', 'avverbio', 'more; any more', 'quantità', 'Non ne voglio più.', 'I do not want any more.'],
  [17, 'quando', 'avverbio', 'when', 'tempo', 'Quando arrivi?', 'When are you arriving?'],
  [18, 'dove', 'avverbio', 'where', 'grammaticali', 'Dove sei?', 'Where are you?'],
  [19, 'perché', 'congiunzione', 'why; because', 'grammaticali', 'Perché non vieni?', 'Why are you not coming?'],
  [20, 'chi', 'pronome', 'who', 'grammaticali', 'Chi è?', 'Who is it?'],
  [21, 'cosa', 'pronome', 'what', 'grammaticali', 'Che cosa fai?', 'What are you doing?'],
  [22, 'questo', 'pronome', 'this', 'grammaticali', 'Questo mi piace.', 'I like this one.'],
  [23, 'quello', 'pronome', 'that', 'grammaticali', 'Prendo quello.', 'I will take that one.'],
  [24, 'tutto', 'aggettivo', 'all, everything', 'quantità', 'Va tutto bene.', 'Everything is fine.'],
  [25, 'altro', 'aggettivo', 'other, another', 'quantità', 'Un altro caffè, grazie.', 'Another coffee, please.'],
  [26, 'ci', 'pronome', 'there; us', 'grammaticali', 'Ci vediamo domani.', 'See you tomorrow.'],
  [27, 'ne', 'pronome', 'of it, of them', 'grammaticali', 'Ne prendo due.', 'I will take two of them.'],
  [28, 'se', 'congiunzione', 'if', 'grammaticali', 'Se vuoi, vengo.', 'If you want, I will come.'],
  [29, 'o', 'congiunzione', 'or', 'grammaticali', 'Tè o caffè?', 'Tea or coffee?'],
  [30, 'sì', 'avverbio', 'yes', 'grammaticali', 'Sì, volentieri.', 'Yes, gladly.'],
  [31, 'no', 'avverbio', 'no', 'grammaticali', 'No, grazie.', 'No, thank you.'],
  [32, 'niente', 'pronome', 'nothing', 'quantità', 'Non ho detto niente.', 'I did not say anything.'],
  [33, 'qualcosa', 'pronome', 'something', 'quantità', 'Vuoi qualcosa da bere?', 'Do you want something to drink?'],
  [34, 'qualcuno', 'pronome', 'someone', 'persone', 'C’è qualcuno?', 'Is anyone there?'],
  [35, 'ogni', 'aggettivo', 'every', 'quantità', 'Ogni giorno.', 'Every day.'],

  // ── azioni: the verbs that carry a beginner's day ──
  [36, 'fare', 'verbo', 'to do, to make', 'azioni', 'Che cosa fai?', 'What are you doing?'],
  [37, 'andare', 'verbo', 'to go', 'azioni', 'Vado al lavoro.', 'I am going to work.'],
  [38, 'venire', 'verbo', 'to come', 'azioni', 'Vieni con noi?', 'Are you coming with us?'],
  [39, 'stare', 'verbo', 'to stay; to be (health)', 'azioni', 'Sto bene, grazie.', 'I am well, thanks.'],
  [40, 'dire', 'verbo', 'to say, to tell', 'azioni', 'Che cosa hai detto?', 'What did you say?'],
  [41, 'potere', 'verbo', 'to be able to, can', 'azioni', 'Posso entrare?', 'May I come in?'],
  [42, 'volere', 'verbo', 'to want', 'azioni', 'Vorrei un caffè.', 'I would like a coffee.'],
  [43, 'dovere', 'verbo', 'to have to, must', 'azioni', 'Devo andare.', 'I have to go.'],
  [44, 'sapere', 'verbo', 'to know (a fact); to know how to', 'azioni', 'Non lo so.', 'I do not know.'],
  [45, 'vedere', 'verbo', 'to see', 'azioni', 'Ci vediamo dopo.', 'See you later.'],
  [46, 'parlare', 'verbo', 'to speak', 'azioni', 'Parli inglese?', 'Do you speak English?'],
  [47, 'capire', 'verbo', 'to understand', 'azioni', 'Non ho capito, scusi.', 'I did not understand, sorry.'],
  [48, 'prendere', 'verbo', 'to take; to have (food, transport)', 'azioni', 'Prendo un caffè.', 'I will have a coffee.'],
  [49, 'mangiare', 'verbo', 'to eat', 'cibo', 'Cosa mangiamo stasera?', 'What are we eating tonight?'],
  [50, 'bere', 'verbo', 'to drink', 'cibo', 'Vuoi bere qualcosa?', 'Do you want something to drink?'],
  [51, 'abitare', 'verbo', 'to live (somewhere)', 'casa', 'Abito a Verona.', 'I live in Verona.'],
  [52, 'lavorare', 'verbo', 'to work', 'lavoro', 'Lavoro in un negozio.', 'I work in a shop.'],
  [53, 'studiare', 'verbo', 'to study', 'scuola', 'Studio italiano da tre mesi.', 'I have been studying Italian for three months.'],
  [54, 'chiamarsi', 'verbo', 'to be called', 'persone', 'Come ti chiami?', 'What is your name?'],
  [55, 'arrivare', 'verbo', 'to arrive', 'viaggio', 'A che ora arrivi?', 'What time do you arrive?'],
  [56, 'partire', 'verbo', 'to leave, to depart', 'viaggio', 'Il treno parte alle otto.', 'The train leaves at eight.'],
  [57, 'tornare', 'verbo', 'to return, to come back', 'azioni', 'Torno subito.', 'I will be right back.'],
  [58, 'aprire', 'verbo', 'to open', 'azioni', 'A che ora aprite?', 'What time do you open?'],
  [59, 'chiudere', 'verbo', 'to close', 'azioni', 'Il negozio chiude all’una.', 'The shop closes at one.'],
  [60, 'comprare', 'verbo', 'to buy', 'acquisti', 'Devo comprare il pane.', 'I need to buy bread.'],
  [61, 'pagare', 'verbo', 'to pay', 'acquisti', 'Posso pagare con la carta?', 'Can I pay by card?'],
  [62, 'costare', 'verbo', 'to cost', 'acquisti', 'Quanto costa?', 'How much does it cost?'],
  [63, 'aspettare', 'verbo', 'to wait (for)', 'azioni', 'Aspetta un momento.', 'Wait a moment.'],
  [64, 'guardare', 'verbo', 'to watch, to look at', 'azioni', 'Guardo un film.', 'I am watching a film.'],
  [65, 'ascoltare', 'verbo', 'to listen to', 'azioni', 'Ascolto la radio.', 'I listen to the radio.'],
  [66, 'leggere', 'verbo', 'to read', 'scuola', 'Leggo un libro.', 'I am reading a book.'],
  [67, 'scrivere', 'verbo', 'to write', 'scuola', 'Ti scrivo domani.', 'I will write to you tomorrow.'],
  [68, 'dormire', 'verbo', 'to sleep', 'azioni', 'Ho dormito bene.', 'I slept well.'],
  [69, 'uscire', 'verbo', 'to go out', 'azioni', 'Esco con gli amici.', 'I am going out with friends.'],
  [70, 'entrare', 'verbo', 'to go in, to enter', 'azioni', 'Posso entrare?', 'May I come in?'],
  [71, 'trovare', 'verbo', 'to find', 'azioni', 'Non trovo le chiavi.', 'I cannot find the keys.'],
  [72, 'cercare', 'verbo', 'to look for', 'azioni', 'Cerco la stazione.', 'I am looking for the station.'],
  [73, 'piacere', 'verbo', 'to be pleasing, to like', 'sentimenti', 'Mi piace molto.', 'I like it a lot.'],
  [74, 'servire', 'verbo', 'to be needed', 'azioni', 'Mi serve aiuto.', 'I need help.'],
  [75, 'preferire', 'verbo', 'to prefer', 'sentimenti', 'Preferisco il tè.', 'I prefer tea.'],

  // ── persone e famiglia ──
  [76, 'persona', 'sostantivo', 'person', 'persone', 'È una brava persona.', 'She is a good person.', 'f'],
  [77, 'gente', 'sostantivo', 'people', 'persone', 'C’è molta gente.', 'There are a lot of people.', 'f'],
  [78, 'uomo', 'sostantivo', 'man', 'persone', 'Un uomo alto.', 'A tall man.', 'm'],
  [79, 'donna', 'sostantivo', 'woman', 'persone', 'Una donna simpatica.', 'A likeable woman.', 'f'],
  [80, 'ragazzo', 'sostantivo', 'boy; boyfriend', 'persone', 'Il mio ragazzo si chiama Luca.', 'My boyfriend is called Luca.', 'm'],
  [81, 'ragazza', 'sostantivo', 'girl; girlfriend', 'persone', 'La sua ragazza è di Milano.', 'His girlfriend is from Milan.', 'f'],
  [82, 'bambino', 'sostantivo', 'child', 'famiglia', 'Ho due bambini.', 'I have two children.', 'm'],
  [83, 'amico', 'sostantivo', 'friend', 'persone', 'Un amico di mio fratello.', 'A friend of my brother.', 'm'],
  [84, 'famiglia', 'sostantivo', 'family', 'famiglia', 'Pranzo in famiglia.', 'I have lunch with the family.', 'f'],
  [85, 'padre', 'sostantivo', 'father', 'famiglia', 'Mio padre ha sessant’anni.', 'My father is sixty.', 'm'],
  [86, 'madre', 'sostantivo', 'mother', 'famiglia', 'Mia madre lavora in ospedale.', 'My mother works in a hospital.', 'f'],
  [87, 'figlio', 'sostantivo', 'son; child', 'famiglia', 'Hanno tre figli.', 'They have three children.', 'm'],
  [88, 'fratello', 'sostantivo', 'brother', 'famiglia', 'Ho un fratello più grande.', 'I have an older brother.', 'm'],
  [89, 'sorella', 'sostantivo', 'sister', 'famiglia', 'Mia sorella ha otto anni.', 'My sister is eight.', 'f'],
  [90, 'nonno', 'sostantivo', 'grandfather', 'famiglia', 'Andiamo dai nonni.', 'We are going to our grandparents.', 'm'],
  [91, 'signore', 'sostantivo', 'gentleman; sir', 'persone', 'Buongiorno, signore.', 'Good morning, sir.', 'm'],
  [92, 'nome', 'sostantivo', 'name', 'persone', 'Il mio nome è Anna.', 'My name is Anna.', 'm'],

  // ── tempo ──
  [93, 'tempo', 'sostantivo', 'time; weather', 'tempo', 'Non ho tempo.', 'I have no time.', 'm'],
  [94, 'giorno', 'sostantivo', 'day', 'tempo', 'Tutti i giorni.', 'Every day.', 'm'],
  [95, 'anno', 'sostantivo', 'year', 'tempo', 'Ho trent’anni.', 'I am thirty.', 'm'],
  [96, 'ora', 'sostantivo', 'hour; time of day', 'tempo', 'Che ore sono?', 'What time is it?', 'f'],
  [97, 'volta', 'sostantivo', 'time, occasion', 'tempo', 'Un’altra volta.', 'Another time.', 'f'],
  [98, 'mattina', 'sostantivo', 'morning', 'tempo', 'La mattina bevo caffè.', 'In the morning I drink coffee.', 'f'],
  [99, 'sera', 'sostantivo', 'evening', 'tempo', 'Ci vediamo stasera.', 'See you this evening.', 'f'],
  [100, 'notte', 'sostantivo', 'night', 'tempo', 'Buona notte!', 'Good night!', 'f'],
  [101, 'settimana', 'sostantivo', 'week', 'tempo', 'La settimana prossima.', 'Next week.', 'f'],
  [102, 'mese', 'sostantivo', 'month', 'tempo', 'Il mese scorso.', 'Last month.', 'm'],
  [103, 'oggi', 'avverbio', 'today', 'tempo', 'Che giorno è oggi?', 'What day is it today?'],
  [104, 'domani', 'avverbio', 'tomorrow', 'tempo', 'A domani!', 'See you tomorrow!'],
  [105, 'ieri', 'avverbio', 'yesterday', 'tempo', 'Ieri sono stato male.', 'Yesterday I was unwell.'],
  [106, 'adesso', 'avverbio', 'now', 'tempo', 'Adesso non posso.', 'I cannot right now.'],
  [107, 'sempre', 'avverbio', 'always', 'tempo', 'Faccio sempre così.', 'I always do it this way.'],
  [108, 'mai', 'avverbio', 'never', 'tempo', 'Non ci sono mai stato.', 'I have never been there.'],
  [109, 'presto', 'avverbio', 'early; soon', 'tempo', 'Mi alzo presto.', 'I get up early.'],
  [110, 'tardi', 'avverbio', 'late', 'tempo', 'È tardi, vado.', 'It is late, I am off.'],
  [111, 'prima', 'avverbio', 'before; first', 'tempo', 'Prima finisco questo.', 'First I will finish this.'],
  [112, 'dopo', 'avverbio', 'after; afterwards', 'tempo', 'Ci sentiamo dopo.', 'We will speak later.'],
  [113, 'ancora', 'avverbio', 'still; again; yet', 'tempo', 'Non è ancora arrivato.', 'He has not arrived yet.'],
  [114, 'già', 'avverbio', 'already', 'tempo', 'Ho già mangiato.', 'I have already eaten.'],
  [115, 'subito', 'avverbio', 'straight away', 'tempo', 'Arrivo subito.', 'I am coming right away.'],

  // ── casa ──
  [116, 'casa', 'sostantivo', 'house, home', 'casa', 'Torno a casa.', 'I am going home.', 'f'],
  [117, 'camera', 'sostantivo', 'room, bedroom', 'casa', 'Una camera doppia.', 'A double room.', 'f'],
  [118, 'cucina', 'sostantivo', 'kitchen; cooking', 'casa', 'La cucina è piccola.', 'The kitchen is small.', 'f'],
  [119, 'bagno', 'sostantivo', 'bathroom', 'casa', 'Dov’è il bagno?', 'Where is the bathroom?', 'm'],
  [120, 'porta', 'sostantivo', 'door', 'casa', 'Chiudi la porta, per favore.', 'Close the door, please.', 'f'],
  [121, 'finestra', 'sostantivo', 'window', 'casa', 'Apri la finestra.', 'Open the window.', 'f'],
  [122, 'tavolo', 'sostantivo', 'table', 'casa', 'Un tavolo per due.', 'A table for two.', 'm'],
  [123, 'letto', 'sostantivo', 'bed', 'casa', 'Vado a letto.', 'I am going to bed.', 'm'],
  [124, 'chiave', 'sostantivo', 'key', 'casa', 'Ho perso le chiavi.', 'I have lost my keys.', 'f'],
  [125, 'telefono', 'sostantivo', 'telephone', 'casa', 'Ti chiamo al telefono.', 'I will call you on the phone.', 'm'],

  // ── cibo ──
  [126, 'acqua', 'sostantivo', 'water', 'cibo', 'Un’acqua naturale, grazie.', 'A still water, thanks.', 'f'],
  [127, 'pane', 'sostantivo', 'bread', 'cibo', 'Compro il pane ogni mattina.', 'I buy bread every morning.', 'm'],
  [128, 'caffè', 'sostantivo', 'coffee', 'cibo', 'Un caffè, per favore.', 'A coffee, please.', 'm'],
  [129, 'vino', 'sostantivo', 'wine', 'cibo', 'Mezzo litro di vino rosso.', 'Half a litre of red wine.', 'm'],
  [130, 'pasta', 'sostantivo', 'pasta', 'cibo', 'Faccio la pasta stasera.', 'I am making pasta tonight.', 'f'],
  [131, 'carne', 'sostantivo', 'meat', 'cibo', 'Non mangio carne.', 'I do not eat meat.', 'f'],
  [132, 'pesce', 'sostantivo', 'fish', 'cibo', 'Il pesce è freschissimo.', 'The fish is very fresh.', 'm'],
  [133, 'frutta', 'sostantivo', 'fruit', 'cibo', 'Un chilo di frutta.', 'A kilo of fruit.', 'f'],
  [134, 'colazione', 'sostantivo', 'breakfast', 'cibo', 'Faccio colazione alle sette.', 'I have breakfast at seven.', 'f'],
  [135, 'pranzo', 'sostantivo', 'lunch', 'cibo', 'Il pranzo della domenica.', 'Sunday lunch.', 'm'],
  [136, 'cena', 'sostantivo', 'dinner', 'cibo', 'Cosa c’è per cena?', 'What is for dinner?', 'f'],

  // ── città e viaggio ──
  [137, 'città', 'sostantivo', 'city, town', 'città', 'Abito in una città piccola.', 'I live in a small city.', 'f'],
  [138, 'strada', 'sostantivo', 'road, street', 'città', 'Attraversa la strada.', 'Cross the road.', 'f'],
  [139, 'piazza', 'sostantivo', 'square', 'città', 'Ci vediamo in piazza.', 'See you in the square.', 'f'],
  [140, 'negozio', 'sostantivo', 'shop', 'acquisti', 'Il negozio è chiuso.', 'The shop is closed.', 'm'],
  [141, 'bar', 'sostantivo', 'café, bar', 'città', 'Prendiamo un caffè al bar.', 'Let us have a coffee at the bar.', 'm'],
  [142, 'stazione', 'sostantivo', 'station', 'viaggio', 'Scusi, dov’è la stazione?', 'Excuse me, where is the station?', 'f'],
  [143, 'treno', 'sostantivo', 'train', 'viaggio', 'Prendo il treno delle otto.', 'I am taking the eight o’clock train.', 'm'],
  [144, 'autobus', 'sostantivo', 'bus', 'viaggio', 'Aspetto l’autobus.', 'I am waiting for the bus.', 'm'],
  [145, 'macchina', 'sostantivo', 'car', 'viaggio', 'Vado in macchina.', 'I am going by car.', 'f'],
  [146, 'biglietto', 'sostantivo', 'ticket', 'viaggio', 'Un biglietto di andata e ritorno.', 'A return ticket.', 'm'],
  [147, 'albergo', 'sostantivo', 'hotel', 'viaggio', 'Ho prenotato un albergo.', 'I have booked a hotel.', 'm'],
  [148, 'ristorante', 'sostantivo', 'restaurant', 'cibo', 'Andiamo al ristorante.', 'Let us go to a restaurant.', 'm'],

  // ── lavoro, scuola, acquisti ──
  [149, 'lavoro', 'sostantivo', 'work, job', 'lavoro', 'Vado al lavoro.', 'I am going to work.', 'm'],
  [150, 'scuola', 'sostantivo', 'school', 'scuola', 'I bambini vanno a scuola.', 'The children go to school.', 'f'],
  [151, 'libro', 'sostantivo', 'book', 'scuola', 'Sto leggendo un libro.', 'I am reading a book.', 'm'],
  [152, 'soldi', 'sostantivo', 'money', 'acquisti', 'Non ho soldi.', 'I have no money.', 'm'],
  [153, 'euro', 'sostantivo', 'euro', 'acquisti', 'Costa dieci euro.', 'It costs ten euros.', 'm'],
  [154, 'conto', 'sostantivo', 'bill; account', 'acquisti', 'Il conto, per favore.', 'The bill, please.', 'm'],
  [155, 'prezzo', 'sostantivo', 'price', 'acquisti', 'Il prezzo è giusto.', 'The price is fair.', 'm'],

  // ── corpo e salute ──
  [156, 'mano', 'sostantivo', 'hand', 'corpo e salute', 'Mi dai una mano?', 'Will you give me a hand?', 'f'],
  [157, 'testa', 'sostantivo', 'head', 'corpo e salute', 'Ho mal di testa.', 'I have a headache.', 'f'],
  [158, 'occhio', 'sostantivo', 'eye', 'corpo e salute', 'Ha gli occhi verdi.', 'She has green eyes.', 'm'],
  [159, 'medico', 'sostantivo', 'doctor', 'corpo e salute', 'Devo andare dal medico.', 'I need to go to the doctor.', 'm'],
  [160, 'male', 'sostantivo', 'pain; harm', 'corpo e salute', 'Mi fa male qui.', 'It hurts here.', 'm'],

  // ── qualità ──
  [161, 'buono', 'aggettivo', 'good; tasty', 'qualità', 'La pizza è molto buona.', 'The pizza is very tasty.'],
  [162, 'bello', 'aggettivo', 'beautiful, nice', 'qualità', 'Che bella giornata!', 'What a lovely day!'],
  [163, 'grande', 'aggettivo', 'big, large', 'qualità', 'Una città grande.', 'A big city.'],
  [164, 'piccolo', 'aggettivo', 'small', 'qualità', 'Un piccolo problema.', 'A small problem.'],
  [165, 'nuovo', 'aggettivo', 'new', 'qualità', 'Ho una macchina nuova.', 'I have a new car.'],
  [166, 'vecchio', 'aggettivo', 'old', 'qualità', 'Un amico vecchio.', 'An old friend.'],
  [167, 'caro', 'aggettivo', 'expensive; dear', 'acquisti', 'È troppo caro.', 'It is too expensive.'],
  [168, 'facile', 'aggettivo', 'easy', 'qualità', 'Non è facile.', 'It is not easy.'],
  [169, 'difficile', 'aggettivo', 'difficult', 'qualità', 'È una lingua difficile.', 'It is a difficult language.'],
  [170, 'stanco', 'aggettivo', 'tired', 'sentimenti', 'Sono stanco morto.', 'I am dead tired.'],
  [171, 'contento', 'aggettivo', 'happy, pleased', 'sentimenti', 'Sono contento di vederti.', 'I am glad to see you.'],
  [172, 'libero', 'aggettivo', 'free, available', 'qualità', 'Sei libero stasera?', 'Are you free tonight?'],

  // ── quantità e maniera ──
  [173, 'molto', 'avverbio', 'very; a lot', 'quantità', 'Mi piace molto.', 'I like it a lot.'],
  [174, 'poco', 'avverbio', 'little, not much', 'quantità', 'Parlo poco italiano.', 'I speak little Italian.'],
  [175, 'troppo', 'avverbio', 'too, too much', 'quantità', 'È troppo tardi.', 'It is too late.'],
  [176, 'bene', 'avverbio', 'well', 'qualità', 'Sto bene, grazie.', 'I am well, thanks.'],
  [177, 'qui', 'avverbio', 'here', 'grammaticali', 'Vieni qui.', 'Come here.'],
  [178, 'vicino', 'avverbio', 'near, nearby', 'città', 'Abito qui vicino.', 'I live nearby.'],
  [179, 'lontano', 'avverbio', 'far', 'città', 'È lontano?', 'Is it far?'],
  [180, 'insieme', 'avverbio', 'together', 'persone', 'Mangiamo insieme.', 'Let us eat together.'],
];

/* ─────────────────────────────── A2 ─────────────────────────────── */

const A2_ROWS: Row[] = [
  // ── azioni: the next layer of everyday verbs ──
  [181, 'pensare', 'verbo', 'to think', 'azioni', 'Penso di sì.', 'I think so.'],
  [182, 'credere', 'verbo', 'to believe, to think', 'azioni', 'Non ci credo.', 'I do not believe it.'],
  [183, 'sentire', 'verbo', 'to hear; to feel', 'azioni', 'Non ti sento bene.', 'I cannot hear you well.'],
  [184, 'mettere', 'verbo', 'to put', 'azioni', 'Metti la roba in camera.', 'Put your things in the bedroom.'],
  [185, 'portare', 'verbo', 'to bring, to carry; to wear', 'azioni', 'Porto io il vino.', 'I will bring the wine.'],
  [186, 'lasciare', 'verbo', 'to leave (something); to let', 'azioni', 'Lascia stare.', 'Leave it, never mind.'],
  [187, 'passare', 'verbo', 'to pass; to drop by', 'azioni', 'Passo a prenderti alle otto.', 'I will pick you up at eight.'],
  [188, 'chiedere', 'verbo', 'to ask (for)', 'azioni', 'Posso chiederti una cosa?', 'Can I ask you something?'],
  [189, 'rispondere', 'verbo', 'to answer', 'azioni', 'Non mi ha risposto.', 'He did not answer me.'],
  [190, 'ricordare', 'verbo', 'to remember', 'azioni', 'Non mi ricordo il nome.', 'I do not remember the name.'],
  [191, 'dimenticare', 'verbo', 'to forget', 'azioni', 'Ho dimenticato le chiavi.', 'I forgot my keys.'],
  [192, 'conoscere', 'verbo', 'to know (a person, a place)', 'persone', 'Ci conosciamo da anni.', 'We have known each other for years.'],
  [193, 'incontrare', 'verbo', 'to meet', 'persone', 'Ho incontrato Marco in centro.', 'I ran into Marco in town.'],
  [194, 'provare', 'verbo', 'to try; to try on', 'azioni', 'Posso provarlo?', 'Can I try it on?'],
  [195, 'cominciare', 'verbo', 'to begin', 'azioni', 'Il film comincia alle nove.', 'The film starts at nine.'],
  [196, 'finire', 'verbo', 'to finish', 'azioni', 'Ho finito di lavorare.', 'I have finished work.'],
  [197, 'cambiare', 'verbo', 'to change', 'azioni', 'Ho cambiato idea.', 'I have changed my mind.'],
  [198, 'perdere', 'verbo', 'to lose; to miss (a train)', 'azioni', 'Ho perso il treno.', 'I missed the train.'],
  [199, 'succedere', 'verbo', 'to happen', 'azioni', 'Che cosa è successo?', 'What happened?'],
  [200, 'sembrare', 'verbo', 'to seem', 'azioni', 'Mi sembra giusto.', 'It seems right to me.'],
  [201, 'diventare', 'verbo', 'to become', 'azioni', 'È diventato difficile.', 'It has become difficult.'],
  [202, 'rimanere', 'verbo', 'to stay, to remain', 'azioni', 'Rimango a casa.', 'I am staying home.'],
  [203, 'vivere', 'verbo', 'to live', 'azioni', 'Vivo qui da due anni.', 'I have lived here for two years.'],
  [204, 'morire', 'verbo', 'to die', 'azioni', 'Muoio di fame.', 'I am starving.'],
  [205, 'nascere', 'verbo', 'to be born', 'persone', 'Sono nato a Napoli.', 'I was born in Naples.'],
  [206, 'giocare', 'verbo', 'to play', 'azioni', 'Giochiamo a carte.', 'Let us play cards.'],
  [207, 'correre', 'verbo', 'to run', 'azioni', 'Corro tutte le mattine.', 'I run every morning.'],
  [208, 'camminare', 'verbo', 'to walk', 'azioni', 'Preferisco camminare.', 'I prefer to walk.'],
  [209, 'salire', 'verbo', 'to go up; to get on', 'viaggio', 'Salgo sul treno.', 'I am getting on the train.'],
  [210, 'scendere', 'verbo', 'to go down; to get off', 'viaggio', 'Scendo alla prossima.', 'I am getting off at the next stop.'],
  [211, 'girare', 'verbo', 'to turn', 'città', 'Gira a destra dopo la chiesa.', 'Turn right after the church.'],
  [212, 'fermarsi', 'verbo', 'to stop', 'azioni', 'Il treno si ferma a Firenze.', 'The train stops in Florence.'],
  [213, 'svegliarsi', 'verbo', 'to wake up', 'azioni', 'Mi sveglio alle sette.', 'I wake up at seven.'],
  [214, 'alzarsi', 'verbo', 'to get up', 'azioni', 'Mi alzo tardi la domenica.', 'I get up late on Sundays.'],
  [215, 'vestirsi', 'verbo', 'to get dressed', 'azioni', 'Mi vesto ed esco.', 'I get dressed and go out.'],
  [216, 'riposare', 'verbo', 'to rest', 'azioni', 'Ho bisogno di riposare.', 'I need to rest.'],
  [217, 'aiutare', 'verbo', 'to help', 'persone', 'Ti aiuto io.', 'I will help you.'],
  [218, 'spiegare', 'verbo', 'to explain', 'scuola', 'Me lo puoi spiegare?', 'Can you explain it to me?'],
  [219, 'imparare', 'verbo', 'to learn', 'scuola', 'Sto imparando l’italiano.', 'I am learning Italian.'],
  [220, 'insegnare', 'verbo', 'to teach', 'scuola', 'Insegna alle elementari.', 'She teaches at primary school.'],
  [221, 'usare', 'verbo', 'to use', 'azioni', 'Posso usare il tuo telefono?', 'Can I use your phone?'],
  [222, 'funzionare', 'verbo', 'to work, to function', 'azioni', 'Non funziona.', 'It is not working.'],
  [223, 'costruire', 'verbo', 'to build', 'azioni', 'Stanno costruendo una casa.', 'They are building a house.'],
  [224, 'cucinare', 'verbo', 'to cook', 'cibo', 'Cucino io stasera.', 'I am cooking tonight.'],
  [225, 'pulire', 'verbo', 'to clean', 'casa', 'Devo pulire la cucina.', 'I have to clean the kitchen.'],
  [226, 'lavare', 'verbo', 'to wash', 'casa', 'Lavo i piatti.', 'I am washing the dishes.'],
  [227, 'affittare', 'verbo', 'to rent', 'casa', 'Affitto una stanza.', 'I rent a room.'],
  [228, 'prenotare', 'verbo', 'to book, to reserve', 'viaggio', 'Ho prenotato un tavolo.', 'I have booked a table.'],
  [229, 'viaggiare', 'verbo', 'to travel', 'viaggio', 'Viaggio spesso per lavoro.', 'I travel often for work.'],
  [230, 'guidare', 'verbo', 'to drive', 'viaggio', 'Non so guidare.', 'I cannot drive.'],
  [231, 'ricevere', 'verbo', 'to receive', 'azioni', 'Ho ricevuto la tua mail.', 'I received your email.'],
  [232, 'mandare', 'verbo', 'to send', 'azioni', 'Ti mando un messaggio.', 'I will send you a message.'],
  [233, 'spedire', 'verbo', 'to send, to ship', 'acquisti', 'Devo spedire un pacco.', 'I need to send a parcel.'],
  [234, 'firmare', 'verbo', 'to sign', 'lavoro', 'Firmi qui, per favore.', 'Sign here, please.'],
  [235, 'decidere', 'verbo', 'to decide', 'azioni', 'Decidi tu.', 'You decide.'],
  [236, 'scegliere', 'verbo', 'to choose', 'azioni', 'Non so cosa scegliere.', 'I do not know what to choose.'],
  [237, 'sperare', 'verbo', 'to hope', 'sentimenti', 'Spero di sì.', 'I hope so.'],
  [238, 'preoccuparsi', 'verbo', 'to worry', 'sentimenti', 'Non ti preoccupare.', 'Do not worry.'],
  [239, 'divertirsi', 'verbo', 'to enjoy oneself', 'sentimenti', 'Ti sei divertito?', 'Did you enjoy yourself?'],
  [240, 'arrabbiarsi', 'verbo', 'to get angry', 'sentimenti', 'Non ti arrabbiare.', 'Do not get angry.'],

  // ── lavoro e vita pratica ──
  [241, 'ufficio', 'sostantivo', 'office', 'lavoro', 'Sono in ufficio fino alle sei.', 'I am in the office until six.', 'm'],
  [242, 'collega', 'sostantivo', 'colleague', 'lavoro', 'Un collega di lavoro.', 'A work colleague.', 'm'],
  [243, 'riunione', 'sostantivo', 'meeting', 'lavoro', 'Ho una riunione alle tre.', 'I have a meeting at three.', 'f'],
  [244, 'appuntamento', 'sostantivo', 'appointment', 'lavoro', 'Ho un appuntamento dal medico.', 'I have a doctor’s appointment.', 'm'],
  [245, 'stipendio', 'sostantivo', 'salary', 'lavoro', 'Lo stipendio non è alto.', 'The salary is not high.', 'm'],
  [246, 'contratto', 'sostantivo', 'contract', 'lavoro', 'Ho firmato il contratto.', 'I signed the contract.', 'm'],
  [247, 'documento', 'sostantivo', 'document; ID', 'lavoro', 'Mi serve un documento.', 'I need a form of ID.', 'm'],
  [248, 'modulo', 'sostantivo', 'form', 'lavoro', 'Compili questo modulo.', 'Fill in this form.', 'm'],
  [249, 'problema', 'sostantivo', 'problem', 'azioni', 'Nessun problema.', 'No problem.', 'm'],
  [250, 'idea', 'sostantivo', 'idea', 'azioni', 'Bella idea!', 'Good idea!', 'f'],
  [251, 'motivo', 'sostantivo', 'reason', 'azioni', 'Per quale motivo?', 'For what reason?', 'm'],
  [252, 'esempio', 'sostantivo', 'example', 'scuola', 'Per esempio, questo.', 'For example, this one.', 'm'],
  [253, 'domanda', 'sostantivo', 'question', 'scuola', 'Posso farti una domanda?', 'Can I ask you a question?', 'f'],
  [254, 'risposta', 'sostantivo', 'answer', 'scuola', 'Aspetto una risposta.', 'I am waiting for an answer.', 'f'],
  [255, 'lezione', 'sostantivo', 'lesson, class', 'scuola', 'La lezione comincia alle nove.', 'The class starts at nine.', 'f'],
  [256, 'esame', 'sostantivo', 'exam', 'scuola', 'Ho passato l’esame.', 'I passed the exam.', 'm'],
  [257, 'corso', 'sostantivo', 'course', 'scuola', 'Faccio un corso di italiano.', 'I am doing an Italian course.', 'm'],

  // ── acquisti e servizi ──
  [258, 'mercato', 'sostantivo', 'market', 'acquisti', 'Vado al mercato il sabato.', 'I go to the market on Saturdays.', 'm'],
  [259, 'supermercato', 'sostantivo', 'supermarket', 'acquisti', 'Passo al supermercato.', 'I will stop at the supermarket.', 'm'],
  [260, 'cassa', 'sostantivo', 'till, checkout', 'acquisti', 'Si paga alla cassa.', 'You pay at the till.', 'f'],
  [261, 'scontrino', 'sostantivo', 'receipt', 'acquisti', 'Tenga lo scontrino.', 'Keep the receipt.', 'm'],
  [262, 'carta', 'sostantivo', 'card; paper', 'acquisti', 'Pago con la carta.', 'I will pay by card.', 'f'],
  [263, 'resto', 'sostantivo', 'change (money)', 'acquisti', 'Tenga il resto.', 'Keep the change.', 'm'],
  [264, 'sconto', 'sostantivo', 'discount', 'acquisti', 'C’è uno sconto del venti per cento.', 'There is a twenty per cent discount.', 'm'],
  [265, 'taglia', 'sostantivo', 'size (clothing)', 'acquisti', 'Avete una taglia più grande?', 'Do you have a bigger size?', 'f'],
  [266, 'vestito', 'sostantivo', 'dress; suit', 'acquisti', 'Un vestito nero.', 'A black dress.', 'm'],
  [267, 'scarpa', 'sostantivo', 'shoe', 'acquisti', 'Queste scarpe sono strette.', 'These shoes are tight.', 'f'],
  [268, 'borsa', 'sostantivo', 'bag', 'acquisti', 'Ho lasciato la borsa in macchina.', 'I left my bag in the car.', 'f'],
  [269, 'regalo', 'sostantivo', 'present, gift', 'acquisti', 'È un regalo per mia madre.', 'It is a present for my mother.', 'm'],

  // ── corpo, salute, sentimenti ──
  [270, 'braccio', 'sostantivo', 'arm', 'corpo e salute', 'Mi fa male il braccio.', 'My arm hurts.', 'm'],
  [271, 'gamba', 'sostantivo', 'leg', 'corpo e salute', 'In gamba!', 'Take care! / Well done!', 'f'],
  [272, 'schiena', 'sostantivo', 'back', 'corpo e salute', 'Ho mal di schiena.', 'I have backache.', 'f'],
  [273, 'gola', 'sostantivo', 'throat', 'corpo e salute', 'Ho mal di gola.', 'I have a sore throat.', 'f'],
  [274, 'febbre', 'sostantivo', 'fever, temperature', 'corpo e salute', 'Ho la febbre.', 'I have a temperature.', 'f'],
  [275, 'farmacia', 'sostantivo', 'pharmacy', 'corpo e salute', 'La farmacia è aperta?', 'Is the pharmacy open?', 'f'],
  [276, 'ospedale', 'sostantivo', 'hospital', 'corpo e salute', 'Lavora in ospedale.', 'She works in a hospital.', 'm'],
  [277, 'ricetta', 'sostantivo', 'prescription; recipe', 'corpo e salute', 'Serve la ricetta.', 'You need a prescription.', 'f'],
  [278, 'paura', 'sostantivo', 'fear', 'sentimenti', 'Ho paura di volare.', 'I am afraid of flying.', 'f'],
  [279, 'fame', 'sostantivo', 'hunger', 'sentimenti', 'Ho fame.', 'I am hungry.', 'f'],
  [280, 'sete', 'sostantivo', 'thirst', 'sentimenti', 'Ho sete.', 'I am thirsty.', 'f'],
  [281, 'sonno', 'sostantivo', 'sleepiness', 'sentimenti', 'Ho sonno.', 'I am sleepy.', 'm'],
  [282, 'fretta', 'sostantivo', 'hurry', 'tempo', 'Ho fretta, scusa.', 'I am in a hurry, sorry.', 'f'],
  [283, 'bisogno', 'sostantivo', 'need', 'azioni', 'Ho bisogno di aiuto.', 'I need help.', 'm'],
  [284, 'ragione', 'sostantivo', 'reason; being right', 'azioni', 'Hai ragione.', 'You are right.', 'f'],
  [285, 'torto', 'sostantivo', 'being wrong', 'azioni', 'Ho torto io.', 'I am the one who is wrong.', 'm'],

  // ── tempo e meteo ──
  [286, 'stagione', 'sostantivo', 'season', 'tempo', 'La mia stagione preferita.', 'My favourite season.', 'f'],
  [287, 'estate', 'sostantivo', 'summer', 'tempo', 'In estate fa caldo.', 'In summer it is hot.', 'f'],
  [288, 'inverno', 'sostantivo', 'winter', 'tempo', 'D’inverno nevica.', 'In winter it snows.', 'm'],
  [289, 'sole', 'sostantivo', 'sun', 'tempo', 'C’è il sole.', 'It is sunny.', 'm'],
  [290, 'pioggia', 'sostantivo', 'rain', 'tempo', 'Con questa pioggia non esco.', 'With this rain I am not going out.', 'f'],
  [291, 'caldo', 'aggettivo', 'hot, warm', 'tempo', 'Fa caldo oggi.', 'It is hot today.'],
  [292, 'freddo', 'aggettivo', 'cold', 'tempo', 'Ho freddo.', 'I am cold.'],
  [293, 'minuto', 'sostantivo', 'minute', 'tempo', 'Aspetta un minuto.', 'Wait a minute.', 'm'],
  [294, 'momento', 'sostantivo', 'moment', 'tempo', 'Un momento, per favore.', 'One moment, please.', 'm'],
  [295, 'ritardo', 'sostantivo', 'delay', 'viaggio', 'Il treno è in ritardo.', 'The train is late.', 'm'],

  // ── qualità ──
  [296, 'giusto', 'aggettivo', 'right, correct; fair', 'qualità', 'Mi sembra giusto.', 'That seems right to me.'],
  [297, 'sbagliato', 'aggettivo', 'wrong', 'qualità', 'Ho preso il treno sbagliato.', 'I took the wrong train.'],
  [298, 'pronto', 'aggettivo', 'ready; hello (on the phone)', 'qualità', 'Pronto? Chi parla?', 'Hello? Who is speaking?'],
  [299, 'aperto', 'aggettivo', 'open', 'qualità', 'Il museo è aperto la domenica.', 'The museum is open on Sundays.'],
  [300, 'chiuso', 'aggettivo', 'closed', 'qualità', 'Oggi è chiuso.', 'It is closed today.'],
  [301, 'pieno', 'aggettivo', 'full', 'quantità', 'Il locale è pieno.', 'The place is full.'],
  [302, 'vuoto', 'aggettivo', 'empty', 'quantità', 'La strada era vuota.', 'The street was empty.'],
  [303, 'lungo', 'aggettivo', 'long', 'qualità', 'Un viaggio lungo.', 'A long journey.'],
  [304, 'corto', 'aggettivo', 'short', 'qualità', 'I capelli corti.', 'Short hair.'],
  [305, 'forte', 'aggettivo', 'strong; loud', 'qualità', 'Parla più forte.', 'Speak louder.'],
  [306, 'sicuro', 'aggettivo', 'sure; safe', 'qualità', 'Sei sicuro?', 'Are you sure?'],
  [307, 'possibile', 'aggettivo', 'possible', 'qualità', 'Il prima possibile.', 'As soon as possible.'],
  [308, 'importante', 'aggettivo', 'important', 'qualità', 'È molto importante.', 'It is very important.'],
  [309, 'diverso', 'aggettivo', 'different', 'qualità', 'È diverso da quello che pensavo.', 'It is different from what I thought.'],
  [310, 'uguale', 'aggettivo', 'the same, equal', 'qualità', 'Per me è uguale.', 'It makes no difference to me.'],
  [311, 'gentile', 'aggettivo', 'kind', 'persone', 'Molto gentile, grazie.', 'Very kind of you, thank you.'],
  [312, 'bravo', 'aggettivo', 'good at something', 'persone', 'Sei bravo in italiano.', 'You are good at Italian.'],
  [313, 'occupato', 'aggettivo', 'busy; taken', 'qualità', 'È occupato questo posto?', 'Is this seat taken?'],
  [314, 'disponibile', 'aggettivo', 'available', 'qualità', 'Sono disponibile giovedì.', 'I am available on Thursday.'],

  // ── connettivi e avverbi di frequenza ──
  [315, 'spesso', 'avverbio', 'often', 'tempo', 'Ci vado spesso.', 'I go there often.'],
  [316, 'qualche volta', 'espressione', 'sometimes', 'tempo', 'Qualche volta esco la sera.', 'Sometimes I go out in the evening.'],
  [317, 'di solito', 'espressione', 'usually', 'tempo', 'Di solito pranzo all’una.', 'I usually have lunch at one.'],
  [318, 'quasi', 'avverbio', 'almost', 'quantità', 'Ho quasi finito.', 'I have almost finished.'],
  [319, 'circa', 'avverbio', 'about, approximately', 'quantità', 'Costa circa venti euro.', 'It costs about twenty euros.'],
  [320, 'almeno', 'avverbio', 'at least', 'quantità', 'Almeno ci hai provato.', 'At least you tried.'],
  [321, 'davvero', 'avverbio', 'really', 'qualità', 'Davvero? Non lo sapevo.', 'Really? I did not know.'],
  [322, 'forse', 'avverbio', 'maybe', 'qualità', 'Forse vengo anch’io.', 'Maybe I will come too.'],
  [323, 'certo', 'avverbio', 'of course', 'qualità', 'Certo, volentieri.', 'Of course, gladly.'],
  [324, 'purtroppo', 'avverbio', 'unfortunately', 'qualità', 'Purtroppo non posso.', 'Unfortunately I cannot.'],
  [325, 'invece', 'avverbio', 'instead; on the other hand', 'grammaticali', 'Io invece preferisco restare.', 'I, on the other hand, prefer to stay.'],
  [326, 'mentre', 'congiunzione', 'while', 'tempo', 'Mentre aspettavo, ho letto.', 'While I was waiting, I read.'],
  [327, 'appena', 'avverbio', 'just; as soon as', 'tempo', 'Sono appena arrivato.', 'I have just arrived.'],
  [328, 'finalmente', 'avverbio', 'at last', 'tempo', 'Finalmente sei qui!', 'You are here at last!'],
  [329, 'soprattutto', 'avverbio', 'above all', 'quantità', 'Soprattutto d’estate.', 'Especially in summer.'],
  [330, 'insomma', 'avverbio', 'in short; so-so', 'grammaticali', 'Insomma, non è andata bene.', 'In short, it did not go well.'],
];

export const LEXICON: LexEntry[] = [...expand(A1_ROWS, 'A1'), ...expand(A2_ROWS, 'A2')];

/** The size of the core we are building toward — De Mauro's fondamentale, roughly. */
export const LEXICON_TARGET = 1000;

export const lexiconByLevel = (level: Level) => LEXICON.filter((e) => e.level === level);

export const lexById = new Map(LEXICON.map((e) => [e.id, e]));

/** Nouns that exist only in the plural, so they take a plural article. */
const PLURAL_ONLY = new Set(['soldi']);

/**
 * The definite article a noun actually takes. Italian picks it by the *sound*
 * that follows, not by gender alone, so `il` + lemma is wrong roughly as often
 * as it is right: it produces «la acqua», «il euro», «il studente».
 */
export function withArticle(entry: LexEntry): string {
  if (entry.pos !== 'sostantivo' || !entry.gender) return entry.lemma;
  const word = entry.lemma;

  if (PLURAL_ONLY.has(word)) return `${entry.gender === 'f' ? 'le' : 'i'} ${word}`;
  // Both genders elide before a vowel: l'acqua, l'euro, l'amico.
  if (/^[aeiouàèéìòóù]/i.test(word)) return `l'${word}`;
  if (entry.gender === 'f') return `la ${word}`;
  // Masculine lo before s+consonant, z, gn, ps, pn, x, y.
  if (/^(s[^aeiouàèéìòóù]|z|gn|ps|pn|x|y)/i.test(word)) return `lo ${word}`;
  return `il ${word}`;
}

/** Clusters present at a level, each with its entries, ordered by frequency. */
export function clustersFor(level: Level): { cluster: LexCluster; entries: LexEntry[] }[] {
  const map = new Map<LexCluster, LexEntry[]>();
  for (const entry of lexiconByLevel(level)) {
    const list = map.get(entry.cluster) ?? [];
    list.push(entry);
    map.set(entry.cluster, list);
  }
  return [...map.entries()]
    .map(([cluster, entries]) => ({ cluster, entries: entries.sort((a, b) => a.rank - b.rank) }))
    .sort((a, b) => a.entries[0].rank - b.entries[0].rank);
}
