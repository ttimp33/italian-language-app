import { beforeEach, describe, expect, it } from 'vitest';
import { derive, verify } from './auth';
import { USERS, findUser, PBKDF2_ITERATIONS } from '../data/users';
import { actions, completedOn, setActiveUser, _internals } from './progress';

/** Pass a step outright, the way a component would after a clean run. */
const pass = (stepId: string, day = '2026-05-01') =>
  actions.completeStep(stepId, { correct: 5, total: 5, pass: true, xp: 20, day });

/** A failed attempt: recorded, but it does not finish the step. */
const fail = (stepId: string, day = '2026-05-01') =>
  actions.completeStep(stepId, { correct: 1, total: 5, pass: false, xp: 20, day });

/**
 * A localStorage stand-in, since these tests run in Node. It also lets the
 * profile-isolation tests inspect exactly which keys were written.
 */
class MemoryStorage {
  store = new Map<string, string>();
  getItem(k: string) {
    return this.store.has(k) ? this.store.get(k)! : null;
  }
  setItem(k: string, v: string) {
    this.store.set(k, v);
  }
  removeItem(k: string) {
    this.store.delete(k);
  }
  clear() {
    this.store.clear();
  }
}

const storage = new MemoryStorage();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).localStorage = storage;

describe('credentials', () => {
  it('accepts the right password for each account', async () => {
    // The seeded passwords, kept here so a bad rotation fails loudly in CI.
    expect(await verify('tyler', 'andiamo2026')).toMatchObject({ username: 'tyler' });
    expect(await verify('jessica', 'firenze2026')).toMatchObject({ username: 'jessica' });
  });

  it('rejects wrong passwords, unknown users and empty input', async () => {
    expect(await verify('tyler', 'firenze2026')).toBeNull();
    expect(await verify('tyler', 'andiamo2025')).toBeNull();
    expect(await verify('nobody', 'andiamo2026')).toBeNull();
    expect(await verify('tyler', '')).toBeNull();
  });

  it('is case-insensitive on the username but not the password', async () => {
    expect(await verify('TYLER', 'andiamo2026')).toMatchObject({ username: 'tyler' });
    expect(await verify('tyler', 'Andiamo2026')).toBeNull();
  });

  it('stores no plaintext password anywhere in the account data', () => {
    const serialised = JSON.stringify(USERS);
    for (const secret of ['andiamo2026', 'firenze2026']) {
      expect(serialised).not.toContain(secret);
    }
  });

  it('gives every account a distinct salt, so identical passwords would not collide', () => {
    const salts = USERS.map((u) => u.salt);
    expect(new Set(salts).size).toBe(salts.length);
    expect(salts.every((s) => s.length === 32)).toBe(true);
  });

  it('derives deterministically and diverges on a different salt', async () => {
    const a = await derive('same password', USERS[0].salt);
    const b = await derive('same password', USERS[0].salt);
    const c = await derive('same password', USERS[1].salt);
    expect(a).toBe(b);
    expect(a).not.toBe(c);
    expect(a).toHaveLength(64);
  });

  it('uses a work factor high enough to slow offline guessing', () => {
    expect(PBKDF2_ITERATIONS).toBeGreaterThanOrEqual(100_000);
  });

  it('resolves usernames case- and whitespace-insensitively', () => {
    expect(findUser('  Jessica ')?.username).toBe('jessica');
    expect(findUser('someone')).toBeUndefined();
  });
});

