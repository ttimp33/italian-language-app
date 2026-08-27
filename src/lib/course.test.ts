import { beforeEach, describe, expect, it } from 'vitest';
import { CURRICULUM, COURSE_LEVELS, unitsFor } from '../data/curriculum';
import { BANKS } from '../data/banks';
import { LEVELS, type Level } from '../data/types';
import {
  PASS_MARK,
  courseSummary,
  currentLevel,
  isLevelComplete,
  isLevelUnlocked,
  isStepUnlocked,
  isUnitUnlocked,
  nextStep,
  passed,
  unitStatus,
  unlockedLevels,
} from './course';
import { STEP_META, actions, setActiveUser, _internals } from './progress';

/** Pass every step of a level, the way a learner would work down it. */
function completeLevel(level: Level, day = '2026-05-01') {
  for (const unit of unitsFor(level)) {
    for (const step of unit.steps) {
      actions.completeStep(step.id, { correct: 1, total: 1, pass: true, xp: STEP_META[step.kind].xp, day });
    }
  }
}

const read = () => _internals.read();

describe('the course as written', () => {
  it('runs in level order, with no gaps before the last written level', () => {
    const written = LEVELS.filter((l) => unitsFor(l).length > 0);
    expect(written).toEqual(COURSE_LEVELS);
    // A hole would mean a learner finishing A2 could never reach B2.
    const lastIndex = LEVELS.indexOf(written[written.length - 1]);
    expect(written).toEqual(LEVELS.slice(0, lastIndex + 1));
  });

  it('gives every unit a goal and at least three steps', () => {
    for (const unit of CURRICULUM) {
      expect(unit.goal.length, `${unit.id} goal`).toBeGreaterThan(20);
      expect(unit.title.trim(), `${unit.id} title`).not.toBe('');
      expect(unit.steps.length, `${unit.id} steps`).toBeGreaterThanOrEqual(3);
    }
  });

  it('points every step at content that exists, at the unit’s own level', () => {
    for (const unit of CURRICULUM) {
      for (const step of unit.steps) {
        expect(step.refs.length, `${step.id} refs`).toBeGreaterThan(0);
        for (const ref of step.refs) {
          const item = BANKS[step.kind].get(ref) as { level: Level } | undefined;
          expect(item, `${step.id} → missing ${ref}`).toBeDefined();
          expect(item!.level, `${step.id} → ${ref} is ${item!.level}`).toBe(unit.level);
        }
      }
    }
  });

  it('uses every piece of content exactly once at every level it has written', () => {
    // Both halves matter: an unused article is content a learner can never
    // reach, and a repeated one is a step that is finished before it is opened.
    const used = CURRICULUM.flatMap((u) => u.steps.flatMap((s) => s.refs));
    expect(new Set(used).size, 'a reference appears twice').toBe(used.length);

    const usedSet = new Set(used);
    for (const level of COURSE_LEVELS) {
      for (const [kind, bank] of Object.entries(BANKS)) {
        const atLevel = [...bank.values()].filter((x) => (x as { level: Level }).level === level);
        const orphans = atLevel.filter((x) => !usedSet.has((x as { id: string }).id));
        expect(orphans.map((o) => (o as { id: string }).id), `${level} ${kind} not in the course`).toEqual([]);
      }
    }
  });

  it('keeps step ids unique and stable against reordering', () => {
    const ids = CURRICULUM.flatMap((u) => u.steps.map((s) => s.id));
    expect(new Set(ids).size).toBe(ids.length);
    // Derived from the unit and the content, never from position — renumbering
    // a course must not silently invalidate stored progress.
    for (const unit of CURRICULUM) {
      for (const step of unit.steps) {
        expect(step.id).toBe(`${unit.id}/${step.kind}/${step.refs[0]}`);
      }
    }
  });
});

describe('the pass mark', () => {
  it('is four in five', () => {
    expect(PASS_MARK).toBe(0.8);
    expect(passed(4, 5)).toBe(true);
    expect(passed(3, 5)).toBe(false);
    expect(passed(8, 10)).toBe(true);
    expect(passed(7, 10)).toBe(false);
  });

  it('never passes an empty attempt', () => {
    expect(passed(0, 0)).toBe(false);
    expect(passed(1, 0)).toBe(false);
  });
});

