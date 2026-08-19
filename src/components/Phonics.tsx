import type { PhonicsLesson } from '../data/types';
import { LEVEL_RATE } from '../data/types';
import { useItalianSpeech } from '../lib/speech';
import { useProgress } from '../lib/progress';
import { Quiz } from './Quiz';

/**
 * Pronunciation is the one section where hearing the example matters more than
 * reading it, so every example word is individually playable and deliberately
 * slow — slower even than this level's normal rate.
 */
export function Phonics({ lesson, day }: { lesson: PhonicsLesson; day: string }) {
  const { completeTask, isDone, recordQuiz } = useProgress();
  const speech = useItalianSpeech([], LEVEL_RATE[lesson.level]);
  const canSpeak = speech.supported && speech.hasItalianVoice;

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Pronuncia · {lesson.level}</span>
          <span className="pill accent">{lesson.rows.length} suoni</span>
        </div>
        <h1>{lesson.title}</h1>
        <p className="muted small" style={{ marginTop: 4 }}>
          {lesson.focus}
        </p>
        <p style={{ marginTop: 12 }}>{lesson.intro}</p>
      </section>

      {lesson.rows.map((row, i) => (
        <section className="card" key={i}>
          <div className="card-head">
            <span className="grapheme">{row.grapheme}</span>
            <span className="ipa">{row.ipa}</span>
          </div>
          <p className="small" style={{ marginTop: 6 }}>
            {row.note}
          </p>
          <ul className="examples">
            {row.examples.map((ex, j) => (
              <li key={j}>
                <div className="example-it">
                  {ex.it}
                  {canSpeak && (
                    <button
                      className="btn ghost tiny"
                      // Deliberately slower than the level default: at A1 the
                      // point is to hear each sound, not to keep up.
                      onClick={() => speech.speakText(ex.it.replace(/^.*—\s*/, ''), 0.7)}
                      aria-label={`Ascolta ${ex.it}`}
                    >
                      ▸ ascolta
                    </button>
                  )}
                </div>
                <div className="ipa">{ex.ipa}</div>
                <div className="example-en">{ex.en}</div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {lesson.minimalPairs && lesson.minimalPairs.length > 0 && (
        <section className="card">
          <span className="eyebrow">Coppie minime</span>
          <p className="muted small" style={{ marginTop: 2 }}>
            Parole che cambiano significato per un solo suono: qui l'errore si sente davvero.
          </p>
          <div className="pairs">
            {lesson.minimalPairs.map((pair, i) => (
              <div className="pair" key={i}>
                <div className="pair-terms">
                  <span>{pair.a}</span>
                  <span className="muted">vs</span>
                  <span>{pair.b}</span>
                </div>
                <div className="muted small">{pair.note}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="card">
        <div className="note">
          <b>In pratica</b>
          {lesson.tip}
        </div>
      </section>

      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Verifica</span>
        </div>
        <Quiz
          questions={lesson.questions}
          resetKey={`${lesson.id}:${day}`}
          onComplete={(correct, total) => {
            recordQuiz(correct, total);
            completeTask('phonics', day);
          }}
        />
        {isDone('phonics', day) && (
          <p className="muted small" style={{ marginTop: 12 }}>
            ✓ Pronuncia di oggi completata.
          </p>
        )}
      </section>
    </>
  );
}
