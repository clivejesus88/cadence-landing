export type UseCase = {
  id: string;
  tab: string;
  icon: 'zap' | 'brain' | 'book';
  title: string;
  duration: string;
  description: string;
};

export const useCases: UseCase[] = [
{
  id: 'between-classes',
  tab: 'Quick sprints',
  icon: 'zap',
  title: 'Between classes',
  duration: '15–25 min',
  description:
  'Squeeze a focused sprint into the gap between lectures. Tap a preset and go — no setup, no signal needed.'
},
{
  id: 'deep-work',
  tab: 'Deep work',
  icon: 'brain',
  title: 'Deep work',
  duration: '50–90 min',
  description:
  'Long, uninterrupted blocks with an ambient soundscape playing and your distraction plan switched on.'
},
{
  id: 'exam-season',
  tab: 'Exam season',
  icon: 'book',
  title: 'Exam season',
  duration: 'Up to 180 min',
  description:
  'Marathon sessions with streak protection and push reminders that land, even when the app is closed.'
}];