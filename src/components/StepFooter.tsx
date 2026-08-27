import { PASS_MARK } from '../lib/course';

/**
 * The verdict at the foot of every step.
 *
 * A course that gates progress has to say plainly whether you got through, and
 * by how much you missed if you did not — otherwise a learner retries blind.
 * Passing is sticky: a later weaker run never takes a finished step back.
 */
export function StepFooter({
  done,
  best,
  attempts,
  onNext,
  hint,
}: {
  done: boolean;
  best: number;
  attempts: number;
  onNext?: () => void;
  /** What to do instead, when the step has nothing to score. */
  hint?: string;
}) {
  const pct = Math.round(best * 100);
  const need = Math.round(PASS_MARK * 100);

  if (done) {
    return (
      <div className="step-verdict pass">
        <div>
          <b>Superato</b>
          {best > 0 && attempts > 0 && (
            <span className="muted small">
              {' '}
              · miglior risultato {pct}%
            </span>
          )}
        </div>
        {onNext && (
          <button className="btn primary" onClick={onNext}>
            Avanti →
          </button>
        )}
      </div>
    );
  }

  if (attempts === 0) {
    return <div className="step-verdict muted small">{hint ?? `Serve almeno il ${need}% per completare questo passo.`}</div>;
  }

  return (
    <div className="step-verdict fail">
      <div>
        <b>{pct}%</b> <span className="muted small">· serve il {need}%. Riprova: le risposte si azzerano.</span>
      </div>
    </div>
  );
}
