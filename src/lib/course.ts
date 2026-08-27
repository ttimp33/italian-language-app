import type { Level, Step, Unit } from '../data/types';
import { LEVELS } from '../data/types';
import { COURSE_LEVELS, CURRICULUM, unitsFor } from '../data/curriculum';
import type { Progress } from './progress';

/**
 * Progression.
 *
 * One rule decides everything: a step counts as passed at PASS_MARK, a unit is
 * done when all its steps are, a level is done when all its units are, and the
 * next level opens only then. Nothing here consults the calendar — the course
 * is a path, and the only thing that moves you along it is finishing things.
 */

/** Share of a step's questions that must be right for it to count. */
export const PASS_MARK = 0.8;

export function passed(correct: number, total: number): boolean {
  if (total <= 0) return false;
  return correct / total >= PASS_MARK;
}

export function isStepDone(progress: Progress, stepId: string): boolean {
  return Boolean(progress.steps[stepId]?.done);
}

export interface UnitStatus {
  unit: Unit;
  done: number;
  total: number;
  complete: boolean;
  /** The first step not yet passed — where "continue" should land. */
  next?: Step;
}

export function unitStatus(progress: Progress, unit: Unit): UnitStatus {
  const done = unit.steps.filter((s) => isStepDone(progress, s.id)).length;
  return {
    unit,
    done,
    total: unit.steps.length,
    complete: done === unit.steps.length,
    next: unit.steps.find((s) => !isStepDone(progress, s.id)),
  };
}

export interface LevelStatus {
  level: Level;
  done: number;
  total: number;
  complete: boolean;
  unlocked: boolean;
  /** A level with no units written yet is not a wall the learner can hit. */
  written: boolean;
}

export function levelStatus(progress: Progress, level: Level): LevelStatus {
  const units = unitsFor(level);
  const steps = units.flatMap((u) => u.steps);
  const done = steps.filter((s) => isStepDone(progress, s.id)).length;
  return {
    level,
    done,
    total: steps.length,
    // An empty level is not "complete" — it would hand out the next level for
    // free the moment its course was written.
    complete: steps.length > 0 && done === steps.length,
    unlocked: isLevelUnlocked(progress, level),
    written: steps.length > 0,
  };
}

export function isLevelComplete(progress: Progress, level: Level): boolean {
  const steps = unitsFor(level).flatMap((u) => u.steps);
  return steps.length > 0 && steps.every((s) => isStepDone(progress, s.id));
}

/**
 * A level is open when every earlier level with a course is finished. The first
 * level is always open, and a level whose course is not yet written cannot be
 * entered at all.
 */
export function isLevelUnlocked(progress: Progress, level: Level): boolean {
  if (!COURSE_LEVELS.includes(level)) return false;
  const index = LEVELS.indexOf(level);
  return LEVELS.slice(0, index).every((earlier) => !COURSE_LEVELS.includes(earlier) || isLevelComplete(progress, earlier));
}

export function unlockedLevels(progress: Progress): Level[] {
  return COURSE_LEVELS.filter((l) => isLevelUnlocked(progress, l));
}

/** The level the learner is working at: the first unlocked one still unfinished. */
export function currentLevel(progress: Progress): Level {
  const open = unlockedLevels(progress);
  return open.find((l) => !isLevelComplete(progress, l)) ?? open[open.length - 1] ?? COURSE_LEVELS[0];
}

/** The next thing to do: the first unpassed step of the first unfinished unit. */
export function nextStep(progress: Progress, level: Level = currentLevel(progress)): { unit: Unit; step: Step } | null {
  for (const unit of unitsFor(level)) {
    const step = unit.steps.find((s) => !isStepDone(progress, s.id));
    if (step) return { unit, step };
  }
  return null;
}

/**
 * Whether a unit can be opened. Units run in order inside a level: the first
 * unfinished unit is open, everything before it is revisitable, and everything
 * after it waits. Without this a learner could skip to the last unit of a level
 * and unlock the next one having skipped the middle.
 */
export function isUnitUnlocked(progress: Progress, unit: Unit): boolean {
  if (!isLevelUnlocked(progress, unit.level)) return false;
  const units = unitsFor(unit.level);
  const index = units.findIndex((u) => u.id === unit.id);
  return units.slice(0, index).every((earlier) => unitStatus(progress, earlier).complete);
}

/**
 * Steps run in order too, but only as far as the *first* unfinished one: once a
 * unit is open you may work its steps in any order after that point. Ordering
 * the whole thing strictly would stop a learner re-reading step two after
 * finishing step three, which is revision, not cheating.
 */
export function isStepUnlocked(progress: Progress, unit: Unit, step: Step): boolean {
  if (!isUnitUnlocked(progress, unit)) return false;
  const index = unit.steps.findIndex((s) => s.id === step.id);
  const firstOpen = unit.steps.findIndex((s) => !isStepDone(progress, s.id));
  return firstOpen === -1 || index <= firstOpen;
}

export interface CourseSummary {
  levels: LevelStatus[];
  done: number;
  total: number;
  current: Level;
}

export function courseSummary(progress: Progress): CourseSummary {
  const levels = LEVELS.map((l) => levelStatus(progress, l));
  return {
    levels,
    done: levels.reduce((n, l) => n + l.done, 0),
    total: levels.reduce((n, l) => n + l.total, 0),
    current: currentLevel(progress),
  };
}

/** Everything, in path order — used by the tests and by the course overview. */
export const COURSE: Unit[] = CURRICULUM;