describe('profile isolation', () => {
  beforeEach(() => {
    storage.clear();
    setActiveUser(null);
  });

  it('keeps each profile in its own storage key', () => {
    setActiveUser('tyler');
    pass('a1-u4/grammar/gr-a1-essere-avere', '2026-03-01');
    setActiveUser('jessica');
    pass('a1-u1/phonics/ph-a1-alfabeto', '2026-03-01');

    expect([...storage.store.keys()].sort()).toEqual([
      _internals.storageKey('jessica'),
      _internals.storageKey('tyler'),
    ]);
  });

  it('shows each profile only its own progress', () => {
    setActiveUser('tyler');
    pass('a1-u1/phonics/ph-a1-alfabeto', '2026-03-01');
    pass('a1-u1/phonics/ph-a1-vocali', '2026-03-01');
    const tylerXp = _internals.read().xp;
    expect(tylerXp).toBeGreaterThan(0);

    setActiveUser('jessica');
    expect(_internals.read().xp).toBe(0);
    expect(_internals.read().steps).toEqual({});

    setActiveUser('tyler');
    expect(_internals.read().xp).toBe(tylerXp);
  });

  it('writes nothing while signed out, so the gate cannot leak into a profile', () => {
    setActiveUser(null);
    pass('a1-u1/phonics/ph-a1-alfabeto', '2026-03-01');
    actions.toggleSaved('a2-prenotare');
    expect(storage.store.size).toBe(0);

    setActiveUser('jessica');
    expect(_internals.read().xp).toBe(0);
    expect(_internals.read().saved).toEqual([]);
  });

  it('clears in-memory state on sign-out', () => {
    setActiveUser('tyler');
    pass('a1-u1/phonics/ph-a1-alfabeto', '2026-03-01');
    setActiveUser(null);
    expect(_internals.read().xp).toBe(0);
  });

  it('migrates pre-profile data once, to the account that predates profiles', () => {
    storage.setItem(_internals.LEGACY_KEY, JSON.stringify({ xp: 260, streak: 9, saved: ['b1-cavarsela'] }));

    setActiveUser('tyler');
    expect(_internals.read().xp).toBe(260);
    expect(_internals.read().streak).toBe(9);
    expect(_internals.read().saved).toEqual(['b1-cavarsela']);
    // Consumed, so it cannot be inherited a second time.
    expect(storage.getItem(_internals.LEGACY_KEY)).toBeNull();

    setActiveUser('jessica');
    expect(_internals.read().xp).toBe(0);
  });

  it('does not hand pre-profile data to the other account', () => {
    storage.setItem(_internals.LEGACY_KEY, JSON.stringify({ xp: 260 }));
    setActiveUser('jessica');
    expect(_internals.read().xp).toBe(0);
    expect(storage.getItem(_internals.LEGACY_KEY)).not.toBeNull();
  });
});

describe('recording a step', () => {
  beforeEach(() => {
    storage.clear();
    setActiveUser('tyler');
    actions.reset();
  });

  const STEP = 'a1-u1/phonics/ph-a1-alfabeto';

  it('finishes a step only when the attempt passes', () => {
    fail(STEP);
    expect(_internals.read().steps[STEP]).toMatchObject({ done: false, attempts: 1 });
    expect(_internals.read().xp).toBe(0);

    pass(STEP);
    expect(_internals.read().steps[STEP]).toMatchObject({ done: true, attempts: 2, best: 1 });
    expect(_internals.read().xp).toBe(20);
  });

  it('keeps a step finished when a later run goes badly', () => {
    pass(STEP);
    fail(STEP);
    // Revision must never be able to take a level away.
    expect(_internals.read().steps[STEP].done).toBe(true);
    expect(_internals.read().steps[STEP].best).toBe(1);
  });

  it('pays xp once, on the first pass', () => {
    pass(STEP);
    const first = _internals.read().xp;
    pass(STEP);
    expect(_internals.read().xp).toBe(first);
  });

  it('counts a day as active only when something was actually finished', () => {
    fail(STEP, '2026-05-01');
    expect(completedOn(_internals.read(), '2026-05-01')).toBe(0);
    expect(_internals.read().streak).toBe(0);

    pass(STEP, '2026-05-01');
    pass('a1-u1/phonics/ph-a1-vocali', '2026-05-01');
    expect(completedOn(_internals.read(), '2026-05-01')).toBe(2);
    expect(completedOn(_internals.read(), '2026-05-02')).toBe(0);
    expect(_internals.read().streak).toBe(1);
  });

  it('carries the old daily records over as heatmap history, and drops the rest', () => {
    // The app used to record which of a day's rotating tasks were done, keyed
    // by day and level. Those cannot become course steps — a day was a slice of
    // a level, not a step of a path — so only the count per day survives.
    const history = _internals.migrateHistory({
      completed: { '2026-04-01::A2': ['word', 'article'], '2026-04-01::B1': ['drills'], '2026-04-02': ['word'] },
    });
    expect(history).toEqual({ '2026-04-01': 3, '2026-04-02': 1 });
  });

  it('migrates a stored profile from the daily model without losing xp or the deck', () => {
    storage.setItem(
      _internals.storageKey('jessica'),
      JSON.stringify({
        level: 'A2',
        xp: 40,
        streak: 6,
        completed: { '2026-04-01::A2': ['word'] },
        srs: { 'lx-a1-casa': { id: 'lx-a1-casa', due: '2026-04-02', interval: 3, ease: 2.5, reps: 2, lapses: 0 } },
        convDeck: { 'cv-a1-ciao': 2 },
      }),
    );
    setActiveUser('jessica');
    const p = _internals.read();
    expect(p.xp).toBe(40);
    expect(p.streak).toBe(6);
    expect(p.history['2026-04-01']).toBe(1);
    expect(p.srs['lx-a1-casa'].interval).toBe(3);
    expect(p.convDeck['cv-a1-ciao']).toBe(2);
    // The course itself starts from the beginning: there is nothing to inherit.
    expect(p.steps).toEqual({});
  });
});
