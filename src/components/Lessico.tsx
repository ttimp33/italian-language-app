import { useEffect, useMemo, useState } from 'react';
import type { Level, Scene } from '../data/types';
import { LEVEL_RATE, LEVELS } from '../data/types';
import { LEXICON, LEXICON_TARGET, clustersFor, lexById, lexiconByLevel, withArticle } from '../data/lexicon';
import type { LexEntry } from '../data/types';
import { SCENES } from '../data/scenes';
import { normalizeAnswer } from '../lib/daily';
import { useProgress } from '../lib/progress';
import { type Grade, dueCards, isLearned, summarise } from '../lib/srs';
import { useItalianSpeech } from '../lib/speech';

type View = { kind: 'libreria' } | { kind: 'scena'; id: string } | { kind: 'ripasso' } | { kind: 'parole' };

/**
 * The vocabulary section is self-paced: it has no day, no rotation and no daily
 * task. What returns on a schedule is the *words*, through spaced repetition —
 * which is the part that actually needs a calendar.
 */
export function Lessico({ level }: { level: Level }) {
  const [view, setView] = useState<View>({ kind: 'libreria' });

  // Switching level while inside a scene would show another level's material.
  useEffect(() => {
    setView({ kind: 'libreria' });
  }, [level]);

  if (view.kind === 'scena') {
    const scene = SCENES.find((s) => s.id === view.id);
    if (scene) return <SceneView scene={scene} onExit={() => setView({ kind: 'libreria' })} />;
  }
  if (view.kind === 'ripasso') return <ReviewView level={level} onExit={() => setView({ kind: 'libreria' })} />;
  if (view.kind === 'parole') return <WordBank level={level} onExit={() => setView({ kind: 'libreria' })} />;

  return <Library level={level} onOpen={(v) => setView(v)} />;
}

/* ────────────────────────────── library ────────────────────────────── */

