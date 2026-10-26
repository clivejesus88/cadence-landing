// Minimal cross-section event bus so independent marketing sections — the planner's
// "Resume" action and the soundscape picker — can genuinely drive the live focus
// timer demo instead of just looking like they do.
export const LOAD_SESSION_EVENT = 'cadence:load-session';
export const SELECT_SOUND_EVENT = 'cadence:select-sound';

export function loadFocusSession(minutes: number) {
  window.dispatchEvent(new CustomEvent(LOAD_SESSION_EVENT, { detail: { minutes } }));
}

export function selectFocusSound(soundId: string) {
  window.dispatchEvent(new CustomEvent(SELECT_SOUND_EVENT, { detail: { soundId } }));
}

export function scrollToFocusTimer() {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}