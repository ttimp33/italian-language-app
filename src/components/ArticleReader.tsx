import { useEffect, useState } from 'react';
import type { Article } from '../data/types';
import { LEVEL_RATE } from '../data/types';
import { useItalianSpeech } from '../lib/speech';
import { useProgress } from '../lib/progress';
import { Quiz } from './Quiz';

export function ArticleReader({ article, day }: { article: Article; day: string }) {
  const { completeTask, isDone, recordQuiz } = useProgress();
  const [showAll, setShowAll] = useState(false);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const speech = useItalianSpeech(
    article.paragraphs.map((p) => p.it),
    LEVEL_RATE[article.level],
  );

  // A new article means a clean reading surface.
  useEffect(() => {
    setRevealed(new Set());
    setShowAll(false);
  }, [article.id]);

  const toggleParagraph = (i: number) =>
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">
            Lettura · {article.level} · {article.category}
          </span>
          <span className="pill">{article.minutes} min</span>
        </div>

        <h1>{article.title}</h1>
        <p className="muted small" style={{ marginTop: 4 }}>
          {article.titleEn}
        </p>

        <div className="actions" style={{ marginTop: 12, marginBottom: 4 }}>
          {speech.supported && speech.hasItalianVoice && (
            <button
              className="btn"
              onClick={() => (speech.state === 'playing' ? speech.stop() : speech.play())}
            >
              {speech.state === 'playing' ? '■ Ferma' : '▸ Ascolta il testo'}
            </button>
          )}
          <button className="btn ghost" onClick={() => setShowAll((s) => !s)}>
            {showAll ? 'Nascondi tutte le traduzioni' : 'Mostra tutte le traduzioni'}
          </button>
        </div>

        <div className="prose">
          {article.paragraphs.map((p, i) => (
            <div className={`para${speech.current === i ? ' active' : ''}`} key={i}>
              <p>{p.it}</p>
              {(showAll || revealed.has(i)) && <div className="translation">{p.en}</div>}
              <div className="para-tools">
                <button className="btn ghost tiny" onClick={() => toggleParagraph(i)}>
                  {revealed.has(i) || showAll ? 'nascondi' : 'traduci'}
                </button>
                {speech.supported && speech.hasItalianVoice && (
                  <button className="btn ghost tiny" onClick={() => speech.speakLine(i)}>
                    ▸ ascolta
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <span className="eyebrow">Glossario</span>
        <div className="glossary">
          {article.glossary.map((g) => (
            <div key={g.term}>
              <b>{g.term}</b> — <span>{g.gloss}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Comprensione</span>
        </div>
        <Quiz
          questions={article.questions}
          resetKey={`${article.id}:${day}`}
          onComplete={(correct, total) => {
            recordQuiz(correct, total);
            completeTask('article', day);
          }}
        />
        {isDone('article') && (
          <p className="muted small" style={{ marginTop: 12 }}>
            ✓ Lettura di oggi completata.
          </p>
        )}
      </section>
    </>
  );
}
