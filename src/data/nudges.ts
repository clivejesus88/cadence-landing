export type Nudge = {
  id: string;
  icon: 'bell' | 'shield' | 'flame' | 'trophy';
  title: string;
  body: string;
};

export const nudges: Nudge[] = [
{ id: 'reminder', icon: 'bell', title: 'Reminder', body: 'Evening study block starts in 10m' },
{ id: 'distraction', icon: 'shield', title: 'Distraction plan', body: 'You left mid-session — 12m to go' },
{ id: 'streak', icon: 'flame', title: 'Streak saved', body: 'Day 7 — keep the rhythm going' },
{ id: 'xp', icon: 'trophy', title: '+40 XP', body: 'Session complete · 25m focused' }];