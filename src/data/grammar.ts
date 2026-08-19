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
];

export const grammarByLevel = (level: GrammarLesson['level']) => GRAMMAR.filter((g) => g.level === level);
