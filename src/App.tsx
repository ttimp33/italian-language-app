import { useEffect, useMemo, useState } from 'react';
import { LEVELS, type Level } from './data/types';
import { buildDailyLesson, dayKey } from './lib/daily';
import { useProgress, type TaskId } from './lib/progress';
import { Dashboard } from './components/Dashboard';
import { WordCard } from './components/WordCard';
import { ArticleReader } from './components/ArticleReader';
import { ListeningPlayer } from './components/ListeningPlayer';
import { Drills } from './components/Drills';
import { Quiz } from './components/Quiz';
import { Review } from './components/Review';

type Tab = 'oggi' | TaskId | 'ripasso';

const TABS: { id: Tab; label: string }[] = [
  { id: 'oggi', label: 'Oggi' },
  { id: 'word', label: 'Parola' },
  { id: 'article', label: 'Lettura' },
  { id: 'listening', label: 'Ascolto' },
  { id: 'vocab', label: 'Lessico' },
  { id: 'drills', label: 'Coniugazioni' },
  { id: 'ripasso', label: 'Ripasso' },
];

export default function App() {
  const { progress, setLevel, isDone, completeTask, recordQuiz } = useProgress();
  const [tab, setTab] = useState<Tab>('oggi');
  const [day, setDay] = useState(dayKey());

  // A session left open past midnight should roll over to the new day's lesson.
  useEffect(() => {
    const id = setInterval(() => setDay(dayKey()), 60_000);
    return () => clearInterval(id);
  }, []);

  const lesson = useMemo(() => buildDailyLesson(progress.level, day), [progress.level, day]);

  const changeLevel = (level: Level) => {
    setLevel(level);
    if (tab !== 'oggi' && tab !== 'ripasso') setTab('oggi');
  };

  return (
    <div className="app">
      <header className="masthead">
        <div className="wordmark">
          Italiano Quotidiano <span>A2 → C2</span>
        </div>
        <div className="stats">
          <div className="stat">
            <b>{progress.streak}</b>
            <small>serie</small>
          </div>
          <div className="stat">
            <b>{progress.xp}</b>
            <small>xp</small>
          </div>
        </div>
      </header>

      <div className="levels" role="group" aria-label="Livello di competenza">
        {LEVELS.map((l) => (
          <button key={l} aria-pressed={progress.level === l} onClick={() => changeLevel(l)}>
            {l}
          </button>
        ))}
      </div>

      <nav className="tabs" role="tablist">
        {TABS.map((t) => {
          const done = t.id !== 'oggi' && t.id !== 'ripasso' && isDone(t.id as TaskId, day);
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
            >
              {t.label}
              {done && <span className="tick">✓</span>}
            </button>
          );
        })}
      </nav>

      <main>
        {tab === 'oggi' && <Dashboard lesson={lesson} onOpen={(t) => setTab(t)} />}

        {tab === 'word' && <WordCard word={lesson.word} />}

        {tab === 'article' && <ArticleReader article={lesson.article} day={day} />}

        {tab === 'listening' && <ListeningPlayer clip={lesson.clip} day={day} />}

        {tab === 'vocab' && (
          <section className="card">
            <div className="card-head">
              <span className="eyebrow">Quiz lessico · {lesson.level}</span>
              <span className="pill">{lesson.word.lemma}</span>
            </div>
            <p className="muted small" style={{ marginTop: 2, marginBottom: 6 }}>
              Tre domande sulla parola di oggi: uso in contesto, significato, collocazione.
            </p>
            <Quiz
              questions={lesson.vocabQuiz}
              resetKey={`${lesson.word.id}:${day}`}
              onComplete={(correct, total) => {
                recordQuiz(correct, total);
                completeTask('vocab', day);
              }}
            />
          </section>
        )}

        {tab === 'drills' && <Drills exercises={lesson.cloze} day={day} />}

        {tab === 'ripasso' && <Review />}
      </main>

      <footer className="footer">
        Italiano Quotidiano — pratica quotidiana dall'A2 al C2. Contenuti originali; l'audio è sintetizzato dal
        dispositivo.
      </footer>
    </div>
  );
}
