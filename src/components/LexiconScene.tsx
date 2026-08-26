import { useEffect, useMemo, useState } from 'react';
import type { Scene } from '../data/types';
import { LEVEL_RATE } from '../data/types';
import { LEXICON, LEXICON_TARGET, clustersFor, lexById, withArticle } from '../data/lexicon';
import { normalizeAnswer } from '../lib/daily';
import { useProgress } from '../lib/progress';
import { useItalianSpeech } from '../lib/speech';

type Stage = 'dialogo' | 'parole' | 'pratica' | 'uso';

const STAGES: { id: Stage; label: string }[] = [
  { id: 'dialogo', label: '1 · Dialogo' },
  { id: 'parole', label: '2 · Parole' },
  { id: 'pratica', label: '3 · Pratica' },
  { id: 'uso', label: '4 · Come si dice' },
];

/**
 * The scene runs in a fixed order for a reason: meaning is inferred from the
 * exchange before the word list is shown. Presenting the glossary first would
 * turn it back into a deck with a dialogue attached.
 */
export function LexiconScene({ scene, day }: { scene: Scene; day: string }) {
  const { progress, completeTask, isDone, markLexMet, recordDrill } = useProgress();
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
  }, [scene.id, day]);

  const words = useMemo(
    () => scene.teaches.map((id) => lexById.get(id)).filter((e): e is NonNullable<typeof e> => Boolean(e)),
    [scene.teaches],
  );

  const practiceDone = scene.practice.every((p) => p.id in results);
  const choicesDone = scene.choices.every((c) => c.id in picked);
  const finished = practiceDone && choicesDone;

  useEffect(() => {
    if (!finished) return;
    // Words count as met only once the scene has actually been worked through.
    markLexMet(words.map((w) => w.id));
    completeTask('lexicon', day);
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

  const metCount = progress.lexMet.length;
  const pct = Math.min(100, Math.round((metCount / LEXICON_TARGET) * 100));

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Lessico in contesto · {scene.level}</span>
          <span className="pill accent">{words.length} parole</span>
        </div>
        <h1>{scene.title}</h1>
        <p className="muted small" style={{ marginTop: 4 }}>
          {scene.situation}
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
              {words.map((w) => (
                <li key={w.id}>
                  <div className="card-head" style={{ marginBottom: 2 }}>
                    {/* Nouns are shown with their article: at A1 the article is
                        part of the word, and guessing it wrong is the commonest error. */}
                    <span className="lex-lemma">{withArticle(w)}</span>
                    <span className="pill">
                      #{w.rank} · {w.pos}
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
              ))}
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

          {practiceDone && (
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
              <span className="pill accent">Scena completata</span>
              {isDone('lexicon', day) && <span className="muted small">✓ Lessico di oggi completato.</span>}
            </div>
          )}
        </section>
      )}

      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Il tuo lessico di base</span>
          <span className="pill">
            {metCount} / {LEXICON_TARGET}
          </span>
        </div>
        <div className="progress-track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <p className="muted small">
          Parole del nucleo fondamentale incontrate in una scena completata. Il traguardo è il migliaio di parole che
          copre la maggior parte dell'italiano di tutti i giorni; in banca ce ne sono {LEXICON.length}.
        </p>

        <div style={{ marginTop: 14 }}>
          <span className="eyebrow">Aree già toccate</span>
          <div className="chips">
            {clustersFor(scene.level).map(({ cluster, entries }) => {
              const met = entries.filter((e) => progress.lexMet.includes(e.id)).length;
              return (
                <span className="chip" key={cluster}>
                  {cluster} {met}/{entries.length}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
