import type { DailyLesson } from '../lib/daily';
import { LEVEL_BLURB } from '../data/types';
import { activeTasks, TASKS, useProgress, type TaskId } from '../lib/progress';

const DATE_FMT = new Intl.DateTimeFormat('it-IT', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
});

export function Dashboard({
  lesson,
  onOpen,
}: {
  lesson: DailyLesson;
  onOpen: (tab: TaskId) => void;
}) {
  const { isDone } = useProgress();
  const todays = activeTasks(lesson);
  const doneCount = todays.filter((id) => isDone(id, lesson.day)).length;
  const pct = Math.round((doneCount / todays.length) * 100);

  const [y, m, d] = lesson.day.split('-').map(Number);
  const dateLabel = DATE_FMT.format(new Date(y, m - 1, d));

  const subtitles: Record<TaskId, string> = {
    word: `${lesson.word.lemma} — ${lesson.word.gloss}`,
    article: lesson.article.title,
    listening: `${lesson.clip.title} · ${lesson.clip.show}`,
    vocab: `${lesson.vocabQuiz.length} domande sul lessico di oggi`,
    drills: lesson.cloze.map((c) => c.skill).join(' · '),
    conversation: `${lesson.convCards.map((c) => c.term).slice(0, 3).join(', ')}…`,
    phonics: lesson.phonics ? `${lesson.phonics.title} — ${lesson.phonics.focus}` : '',
    grammar: lesson.grammar ? `${lesson.grammar.title} — ${lesson.grammar.focus}` : '',
  };

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Oggi · {dateLabel}</span>
          <span className="pill accent">Livello {lesson.level}</span>
        </div>
        <h1>
          {doneCount === todays.length
            ? 'Giornata completata. Bravo!'
            : doneCount === 0
              ? 'La tua giornata di italiano ti aspetta'
              : `Ancora ${TASKS.length - doneCount} ${TASKS.length - doneCount === 1 ? 'attività' : 'attività'}`}
        </h1>
        <p className="muted small" style={{ marginTop: 6 }}>
          {LEVEL_BLURB[lesson.level]}
        </p>

        <div className="progress-track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="muted small">
          {doneCount} di {todays.length} completate
        </div>

        <div className="today-grid">
          {TASKS.filter((t) => todays.includes(t.id)).map((task) => {
            const done = isDone(task.id, lesson.day);
            return (
              <button
                key={task.id}
                className={`task-card${done ? ' done' : ''}`}
                onClick={() => onOpen(task.id)}
              >
                <span className="task-title">
                  {done ? '✓ ' : ''}
                  {task.label}
                </span>
                <span className="task-sub">{subtitles[task.id]}</span>
                <span className="task-meta">{done ? 'completata' : `+${task.xp} xp`}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="card">
        <span className="eyebrow">Come funziona</span>
        <p className="small" style={{ marginTop: 8 }}>
          Ogni giorno il programma sceglie automaticamente una parola, un articolo, un ascolto e una serie di esercizi
          calibrati sul tuo livello. La selezione è la stessa per tutta la giornata: puoi interrompere e riprendere senza
          perdere il filo. Cambiando livello cambia tutto il materiale, ma i progressi restano.
        </p>
      </section>
    </>
  );
}
