# Italiano Quotidiano

A daily Italian practice app for English speakers working from **A1 up to C2**. Every day it assembles one
lesson at your level: a word with real usage notes, an article, a listening clip, a vocabulary quiz,
conjugation drills, and a conversational-vocabulary deck — plus pronunciation and grammar lessons at the
levels that need them.

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # logic + content-integrity tests
npm run build    # production bundle in dist/
```

## What it does

| Section | What you get |
| --- | --- |
| **Oggi** | The day's activities, progress bar, streak and XP. Six at most levels, eight at A1. |
| **Pronuncia** *(A1)* | The alphabet and the letter combinations, with playable examples, minimal pairs and a check. |
| **Grammatica** *(A1)* | One grammar point a day with paradigm tables, worked examples, the common error, and a check. |
| **Lessico** *(A1–A2)* | **Self-paced.** Vocabulary built inside conversations, with spaced repetition. Work scenes in any order; the words come back on a schedule. |
| **Parola** | Headword with IPA, gloss, a usage note written for English speakers, false-friend warnings, two example sentences, collocations, and the word family. Star it to add it to your review deck. |
| **Lettura** | A level-calibrated article with paragraph-by-paragraph translation on demand, a glossary, and three comprehension questions. |
| **Ascolto** | A dialogue or interview written for the ear. Transcript hidden by default, per-line replay, adjustable speed, key phrases, and comprehension questions. |
| **Quiz** | Three auto-generated questions on the day's word: use in context, meaning, collocation. |
| **Coniugazioni** | Four fill-in-the-blank drills targeting the grammar your level is supposed to be consolidating, each with a full explanation. |
| **Conversazione** | The words that hold spoken Italian together — fillers, connectives, conversational nouns and adjectives — as a flashcard deck and as gap-fills set inside real dialogues. |
| **Ripasso** | Accuracy statistics, a two-week activity heatmap, and your saved-word deck. |

## How the daily lesson is chosen

Selection is deterministic, not random: a date-seeded index into each level's bank
(`src/lib/daily.ts`). Two consequences that matter in use — the lesson stays put if you close the tab and
come back later in the day, and the rotation walks the entire bank before anything repeats. Levels are
offset from one another, so switching level gives you genuinely different material rather than the same
slot number in a different bank.

## About the audio

Listening clips are **synthesised in the browser** from their transcripts using the Web Speech API and
whatever Italian voice your device has installed — they are not recorded podcast audio. This keeps the app
fully offline-capable and free of API keys, and it is why playback speed is exposed as a control: the default
per level runs from 0.78× at A1 to 1.05× at C2, which lands near real conversational pace on most voices.

If no Italian voice is installed the app says so, explains where to add one, and falls back to the transcript.
Chrome, Edge and Safari ship Italian voices on macOS/iOS and most Windows installs; headless Linux
usually has none.

## Content

All Italian in this repo is original, written for the app and calibrated by level: vocabulary chosen for what
actually blocks English speakers (`riuscire a` vs `potere`, `rendersi conto` vs *realize*), articles that move
from first sentences at A1 to legal-bureaucratic register at C2, and drills sequenced by what each level is
meant to be consolidating:

- **A1** — essere/avere, articles, plurals, adjective agreement, `-are` present, `c'è`/`ci sono`
- **A2** — passato prossimo and auxiliary choice, imperfetto, direct pronouns, `piacere`
- **B1** — present subjunctive, conditional, trapassato, `ne`, formal imperative
- **B2** — imperfect subjunctive, second-type hypotheticals, passives, sequence of tenses
- **C1** — third-type hypotheticals, absolute participles, compound gerunds, combined pronouns
- **C2** — passato remoto, optative subjunctive, formal impersonal syntax, reported speech

### Conversational vocabulary

Textbooks teach content words and skip the connective tissue, which is why a learner with solid grammar can
still sound like a written document read aloud. `Conversazione` covers that layer: 60 items across the six
levels, sorted by the job a word does in a turn rather than by part of speech — `segnale discorsivo`
(allora, insomma, mah, figurati), `connettivo` (anzi, del resto, peraltro, per contro), plus the nouns and
adjectives that carry conversation (`la fregatura`, `il distinguo`, `pesante`, `calzante`). Each card gives
the **function** — what the word does to a turn — because for a discourse marker that is the whole meaning.

Two study modes:

- **Flashcard** — flip to reveal function, register, worked exchanges and traps. Grade yourself: a card you
  recall advances toward mastery, one you miss goes back to zero and returns later in the same session, so a
  deck finishes only once every card has been recalled at least once.
- **Dialoghi** — gap-fills set inside short exchanges, because a marker has no meaning outside a turn. Type
  the answer, or reveal four candidates to turn it into multiple choice. The translation of the gapped line
  stays hidden until you commit, and `accepted` is deliberately generous: where a native speaker could use a
  different marker, the drill takes it and the explanation says why the keyed answer fits best.

