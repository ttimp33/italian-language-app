import { Suspense, lazy, useMemo, useState } from 'react';
import { useProgress } from './lib/progress';
import { currentLevel } from './lib/course';
import { SCENE_LEVELS } from './data/sceneLevels';
import { Percorso } from './components/Percorso';
import { Review } from './components/Review';
import { SignIn } from './components/SignIn';
import { initSession, signOut, useSession } from './lib/auth';

// Restore any previous session before React first renders, so a signed-in
// visitor never sees the gate flash on the way to their course.
initSession();

// The vocabulary section carries the scene bank and the thousand-word lexicon —
// together the largest part of the app, and needed only once the learner opens
// that tab. Splitting it keeps the first paint small; the service worker
// precaches the chunk, so it is there offline all the same.
const Lessico = lazy(() => import('./components/Lessico').then((m) => ({ default: m.Lessico })));

type Tab = 'percorso' | 'lessico' | 'ripasso';

const TABS: { id: Tab; label: string }[] = [
  { id: 'percorso', label: 'Percorso' },
  { id: 'lessico', label: 'Lessico' },
  { id: 'ripasso', label: 'Ripasso' },
];

export default function App() {
  const session = useSession();
  const { progress } = useProgress();
  const [tab, setTab] = useState<Tab>('percorso');

  const level = useMemo(() => currentLevel(progress), [progress]);

  if (!session) return <SignIn />;

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
            <b>{level}</b>
            <small>livello</small>
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

      <nav className="tabs" role="tablist">
        {TABS.map((t) => (
          <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </nav>

      <main>
        {tab === 'percorso' && <Percorso />}

        {tab === 'lessico' && (
          <Suspense
            fallback={
              <section className="card">
                <p className="muted">Carico il lessico…</p>
              </section>
            }
          >
            {/* The vocabulary bank is self-paced and independent of the path, so
                it opens at the level being studied — or across both levels that
                have scenes, when the course has moved past them. */}
            <Lessico level={SCENE_LEVELS.includes(level) ? level : SCENE_LEVELS[SCENE_LEVELS.length - 1]} />
          </Suspense>
        )}

        {tab === 'ripasso' && <Review />}
      </main>

      <footer className="footer">
        Italiano Quotidiano — un percorso ordinato dall'A1 al C2. Contenuti originali; l'audio è sintetizzato dal
        dispositivo.
      </footer>
    </div>
  );
}
