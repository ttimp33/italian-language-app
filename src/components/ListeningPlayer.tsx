import { useEffect, useState } from 'react';
import type { ListeningClip } from '../data/types';
import { LEVEL_RATE } from '../data/types';
import { useItalianSpeech } from '../lib/speech';
import { useStep } from '../lib/step';
import { Quiz } from './Quiz';
import { StepFooter } from './StepFooter';

export function ListeningPlayer({ clip, stepId, onNext }: { clip: ListeningClip; stepId: string; onNext?: () => void }) {
  const step = useStep(stepId, 'listening');
  const lines = clip.transcript.map((t) => t.it);
  const speech = useItalianSpeech(lines, LEVEL_RATE[clip.level]);

  // Listening first, reading second: the transcript stays hidden until asked for.
  const [showTranscript, setShowTranscript] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    setShowTranscript(false);
    setShowTranslation(false);
  }, [clip.id]);

  const noVoice = speech.supported && !speech.hasItalianVoice;

  return (
    <>
      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Ascolto · {clip.level}</span>
          <span className="pill">{clip.show}</span>
        </div>
        <h1>{clip.title}</h1>
        <p className="muted small" style={{ marginTop: 4 }}>
          {clip.setting}
        </p>

        {!speech.supported && (
          <div className="banner">
            Questo browser non supporta la sintesi vocale. Il trascritto resta disponibile qui sotto.
          </div>
        )}
        {noVoice && (
          <div className="banner">
            Nessuna voce italiana installata su questo dispositivo ({speech.voiceCount} voci trovate). Su Windows:
            Impostazioni → Ora e lingua → Voce → Aggiungi voci. Su Android: impostazioni di sintesi vocale di Google.
            Il trascritto resta disponibile.
          </div>
        )}

        <div className="player">
          <div className="player-row">
            <button
              className="btn primary"
              disabled={!speech.supported || !speech.hasItalianVoice}
              onClick={() => {
                if (speech.state === 'playing') speech.pause();
                else if (speech.state === 'paused') speech.resume();
                else speech.play();
              }}
            >
              {speech.state === 'playing' ? '❚❚ Pausa' : speech.state === 'paused' ? '▸ Riprendi' : '▸ Ascolta'}
            </button>
            <button className="btn" disabled={speech.state === 'idle'} onClick={speech.stop}>
              ■ Stop
            </button>
            <div className="rate-control">
              <label htmlFor="rate">Velocità</label>
              <input
                id="rate"
                type="range"
                min={0.6}
                max={1.2}
                step={0.05}
                value={speech.rate}
                onChange={(e) => speech.setRate(Number(e.target.value))}
              />
              <span style={{ fontVariantNumeric: 'tabular-nums' }}>{speech.rate.toFixed(2)}×</span>
            </div>
          </div>
          <p className="muted small" style={{ margin: '10px 0 0' }}>
            Consigliato per il livello {clip.level}: {LEVEL_RATE[clip.level].toFixed(2)}× — vicino alla velocità di
            conversazione reale. L'audio è generato dal trascritto con la voce italiana del dispositivo
            {speech.voiceName ? ` (${speech.voiceName})` : ''}.
          </p>
        </div>

        <div className="actions" style={{ marginTop: 0 }}>
          <button className="btn" onClick={() => setShowTranscript((s) => !s)}>
            {showTranscript ? 'Nascondi trascritto' : 'Mostra trascritto'}
          </button>
          <button className="btn ghost" disabled={!showTranscript} onClick={() => setShowTranslation((s) => !s)}>
            {showTranslation ? 'Nascondi traduzione' : 'Mostra traduzione'}
          </button>
        </div>

        {showTranscript ? (
          <div className="transcript" style={{ marginTop: 14 }}>
            {clip.transcript.map((t, i) => (
              <button
                key={i}
                className={`line${speech.current === i ? ' active' : ''}`}
                onClick={() => speech.speakLine(i)}
                title="Clicca per riascoltare questa riga"
              >
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="it">{t.it}</span>
                  {showTranslation && <div className="en">{t.en}</div>}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <p className="muted small" style={{ marginTop: 14 }}>
            Prova ad ascoltare due volte prima di aprire il trascritto: la prima per il senso generale, la seconda per i
            dettagli.
          </p>
        )}
      </section>

      <section className="card">
        <span className="eyebrow">Espressioni chiave</span>
        <ul className="examples">
          {clip.keyPhrases.map((p, i) => (
            <li key={i}>
              <div className="example-it">
                {p.it}
                {speech.supported && speech.hasItalianVoice && (
                  <button className="btn ghost tiny" onClick={() => speech.speakText(p.it)}>
                    ▸
                  </button>
                )}
              </div>
              <div className="example-en">{p.en}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <div className="card-head">
          <span className="eyebrow">Comprensione orale</span>
        </div>
        <Quiz questions={clip.questions} resetKey={stepId} onComplete={step.report} />
        <StepFooter done={step.done} best={step.best} attempts={step.attempts} onNext={onNext} />
      </section>
    </>
  );
}