Banks live in `src/data/` (`words.ts`, `articles.ts`, `listening.ts`, `exercises.ts`, `conversation.ts`,
`conversationDrills.ts`, `phonics.ts`, `grammar.ts`, `lexicon.ts`, `scenes.ts`). Adding an entry is enough for
it to enter the rotation — or, for `lexicon.ts` and `scenes.ts`, the self-paced library — with no other wiring.

`npm test` enforces the invariants that make that safe: unique IDs, in-range answer indices, exactly one
blank per cloze, every drill accepting its own answer, parallel text on every paragraph and transcript line,
all four conversational roles present at every level, and every dialogue hint list containing a correct
option.

**Rotation depth is also enforced.** Articles and listening clips are six deep per level, and tests assert
that seven consecutive days yield at least six distinct items and never the same one twice running. A
three-item bank still changed daily but came round every third day, which in use read as "the section is not
updating" — so the depth is a tested property, not a convention.

### Building the core vocabulary (A1–A2)

`Lessico` exists because a word list and a word are different things. The bank is aimed at the
**vocabolario fondamentale** — the roughly two thousand words behind most everyday Italian, of which the
first thousand does most of the work, and which maps almost exactly onto what CEFR expects at A1 and A2.

**The bank now holds 1036 entries** — 400 at A1 and 636 at A2 — so the thousand-word core is covered rather
than aimed at. Ranks are contiguous from 1, every A1 rank precedes every A2 one, and tests enforce both.

**Nothing is gated.** Words can be added to the schedule at any moment: one at a time, a whole semantic
cluster at once, from a scene without finishing its exercises, or from the searchable word bank. Scenes are
*one* way of meeting a word, not the only one — a dozen scenes cannot introduce a thousand words, and
requiring them made most of the bank unreachable. Words can be removed again for anything already known.

**This section is deliberately not part of the daily rotation.** A vocabulary bank rationed by the calendar
is a worse vocabulary bank: you should be able to do four scenes on a wet Sunday and none on Tuesday. Scenes
never expire and can be replayed. What *does* run on a schedule is the words, through spaced repetition —
which is the part that genuinely needs a calendar.

Three decisions do the real work:

- **Every entry stores a chunk, not a definition.** Knowing `mano` means "hand" is close to useless;
  knowing `dammi una mano` is immediately usable. Words are held in the shape they actually arrive in.
- **Words are met inside a scene before they are ever listed.** Each scene runs in a fixed order —
  dialogue, then the words it just used, then gap-fills taken from that same dialogue, then a
  discrimination round. Showing the glossary first would turn it back into a deck with a dialogue attached.
- **Review asks you to produce, not to recognise.** A card shows the English chunk and you say the Italian
  before revealing it. Recognition feels easier and measures less.
- **Adding a word never resets it.** Add it twice, or replay its scene, and a card you have held for three
  weeks keeps its interval.

### Spaced repetition

`src/lib/srs.ts` is a simplified SM-2: each word carries an interval in days and an ease factor that rises
when recall is easy and falls when it is not. Deliberately **not** a Leitner box ladder — fixed boxes give
every word the same curve, wasting reviews on words you already own and under-serving the few that keep
slipping.

Details that matter in practice:

- The first two successful intervals are fixed (1 day, then 3) rather than derived from ease. Multiplying a
  zero-length interval by an ease factor yields zero, which is the classic way a hand-rolled SM-2 traps a
  card in a same-day loop for ever. A test asserts it cannot happen.
- **Di nuovo** returns the card later in the same session, drops its ease and records a lapse; it does not
  end the session for that word.
- Sessions are capped at 20 cards, so a fortnight away produces a finishable queue rather than a wall.
- The queue is ordered most-overdue first, then by lapse count: the words that keep slipping come first.
- A word counts as retained once its interval passes 21 days. The library shows coverage, a
  consolidated/learning split and a seven-day forecast.
- Replaying a finished scene never resets a word's progress.

That last round is where "how Italians actually use it" is taught explicitly: the plausible English calque
against what a native produces, with the reason spelled out. `Voglio un caffè` against `Un caffè, per
favore`; `Ho mancato il treno` against `Ho perso il treno`; `Quanto tempo prende?` against `Quanto ci
mette?`. Every option is comprehensible — only one is what gets said.

Nouns are displayed with the article their **sound** requires, not their gender alone (`l'acqua`,
`lo scontrino`, `i soldi`), since at A1 the article is part of the word and a wrong one is the commonest
error. A test asserts no rendered article can collide with the following sound.

Rows in `lexicon.ts` are tuples rather than objects on purpose: at a thousand entries the object form is
unmaintainable, one line per word is not. Adding words is a data edit; adding a scene wires itself into the
daily rotation.

### A1: pronunciation and grammar

A1 gets two sections the other levels do not, because a beginner needs them and a C1 learner does not.

**Pronuncia** covers the alphabet, the five pure vowels, the hard/soft rule for `c` and `g`, the `gn`/`gli`/`sc`
combinations, double consonants and stress. Italian spelling is nearly phonetic, so this is a solved problem
once the rules are learned — the section exists to get them learned before habits set. Every example word is
individually playable, deliberately slower than the level's normal rate, and minimal pairs (`nono`/`nonno`,
`papa`/`papà`) show where an error changes the word rather than just the accent.

