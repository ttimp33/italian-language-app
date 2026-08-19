import type { WordEntry } from '../data/types';
import { LEVEL_RATE } from '../data/types';
import { useItalianSpeech } from '../lib/speech';
import { useProgress } from '../lib/progress';

export function WordCard({ word }: { word: WordEntry }) {
  const { progress, toggleSaved, completeTask, isDone } = useProgress();
  const speech = useItalianSpeech([], LEVEL_RATE[word.level]);
  const saved = progress.saved.includes(word.id);

  return (
    <section className="card">
      <div className="card-head">
        <span className="eyebrow">Parola del giorno · {word.level}</span>
        <span className="pill">{word.pos}{word.gender ? ` · ${word.gender}` : ''}</span>
      </div>

      <div className="lemma">{word.lemma}</div>
      <div className="ipa">
        {word.ipa}
        {speech.supported && (
          <button
            className="btn ghost tiny"
            onClick={() => speech.speakText(word.lemma.replace(/^(il|lo|la|l')\s*/i, ''), 0.9)}
            aria-label={`Ascolta la pronuncia di ${word.lemma}`}
          >
            ▸ ascolta
          </button>
        )}
      </div>

      <p className="gloss">{word.gloss}</p>

      <div className="note">
        <b>Uso</b>
        {word.nuance}
      </div>

      {word.falseFriend && (
        <div className="note trap">
          <b>Attenzione</b>
          {word.falseFriend}
        </div>
      )}

      <ul className="examples">
        {word.examples.map((ex, i) => (
          <li key={i}>
            <div className="example-it">
              {ex.it}
              {speech.supported && (
                <button
                  className="btn ghost tiny"
                  onClick={() => speech.speakText(ex.it, LEVEL_RATE[word.level])}
                  aria-label="Ascolta la frase"
                >
                  ▸
                </button>
              )}
            </div>
            <div className="example-en">{ex.en}</div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 18 }}>
        <span className="eyebrow">Collocazioni</span>
        <div className="chips">
          {word.collocations.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
      </div>

      {word.related && word.related.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <span className="eyebrow">Famiglia di parole</span>
          <div className="chips">
            {word.related.map((r) => (
              <span className="chip" key={r}>
                {r}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="actions">
        <button className="btn" onClick={() => toggleSaved(word.id)}>
          {saved ? '★ Salvata' : '☆ Salva nel ripasso'}
        </button>
        <div className="spacer" />
        <button
          className="btn primary"
          disabled={isDone('word')}
          onClick={() => completeTask('word')}
        >
          {isDone('word') ? '✓ Studiata' : 'Segna come studiata'}
        </button>
      </div>
    </section>
  );
}
