import type { GrammarLesson } from '../types';

/**
 * C2 grammar: what is left once the language is known.
 *
 * Nothing here is a rule in the sense the earlier levels use the word. These
 * are the choices a native speaker makes without deliberating — which register
 * a situation calls for, when a fixed phrase is expected, how much can be left
 * unsaid — and they are the difference between correct Italian and Italian that
 * sounds like it came from somebody who grew up in it.
 */
export const GRAMMAR_C2: GrammarLesson[] = [
  {
    id: 'gr-c2-burocratese',
    level: 'C2',
    title: 'Il linguaggio burocratico e giuridico',
    focus: 'reading a contract, a summons or a circular without flinching',
    explanation:
      'Italian officialdom writes in a register with its own syntax: the agent disappears into a si or a passive, verbs become nouns, and a set of formulas recurs unchanged from document to document. Ai sensi dell’articolo, fatto salvo quanto previsto, ferma restando la facoltà. It is widely criticised inside Italy and shows no sign of retreating, so at C2 it has to be read fluently even if never written.',
    tables: [
      {
        caption: 'The recurring formulas',
        headers: ['Formula', 'Meaning'],
        rows: [
          ['ai sensi di / a norma di', 'under, pursuant to'],
          ['fatto salvo / salvo quanto previsto da', 'without prejudice to'],
          ['ferma restando', 'the … remaining unaffected'],
          ['di cui al comma', 'referred to in subsection'],
          ['il sottoscritto … dichiara che', 'I, the undersigned, declare that'],
          ['entro e non oltre', 'by … at the latest'],
          ['si diffida a', 'notice is hereby given to'],
        ],
      },
      {
        caption: 'How it removes the agent',
        headers: ['Plain', 'Bureaucratic'],
        rows: [
          ['Dovete pagare entro il 30', 'Il pagamento dovrà essere effettuato entro il 30'],
          ['Abbiamo respinto la domanda', 'La domanda è stata rigettata'],
          ['Vi diciamo che', 'Si comunica che'],
          ['Se non paghi', 'In caso di mancato pagamento'],
        ],
      },
    ],
    examples: [
      { it: 'Ai sensi dell’art. 3, comma 2, la domanda va presentata entro e non oltre il 30 aprile.', en: 'Under art. 3(2), the application must be submitted by 30 April at the latest.' },
      { it: 'Ferma restando la facoltà di ricorso, il provvedimento è esecutivo.', en: 'Without prejudice to the right of appeal, the measure is enforceable.' },
      { it: 'In caso di mancato riscontro si procederà d’ufficio.', en: 'Failing a reply, the matter will be dealt with automatically.' },
      { it: 'Il sottoscritto, consapevole delle sanzioni penali, dichiara quanto segue.', en: 'The undersigned, aware of the criminal penalties, declares as follows.' },
    ],
    pitfall:
      'Mancato plus a noun is the standard way of saying "failure to": mancato pagamento, mancata consegna, mancato riscontro. It has no natural English equivalent and is easy to misread as an adjective describing the thing rather than its absence.',
    questions: [
      {
        id: 'gr-bur-q1',
        prompt: 'Che cosa significa «ai sensi dell’articolo 5»?',
        options: ['nel senso dell’articolo 5', 'in base all’articolo 5', 'contro l’articolo 5', 'oltre l’articolo 5'],
        answer: 1,
        explanation: 'Ai sensi di means pursuant to, under a given provision.',
      },
      {
        id: 'gr-bur-q2',
        prompt: '«In caso di mancato pagamento» significa:',
        options: ['se il pagamento è sbagliato', 'se non si paga', 'se il pagamento è parziale', 'quando il pagamento arriva'],
        answer: 1,
        explanation: 'Mancato plus noun expresses the failure of the thing to happen.',
      },
      {
        id: 'gr-bur-q3',
        prompt: '«Ferma restando la facoltà di ricorso» vuol dire che:',
        options: ['il ricorso è escluso', 'il diritto di ricorso resta valido', 'il ricorso è obbligatorio', 'il ricorso è sospeso'],
        answer: 1,
        explanation: 'The right remains untouched by what the rest of the sentence provides.',
      },
    ],
  },
  {
    id: 'gr-c2-letterario',
    level: 'C2',
    title: 'Registro letterario e sintassi marcata',
    focus: 'inversion, hyperbaton, and the participle doing work',
    explanation:
      'Literary Italian permits word orders that would be marked or wrong in speech: the verb before its subject, the adjective before its noun for effect, a long participial clause where prose would use a finite verb. Manzoni’s quel ramo del lago di Como is a noun phrase carrying an entire landscape. Reading it fluently means recognising that the deviation from ordinary order is itself the message.',
    tables: [
      {
        caption: 'Marked orders',
        headers: ['Device', 'Example', 'Ordinary'],
        rows: [
          ['verb–subject inversion', 'Giunse allora un messaggero.', 'Allora arrivò un messaggero.'],
          ['adjective fronting', 'la candida neve', 'la neve bianca'],
          ['hyperbaton', 'di lui non seppi più nulla', 'non seppi più nulla di lui'],
          ['participial clause', 'Giunti a Roma, si separarono.', 'Quando arrivarono a Roma…'],
          ['enclitic pronoun', 'diedegli il libro', 'gli diede il libro'],
        ],
      },
    ],
    examples: [
      { it: 'Tacque a lungo, poi parlò.', en: 'He was silent a long while, then spoke.' },
      { it: 'Erano, quelli, anni difficili.', en: 'Those were difficult years.' },
      { it: 'Non v’era anima viva per le strade.', en: 'There was not a living soul in the streets.' },
      { it: 'Di ciò non v’è traccia nei documenti.', en: 'Of this there is no trace in the documents.' },
    ],
    pitfall:
      'Vi and v’è for ci and c’è, and the enclitic pronoun on a finite verb, are literary or archaic. Reading them is a C2 skill; producing them in ordinary prose reads as pastiche.',
    questions: [
      {
        id: 'gr-let-q1',
        prompt: '«Giunse allora un messaggero» presenta:',
        options: ['una dislocazione', 'un’inversione verbo-soggetto', 'un passivo', 'una nominalizzazione'],
        answer: 1,
        explanation: 'The verb precedes its subject — a narrative device, not an error.',
      },
      {
        id: 'gr-let-q2',
        prompt: '«V’è» corrisponde a:',
        options: ['vi è, cioè c’è', 'ove è', 'vuole essere', 'era'],
        answer: 0,
        explanation: 'Vi is the literary counterpart of ci.',
      },
      {
        id: 'gr-let-q3',
        prompt: 'Che effetto ha «la candida neve» rispetto a «la neve bianca»?',
        options: [
          'Distingue questa neve da un’altra',
          'Presenta il candore come qualità attesa, con effetto poetico',
          'È più preciso',
          'È più colloquiale',
        ],
        answer: 1,
        explanation: 'The fronted adjective states an expected quality rather than distinguishing.',
      },
    ],
  },
  {
    id: 'gr-c2-fraseologia',
    level: 'C2',
    title: 'Fraseologia e modi di dire',
    focus: 'the fixed expressions that cannot be assembled from their parts',
    explanation:
      'Idiom is where a C1 speaker is still visible. These phrases are fixed: the words cannot be swapped for synonyms, and the grammar inside them is often frozen. Non ci piove, avere le mani in pasta, prendere lucciole per lanterne. Knowing them matters less for production than for comprehension — an Italian will use three in a paragraph without considering them figurative at all.',
    tables: [
      {
        caption: 'In frequent use',
        headers: ['Expression', 'Literal', 'Meaning'],
        rows: [
          ['non ci piove', 'it does not rain on it', 'there is no doubt about it'],
          ['avere le mani in pasta', 'to have hands in the dough', 'to be involved, to have influence'],
          ['prendere lucciole per lanterne', 'fireflies for lanterns', 'to get things badly wrong'],
          ['essere in alto mare', 'to be on the high seas', 'to be nowhere near finished'],
          ['fare orecchie da mercante', 'merchant’s ears', 'to turn a deaf ear'],
          ['cadere dalle nuvole', 'to fall from the clouds', 'to be taken completely aback'],
          ['mettere una pulce nell’orecchio', 'a flea in the ear', 'to plant a suspicion'],
          ['tirare l’acqua al proprio mulino', 'water to one’s own mill', 'to look after one’s own interests'],
        ],
      },
    ],
    examples: [
      { it: 'Che sia bravo non ci piove; il problema è un altro.', en: 'That he is good is beyond doubt; the problem is a different one.' },
      { it: 'Con il progetto siamo ancora in alto mare.', en: 'We are nowhere near finished with the project.' },
      { it: 'Quando gliel’ho detto è caduto dalle nuvole.', en: 'When I told him he was completely taken aback.' },
      { it: 'Ha le mani in pasta un po’ dappertutto.', en: 'He has a finger in every pie.' },
    ],
    pitfall:
      'These are frozen. Non ci piove cannot become non ci pioveva, and mettere una pulce nell’orecchio does not survive changing pulce to insetto. Half-remembering one and improvising the rest is more conspicuous than not using it.',
    questions: [
      {
        id: 'gr-fr-q1',
        prompt: 'Che cosa significa «siamo in alto mare»?',
        options: ['siamo in vacanza', 'siamo lontani dal finire', 'siamo in pericolo', 'siamo quasi pronti'],
        answer: 1,
        explanation: 'Far from land, and so far from finishing.',
      },
      {
        id: 'gr-fr-q2',
        prompt: '«Non ci piove» vuol dire:',
        options: ['non è importante', 'non ci sono dubbi', 'non è vero', 'non è ancora deciso'],
        answer: 1,
        explanation: 'It marks something as beyond argument.',
      },
      {
        id: 'gr-fr-q3',
        prompt: '«Cadere dalle nuvole» descrive:',
        options: ['una caduta', 'lo stupore di chi non sapeva nulla', 'un sogno', 'una distrazione abituale'],
        answer: 1,
        explanation: 'Genuine, sometimes feigned, astonishment at news.',
      },
    ],
  },
  {
    id: 'gr-c2-congiuntivo-formule',
    level: 'C2',
    title: 'Il congiuntivo nelle formule fisse',
    focus: 'sia detto per inciso, che io sappia, volente o nolente',
    explanation:
      'A layer of the subjunctive survives only inside set phrases, where it no longer follows from any rule. Che io sappia, che si sappia, sia detto per inciso, costi quel che costi, sia come sia. These are learned whole. Alongside them sit optative uses — vivesse ancora mio padre — and the jussive third person that survives in instructions and prayers: si accomodi, sia fatta la tua volontà.',
    tables: [
      {
        caption: 'Fixed phrases',
        headers: ['Phrase', 'Meaning'],
        rows: [
          ['che io sappia', 'as far as I know'],
          ['sia detto per inciso', 'be it said in passing'],
          ['costi quel che costi', 'whatever it costs'],
          ['sia come sia', 'be that as it may'],
          ['volente o nolente', 'willing or not'],
          ['a costo che', 'even at the cost of'],
          ['che tu sappia?', 'as far as you know?'],
        ],
      },
      {
        caption: 'Other survivals',
        headers: ['Use', 'Example'],
        rows: [
          ['optative', 'Fosse vero!'],
          ['jussive', 'Si accomodi pure.'],
          ['concessive', 'Venga pure, tanto non cambia nulla.'],
          ['formulaic wish', 'Che Dio ce la mandi buona.'],
        ],
      },
    ],
    examples: [
      { it: 'Che io sappia, non è ancora stato deciso nulla.', en: 'As far as I know, nothing has been decided yet.' },
      { it: 'Sia come sia, domani si parte.', en: 'Be that as it may, we leave tomorrow.' },
      { it: 'Fosse per me, cambierei tutto.', en: 'If it were up to me, I would change everything.' },
      { it: 'Costi quel che costi, lo finiamo entro venerdì.', en: 'Whatever it takes, we finish it by Friday.' },
    ],
    pitfall:
      'Che io sappia limits a claim to your own knowledge and is not interchangeable with per quanto ne so, which is slightly more formal, or with secondo me, which states an opinion rather than a limit on information.',
    questions: [
      {
        id: 'gr-cf-q1',
        prompt: '«Che io sappia» significa:',
        options: ['perché io sappia', 'per quanto ne so', 'affinché io sappia', 'se io sapessi'],
        answer: 1,
        explanation: 'A frozen phrase limiting the claim to the speaker’s knowledge.',
      },
      {
        id: 'gr-cf-q2',
        prompt: '«Fosse vero!» esprime:',
        options: ['un dubbio', 'un desiderio irrealizzabile', 'un ordine', 'una concessione'],
        answer: 1,
        explanation: 'The optative subjunctive: if only it were true.',
      },
      {
        id: 'gr-cf-q3',
        prompt: '«Sia come sia» introduce:',
        options: ['una conclusione nonostante quanto detto', 'una causa', 'un esempio', 'una condizione'],
        answer: 0,
        explanation: 'It sets the preceding discussion aside and moves on.',
      },
    ],
  },
  {
    id: 'gr-c2-indiretto-libero',
    level: 'C2',
    title: 'Il discorso indiretto libero',
    focus: 'a character’s voice inside the narrator’s sentence',
    explanation:
      'Free indirect speech reports a character’s thought without a reporting verb and without quotation marks, keeping the tense and person shifts of indirect speech but the syntax and vocabulary of the original. Era stanco. Perché doveva sempre toccare a lui? The second sentence is the character’s, though it is written as the narrator’s. It is the central technique of the modern Italian novel and appears constantly in journalism.',
    tables: [
      {
        caption: 'Three ways to report a thought',
        headers: ['Mode', 'Example'],
        rows: [
          ['direct', 'Pensò: «Perché deve sempre toccare a me?»'],
          ['indirect', 'Pensò che non capiva perché dovesse sempre toccare a lui.'],
          ['free indirect', 'Perché doveva sempre toccare a lui?'],
        ],
      },
      {
        caption: 'What marks it',
        headers: ['Signal', 'Note'],
        rows: [
          ['no reporting verb', 'the narrator does not say "he thought"'],
          ['third person, past tense', 'as in indirect speech'],
          ['exclamations and questions kept', 'as in direct speech'],
          ['colloquial words of the character', 'a lexical clash with the narration'],
        ],
      },
    ],
    examples: [
      { it: 'Guardò l’orologio. Possibile che fosse già così tardi?', en: 'He looked at the clock. Could it really be that late?' },
      { it: 'Non se ne parlava nemmeno. Lui non ci sarebbe andato.', en: 'It was out of the question. He would not go.' },
      { it: 'Che sciocchezza, quella storia dei documenti.', en: 'What nonsense, that business about the documents.' },
      { it: 'Doveva calmarsi. Domani sarebbe stato tutto più chiaro.', en: 'He had to calm down. Tomorrow everything would be clearer.' },
    ],
    pitfall:
      'It relies on the reader recognising a shift of voice, so it needs a stable narrative frame around it. Dropped into an otherwise impersonal text it simply reads as a change of subject.',
    questions: [
      {
        id: 'gr-dil-q1',
        prompt: 'Che cosa manca nel discorso indiretto libero?',
        options: ['il verbo principale della frase', 'il verbo dichiarativo e le virgolette', 'i pronomi', 'i tempi verbali'],
        answer: 1,
        explanation: 'No "he thought", no quotation marks — the voice is embedded in the narration.',
      },
      {
        id: 'gr-dil-q2',
        prompt: 'Quali tratti conserva dal discorso diretto?',
        options: ['la persona', 'il tempo verbale', 'esclamazioni e domande', 'le virgolette'],
        answer: 2,
        explanation: 'Person and tense shift as in indirect speech; the expressive syntax does not.',
      },
      {
        id: 'gr-dil-q3',
        prompt: '«Possibile che fosse già così tardi?» è:',
        options: ['discorso diretto', 'discorso indiretto', 'discorso indiretto libero', 'una domanda del narratore'],
        answer: 2,
        explanation: 'The character’s question, in the narrator’s tense and person.',
      },
    ],
  },
  {
    id: 'gr-c2-ironia',
    level: 'C2',
    title: 'Ironia, litote e attenuazione',
    focus: 'saying less than you mean, and meaning the opposite',
    explanation:
      'Italian understatement has its own grammar. Litotes negates the opposite — non è male, non poco, non senza difficoltà — and is far commoner in Italian than in English, where it can sound arch. Attenuation uses the conditional and the imperfect to soften: volevo dirti, sarebbe il caso di. And the diminutive is doing rhetorical work as often as descriptive: un problemino is rarely a small problem.',
    tables: [
      {
        caption: 'Devices',
        headers: ['Device', 'Example', 'What it means'],
        rows: [
          ['litote', 'Non è male.', 'It is rather good.'],
          ['litote', 'Non ci vuole poco.', 'It takes quite a lot.'],
          ['attenuation', 'Volevo chiederti una cosa.', 'a softened request'],
          ['attenuation', 'Sarebbe il caso di andare.', 'we should go'],
          ['ironic diminutive', 'un lavoretto di tre mesi', 'a substantial job'],
          ['ironic augmentative', 'Bell’affare!', 'a bad business'],
          ['antiphrasis', 'Complimenti davvero.', 'the opposite of praise'],
        ],
      },
    ],
    examples: [
      { it: 'Non è stato facilissimo, diciamo.', en: 'It was not exactly easy, let us say.' },
      { it: 'Un problemino c’è.', en: 'There is a bit of a problem. (usually a serious one)' },
      { it: 'Bravo, complimenti.', en: 'Well done. (often said when someone has made a mess)' },
      { it: 'Non che mi dispiaccia, anzi.', en: 'Not that I mind — quite the contrary.' },
    ],
    pitfall:
      'Irony in Italian relies on intonation and on shared context rather than on marked wording. Written down without either, complimenti davvero reads as praise — which is why it lands badly in emails and messages.',
    questions: [
      {
        id: 'gr-iro-q1',
        prompt: '«Non è male» significa:',
        options: ['è cattivo', 'è piuttosto buono', 'è indifferente', 'non è finito'],
        answer: 1,
        explanation: 'Litotes: negating the opposite to assert something positive.',
      },
      {
        id: 'gr-iro-q2',
        prompt: 'Che cosa suggerisce «un problemino»?',
        options: [
          'Sempre un problema trascurabile',
          'Spesso un problema serio, presentato con understatement',
          'Un problema tecnico',
          'Un problema di poco tempo fa',
        ],
        answer: 1,
        explanation: 'The diminutive attenuates the presentation, not the problem.',
      },
      {
        id: 'gr-iro-q3',
        prompt: 'Perché l’ironia scritta è rischiosa in italiano?',
        options: [
          'Perché non esiste',
          'Perché dipende da intonazione e contesto condiviso',
          'Perché richiede il congiuntivo',
          'Perché è considerata scortese',
        ],
        answer: 1,
        explanation: 'Without the voice, the words alone often carry their literal sense.',
      },
    ],
  },
  {
    id: 'gr-c2-varieta',
    level: 'C2',
    title: 'Varietà regionali e italiano standard',
    focus: 'what is regional, what is substandard, and what has quietly become normal',
    explanation:
      'There is no single spoken Italian. Regional varieties differ in vocabulary, in some syntax, and in the tenses they favour — the passato remoto is alive in the south and moribund in the north. Some regionalisms are neutral and universally understood; others mark you geographically; a third group is stigmatised in writing though extremely common in speech. Telling the three apart is a C2 skill, because it decides what you can safely use where.',
    tables: [
      {
        caption: 'Three kinds of variation',
        headers: ['Kind', 'Example', 'Status'],
        rows: [
          ['neutral regional', 'anguria / cocomero / melone', 'both fine, geography only'],
          ['regional syntax', 'Esci il cane (south)', 'regional, avoided in writing'],
          ['spoken but stigmatised', 'Se lo sapevo, venivo', 'very common, not written'],
          ['spoken, now accepted', 'lui / lei as subject', 'standard today'],
          ['spoken, spreading', 'gli for a loro', 'tolerated in speech, criticised in writing'],
        ],
      },
      {
        caption: 'Regional preferences',
        headers: ['North', 'South'],
        rows: [
          ['passato prossimo for everything', 'passato remoto alive in speech'],
          ['tu with almost everyone', 'voi as a courtesy form in places'],
          ['«mica» very frequent', '«mo’» for adesso'],
        ],
      },
    ],
    examples: [
      { it: 'Ieri sono andato al mare. / Ieri andai al mare.', en: 'Yesterday I went to the sea. (north / south)' },
      { it: 'Non è mica facile.', en: 'It is not exactly easy. (mica: colloquial, pan-Italian)' },
      { it: 'Gli ho detto a tutti quanti.', en: 'I told all of them. (gli for loro: spoken, criticised in writing)' },
      { it: 'Se lo sapevo, non venivo.', en: 'If I had known, I would not have come. (very common in speech)' },
    ],
    pitfall:
      'Gli for a loro and the indicative third conditional are so widespread in speech that they sound native — and both are still marked as errors in any written text that is corrected. The safe rule is to recognise them everywhere and write neither.',
    questions: [
      {
        id: 'gr-var-q1',
        prompt: '«Se lo sapevo, venivo» è:',
        options: ['standard scritto', 'molto comune nel parlato ma non nello scritto', 'errore incomprensibile', 'forma letteraria'],
        answer: 1,
        explanation: 'Ubiquitous in speech, still corrected in writing.',
      },
      {
        id: 'gr-var-q2',
        prompt: 'Dove il passato remoto è ancora vivo nel parlato?',
        options: ['nel nord', 'nel sud', 'in nessuna regione', 'solo in Toscana'],
        answer: 1,
        explanation: 'In much of the south it is ordinary speech; in the north it is a written tense.',
      },
      {
        id: 'gr-var-q3',
        prompt: '«Gli ho detto a tutti» usa gli al posto di:',
        options: ['le', 'loro', 'ci', 'ne'],
        answer: 1,
        explanation: 'Gli for a loro: standard in speech, marked in writing.',
      },
    ],
  },
  {
    id: 'gr-c2-neologismi',
    level: 'C2',
    title: 'Prestiti, calchi e neologismi',
    focus: 'how Italian absorbs foreign words, and what it does to them',
    explanation:
      'Italian borrows heavily and inflects almost nothing it borrows: un film, due film. Loans keep the gender of their Italian equivalent — la mail because posta is feminine, il weekend because fine settimana is masculine. Verbs get Italianised through -are: cliccare, chattare, scrollare, formattare. And there are calques where the Italian word already existed with another sense — realizzare has taken on the English "to realise" alongside its own "to bring about", a shift purists still object to.',
    tables: [
      {
        caption: 'How loans behave',
        headers: ['Rule', 'Example'],
        rows: [
          ['no plural inflection', 'un film / due film, un computer / due computer'],
          ['gender from the Italian equivalent', 'la mail (posta), il weekend (fine settimana)'],
          ['verbs via -are', 'cliccare, postare, chattare, scrollare'],
          ['blends', 'apericena, spelacchio, cinepanettone'],
          ['calques', 'realizzare (to realise), assumere (to assume)'],
        ],
      },
      {
        caption: 'False friends still worth flagging at C2',
        headers: ['Italian', 'Not', 'Actually'],
        rows: [
          ['eventualmente', 'eventually', 'if need be'],
          ['attualmente', 'actually', 'currently'],
          ['pretendere', 'to pretend', 'to demand'],
          ['morbido', 'morbid', 'soft'],
          ['fattoria', 'factory', 'farm'],
          ['argomento', 'argument', 'topic'],
        ],
      },
    ],
    examples: [
      { it: 'Ho due computer e nessuno dei due funziona.', en: 'I have two computers and neither works.' },
      { it: 'Ti mando una mail.', en: 'I will send you an email.' },
      { it: 'Eventualmente ci sentiamo domani.', en: 'If need be, we will speak tomorrow.' },
      { it: 'Attualmente lavoro a Milano.', en: 'I currently work in Milan.' },
    ],
    pitfall:
      'Eventualmente and attualmente are the two false friends that survive longest, because both produce a sentence that makes sense in English and says something else in Italian. Eventualmente vengo means I might come, not I will come in the end.',
    questions: [
      {
        id: 'gr-neo-q1',
        prompt: 'Qual è il plurale di «film»?',
        options: ['films', 'film', 'filmi', 'filme'],
        answer: 1,
        explanation: 'Loanwords do not inflect: due film, tre computer, molti bar.',
      },
      {
        id: 'gr-neo-q2',
        prompt: '«Eventualmente vengo» significa:',
        options: ['alla fine verrò', 'se serve, vengo', 'non verrò', 'verrò più tardi'],
        answer: 1,
        explanation: 'Eventualmente means if need be, not eventually.',
      },
      {
        id: 'gr-neo-q3',
        prompt: 'Perché si dice «la mail»?',
        options: ['Perché è inglese', 'Perché prende il genere di «posta»', 'Perché finisce in consonante', 'È un errore'],
        answer: 1,
        explanation: 'Loans take the gender of the nearest Italian equivalent.',
      },
    ],
  },
  {
    id: 'gr-c2-coesione',
    level: 'C2',
    title: 'Coesione e coerenza testuale',
    focus: 'what makes a text hold together beyond its sentences',
    explanation:
      'Cohesion is the surface machinery — pronouns, connectives, lexical repetition and its avoidance. Coherence is whether the text makes sense as an argument. Italian prose leans hard on lexical substitution: naming the same thing three different ways across a paragraph (il provvedimento, la norma, il testo) where English would repeat the noun or use "it". Doing this well is what separates a translated-sounding text from one written in Italian.',
    tables: [
      {
        caption: 'Cohesive devices',
        headers: ['Device', 'Example'],
        rows: [
          ['pronoun reference', 'Il testo è lungo: lo leggerò domani.'],
          ['lexical substitution', 'la legge → il provvedimento → la norma'],
          ['hyperonym', 'il cane → l’animale'],
          ['nominal recovery', 'Ha rifiutato. Questa decisione ha sorpreso tutti.'],
          ['connectives', 'quindi, tuttavia, del resto'],
          ['ellipsis', 'Alcuni accettarono, altri no.'],
        ],
      },
    ],
    examples: [
      { it: 'La riforma è stata approvata. Il provvedimento entrerà in vigore a gennaio.', en: 'The reform has been approved. The measure will come into force in January.' },
      { it: 'Ha rifiutato l’offerta. Una decisione che ha sorpreso tutti.', en: 'He turned the offer down. A decision that surprised everyone.' },
      { it: 'Alcuni erano favorevoli, altri contrari, altri ancora indecisi.', en: 'Some were in favour, others against, others still undecided.' },
      { it: 'Il problema non è tecnico. È politico.', en: 'The problem is not technical. It is political.' },
    ],
    pitfall:
      'Repeating the same noun in consecutive sentences reads as clumsy in Italian in a way it does not in English. The fix is a synonym, a hyperonym or a nominalisation of the previous clause — not a pronoun every time.',
    questions: [
      {
        id: 'gr-coe-q1',
        prompt: 'Che cos’è la sostituzione lessicale?',
        options: [
          'Ripetere lo stesso sostantivo',
          'Nominare la stessa cosa con parole diverse',
          'Usare sempre i pronomi',
          'Tradurre parola per parola',
        ],
        answer: 1,
        explanation: 'la legge → il provvedimento → la norma, across a paragraph.',
      },
      {
        id: 'gr-coe-q2',
        prompt: '«Ha rifiutato. Questa decisione…» è un caso di:',
        options: ['ellissi', 'ripresa nominale', 'connettivo', 'iperonimo'],
        answer: 1,
        explanation: 'The previous clause is recovered as a noun phrase.',
      },
      {
        id: 'gr-coe-q3',
        prompt: 'Qual è la differenza tra coesione e coerenza?',
        options: [
          'Nessuna',
          'La coesione è la superficie linguistica, la coerenza la tenuta logica',
          'La coerenza riguarda solo i pronomi',
          'La coesione riguarda solo la punteggiatura',
        ],
        answer: 1,
        explanation: 'A text can be perfectly cohesive and still make no sense.',
      },
    ],
  },
  {
    id: 'gr-c2-sfumature',
    level: 'C2',
    title: 'Sfumature: coppie quasi sinonime',
    focus: 'the distinctions natives make without noticing',
    explanation:
      'At C2 the remaining work is discrimination between words that dictionaries gloss identically. Sentire and ascoltare, guardare and vedere, portare and prendere, imparare and apprendere. In each pair one term is neutral and the other adds intention, register or aspect. Getting these wrong does not produce ungrammatical Italian — it produces Italian that is very slightly, persistently off.',
    tables: [
      {
        caption: 'Pairs',
        headers: ['Pair', 'Difference'],
        rows: [
          ['sentire / ascoltare', 'perceive / listen deliberately'],
          ['vedere / guardare', 'see / look at deliberately'],
          ['portare / prendere', 'bring or carry / take, fetch'],
          ['imparare / apprendere', 'learn / learn, formal or "find out"'],
          ['adesso / ora', 'informal / neutral, more written'],
          ['abitare / vivere', 'reside / live, be alive, spend one’s life'],
          ['fermarsi / smettere', 'stop moving / stop doing'],
          ['ricordare / ricordarsi di', 'remember something / call to mind, with di'],
        ],
      },
    ],
    examples: [
      { it: 'Sento la musica dei vicini, ma non la ascolto.', en: 'I hear the neighbours’ music, but I am not listening to it.' },
      { it: 'Abito a Roma da tre anni, ma ho vissuto in tre paesi.', en: 'I have lived in Rome for three years, but I have lived in three countries.' },
      { it: 'La macchina si è fermata, così ho smesso di guidare.', en: 'The car stopped, so I stopped driving.' },
      { it: 'Ho appreso la notizia dai giornali.', en: 'I learnt the news from the papers.' },
    ],
    pitfall:
      'Sentire covers hearing, smelling, tasting and feeling — senti che profumo, senti che freddo. English speakers reach for a different verb for each sense and end up avoiding the one word an Italian would use in all four cases.',
    questions: [
      {
        id: 'gr-sf-q1',
        prompt: '«Sento la musica ma non la ___ .»',
        options: ['sento', 'ascolto', 'odo', 'guardo'],
        answer: 1,
        explanation: 'Ascoltare adds the intention that sentire lacks.',
      },
      {
        id: 'gr-sf-q2',
        prompt: 'Quale verbo si usa per «smettere di fare qualcosa»?',
        options: ['fermarsi', 'smettere', 'sostare', 'arrestarsi'],
        answer: 1,
        explanation: 'Fermarsi is to stop moving; smettere is to stop an activity.',
      },
      {
        id: 'gr-sf-q3',
        prompt: 'Come si dice «smell that!» in italiano corrente?',
        options: ['Odora quello!', 'Senti che profumo!', 'Annusa quello!', 'Guarda che profumo!'],
        answer: 1,
        explanation: 'Sentire covers smell as well as hearing, taste and touch.',
      },
    ],
  },
];
