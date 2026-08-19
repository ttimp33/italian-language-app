import { useSyncExternalStore } from 'react';
import { findUser, PBKDF2_ITERATIONS, type UserAccount } from '../data/users';
import { setActiveUser } from './progress';

/**
 * Browser-only sign-in. See the warning in `data/users.ts`: this separates
 * profiles and deters casual snooping; it is not access control.
 */

const SESSION_KEY = 'italiano-quotidiano/session';

function hexToBytes(hex: string): Uint8Array<ArrayBuffer> {
  const buffer = new ArrayBuffer(hex.length / 2);
  const out = new Uint8Array(buffer);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  return out;
}

function bytesToHex(bytes: ArrayBuffer): string {
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Same derivation as scripts/make-credentials.mjs — change one, change both. */
export async function derive(password: string, saltHex: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, [
    'deriveBits',
  ]);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: hexToBytes(saltHex), iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    key,
    256,
  );
  return bytesToHex(bits);
}

export async function verify(username: string, password: string): Promise<UserAccount | null> {
  const user = findUser(username);
  // Derive even when the username is unknown, so a wrong name and a wrong
  // password take the same time and feel identical to the person typing.
  const salt = user?.salt ?? '00000000000000000000000000000000';
  const derived = await derive(password, salt);
  if (!user) return null;
  return derived === user.hash ? user : null;
}

/* ────────────────────────────── session ────────────────────────────── */

let current: UserAccount | null = null;
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

function readStoredSession(): UserAccount | null {
  try {
    if (typeof localStorage === 'undefined') return null;
    const name = localStorage.getItem(SESSION_KEY);
    return name ? (findUser(name) ?? null) : null;
  } catch {
    return null;
  }
}

/**
 * Restore a previous session at startup. Staying signed in is the right
 * default for a daily-habit app on a personal phone; `signOut` is always one
 * tap away in the header.
 */
export function initSession(): void {
  const stored = readStoredSession();
  current = stored;
  setActiveUser(stored?.username ?? null);
  emit();
}

export function signIn(user: UserAccount): void {
  current = user;
  try {
    localStorage.setItem(SESSION_KEY, user.username);
  } catch {
    // Storage unavailable: the session simply lasts until the tab closes.
  }
  setActiveUser(user.username);
  emit();
}

export function signOut(): void {
  current = null;
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    // Nothing to clear.
  }
  setActiveUser(null);
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function snapshot() {
  return current;
}

export function useSession(): UserAccount | null {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}
