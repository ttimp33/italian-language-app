import { WORDS } from '../data/words';
import { LEVEL_RATE } from '../data/types';
import { useProgress } from '../lib/progress';
import { useItalianSpeech } from '../lib/speech';
import { dayKey } from '../lib/daily';

/** Last 14 days, oldest first, as YYYY-MM-DD. */
function recentDays(n = 14): string[] {
  const out: string[] = [];
  const today = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    out.push(dayKey(d));
  }
  return out;
}

export function Review() {
  const { progress, toggleSaved, reset } = useProgress();
  const speech = useItalianSpeech([]);
  const saved = WORDS.filter((w) => progress.saved.includes(w.id));

  const quizPct = progress.quiz.attempted
    ? Math.round((progress.quiz.correct / progress.quiz.attempted) * 100)
    : null;
  const drillPct = progress.drills.attempted
    ? Math.round((progress.drills.correct / progress.drills.attempted) * 100)
    : null;

  const days = recentDays();
  const today = dayKey();

  return (
    <>
      <section className="card">
        <span className="eyebrow">Statistiche</span>
        <div className="today-grid" style={{ marginTop: 12 }}>
          <div className="saved-card">
            <div className="eyebrow">Quiz a scelta multipla</div>
            <div className="lemma-sm">{quizPct === null ? '—' : `${quizPct}%`}</div>
            <div className="muted small">
              {progress.quiz.correct} corrette su {progress.quiz.attempted}
            </div>
          </div>
          <div className="saved-card">
            <div className="eyebrow">Esercizi di grammatica</div>
            <div className="lemma-sm">{drillPct === null ? '—' : `${drillPct}%`}</div>
            <div className="muted small">
              {progress.drills.correct} corrette su {progress.drills.attempted}
            </div>
          </div>
          <div className="saved-card">
            <div className="eyebrow">Serie di giorni</div>
            <div className="lemma-sm">{progress.streak}</div>
            <div className="muted small">{progress.xp} punti esperienza in totale</div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <span className="eyebrow">Ultime due settimane</span>
          <div style={{ display: 'flex', gap: 5, marginTop: 10, flexWrap: 'wrap' }}>
            {days.map((d) => {
              const count = (progress.completed[d] ?? []).length;
              const intensity = count === 0 ? 0 : Math.min(1, count / 5);
              return (
                <div
                  key={d}
                  title={`${d}: ${count} attività`}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 7,
                    background:
                      intensity === 0 ? 'var(--surface-2)' : `color-mix(in srgb, var(--accent) ${intensity * 100}%, var(--surface-2))`,
                    border: d === today ? '2px solid var(--accent)' : '1px solid var(--border)',
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Parole salvate</span>
          <span className="pill">{saved.length}</span>
        </div>

        {saved.length === 0 ? (
          <div className="empty">
            Nessuna parola salvata. Usa «☆ Salva nel ripasso» sulla parola del giorno per costruire il tuo mazzo.
          </div>
        ) : (
          <div className="saved-grid" style={{ marginTop: 12 }}>
            {saved.map((w) => (
              <div className="saved-card" key={w.id}>
                <div className="card-head">
                  <span className="lemma-sm">{w.lemma}</span>
                  <span className="pill">{w.level}</span>
                </div>
                <div className="muted small">{w.gloss}</div>
                <div className="example-it" style={{ fontSize: 15, marginTop: 8 }}>
                  {w.examples[0].it}
                </div>
                <div className="actions" style={{ marginTop: 10 }}>
                  {speech.supported && speech.hasItalianVoice && (
                    <button
                      className="btn ghost tiny"
                      onClick={() => speech.speakText(w.examples[0].it, LEVEL_RATE[w.level])}
                    >
                      ▸ ascolta
                    </button>
                  )}
                  <div className="spacer" />
                  <button className="btn ghost tiny" onClick={() => toggleSaved(w.id)}>
                    rimuovi
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="card">
        <span className="eyebrow">Dati</span>
        <p className="small" style={{ marginTop: 8 }}>
          Tutti i progressi sono salvati soltanto in questo browser (localStorage). Nessun dato lascia il dispositivo.
        </p>
        <div className="actions">
          <button
            className="btn"
            onClick={() => {
              if (confirm('Azzerare progressi, statistiche e parole salvate? L\'operazione non è reversibile.')) reset();
            }}
          >
            Azzera i progressi
          </button>
        </div>
      </section>
    </>
  );
}
