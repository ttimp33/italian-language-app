import { useCallback } from 'react';
import type { StepKind } from '../data/types';
import { PASS_MARK, passed } from './course';
import { STEP_META, useProgress } from './progress';

/**
 * The single place a step is marked finished.
 *
 * Every lesson component reports the same two numbers — how many it got right
 * and out of how many — and this decides whether that clears the bar. Keeping
 * the rule here rather than in eight components is what makes the pass mark a
 * property of the course instead of a habit each screen happens to share.
 */
export function useStep(stepId: string, kind: StepKind) {
  const { progress, completeStep, recordQuiz } = useProgress();
  const record = progress.steps[stepId];

  const report = useCallback(
    (correct: number, total: number) => {
      if (total > 0) recordQuiz(correct, total);
      completeStep(stepId, {
        correct,
        total,
        pass: passed(correct, total),
        xp: STEP_META[kind].xp,
      });
    },
    [stepId, kind, completeStep, recordQuiz],
  );

  /**
   * For the few steps with nothing to mark — reading a word entry, working
   * through a flashcard deck — where finishing *is* the pass.
   */
  const finish = useCallback(() => {
    completeStep(stepId, { correct: 1, total: 0, pass: true, xp: STEP_META[kind].xp });
  }, [stepId, kind, completeStep]);

  return {
    done: Boolean(record?.done),
    best: record?.best ?? 0,
    attempts: record?.attempts ?? 0,
    report,
    finish,
    passMark: PASS_MARK,
  };
}
