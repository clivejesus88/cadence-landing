import { useEffect, useRef, useState } from 'react';
import { sounds } from '../../data/sounds';
import { LOAD_SESSION_EVENT, SELECT_SOUND_EVENT } from '../../utils/focusBus';

export const SESSION_PRESETS = [15, 25, 50, 90];
const MAX_DIAL_MINUTES = 180;
const DEFAULT_TAB_TITLE = 'Cadence — The calm focus timer for students';

// A real, ticking version of the app's focus session — accurate even if the
// browser throttles background tabs, and wired into the planner + soundscape
// sections so those "other features" actually drive this timer.
export function useFocusDemo() {
  const [durationMinutes, setDurationMinutes] = useState(25);
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [soundIndex, setSoundIndex] = useState(0);
  const [distractionPlan, setDistractionPlan] = useState(true);
  const endAtRef = useRef<number | null>(null);

  const total = durationMinutes * 60;
  const hasStarted = remaining < total;
  const isComplete = remaining === 0;

  // Wall-clock based countdown: we recompute from a fixed end timestamp on every
  // tick, so a throttled/backgrounded tab catches back up instead of drifting.
  useEffect(() => {
    if (!running) return;
    endAtRef.current = Date.now() + remaining * 1000;
    const tick = () => {
      if (endAtRef.current == null) return;
      const secondsLeft = Math.max(0, Math.round((endAtRef.current - Date.now()) / 1000));
      setRemaining(secondsLeft);
      if (secondsLeft === 0) setRunning(false);
    };
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  // The browser tab itself becomes a live countdown while a session runs.
  useEffect(() => {
    if (!running) {
      document.title = DEFAULT_TAB_TITLE;
      return;
    }
    const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
    const ss = String(remaining % 60).padStart(2, '0');
    document.title = `${mm}:${ss} · Focusing — Cadence`;
  }, [running, remaining]);

  useEffect(() => () => {
    document.title = DEFAULT_TAB_TITLE;
  }, []);

  // The planner's "Resume" card dispatches this to load a real remaining duration.
  useEffect(() => {
    function handleLoad(event: Event) {
      const minutes = (event as CustomEvent<{minutes: number;}>).detail?.minutes;
      if (!minutes || minutes <= 0) return;
      setDurationMinutes(minutes);
      setRemaining(Math.round(minutes * 60));
      setRunning(true);
    }
    window.addEventListener(LOAD_SESSION_EVENT, handleLoad);
    return () => window.removeEventListener(LOAD_SESSION_EVENT, handleLoad);
  }, []);

  // The soundscapes section dispatches this when a student picks a sound there.
  useEffect(() => {
    function handleSelectSound(event: Event) {
      const soundId = (event as CustomEvent<{soundId: string;}>).detail?.soundId;
      if (!soundId) return;
      const index = sounds.findIndex((s) => s.id === soundId);
      if (index >= 0) setSoundIndex(index);
    }
    window.addEventListener(SELECT_SOUND_EVENT, handleSelectSound);
    return () => window.removeEventListener(SELECT_SOUND_EVENT, handleSelectSound);
  }, []);

  function selectPreset(minutes: number) {
    setDurationMinutes(minutes);
    setRemaining(minutes * 60);
    setRunning(false);
  }

  function toggleRunning() {
    if (remaining === 0) {
      setRemaining(total);
      setRunning(true);
      return;
    }
    setRunning((r) => !r);
  }

  function reset() {
    setRemaining(total);
    setRunning(false);
  }

  function nextSound() {
    setSoundIndex((i) => (i + 1) % sounds.length);
  }

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');
  const showingCountdown = hasStarted || running;

  return {
    preset: durationMinutes,
    running,
    sound: sounds[soundIndex],
    distractionPlan,
    setDistractionPlan,
    selectPreset,
    toggleRunning,
    reset,
    nextSound,
    display: showingCountdown ? `${mm}:${ss}` : String(durationMinutes),
    dialLabel: isComplete ? 'Complete' : running ? 'Focusing' : hasStarted ? 'Paused' : 'Minutes',
    progress: showingCountdown ? remaining / total : durationMinutes / MAX_DIAL_MINUTES,
    isComplete,
    hasStarted
  };
}