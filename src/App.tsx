import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { LEVELS, type Level } from './data/types';
import { buildDailyLesson, dayKey } from './lib/daily';
import { activeTasks, useProgress, type TaskId } from './lib/progress';
import { Dashboard } from './components/Dashboard';
import { WordCard } from './components/WordCard';
import { ArticleReader } from './components/ArticleReader';
import { ListeningPlayer } from './components/ListeningPlayer';
import { Drills } from './components/Drills';
import { Quiz } from './components/Quiz';
import { Conversation } from './components/Conversation';
import { Phonics } from './components/Phonics';
import { Grammar } from './components/Grammar';
import { SCENE_LEVELS } from './data/sceneLevels';
import { Review } from './components/Review';
import { SignIn } from './components/SignIn';
import { initSession, signOut, useSession } from './lib/auth';

// The vocabulary section carries the scene bank and the thousand-word lexicon —
// together the largest part of the app, and needed only once the learner opens
// that tab. Splitting it keeps the daily lesson's first paint small; the
// service worker precaches the chunk, so it is there offline all the same.
const Lessico = lazy(() => import('./components/Lessico').then((m) => ({ default: m.Lessico })));

// Restore any previous session before React first renders, so a signed-in
// visitor never sees the gate flash on the way to their dashboard.
initSession();

type Tab = 'oggi' | TaskId | 'lessico' | 'ripasso';

const TABS: { id: Tab; label: string }[] = [
  { id: 'oggi', label: 'Oggi' },
  { id: 'phonics', label: 'Pronuncia' },
  { id: 'grammar', label: 'Grammatica' },
  { id: 'lessico', label: 'Lessico' },
  { id: 'word', label: 'Parola' },
  { id: 'article', label: 'Lettura' },
  { id: 'listening', label: 'Ascolto' },
  { id: 'vocab', label: 'Quiz' },
  { id: 'drills', label: 'Coniugazioni' },
  { id: 'conversation', label: 'Conversazione' },
  { id: 'ripasso', label: 'Ripasso' },
];

export default function App() {
  const session = useSession();
  const { progress, setLevel, isDone, completeTask, recordQuiz } = useProgress();
  const [tab, setTab] = useState<Tab>('oggi');
  const [day, setDay] = useState(dayKey());

  // A session left open past midnight should roll over to the new day's lesson.
  useEffect(() => {
    const id = setInterval(() => setDay(dayKey()), 60_000);
    return () => clearInterval(id);
  }, []);

  const lesson = useMemo(() => buildDailyLesson(progress.level, day), [progress.level, day]);

  if (!session) return <SignIn />;

  // Pronunciation and grammar only exist at levels that have lessons written,
  // so their tabs appear and disappear with the level.
  const available = activeTasks(lesson);
  // Lessico is self-paced, so it is not a daily task; it appears wherever the
  // level has scenes to work through.
  const hasScenes = SCENE_LEVELS.includes(progress.level);
  const visibleTabs = TABS.filter((t) => {
    if (t.id === 'oggi' || t.id === 'ripasso') return true;
    if (t.id === 'lessico') return hasScenes;
    return available.includes(t.id as TaskId);
  });

  const changeLevel = (level: Level) => {
    setLevel(level);
    if (tab !== 'oggi' && tab !== 'ripasso') setTab('oggi');
  };

  // Guard against a tab that exists in state but not at this level, which
  // would otherwise render nothing at all.
  const activeTab: Tab = visibleTabs.some((t) => t.id === tab) ? tab : 'oggi';

  return (
    <div className="app">
      <header className="masthead">
        <div className="wordmark">
          Italiano Quotidiano <span>A1 → C2</span>
        </div>
        <div className="stats">
          <div className="whoami">
            <span className="name">{session.displayName}</span>
            <button className="btn ghost tiny" onClick={signOut}>
              esci
            </button>
          </div>
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
        {visibleTabs.map((t) => {
          const done =
            t.id !== 'oggi' && t.id !== 'ripasso' && t.id !== 'lessico' && isDone(t.id as TaskId, day);
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              onClick={() => setTab(t.id)}
            >
              {t.label}
              {done && <span className="tick">✓</span>}
            </button>
          );
        })}
      </nav>

      <main>
        {activeTab === 'oggi' && <Dashboard lesson={lesson} onOpen={(t) => setTab(t)} />}

        {activeTab === 'word' && <WordCard word={lesson.word} />}

        {activeTab === 'article' && <ArticleReader article={lesson.article} day={day} />}

        {activeTab === 'listening' && <ListeningPlayer clip={lesson.clip} day={day} />}

        {activeTab === 'vocab' && (
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

        {activeTab === 'drills' && <Drills exercises={lesson.cloze} day={day} />}

        {activeTab === 'conversation' && (
          <Conversation cards={lesson.convCards} drills={lesson.convCloze} day={day} />
        )}

        {activeTab === 'phonics' && lesson.phonics && <Phonics lesson={lesson.phonics} day={day} />}

        {activeTab === 'grammar' && lesson.grammar && <Grammar lesson={lesson.grammar} day={day} />}

        {activeTab === 'lessico' && (
          <Suspense fallback={<section className="card"><p className="muted">Carico il lessico…</p></section>}>
            <Lessico level={progress.level} />
          </Suspense>
        )}

        {activeTab === 'ripasso' && <Review />}
      </main>

      <footer className="footer">
        Italiano Quotidiano — pratica quotidiana dall'A1 al C2. Contenuti originali; l'audio è sintetizzato dal
        dispositivo.
      </footer>
    </div>
  );
}
