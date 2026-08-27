import type { GrammarLesson } from './types';

/**
 * A1 grammar, ordered so each lesson only relies on the ones before it.
 *
 * A note on the last two: `farcela` and `andarsene` are pronominal verbs, and
 * their full paradigms belong at B1. They are taught here as fixed chunks —
 * `ce la faccio`, `me ne vado` — because a beginner can use those immediately
 * and correctly, and will meet them on day one in real speech. The paradigm
 * comes later; the phrase is useful now.
 */
export const GRAMMAR: GrammarLesson[] = [
  {
    id: 'gr-a1-pronomi-soggetto',
    level: 'A1',
    title: 'I pronomi personali soggetto',
    focus: 'io, tu, lui, lei — and why Italians usually leave them out',
    explanation:
      'Italian verb endings already say who is doing the action, so the subject pronoun is normally dropped: parlo means "I speak" with no io needed. You use the pronoun only for emphasis or contrast — Io pago, "I\'ll pay (not you)". A beginner who says io before every verb sounds insistent rather than clear, which is the opposite of the intended effect.',
    tables: [
      {
        caption: 'Subject pronouns',
        headers: ['Person', 'Italian', 'English'],
        rows: [
          ['1 sing.', 'io', 'I'],
          ['2 sing.', 'tu', 'you (informal)'],
          ['3 sing.', 'lui / lei', 'he / she'],
          ['formal', 'Lei', 'you (formal, capitalised)'],
          ['1 plur.', 'noi', 'we'],
          ['2 plur.', 'voi', 'you (plural)'],
          ['3 plur.', 'loro', 'they'],
        ],
      },
    ],
    examples: [
      { it: 'Parlo italiano.', en: 'I speak Italian. (no io needed)' },
      { it: 'Io parlo italiano, lui no.', en: 'I speak Italian, he does not. (contrast, so the pronoun appears)' },
      { it: 'Lei come si chiama?', en: 'What is your name? (formal)' },
    ],
    pitfall:
      'Italian has no equivalent of "it" as a subject. "It is raining" is simply Piove; "it is late" is È tardi. Adding a pronoun there is a common English-speaker error.',
    questions: [
      {
        id: 'gr-ps-q1',
        prompt: 'Perché di solito si omette il pronome soggetto?',
        options: [
          'Perché è considerato scortese',
          'Perché la desinenza del verbo indica già la persona',
          'Perché non esiste in italiano',
          'Perché si usa solo per iscritto',
        ],
        answer: 1,
        explanation: 'The verb ending carries the person, so the pronoun is redundant unless you want emphasis or contrast.',
      },
      {
        id: 'gr-ps-q2',
        prompt: 'Come si dice «It is late»?',
        options: ['Esso è tardi', 'È tardi', 'Lui è tardi', 'Questo è tardi'],
        answer: 1,
        explanation: 'Italian has no dummy subject "it": È tardi, Piove, Fa freddo.',
      },
      {
        id: 'gr-ps-q3',
        prompt: 'Quale pronome si usa per dare del «Lei» a una persona?',
        options: ['tu', 'voi', 'Lei', 'loro'],
        answer: 2,
        explanation: 'Formal address uses Lei with third-person singular verb forms, and is usually capitalised in writing.',
      },
    ],
  },
  {
    id: 'gr-a1-essere-avere',
    level: 'A1',
    title: 'Essere e avere',
    focus: 'The two verbs you cannot avoid, and where Italian uses avere but English uses "to be"',
    explanation:
      'Essere ("to be") and avere ("to have") are irregular and appear constantly, both alone and as auxiliaries later on. The trap for English speakers is a set of everyday states that Italian expresses with avere: age, hunger, thirst, fear, cold. You do not "are" twenty years old — you "have" twenty years.',
    tables: [
      {
        caption: 'Present tense',
        headers: ['', 'essere', 'avere'],
        rows: [
          ['io', 'sono', 'ho'],
          ['tu', 'sei', 'hai'],
          ['lui / lei', 'è', 'ha'],
          ['noi', 'siamo', 'abbiamo'],
          ['voi', 'siete', 'avete'],
          ['loro', 'sono', 'hanno'],
        ],
      },
      {
        caption: 'States that take avere, not essere',
        headers: ['Italian', 'Literally', 'English'],
        rows: [
          ['ho 30 anni', 'I have 30 years', 'I am 30'],
          ['ho fame', 'I have hunger', 'I am hungry'],
          ['ho sete', 'I have thirst', 'I am thirsty'],
          ['ho freddo', 'I have cold', 'I am cold'],
          ['ho paura', 'I have fear', 'I am afraid'],
          ['ho sonno', 'I have sleep', 'I am sleepy'],
        ],
      },
    ],
    examples: [
      { it: 'Sono americano, ho trent\'anni.', en: 'I am American, I am thirty.' },
      { it: 'Hai fame? Io ho sete.', en: 'Are you hungry? I am thirsty.' },
      { it: 'Siamo in ritardo.', en: 'We are late.' },
    ],
    pitfall:
      'The h in ho, hai, ha, hanno is silent. It exists only to keep those forms distinct in writing from o, ai, a, anno — never pronounce it.',
    questions: [
      {
        id: 'gr-ea-q1',
        prompt: 'Come si dice «I am 25 years old»?',
        options: ['Sono venticinque anni', 'Ho venticinque anni', 'Sono venticinque', 'Ho venticinque'],
        answer: 1,
        explanation: 'Age uses avere: ho venticinque anni. Anni cannot be dropped.',
      },
      {
        id: 'gr-ea-q2',
        prompt: 'Qual è la forma corretta per «noi»?',
        options: ['siamo / abbiamo', 'siete / avete', 'sono / hanno', 'sei / hai'],
        answer: 0,
        explanation: 'noi siamo, noi abbiamo.',
      },
      {
        id: 'gr-ea-q3',
        prompt: 'Perché si scrive «ho» con l\'acca?',
        options: [
          'Perché si pronuncia diversamente',
          'Per distinguerlo da «o» (or) nello scritto',
          'Perché è un verbo irregolare',
          'Per indicare l\'accento',
        ],
        answer: 1,
        explanation: 'The h is purely orthographic, separating ho from o, hai from ai, ha from a, hanno from anno.',
      },
    ],
  },
  {
    id: 'gr-a1-articoli',
    level: 'A1',
    title: 'Gli articoli',
    focus: 'il, lo, la, i, gli, le — chosen by the sound that follows',
    explanation:
      'Italian picks the article by the sound at the start of the next word, not just by gender. That is why it is lo studente but il ragazzo: lo appears before s+consonant, z, gn, ps and y. Get this and your Italian immediately looks less foreign on the page.',
    tables: [
      {
        caption: 'Definite articles (the)',
        headers: ['Before', 'Singular', 'Plural', 'Example'],
        rows: [
          ['most masculine', 'il', 'i', 'il libro → i libri'],
          ['masc. + vowel', "l'", 'gli', "l'amico → gli amici"],
          ['masc. + s+cons., z, gn, ps', 'lo', 'gli', 'lo studente → gli studenti'],
          ['most feminine', 'la', 'le', 'la casa → le case'],
          ['fem. + vowel', "l'", 'le', "l'acqua → le acque"],
        ],
      },
      {
        caption: 'Indefinite articles (a, an)',
        headers: ['Gender', 'Form', 'Example'],
        rows: [
          ['masculine', 'un', 'un libro, un amico'],
          ['masc. + s+cons., z, gn, ps', 'uno', 'uno studente, uno zaino'],
          ['feminine', 'una', 'una casa'],
          ['fem. + vowel', "un'", "un'amica"],
        ],
      },
    ],
    examples: [
      { it: 'Il ragazzo e lo studente sono amici.', en: 'The boy and the student are friends.' },
      { it: "L'amica di Maria ha un'auto nuova.", en: "Maria's friend has a new car." },
      { it: 'Gli gnocchi sono pronti.', en: 'The gnocchi are ready.' },
    ],
    pitfall:
      'Un before a masculine vowel takes no apostrophe (un amico), but una before a feminine vowel does (un\'amica). The apostrophe is therefore a gender signal — one of the few places where a punctuation mark carries grammar.',
    questions: [
      {
        id: 'gr-art-q1',
        prompt: 'Quale articolo va con «studente»?',
        options: ['il', 'lo', "l'", 'la'],
        answer: 1,
        explanation: 'Before s + consonant the masculine article is lo: lo studente, gli studenti.',
      },
      {
        id: 'gr-art-q2',
        prompt: 'Come si scrive «a female friend» con l\'articolo indeterminativo?',
        options: ['un amica', "un'amica", 'una amica', 'uno amica'],
        answer: 1,
        explanation: "Feminine una elides before a vowel and takes an apostrophe: un'amica.",
      },
      {
        id: 'gr-art-q3',
        prompt: 'Qual è il plurale di «l\'amico»?',
        options: ['i amici', 'gli amici', 'le amici', "gl'amici"],
        answer: 1,
        explanation: 'Masculine nouns beginning with a vowel take gli in the plural.',
      },
    ],
  },
  {
    id: 'gr-a1-nomi-plurale',
    level: 'A1',
    title: 'Il plurale dei nomi',
    focus: 'Three endings cover almost everything',
    explanation:
      'Italian does not add -s. It changes the final vowel, and there are only three patterns to learn. Nouns ending in an accented vowel or in a consonant do not change at all.',
    tables: [
      {
        caption: 'Regular plurals',
        headers: ['Singular ends in', 'Plural', 'Example'],
        rows: [
          ['-o (usually m.)', '-i', 'il libro → i libri'],
          ['-a (usually f.)', '-e', 'la casa → le case'],
          ['-e (m. or f.)', '-i', 'il pane → i pani / la chiave → le chiavi'],
          ['accented vowel', 'unchanged', 'la città → le città'],
          ['consonant (loanword)', 'unchanged', 'il bar → i bar'],
        ],
      },
      {
        caption: 'Spelling adjustments that keep the sound',
        headers: ['Singular', 'Plural', 'Why'],
        rows: [
          ['amico', 'amici', 'sound softens to /tʃ/ — an exception to the rule below'],
          ['gioco', 'giochi', 'h added to keep /k/ hard'],
          ['amica', 'amiche', 'h added to keep /k/ hard'],
          ['lago', 'laghi', 'h added to keep /g/ hard'],
        ],
      },
    ],
    examples: [
      { it: 'Ho due fratelli e una sorella.', en: 'I have two brothers and one sister.' },
      { it: 'Le città italiane sono belle.', en: 'Italian cities are beautiful.' },
      { it: 'I miei amici arrivano domani.', en: 'My friends arrive tomorrow.' },
    ],
    pitfall:
      'A noun ending in -e gives no clue to its gender: il pane is masculine, la chiave feminine. Learn -e nouns together with their article, always.',
    questions: [
      {
        id: 'gr-pl-q1',
        prompt: 'Qual è il plurale di «la chiave»?',
        options: ['le chiave', 'le chiavi', 'le chiaves', 'i chiavi'],
        answer: 1,
        explanation: 'Nouns in -e take -i in the plural regardless of gender: la chiave → le chiavi.',
      },
      {
        id: 'gr-pl-q2',
        prompt: 'Qual è il plurale di «la città»?',
        options: ['le cittade', 'le città', 'le cittài', 'le cittàs'],
        answer: 1,
        explanation: 'Words with a written accent on the final vowel are invariable: la città → le città.',
      },
      {
        id: 'gr-pl-q3',
        prompt: 'Perché il plurale di «amica» è «amiche»?',
        options: [
          'Per mantenere il suono duro /k/',
          'Perché è irregolare',
          'Perché è femminile',
          'Per indicare l\'accento',
        ],
        answer: 0,
        explanation: 'Without the h, amice would be read /aˈmitʃe/. The h preserves the hard sound.',
      },
    ],
  },
  {
    id: 'gr-a1-accordo',
    level: 'A1',
    title: "L'accordo dell'aggettivo",
    focus: 'Adjectives change to match the noun',
    explanation:
      'An Italian adjective agrees in gender and number with the noun it describes, and normally follows it. There are two families: those with four forms (-o, -a, -i, -e) and those with two (-e, -i), which do not distinguish gender in the singular.',
    tables: [
      {
        caption: 'Four-form adjectives: alto',
        headers: ['', 'Masculine', 'Feminine'],
        rows: [
          ['singular', 'alto', 'alta'],
          ['plural', 'alti', 'alte'],
        ],
      },
      {
        caption: 'Two-form adjectives: grande',
        headers: ['', 'Masculine', 'Feminine'],
        rows: [
          ['singular', 'grande', 'grande'],
          ['plural', 'grandi', 'grandi'],
        ],
      },
    ],
    examples: [
      { it: 'Una casa piccola e un giardino piccolo.', en: 'A small house and a small garden.' },
      { it: 'Le ragazze sono simpatiche.', en: 'The girls are nice.' },
      { it: 'Un libro interessante, due libri interessanti.', en: 'An interesting book, two interesting books.' },
    ],
    pitfall:
      'With a mixed group, the masculine plural wins: Marco e Anna sono italiani. It is grammatical convention rather than anything else, and it applies however large the group.',
    questions: [
      {
        id: 'gr-acc-q1',
        prompt: 'Completa: «Le ragazze sono ___» (simpatico)',
        options: ['simpatico', 'simpatica', 'simpatici', 'simpatiche'],
        answer: 3,
        explanation: 'Feminine plural → simpatiche, with h to keep the hard /k/.',
      },
      {
        id: 'gr-acc-q2',
        prompt: 'Quale aggettivo ha solo due forme?',
        options: ['alto', 'grande', 'piccolo', 'buono'],
        answer: 1,
        explanation: 'Adjectives ending in -e have one singular form for both genders and -i in the plural.',
      },
      {
        id: 'gr-acc-q3',
        prompt: 'Come si dice «Marco and Anna are Italian»?',
        options: [
          'Marco e Anna sono italiane',
          'Marco e Anna sono italiani',
          'Marco e Anna sono italiano',
          'Marco e Anna sono italia',
        ],
        answer: 1,
        explanation: 'A mixed group takes the masculine plural: italiani.',
      },
    ],
  },
  {
    id: 'gr-a1-pronomi-indiretti',
    level: 'A1',
    title: 'I pronomi indiretti',
    focus: 'mi, ti, gli, le, ci, vi — "to me", "to you", built into one word',
    explanation:
      'The indirect pronoun answers "to whom?". English needs two words ("to me"); Italian uses one, placed before the verb: mi parli, "you speak to me". These pronouns are the foundation for piacere and servire in the next lesson, which is why they come first.',
    tables: [
      {
        caption: 'Indirect object pronouns',
        headers: ['Person', 'Pronoun', 'Means'],
        rows: [
          ['io', 'mi', 'to me'],
          ['tu', 'ti', 'to you'],
          ['lui', 'gli', 'to him'],
          ['lei', 'le', 'to her'],
          ['Lei (formal)', 'Le', 'to you (formal)'],
          ['noi', 'ci', 'to us'],
          ['voi', 'vi', 'to you (pl.)'],
          ['loro', 'gli', 'to them'],
        ],
      },
      {
        caption: 'Position',
        headers: ['Structure', 'Example', 'English'],
        rows: [
          ['before a conjugated verb', 'Mi scrive.', 'He writes to me.'],
          ['attached to an infinitive', 'Voglio parlarti.', 'I want to speak to you.'],
          ['before the modal, also fine', 'Ti voglio parlare.', 'I want to speak to you.'],
        ],
      },
    ],
    examples: [
      { it: 'Mi dai una mano?', en: 'Will you give me a hand?' },
      { it: 'Le ho scritto ieri.', en: 'I wrote to her yesterday.' },
      { it: 'Gli telefono stasera.', en: 'I will phone him this evening.' },
    ],
    pitfall:
      'Gli covers both "to him" and, in everyday speech, "to them" — the formally correct loro is now largely confined to writing. Le with a capital is the formal "to you", which is why a shop assistant says Le posso aiutare.',
    questions: [
      {
        id: 'gr-pi-q1',
        prompt: 'Come si dice «I write to her»?',
        options: ['Gli scrivo', 'Le scrivo', 'La scrivo', 'Lei scrivo'],
        answer: 1,
        explanation: 'le = to her. La would be the direct object pronoun ("her"), a different function.',
      },
      {
        id: 'gr-pi-q2',
        prompt: 'Dove si mette il pronome con un verbo coniugato?',
        options: ['Dopo il verbo', 'Prima del verbo', 'Alla fine della frase', 'Non si mette'],
        answer: 1,
        explanation: 'Before the conjugated verb: mi parli, ti scrivo. It attaches to the end only on infinitives and imperatives.',
      },
      {
        id: 'gr-pi-q3',
        prompt: 'Nel parlato, «gli» può significare...',
        options: ['solo "a lui"', '"a lui" e "a loro"', 'solo "a lei"', '"a noi"'],
        answer: 1,
        explanation: 'In modern spoken Italian gli serves for both "to him" and "to them"; loro survives mainly in formal writing.',
      },
    ],
  },
  {
    id: 'gr-a1-servire-piacere',
    level: 'A1',
    title: 'Servire e piacere',
    focus: 'Verbs that turn the English sentence around',
    explanation:
      'These two work backwards compared with English. The thing needed or liked is the grammatical subject, and the person is the indirect pronoun. Mi serve una penna is literally "to me is-needed a pen". The verb therefore agrees with the object, not the person: mi servono due penne.',
    tables: [
      {
        caption: 'servire — to need',
        headers: ['Italian', 'Literally', 'English'],
        rows: [
          ['mi serve una penna', 'to-me is-needed a pen', 'I need a pen'],
          ['mi servono due penne', 'to-me are-needed two pens', 'I need two pens'],
          ['ti serve aiuto?', 'to-you is-needed help?', 'do you need help?'],
          ['non ci serve niente', 'to-us is-needed nothing', 'we do not need anything'],
        ],
      },
      {
        caption: 'piacere — to like',
        headers: ['Italian', 'Literally', 'English'],
        rows: [
          ['mi piace il caffè', 'to-me is-pleasing the coffee', 'I like coffee'],
          ['mi piacciono i gatti', 'to-me are-pleasing the cats', 'I like cats'],
          ['ti piace Roma?', 'to-you is-pleasing Rome?', 'do you like Rome?'],
          ['non gli piace', 'to-him is-not pleasing', 'he does not like it'],
        ],
      },
    ],
    examples: [
      { it: 'Mi serve un caffè, subito.', en: 'I need a coffee, right now.' },
      { it: 'Ti piacciono gli gnocchi?', en: 'Do you like gnocchi?' },
      { it: 'Non mi servono aiuti, grazie.', en: 'I do not need any help, thanks.' },
    ],
    pitfall:
      'The commonest beginner error is treating these like English and saying io piaccio il caffè — which actually means "I am pleasing to the coffee". Fix the habit early: start the sentence with the person as mi/ti/gli, then make the verb agree with the thing.',
    questions: [
      {
        id: 'gr-sp-q1',
        prompt: 'Come si dice «I need two tickets»?',
        options: ['Servo due biglietti', 'Mi serve due biglietti', 'Mi servono due biglietti', 'Ho bisogno due biglietti'],
        answer: 2,
        explanation: 'The verb agrees with biglietti (plural) → servono, and the person is mi.',
      },
      {
        id: 'gr-sp-q2',
        prompt: 'Come si dice «I like cats»?',
        options: ['Io piaccio i gatti', 'Mi piace i gatti', 'Mi piacciono i gatti', 'Piaccio gatti'],
        answer: 2,
        explanation: 'Gatti is plural, so piacciono. Mi piace would need a singular thing.',
      },
      {
        id: 'gr-sp-q3',
        prompt: 'Con «piacere», il verbo concorda con...',
        options: ['la persona', 'la cosa che piace', 'il soggetto inglese', 'niente, è invariabile'],
        answer: 1,
        explanation: 'The thing liked is the grammatical subject, so it governs the verb.',
      },
    ],
  },
  {
    id: 'gr-a1-farcela-andarsene',
    level: 'A1',
    title: 'Farcela e andarsene',
    focus: 'Two everyday expressions, learned as whole phrases',
    explanation:
      'These are pronominal verbs, and their full grammar belongs to a later level. But you will hear them on your first day in Italy, and the forms you need most are few enough to memorise as fixed phrases now. Learn the chunk, use it correctly, and let the analysis come later.',
    tables: [
      {
        caption: 'farcela — to manage, to make it',
        headers: ['Form', 'Meaning', 'When you use it'],
        rows: [
          ['ce la faccio', 'I can manage it', 'accepting a task, reassuring someone'],
          ['non ce la faccio', 'I cannot manage', 'the single most useful of the set'],
          ['ce la fai?', 'can you manage?', 'offering help'],
          ['non ce la faccio più', 'I cannot take any more', 'exhaustion, physical or otherwise'],
        ],
      },
      {
        caption: 'andarsene — to leave, to go away',
        headers: ['Form', 'Meaning', 'When you use it'],
        rows: [
          ['me ne vado', 'I am off, I am leaving', 'announcing your departure'],
          ['te ne vai?', 'are you leaving?', 'asking'],
          ['se ne va', 'he/she is leaving', 'about someone else'],
          ['andiamocene', 'let us get out of here', 'to a friend, in a bar or a queue'],
        ],
      },
    ],
    examples: [
      { it: '— Ti aiuto? — No grazie, ce la faccio.', en: '— Shall I help? — No thanks, I can manage.' },
      { it: 'Sono stanchissimo, non ce la faccio più.', en: 'I am exhausted, I cannot take any more.' },
      { it: 'È tardi, me ne vado.', en: 'It is late, I am off.' },
      { it: 'Dai, andiamocene.', en: 'Come on, let us get out of here.' },
    ],
    pitfall:
      'Do not try to build these from parts yet: the ce, la and ne are locked in and do not mean anything separable here. Andarsene is also warmer and more final than a plain vado — it implies leaving this place, not merely going somewhere.',
    questions: [
      {
        id: 'gr-fa-q1',
        prompt: 'Come si dice «I cannot manage any more»?',
        options: ['Non ce la faccio più', 'Non mi faccio più', 'Non la faccio più', 'Non ne faccio più'],
        answer: 0,
        explanation: 'The fixed phrase is non ce la faccio più — one of the most useful sentences at A1.',
      },
      {
        id: 'gr-fa-q2',
        prompt: 'Come annunci che te ne stai andando?',
        options: ['Mi vado', 'Me ne vado', 'Vado me', 'Ne vado'],
        answer: 1,
        explanation: 'me ne vado. The reflexive changes with the person (te ne vai, se ne va) but ne stays put.',
      },
      {
        id: 'gr-fa-q3',
        prompt: 'Un amico ti chiede «Ce la fai?». Che cosa vuole sapere?',
        options: [
          'Se ci vai',
          'Se riesci a farlo',
          'Se lo hai fatto',
          'Se lo farai domani',
        ],
        answer: 1,
        explanation: 'Ce la fai? asks whether you can manage — an offer of help in disguise.',
      },
    ],
  },
  {
    id: 'gr-a1-presente-regolare',
    level: 'A1',
    title: 'Il presente indicativo: verbi regolari',
    focus: 'parlare, prendere, dormire, capire — the four patterns that cover most verbs',
    explanation:
      'Italian verbs come in three families, named after their infinitive ending: -are, -ere and -ire. Drop the ending and add the one for the person you mean. The -ire family splits in two: a small group (dormire, partire, sentire) takes plain endings, and a larger group (capire, finire, preferire) inserts -isc- in every form except noi and voi. There is no way to tell which -ire verb does which by looking at it, so learn each one with its io form: dormo, but capisco.',
    tables: [
      {
        caption: 'Regular endings',
        headers: ['', '-are (parlare)', '-ere (prendere)', '-ire (dormire)', '-ire isc (capire)'],
        rows: [
          ['io', 'parlo', 'prendo', 'dormo', 'capisco'],
          ['tu', 'parli', 'prendi', 'dormi', 'capisci'],
          ['lui / lei', 'parla', 'prende', 'dorme', 'capisce'],
          ['noi', 'parliamo', 'prendiamo', 'dormiamo', 'capiamo'],
          ['voi', 'parlate', 'prendete', 'dormite', 'capite'],
          ['loro', 'parlano', 'prendono', 'dormono', 'capiscono'],
        ],
      },
      {
        caption: 'Spelling keeps the sound: -care / -gare and -ciare / -giare',
        headers: ['Verb', 'io', 'tu', 'noi', 'Why'],
        rows: [
          ['cercare', 'cerco', 'cerchi', 'cerchiamo', 'an h keeps the hard k sound'],
          ['pagare', 'pago', 'paghi', 'paghiamo', 'an h keeps the hard g sound'],
          ['cominciare', 'comincio', 'cominci', 'cominciamo', 'the i is already there, so it is not doubled'],
          ['mangiare', 'mangio', 'mangi', 'mangiamo', 'same: never mangii'],
        ],
      },
    ],
    examples: [
      { it: 'Parlo italiano tutti i giorni.', en: 'I speak Italian every day.' },
      { it: 'Non capisco, può ripetere?', en: 'I do not understand, could you repeat that?' },
      { it: 'Che cosa prendi?', en: 'What are you having? (in a bar)' },
      { it: 'Cominciamo alle otto.', en: 'We start at eight.' },
    ],
    pitfall:
      'Italian has one present tense where English has three. Parlo covers "I speak", "I am speaking" and "I do speak". There is a progressive — sto parlando — but it means specifically "right at this moment", so using it for habits (sto lavorando ogni giorno) sounds wrong.',
    questions: [
      {
        id: 'gr-prr-q1',
        prompt: 'Quale forma è corretta: «noi ___ » (mangiare)?',
        options: ['mangiiamo', 'mangiamo', 'mangghiamo', 'mangheremo'],
        answer: 1,
        explanation: 'Verbs in -ciare and -giare already have the i, so noi takes a single one: mangiamo, cominciamo.',
      },
      {
        id: 'gr-prr-q2',
        prompt: 'Come si dice «I do not understand»?',
        options: ['Non capo', 'Non capisco', 'Non capiscio', 'Non capire'],
        answer: 1,
        explanation: 'Capire is an -isc- verb: capisco, capisci, capisce, capiamo, capite, capiscono.',
      },
      {
        id: 'gr-prr-q3',
        prompt: 'Perché «tu paghi» prende una h?',
        options: [
          'Per distinguerlo dal passato',
          'Per mantenere il suono duro della g',
          'Perché tutti i verbi in -are la prendono',
          'Per ragioni di accento',
        ],
        answer: 1,
        explanation: 'Without the h, gi would be pronounced like the g in gelato. The h is a spelling device, not a grammatical one.',
      },
    ],
  },
  {
    id: 'gr-a1-presente-irregolare',
    level: 'A1',
    title: 'I verbi irregolari più usati',
    focus: 'andare, venire, fare, stare, dare, dire, uscire — the ones you cannot avoid',
    explanation:
      'The commonest verbs in any language are the irregular ones, because heavy use protects them from being tidied up. These seven carry an enormous share of everyday Italian, and they cannot be derived from a rule — they have to be known. The good news is that the irregularity is concentrated in the singular and in loro: noi and voi are almost always regular, which is why andiamo and andate look exactly as you would expect.',
    tables: [
      {
        caption: 'Seven verbs you will use daily',
        headers: ['', 'andare', 'venire', 'fare', 'stare', 'dare', 'dire', 'uscire'],
        rows: [
          ['io', 'vado', 'vengo', 'faccio', 'sto', 'do', 'dico', 'esco'],
          ['tu', 'vai', 'vieni', 'fai', 'stai', 'dai', 'dici', 'esci'],
          ['lui / lei', 'va', 'viene', 'fa', 'sta', 'dà', 'dice', 'esce'],
          ['noi', 'andiamo', 'veniamo', 'facciamo', 'stiamo', 'diamo', 'diciamo', 'usciamo'],
          ['voi', 'andate', 'venite', 'fate', 'state', 'date', 'dite', 'uscite'],
          ['loro', 'vanno', 'vengono', 'fanno', 'stanno', 'danno', 'dicono', 'escono'],
        ],
      },
    ],
    examples: [
      { it: 'Vado al lavoro in autobus.', en: 'I go to work by bus.' },
      { it: 'Vengo subito!', en: 'I am coming right away!' },
      { it: 'Che cosa fai stasera?', en: 'What are you doing tonight?' },
      { it: 'Come stai? — Sto bene, grazie.', en: 'How are you? — I am well, thanks.' },
    ],
    pitfall:
      'Andare moves away from where the speaker is, venire moves towards the person you are talking to. When someone calls you from the kitchen the answer is Vengo!, not Vado! — even though English says "I am coming" while in fact going.',
    questions: [
      {
        id: 'gr-pri-q1',
        prompt: 'Ti chiamano dall’altra stanza. Che cosa rispondi?',
        options: ['Vado!', 'Vengo!', 'Ando!', 'Sto andando a te!'],
        answer: 1,
        explanation: 'Venire takes the listener’s point of view: you are coming towards them.',
      },
      {
        id: 'gr-pri-q2',
        prompt: 'Quale forma è corretta: «voi ___ » (dire)?',
        options: ['dicete', 'dite', 'dicite', 'dicete voi'],
        answer: 1,
        explanation: 'Dire keeps an old short form in voi: dite, like fate and state.',
      },
      {
        id: 'gr-pri-q3',
        prompt: 'Come si chiede a un amico come sta?',
        options: ['Come sei?', 'Come stai?', 'Come hai?', 'Come vai?'],
        answer: 1,
        explanation: 'Health and mood take stare: sto bene, sto male. Essere would describe what you are, not how you are.',
      },
    ],
  },
  {
    id: 'gr-a1-modali',
    level: 'A1',
    title: 'Potere, dovere, volere',
    focus: 'can, must, want — and the infinitive that always follows',
    explanation:
      'These three verbs are followed directly by an infinitive, with no preposition in between: posso entrare, devo andare, voglio mangiare. That is simpler than English, which needs "to" after want but not after can. All three are irregular, and all three are softened constantly in polite speech: vorrei rather than voglio is the difference between "I would like" and "I want", and using voglio in a shop sounds blunt to the point of rudeness.',
    tables: [
      {
        caption: 'The three modals',
        headers: ['', 'potere (can)', 'dovere (must)', 'volere (want)'],
        rows: [
          ['io', 'posso', 'devo', 'voglio'],
          ['tu', 'puoi', 'devi', 'vuoi'],
          ['lui / lei', 'può', 'deve', 'vuole'],
          ['noi', 'possiamo', 'dobbiamo', 'vogliamo'],
          ['voi', 'potete', 'dovete', 'volete'],
          ['loro', 'possono', 'devono', 'vogliono'],
        ],
      },
      {
        caption: 'Asking politely',
        headers: ['Blunt', 'Polite', 'English'],
        rows: [
          ['Voglio un caffè.', 'Vorrei un caffè.', 'I want / I would like a coffee.'],
          ['Mi dai il sale?', 'Mi puoi dare il sale?', 'Give me the salt / Could you pass the salt?'],
          ['Devi aiutarmi.', 'Potresti aiutarmi?', 'You must help me / Could you help me?'],
        ],
      },
    ],
    examples: [
      { it: 'Posso entrare?', en: 'May I come in?' },
      { it: 'Devo andare, è tardi.', en: 'I have to go, it is late.' },
      { it: 'Vorrei un tavolo per due.', en: 'I would like a table for two.' },
      { it: 'Non possiamo pagare con la carta.', en: 'We cannot pay by card.' },
    ],
    pitfall:
      'Sapere also translates "can", but only for a learned skill: so nuotare is "I can swim" in the sense of knowing how. Posso nuotare means the pool is open and nobody is stopping you. Choosing the wrong one changes the claim entirely.',
    questions: [
      {
        id: 'gr-mod-q1',
        prompt: 'Come si dice «I can swim» (ne sono capace)?',
        options: ['Posso nuotare', 'So nuotare', 'Voglio nuotare', 'Conosco nuotare'],
        answer: 1,
        explanation: 'Sapere plus infinitive is an acquired skill; potere is permission or possibility.',
      },
      {
        id: 'gr-mod-q2',
        prompt: 'Al bar, qual è la forma più educata?',
        options: ['Voglio un caffè.', 'Vorrei un caffè.', 'Devo un caffè.', 'Posso un caffè.'],
        answer: 1,
        explanation: 'Vorrei is the conditional of volere and is the default polite request in shops and bars.',
      },
      {
        id: 'gr-mod-q3',
        prompt: 'Che cosa segue sempre potere, dovere e volere?',
        options: ['di + infinito', 'a + infinito', 'l’infinito da solo', 'il congiuntivo'],
        answer: 2,
        explanation: 'The infinitive follows directly: devo partire, not devo di partire.',
      },
    ],
  },
  {
    id: 'gr-a1-ce-ci-sono',
    level: 'A1',
    title: 'C’è, ci sono, ecco',
    focus: 'saying what exists and where — and pointing at it',
    explanation:
      'C’è and ci sono are "there is" and "there are". They agree with what follows, not with the speaker: c’è un problema, ci sono due problemi. Ecco is different: it presents something at the moment it appears — Ecco il tuo caffè as the cup lands on the table. English uses "there is" for both jobs, which is why learners reach for c’è when an Italian would say ecco.',
    tables: [
      {
        caption: 'Existence and presentation',
        headers: ['Form', 'Use', 'Example'],
        rows: [
          ['c’è', 'one thing exists / is present', 'C’è un bar qui vicino.'],
          ['ci sono', 'several things exist', 'Ci sono molti turisti.'],
          ['non c’è', 'absence', 'Non c’è nessuno.'],
          ['ecco', 'here it is, as you hand it over', 'Ecco il conto.'],
          ['eccolo / eccola', 'here he / she / it is', 'Le chiavi? Eccole!'],
        ],
      },
    ],
    examples: [
      { it: 'C’è una farmacia in piazza.', en: 'There is a pharmacy in the square.' },
      { it: 'Ci sono due messaggi per te.', en: 'There are two messages for you.' },
      { it: 'Scusi, c’è il signor Rossi? — No, non c’è.', en: 'Excuse me, is Mr Rossi in? — No, he is not.' },
      { it: 'Ecco fatto!', en: 'There, done!' },
    ],
    pitfall:
      'C’è also means "is in" for people: c’è Marco? asks whether Marco is around, not whether he exists. It is the ordinary way to ask for someone on the phone or at a door.',
    questions: [
      {
        id: 'gr-cci-q1',
        prompt: 'Come si dice «there are two problems»?',
        options: ['C’è due problemi', 'Ci sono due problemi', 'Ci ha due problemi', 'Ecco due problemi'],
        answer: 1,
        explanation: 'The verb agrees with what follows, so a plural takes ci sono.',
      },
      {
        id: 'gr-cci-q2',
        prompt: 'Il cameriere porta il conto al tavolo. Che cosa dice?',
        options: ['C’è il conto.', 'Ecco il conto.', 'Ci sono il conto.', 'Sta il conto.'],
        answer: 1,
        explanation: 'Ecco presents something at the moment of handing it over; c’è would merely state that a bill exists.',
      },
      {
        id: 'gr-cci-q3',
        prompt: 'Al telefono, come chiedi se Marco è in casa?',
        options: ['C’è Marco?', 'È Marco?', 'Ha Marco?', 'Sta Marco?'],
        answer: 0,
        explanation: 'C’è covers being present as well as existing, and is the standard phrasing on the phone.',
      },
    ],
  },
  {
    id: 'gr-a1-preposizioni',
    level: 'A1',
    title: 'Le preposizioni e le forme articolate',
    focus: 'di, a, da, in, con, su, per — and what happens when an article follows',
    explanation:
      'Seven small words do most of the work, and five of them fuse with a following definite article: di + il = del, a + la = alla, in + i = nei. The fusion is compulsory in speech and writing — di il libro is simply not Italian. The harder part is that the mapping to English prepositions is loose: you go a Roma but in Italia, you are at home in casa and at the cinema al cinema. These are learned as pairs, not derived.',
    tables: [
      {
        caption: 'Preposition + article',
        headers: ['', 'il', 'lo', 'la', 'i', 'gli', 'le'],
        rows: [
          ['di', 'del', 'dello', 'della', 'dei', 'degli', 'delle'],
          ['a', 'al', 'allo', 'alla', 'ai', 'agli', 'alle'],
          ['da', 'dal', 'dallo', 'dalla', 'dai', 'dagli', 'dalle'],
          ['in', 'nel', 'nello', 'nella', 'nei', 'negli', 'nelle'],
          ['su', 'sul', 'sullo', 'sulla', 'sui', 'sugli', 'sulle'],
        ],
      },
      {
        caption: 'Places: a or in',
        headers: ['a', 'in'],
        rows: [
          ['a Roma (cities)', 'in Italia (countries, regions)'],
          ['al cinema, al bar, al mare', 'in centro, in montagna, in campagna'],
          ['a casa, a scuola, a letto', 'in ufficio, in banca, in farmacia'],
        ],
      },
    ],
    examples: [
      { it: 'Vado al mercato e poi in banca.', en: 'I am going to the market and then to the bank.' },
      { it: 'Il libro è sul tavolo, vicino alla finestra.', en: 'The book is on the table, near the window.' },
      { it: 'Vengo dalla Scozia, abito in Italia da due anni.', en: 'I come from Scotland, I have lived in Italy for two years.' },
      { it: 'Parto per Napoli con il treno delle sei.', en: 'I am leaving for Naples on the six o’clock train.' },
    ],
    pitfall:
      'Con and per do not fuse in modern Italian: con il treno, per il weekend. You will see col in older writing and hear it in speech, but writing con il is always safe.',
    questions: [
      {
        id: 'gr-prep-q1',
        prompt: 'Come si dice «on the table»?',
        options: ['su il tavolo', 'sul tavolo', 'sullo tavolo', 'nel tavolo'],
        answer: 1,
        explanation: 'Su + il fuses to sul. Sullo would need a noun starting with s + consonant, z, or ps.',
      },
      {
        id: 'gr-prep-q2',
        prompt: 'Vivo ___ Italia, precisamente ___ Roma.',
        options: ['a … in', 'in … a', 'in … in', 'a … a'],
        answer: 1,
        explanation: 'Countries take in, cities take a: in Italia, a Roma.',
      },
      {
        id: 'gr-prep-q3',
        prompt: 'Quale preposizione NON si fonde con l’articolo?',
        options: ['di', 'a', 'con', 'su'],
        answer: 2,
        explanation: 'Con stays separate in modern usage: con il, con la. The old col survives mainly in speech and older texts.',
      },
    ],
  },
  {
    id: 'gr-a1-numeri-ora',
    level: 'A1',
    title: 'Numeri, ora e data',
    focus: 'counting, telling the time, and giving a date without tripping over it',
    explanation:
      'Numbers up to twenty are individual words; from twenty on they are built by joining, dropping the final vowel before uno and otto: ventuno, ventotto. The time takes sono le plus a plural — sono le tre — with one exception, è l’una, because one o’clock is singular. Dates put the number before the month with no preposition: il tre marzo, and only the first of the month uses an ordinal: il primo marzo.',
    tables: [
      {
        caption: 'Numbers',
        headers: ['0–10', '11–20', 'Tens', 'Building'],
        rows: [
          ['zero, uno, due, tre', 'undici, dodici, tredici', 'venti, trenta, quaranta', 'ventuno (not ventiuno)'],
          ['quattro, cinque, sei', 'quattordici, quindici', 'cinquanta, sessanta', 'ventotto (not ventiotto)'],
          ['sette, otto, nove, dieci', 'sedici, diciassette, diciotto, diciannove, venti', 'settanta, ottanta, novanta, cento', 'trentatré (accent on the final e)'],
        ],
      },
      {
        caption: 'The time',
        headers: ['Italian', 'English', 'Note'],
        rows: [
          ['Che ore sono? / Che ora è?', 'What time is it?', 'both are correct'],
          ['Sono le tre.', 'It is three o’clock.', 'plural: le ore is understood'],
          ['È l’una.', 'It is one o’clock.', 'the one singular'],
          ['Sono le tre e un quarto.', 'It is a quarter past three.', 'e for past'],
          ['Sono le quattro meno dieci.', 'It is ten to four.', 'meno for to'],
          ['A che ora? — Alle otto.', 'At what time? — At eight.', 'a + le = alle'],
        ],
      },
    ],
    examples: [
      { it: 'Il treno parte alle sei e mezza.', en: 'The train leaves at half past six.' },
      { it: 'Oggi è il primo maggio.', en: 'Today is the first of May.' },
      { it: 'Sono nato il quindici agosto del millenovecentonovanta.', en: 'I was born on the fifteenth of August 1990.' },
      { it: 'Quanto costa? — Dodici euro e cinquanta.', en: 'How much is it? — Twelve euros fifty.' },
    ],
    pitfall:
      'Only the first of the month is an ordinal. Il primo marzo, but then il due marzo, il tre marzo — never il secondo marzo, which would mean "the second March" as if there were two.',
    questions: [
      {
        id: 'gr-num-q1',
        prompt: 'Come si scrive 21?',
        options: ['ventiuno', 'ventuno', 'venti uno', 'ventiuni'],
        answer: 1,
        explanation: 'The tens drop their final vowel before uno and otto: ventuno, ventotto, trentuno.',
      },
      {
        id: 'gr-num-q2',
        prompt: 'Come si dice «it is one o’clock»?',
        options: ['Sono le una', 'È l’una', 'È una', 'Sono l’una'],
        answer: 1,
        explanation: 'One o’clock is the only singular hour: è l’una. Every other hour takes sono le.',
      },
      {
        id: 'gr-num-q3',
        prompt: 'Quale data è scritta correttamente?',
        options: ['il secondo giugno', 'il due giugno', 'il due di giugno', 'il giugno due'],
        answer: 1,
        explanation: 'Cardinal number, no preposition: il due giugno. Only the first takes an ordinal, il primo giugno.',
      },
    ],
  },
  {
    id: 'gr-a1-possessivi',
    level: 'A1',
    title: 'I possessivi',
    focus: 'il mio, la tua, i nostri — and the family exception',
    explanation:
      'Italian possessives agree with the thing owned, not with the owner: il suo libro is "his book" or "her book" — the language simply does not mark the owner’s gender. They normally take the definite article, which English never does: il mio telefono, la tua casa. The one systematic exception is a single, unmodified family member: mio padre, tua sorella. Make it plural, or add an adjective, and the article comes back: i miei fratelli, il mio fratello maggiore.',
    tables: [
      {
        caption: 'Forms',
        headers: ['Owner', 'm. sing.', 'f. sing.', 'm. plur.', 'f. plur.'],
        rows: [
          ['io', 'il mio', 'la mia', 'i miei', 'le mie'],
          ['tu', 'il tuo', 'la tua', 'i tuoi', 'le tue'],
          ['lui / lei', 'il suo', 'la sua', 'i suoi', 'le sue'],
          ['noi', 'il nostro', 'la nostra', 'i nostri', 'le nostre'],
          ['voi', 'il vostro', 'la vostra', 'i vostri', 'le vostre'],
          ['loro', 'il loro', 'la loro', 'i loro', 'le loro'],
        ],
      },
      {
        caption: 'The family rule',
        headers: ['No article', 'Article returns', 'Why'],
        rows: [
          ['mio padre', 'i miei genitori', 'plural'],
          ['mia sorella', 'la mia sorella minore', 'an adjective is added'],
          ['tuo fratello', 'il tuo fratellino', 'a diminutive counts as modified'],
          ['sua madre', 'la loro madre', 'loro always keeps the article'],
        ],
      },
    ],
    examples: [
      { it: 'Il mio telefono non funziona.', en: 'My phone is not working.' },
      { it: 'Mia sorella abita a Torino.', en: 'My sister lives in Turin.' },
      { it: 'I miei genitori sono in vacanza.', en: 'My parents are on holiday.' },
      { it: 'È il suo cane o il tuo?', en: 'Is it his dog or yours?' },
    ],
    pitfall:
      'Because suo agrees with the object, il suo libro is ambiguous between his and hers — and Italians simply live with it. If it truly matters, say il libro di lui or name the person; adding an English-style possessive does not exist as an option.',
    questions: [
      {
        id: 'gr-poss-q1',
        prompt: 'Come si dice «my mother»?',
        options: ['la mia madre', 'mia madre', 'mia la madre', 'la madre mia'],
        answer: 1,
        explanation: 'One singular family member, unmodified, drops the article: mia madre.',
      },
      {
        id: 'gr-poss-q2',
        prompt: 'E «my parents»?',
        options: ['miei genitori', 'i miei genitori', 'il mio genitori', 'i mie genitori'],
        answer: 1,
        explanation: 'The exception is singular only; the plural takes the article again.',
      },
      {
        id: 'gr-poss-q3',
        prompt: 'Parlando di Anna, come si dice «her book»?',
        options: ['il suo libro', 'la sua libro', 'il sua libro', 'il suo libra'],
        answer: 0,
        explanation: 'The possessive agrees with libro, which is masculine, whoever the owner happens to be.',
      },
    ],
  },
  {
    id: 'gr-a1-interrogativi',
    level: 'A1',
    title: 'Fare domande',
    focus: 'chi, che cosa, dove, quando, come, perché, quanto, quale',
    explanation:
      'Italian asks questions without an auxiliary: there is no equivalent of "do". You either raise your intonation — Parli italiano? — or put a question word in front. The question word normally sits first and the subject moves to the end: Dove abita Marco? rather than Dove Marco abita? Perché does double duty, asking "why" and answering "because", which is why an answer can echo the question word for word.',
    tables: [
      {
        caption: 'The question words',
        headers: ['Italian', 'English', 'Example'],
        rows: [
          ['chi', 'who', 'Chi è?'],
          ['che cosa / cosa / che', 'what', 'Che cosa fai?'],
          ['dove', 'where', 'Dove sei?'],
          ['quando', 'when', 'Quando arrivi?'],
          ['come', 'how', 'Come stai?'],
          ['perché', 'why / because', 'Perché non vieni? — Perché lavoro.'],
          ['quanto', 'how much', 'Quanto costa?'],
          ['quale / quali', 'which', 'Quale preferisci?'],
        ],
      },
    ],
    examples: [
      { it: 'Dove abita tua sorella?', en: 'Where does your sister live?' },
      { it: 'Quanto costa il biglietto?', en: 'How much does the ticket cost?' },
      { it: 'Come ti chiami? — Mi chiamo Luca.', en: 'What is your name? — My name is Luca.' },
      { it: 'Perché non rispondi? — Perché non lo so.', en: 'Why do you not answer? — Because I do not know.' },
    ],
    pitfall:
      'Come ti chiami? is the natural way to ask someone’s name; the literal Qual è il tuo nome? is grammatical but stiff, and note it is qual è with no apostrophe — quale drops its e before è rather than eliding.',
    questions: [
      {
        id: 'gr-int-q1',
        prompt: 'Come si chiede il nome a un amico?',
        options: ['Che è il tuo nome?', 'Come ti chiami?', 'Chi sei chiamato?', 'Come è il tuo nome?'],
        answer: 1,
        explanation: 'Chiamarsi is reflexive and this is the everyday question; the literal translation sounds like a form.',
      },
      {
        id: 'gr-int-q2',
        prompt: 'Quale scrittura è corretta?',
        options: ['qual’è', 'qual è', 'quale’è', 'quàl è'],
        answer: 1,
        explanation: 'Quale drops its final vowel before è. That is troncamento, not elision, so no apostrophe.',
      },
      {
        id: 'gr-int-q3',
        prompt: 'Come si traduce «Do you speak Italian?»',
        options: ['Fai parlare italiano?', 'Parli italiano?', 'Sei parlare italiano?', 'Tu do parlare italiano?'],
        answer: 1,
        explanation: 'There is no auxiliary "do" in Italian: intonation alone turns the statement into a question.',
      },
    ],
  },
  {
    id: 'gr-a1-imperativo',
    level: 'A1',
    title: 'L’imperativo informale',
    focus: 'giving instructions to someone you call tu — and telling them not to',
    explanation:
      'For tu, the imperative of -are verbs ends in -a (parla!) while -ere and -ire verbs end in -e or -i exactly as the present does (prendi!, senti!). For noi and voi it is identical to the present: andiamo!, prendete! The negative is where Italian does something unexpected: with tu it uses the plain infinitive — non parlare!, non andare! — which learners often over-correct into non parla.',
    tables: [
      {
        caption: 'Positive and negative',
        headers: ['', 'parlare', 'prendere', 'sentire', 'Negative (tu)'],
        rows: [
          ['tu', 'parla!', 'prendi!', 'senti!', 'non parlare!'],
          ['noi', 'parliamo!', 'prendiamo!', 'sentiamo!', 'non parliamo!'],
          ['voi', 'parlate!', 'prendete!', 'sentite!', 'non parlate!'],
        ],
      },
      {
        caption: 'Five short irregulars, and the pronoun that doubles',
        headers: ['Verb', 'tu', 'With a pronoun', 'English'],
        rows: [
          ['andare', 'va’ / vai', 'vattene!', 'go / clear off'],
          ['dare', 'da’ / dai', 'dammi!', 'give / give me'],
          ['dire', 'di’', 'dimmi!', 'say / tell me'],
          ['fare', 'fa’ / fai', 'fammi vedere!', 'do / let me see'],
          ['stare', 'sta’ / stai', 'stammi bene!', 'stay / take care'],
        ],
      },
    ],
    examples: [
      { it: 'Senti, ti devo dire una cosa.', en: 'Listen, I have to tell you something.' },
      { it: 'Non preoccuparti, va tutto bene.', en: 'Do not worry, everything is fine.' },
      { it: 'Dimmi tutto.', en: 'Tell me everything.' },
      { it: 'Andiamo, è tardi!', en: 'Let us go, it is late!' },
    ],
    pitfall:
      'With the five short irregulars, an attached pronoun doubles its first consonant: da’ + mi becomes dammi, fa’ + lo becomes fallo, di’ + mi becomes dimmi. The only exception is gli, which never doubles: digli.',
    questions: [
      {
        id: 'gr-imp-q1',
        prompt: 'Come si dice «do not speak» a un amico?',
        options: ['Non parla!', 'Non parlare!', 'Non parli!', 'Non parlando!'],
        answer: 1,
        explanation: 'The negative tu imperative is the bare infinitive — one of the genuine oddities of Italian.',
      },
      {
        id: 'gr-imp-q2',
        prompt: 'Come si dice «tell me»?',
        options: ['Dimi', 'Dimmi', 'Dicimi', 'Di’ a me'],
        answer: 1,
        explanation: 'Di’ plus mi doubles the consonant: dimmi. The same happens in dammi and fammi.',
      },
      {
        id: 'gr-imp-q3',
        prompt: 'Quale forma dell’imperativo coincide sempre con il presente?',
        options: ['tu', 'noi e voi', 'solo voi', 'nessuna'],
        answer: 1,
        explanation: 'Noi and voi imperatives are identical to their present-tense forms: andiamo, andate.',
      },
    ],
  },
];

export const grammarByLevel = (level: GrammarLesson['level']) => GRAMMAR.filter((g) => g.level === level);
