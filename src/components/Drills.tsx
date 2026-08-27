import { useEffect, useState } from 'react';
import type { ClozeExercise } from '../data/types';
import { isAnswerCorrect } from '../lib/daily';
import { useProgress } from '../lib/progress';
import { useStep } from '../lib/step';
import { useItalianSpeech } from '../lib/speech';
import { StepFooter } from './StepFooter';

interface Attempt {
  value: string;
  correct: boolean;
  revealed: boolean;
}

export function Drills({
  exercises,
  stepId,
  onNext,
}: {
  exercises: ClozeExercise[];
  stepId: string;
  onNext?: () => void;
}) {
  const { recordDrill } = useProgress();
  const step = useStep(stepId, 'drills');
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [attempts, setAttempts] = useState<Record<string, Attempt>>({});
  const speech = useItalianSpeech([]);

  useEffect(() => {
    setInputs({});
    setAttempts({});
  }, [stepId]);

  const check = (ex: ClozeExercise) => {
    const value = inputs[ex.id] ?? '';
    if (!value.trim() || attempts[ex.id]) return;
    const correct = isAnswerCorrect(value, ex);
    recordDrill(correct);
    setAttempts((prev) => ({ ...prev, [ex.id]: { value, correct, revealed: false } }));
  };

  const reveal = (ex: ClozeExercise) => {
    if (attempts[ex.id]) return;
    recordDrill(false);
    setAttempts((prev) => ({ ...prev, [ex.id]: { value: '', correct: false, revealed: true } }));
  };

  const answeredAll = exercises.every((e) => attempts[e.id]);
  const correctCount = exercises.filter((e) => attempts[e.id]?.correct).length;

  // Revealing an answer counts as a miss, so a set cannot be passed by
  // uncovering everything — the score has to be earned before it is shown.
  useEffect(() => {
    if (answeredAll && exercises.length > 0) step.report(correctCount, exercises.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answeredAll]);

  return (
    <section className="card">
      <div className="card-head">
        <span className="eyebrow">Coniugazioni e strutture</span>
        <span className="pill">{exercises.length} esercizi</span>
      </div>
      <p className="muted small" style={{ marginTop: 2 }}>
        Scrivi la forma corretta. Accenti e maiuscole non contano.
      </p>

      {exercises.map((ex) => {
        const [before, after = ''] = ex.sentence.split('___');
        const attempt = attempts[ex.id];
        const done = Boolean(attempt);
        const filled = ex.sentence.replace('___', ex.answer);

        return (
          <div className="q" key={ex.id}>
            <div className="card-head" style={{ marginBottom: 8 }}>
              <span className="pill accent">{ex.skill}</span>
              <span className="muted small">{ex.hint}</span>
            </div>

            <div className="cloze-sentence">
              {before}
              <input
                className={`cloze-input${done ? (attempt!.correct ? ' ok' : ' no') : ''}`}
                value={done ? (attempt!.revealed ? ex.answer : attempt!.value) : (inputs[ex.id] ?? '')}
                disabled={done}
                placeholder="…"
                aria-label="Completa la frase"
                onChange={(e) => setInputs((prev) => ({ ...prev, [ex.id]: e.target.value }))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') check(ex);
                }}
              />
              {after}
            </div>

            {!done ? (
              <div className="actions">
                <button className="btn primary" onClick={() => check(ex)} disabled={!(inputs[ex.id] ?? '').trim()}>
                  Verifica
                </button>
                <button className="btn ghost" onClick={() => reveal(ex)}>
                  Mostra la risposta
                </button>
              </div>
            ) : (
              <div className={`feedback ${attempt!.correct ? 'ok' : 'no'}`}>
                <b>
                  {attempt!.correct
                    ? 'Corretto'
                    : attempt!.revealed
                      ? `Risposta: ${ex.answer}`
                      : `Non è "${attempt!.value}" — la forma è "${ex.answer}"`}
                </b>
                {ex.explanation}
                <div className="muted small" style={{ marginTop: 8 }}>
                  {filled} — <i>{ex.translation}</i>
                  {speech.supported && speech.hasItalianVoice && (
                    <button className="btn ghost tiny" onClick={() => speech.speakText(filled, 0.95)}>
                      ▸ ascolta
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {answeredAll && (
        <div className="actions">
          <span className="pill accent">
            {correctCount} / {exercises.length} corrette
          </span>
          <button
            className="btn ghost"
            onClick={() => {
              setInputs({});
              setAttempts({});
            }}
          >
            Rifai la serie
          </button>
        </div>
      )}
      {answeredAll && (
        <StepFooter done={step.done} best={step.best} attempts={step.attempts} onNext={onNext} />
      )}
    </section>
  );
}
