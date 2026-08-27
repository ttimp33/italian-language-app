import { useMemo } from 'react';
import type { WordEntry } from '../data/types';
import { LEVEL_RATE } from '../data/types';
import { WORDS } from '../data/words';
import { buildVocabQuestions } from '../lib/daily';
import { useItalianSpeech } from '../lib/speech';
import { useProgress } from '../lib/progress';
import { useStep } from '../lib/step';
import { Quiz } from './Quiz';
import { StepFooter } from './StepFooter';

export function WordCard({ word, stepId, onNext }: { word: WordEntry; stepId: string; onNext?: () => void }) {
  const { progress, toggleSaved } = useProgress();
  const step = useStep(stepId, 'word');
  const speech = useItalianSpeech([], LEVEL_RATE[word.level]);
  const saved = progress.saved.includes(word.id);
  // Distractors come from the same level, where they actually bite.
  const questions = useMemo(() => buildVocabQuestions(word, WORDS.filter((w) => w.level === word.level)), [word]);

  return (
    <>
    <section className="card">
      <div className="card-head">
        <span className="eyebrow">Parola · {word.level}</span>
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
      </div>
    </section>

    <section className="card">
      <div className="card-head">
        <span className="eyebrow">Verifica</span>
      </div>
      <Quiz questions={questions} resetKey={stepId} onComplete={step.report} />
      <StepFooter done={step.done} best={step.best} attempts={step.attempts} onNext={onNext} />
    </section>
    </>
  );
}
