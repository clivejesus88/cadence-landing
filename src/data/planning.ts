export type PlannerTask = {
  id: string;
  title: string;
  subject: string;
  blocks: number;
  group: 'Overdue' | 'Today' | 'Tomorrow';
};

export const plannerTasks: PlannerTask[] = [
{
  id: 'biology-notes',
  title: 'Review cell biology notes',
  subject: 'Biology',
  blocks: 2,
  group: 'Overdue'
},
{
  id: 'essay-outline',
  title: 'Draft history essay outline',
  subject: 'History',
  blocks: 3,
  group: 'Today'
},
{
  id: 'problem-set',
  title: 'Finish problem set',
  subject: 'Calculus',
  blocks: 2,
  group: 'Today'
},
{
  id: 'flashcards',
  title: 'Make exam flashcards',
  subject: 'Chemistry',
  blocks: 1,
  group: 'Tomorrow'
}];


export const planningBenefits = [
'Group work into Overdue, Today and Tomorrow',
'Estimate effort in focus blocks—not vague hours',
'Resume interrupted sessions without losing progress'];


// The task this page's "Resume" demo continues — ties the planner to the live timer.
export const resumableSession = {
  taskId: 'biology-notes',
  focusedMinutes: 12,
  remainingMinutes: 13
};