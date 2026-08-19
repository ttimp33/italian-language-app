/**
 * Print a salt/hash pair for src/data/users.ts.
 *
 *   node scripts/make-credentials.mjs tyler "a new password"
 *
 * The derivation here must stay identical to `derive()` in src/lib/auth.ts:
 * PBKDF2-SHA256, 150k iterations, 32-byte output, per-user random salt.
 */
import { pbkdf2Sync, randomBytes } from 'node:crypto';

const ITERATIONS = 150_000;
const [username, password] = process.argv.slice(2);

if (!username || !password) {
  console.error('usage: node scripts/make-credentials.mjs <username> "<password>"');
  process.exit(1);
}
if (password.length < 8) {
  console.error('Refusing: use at least 8 characters. This hash may end up in a public repo.');
  process.exit(1);
}

const salt = randomBytes(16).toString('hex');
const hash = pbkdf2Sync(password, Buffer.from(salt, 'hex'), ITERATIONS, 32, 'sha256').toString('hex');

console.log(`\nPaste into the USERS array in src/data/users.ts:\n`);
console.log(`  {`);
console.log(`    username: '${username.toLowerCase()}',`);
console.log(`    displayName: '${username[0].toUpperCase()}${username.slice(1)}',`);
console.log(`    salt: '${salt}',`);
console.log(`    hash: '${hash}',`);
console.log(`  },\n`);
