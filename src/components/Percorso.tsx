import { useEffect, useMemo, useState } from 'react';
import type { Level, Step, Unit } from '../data/types';
import { LEVELS, LEVEL_BLURB } from '../data/types';
import { unitsFor } from '../data/curriculum';
import { BANKS, stepTitle } from '../data/banks';
import {
  courseSummary,
  currentLevel,
  isStepUnlocked,
  isUnitUnlocked,
  nextStep,
  unitStatus,
} from '../lib/course';
import { STEP_META, useProgress } from '../lib/progress';
import { ArticleReader } from './ArticleReader';
import { ConvCards, ConvDialogues } from './Conversation';
import { Drills } from './Drills';
import { Grammar } from './Grammar';
import { ListeningPlayer } from './ListeningPlayer';
import { Phonics } from './Phonics';
import { WordCard } from './WordCard';

/**
 * The course.
 *
 * One ordered path from A1 to C2. A level opens when the level before it is
 * finished, a unit opens when the unit before it is, and the learner is never
 * asked to choose what today's material should be — that was the old model, and
 * it made every level equally reachable whether or not it had been earned.
 */
export function Percorso() {
  const { progress } = useProgress();
  const [openStep, setOpenStep] = useState<string | null>(null);
  const [openLevel, setOpenLevel] = useState<Level>(() => currentLevel(progress));

  const summary = useMemo(() => courseSummary(progress), [progress]);

  // Finishing a level should carry the learner into the next one rather than
  // leaving them looking at a completed list.
  useEffect(() => {
    setOpenLevel(currentLevel(progress));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summary.current]);

  if (openStep) {
    return <StepView stepId={openStep} onExit={() => setOpenStep(null)} onOpen={setOpenStep} />;
  }

  const next = nextStep(progress);

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Il tuo percorso</span>
          <span className="pill accent">
            {summary.done} / {summary.total}
          </span>
        </div>
        <h1>Livello {summary.current}</h1>
        <p className="muted small" style={{ marginTop: 6 }}>
          {LEVEL_BLURB[summary.current]}
        </p>

        {next ? (
          <div className="due-banner" style={{ marginTop: 16 }}>
            <div>
              <div className="muted small">Riprendi da</div>
              <div className="next-step">{next.unit.title}</div>
              <div className="muted small">
                {STEP_META[next.step.kind].label} · {stepTitle(next.step.kind, next.step.refs)}
              </div>
            </div>
            <button className="btn primary" onClick={() => setOpenStep(next.step.id)}>
              Continua
            </button>
          </div>
        ) : (
          <p className="muted small" style={{ marginTop: 16 }}>
            Hai completato tutto il materiale disponibile. I livelli successivi arrivano presto.
          </p>
        )}
      </section>

      {LEVELS.map((level) => {
        const status = summary.levels.find((l) => l.level === level)!;
        const open = openLevel === level;
        const pct = status.total > 0 ? Math.round((status.done / status.total) * 100) : 0;

        return (
          <section className={`card level-card${status.unlocked ? '' : ' locked'}`} key={level}>
            <button
              className="level-head"
              aria-expanded={open}
              disabled={!status.unlocked}
              onClick={() => setOpenLevel(open ? ('' as Level) : level)}
            >
              <span className="level-badge">{level}</span>
              <span className="level-text">
                <span className="level-title">
                  {status.complete ? '✓ ' : ''}
                  {LEVEL_BLURB[level].split(' — ')[0]}
                </span>
                <span className="muted small">
                  {!status.written
                    ? 'in preparazione'
                    : status.unlocked
                      ? `${status.done} / ${status.total} passi · ${pct}%`
                      : `si sblocca completando ${LEVELS[LEVELS.indexOf(level) - 1]}`}
                </span>
              </span>
              <span className="level-mark">{status.unlocked ? (open ? '▾' : '▸') : '🔒'}</span>
            </button>

            {open && status.unlocked && (
              <div className="units">
                {unitsFor(level).map((unit, i) => (
                  <UnitRow key={unit.id} unit={unit} index={i + 1} onOpenStep={setOpenStep} />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}

function UnitRow({ unit, index, onOpenStep }: { unit: Unit; index: number; onOpenStep: (id: string) => void }) {
  const { progress } = useProgress();
  const status = unitStatus(progress, unit);
  const unlocked = isUnitUnlocked(progress, unit);
  const [open, setOpen] = useState(false);

  return (
    <div className={`unit${status.complete ? ' complete' : ''}${unlocked ? '' : ' locked'}`}>
      <button className="unit-head" aria-expanded={open} disabled={!unlocked} onClick={() => setOpen((o) => !o)}>
        <span className="unit-index">{status.complete ? '✓' : unlocked ? index : '🔒'}</span>
        <span className="unit-text">
          <span className="unit-title">{unit.title}</span>
          <span className="muted small">{unit.goal}</span>
        </span>
        <span className="pill">
          {status.done}/{status.total}
        </span>
      </button>

      {open && unlocked && (
        <ol className="steps">
          {unit.steps.map((step) => {
            const done = Boolean(progress.steps[step.id]?.done);
            const stepOpen = isStepUnlocked(progress, unit, step);
            return (
              <li key={step.id} className={`step-row${done ? ' done' : ''}${stepOpen ? '' : ' locked'}`}>
                <button disabled={!stepOpen} onClick={() => onOpenStep(step.id)}>
                  <span className="step-mark">{done ? '✓' : stepOpen ? '·' : '🔒'}</span>
                  <span className="step-kind">{STEP_META[step.kind].label}</span>
                  <span className="step-title">{stepTitle(step.kind, step.refs)}</span>
                </button>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}

/* ────────────────────────────── one step ────────────────────────────── */

/**
 * Renders whichever lesson a step points at. The step id is threaded through so
 * every component reports its result against the same key the path reads back.
 */
function StepView({
  stepId,
  onExit,
  onOpen,
}: {
  stepId: string;
  onExit: () => void;
  onOpen: (id: string) => void;
}) {
  const { progress } = useProgress();
  const { stepById, unitOfStep } = useCourseIndex();
  const step = stepById.get(stepId);
  const unit = unitOfStep.get(stepId);

  if (!step || !unit) {
    return (
      <section className="card">
        <h1>Passo non trovato</h1>
        <div className="actions">
          <button className="btn primary" onClick={onExit}>
            Torna al percorso
          </button>
        </div>
      </section>
    );
  }

  // Where "Avanti" goes: the next step of this unit, then the next unit's first.
  const after = followingStep(unit, step, progress);
  const goNext = after ? () => onOpen(after) : onExit;

  return (
    <>
      <section className="card step-head">
        <button className="btn ghost tiny" onClick={onExit}>
          ← percorso
        </button>
        <span className="muted small">
          {unit.level} · {unit.title}
        </span>
      </section>

      {renderStep(step, stepId, goNext)}
    </>
  );
}

function renderStep(step: Step, stepId: string, onNext: () => void) {
  switch (step.kind) {
    case 'phonics': {
      const lesson = BANKS.phonics.get(step.refs[0]);
      return lesson ? <Phonics lesson={lesson} stepId={stepId} onNext={onNext} /> : <Missing />;
    }
    case 'grammar': {
      const lesson = BANKS.grammar.get(step.refs[0]);
      return lesson ? <Grammar lesson={lesson} stepId={stepId} onNext={onNext} /> : <Missing />;
    }
    case 'word': {
      const word = BANKS.word.get(step.refs[0]);
      return word ? <WordCard word={word} stepId={stepId} onNext={onNext} /> : <Missing />;
    }
    case 'article': {
      const article = BANKS.article.get(step.refs[0]);
      return article ? <ArticleReader article={article} stepId={stepId} onNext={onNext} /> : <Missing />;
    }
    case 'listening': {
      const clip = BANKS.listening.get(step.refs[0]);
      return clip ? <ListeningPlayer clip={clip} stepId={stepId} onNext={onNext} /> : <Missing />;
    }
    case 'drills': {
      const exercises = step.refs.map((r) => BANKS.drills.get(r)).filter(Boolean);
      return exercises.length ? (
        <Drills exercises={exercises as never} stepId={stepId} onNext={onNext} />
      ) : (
        <Missing />
      );
    }
    case 'conversation': {
      const cards = step.refs.map((r) => BANKS.conversation.get(r)).filter(Boolean);
      return cards.length ? <ConvCards cards={cards as never} stepId={stepId} onNext={onNext} /> : <Missing />;
    }
    case 'convdrill': {
      const drills = step.refs.map((r) => BANKS.convdrill.get(r)).filter(Boolean);
      return drills.length ? (
        <ConvDialogues drills={drills as never} stepId={stepId} onNext={onNext} />
      ) : (
        <Missing />
      );
    }
  }
}

function Missing() {
  return (
    <section className="card">
      <h1>Contenuto mancante</h1>
      <p className="muted small">Questo passo punta a materiale che non esiste ancora.</p>
    </section>
  );
}

/** The step after this one, within the unit and then across to the next. */
function followingStep(unit: Unit, step: Step, progress: ReturnType<typeof useProgress>['progress']): string | null {
  const index = unit.steps.findIndex((s) => s.id === step.id);
  const rest = unit.steps.slice(index + 1);
  const withinUnit = rest.find((s) => !progress.steps[s.id]?.done) ?? rest[0];
  if (withinUnit) return withinUnit.id;
  const next = nextStep(progress, unit.level);
  return next ? next.step.id : null;
}

/** Lazily built indexes, kept out of the render path. */
function useCourseIndex() {
  return useMemo(() => {
    const all = LEVELS.flatMap((l) => unitsFor(l));
    return {
      stepById: new Map(all.flatMap((u) => u.steps.map((s) => [s.id, s] as const))),
      unitOfStep: new Map(all.flatMap((u) => u.steps.map((s) => [s.id, u] as const))),
    };
  }, []);
}
