import { useState } from 'react';
import { USERS } from '../data/users';
import { signIn, verify } from '../lib/auth';

export function SignIn() {
  const [username, setUsername] = useState(USERS[0]?.username ?? '');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    // Key derivation is deliberately slow; without awaiting it the button
    // would look dead for a moment on a phone.
    const user = await verify(username, password);
    setBusy(false);
    if (!user) {
      setError('Nome o password non corretti.');
      setPassword('');
      return;
    }
    signIn(user);
  };

  return (
    <div className="app signin-shell">
      <div className="wordmark" style={{ justifyContent: 'center', paddingTop: 40 }}>
        Italiano Quotidiano <span>A2 → C2</span>
      </div>

      <section className="card signin-card">
        <span className="eyebrow">Accedi</span>
        {/* Neutral by design: "Bentornato" would be wrong for half the profiles,
            and the question is what the screen actually asks. */}
        <h1 style={{ marginTop: 6 }}>Chi sta studiando?</h1>
        <p className="muted small" style={{ marginTop: 6 }}>
          Ogni profilo tiene i propri progressi, la propria serie e il proprio mazzo di parole.
        </p>

        <form onSubmit={submit}>
          <div className="chips" style={{ marginTop: 16 }}>
            {USERS.map((u) => (
              <button
                type="button"
                key={u.username}
                className={`chip${username === u.username ? ' selected' : ''}`}
                aria-pressed={username === u.username}
                onClick={() => {
                  setUsername(u.username);
                  setError(null);
                }}
              >
                {u.displayName}
              </button>
            ))}
          </div>

          <label className="field">
            <span className="eyebrow">Password</span>
            <input
              className="cloze-input"
              style={{ width: '100%' }}
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              aria-label="Password"
            />
          </label>

          {error && (
            <div className="feedback no" style={{ marginTop: 12 }}>
              {error}
            </div>
          )}

          <div className="actions">
            <button className="btn primary" type="submit" disabled={busy || !password.trim()}>
              {busy ? 'Verifica…' : `Entra come ${USERS.find((u) => u.username === username)?.displayName ?? ''}`}
            </button>
          </div>
        </form>
      </section>

      <p className="muted small signin-note">
        Questa schermata separa i profili e tiene fuori i curiosi. Non è però una vera protezione: il sito è
        statico e chi apra gli strumenti per sviluppatori può aggirarla. Non usare qui una password che usi
        altrove.
      </p>
    </div>
  );
}
