import { useEffect, useMemo, useState } from 'react';
import type { ConvCloze, ConvItem } from '../data/types';
import { CONV_CATEGORY_EN, CONV_CATEGORY_LABEL, LEVEL_RATE } from '../data/types';
import { blankLineIndex, isConvAnswerCorrect } from '../lib/daily';
import { CONV_MASTERY, useProgress } from '../lib/progress';
import { useStep } from '../lib/step';
import { useItalianSpeech } from '../lib/speech';
import { StepFooter } from './StepFooter';

/* ────────────────────────────── flashcards ────────────────────────────── */

/**
 * The deck of discourse markers. A card is passed by recalling it, and a card
 * you could not recall goes to the back of the queue rather than being dropped,
 * so the step ends only once every card has been recalled at least once. The
 * score reported is first-attempt recall, which is what the pass mark measures.
 */
export function ConvCards({
  cards,
  stepId,
  onNext,
}: {
  cards: ConvItem[];
  stepId: string;
  onNext?: () => void;
}) {
  const { progress, gradeConvCard } = useProgress();
  const step = useStep(stepId, 'conversation');
  const speech = useItalianSpeech([]);
  const [firstTry, setFirstTry] = useState<Record<string, boolean>>({});

  // Cards graded "da rivedere" are pushed to the back of the queue rather than
  // dropped, so a session ends only once every card has been recalled at least
  // once — the part that makes this practice rather than browsing.
  const [queue, setQueue] = useState<string[]>(() => cards.map((c) => c.id));
  const [flipped, setFlipped] = useState(false);
  const [graded, setGraded] = useState(0);

  // Keyed on the step alone. `cards` is rebuilt from the step's refs on every
  // render, so depending on the array itself reset the queue after every grade
  // and the deck could never be finished.
  useEffect(() => {
    setQueue(cards.map((c) => c.id));
    setFlipped(false);
    setGraded(0);
    setFirstTry({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepId]);

  const byId = useMemo(() => new Map(cards.map((c) => [c.id, c])), [cards]);
  const current = queue.length > 0 ? byId.get(queue[0]) : undefined;
  const finished = queue.length === 0;

  useEffect(() => {
    if (finished && cards.length > 0) {
      step.report(cards.filter((c) => firstTry[c.id]).length, cards.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const grade = (recalled: boolean) => {
    if (!current) return;
    gradeConvCard(current.id, recalled);
    setFirstTry((prev) => (current.id in prev ? prev : { ...prev, [current.id]: recalled }));
    setGraded((n) => n + 1);
    setFlipped(false);
    setQueue((q) => (recalled ? q.slice(1) : [...q.slice(1), q[0]]));
  };

  if (finished) {
    const learned = cards.filter((c) => (progress.convDeck[c.id] ?? 0) >= CONV_MASTERY).length;
    return (
      <section className="card">
        <h2>Mazzo completato</h2>
        <p className="muted" style={{ marginTop: 6 }}>
          {graded} risposte su {cards.length} carte. {learned} di queste carte hanno raggiunto la soglia di
          padronanza ({CONV_MASTERY} richiami consecutivi).
        </p>
        <div className="actions">
          <button
            className="btn"
            onClick={() => {
              setQueue(cards.map((c) => c.id));
              setGraded(0);
              setFirstTry({});
            }}
          >
            Rifai il mazzo
          </button>
        </div>
        <StepFooter done={step.done} best={step.best} attempts={step.attempts} onNext={onNext} />
      </section>
    );
  }

  if (!current) return null;

  const confidence = progress.convDeck[current.id] ?? 0;

  return (
    <>
    <section className="card">
      <div className="card-head">
        <span className="eyebrow">Conversazione · {current.level}</span>
        <span className="pill">{cards.length} carte</span>
      </div>
      <h1>Le parole che tengono insieme il parlato</h1>
      <p className="muted small" style={{ marginTop: 6 }}>
        Segnali discorsivi, connettivi e aggettivi che i manuali saltano. I dizionari ne danno il significato; qui
        trovi la funzione. Una carta richiamata esce dal mazzo; una mancata torna in fondo.
      </p>
    </section>

    <section className="card">
      <div className="card-head">
        <span className="eyebrow">
          Carta {cards.length - queue.length + 1} di {cards.length}
        </span>
        <span className="pill">{CONV_CATEGORY_LABEL[current.category]}</span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${((cards.length - queue.length) / cards.length) * 100}%` }} />
      </div>

      <button
        className={`flashcard${flipped ? ' flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        aria-expanded={flipped}
      >
        {!flipped ? (
          <>
            <span className="flash-term">{current.term}</span>
            {current.ipa && <span className="ipa">{current.ipa}</span>}
            <span className="muted small">tocca per scoprire · {CONV_CATEGORY_EN[current.category]}</span>
          </>
        ) : (
          <>
            <span className="flash-term-sm">{current.term}</span>
            <span className="flash-gloss">{current.gloss}</span>
            <span className="note" style={{ margin: '12px 0 0', width: '100%' }}>
              <b>Funzione</b>
              {current.role}
            </span>
            <ul className="examples" style={{ width: '100%' }}>
              {current.examples.map((ex, i) => (
                <li key={i}>
                  <div className="example-it">{ex.it}</div>
                  <div className="example-en">{ex.en}</div>
                </li>
              ))}
            </ul>
            {current.pitfall && (
              <span className="note trap" style={{ margin: '12px 0 0', width: '100%' }}>
                <b>Attenzione</b>
                {current.pitfall}
              </span>
            )}
          </>
        )}
      </button>

      <div className="actions">
        <span className="pill">registro: {current.register}</span>
        <span className="pill accent">padronanza {confidence}/{CONV_MASTERY}</span>
        {speech.supported && speech.hasItalianVoice && (
          <button
            className="btn ghost"
            onClick={() => speech.speakText(current.examples[0].it, LEVEL_RATE[current.level])}
          >
            ▸ ascolta
          </button>
        )}
      </div>

      {flipped ? (
        <div className="actions">
          <button className="btn" onClick={() => grade(false)}>
            ↺ Da rivedere
          </button>
          <div className="spacer" />
          <button className="btn primary" onClick={() => grade(true)}>
            ✓ La so
          </button>
        </div>
      ) : (
        <div className="actions">
          <button className="btn primary" onClick={() => setFlipped(true)}>
            Mostra il significato
          </button>
        </div>
      )}
    </section>
    </>
  );
}

/* ────────────────────────────── dialogues ────────────────────────────── */

export function ConvDialogues({
  drills,
  stepId,
  onNext,
}: {
  drills: ConvCloze[];
  stepId: string;
  onNext?: () => void;
}) {
  const { recordDrill } = useProgress();
  const step = useStep(stepId, 'convdrill');
  const speech = useItalianSpeech([]);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, { value: string; correct: boolean; revealed: boolean }>>({});
  const [hinted, setHinted] = useState<Record<string, boolean>>({});

  // Keyed on the step alone, for the same reason as the deck above.
  useEffect(() => {
    setInputs({});
    setResults({});
    setHinted({});
  }, [stepId]);

  const check = (item: ConvCloze) => {
    const value = inputs[item.id] ?? '';
    if (!value.trim() || results[item.id]) return;
    const correct = isConvAnswerCorrect(value, item);
    recordDrill(correct);
    setResults((prev) => ({ ...prev, [item.id]: { value, correct, revealed: false } }));
  };

  const reveal = (item: ConvCloze) => {
    if (results[item.id]) return;
    recordDrill(false);
    setResults((prev) => ({ ...prev, [item.id]: { value: '', correct: false, revealed: true } }));
  };

  const allAnswered = drills.every((d) => results[d.id]);

  useEffect(() => {
    if (allAnswered && drills.length > 0) {
      step.report(drills.filter((d) => results[d.id]?.correct).length, drills.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAnswered]);

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Dialoghi · {drills[0]?.level}</span>
          <span className="pill">{drills.length} dialoghi</span>
        </div>
        <h1>Completa la battuta</h1>
        <p className="muted small" style={{ marginTop: 6 }}>
          Manca una parola in una riga di ogni scambio. Se non ti viene, chiedi i suggerimenti: contano come
          errore, ma il dialogo resta comprensibile.
        </p>
      </section>

      {drills.map((item) => {
        const blankAt = blankLineIndex(item);
        const result = results[item.id];
        const done = Boolean(result);

        return (
          <section className="card" key={item.id}>
            <div className="card-head">
              <span className="eyebrow">{item.context}</span>
              <span className="pill">{item.level}</span>
            </div>

            <div className="dialogue">
              {item.lines.map((line, i) => {
                const isBlank = i === blankAt;
                const [before, after = ''] = isBlank ? line.it.split('___') : [line.it];
                const filled = isBlank ? line.it.replace('___', item.answer) : line.it;
                return (
                  <div className="turn" key={i}>
                    <span className="speaker">{line.speaker}</span>
                    <div>
                      <div className="turn-it">
                        {isBlank ? (
                          <>
                            {before}
                            <input
                              className={`cloze-input${done ? (result!.correct ? ' ok' : ' no') : ''}`}
                              style={{ minWidth: 150 }}
                              value={done ? (result!.revealed ? item.answer : result!.value) : (inputs[item.id] ?? '')}
                              disabled={done}
                              placeholder="…"
                              aria-label="Completa la battuta"
                              onChange={(e) => setInputs((prev) => ({ ...prev, [item.id]: e.target.value }))}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') check(item);
                              }}
                            />
                            {after}
                          </>
                        ) : (
                          line.it
                        )}
                      </div>
                      {/* The translation of the gapped line names the missing word, so it
                          stays hidden until the learner has committed to an answer. */}
                      {isBlank && !done ? (
                        <div className="turn-en muted">traduzione nascosta fino alla risposta</div>
                      ) : (
                        <div className="turn-en">{line.en}</div>
                      )}
                      {done && speech.supported && speech.hasItalianVoice && (
                        <button
                          className="btn ghost tiny"
                          onClick={() => speech.speakText(filled, LEVEL_RATE[item.level])}
                        >
                          ▸
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {!done ? (
              <div className="actions">
                <button className="btn primary" onClick={() => check(item)} disabled={!(inputs[item.id] ?? '').trim()}>
                  Verifica
                </button>
                <button className="btn ghost" onClick={() => setHinted((h) => ({ ...h, [item.id]: true }))}>
                  Suggerimenti
                </button>
                <button className="btn ghost" onClick={() => reveal(item)}>
                  Mostra la risposta
                </button>
              </div>
            ) : (
              <div className={`feedback ${result!.correct ? 'ok' : 'no'}`}>
                <b>
                  {result!.correct
                    ? `Corretto: ${result!.value.trim()}`
                    : result!.revealed
                      ? `Risposta: ${item.answer}`
                      : `Non «${result!.value.trim()}» — qui si dice «${item.answer}»`}
                </b>
                {item.explanation}
                {item.accepted.length > 0 && (
                  <div className="muted small" style={{ marginTop: 6 }}>
                    Accettate anche: {item.accepted.join(' · ')}
                  </div>
                )}
              </div>
            )}

            {!done && hinted[item.id] && (
              <div className="chips" style={{ marginTop: 10 }}>
                {item.hints.map((h) => (
                  <button
                    key={h}
                    className="chip"
                    onClick={() => setInputs((prev) => ({ ...prev, [item.id]: h }))}
                  >
                    {h}
                  </button>
                ))}
              </div>
            )}
          </section>
        );
      })}

      {allAnswered && (
        <section className="card">
          <StepFooter done={step.done} best={step.best} attempts={step.attempts} onNext={onNext} />
        </section>
      )}
    </>
  );
}
