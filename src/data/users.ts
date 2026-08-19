/**
 * Profiles for this app.
 *
 * ⚠️  READ THIS BEFORE TRUSTING THE GATE
 *
 * The app is a static site with no backend, so sign-in runs entirely in the
 * browser. It gives each person their own separate progress — which is the
 * point — and it keeps a casual visitor out. It is NOT access control:
 * anyone willing to open developer tools can bypass the check or read another
 * profile's saved data straight out of localStorage.
 *
 * Passwords are therefore never stored here. What is stored is a PBKDF2-SHA256
 * derivation (150k iterations, per-user random salt), so publishing this file
 * does not publish the passwords, and guessing them offline is slow rather than
 * instant. That still cannot survive a determined attacker with a weak
 * password, so: never reuse a password you use anywhere else.
 *
 * To change a password, run:
 *
 *   node scripts/make-credentials.mjs <username> "<new password>"
 *
 * and paste the printed salt and hash over the entries below.
 */

export interface UserAccount {
  username: string;
  displayName: string;
  salt: string;
  hash: string;
}

export const PBKDF2_ITERATIONS = 150_000;

export const USERS: UserAccount[] = [
  {
    username: 'tyler',
    displayName: 'Tyler',
    salt: 'e75986169dc1e30ea0200caba1257e4d',
    hash: '7c01680743cba83880b1df3c83cc770509a5c6fd5fa9220d67ed0a3d8e786193',
  },
  {
    username: 'jessica',
    displayName: 'Jessica',
    salt: 'd649ad7ba6f8212c78ca95c1b0aa38e3',
    hash: '7cf6eddc97b3b8329a9f82e0cc8a8d5a7daec96f70623e06c3edfe2e9c153180',
  },
];

export function findUser(username: string): UserAccount | undefined {
  const wanted = username.trim().toLowerCase();
  return USERS.find((u) => u.username === wanted);
}