function Library({ level, onOpen }: { level: Level; onOpen: (v: View) => void }) {
  const { progress } = useProgress();
  const cards = useMemo(() => Object.values(progress.srs), [progress.srs]);
  const summary = useMemo(() => summarise(cards), [cards]);

  // The scene list is not locked to the level you are studying. A learner at A2
  // still wants the A1 scenes for revision, and one at A1 wants to look ahead.
  const sceneLevels = useMemo(
    () => LEVELS.filter((l) => SCENES.some((s) => s.level === l)),
    [],
  );
  const [scope, setScope] = useState<Level | 'tutte'>(level);
  // Follow the level switcher, but only until the learner overrides it here.
  const [pinned, setPinned] = useState(false);
  useEffect(() => {
    if (!pinned) setScope(level);
  }, [level, pinned]);

  const scenes = scope === 'tutte' ? SCENES : SCENES.filter((s) => s.level === scope);
  const levelWords = lexiconByLevel(level);

  const maxForecast = Math.max(1, ...summary.forecast.map((f) => f.count));

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Lessico in contesto · {level}</span>
          <span className="pill">senza scadenze</span>
        </div>
        <h1>Costruisci il tuo lessico</h1>
        <p className="muted small" style={{ marginTop: 6 }}>
          Vai al tuo ritmo: nessuna scena scade e puoi rifarle quando vuoi. A tornare a scadenza sono le parole, non
          le lezioni.
        </p>

        {summary.due > 0 ? (
          <div className="due-banner">
            <div>
              <div className="due-count">{summary.due}</div>
              <div className="muted small">
                {summary.due === 1 ? 'parola da ripassare' : 'parole da ripassare'}
              </div>
            </div>
            <button className="btn primary" onClick={() => onOpen({ kind: 'ripasso' })}>
              Ripassa ora
            </button>
          </div>
        ) : (
          <p className="muted small" style={{ marginTop: 14 }}>
            {cards.length === 0
              ? 'Aggiungi qualche parola dall’elenco, o comincia una scena: il ripasso parte da lì.'
              : 'Nessuna parola in scadenza oggi. Torna domani, o aggiungine altre.'}
          </p>
        )}
      </section>

      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Scene</span>
          <span className="pill">
            {scenes.filter((s) => progress.scenesDone.includes(s.id)).length} / {scenes.length}
          </span>
        </div>
        <div className="chips" style={{ marginBottom: 14 }}>
          {[...sceneLevels, 'tutte' as const].map((s) => (
            <button
              key={s}
              type="button"
              className={`chip chip-btn${scope === s ? ' on' : ''}`}
              aria-pressed={scope === s}
              onClick={() => {
                setScope(s);
                setPinned(true);
              }}
            >
              {s === 'tutte' ? `tutte (${SCENES.length})` : `${s} (${SCENES.filter((x) => x.level === s).length})`}
            </button>
          ))}
        </div>
        <div className="today-grid">
          {scenes.map((scene) => {
            const done = progress.scenesDone.includes(scene.id);
            return (
              <button key={scene.id} className={`task-card${done ? ' done' : ''}`} onClick={() => onOpen({ kind: 'scena', id: scene.id })}>
                <span className="task-title">
                  {done ? '✓ ' : ''}
                  {scene.title}
                </span>
                <span className="task-sub">{scene.situation}</span>
                <span className="task-meta">
                  {scene.level} · {scene.teaches.length} parole {done ? '· da rifare' : ''}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Il tuo lessico di base</span>
          {/* Measured against the whole bank, not the 1000 milestone: the bank
              now exceeds it, and a pill reading "1036 / 1000" is nonsense. */}
          <span className="pill">
            {summary.total} / {LEXICON.length}
          </span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={Math.round((summary.total / LEXICON.length) * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="progress-fill" style={{ width: `${Math.min(100, (summary.total / LEXICON.length) * 100)}%` }} />
        </div>
        <div className="muted small">
          {summary.learned} consolidate · {summary.learning} ancora in apprendimento · nucleo fondamentale di{' '}
          {LEXICON_TARGET} parole superato ({LEXICON.length} in banca)
        </div>

        <div style={{ marginTop: 18 }}>
          <span className="eyebrow">Prossimi sette giorni</span>
          <div className="forecast">
            {summary.forecast.map((f, i) => (
              <div className="forecast-col" key={f.day} title={`${f.day}: ${f.count}`}>
                <div className="forecast-bar" style={{ height: `${Math.max(3, (f.count / maxForecast) * 52)}px` }} />
                <span className="forecast-label">{i === 0 ? 'oggi' : f.day.slice(8)}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <span className="eyebrow">Aree del livello {level}</span>
          <div className="chips">
            {clustersFor(level).map(({ cluster, entries }) => {
              const met = entries.filter((e) => progress.srs[e.id]).length;
              return (
                <span className="chip" key={cluster}>
                  {cluster} {met}/{entries.length}
                </span>
              );
            })}
          </div>
          <p className="muted small" style={{ marginTop: 10 }}>
            In banca ci sono {levelWords.length} parole per il livello {level}. Puoi aggiungerne quante vuoi, quando
            vuoi: le scene sono un modo di incontrarle, non l'unico.
          </p>
          <div className="actions">
            <button className="btn primary" onClick={() => onOpen({ kind: 'parole' })}>
              Sfoglia tutte le parole →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────── review ────────────────────────────── */

const GRADES: { id: Grade; label: string; hint: string; cls: string }[] = [
  { id: 'again', label: 'Di nuovo', hint: 'torna in questa sessione', cls: '' },
  { id: 'good', label: 'Bene', hint: 'intervallo normale', cls: 'primary' },
  { id: 'easy', label: 'Facile', hint: 'intervallo più lungo', cls: '' },
];

function ReviewView({ level, onExit }: { level: Level; onExit: () => void }) {
  const { progress, gradeCard } = useProgress();
  const speech = useItalianSpeech([], LEVEL_RATE[level]);
  const canSpeak = speech.supported && speech.hasItalianVoice;

  // The queue is captured once: regrading from the live store mid-session would
  // reshuffle the deck under the learner's feet after every answer.
  const [queue, setQueue] = useState<string[]>(() => dueCards(Object.values(progress.srs)).map((c) => c.id));
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(0);

  const currentId = queue[0];
  const entry = currentId ? lexById.get(currentId) : undefined;

  if (!currentId || !entry) {
    return (
      <section className="card">
        <h1>{done > 0 ? 'Ripasso finito' : 'Niente da ripassare'}</h1>
        <p className="muted" style={{ marginTop: 8 }}>
          {done > 0
            ? `${done} ${done === 1 ? 'parola rivista' : 'parole riviste'}. Le prossime torneranno quando è il momento.`
            : 'Nessuna parola è in scadenza. Completa una scena per aggiungerne.'}
        </p>
        <div className="actions">
          <button className="btn primary" onClick={onExit}>
            Torna al lessico
          </button>
        </div>
      </section>
    );
  }

  const card = progress.srs[currentId];

  const grade = (g: Grade) => {
    gradeCard(currentId, g);
    setDone((n) => n + 1);
    setRevealed(false);
    // "Again" sends the card to the back of this session rather than out of it.
    setQueue((q) => (g === 'again' ? [...q.slice(1), q[0]] : q.slice(1)));
  };

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Ripasso · {queue.length} in coda</span>
          <span className="pill">{entry.cluster}</span>
        </div>

        {/* Prompted from the English so the learner has to *produce* the Italian.
            Blanking the word out of its own chunk looked neater but broke on
            elision — «anch'io» for `anche` — and then leaked the answer. */}
        <div className="recall">
          <div className="recall-prompt">{entry.chunk.en}</div>
          <div className="muted small">
            parola chiave: {entry.gloss} · {entry.pos}
          </div>
        </div>

        {!revealed ? (
          <div className="actions">
            <button className="btn primary" onClick={() => setRevealed(true)}>
              Mostra la risposta
            </button>
            <span className="muted small">Dilla in italiano ad alta voce, poi scopri.</span>
          </div>
        ) : (
          <>
            <div className="recall-answer">
              <span className="lex-lemma">{withArticle(entry)}</span>
              <span className="muted small"> — {entry.gloss}</span>
              <div className="example-it" style={{ marginTop: 8 }}>
                {entry.chunk.it}
                {canSpeak && (
                  <button className="btn ghost tiny" onClick={() => speech.speakText(entry.chunk.it, LEVEL_RATE[level])}>
                    ▸
                  </button>
                )}
              </div>
            </div>

            <div className="grades">
              {GRADES.map((g) => (
                <button key={g.id} className={`btn ${g.cls}`} onClick={() => grade(g.id)}>
                  <span>{g.label}</span>
                  <small className="muted"> · {g.hint}</small>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="actions">
          <span className="muted small">
            {card ? `visto ${card.reps} volte · intervallo ${card.interval} g` : 'nuova'}
          </span>
          <div className="spacer" />
          <button className="btn ghost" onClick={onExit}>
            Esci dal ripasso
          </button>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────── one scene ────────────────────────────── */

type Stage = 'dialogo' | 'parole' | 'pratica' | 'uso';

const STAGES: { id: Stage; label: string }[] = [
  { id: 'dialogo', label: '1 · Dialogo' },
  { id: 'parole', label: '2 · Parole' },
  { id: 'pratica', label: '3 · Pratica' },
  { id: 'uso', label: '4 · Come si dice' },
];

/**
 * A scene runs in a fixed order for a reason: meaning is inferred from the
 * exchange before the word list is shown. Presenting the glossary first would
 * turn it back into a deck with a dialogue attached.
 */
function SceneView({ scene, onExit }: { scene: Scene; onExit: () => void }) {
  const { progress, completeScene, addWords, removeWord, recordDrill } = useProgress();
  const speech = useItalianSpeech(
    scene.lines.map((l) => l.it),
    LEVEL_RATE[scene.level],
  );
  const canSpeak = speech.supported && speech.hasItalianVoice;

  const [stage, setStage] = useState<Stage>('dialogo');
  const [showEnglish, setShowEnglish] = useState(false);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [picked, setPicked] = useState<Record<string, number>>({});

  useEffect(() => {
    setStage('dialogo');
    setShowEnglish(false);
    setInputs({});
    setResults({});
    setPicked({});
  }, [scene.id]);

  const words = useMemo(
    () => scene.teaches.map((id) => lexById.get(id)).filter((e): e is NonNullable<typeof e> => Boolean(e)),
    [scene.teaches],
  );

  const finished =
    scene.practice.every((p) => p.id in results) && scene.choices.every((c) => c.id in picked);

  useEffect(() => {
    if (!finished) return;
    // Only now do the words enter the schedule: a scene half-read teaches nothing.
    completeScene(scene.id, words.map((w) => w.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const check = (id: string, answer: string, accepted: string[]) => {
    if (id in results) return;
    const given = normalizeAnswer(inputs[id] ?? '');
    if (!given) return;
    const ok = [answer, ...accepted].some((a) => normalizeAnswer(a) === given);
    recordDrill(ok);
    setResults((prev) => ({ ...prev, [id]: ok }));
  };

  // Captured at mount: by the time the scene is finished these words are in the
  // schedule, so recomputing would always report zero.
  const [newWords] = useState(() => scene.teaches.filter((id) => !progress.srs[id]).length);

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Scena · {scene.level}</span>
          <button className="btn ghost tiny" onClick={onExit}>
            ← tutte le scene
          </button>
        </div>
        <h1>{scene.title}</h1>
        <p className="muted small" style={{ marginTop: 4 }}>
          {scene.situation}
        </p>
        <p className="muted small" style={{ marginTop: 6 }}>
          {words.length} parole, di cui {newWords} nuove per te.
        </p>

        <div className="stages">
          {STAGES.map((s) => (
            <button
              key={s.id}
              className={`stage${stage === s.id ? ' current' : ''}`}
              aria-current={stage === s.id}
              onClick={() => setStage(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </section>

      {stage === 'dialogo' && (
        <section className="card">
          <div className="actions" style={{ marginTop: 0, marginBottom: 6 }}>
            {canSpeak && (
              <button className="btn" onClick={() => (speech.state === 'playing' ? speech.stop() : speech.play())}>
                {speech.state === 'playing' ? '■ Ferma' : '▸ Ascolta la scena'}
              </button>
            )}
            <button className="btn ghost" onClick={() => setShowEnglish((v) => !v)}>
              {showEnglish ? 'Nascondi traduzione' : 'Mostra traduzione'}
            </button>
          </div>
          <p className="muted small">
            Leggi prima senza traduzione: quasi tutte le parole nuove si capiscono dalla situazione.
          </p>

          <div className="dialogue">
            {scene.lines.map((line, i) => (
              <div className={`turn${speech.current === i ? ' active' : ''}`} key={i}>
                <span className="speaker">{line.speaker}</span>
                <div>
                  <div className="turn-it">
                    {line.it}
                    {canSpeak && (
                      <button className="btn ghost tiny" onClick={() => speech.speakLine(i)}>
                        ▸
                      </button>
                    )}
                  </div>
                  {showEnglish && <div className="turn-en">{line.en}</div>}
                </div>
              </div>
            ))}
          </div>

          <div className="actions">
            <div className="spacer" />
            <button className="btn primary" onClick={() => setStage('parole')}>
              Le parole di questa scena →
            </button>
          </div>
        </section>
      )}

      {stage === 'parole' && (
        <>
          <section className="card">
            <span className="eyebrow">Le parole, come sono arrivate</span>
            <p className="muted small" style={{ marginTop: 2 }}>
              Ogni parola è mostrata nel pezzo di frase in cui si usa davvero, non come voce di dizionario.
            </p>
            <ul className="examples">
              {words.map((w) => {
                const card = progress.srs[w.id];
                return (
                  <li key={w.id}>
                    <div className="card-head" style={{ marginBottom: 2 }}>
                      {/* Nouns carry their article: at A1 the article is part of
                          the word, and guessing it wrong is the commonest error. */}
                      <span className="lex-lemma">{withArticle(w)}</span>
                      <span className="row-actions">
                        <span className="pill">
                          {card ? (isLearned(card) ? 'consolidata' : `ripasso fra ${card.interval} g`) : 'nuova'}
                        </span>
                        {/* Addable here and now: finishing the exercises is no
                            longer the price of keeping a word. */}
                        <button
                          className={`btn tiny${card ? '' : ' primary'}`}
                          onClick={() => (card ? removeWord(w.id) : addWords([w.id]))}
                        >
                          {card ? '✓ nel ripasso' : '+ aggiungi'}
                        </button>
                      </span>
                    </div>
                    <div className="muted small">{w.gloss}</div>
                    <div className="example-it" style={{ marginTop: 6 }}>
                      {w.chunk.it}
                      {canSpeak && (
                        <button className="btn ghost tiny" onClick={() => speech.speakText(w.chunk.it, LEVEL_RATE[w.level])}>
                          ▸
                        </button>
                      )}
                    </div>
                    <div className="example-en">{w.chunk.en}</div>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="card">
            <span className="eyebrow">Come lo usano gli italiani</span>
            {scene.notes.map((n, i) => (
              <div className="note" key={i} style={{ marginTop: i === 0 ? 12 : 10 }}>
                <b>{n.point}</b>
                {n.detail}
              </div>
            ))}
            <div className="actions">
              <button className="btn" onClick={() => addWords(words.map((w) => w.id))}>
                + Aggiungi tutte al ripasso
              </button>
              <div className="spacer" />
              <button className="btn primary" onClick={() => setStage('pratica')}>
                Pratica →
              </button>
            </div>
          </section>
        </>
      )}

      {stage === 'pratica' && (
        <section className="card">
          <span className="eyebrow">Completa, dal dialogo</span>
          <p className="muted small" style={{ marginTop: 2 }}>
            Le frasi vengono dalla scena che hai appena letto.
          </p>

          {scene.practice.map((item) => {
            const [before, after = ''] = item.sentence.split('___');
            const answered = item.id in results;
            const ok = results[item.id];
            return (
              <div className="q" key={item.id}>
                <div className="cloze-sentence">
                  {before}
                  <input
                    className={`cloze-input${answered ? (ok ? ' ok' : ' no') : ''}`}
                    style={{ minWidth: 130 }}
                    value={answered ? item.answer : (inputs[item.id] ?? '')}
                    disabled={answered}
                    placeholder="…"
                    aria-label="Completa la frase"
                    onChange={(e) => setInputs((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') check(item.id, item.answer, item.accepted);
                    }}
                  />
                  {after}
                </div>
                {!answered ? (
                  <div className="actions">
                    <button
                      className="btn primary"
                      disabled={!(inputs[item.id] ?? '').trim()}
                      onClick={() => check(item.id, item.answer, item.accepted)}
                    >
                      Verifica
                    </button>
                  </div>
                ) : (
                  <div className={`feedback ${ok ? 'ok' : 'no'}`}>
                    <b>{ok ? 'Corretto' : `La risposta è «${item.answer}»`}</b>
                    {item.why}
                  </div>
                )}
              </div>
            );
          })}

          {scene.practice.every((p) => p.id in results) && (
            <div className="actions">
              <div className="spacer" />
              <button className="btn primary" onClick={() => setStage('uso')}>
                Come si dice davvero →
              </button>
            </div>
          )}
        </section>
      )}

      {stage === 'uso' && (
        <section className="card">
          <span className="eyebrow">Quale direbbe un italiano?</span>
          <p className="muted small" style={{ marginTop: 2 }}>
            Tutte le opzioni sono comprensibili. Una sola è quella che si dice.
          </p>

          {scene.choices.map((c) => {
            const chosen = picked[c.id];
            const answered = chosen !== undefined;
            return (
              <div className="q" key={c.id}>
                <div className="q-prompt">{c.prompt}</div>
                <div className="options">
                  {c.options.map((opt, i) => {
                    const cls = !answered ? '' : i === c.answer ? ' correct' : i === chosen ? ' wrong' : '';
                    return (
                      <button
                        key={i}
                        className={`option${cls}`}
                        disabled={answered}
                        onClick={() => {
                          recordDrill(i === c.answer);
                          setPicked((prev) => ({ ...prev, [c.id]: i }));
                        }}
                      >
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <div className={`feedback ${chosen === c.answer ? 'ok' : 'no'}`}>
                    <b>{chosen === c.answer ? 'Esatto' : `Si dice «${c.options[c.answer]}»`}</b>
                    {c.why}
                  </div>
                )}
              </div>
            );
          })}

          {finished && (
            <div className="actions">
              <span className="pill accent">
                {newWords > 0 ? `${newWords} parole aggiunte al ripasso` : 'Parole già nel ripasso'}
              </span>
              <div className="spacer" />
              <button className="btn primary" onClick={onExit}>
                Torna alle scene
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
}

/* ────────────────────────────── word bank ────────────────────────────── */

/**
 * The whole lexicon, browsable and addable a word or a cluster at a time.
 *
 * This exists because the scenes were a gate: a dozen of them cannot introduce a
 * thousand words, so anything not in a scene was unreachable no matter how
 * common it was. Scenes are now one way in rather than the only one.
 */
function WordBank({ level, onExit }: { level: Level; onExit: () => void }) {
  const { progress, addWords, removeWord } = useProgress();
  const speech = useItalianSpeech([], LEVEL_RATE[level]);
  const canSpeak = speech.supported && speech.hasItalianVoice;

  // Scenes are browsable across levels, so the bank has to be too: otherwise a
  // word met in an A1 scene would be invisible here while studying at A2.
  const [scope, setScope] = useState<Level | 'tutti'>(level);
  const groups = useMemo(() => clustersFor(scope), [scope]);
  const [open, setOpen] = useState<string | null>(groups[0]?.cluster ?? null);
  const [query, setQuery] = useState('');

  const matches = (e: LexEntry) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return e.lemma.toLowerCase().includes(q) || e.gloss.toLowerCase().includes(q);
  };

  const inDeck = (id: string) => Boolean(progress.srs[id]);

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Tutte le parole · {scope === 'tutti' ? 'A1 + A2' : scope}</span>
          <button className="btn ghost tiny" onClick={onExit}>
            ← indietro
          </button>
        </div>
        <h1>Il nucleo fondamentale</h1>
        <p className="muted small" style={{ marginTop: 6 }}>
          Aggiungi quello che vuoi studiare: una parola, o un'area intera. Entra subito nel ripasso e torna secondo la
          sua scadenza.
        </p>
        <div className="chips" style={{ marginTop: 14 }}>
          {(['A1', 'A2', 'tutti'] as const).map((s) => (
            <button
              key={s}
              type="button"
              className={`chip chip-btn${scope === s ? ' on' : ''}`}
              aria-pressed={scope === s}
              onClick={() => {
                setScope(s);
                setOpen(null);
              }}
            >
              {s === 'tutti' ? `tutti (${LEXICON.length})` : `${s} (${lexiconByLevel(s).length})`}
            </button>
          ))}
        </div>
        <label className="field">
          <span className="eyebrow">Cerca</span>
          <input
            className="cloze-input"
            style={{ width: '100%' }}
            value={query}
            placeholder="parola o significato…"
            aria-label="Cerca una parola"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </section>

      {groups.map(({ cluster, entries }) => {
        const shown = entries.filter(matches);
        if (shown.length === 0) return null;
        const added = shown.filter((e) => inDeck(e.id)).length;
        const expanded = open === cluster || query.trim().length > 0;

        return (
          <section className="card" key={cluster}>
            <div className="card-head">
              <button
                className="btn ghost"
                style={{ paddingLeft: 0 }}
                aria-expanded={expanded}
                onClick={() => setOpen(expanded && !query ? null : cluster)}
              >
                {expanded ? '▾' : '▸'} {cluster}
              </button>
              <span className="pill">
                {added} / {shown.length}
              </span>
            </div>

            {expanded && (
              <>
                <div className="actions" style={{ marginTop: 4 }}>
                  <button
                    className="btn"
                    disabled={added === shown.length}
                    onClick={() => addWords(shown.map((e) => e.id))}
                  >
                    + Aggiungi tutta l'area ({shown.length - added})
                  </button>
                </div>
                <ul className="examples">
                  {shown.map((e) => (
                    <li key={e.id}>
                      <div className="card-head" style={{ marginBottom: 2 }}>
                        <span className="lex-lemma">{withArticle(e)}</span>
                        <button
                          className={`btn tiny${inDeck(e.id) ? '' : ' primary'}`}
                          onClick={() => (inDeck(e.id) ? removeWord(e.id) : addWords([e.id]))}
                          aria-label={inDeck(e.id) ? `Togli ${e.lemma}` : `Aggiungi ${e.lemma}`}
                        >
                          {inDeck(e.id) ? '✓ nel ripasso' : '+ aggiungi'}
                        </button>
                      </div>
                      <div className="muted small">
                        #{e.rank} · {e.pos} · {e.gloss}
                      </div>
                      <div className="example-it" style={{ marginTop: 4 }}>
                        {e.chunk.it}
                        {canSpeak && (
                          <button className="btn ghost tiny" onClick={() => speech.speakText(e.chunk.it, LEVEL_RATE[e.level])}>
                            ▸
                          </button>
                        )}
                      </div>
                      <div className="example-en">{e.chunk.en}</div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        );
      })}
    </>
  );
}
