import type { Article } from './types';

export const ARTICLES: Article[] = [
  // ─────────────────────────────── A2 ───────────────────────────────
  {
    id: 'a2-caffe',
    level: 'A2',
    title: 'Il caffè al bancone',
    titleEn: 'Coffee at the counter',
    category: 'Costume',
    minutes: 3,
    paragraphs: [
      {
        it: 'In Italia il caffè si prende quasi sempre al bancone. Entri nel bar, paghi alla cassa e poi dai lo scontrino al barista. Tutto succede in pochi minuti.',
        en: 'In Italy coffee is almost always taken at the counter. You go into the bar, pay at the till and then give the receipt to the barista. It all happens in a few minutes.',
      },
      {
        it: 'Il prezzo cambia molto: al bancone un espresso costa circa un euro e venti, ma se ti siedi al tavolo puoi pagare il doppio o il triplo. Nelle piazze famose il servizio al tavolo è ancora più caro.',
        en: 'The price changes a lot: at the counter an espresso costs about one euro twenty, but if you sit at a table you can pay double or triple. In famous squares table service is even more expensive.',
      },
      {
        it: 'La mattina il bar è molto affollato. Molte persone prendono un cappuccino e un cornetto prima di andare al lavoro. Dopo mezzogiorno, però, gli italiani non bevono quasi mai il cappuccino: preferiscono un caffè normale.',
        en: 'In the morning the bar is very crowded. Many people have a cappuccino and a croissant before going to work. After midday, though, Italians almost never drink cappuccino: they prefer a regular coffee.',
      },
      {
        it: 'Se hai fretta, puoi dire semplicemente «un caffè, per favore». Non devi spiegare altro: un caffè significa sempre un espresso. E se vuoi qualcosa di diverso, devi dirlo subito: macchiato, lungo, corretto.',
        en: 'If you are in a hurry, you can simply say "un caffè, per favore". You do not need to explain anything else: un caffè always means an espresso. And if you want something different, you have to say so straight away: macchiato, lungo, corretto.',
      },
      {
        it: 'Il caffè non è solo una bevanda: è una pausa breve, spesso condivisa con i colleghi. Per questo molti italiani lo bevono in piedi, parlano due minuti e poi tornano subito al lavoro.',
        en: 'Coffee is not just a drink: it is a short break, often shared with colleagues. That is why many Italians drink it standing up, talk for two minutes and then go straight back to work.',
      },
    ],
    glossary: [
      { term: 'lo scontrino', gloss: 'the receipt' },
      { term: 'il bancone', gloss: 'the counter' },
      { term: 'affollato', gloss: 'crowded' },
      { term: 'avere fretta', gloss: 'to be in a hurry' },
      { term: 'la pausa', gloss: 'the break' },
    ],
    questions: [
      {
        id: 'a2-caffe-q1',
        prompt: 'Che cosa fai prima di ricevere il caffè?',
        options: ['Paghi alla cassa e dai lo scontrino al barista', 'Ti siedi al tavolo e aspetti', 'Paghi il barista alla fine', 'Prenoti il caffè online'],
        answer: 0,
        explanation: 'Il testo dice: «paghi alla cassa e poi dai lo scontrino al barista».',
      },
      {
        id: 'a2-caffe-q2',
        prompt: 'Perché il caffè al tavolo costa di più?',
        options: ['Perché il caffè è diverso', 'Perché si paga anche il servizio al tavolo', 'Perché il bar è affollato', 'Perché è la mattina'],
        answer: 1,
        explanation: 'Il prezzo più alto è legato al servizio al tavolo, non alla qualità del caffè.',
      },
      {
        id: 'a2-caffe-q3',
        prompt: 'Quando gli italiani non bevono quasi mai il cappuccino?',
        options: ['La mattina presto', 'Dopo mezzogiorno', 'Durante la pausa', 'Il fine settimana'],
        answer: 1,
        explanation: '«Dopo mezzogiorno, però, gli italiani non bevono quasi mai il cappuccino».',
      },
    ],
  },
  {
    id: 'a2-treno',
    level: 'A2',
    title: 'Prendere il treno in Italia',
    titleEn: 'Taking the train in Italy',
    category: 'Viaggi',
    minutes: 3,
    paragraphs: [
      {
        it: 'Viaggiare in treno in Italia è comodo e spesso economico. Ci sono treni veloci che collegano le grandi città e treni regionali che fermano in tutti i paesi piccoli.',
        en: 'Travelling by train in Italy is convenient and often cheap. There are fast trains that connect the big cities and regional trains that stop in all the small towns.',
      },
      {
        it: 'Per i treni veloci devi prenotare il posto: il biglietto vale solo per quel treno e per quell\'ora. Se perdi il treno, di solito devi comprare un altro biglietto.',
        en: 'For fast trains you have to reserve a seat: the ticket is only valid for that train and that time. If you miss the train, you usually have to buy another ticket.',
      },
      {
        it: 'I treni regionali funzionano in modo diverso. Il biglietto non ha un posto riservato, ma devi convalidarlo prima di salire. Le macchinette per la convalida sono verdi o bianche e si trovano vicino ai binari.',
        en: 'Regional trains work differently. The ticket does not have a reserved seat, but you must validate it before boarding. The validation machines are green or white and are near the platforms.',
      },
      {
        it: 'Attenzione: se sali senza convalidare il biglietto, il controllore può darti una multa. Oggi però molti viaggiatori comprano il biglietto con l\'app e in quel caso la convalida non serve.',
        en: 'Careful: if you board without validating your ticket, the inspector can give you a fine. Today, though, many travellers buy their ticket with the app and in that case validation is not needed.',
      },
      {
        it: 'In stazione, guarda sempre il tabellone delle partenze. Il binario può cambiare all\'ultimo momento e gli annunci sono spesso solo in italiano.',
        en: 'At the station, always check the departures board. The platform can change at the last moment and announcements are often only in Italian.',
      },
    ],
    glossary: [
      { term: 'il binario', gloss: 'the platform / track' },
      { term: 'convalidare', gloss: 'to validate (a ticket)' },
      { term: 'il controllore', gloss: 'the ticket inspector' },
      { term: 'la multa', gloss: 'the fine' },
      { term: 'il tabellone', gloss: 'the departures board' },
    ],
    questions: [
      {
        id: 'a2-treno-q1',
        prompt: 'Che cosa devi fare con il biglietto di un treno regionale?',
        options: ['Prenotare il posto', 'Convalidarlo prima di salire', 'Darlo al barista', 'Comprarlo sul treno'],
        answer: 1,
        explanation: 'Per i regionali il biglietto va convalidato prima di salire.',
      },
      {
        id: 'a2-treno-q2',
        prompt: 'Che cosa succede se sali senza convalidare?',
        options: ['Niente', 'Il treno non parte', 'Il controllore può darti una multa', 'Devi cambiare binario'],
        answer: 2,
        explanation: '«il controllore può darti una multa».',
      },
      {
        id: 'a2-treno-q3',
        prompt: 'Perché è importante guardare il tabellone?',
        options: ['Perché il binario può cambiare', 'Perché il biglietto costa meno', 'Perché il treno è affollato', 'Perché gli annunci sono in inglese'],
        answer: 0,
        explanation: '«Il binario può cambiare all\'ultimo momento».',
      },
    ],
  },
  {
    id: 'a2-mercato',
    level: 'A2',
    title: 'Il mercato del sabato',
    titleEn: 'Saturday market',
    category: 'Vita quotidiana',
    minutes: 3,
    paragraphs: [
      {
        it: 'Quasi ogni città italiana ha un mercato settimanale. In molti paesi è il sabato mattina, e comincia molto presto: alle sette i banchi sono già pronti.',
        en: 'Almost every Italian town has a weekly market. In many places it is on Saturday morning, and it starts very early: by seven the stalls are already set up.',
      },
      {
        it: 'Al mercato si comprano frutta e verdura di stagione, formaggi, pesce e anche vestiti. I prezzi sono spesso più bassi del supermercato, ma la cosa più importante è la qualità dei prodotti freschi.',
        en: 'At the market you buy seasonal fruit and vegetables, cheeses, fish and clothes too. Prices are often lower than the supermarket, but the most important thing is the quality of the fresh produce.',
      },
      {
        it: 'I venditori parlano ad alta voce per attirare i clienti. Se non sai quale prodotto scegliere, puoi chiedere un consiglio: «Sono buone queste pesche?» In genere ti rispondono con piacere.',
        en: 'The sellers speak loudly to attract customers. If you do not know which product to choose, you can ask for advice: "Are these peaches good?" They usually answer gladly.',
      },
      {
        it: 'Una regola importante: in molti banchi non si toccano la frutta e la verdura. Devi dire quello che vuoi e il venditore lo prende per te.',
        en: 'An important rule: at many stalls you do not touch the fruit and vegetables. You say what you want and the seller picks it for you.',
      },
      {
        it: 'Verso l\'una il mercato chiude. Gli ultimi prezzi sono i migliori, perché i venditori preferiscono vendere tutto invece di riportare la merce a casa.',
        en: 'Around one o\'clock the market closes. The last prices are the best, because the sellers prefer to sell everything rather than take the goods back home.',
      },
    ],
    glossary: [
      { term: 'il banco', gloss: 'the market stall' },
      { term: 'di stagione', gloss: 'seasonal' },
      { term: 'il venditore', gloss: 'the seller' },
      { term: 'un consiglio', gloss: 'a piece of advice' },
      { term: 'la merce', gloss: 'the goods' },
    ],
    questions: [
      {
        id: 'a2-mercato-q1',
        prompt: 'A che ora sono pronti i banchi?',
        options: ['Alle cinque', 'Alle sette', "All'una", 'A mezzogiorno'],
        answer: 1,
        explanation: '«alle sette i banchi sono già pronti».',
      },
      {
        id: 'a2-mercato-q2',
        prompt: 'Che cosa non devi fare in molti banchi?',
        options: ['Parlare con il venditore', 'Toccare la frutta e la verdura', 'Chiedere il prezzo', 'Pagare in contanti'],
        answer: 1,
        explanation: '«in molti banchi non si toccano la frutta e la verdura».',
      },
      {
        id: 'a2-mercato-q3',
        prompt: 'Perché alla fine i prezzi sono più bassi?',
        options: ['Perché la merce è vecchia', 'Perché ci sono pochi clienti', 'Perché i venditori non vogliono riportare la merce a casa', 'Perché il mercato è affollato'],
        answer: 2,
        explanation: 'I venditori «preferiscono vendere tutto invece di riportare la merce a casa».',
      },
    ],
  },

  // ─────────────────────────────── B1 ───────────────────────────────
  {
    id: 'b1-cena',
    level: 'B1',
    title: 'Perché in Italia si cena tardi',
    titleEn: 'Why Italians eat dinner late',
    category: 'Società',
    minutes: 4,
    paragraphs: [
      {
        it: 'Chi arriva in Italia dal Nord Europa nota subito una differenza: i ristoranti aprono per cena verso le diciannove e trenta, ma la sala si riempie davvero solo dopo le venti e mezza. Nel Sud si può cenare anche alle ventidue senza sembrare strani.',
        en: 'Anyone arriving in Italy from Northern Europe notices a difference immediately: restaurants open for dinner around 7.30 p.m., but the room only really fills up after 8.30. In the South you can have dinner as late as 10 p.m. without seeming odd.',
      },
      {
        it: 'Le ragioni non sono soltanto culturali. Il clima ha avuto un ruolo importante: nelle regioni meridionali, d\'estate, fino a tardi fa troppo caldo per mettersi a tavola. Si aspetta che la temperatura scenda e che la giornata diventi vivibile.',
        en: 'The reasons are not only cultural. Climate has played an important role: in the southern regions, in summer, it stays too hot to sit down to eat until late. People wait for the temperature to drop and the day to become bearable.',
      },
      {
        it: 'C\'è poi la questione degli orari di lavoro. In molte città la pausa pranzo è lunga e i negozi riaprono nel pomeriggio fino alle diciannove e trenta o alle venti. Chi lavora al banco di un negozio non può certo cenare alle diciotto.',
        en: 'Then there is the question of working hours. In many cities the lunch break is long and shops reopen in the afternoon until 7.30 or 8 p.m. Someone working behind a shop counter certainly cannot have dinner at 6 p.m.',
      },
      {
        it: 'Anche la struttura dei pasti conta. Il pranzo italiano è spesso il pasto principale della giornata, quindi non si ha fame presto. Nel pomeriggio, al massimo, si fa una merenda leggera che permette di arrivare tranquilli fino a sera.',
        en: 'The structure of meals matters too. Italian lunch is often the main meal of the day, so people are not hungry early. In the afternoon, at most, there is a light snack that lets you comfortably make it to the evening.',
      },
      {
        it: 'Negli ultimi anni, però, qualcosa sta cambiando. Chi lavora in ufficio con orari continuati mangia un panino veloce a mezzogiorno e arriva a casa affamato. Non sorprende che nelle grandi città del Nord l\'ora della cena si stia lentamente spostando indietro.',
        en: 'In recent years, though, something has been changing. People working in offices with continuous hours eat a quick sandwich at midday and get home hungry. It is no surprise that in the big northern cities dinner time is slowly moving earlier.',
      },
    ],
    glossary: [
      { term: 'riempirsi', gloss: 'to fill up' },
      { term: "l'orario continuato", gloss: 'continuous working hours (no long break)' },
      { term: 'la merenda', gloss: 'afternoon snack' },
      { term: 'vivibile', gloss: 'liveable, bearable' },
      { term: 'spostarsi', gloss: 'to shift, to move' },
    ],
    questions: [
      {
        id: 'b1-cena-q1',
        prompt: 'Secondo il testo, quale fattore climatico influenza l\'orario della cena al Sud?',
        options: ['La pioggia frequente', 'Il caldo che dura fino a tardi', 'Il vento serale', "L'umidità invernale"],
        answer: 1,
        explanation: 'Nel Sud «fino a tardi fa troppo caldo per mettersi a tavola».',
      },
      {
        id: 'b1-cena-q2',
        prompt: 'Perché gli italiani non hanno fame presto la sera?',
        options: ['Perché saltano il pranzo', 'Perché il pranzo è spesso il pasto principale', 'Perché cenano due volte', 'Perché fanno colazione tardi'],
        answer: 1,
        explanation: 'Il pranzo è «spesso il pasto principale della giornata, quindi non si ha fame presto».',
      },
      {
        id: 'b1-cena-q3',
        prompt: 'Che cosa sta cambiando nelle grandi città del Nord?',
        options: ["L'ora della cena si sta spostando indietro", 'I ristoranti chiudono prima', 'La merenda è sparita', 'Il pranzo è diventato più lungo'],
        answer: 0,
        explanation: "«l'ora della cena si stia lentamente spostando indietro»: cioè più presto.",
      },
    ],
  },
  {
    id: 'b1-art-tirocinio',
    level: 'B1',
    title: 'Il tirocinio: primo passo o trappola?',
    titleEn: 'The internship: first step or trap?',
    category: 'Lavoro',
    minutes: 4,
    paragraphs: [
      {
        it: 'Per molti giovani italiani il tirocinio è il primo contatto reale con il mondo del lavoro. Si entra in azienda per tre o sei mesi, si impara un mestiere e, nel migliore dei casi, si riceve un\'offerta di assunzione.',
        en: 'For many young Italians the internship is their first real contact with the world of work. You join a company for three or six months, learn a trade and, in the best cases, receive a job offer.',
      },
      {
        it: 'Il problema è che non tutti i tirocini sono uguali. Alcuni sono seriamente formativi: c\'è un tutor, ci sono obiettivi chiari e il tirocinante lavora accanto a colleghi esperti. Altri, invece, servono soltanto a coprire un ruolo vero pagando pochissimo.',
        en: 'The problem is that not all internships are alike. Some are genuinely educational: there is a tutor, there are clear objectives and the intern works alongside experienced colleagues. Others, however, merely serve to fill a real role while paying very little.',
      },
      {
        it: 'Le associazioni giovanili denunciano da anni questa seconda categoria. Se un\'azienda affida a un tirocinante le stesse responsabilità di un dipendente, allora si tratta di lavoro, e come tale andrebbe retribuito.',
        en: 'Youth associations have been denouncing this second category for years. If a company gives an intern the same responsibilities as an employee, then it is work, and as such it should be paid.',
      },
      {
        it: 'Come si riconosce un buon tirocinio prima di accettarlo? Conviene fare domande precise al colloquio: chi sarà il tutor, quali compiti verranno affidati, quante persone sono state assunte dopo il tirocinio negli ultimi due anni. Le risposte vaghe sono già una risposta.',
        en: 'How can you recognise a good internship before accepting it? It is worth asking precise questions at the interview: who the tutor will be, what tasks will be assigned, how many people have been hired after their internship in the last two years. Vague answers are themselves an answer.',
      },
      {
        it: 'Resta il fatto che un\'esperienza ben scelta, anche breve, vale più di mesi passati a fare fotocopie. Il tirocinio dovrebbe insegnare qualcosa che non si impara all\'università: come funziona davvero un\'organizzazione.',
        en: 'The fact remains that a well-chosen experience, even a short one, is worth more than months spent photocopying. An internship should teach something you do not learn at university: how an organisation actually works.',
      },
    ],
    glossary: [
      { term: 'il tirocinante', gloss: 'the intern' },
      { term: "l'assunzione", gloss: 'hiring, recruitment' },
      { term: 'retribuire', gloss: 'to pay (for work)' },
      { term: 'affidare', gloss: 'to entrust, to assign' },
      { term: 'vago', gloss: 'vague' },
    ],
    questions: [
      {
        id: 'b1-tiro-q1',
        prompt: 'Che cosa caratterizza un tirocinio seriamente formativo?',
        options: ['Uno stipendio alto', 'Un tutor e obiettivi chiari', 'La durata di un anno', 'Il lavoro da casa'],
        answer: 1,
        explanation: '«c\'è un tutor, ci sono obiettivi chiari e il tirocinante lavora accanto a colleghi esperti».',
      },
      {
        id: 'b1-tiro-q2',
        prompt: "Secondo le associazioni giovanili, quando un tirocinio andrebbe retribuito come lavoro?",
        options: ['Sempre, senza eccezioni', 'Quando dura più di sei mesi', 'Quando il tirocinante ha le responsabilità di un dipendente', "Quando l'azienda è grande"],
        answer: 2,
        explanation: '«Se un\'azienda affida a un tirocinante le stesse responsabilità di un dipendente, allora si tratta di lavoro».',
      },
      {
        id: 'b1-tiro-q3',
        prompt: 'Come interpretare le risposte vaghe di un\'azienda al colloquio?',
        options: ['Come un buon segno', 'Come una risposta negativa in sé', 'Come una formalità', 'Come una richiesta di pazienza'],
        answer: 1,
        explanation: '«Le risposte vaghe sono già una risposta»: cioè un segnale negativo.',
      },
    ],
  },
  {
    id: 'b1-borghi',
    level: 'B1',
    title: 'I borghi che tornano a vivere',
    titleEn: 'Villages coming back to life',
    category: 'Territorio',
    minutes: 4,
    paragraphs: [
      {
        it: 'Negli ultimi decenni migliaia di piccoli borghi italiani si sono svuotati. I giovani se ne sono andati verso le città, le scuole hanno chiuso e molte case sono rimaste vuote per anni.',
        en: 'In recent decades thousands of small Italian villages have emptied out. Young people left for the cities, schools closed and many houses stood empty for years.',
      },
      {
        it: 'Alcuni comuni hanno provato a reagire con un\'idea che ha fatto il giro del mondo: vendere le case abbandonate a un euro. In cambio, chi compra deve impegnarsi a ristrutturare l\'immobile entro un tempo stabilito.',
        en: 'Some municipalities tried to react with an idea that travelled around the world: selling abandoned houses for one euro. In exchange, the buyer must commit to renovating the property within a set time.',
      },
      {
        it: 'L\'iniziativa ha attirato molta attenzione, ma i risultati sono contrastanti. La casa costa un euro, è vero, ma i lavori possono superare i cinquantamila. Chi arriva senza rendersi conto dei costi reali spesso rinuncia dopo pochi mesi.',
        en: 'The initiative attracted a lot of attention, but the results are mixed. The house costs one euro, true, but the works can exceed fifty thousand. Those who arrive without realising the real costs often give up after a few months.',
      },
      {
        it: 'I casi riusciti hanno qualcosa in comune: non puntano solo sulle case, ma sui servizi. Dove è tornata una scuola, un medico o una connessione internet affidabile, sono tornate anche le famiglie. Il lavoro da remoto ha aiutato più di qualsiasi sconto immobiliare.',
        en: 'The successful cases have something in common: they do not bet only on houses, but on services. Where a school, a doctor or a reliable internet connection came back, families came back too. Remote work has helped more than any property discount.',
      },
      {
        it: 'Ripopolare un borgo, insomma, non è un\'operazione immobiliare: è una scommessa sulla qualità della vita quotidiana. Senza servizi, anche la casa più bella resta una seconda casa, abitata solo ad agosto.',
        en: 'Repopulating a village, in short, is not a property operation: it is a bet on the quality of everyday life. Without services, even the most beautiful house remains a second home, lived in only in August.',
      },
    ],
    glossary: [
      { term: 'il borgo', gloss: 'small village, hamlet' },
      { term: 'svuotarsi', gloss: 'to empty out' },
      { term: 'ristrutturare', gloss: 'to renovate' },
      { term: "l'immobile", gloss: 'the property' },
      { term: 'la scommessa', gloss: 'the bet' },
    ],
    questions: [
      {
        id: 'b1-borghi-q1',
        prompt: 'Che cosa deve fare chi compra una casa a un euro?',
        options: ['Viverci tutto l\'anno', 'Ristrutturarla entro un tempo stabilito', 'Aprire un\'attività', 'Pagare le tasse arretrate'],
        answer: 1,
        explanation: '«chi compra deve impegnarsi a ristrutturare l\'immobile entro un tempo stabilito».',
      },
      {
        id: 'b1-borghi-q2',
        prompt: 'Perché molti rinunciano dopo pochi mesi?',
        options: ['Perché il borgo è troppo affollato', 'Perché non avevano capito i costi reali dei lavori', 'Perché la casa non esiste', 'Perché il comune cambia idea'],
        answer: 1,
        explanation: '«Chi arriva senza rendersi conto dei costi reali spesso rinuncia».',
      },
      {
        id: 'b1-borghi-q3',
        prompt: 'Che cosa hanno in comune i casi riusciti?',
        options: ['Puntano sui servizi, non solo sulle case', 'Vendono le case a prezzo pieno', 'Si trovano tutti al Nord', 'Vietano il lavoro da remoto'],
        answer: 0,
        explanation: '«non puntano solo sulle case, ma sui servizi».',
      },
    ],
  },

  // ─────────────────────────────── B2 ───────────────────────────────
  {
    id: 'b2-spopolamento',
    level: 'B2',
    title: 'Lo spopolamento delle aree interne',
    titleEn: 'The depopulation of inland areas',
    category: 'Economia',
    minutes: 5,
    paragraphs: [
      {
        it: 'Il calo demografico italiano non colpisce il territorio in modo uniforme. Mentre le aree metropolitane tengono, o addirittura crescono grazie ai flussi migratori interni, le cosiddette aree interne — montagne, colline appenniniche, entroterra insulare — perdono abitanti a un ritmo che nessuna politica finora è riuscita ad arginare.',
        en: 'Italy\'s demographic decline does not affect the territory uniformly. While metropolitan areas hold steady, or even grow thanks to internal migration flows, the so-called inland areas — mountains, Apennine hills, island hinterlands — are losing inhabitants at a rate that no policy has so far managed to stem.',
      },
      {
        it: 'Il meccanismo è circolare e ben documentato. Quando la popolazione scende sotto una certa soglia, i servizi diventano insostenibili: la scuola accorpa le classi, l\'ufficio postale riduce gli orari, il reparto ospedaliero chiude. Ogni chiusura rende il territorio meno attrattivo e accelera la partenza di chi era rimasto.',
        en: 'The mechanism is circular and well documented. When the population falls below a certain threshold, services become unsustainable: the school merges classes, the post office cuts its hours, the hospital ward closes. Each closure makes the area less attractive and accelerates the departure of those who had stayed.',
      },
      {
        it: 'A rendere il quadro più complesso interviene la composizione anagrafica. Chi parte ha in media trent\'anni; chi resta ne ha più di sessanta. Il risultato è che la perdita di abitanti si traduce quasi immediatamente in una perdita di capacità produttiva e fiscale, mentre la domanda di assistenza aumenta.',
        en: 'Making the picture more complex is the age composition. Those who leave are on average thirty; those who stay are over sixty. The result is that the loss of inhabitants translates almost immediately into a loss of productive and fiscal capacity, while demand for care rises.',
      },
      {
        it: 'Le strategie tentate finora hanno privilegiato gli incentivi economici diretti: bonus per chi si trasferisce, sgravi per chi apre un\'attività. I risultati sono modesti, e il motivo è intuibile. Un incentivo una tantum non compensa l\'assenza di un pediatra a meno di quaranta chilometri.',
        en: 'The strategies attempted so far have favoured direct financial incentives: bonuses for those who move, tax relief for those opening a business. The results are modest, and the reason is easy to see. A one-off incentive does not make up for the absence of a paediatrician within forty kilometres.',
      },
      {
        it: 'Gli studiosi che si occupano del tema insistono su un cambio di prospettiva: smettere di considerare queste zone come un problema da tamponare e cominciare a trattarle come infrastrutture ambientali che l\'intero paese utilizza. La manutenzione del territorio, la gestione dei boschi e la tenuta idrogeologica hanno un valore che non compare nel bilancio comunale, ma che si manifesta con precisione ogni volta che una frana interrompe una strada a valle.',
        en: 'Scholars working on the subject insist on a change of perspective: to stop seeing these areas as a problem to be patched up and start treating them as environmental infrastructure used by the whole country. Land maintenance, forest management and hydrogeological stability have a value that does not appear in the municipal budget, but which shows up precisely every time a landslide cuts a road further down the valley.',
      },
    ],
    glossary: [
      { term: 'lo spopolamento', gloss: 'depopulation' },
      { term: 'la soglia', gloss: 'the threshold' },
      { term: 'accorpare', gloss: 'to merge, to group together' },
      { term: 'gli sgravi', gloss: 'tax relief' },
      { term: 'tamponare', gloss: 'to patch up, to stopgap' },
      { term: 'la frana', gloss: 'the landslide' },
    ],
    questions: [
      {
        id: 'b2-spop-q1',
        prompt: 'Perché il meccanismo descritto viene definito «circolare»?',
        options: [
          'Perché la popolazione torna dopo alcuni anni',
          'Perché ogni chiusura di servizi provoca nuove partenze, che causano altre chiusure',
          'Perché riguarda solo le isole',
          'Perché i flussi migratori sono stagionali',
        ],
        answer: 1,
        explanation: 'Meno abitanti → meno servizi → territorio meno attrattivo → altre partenze.',
      },
      {
        id: 'b2-spop-q2',
        prompt: 'Perché gli incentivi economici diretti hanno dato risultati modesti?',
        options: [
          'Perché sono troppo generosi',
          'Perché non compensano la mancanza di servizi essenziali',
          'Perché nessuno li conosce',
          'Perché durano troppo a lungo',
        ],
        answer: 1,
        explanation: '«Un incentivo una tantum non compensa l\'assenza di un pediatra a meno di quaranta chilometri».',
      },
      {
        id: 'b2-spop-q3',
        prompt: 'Quale cambio di prospettiva propongono gli studiosi?',
        options: [
          'Trattare le aree interne come infrastrutture ambientali di interesse nazionale',
          'Chiudere definitivamente i comuni più piccoli',
          'Aumentare i bonus per i nuovi residenti',
          'Trasferire gli anziani nelle città',
        ],
        answer: 0,
        explanation: 'Il testo propone di trattarle «come infrastrutture ambientali che l\'intero paese utilizza».',
      },
    ],
  },
  {
    id: 'b2-disconnessione',
    level: 'B2',
    title: 'Il diritto alla disconnessione',
    titleEn: 'The right to disconnect',
    category: 'Lavoro',
    minutes: 5,
    paragraphs: [
      {
        it: 'Il diffondersi del lavoro da remoto ha reso evidente un problema che esisteva già: il confine tra tempo di lavoro e tempo personale è diventato poroso. Un messaggio ricevuto alle ventidue non obbliga formalmente a rispondere, ma crea un\'aspettativa che pesa quanto un ordine.',
        en: 'The spread of remote work has made an already existing problem obvious: the boundary between work time and personal time has become porous. A message received at ten in the evening does not formally require an answer, but it creates an expectation that weighs as much as an order.',
      },
      {
        it: 'Diversi paesi europei hanno introdotto norme sul cosiddetto diritto alla disconnessione. In Italia il principio è stato riconosciuto per il lavoro agile, ma la formulazione lascia ampio spazio agli accordi individuali, e proprio lì si concentra la debolezza della tutela.',
        en: 'Several European countries have introduced rules on the so-called right to disconnect. In Italy the principle has been recognised for flexible working, but the wording leaves wide scope for individual agreements, and that is precisely where the weakness of the protection lies.',
      },
      {
        it: 'Chi si oppone a regole rigide sostiene che la flessibilità sia un vantaggio reciproco: se il dipendente può gestire liberamente la propria giornata, l\'azienda può ragionevolmente aspettarsi disponibilità in momenti non canonici. L\'argomento non è privo di fondamento, ma sottovaluta l\'asimmetria di potere fra le parti.',
        en: 'Those who oppose rigid rules argue that flexibility is a mutual benefit: if employees can freely manage their own day, the company can reasonably expect availability at non-standard times. The argument is not baseless, but it underestimates the asymmetry of power between the parties.',
      },
      {
        it: 'Le esperienze aziendali più interessanti non passano dai divieti tecnologici, che si aggirano facilmente, ma dalle abitudini dichiarate. Alcune organizzazioni hanno stabilito che i messaggi inviati fuori orario vadano programmati per la mattina successiva; altre chiedono ai dirigenti di dare l\'esempio, perché nessuna policy incide quanto il comportamento di chi decide.',
        en: 'The most interesting corporate experiments do not rely on technological bans, which are easily circumvented, but on stated habits. Some organisations have established that messages sent outside working hours should be scheduled for the following morning; others ask managers to lead by example, because no policy has as much impact as the behaviour of those who decide.',
      },
      {
        it: 'Resta una domanda di fondo, che nessuna norma può risolvere da sola: quanto della nostra reperibilità è imposta e quanto è scelta? Molti professionisti controllano la posta la domenica sera senza che nessuno lo abbia chiesto, per un\'ansia di controllo che precede qualsiasi obbligo contrattuale.',
        en: 'A fundamental question remains, which no rule can settle by itself: how much of our availability is imposed and how much is chosen? Many professionals check their email on Sunday evening without anyone having asked them to, out of an anxiety about control that precedes any contractual obligation.',
      },
    ],
    glossary: [
      { term: 'poroso', gloss: 'porous, permeable' },
      { term: "l'aspettativa", gloss: 'the expectation' },
      { term: 'il lavoro agile', gloss: 'flexible/remote working (Italian legal term)' },
      { term: 'la tutela', gloss: 'protection, safeguard' },
      { term: 'aggirare', gloss: 'to circumvent, to get around' },
      { term: 'la reperibilità', gloss: 'being on call / contactable' },
    ],
    questions: [
      {
        id: 'b2-disc-q1',
        prompt: 'Dove si concentra, secondo il testo, la debolezza della tutela italiana?',
        options: [
          'Nel fatto che il principio non esiste',
          'Nello spazio lasciato agli accordi individuali',
          'Nella durata del contratto',
          'Nelle sanzioni troppo severe',
        ],
        answer: 1,
        explanation: '«la formulazione lascia ampio spazio agli accordi individuali, e proprio lì si concentra la debolezza».',
      },
      {
        id: 'b2-disc-q2',
        prompt: "Qual è il limite dell'argomento della flessibilità reciproca?",
        options: [
          'Sottovaluta l\'asimmetria di potere fra azienda e dipendente',
          'Non considera i costi tecnologici',
          'Vale solo per i dirigenti',
          'È vietato dalla legge',
        ],
        answer: 0,
        explanation: '«sottovaluta l\'asimmetria di potere fra le parti».',
      },
      {
        id: 'b2-disc-q3',
        prompt: 'Perché i divieti tecnologici sono considerati poco efficaci?',
        options: ['Costano troppo', 'Si aggirano facilmente', 'Sono illegali', 'Rallentano il lavoro'],
        answer: 1,
        explanation: 'Il testo li definisce divieti «che si aggirano facilmente».',
      },
    ],
  },
  {
    id: 'b2-cibo',
    level: 'B2',
    title: 'Cibo e identità: la tradizione inventata',
    titleEn: 'Food and identity: the invented tradition',
    category: 'Cultura',
    minutes: 5,
    paragraphs: [
      {
        it: 'Pochi elementi definiscono l\'identità italiana quanto la cucina. Eppure gli storici dell\'alimentazione ricordano regolarmente che molti piatti considerati immemorabili hanno una storia sorprendentemente recente, e che la loro presunta autenticità è spesso una costruzione del Novecento.',
        en: 'Few things define Italian identity as much as its cuisine. Yet food historians regularly point out that many dishes considered timeless have a surprisingly recent history, and that their supposed authenticity is often a twentieth-century construction.',
      },
      {
        it: 'Il caso più discusso è quello della carbonara, la cui documentazione non risale oltre il secondo dopoguerra. Anche il tiramisù, percepito come antichissimo, compare nelle fonti scritte soltanto negli anni Sessanta. Questo non toglie nulla al loro valore: dimostra però che la tradizione culinaria è un processo vivo, non un archivio sigillato.',
        en: 'The most debated case is carbonara, whose documentation goes back no further than the post-war period. Tiramisù too, perceived as ancient, appears in written sources only in the 1960s. This takes nothing away from their value: it does show, however, that culinary tradition is a living process, not a sealed archive.',
      },
      {
        it: 'La rigidità delle regole gastronomiche italiane va letta in questa luce. L\'insistenza sulla ricetta corretta — quali ingredienti, in quale ordine, in quale stagione — funziona come un meccanismo di appartenenza. Sapere che il parmigiano non va sul pesce non è un\'informazione culinaria: è un segnale di identità condivisa.',
        en: 'The rigidity of Italian gastronomic rules should be read in this light. The insistence on the correct recipe — which ingredients, in what order, in what season — works as a mechanism of belonging. Knowing that parmesan does not go on fish is not culinary information: it is a signal of shared identity.',
      },
      {
        it: 'C\'è poi un aspetto economico che raramente entra nel dibattito pubblico. La narrazione della tradizione ha un valore commerciale enorme sui mercati esteri, dove l\'italianità vende più della qualità verificabile. Difendere la ricetta significa anche difendere una posizione di mercato, il che è legittimo, ma andrebbe detto.',
        en: 'There is also an economic aspect that rarely enters public debate. The narrative of tradition has enormous commercial value in foreign markets, where Italianness sells better than verifiable quality. Defending the recipe also means defending a market position, which is legitimate, but ought to be said.',
      },
      {
        it: 'Forse l\'atteggiamento più fecondo non è né la difesa a oltranza né lo scetticismo sistematico. Riconoscere che una tradizione è stata costruita non la rende falsa: la rende umana, e soprattutto la rende modificabile da chi verrà dopo, esattamente come è successo finora.',
        en: 'Perhaps the most fruitful attitude is neither all-out defence nor systematic scepticism. Recognising that a tradition was constructed does not make it false: it makes it human, and above all it makes it modifiable by those who come after, exactly as has happened until now.',
      },
    ],
    glossary: [
      { term: 'immemorabile', gloss: 'immemorial, timeless' },
      { term: 'risalire a', gloss: 'to date back to' },
      { term: "l'appartenenza", gloss: 'belonging' },
      { term: "l'italianità", gloss: 'Italianness' },
      { term: 'a oltranza', gloss: 'all-out, to the bitter end' },
      { term: 'fecondo', gloss: 'fruitful, productive' },
    ],
    questions: [
      {
        id: 'b2-cibo-q1',
        prompt: 'Che cosa dimostrano, secondo il testo, le date recenti di carbonara e tiramisù?',
        options: [
          'Che i piatti non sono italiani',
          'Che la tradizione culinaria è un processo vivo',
          'Che le fonti scritte sono inaffidabili',
          'Che la cucina italiana è sopravvalutata',
        ],
        answer: 1,
        explanation: '«la tradizione culinaria è un processo vivo, non un archivio sigillato».',
      },
      {
        id: 'b2-cibo-q2',
        prompt: 'Che funzione attribuisce l\'autore alle regole gastronomiche rigide?',
        options: ['Una funzione nutrizionale', 'Una funzione di appartenenza identitaria', 'Una funzione religiosa', 'Nessuna funzione'],
        answer: 1,
        explanation: 'Funzionano «come un meccanismo di appartenenza».',
      },
      {
        id: 'b2-cibo-q3',
        prompt: 'Qual è la posizione finale dell\'autore?',
        options: [
          'Difendere le ricette a oltranza',
          'Rifiutare ogni tradizione',
          'Riconoscere che la tradizione è costruita, dunque umana e modificabile',
          'Lasciare la questione agli storici',
        ],
        answer: 2,
        explanation: 'Riconoscerlo «non la rende falsa: la rende umana, e soprattutto la rende modificabile».',
      },
    ],
  },

  // ─────────────────────────────── C1 ───────────────────────────────
  {
    id: 'c1-art-divario',
    level: 'C1',
    title: 'Il divario digitale che non si vede',
    titleEn: 'The digital divide nobody sees',
    category: 'Analisi',
    minutes: 6,
    paragraphs: [
      {
        it: 'Per anni il divario digitale è stato descritto come una questione di infrastrutture: chi disponeva della connessione era dentro, chi ne era privo restava fuori. Estesa la banda larga a gran parte del territorio, ci si aspettava che il problema si riducesse per via naturale. Non è andata così, e vale la pena chiedersi perché.',
        en: 'For years the digital divide was described as a matter of infrastructure: those with a connection were in, those without stayed out. Once broadband was extended to most of the territory, the problem was expected to shrink of its own accord. That is not what happened, and it is worth asking why.',
      },
      {
        it: 'I dati sulle competenze raccontano una storia diversa da quelli sulla copertura. Una quota consistente della popolazione adulta dispone di un collegamento perfettamente funzionante e tuttavia non è in grado di completare autonomamente una procedura che richieda l\'identità digitale, la lettura di un documento firmato elettronicamente o la semplice verifica dell\'attendibilità di una fonte.',
        en: 'The data on skills tells a different story from the data on coverage. A substantial share of the adult population has a perfectly functioning connection and yet is unable to independently complete a procedure requiring digital identity, the reading of an electronically signed document, or the simple verification of a source\'s reliability.',
      },
      {
        it: 'A fronte di questa evidenza, la digitalizzazione dei servizi pubblici ha proceduto con un\'accelerazione che raramente ha tenuto conto dell\'utenza reale. Ogni sportello sostituito da un portale produce un risparmio contabile immediato e visibile, mentre il costo si sposta silenziosamente sul cittadino, che deve procurarsi le competenze altrove — o rivolgersi a un intermediario a pagamento.',
        en: 'Against this evidence, the digitalisation of public services has proceeded at a pace that has rarely taken the actual user base into account. Every counter replaced by a portal produces an immediate, visible accounting saving, while the cost shifts silently onto the citizen, who must acquire the skills elsewhere — or turn to a paid intermediary.',
      },
      {
        it: 'Si è così consolidata una figura professionale che nessuno aveva pianificato: il mediatore digitale informale. Talvolta è un familiare più giovane, talvolta un patronato, talvolta un\'attività commerciale che offre il servizio a pochi euro. Il fenomeno sopperisce a una carenza pubblica, ma introduce un elemento di disuguaglianza: chi non ha né competenze né rete di supporto paga due volte.',
        en: 'A professional figure nobody had planned has thus taken hold: the informal digital mediator. Sometimes it is a younger relative, sometimes a welfare advice centre, sometimes a business offering the service for a few euros. The phenomenon makes up for a public shortfall, but introduces an element of inequality: those with neither skills nor a support network pay twice.',
      },
      {
        it: 'Sarebbe ingeneroso ravvisare in tutto ciò una semplice mancanza di lungimiranza. Le amministrazioni hanno operato sotto vincoli di bilancio stringenti e con obiettivi di spesa da rendicontare entro scadenze rigide. Il punto è piuttosto che gli indicatori adottati misuravano l\'offerta — quanti servizi digitalizzati — e non l\'esito: quante persone hanno effettivamente portato a termine la pratica senza aiuto.',
        en: 'It would be unfair to discern in all this a simple lack of foresight. Administrations have operated under tight budget constraints and with spending targets to be accounted for by rigid deadlines. The point is rather that the indicators adopted measured supply — how many services digitalised — and not the outcome: how many people actually completed the procedure without help.',
      },
      {
        it: 'Colmare il divario, allora, non richiede necessariamente nuove piattaforme. Richiede che l\'abbandono di una procedura a metà venga registrato come un fallimento del servizio e non come un limite dell\'utente. È un cambiamento di metrica, prima ancora che di tecnologia.',
        en: 'Closing the gap, then, does not necessarily require new platforms. It requires that abandoning a procedure halfway be recorded as a failure of the service and not as a limitation of the user. It is a change of metric, before it is a change of technology.',
      },
    ],
    glossary: [
      { term: 'la copertura', gloss: 'coverage' },
      { term: "l'attendibilità", gloss: 'reliability, trustworthiness' },
      { term: 'il patronato', gloss: 'welfare advice centre (Italian institution)' },
      { term: 'rendicontare', gloss: 'to account for, to report on (spending)' },
      { term: "l'esito", gloss: 'the outcome' },
      { term: 'colmare', gloss: 'to fill, to close (a gap)' },
    ],
    questions: [
      {
        id: 'c1-div-q1',
        prompt: 'Qual è la differenza fra i dati sulla copertura e quelli sulle competenze?',
        options: [
          'Non c\'è differenza rilevante',
          'La copertura è ampia, ma molte persone non sanno completare procedure digitali',
          'Le competenze sono alte, ma manca la connessione',
          'Entrambi indicano un miglioramento costante',
        ],
        answer: 1,
        explanation: 'Molti «dispongono di un collegamento perfettamente funzionante e tuttavia non sono in grado di completare autonomamente una procedura».',
      },
      {
        id: 'c1-div-q2',
        prompt: 'Che cosa intende l\'autore quando dice che il costo «si sposta sul cittadino»?',
        options: [
          'Che aumentano le tasse',
          'Che il cittadino deve procurarsi altrove le competenze o pagare un intermediario',
          'Che i portali sono a pagamento',
          'Che gli sportelli costano di più',
        ],
        answer: 1,
        explanation: 'Il risparmio è dell\'amministrazione; l\'onere ricade sull\'utente, che ricorre a competenze esterne o a intermediari.',
      },
      {
        id: 'c1-div-q3',
        prompt: 'Qual è la critica principale rivolta agli indicatori adottati?',
        options: [
          'Misurano l\'offerta di servizi e non l\'esito per gli utenti',
          'Sono troppo numerosi',
          'Vengono pubblicati in ritardo',
          'Non considerano i costi infrastrutturali',
        ],
        answer: 0,
        explanation: '«gli indicatori adottati misuravano l\'offerta [...] e non l\'esito».',
      },
    ],
  },
  {
    id: 'c1-dialetti',
    level: 'C1',
    title: 'Dialetti: non varianti, ma lingue',
    titleEn: 'Dialects: not variants, but languages',
    category: 'Linguistica',
    minutes: 6,
    paragraphs: [
      {
        it: 'Chiamare «dialetti» il napoletano, il siciliano o il friulano è una comodità terminologica che i linguisti accettano con crescente disagio. Dal punto di vista strutturale non si tratta di varietà derivate dall\'italiano, bensì di sistemi evolutisi parallelamente dal latino, con fonologie e sintassi autonome.',
        en: 'Calling Neapolitan, Sicilian or Friulian "dialects" is a terminological convenience that linguists accept with growing unease. Structurally they are not varieties derived from Italian, but systems that evolved in parallel from Latin, with autonomous phonologies and syntaxes.',
      },
      {
        it: 'L\'equivoco ha origini storiche precise. L\'italiano standard nasce come lingua letteraria su base fiorentina e per secoli resta appannaggio di una minoranza colta. Al momento dell\'unificazione la quota di popolazione che lo parlava abitualmente era, secondo le stime più citate, largamente minoritaria: la lingua nazionale è stata costruita, non ereditata.',
        en: 'The misunderstanding has precise historical origins. Standard Italian was born as a literary language on a Florentine basis and for centuries remained the preserve of an educated minority. At the time of unification the share of the population who habitually spoke it was, according to the most cited estimates, a small minority: the national language was built, not inherited.',
      },
      {
        it: 'La scuola dell\'obbligo e, più tardi, la televisione hanno compiuto in pochi decenni ciò che l\'amministrazione non era riuscita a fare in un secolo. Il prezzo è stato l\'associazione stabile fra dialetto e arretratezza, coltivata a lungo anche dagli insegnanti, che correggevano i bambini con un\'insistenza che oggi apparirebbe violenta.',
        en: 'Compulsory schooling and, later, television accomplished in a few decades what the administration had failed to do in a century. The price was a stable association between dialect and backwardness, long cultivated by teachers too, who corrected children with an insistence that today would seem violent.',
      },
      {
        it: 'Il quadro attuale è tutt\'altro che lineare. La trasmissione intergenerazionale si è interrotta quasi ovunque, e questo condanna molte varietà nel giro di due generazioni. Al tempo stesso il dialetto gode di un prestigio culturale nuovo: compare nella musica, nel cinema, nella pubblicità, dove segnala autenticità anziché arretratezza.',
        en: 'The current picture is anything but straightforward. Intergenerational transmission has broken down almost everywhere, and this dooms many varieties within two generations. At the same time dialect enjoys a new cultural prestige: it appears in music, cinema and advertising, where it signals authenticity rather than backwardness.',
      },
      {
        it: 'Sarebbe però illusorio stemperare l\'allarme confidando in questa visibilità. Una lingua sopravvive se viene usata per negoziare la spesa, litigare e crescere i figli, non se viene citata in un ritornello. Il riconoscimento estetico può accompagnare la tutela; difficilmente la sostituisce.',
        en: 'It would be illusory, however, to soften the alarm by trusting in this visibility. A language survives if it is used to haggle over the shopping, to argue and to raise children, not if it is quoted in a chorus. Aesthetic recognition can accompany protection; it hardly replaces it.',
      },
    ],
    glossary: [
      { term: 'il disagio', gloss: 'unease, discomfort' },
      { term: "l'equivoco", gloss: 'the misunderstanding' },
      { term: "l'arretratezza", gloss: 'backwardness' },
      { term: 'la trasmissione intergenerazionale', gloss: 'passing on between generations' },
      { term: 'il ritornello', gloss: 'the chorus (of a song)' },
      { term: 'la tutela', gloss: 'protection' },
    ],
    questions: [
      {
        id: 'c1-dial-q1',
        prompt: 'Perché i linguisti sono a disagio con il termine «dialetto»?',
        options: [
          'Perché è offensivo per gli anziani',
          'Perché queste varietà non derivano dall\'italiano ma dal latino, parallelamente',
          'Perché non esistono più parlanti',
          'Perché il termine è straniero',
        ],
        answer: 1,
        explanation: 'Sono «sistemi evolutisi parallelamente dal latino», non varietà derivate dall\'italiano.',
      },
      {
        id: 'c1-dial-q2',
        prompt: 'Che cosa hanno realizzato scuola e televisione?',
        options: [
          'Hanno diffuso l\'italiano in pochi decenni',
          'Hanno protetto i dialetti',
          'Hanno unificato le grammatiche dialettali',
          'Hanno ridotto l\'alfabetizzazione',
        ],
        answer: 0,
        explanation: 'Hanno compiuto «in pochi decenni ciò che l\'amministrazione non era riuscita a fare in un secolo».',
      },
      {
        id: 'c1-dial-q3',
        prompt: 'Perché il prestigio culturale attuale non basta a salvare i dialetti?',
        options: [
          'Perché riguarda solo il Nord',
          'Perché una lingua sopravvive nell\'uso quotidiano, non nella citazione artistica',
          'Perché la musica cambia moda',
          'Perché mancano i fondi pubblici',
        ],
        answer: 1,
        explanation: '«Una lingua sopravvive se viene usata per negoziare la spesa, litigare e crescere i figli».',
      },
    ],
  },
  {
    id: 'c1-urbanistica',
    level: 'C1',
    title: 'La città dei quindici minuti, alla prova dei fatti',
    titleEn: 'The fifteen-minute city, put to the test',
    category: 'Urbanistica',
    minutes: 6,
    paragraphs: [
      {
        it: 'L\'idea è semplice al punto da sembrare ovvia: ogni abitante dovrebbe raggiungere a piedi o in bicicletta, entro un quarto d\'ora, i servizi essenziali della vita quotidiana. Formulata in questi termini, la proposta ha conosciuto una diffusione rapidissima nei documenti di pianificazione europei.',
        en: 'The idea is so simple as to seem obvious: every inhabitant should reach the essential services of daily life on foot or by bicycle within a quarter of an hour. Formulated in these terms, the proposal has spread with great speed through European planning documents.',
      },
      {
        it: 'La sua applicazione, però, ha incontrato ostacoli che il modello nella sua forma divulgativa tende a occultare. Il primo è la struttura del patrimonio edilizio: nei quartieri costruiti negli anni Sessanta attorno all\'automobile, i piani terra non furono progettati per ospitare esercizi commerciali, e riconvertirli comporta costi che nessun piano ha realmente stanziato.',
        en: 'Its application, however, has met obstacles that the model in its popularised form tends to conceal. The first is the structure of the building stock: in neighbourhoods built in the 1960s around the car, ground floors were not designed to host shops, and converting them entails costs that no plan has genuinely funded.',
      },
      {
        it: 'Il secondo ostacolo è più insidioso, perché si manifesta proprio quando l\'intervento riesce. Migliorare la vivibilità di un quartiere ne accresce l\'attrattività, e con essa i canoni di locazione: gli stessi residenti che l\'operazione intendeva servire vengono progressivamente sostituiti da chi può permettersi il quartiere migliorato. Senza politiche abitative parallele, la prossimità dei servizi diventa un bene di lusso.',
        en: 'The second obstacle is more insidious, because it shows up precisely when the intervention succeeds. Improving a neighbourhood\'s liveability increases its appeal, and with it rents: the very residents the operation was meant to serve are progressively replaced by those who can afford the improved neighbourhood. Without parallel housing policies, proximity to services becomes a luxury good.',
      },
      {
        it: 'A ciò si aggiunge un equivoco sulla scala. Il quarto d\'ora funziona per la farmacia, il pane e la scuola primaria; non per l\'ospedale, il tribunale o l\'università, che richiedono bacini d\'utenza ampi. Presentare il modello come sostitutivo del trasporto pubblico, anziché complementare, ha alimentato diffidenze che con un\'esposizione più accorta si sarebbero evitate.',
        en: 'To this is added a misunderstanding about scale. The quarter of an hour works for the pharmacy, the bakery and the primary school; not for the hospital, the courthouse or the university, which require large catchment areas. Presenting the model as a substitute for public transport, rather than complementary to it, has fuelled suspicions that a more careful presentation would have avoided.',
      },
      {
        it: 'Nulla di tutto questo invalida il principio. Suggerisce piuttosto che l\'urbanistica raramente fallisce per difetto di visione: fallisce quando la visione viene comunicata come una soluzione compiuta anziché come un criterio da negoziare quartiere per quartiere, con chi ci abita.',
        en: 'None of this invalidates the principle. It suggests rather that urban planning rarely fails for want of vision: it fails when the vision is communicated as a finished solution rather than as a criterion to be negotiated neighbourhood by neighbourhood, with those who live there.',
      },
    ],
    glossary: [
      { term: 'occultare', gloss: 'to conceal' },
      { term: 'il patrimonio edilizio', gloss: 'the building stock' },
      { term: 'stanziare', gloss: 'to allocate (funds)' },
      { term: 'il canone di locazione', gloss: 'the rent' },
      { term: "il bacino d'utenza", gloss: 'the catchment area' },
      { term: 'la diffidenza', gloss: 'mistrust, suspicion' },
    ],
    questions: [
      {
        id: 'c1-urb-q1',
        prompt: 'Perché i quartieri anni Sessanta pongono un problema specifico?',
        options: [
          'Sono troppo densi',
          'I piani terra non furono progettati per attività commerciali',
          'Non hanno strade',
          'Sono troppo lontani dal centro',
        ],
        answer: 1,
        explanation: 'Furono costruiti attorno all\'automobile e «i piani terra non furono progettati per ospitare esercizi commerciali».',
      },
      {
        id: 'c1-urb-q2',
        prompt: 'Perché il secondo ostacolo è definito «più insidioso»?',
        options: [
          'Perché si manifesta proprio quando l\'intervento riesce',
          'Perché è illegale',
          'Perché nessuno lo ha studiato',
          'Perché riguarda solo le periferie',
        ],
        answer: 0,
        explanation: 'Il successo alza i canoni e allontana i residenti che si volevano servire.',
      },
      {
        id: 'c1-urb-q3',
        prompt: 'Qual è la conclusione dell\'autore sull\'urbanistica?',
        options: [
          'Il modello va abbandonato',
          'Fallisce quando la visione è presentata come soluzione compiuta anziché criterio da negoziare',
          'Serve più tecnologia',
          'Il trasporto pubblico è inutile',
        ],
        answer: 1,
        explanation: 'La chiusura del testo lo dice esplicitamente.',
      },
    ],
  },

  // ─────────────────────────────── C2 ───────────────────────────────
  {
    id: 'c2-art-coacervo',
    level: 'C2',
    title: 'Il coacervo normativo e la sua liturgia',
    titleEn: 'The regulatory tangle and its liturgy',
    category: 'Diritto e società',
    minutes: 7,
    paragraphs: [
      {
        it: 'Che l\'ordinamento italiano soffra di ipertrofia normativa è affermazione talmente ripetuta da essersi logorata nell\'uso. Meno frequentata è la domanda successiva, e più scomoda: a chi giova un coacervo di disposizioni che nessun operatore riesce a padroneggiare per intero?',
        en: 'That the Italian legal system suffers from regulatory hypertrophy is a claim so often repeated as to have worn thin through use. Less frequently raised is the subsequent, more uncomfortable question: who benefits from a tangle of provisions that no practitioner can master in its entirety?',
      },
      {
        it: 'La risposta consueta chiama in causa l\'inerzia burocratica, spiegazione rassicurante perché non attribuisce responsabilità a nessuno in particolare. Essa tuttavia non rende conto di un dato ricorrente: la stratificazione normativa tende ad addensarsi precisamente nei settori in cui esistono rendite di posizione consolidate, e a diradarsi dove tali rendite non sono in gioco.',
        en: 'The customary answer invokes bureaucratic inertia, a reassuring explanation because it assigns responsibility to no one in particular. It does not, however, account for a recurring fact: regulatory layering tends to thicken precisely in the sectors where entrenched rent-seeking positions exist, and to thin out where such positions are not at stake.',
      },
      {
        it: 'Là dove la complessità è massima, prospera una categoria di intermediari la cui competenza consiste nel navigarla. Non se ne deve inferire un disegno concertato: nessuno ha bisogno di cospirare perché un sistema premi chi lo sa attraversare. È sufficiente che ogni tentativo di semplificazione trovi, a ogni passaggio, qualcuno che ravvisi in esso un pregiudizio per interessi legittimi — e la lentezza farà il resto.',
        en: 'Where complexity is greatest, a class of intermediaries whose expertise consists in navigating it flourishes. No concerted design should be inferred from this: nobody needs to conspire for a system to reward those who know how to traverse it. It is enough that every attempt at simplification should meet, at each stage, someone who discerns in it a detriment to legitimate interests — and slowness will do the rest.',
      },
      {
        it: 'Va detto che le semplificazioni annunciate hanno spesso peccato di ingenuità speculare. Abrogare in blocco senza ricostruire il tessuto di rinvii che regge un settore produce vuoti che la giurisprudenza colma a posteriori, con esiti meno prevedibili della norma soppressa. Il rimedio, in simili casi, si è rivelato più oneroso del male.',
        en: 'It must be said that the simplifications announced have often erred with a mirror-image naivety. Wholesale repeal without reconstructing the web of cross-references holding a sector together produces gaps that case law fills after the fact, with outcomes less predictable than the abolished rule. In such cases the remedy has proved costlier than the disease.',
      },
      {
        it: 'Vi è poi una dimensione che sfugge alle analisi puramente quantitative. La proliferazione di adempimenti assolve una funzione liturgica: dimostra che si è provveduto. A fronte di un fatto di cronaca che scuote l\'opinione pubblica, l\'adozione di una nuova disposizione costituisce la risposta più rapida e meno costosa disponibile, quale che sia la sua efficacia attesa. Che la norma preesistente fosse adeguata ma inapplicata è circostanza che non blandisce nessuno.',
        en: 'There is also a dimension that escapes purely quantitative analysis. The proliferation of obligations performs a liturgical function: it demonstrates that action has been taken. In the face of a news event that shakes public opinion, adopting a new provision is the quickest and least costly response available, whatever its expected effectiveness. That the pre-existing rule was adequate but unenforced is a circumstance that flatters no one.',
      },
      {
        it: 'Dirimere la questione, se mai sarà possibile, richiederà meno annunci e più valutazione ex post: verificare, a distanza di anni, quali disposizioni abbiano prodotto gli effetti dichiarati. È un lavoro privo di qualsiasi rendimento politico immediato, il che spiega ragionevolmente perché venga rinviato con tanta costanza.',
        en: 'Settling the question, if it ever proves possible, will require fewer announcements and more ex post evaluation: verifying, years later, which provisions have produced their declared effects. It is work devoid of any immediate political return, which reasonably explains why it is postponed with such consistency.',
      },
    ],
    glossary: [
      { term: "l'ipertrofia", gloss: 'hypertrophy, excessive growth' },
      { term: 'logorarsi', gloss: 'to wear out, to become worn thin' },
      { term: 'la rendita di posizione', gloss: 'entrenched economic advantage, rent-seeking position' },
      { term: 'il rinvio', gloss: 'the cross-reference; the postponement' },
      { term: "l'adempimento", gloss: 'the compliance obligation' },
      { term: 'oneroso', gloss: 'burdensome, costly' },
    ],
    questions: [
      {
        id: 'c2-coac-q1',
        prompt: 'Perché l\'autore giudica insufficiente la spiegazione dell\'inerzia burocratica?',
        options: [
          'Perché la burocrazia non esiste',
          'Perché non spiega la concentrazione della complessità dove esistono rendite di posizione',
          'Perché è troppo tecnica',
          'Perché contraddice la giurisprudenza',
        ],
        answer: 1,
        explanation: 'La stratificazione «tende ad addensarsi precisamente nei settori in cui esistono rendite di posizione consolidate».',
      },
      {
        id: 'c2-coac-q2',
        prompt: 'Che cosa intende l\'autore con «ingenuità speculare» delle semplificazioni?',
        options: [
          'Che sono state troppo lente',
          'Che abrogare in blocco senza ricostruire i rinvii crea vuoti dagli esiti imprevedibili',
          'Che sono state scritte male',
          'Che copiano modelli stranieri',
        ],
        answer: 1,
        explanation: 'L\'errore opposto e simmetrico: abrogare senza ricostruire il tessuto di rinvii.',
      },
      {
        id: 'c2-coac-q3',
        prompt: 'In che senso la proliferazione normativa avrebbe una «funzione liturgica»?',
        options: [
          'Ha origini religiose',
          'Serve a dimostrare pubblicamente che si è intervenuti, a prescindere dall\'efficacia',
          'Richiede cerimonie ufficiali',
          'Riguarda il diritto ecclesiastico',
        ],
        answer: 1,
        explanation: '«dimostra che si è provveduto», quale che sia l\'efficacia attesa.',
      },
    ],
  },
  {
    id: 'c2-retorica',
    level: 'C2',
    title: 'Lambire il potere: retorica dell\'understatement',
    titleEn: 'Grazing power: the rhetoric of understatement',
    category: 'Linguaggio',
    minutes: 7,
    paragraphs: [
      {
        it: 'Nel lessico politico italiano si è affermata una figura che meriterebbe uno studio sistematico: l\'attenuazione preventiva. Consiste nell\'annunciare una posizione netta avvolgendola in tante cautele da renderla, all\'occorrenza, ritrattabile senza smentita formale.',
        en: 'In Italian political vocabulary a figure has taken hold that would deserve systematic study: pre-emptive attenuation. It consists in announcing a firm position while wrapping it in so many caveats as to make it, should the need arise, retractable without formal contradiction.',
      },
      {
        it: 'Gli strumenti sono noti a chiunque frequenti le pagine politiche. Il condizionale attenuativo — «si potrebbe valutare» — dissocia il parlante dall\'enunciato. La forma impersonale sottrae il soggetto: «si è ritenuto opportuno» non dice chi lo abbia ritenuto. L\'endiadi, infine, appaia un termine impegnativo a uno vago, e il secondo lentamente svuota il primo.',
        en: 'The tools are familiar to anyone who follows the political pages. The attenuating conditional — "one could assess" — dissociates the speaker from the statement. The impersonal form removes the subject: "it was deemed appropriate" does not say who deemed it so. Hendiadys, finally, pairs a demanding term with a vague one, and the second slowly hollows out the first.',
      },
      {
        it: 'Sarebbe però superficiale liquidare il fenomeno come mera ipocrisia. In un sistema che impone coalizioni fra soggetti dalle posizioni difficilmente conciliabili, l\'ambiguità calibrata svolge una funzione: consente a più attori di sottoscrivere il medesimo testo leggendovi cose diverse. Senza tale margine, molti accordi non si concluderebbero affatto.',
        en: 'It would be superficial, however, to dismiss the phenomenon as mere hypocrisy. In a system that requires coalitions between parties whose positions are hard to reconcile, calibrated ambiguity performs a function: it allows several actors to sign the same text while reading different things into it. Without that margin, many agreements would not be concluded at all.',
      },
      {
        it: 'Il costo si scarica altrove, e con puntualità. Quando l\'enunciato ambiguo deve tradursi in atto amministrativo, l\'onere dell\'interpretazione ricade sul funzionario che firma, il quale — non disponendo di alcuna copertura politica — adotterà prevedibilmente la lettura più prudente. Così la vaghezza concepita per allargare il consenso si converte, a valle, in un restringimento dell\'azione.',
        en: 'The cost is discharged elsewhere, and punctually. When the ambiguous statement must be translated into an administrative act, the burden of interpretation falls on the official who signs it, who — having no political cover — will predictably adopt the most cautious reading. Thus the vagueness devised to broaden consensus turns, downstream, into a narrowing of action.',
      },
      {
        it: 'Va aggiunto che il pubblico ha da tempo imparato a decodificare il meccanismo, e vi risponde con un disincanto che le stesse cautele contribuiscono ad alimentare. L\'understatement, nato per non compromettersi, finisce per essere letto come confessione anticipata di inazione: chi ascolta non attende più la misura annunciata, ma calcola in quanto tempo verrà stemperata.',
        en: 'It should be added that the public has long since learned to decode the mechanism, and responds with a disenchantment that those very caveats help to feed. Understatement, born so as not to commit oneself, ends up read as an advance confession of inaction: listeners no longer await the announced measure, but calculate how long it will take to be watered down.',
      },
      {
        it: 'Non è dato sapere se una lingua politica più assertiva risulterebbe preferibile: le esperienze straniere in tal senso non incoraggiano l\'ottimismo. È lecito però osservare che una retorica costruita per lambire le decisioni senza mai afferrarle produce, alla lunga, un\'aspettativa simmetrica — e a quel punto anche gli annunci sinceri vengono derubricati a esercizi di stile.',
        en: 'It is impossible to know whether a more assertive political language would be preferable: foreign experience in that direction does not encourage optimism. It is fair to observe, however, that a rhetoric built to graze decisions without ever grasping them produces, in the long run, a symmetrical expectation — and at that point even sincere announcements are downgraded to exercises in style.',
      },
    ],
    glossary: [
      { term: "l'attenuazione", gloss: 'attenuation, softening' },
      { term: 'ritrattabile', gloss: 'retractable' },
      { term: "l'endiadi", gloss: 'hendiadys (pairing two terms for one idea)' },
      { term: 'conciliabile', gloss: 'reconcilable' },
      { term: 'il disincanto', gloss: 'disenchantment' },
      { term: 'derubricare', gloss: 'to downgrade, to reclassify downwards' },
    ],
    questions: [
      {
        id: 'c2-ret-q1',
        prompt: 'Che cosa ottiene chi usa la forma impersonale «si è ritenuto opportuno»?',
        options: [
          'Rende il testo più breve',
          'Sottrae il soggetto, quindi la responsabilità dell\'affermazione',
          'Segnala urgenza',
          'Indica un obbligo di legge',
        ],
        answer: 1,
        explanation: '«La forma impersonale sottrae il soggetto: non dice chi lo abbia ritenuto».',
      },
      {
        id: 'c2-ret-q2',
        prompt: 'Quale funzione sistemica riconosce l\'autore all\'ambiguità calibrata?',
        options: [
          'Permette a più attori di sottoscrivere lo stesso testo leggendovi cose diverse',
          'Riduce i tempi parlamentari',
          'Migliora la qualità della scrittura',
          'Protegge la privacy dei firmatari',
        ],
        answer: 0,
        explanation: 'Senza quel margine «molti accordi non si concluderebbero affatto».',
      },
      {
        id: 'c2-ret-q3',
        prompt: 'Perché la vaghezza si converte «a valle» in restringimento dell\'azione?',
        options: [
          'Perché i testi vengono abrogati',
          'Perché il funzionario privo di copertura politica sceglie l\'interpretazione più prudente',
          'Perché mancano le risorse',
          'Perché il pubblico protesta',
        ],
        answer: 1,
        explanation: 'L\'onere interpretativo ricade sul funzionario, che adotta la lettura più cautelativa.',
      },
    ],
  },
  {
    id: 'c2-art-caparbieta',
    level: 'C2',
    title: 'La caparbietà come mito nazionale',
    titleEn: 'Doggedness as a national myth',
    category: 'Storia culturale',
    minutes: 7,
    paragraphs: [
      {
        it: 'Fra le virtù che gli italiani amano attribuirsi, l\'arte di arrangiarsi occupa un posto d\'onore. La si celebra come ingegno pratico, capacità di trovare una via d\'uscita là dove le regole non ne prevedono alcuna; e a suo sostegno si esibisce un repertorio di aneddoti che va dal Rinascimento all\'ingegneria del dopoguerra.',
        en: 'Among the virtues Italians like to claim for themselves, the art of getting by holds a place of honour. It is celebrated as practical ingenuity, the ability to find a way out where the rules provide none; and in its support a repertoire of anecdotes is displayed ranging from the Renaissance to post-war engineering.',
      },
      {
        it: 'L\'autorappresentazione, come tutte, seleziona. Ciò che il racconto omette è che l\'ingegno individuale fiorisce con particolare rigoglio proprio dove le istituzioni non funzionano, e che la sua celebrazione rischia di trasformare una risposta d\'emergenza in una preferenza culturale. Se aggirare l\'ostacolo è una dote, riparare l\'ostacolo diventa, tacitamente, un compito di qualcun altro.',
        en: 'Self-representation, like all such portraits, selects. What the account omits is that individual ingenuity flourishes with particular vigour precisely where institutions do not work, and that celebrating it risks turning an emergency response into a cultural preference. If circumventing the obstacle is a gift, fixing the obstacle tacitly becomes somebody else\'s job.',
      },
      {
        it: 'La caparbietà, in questa cornice, gode di uno statuto ambiguo. Attribuita a un imprenditore che ha portato avanti un\'impresa contro ogni previsione, è lode piena; riferita a un funzionario che pretende l\'osservanza di un adempimento, diventa pedanteria. Il medesimo tratto caratteriale muta segno a seconda che si opponga alla regola o la difenda — e questa asimmetria dice sulla cultura civica più di molte indagini.',
        en: 'Doggedness, within this frame, enjoys an ambiguous status. Attributed to an entrepreneur who has carried through a venture against all odds, it is unqualified praise; applied to an official who insists on compliance with a requirement, it becomes pedantry. The same character trait changes sign depending on whether it opposes the rule or defends it — and that asymmetry says more about civic culture than many surveys.',
      },
      {
        it: 'Non sarebbe onesto ricondurre il fenomeno a un difetto morale collettivo, tesi tanto diffusa quanto sterile. La diffidenza verso la norma ha radici storiche verificabili: per secoli l\'autorità è stata percepita come esterna, imposta da dinastie straniere o da un centro lontano, e la fedeltà si è organizzata su cerchie più piccole e più affidabili. Quella eredità non svanisce con un\'unificazione politica.',
        en: 'It would not be honest to trace the phenomenon back to a collective moral defect, a thesis as widespread as it is sterile. Mistrust of rules has verifiable historical roots: for centuries authority was perceived as external, imposed by foreign dynasties or by a distant centre, and loyalty organised itself around smaller, more reliable circles. That legacy does not vanish with a political unification.',
      },
      {
        it: 'Resta però da chiedersi quanto a lungo una spiegazione storica possa fungere da giustificazione corrente. Le eredità si trasmettono perché vengono continuamente riconvalidate: ogni volta che la scorciatoia viene raccontata con ammirazione anziché con imbarazzo, il mito riceve la sua manutenzione ordinaria. Non è appannaggio di un ceto né di una regione; è un\'operazione quotidiana e minuta, alla portata di chiunque.',
        en: 'It remains to be asked, however, how long a historical explanation can serve as a current justification. Legacies are transmitted because they are continually revalidated: every time the shortcut is recounted with admiration rather than embarrassment, the myth receives its routine maintenance. It is not the preserve of one class or one region; it is a small, daily operation, within anyone\'s reach.',
      },
    ],
    glossary: [
      { term: "l'arte di arrangiarsi", gloss: 'the art of getting by / improvising' },
      { term: "l'autorappresentazione", gloss: 'self-representation' },
      { term: 'il rigoglio', gloss: 'luxuriance, vigorous growth' },
      { term: 'la pedanteria', gloss: 'pedantry' },
      { term: 'la cerchia', gloss: 'the circle (of people)' },
      { term: 'la scorciatoia', gloss: 'the shortcut' },
    ],
    questions: [
      {
        id: 'c2-cap-q1',
        prompt: 'Qual è il rischio, secondo l\'autore, nel celebrare l\'arte di arrangiarsi?',
        options: [
          'Che diventi una disciplina scolastica',
          'Che una risposta d\'emergenza si trasformi in preferenza culturale',
          'Che scompaia con la modernizzazione',
          'Che venga imitata all\'estero',
        ],
        answer: 1,
        explanation: 'La celebrazione «rischia di trasformare una risposta d\'emergenza in una preferenza culturale».',
      },
      {
        id: 'c2-cap-q2',
        prompt: 'Che cosa rivela l\'asimmetria nel giudizio sulla caparbietà?',
        options: [
          'Che il tratto è lodato quando si oppone alla regola e criticato quando la difende',
          'Che gli imprenditori sono più stimati dei funzionari ovunque',
          'Che la lingua manca di sinonimi',
          'Che le indagini sono inaffidabili',
        ],
        answer: 0,
        explanation: '«muta segno a seconda che si opponga alla regola o la difenda».',
      },
      {
        id: 'c2-cap-q3',
        prompt: 'Come vengono trasmesse le eredità culturali, secondo la conclusione?',
        options: [
          'Per via genetica',
          'Attraverso l\'istruzione formale soltanto',
          'Perché vengono continuamente riconvalidate nei racconti quotidiani',
          'Non vengono trasmesse affatto',
        ],
        answer: 2,
        explanation: '«Le eredità si trasmettono perché vengono continuamente riconvalidate».',
      },
    ],
  },

  // ─────────────────────────────── A1 ───────────────────────────────
  {
    id: 'a1-art-giornata',
    level: 'A1',
    title: 'La mia giornata',
    titleEn: 'My day',
    category: 'Vita quotidiana',
    minutes: 2,
    paragraphs: [
      {
        it: 'Mi chiamo Luca e abito a Verona. Ho ventisei anni e lavoro in un negozio.',
        en: 'My name is Luca and I live in Verona. I am twenty-six and I work in a shop.',
      },
      {
        it: 'La mattina mi sveglio alle sette. Faccio colazione con un caffè e un biscotto.',
        en: 'In the morning I wake up at seven. I have breakfast with a coffee and a biscuit.',
      },
      {
        it: 'Esco di casa alle otto e prendo l\'autobus. Il negozio apre alle nove.',
        en: 'I leave the house at eight and take the bus. The shop opens at nine.',
      },
      {
        it: 'A mezzogiorno mangio un panino con i colleghi. Il pomeriggio passa veloce.',
        en: 'At midday I eat a sandwich with my colleagues. The afternoon goes quickly.',
      },
      {
        it: 'La sera torno a casa, cucino qualcosa e guardo un film. Sono sempre stanco, ma sono contento.',
        en: 'In the evening I go home, cook something and watch a film. I am always tired, but I am happy.',
      },
    ],
    glossary: [
      { term: 'svegliarsi', gloss: 'to wake up' },
      { term: 'la colazione', gloss: 'breakfast' },
      { term: 'uscire di casa', gloss: 'to leave the house' },
      { term: 'il panino', gloss: 'sandwich, roll' },
      { term: 'contento', gloss: 'happy, pleased' },
    ],
    questions: [
      {
        id: 'a1-gio-q1',
        prompt: 'Dove abita Luca?',
        options: ['A Roma', 'A Verona', 'A Milano', 'A Napoli'],
        answer: 1,
        explanation: '«Mi chiamo Luca e abito a Verona.»',
      },
      {
        id: 'a1-gio-q2',
        prompt: 'A che ora si sveglia?',
        options: ['Alle sei', 'Alle sette', 'Alle otto', 'Alle nove'],
        answer: 1,
        explanation: '«La mattina mi sveglio alle sette.»',
      },
      {
        id: 'a1-gio-q3',
        prompt: 'Che cosa fa la sera?',
        options: ['Lavora', 'Cucina e guarda un film', 'Prende l\'autobus', 'Fa colazione'],
        answer: 1,
        explanation: '«cucino qualcosa e guardo un film».',
      },
    ],
  },
  {
    id: 'a1-art-famiglia',
    level: 'A1',
    title: 'La famiglia di Marco',
    titleEn: "Marco's family",
    category: 'Persone',
    minutes: 2,
    paragraphs: [
      {
        it: 'Marco ha una famiglia grande. Ha due fratelli e una sorella.',
        en: 'Marco has a big family. He has two brothers and one sister.',
      },
      {
        it: 'Suo padre si chiama Giuseppe e ha sessant\'anni. È alto e simpatico.',
        en: 'His father is called Giuseppe and he is sixty. He is tall and likeable.',
      },
      {
        it: 'Sua madre si chiama Anna. Lavora in un ospedale ed è molto brava.',
        en: 'His mother is called Anna. She works in a hospital and she is very good at it.',
      },
      {
        it: 'La sorella di Marco è piccola: ha solo otto anni. Le piacciono i gatti.',
        en: "Marco's sister is little: she is only eight. She likes cats.",
      },
      {
        it: 'La domenica mangiano tutti insieme a casa dei nonni. È il giorno preferito di Marco.',
        en: "On Sunday they all eat together at their grandparents' house. It is Marco's favourite day.",
      },
    ],
    glossary: [
      { term: 'il fratello', gloss: 'brother' },
      { term: 'la sorella', gloss: 'sister' },
      { term: 'i nonni', gloss: 'grandparents' },
      { term: 'preferito', gloss: 'favourite' },
      { term: 'insieme', gloss: 'together' },
    ],
    questions: [
      {
        id: 'a1-fam-q1',
        prompt: 'Quanti fratelli ha Marco?',
        options: ['Uno', 'Due', 'Tre', 'Nessuno'],
        answer: 1,
        explanation: '«Ha due fratelli e una sorella.»',
      },
      {
        id: 'a1-fam-q2',
        prompt: 'Dove lavora la madre?',
        options: ['In un negozio', 'In un ospedale', 'A casa', 'In una scuola'],
        answer: 1,
        explanation: '«Lavora in un ospedale.»',
      },
      {
        id: 'a1-fam-q3',
        prompt: 'Che cosa fanno la domenica?',
        options: [
          'Mangiano insieme dai nonni',
          'Lavorano',
          'Vanno al mare',
          'Guardano un film',
        ],
        answer: 0,
        explanation: '«La domenica mangiano tutti insieme a casa dei nonni.»',
      },
    ],
  },
  {
    id: 'a1-art-citta',
    level: 'A1',
    title: 'La mia città',
    titleEn: 'My city',
    category: 'Luoghi',
    minutes: 2,
    paragraphs: [
      {
        it: 'Abito in una città piccola, vicino al mare. Non è grande, ma è molto bella.',
        en: 'I live in a small city, near the sea. It is not big, but it is very beautiful.',
      },
      {
        it: 'Nel centro c\'è una piazza con una chiesa antica. Ci sono anche molti bar.',
        en: 'In the centre there is a square with an old church. There are also many bars.',
      },
      {
        it: 'La mattina la piazza è tranquilla. La sera, invece, c\'è molta gente.',
        en: 'In the morning the square is quiet. In the evening, on the other hand, there are a lot of people.',
      },
      {
        it: 'Vicino a casa mia c\'è un parco. Quando fa bel tempo, porto il cane lì.',
        en: 'Near my house there is a park. When the weather is nice, I take the dog there.',
      },
      {
        it: 'Non ho la macchina, ma non mi serve: vado a piedi dappertutto.',
        en: 'I do not have a car, but I do not need one: I go everywhere on foot.',
      },
    ],
    glossary: [
      { term: 'la piazza', gloss: 'square' },
      { term: 'la chiesa', gloss: 'church' },
      { term: 'tranquillo', gloss: 'quiet, calm' },
      { term: 'la gente', gloss: 'people (singular in Italian!)' },
      { term: 'a piedi', gloss: 'on foot' },
    ],
    questions: [
      {
        id: 'a1-cit-q1',
        prompt: "Com'è la città?",
        options: ['Grande e rumorosa', 'Piccola e bella', 'Lontana dal mare', 'Moderna'],
        answer: 1,
        explanation: '«Abito in una città piccola [...] è molto bella.»',
      },
      {
        id: 'a1-cit-q2',
        prompt: "Quando c'è molta gente in piazza?",
        options: ['La mattina', 'La sera', 'A mezzogiorno', 'Mai'],
        answer: 1,
        explanation: '«La sera, invece, c\'è molta gente.»',
      },
      {
        id: 'a1-cit-q3',
        prompt: 'Perché non gli serve la macchina?',
        options: ['Perché va a piedi dappertutto', 'Perché è troppo cara', 'Perché non sa guidare', 'Perché usa il treno'],
        answer: 0,
        explanation: '«non mi serve: vado a piedi dappertutto».',
      },
    ],
  },
];

export const articlesByLevel = (level: Article['level']) => ARTICLES.filter((a) => a.level === level);