**Grammatica** runs one lesson a day with paradigm tables, worked examples and the error English speakers
actually make: subject pronouns and why they are usually dropped, `essere`/`avere` including the states
Italian expresses with *have*, articles, plurals, adjective agreement, indirect pronouns, `servire` and
`piacere` (which invert the English sentence), and `farcela`/`andarsene`.

Those last two are properly B1 as pronominal verbs; they are taught here as fixed chunks — `ce la faccio`,
`me ne vado` — because a beginner meets them on day one and can use them correctly long before parsing them.

Both sections are level-scoped: `activeTasks()` derives the day's task list from what the lesson actually
contains, so the tabs, the dashboard and the progress bar appear and disappear with the level, and a day is
never left uncompletable by a task with no content behind it.

## Offline

**The app works with no network at all**, and installs to a phone home screen.

That was mostly true already: there are no API calls, no external fonts or images, no analytics, and no
backend. Content is bundled into the JavaScript, progress lives in `localStorage`, and the audio is your
device's own Italian voice. The only thing missing was the ability to *load* it without a connection, which
is what the service worker adds.

- **Install it**: open the site and use *Add to Home Screen* (Safari) or *Install* (Chrome). It then opens
  standalone, without browser chrome.
- **First visit needs a connection.** After that, everything works offline: reading, listening, drills,
  the vocabulary scenes, spaced repetition and sign-in — the password check is Web Crypto, which is local.
- **Updates still arrive.** `scripts/build-sw.mjs` generates the worker after each build with two rules:
  hashed assets under `/assets/` are immutable and served cache-first, while the HTML document is
  **network-first with the cache as fallback**. Cache-first on the document is how a PWA pins itself to an
  old version for ever — the browser keeps serving stale HTML and the user never sees a new release.
- The cache name is a content hash of the build, so an unchanged redeploy does not discard a working cache,
  and old caches are deleted on activation.
- Registration failure is non-fatal. An app that will not start because its caching layer errored is worse
  than one that simply needs a connection.

Icons are committed PNGs under `public/icons/` — iOS will not accept an SVG for the home-screen icon.
Regenerating them needs Playwright: `npm i -D playwright && node scripts/make-icons.mjs`. The build itself
never depends on a browser.

For a copy with no hosting at all, `npm run build:standalone` still produces `dist/standalone.html`: one
self-contained file you can open from `file://`.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` typechecks, tests, builds and publishes to Pages on every push to `main`
(and on demand from the Actions tab). Two one-time steps are needed before the first deploy:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Merge this branch into `main` — the workflow only deploys from the default branch, which is also what the
   `github-pages` environment allows by default.

The site then lands at `https://<owner>.github.io/italian-language-app/`. A project site is served from a
subpath, so the workflow passes `BASE_PATH=/<repo>/` to Vite; local dev, `vite preview` and the standalone
build all stay at the root. If you rename the repository the path follows automatically — it is read from
`github.event.repository.name`, not hardcoded.

For a one-off preview without any of this, `npm run build:standalone` produces `dist/standalone.html`: a
single self-contained file with everything inlined and no network requests, which you can open from
`file://`, email, or drop on any host.

## Profiles and sign-in

The app ships with two profiles, **Tyler** and **Jessica**. Each keeps its own streak, XP, statistics, saved
words and flashcard mastery, so sharing a browser no longer means sharing a streak. Data lives under
`italiano-quotidiano/v1/<username>`, and nothing is written at all while signed out.

> **This is not access control.** The site is static and has no backend, so the check runs entirely in the
> browser: anyone who opens developer tools can bypass the gate or read another profile's data out of
> `localStorage`. It separates profiles and keeps casual visitors out — nothing more. Do not reuse a password
> you use anywhere else, and do not keep anything sensitive in here.

Passwords are never stored in the repository. `src/data/users.ts` holds only a PBKDF2-SHA256 derivation
(150,000 iterations, 16-byte random per-user salt), so publishing the source does not publish the passwords
and offline guessing is slow rather than instant. A weak password still falls to a determined attacker.

To change a password:

```bash
node scripts/make-credentials.mjs tyler "a new password"
```

Paste the printed `salt` and `hash` over that user's entry in `src/data/users.ts`. Adding a third person is
the same operation with a new entry — nothing else needs wiring. The derivation in the script and in
`src/lib/auth.ts` must stay in step; both are pinned to `PBKDF2_ITERATIONS`.

Progress from before profiles existed is inherited once by the `tyler` account on first sign-in, then the old
key is removed, so an existing streak is not lost.

**Ripasso → Azzera i progressi** clears the signed-in profile only.

### If you want real authentication

That needs a server, which GitHub Pages cannot provide. The least-effort routes are Cloudflare Access in
front of the site (identity at the edge, no code change), or moving the app to a host with built-in auth and
per-user storage. Either is a larger change than this one; say the word.

## Stack

React 18 + TypeScript + Vite, no runtime dependencies beyond React. Plain CSS with custom properties, light
and dark themes, responsive down to phone widths.
