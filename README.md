# Italiano Quotidiano

A daily Italian practice app for English speakers working from **A2 up to C2**. Every day it assembles one
lesson at your level: a word with real usage notes, an article, a listening clip, a vocabulary quiz,
conjugation drills, and a conversational-vocabulary deck.

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # logic + content-integrity tests
npm run build    # production bundle in dist/
```

## What it does

| Section | What you get |
| --- | --- |
| **Oggi** | The day's six activities, progress bar, streak and XP. |
| **Parola** | Headword with IPA, gloss, a usage note written for English speakers, false-friend warnings, two example sentences, collocations, and the word family. Star it to add it to your review deck. |
| **Lettura** | A level-calibrated article with paragraph-by-paragraph translation on demand, a glossary, and three comprehension questions. |
| **Ascolto** | A dialogue or interview written for the ear. Transcript hidden by default, per-line replay, adjustable speed, key phrases, and comprehension questions. |
| **Lessico** | Three auto-generated questions on the day's word: use in context, meaning, collocation. |
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
per level runs from 0.85× at A2 to 1.05× at C2, which lands near real conversational pace on most voices.

If no Italian voice is installed the app says so, explains where to add one, and falls back to the transcript.
Chrome, Edge and Safari ship Italian voices on macOS/iOS and most Windows installs; headless Linux
usually has none.

## Content

All Italian in this repo is original, written for the app and calibrated by level: vocabulary chosen for what
actually blocks English speakers (`riuscire a` vs `potere`, `rendersi conto` vs *realize*), articles that move
from concrete routines at A2 to legal-bureaucratic register at C2, and drills sequenced by what each level is
meant to be consolidating:

- **A2** — passato prossimo and auxiliary choice, imperfetto, direct pronouns, `piacere`
- **B1** — present subjunctive, conditional, trapassato, `ne`, formal imperative
- **B2** — imperfect subjunctive, second-type hypotheticals, passives, sequence of tenses
- **C1** — third-type hypotheticals, absolute participles, compound gerunds, combined pronouns
- **C2** — passato remoto, optative subjunctive, formal impersonal syntax, reported speech

### Conversational vocabulary

Textbooks teach content words and skip the connective tissue, which is why a learner with solid grammar can
still sound like a written document read aloud. `Conversazione` covers that layer: 50 items across the five
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
`conversationDrills.ts`). Adding an entry is enough for it to enter the daily rotation — no other wiring. `npm test` enforces the invariants that make
that safe: unique IDs, in-range answer indices, exactly one blank per cloze, every drill accepting its own
answer, parallel text on every paragraph and transcript line, all four conversational roles present at every
level, and every dialogue hint list containing a correct option.

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

## Storage and privacy

Progress, streak, statistics, saved words and flashcard mastery are kept in `localStorage` under `italiano-quotidiano/v1`.
Nothing is sent anywhere; there is no backend and no analytics. **Ripasso → Azzera i progressi** clears it.

## Stack

React 18 + TypeScript + Vite, no runtime dependencies beyond React. Plain CSS with custom properties, light
and dark themes, responsive down to phone widths.
