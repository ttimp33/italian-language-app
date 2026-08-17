import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Sentence-by-sentence Italian playback built on the Web Speech API.
 *
 * Speaking one sentence per utterance (rather than the whole transcript at once)
 * buys three things a single long utterance cannot: a reliable "current line"
 * highlight, tap-to-replay on any line, and immunity to the Chrome bug that
 * silently truncates utterances past roughly fifteen seconds.
 */

export type PlaybackState = 'idle' | 'playing' | 'paused';

function pickItalianVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const italian = voices.filter((v) => v.lang?.toLowerCase().startsWith('it'));
  if (italian.length === 0) return null;
  // Prefer it-IT proper, then a local voice (no network round-trip, lower latency).
  return (
    italian.find((v) => v.lang.toLowerCase() === 'it-it' && v.localService) ??
    italian.find((v) => v.lang.toLowerCase() === 'it-it') ??
    italian[0]
  );
}

export function useItalianSpeech(lines: string[], defaultRate = 1) {
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined;
  const supported = Boolean(synth);

  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [voiceCount, setVoiceCount] = useState(0);
  const [state, setState] = useState<PlaybackState>('idle');
  const [current, setCurrent] = useState(-1);
  const [rate, setRate] = useState(defaultRate);

  // Refs mirror state for use inside utterance callbacks, which capture stale values.
  const linesRef = useRef(lines);
  const rateRef = useRef(rate);
  const voiceRef = useRef(voice);
  const cancelledRef = useRef(false);
  linesRef.current = lines;
  rateRef.current = rate;
  voiceRef.current = voice;

  useEffect(() => {
    if (!synth) return;
    const sync = () => {
      const voices = synth.getVoices();
      setVoiceCount(voices.length);
      const chosen = pickItalianVoice(voices);
      if (chosen) setVoice(chosen);
    };
    sync();
    // Voices load asynchronously in Chrome and Safari.
    synth.addEventListener('voiceschanged', sync);
    return () => synth.removeEventListener('voiceschanged', sync);
  }, [synth]);

  // Never leave audio running when the player unmounts or the user navigates away.
  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      synth?.cancel();
    };
  }, [synth]);

  const speakFrom = useCallback(
    (index: number, continueToEnd: boolean) => {
      if (!synth) return;
      cancelledRef.current = false;
      synth.cancel();

      const step = (i: number) => {
        if (cancelledRef.current) return;
        const text = linesRef.current[i];
        if (text === undefined) {
          setState('idle');
          setCurrent(-1);
          return;
        }
        setCurrent(i);
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = voiceRef.current?.lang ?? 'it-IT';
        if (voiceRef.current) utterance.voice = voiceRef.current;
        utterance.rate = rateRef.current;
        utterance.onend = () => {
          if (cancelledRef.current) return;
          if (continueToEnd) {
            step(i + 1);
          } else {
            setState('idle');
            setCurrent(-1);
          }
        };
        utterance.onerror = () => {
          setState('idle');
          setCurrent(-1);
        };
        synth.speak(utterance);
      };

      setState('playing');
      step(index);
    },
    [synth],
  );

  const play = useCallback(() => speakFrom(0, true), [speakFrom]);
  const playFrom = useCallback((i: number) => speakFrom(i, true), [speakFrom]);
  const speakLine = useCallback((i: number) => speakFrom(i, false), [speakFrom]);

  const pause = useCallback(() => {
    if (!synth) return;
    synth.pause();
    setState('paused');
  }, [synth]);

  const resume = useCallback(() => {
    if (!synth) return;
    synth.resume();
    setState('playing');
  }, [synth]);

  const stop = useCallback(() => {
    if (!synth) return;
    cancelledRef.current = true;
    synth.cancel();
    setState('idle');
    setCurrent(-1);
  }, [synth]);

  /** Speak an arbitrary string (a single word, an example sentence). */
  const speakText = useCallback(
    (text: string, atRate = rateRef.current) => {
      if (!synth) return;
      cancelledRef.current = true; // stop any sequence in flight
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = voiceRef.current?.lang ?? 'it-IT';
      if (voiceRef.current) utterance.voice = voiceRef.current;
      utterance.rate = atRate;
      synth.speak(utterance);
    },
    [synth],
  );

  return {
    supported,
    /** True once an Italian voice has actually been found on this device. */
    hasItalianVoice: Boolean(voice),
    voiceName: voice?.name ?? null,
    voiceCount,
    state,
    current,
    rate,
    setRate,
    play,
    playFrom,
    speakLine,
    speakText,
    pause,
    resume,
    stop,
  };
}
