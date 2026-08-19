import type { PhonicsLesson } from './types';

/**
 * Italian spelling is close to phonetic: once you know the rules there are
 * almost no exceptions, and you can pronounce a word you have never seen.
 * That makes pronunciation a solved problem at A1 rather than a lifelong
 * struggle — provided the rules are learned first, before habits set.
 *
 * These lessons are ordered by what breaks an English speaker soonest.
 */
export const PHONICS: PhonicsLesson[] = [
  {
    id: 'ph-a1-alfabeto',
    level: 'A1',
    title: "L'alfabeto italiano",
    focus: 'The 21 letters, and the 5 that only appear in foreign words',
    intro:
      'The Italian alphabet has 21 letters. J, K, W, X and Y exist only in borrowings (jeans, week-end, taxi) and in a few names, which is why an Italian spelling something aloud may pause at them. Letters are feminine: la a, la bi, una acca.',
    rows: [
      {
        grapheme: 'a b c d e f',
        ipa: '/a bi tʃi di e ˈɛffe/',
        note: 'Names of the letters, not their sounds. C is "chi" (like "chee"), not "see".',
        examples: [
          { it: 'a — ape', ipa: '/ˈaːpe/', en: 'bee' },
          { it: 'b — bene', ipa: '/ˈbɛːne/', en: 'well' },
          { it: 'c — casa', ipa: '/ˈkaːza/', en: 'house' },
        ],
      },
      {
        grapheme: 'g h i l m n',
        ipa: '/dʒi ˈakka i ˈɛlle ˈɛmme ˈɛnne/',
        note: 'H is called acca and is always silent — it never has a sound of its own in Italian.',
        examples: [
          { it: 'h — ho', ipa: '/ɔ/', en: 'I have (the h is silent)' },
          { it: 'l — luna', ipa: '/ˈluːna/', en: 'moon' },
          { it: 'n — nome', ipa: '/ˈnoːme/', en: 'name' },
        ],
      },
      {
        grapheme: 'o p q r s t u v z',
        ipa: '/ɔ pi ku ˈɛrre ˈɛsse ti u vu ˈdzɛːta/',
        note: 'R is tapped once with the tongue, like the middle of American "better". Q only ever appears as qu.',
        examples: [
          { it: 'r — Roma', ipa: '/ˈroːma/', en: 'Rome' },
          { it: 'q — qui', ipa: '/kwi/', en: 'here' },
          { it: 'z — zero', ipa: '/ˈdzɛːro/', en: 'zero' },
        ],
      },
      {
        grapheme: 'j k w x y',
        ipa: '/i ˈlunga ˈkappa ˈdoppja vu iks ˈipsilon/',
        note: 'Foreign letters. Their names matter when spelling an email address aloud, which is exactly when you will need them.',
        examples: [
          { it: 'w — week-end', ipa: '/wiˈkɛnd/', en: 'weekend' },
          { it: 'x — taxi', ipa: '/ˈtaksi/', en: 'taxi' },
          { it: 'y — yogurt', ipa: '/ˈjɔgurt/', en: 'yoghurt' },
        ],
      },
    ],
    tip: 'When Italians spell a word on the phone they use city names: A come Ancona, B come Bologna, F come Firenze. Learning three or four is enough to survive a booking call.',
    questions: [
      {
        id: 'ph-alf-q1',
        prompt: 'Quante lettere ha l\'alfabeto italiano?',
        options: ['21', '26', '24', '20'],
        answer: 0,
        explanation: '21 letters. J, K, W, X and Y are used only in foreign words and names.',
      },
      {
        id: 'ph-alf-q2',
        prompt: 'Come si pronuncia la lettera H in italiano?',
        options: ['Come in "hotel" inglese', 'Non si pronuncia mai', 'Come una K', 'Come una G'],
        answer: 1,
        explanation: 'H is always silent. In ho, hai, ha it is written but never heard — it only distinguishes those forms from o, ai, a.',
      },
      {
        id: 'ph-alf-q3',
        prompt: 'La lettera Q appare sempre insieme a quale altra lettera?',
        options: ['A', 'U', 'I', 'O'],
        answer: 1,
        explanation: 'Q is always followed by u: qui, quando, questo, acqua.',
      },
    ],
  },
  {
    id: 'ph-a1-vocali',
    level: 'A1',
    title: 'Le cinque vocali',
    focus: 'Five pure vowels — and why English speakers turn them into six or seven',
    intro:
      'This is the single biggest thing separating a beginner accent from a good one. Italian vowels are pure: each is one steady sound from beginning to end. English vowels glide (say "no" slowly and hear it slide toward "oo"). Hold each Italian vowel still and you sound dramatically better immediately.',
    rows: [
      {
        grapheme: 'a',
        ipa: '/a/',
        note: 'Open, like the a in "father" but shorter. Never the a of "cat" or "make".',
        examples: [
          { it: 'casa', ipa: '/ˈkaːza/', en: 'house' },
          { it: 'gatto', ipa: '/ˈgatto/', en: 'cat' },
        ],
      },
      {
        grapheme: 'e',
        ipa: '/e/ or /ɛ/',
        note: 'Like the e in "bet", held steady. Never the "ay" glide of "day".',
        examples: [
          { it: 'bene', ipa: '/ˈbɛːne/', en: 'well' },
          { it: 'sera', ipa: '/ˈseːra/', en: 'evening' },
        ],
      },
      {
        grapheme: 'i',
        ipa: '/i/',
        note: 'Like "ee" in "see", but short and tense. Never the i of "sit".',
        examples: [
          { it: 'vino', ipa: '/ˈviːno/', en: 'wine' },
          { it: 'libro', ipa: '/ˈliːbro/', en: 'book' },
        ],
      },
      {
        grapheme: 'o',
        ipa: '/o/ or /ɔ/',
        note: 'Like the o in "more", with no glide toward "oo" at the end.',
        examples: [
          { it: 'sole', ipa: '/ˈsoːle/', en: 'sun' },
          { it: 'cosa', ipa: '/ˈkɔːza/', en: 'thing' },
        ],
      },
      {
        grapheme: 'u',
        ipa: '/u/',
        note: 'Like "oo" in "food", lips well rounded. Never the "yoo" of "use".',
        examples: [
          { it: 'luna', ipa: '/ˈluːna/', en: 'moon' },
          { it: 'uno', ipa: '/ˈuːno/', en: 'one' },
        ],
      },
    ],
    minimalPairs: [
      { a: 'pesca /ˈpeska/', b: 'pesca /ˈpɛska/', note: 'Same spelling: closed e = fishing, open e = peach. Context always disambiguates, so do not worry at A1.' },
      { a: 'nonno', b: 'nonna', note: 'Only the final vowel separates grandfather from grandmother — final vowels carry meaning and must never be swallowed.' },
    ],
    tip: 'Every vowel gets its full value, including at the end of a word. English speakers weaken final vowels to a lazy "uh"; in Italian that erases the grammar, since the ending is what marks gender and number.',
    questions: [
      {
        id: 'ph-voc-q1',
        prompt: 'Perché le vocali finali sono importanti in italiano?',
        options: [
          'Perché indicano genere e numero',
          'Perché sono sempre accentate',
          'Perché non si pronunciano',
          'Perché cambiano il tempo verbale',
        ],
        answer: 0,
        explanation: 'The final vowel carries the grammar: amico/amica, gatto/gatti. Weakening it destroys the information.',
      },
      {
        id: 'ph-voc-q2',
        prompt: 'La "i" italiana in "vino" somiglia di più a...',
        options: ['la i di "sit"', 'la "ee" di "see"', 'la a di "about"', 'la "ai" di "fine"'],
        answer: 1,
        explanation: 'Italian i is a tense /i/, close to "see" but shorter. The lax vowel of "sit" does not exist in Italian.',
      },
      {
        id: 'ph-voc-q3',
        prompt: 'Qual è il difetto più comune degli anglofoni con le vocali italiane?',
        options: [
          'Le pronunciano troppo lentamente',
          'Aggiungono un dittongo, facendole scivolare',
          'Le pronunciano troppo aperte',
          'Le omettono del tutto',
        ],
        answer: 1,
        explanation: 'English vowels glide; Italian vowels are pure and steady. Holding them still is the fastest accent improvement available.',
      },
    ],
  },
  {
    id: 'ph-a1-c-g',
    level: 'A1',
    title: 'C e G: dure o dolci',
    focus: 'The rule that decides whether c and g are hard or soft — and what h does about it',
    intro:
      'This is the rule that unlocks Italian spelling. C and G change sound depending on the vowel that follows. Learn this one pattern and you can read almost any Italian word aloud correctly, first time.',
    rows: [
      {
        grapheme: 'ca, co, cu',
        ipa: '/k/',
        note: 'Hard, like English "cat". Before a, o, u.',
        examples: [
          { it: 'casa', ipa: '/ˈkaːza/', en: 'house' },
          { it: 'cosa', ipa: '/ˈkɔːza/', en: 'thing' },
        ],
      },
      {
        grapheme: 'ci, ce',
        ipa: '/tʃ/',
        note: 'Soft, like English "church". Before i and e.',
        examples: [
          { it: 'ciao', ipa: '/tʃao/', en: 'hi' },
          { it: 'cena', ipa: '/ˈtʃeːna/', en: 'dinner' },
        ],
      },
      {
        grapheme: 'chi, che',
        ipa: '/k/',
        note: 'The h forces the hard sound back before i and e. That is h\'s only job in Italian.',
        examples: [
          { it: 'chiave', ipa: '/ˈkjaːve/', en: 'key' },
          { it: 'perché', ipa: '/perˈke/', en: 'because, why' },
        ],
      },
      {
        grapheme: 'ga, go, gu',
        ipa: '/g/',
        note: 'Hard, like English "go".',
        examples: [
          { it: 'gatto', ipa: '/ˈgatto/', en: 'cat' },
          { it: 'gonna', ipa: '/ˈgonna/', en: 'skirt' },
        ],
      },
      {
        grapheme: 'gi, ge',
        ipa: '/dʒ/',
        note: 'Soft, like English "gem".',
        examples: [
          { it: 'gelato', ipa: '/dʒeˈlaːto/', en: 'ice cream' },
          { it: 'giorno', ipa: '/ˈdʒorno/', en: 'day' },
        ],
      },
      {
        grapheme: 'ghi, ghe',
        ipa: '/g/',
        note: 'Again the h restores the hard sound.',
        examples: [
          { it: 'spaghetti', ipa: '/spaˈgetti/', en: 'spaghetti' },
          { it: 'ghiaccio', ipa: '/ˈgjattʃo/', en: 'ice' },
        ],
      },
    ],
    minimalPairs: [
      { a: 'cena /ˈtʃeːna/', b: 'chena — not a word', note: 'Add an h and the sound would flip to /k/. This is why chi and che are spelled the way they are.' },
      { a: 'giro /ˈdʒiːro/ (turn)', b: 'ghiro /ˈgiːro/ (dormouse)', note: 'One h separates two real words. The h is silent but decisive.' },
    ],
    tip: 'Remember it as: i and e soften, h hardens. Nothing else in Italian spelling is as productive as this single rule.',
    questions: [
      {
        id: 'ph-cg-q1',
        prompt: 'Come si pronuncia la "c" in «cena»?',
        options: ['come "k"', 'come "ch" di "church"', 'come "s"', 'come "sh"'],
        answer: 1,
        explanation: 'C before e or i is soft: /tʃ/, as in church.',
      },
      {
        id: 'ph-cg-q2',
        prompt: 'A cosa serve la "h" in «chiave»?',
        options: [
          'Si pronuncia come in inglese',
          'Mantiene il suono duro /k/ davanti a i',
          'Indica l\'accento',
          'Non serve a niente',
        ],
        answer: 1,
        explanation: 'Without the h, chi would be read /tʃi/. The h keeps c hard before i and e.',
      },
      {
        id: 'ph-cg-q3',
        prompt: 'Come si pronuncia «spaghetti»?',
        options: ['/spaˈdʒetti/', '/spaˈgetti/', '/spaˈʃetti/', '/spaˈketti/'],
        answer: 1,
        explanation: 'The h keeps g hard before e: /spaˈgetti/, not "spa-jetti".',
      },
    ],
  },
  {
    id: 'ph-a1-gn-gl-sc',
    level: 'A1',
    title: 'GN, GLI e SC',
    focus: 'Three combinations with no English equivalent',
    intro:
      'These three digraphs have no direct English counterpart, so they need to be learned deliberately rather than guessed. They appear constantly — in lasagne, in famiglia, in pesce.',
    rows: [
      {
        grapheme: 'gn',
        ipa: '/ɲ/',
        note: 'Like the ny in "canyon", but one single sound, not n followed by y. Tongue flat against the roof of the mouth.',
        examples: [
          { it: 'gnocchi', ipa: '/ˈɲɔkki/', en: 'gnocchi' },
          { it: 'bagno', ipa: '/ˈbaɲɲo/', en: 'bathroom' },
          { it: 'signora', ipa: '/siɲˈɲoːra/', en: 'lady, madam' },
        ],
      },
      {
        grapheme: 'gli',
        ipa: '/ʎ/',
        note: 'Like the lli in "million", again as one sound. The commonest word in Italian, gli, is exactly this.',
        examples: [
          { it: 'famiglia', ipa: '/faˈmiʎʎa/', en: 'family' },
          { it: 'figlio', ipa: '/ˈfiʎʎo/', en: 'son' },
          { it: 'aglio', ipa: '/ˈaʎʎo/', en: 'garlic' },
        ],
      },
      {
        grapheme: 'sci, sce',
        ipa: '/ʃ/',
        note: 'Like English "sh". Before i and e only.',
        examples: [
          { it: 'pesce', ipa: '/ˈpeʃʃe/', en: 'fish' },
          { it: 'sciare', ipa: '/ʃiˈaːre/', en: 'to ski' },
        ],
      },
      {
        grapheme: 'sca, sco, scu, sch',
        ipa: '/sk/',
        note: 'Hard /sk/, following the same logic as c: a, o, u and h keep it hard.',
        examples: [
          { it: 'scuola', ipa: '/ˈskwɔːla/', en: 'school' },
          { it: 'scherzo', ipa: '/ˈskertso/', en: 'joke' },
        ],
      },
    ],
    minimalPairs: [
      { a: 'pesce /ˈpeʃʃe/ (fish)', b: 'pesce vs pesca', note: 'sce is /ʃ/, but sca is /sk/ — the same rule as c and g, applied to sc.' },
      { a: 'gli /ʎi/', b: 'li /li/', note: 'Both are pronouns. Getting gli wrong makes you say a different word entirely.' },
    ],
    tip: 'For gn and gli, resist splitting them into two sounds. Say "canyon" and "million" and notice your tongue makes one gesture, not two — that gesture is the Italian sound.',
    questions: [
      {
        id: 'ph-gn-q1',
        prompt: 'Come si pronuncia «gn» in «bagno»?',
        options: ['come in "magnet"', 'come "ny" di "canyon"', 'come "g" + "n" separate', 'non si pronuncia'],
        answer: 1,
        explanation: 'gn is a single palatal sound /ɲ/, as in canyon — never g followed by n.',
      },
      {
        id: 'ph-gn-q2',
        prompt: 'In quale parola «sc» si pronuncia /sk/?',
        options: ['pesce', 'scienza', 'scuola', 'sciare'],
        answer: 2,
        explanation: 'Before u it stays hard: scuola /ˈskwɔːla/. Before i and e it becomes /ʃ/.',
      },
      {
        id: 'ph-gn-q3',
        prompt: 'Il suono di «gli» in «famiglia» somiglia a...',
        options: ['"gl" di "glass"', '"lli" di "million"', '"g" + "li"', '"y" di "yes"'],
        answer: 1,
        explanation: 'gli is /ʎ/, the single sound in million — not a g followed by an l.',
      },
    ],
  },
  {
    id: 'ph-a1-doppie',
    level: 'A1',
    title: 'Le doppie',
    focus: 'Double consonants, and how they change meaning',
    intro:
      'Double consonants are genuinely held longer, and the difference changes words. English speakers routinely ignore them, which is the second most recognisable foreign-accent feature after gliding vowels — and unlike vowels, this one causes real misunderstandings.',
    rows: [
      {
        grapheme: 'nn, ll, tt, ss',
        ipa: 'held roughly twice as long',
        note: 'Stop on the consonant and hold it before releasing. For stops like tt, the silence before the release is the sound.',
        examples: [
          { it: 'anno', ipa: '/ˈanno/', en: 'year' },
          { it: 'bella', ipa: '/ˈbɛlla/', en: 'beautiful' },
          { it: 'gatto', ipa: '/ˈgatto/', en: 'cat' },
        ],
      },
      {
        grapheme: 'cc, gg before i/e',
        ipa: '/ttʃ/, /ddʒ/',
        note: 'The doubling applies to the soft sound too — hold it, do not repeat it.',
        examples: [
          { it: 'faccio', ipa: '/ˈfattʃo/', en: 'I do' },
          { it: 'oggi', ipa: '/ˈɔddʒi/', en: 'today' },
        ],
      },
    ],
    minimalPairs: [
      { a: 'ano', b: 'anno', note: 'One is "year". The other is an anatomical term. Hold the n.' },
      { a: 'casa (house)', b: 'cassa (crate, till)', note: 'A single s and a double s are different words.' },
      { a: 'nono (ninth)', b: 'nonno (grandfather)', note: 'Very common pair, and both plausible in the same sentence.' },
      { a: 'papa (pope)', b: 'pappa (baby food)', note: 'And with a written accent, papà is "dad" — three distinct words.' },
    ],
    tip: 'To practise, insert a tiny pause: gat—to, an—no. Exaggerate at first; Italians will hear it as correct rather than odd, because the length really is there.',
    questions: [
      {
        id: 'ph-dop-q1',
        prompt: 'Qual è la differenza fra «nono» e «nonno»?',
        options: [
          'Nessuna, sono varianti',
          '«nono» = ninth, «nonno» = grandfather',
          'Solo l\'accento',
          '«nono» è plurale',
        ],
        answer: 1,
        explanation: 'The doubled n is the only difference, and it changes the word entirely.',
      },
      {
        id: 'ph-dop-q2',
        prompt: 'Come si realizza una consonante doppia?',
        options: [
          'Si pronuncia due volte di seguito',
          'Si tiene più a lungo',
          'Si pronuncia più forte',
          'Non cambia nulla',
        ],
        answer: 1,
        explanation: 'It is held longer, not repeated. For stops the extra length is heard as a brief silence before release.',
      },
      {
        id: 'ph-dop-q3',
        prompt: 'Perché le doppie contano più delle vocali per farsi capire?',
        options: [
          'Perché sono più frequenti',
          'Perché distinguono parole diverse e causano veri malintesi',
          'Perché sono più facili',
          'Perché indicano l\'accento',
        ],
        answer: 1,
        explanation: 'Gliding a vowel sounds foreign; missing a double consonant can produce a different word altogether.',
      },
    ],
  },
  {
    id: 'ph-a1-accento',
    level: 'A1',
    title: "L'accento tonico",
    focus: 'Where the stress falls, and what the written accent means',
    intro:
      'Most Italian words are stressed on the second-to-last syllable. That default covers the large majority of what you will read, and the exceptions are learnable. The written accent (à, è, ì, ò, ù) is not decoration: it marks stress on the final syllable, or distinguishes two words.',
    rows: [
      {
        grapheme: 'penultimate stress (the default)',
        ipa: 'ca-SA, a-MI-co',
        note: 'The commonest pattern by far. When in doubt, stress the second-to-last syllable.',
        examples: [
          { it: 'amico', ipa: '/aˈmiːko/', en: 'friend' },
          { it: 'ragazzo', ipa: '/raˈgattso/', en: 'boy' },
        ],
      },
      {
        grapheme: 'written accent = final stress',
        ipa: 'cit-TÀ',
        note: 'When stress falls on the last vowel it must be written. These words never change in the plural.',
        examples: [
          { it: 'città', ipa: '/tʃitˈta/', en: 'city' },
          { it: 'caffè', ipa: '/kafˈfɛ/', en: 'coffee' },
          { it: 'perché', ipa: '/perˈke/', en: 'why, because' },
        ],
      },
      {
        grapheme: 'antepenultimate stress',
        ipa: 'TA-vo-lo',
        note: 'Third-from-last. Not predictable from spelling, so it has to be learned word by word — dictionaries mark it.',
        examples: [
          { it: 'tavolo', ipa: '/ˈtaːvolo/', en: 'table' },
          { it: 'telefono', ipa: '/teˈlɛːfono/', en: 'telephone' },
          { it: 'abitano', ipa: '/ˈaːbitano/', en: 'they live' },
        ],
      },
      {
        grapheme: 'accent that distinguishes words',
        ipa: 'e vs è',
        note: 'On one-syllable words the accent separates meanings rather than marking stress.',
        examples: [
          { it: 'e / è', ipa: '/e/ /ɛ/', en: 'and / is' },
          { it: 'si / sì', ipa: '/si/ /si/', en: 'oneself / yes' },
          { it: 'la / là', ipa: '/la/ /la/', en: 'the / there' },
        ],
      },
    ],
    minimalPairs: [
      { a: 'ancora /ˈaŋkora/ (anchor)', b: 'ancora /aŋˈkoːra/ (still, again)', note: 'Same spelling, stress alone decides. Context usually helps, but not always.' },
      { a: 'papa (pope)', b: 'papà (dad)', note: 'The written accent moves the stress and changes the word.' },
    ],
    tip: 'Verbs are where third-from-last stress bites: parlano is PAR-lano, not par-LA-no. Getting the stress wrong on a verb is more confusing to a listener than getting a vowel wrong.',
    questions: [
      {
        id: 'ph-acc-q1',
        prompt: 'Dove cade normalmente l\'accento in italiano?',
        options: ['Sull\'ultima sillaba', 'Sulla penultima sillaba', 'Sulla prima sillaba', 'È imprevedibile'],
        answer: 1,
        explanation: 'The penultimate syllable is the default pattern for the great majority of words.',
      },
      {
        id: 'ph-acc-q2',
        prompt: 'Che cosa indica l\'accento scritto in «città»?',
        options: [
          'Che la parola è femminile',
          'Che l\'accento cade sull\'ultima sillaba',
          'Che la parola è straniera',
          'Che la a è lunga',
        ],
        answer: 1,
        explanation: 'A written accent on the final vowel marks final stress. Such words are invariable in the plural: la città, le città.',
      },
      {
        id: 'ph-acc-q3',
        prompt: 'Come si accenta il verbo «parlano»?',
        options: ['par-LA-no', 'PAR-la-no', 'par-la-NO', 'Entrambi vanno bene'],
        answer: 1,
        explanation: 'Third-person plural present forms are stressed on the third-from-last syllable: PAR-lano, A-bitano.',
      },
    ],
  },
];

export const phonicsByLevel = (level: PhonicsLesson['level']) => PHONICS.filter((p) => p.level === level);
