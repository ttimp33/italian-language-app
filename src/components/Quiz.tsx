import { useEffect, useMemo, useState } from 'react';
import type { Question } from '../data/types';

interface Props {
  questions: Question[];
  /** Fires once, when every question has been answered. */
  onComplete?: (correct: number, total: number) => void;
  /** Reset answers when this changes (e.g. a new day or level). */
  resetKey?: string;
}

const KEYS = ['A', 'B', 'C', 'D', 'E'];

export function Quiz({ questions, onComplete, resetKey = '' }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  useEffect(() => {
    setAnswers({});
  }, [resetKey]);

  const answeredCount = Object.keys(answers).length;
  const correctCount = useMemo(
    () => questions.filter((q) => answers[q.id] === q.answer).length,
    [questions, answers],
  );
  const finished = answeredCount === questions.length && questions.length > 0;

  useEffect(() => {
    if (finished) onComplete?.(correctCount, questions.length);
    // Deliberately keyed on completion only: re-firing on every render would
    // double-count the attempt in the learner's statistics.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished, resetKey]);

  return (
    <div>
      {questions.map((q) => {
        const given = answers[q.id];
        const answered = given !== undefined;
        return (
          <div className="q" key={q.id}>
            <div className="q-prompt">{q.prompt}</div>
            <div className="options">
              {q.options.map((opt, i) => {
                const isChosen = given === i;
                const isRight = q.answer === i;
                const cls = !answered ? '' : isRight ? ' correct' : isChosen ? ' wrong' : '';
                return (
                  <button
                    key={i}
                    className={`option${cls}`}
                    disabled={answered}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: i }))}
                  >
                    <span className="key">{KEYS[i]}</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
            {answered && (
              <div className={`feedback ${given === q.answer ? 'ok' : 'no'}`}>
                <b>{given === q.answer ? 'Esatto' : 'Non proprio'}</b>
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      {finished && (
        <div className="actions">
          <span className="pill accent">
            {correctCount} / {questions.length} corrette
          </span>
          <button className="btn ghost" onClick={() => setAnswers({})}>
            Riprova
          </button>
        </div>
      )}
    </div>
  );
}
