import type { GrammarLesson } from '../data/types';
import { LEVEL_RATE } from '../data/types';
import { useItalianSpeech } from '../lib/speech';
import { useStep } from '../lib/step';
import { Quiz } from './Quiz';
import { StepFooter } from './StepFooter';

export function Grammar({ lesson, stepId, onNext }: { lesson: GrammarLesson; stepId: string; onNext?: () => void }) {
  const step = useStep(stepId, 'grammar');
  const speech = useItalianSpeech([], LEVEL_RATE[lesson.level]);
  const canSpeak = speech.supported && speech.hasItalianVoice;

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Grammatica · {lesson.level}</span>
        </div>
        <h1>{lesson.title}</h1>
        <p className="muted small" style={{ marginTop: 4 }}>
          {lesson.focus}
        </p>
        <p style={{ marginTop: 12 }}>{lesson.explanation}</p>
      </section>

      {lesson.tables.map((table, i) => (
        <section className="card" key={i}>
          <span className="eyebrow">{table.caption}</span>
          {/* Paradigm tables are wide by nature; scroll the table, never the page. */}
          <div className="table-scroll">
            <table className="paradigm">
              <thead>
                <tr>
                  {table.headers.map((h, j) => (
                    <th key={j}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => (
                      <td key={k} className={k === 0 ? 'row-head' : ''}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="card">
        <span className="eyebrow">Esempi</span>
        <ul className="examples">
          {lesson.examples.map((ex, i) => (
            <li key={i}>
              <div className="example-it">
                {ex.it}
                {canSpeak && (
                  <button className="btn ghost tiny" onClick={() => speech.speakText(ex.it, LEVEL_RATE[lesson.level])}>
                    ▸
                  </button>
                )}
              </div>
              <div className="example-en">{ex.en}</div>
            </li>
          ))}
        </ul>

        {lesson.pitfall && (
          <div className="note trap" style={{ marginTop: 16 }}>
            <b>Errore comune</b>
            {lesson.pitfall}
          </div>
        )}
      </section>

      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Verifica</span>
        </div>
        <Quiz questions={lesson.questions} resetKey={stepId} onComplete={step.report} />
        <StepFooter done={step.done} best={step.best} attempts={step.attempts} onNext={onNext} />
      </section>
    </>
  );
}