describe('progression', () => {
  beforeEach(() => {
    setActiveUser('tyler');
    actions.reset();
  });

  it('starts everyone at A1 with nothing else open', () => {
    expect(currentLevel(read())).toBe('A1');
    expect(unlockedLevels(read())).toEqual(['A1']);
    for (const level of LEVELS.slice(1)) {
      expect(isLevelUnlocked(read(), level), `${level} must be locked`).toBe(false);
    }
  });

  it('opens the next level only when the one before it is finished', () => {
    const next = COURSE_LEVELS[1];
    if (!next) return; // only A1 is written yet

    const units = unitsFor('A1');
    // Everything but the very last step.
    for (const unit of units) {
      for (const step of unit.steps) {
        if (step.id === units[units.length - 1].steps[units[units.length - 1].steps.length - 1].id) continue;
        actions.completeStep(step.id, { correct: 1, total: 1, pass: true, xp: 1 });
      }
    }
    expect(isLevelUnlocked(read(), next), 'one step short must not unlock').toBe(false);

    completeLevel('A1');
    expect(isLevelComplete(read(), 'A1')).toBe(true);
    expect(isLevelUnlocked(read(), next)).toBe(true);
    expect(currentLevel(read())).toBe(next);
  });

  it('does not hand out a level whose course is not written yet', () => {
    for (const level of COURSE_LEVELS) completeLevel(level);
    const unwritten = LEVELS.filter((l) => !COURSE_LEVELS.includes(l));
    for (const level of unwritten) {
      expect(isLevelUnlocked(read(), level), `${level} has no course`).toBe(false);
    }
    // With everything written finished, the learner stays at the last one
    // rather than being thrown somewhere that does not exist.
    expect(COURSE_LEVELS).toContain(currentLevel(read()));
  });

  it('opens units in order', () => {
    const units = unitsFor('A1');
    expect(isUnitUnlocked(read(), units[0])).toBe(true);
    expect(isUnitUnlocked(read(), units[1])).toBe(false);

    for (const step of units[0].steps) {
      actions.completeStep(step.id, { correct: 1, total: 1, pass: true, xp: 1 });
    }
    expect(unitStatus(read(), units[0]).complete).toBe(true);
    expect(isUnitUnlocked(read(), units[1])).toBe(true);
    expect(isUnitUnlocked(read(), units[2])).toBe(false);
  });

  it('opens steps up to the first unfinished one, and lets you go back', () => {
    const unit = unitsFor('A1')[0];
    expect(isStepUnlocked(read(), unit, unit.steps[0])).toBe(true);
    expect(isStepUnlocked(read(), unit, unit.steps[1])).toBe(false);

    actions.completeStep(unit.steps[0].id, { correct: 1, total: 1, pass: true, xp: 1 });
    // Forward by one, and the finished step stays open for revision.
    expect(isStepUnlocked(read(), unit, unit.steps[0])).toBe(true);
    expect(isStepUnlocked(read(), unit, unit.steps[1])).toBe(true);
    expect(isStepUnlocked(read(), unit, unit.steps[2])).toBe(false);
  });

  it('a failed attempt moves nothing', () => {
    const unit = unitsFor('A1')[0];
    actions.completeStep(unit.steps[0].id, { correct: 1, total: 5, pass: false, xp: 20 });
    expect(isStepUnlocked(read(), unit, unit.steps[1])).toBe(false);
    expect(unitStatus(read(), unit).done).toBe(0);
    expect(read().xp).toBe(0);
  });

  it('points «continua» at the first unfinished step', () => {
    const units = unitsFor('A1');
    expect(nextStep(read())?.step.id).toBe(units[0].steps[0].id);

    actions.completeStep(units[0].steps[0].id, { correct: 1, total: 1, pass: true, xp: 1 });
    expect(nextStep(read())?.step.id).toBe(units[0].steps[1].id);
  });

  it('reports the course as a whole', () => {
    const before = courseSummary(read());
    expect(before.done).toBe(0);
    expect(before.total).toBe(CURRICULUM.flatMap((u) => u.steps).length);
    expect(before.current).toBe('A1');

    completeLevel('A1');
    const after = courseSummary(read());
    expect(after.done).toBe(unitsFor('A1').flatMap((u) => u.steps).length);
    expect(after.levels.find((l) => l.level === 'A1')!.complete).toBe(true);
  });

  it('an unwritten level is never complete, so it cannot unlock the one after it', () => {
    const unwritten = LEVELS.find((l) => !COURSE_LEVELS.includes(l));
    if (!unwritten) return;
    expect(isLevelComplete(read(), unwritten)).toBe(false);
    expect(courseSummary(read()).levels.find((l) => l.level === unwritten)!.complete).toBe(false);
  });
});
