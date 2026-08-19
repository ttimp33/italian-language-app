import { beforeEach, describe, expect, it } from 'vitest';
import { derive, verify } from './auth';
import { USERS, findUser, PBKDF2_ITERATIONS } from '../data/users';
import { actions, setActiveUser, _internals } from './progress';

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
    actions.completeTask('word', '2026-03-01');
    setActiveUser('jessica');
    actions.completeTask('article', '2026-03-01');

    expect([...storage.store.keys()].sort()).toEqual([
      _internals.storageKey('jessica'),
      _internals.storageKey('tyler'),
    ]);
  });

  it('shows each profile only its own progress', () => {
    setActiveUser('tyler');
    actions.completeTask('word', '2026-03-01');
    actions.completeTask('article', '2026-03-01');
    const tylerXp = _internals.read().xp;
    expect(tylerXp).toBeGreaterThan(0);

    setActiveUser('jessica');
    expect(_internals.read().xp).toBe(0);
    expect(_internals.read().completed).toEqual({});

    setActiveUser('tyler');
    expect(_internals.read().xp).toBe(tylerXp);
  });

  it('writes nothing while signed out, so the gate cannot leak into a profile', () => {
    setActiveUser(null);
    actions.completeTask('word', '2026-03-01');
    actions.toggleSaved('a2-prenotare');
    expect(storage.store.size).toBe(0);

    setActiveUser('jessica');
    expect(_internals.read().xp).toBe(0);
    expect(_internals.read().saved).toEqual([]);
  });

  it('clears in-memory state on sign-out', () => {
    setActiveUser('tyler');
    actions.completeTask('word', '2026-03-01');
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
