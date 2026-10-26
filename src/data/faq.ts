export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
{
  question: 'Is Cadence really free?',
  answer:
  'The core app is free forever: tasks, planner, focus timer, breaks, core soundscapes, streaks, insights, guest mode and reminders. Pro is optional at $6.99/month or $47.99/year and funds the servers and future features.'
},
{
  question: 'Do I need an account before I can focus?',
  answer:
  'No. Guest mode gives you the full local experience with no email required. Create an account only if you want private cloud sync across your devices.'
},
{
  question: 'Does it actually work without internet?',
  answer:
  'Yes. Tasks and sessions live on your device first, so the timer, planner, sounds and progress work with zero signal. If you use an account, changes quietly sync when you reconnect.'
},
{
  question: 'Does Cadence block other apps?',
  answer:
  'No. A web app cannot honestly block other apps at the operating-system level. Cadence uses a distraction plan and focus shield to nudge you back when you switch away, while staying quiet when your screen simply turns off.'
},
{
  question: 'Will reminders reach me when Cadence is closed?',
  answer:
  'Yes. Cadence uses real Web Push reminders at sensible local times, not just alerts inside the app. On iPhone, Web Push requires iOS 16.4 or later and Cadence must be installed on the home screen.'
},
{
  question: 'Can I install it without an app store?',
  answer:
  'Yes. Cadence is an installable web app. Open it in a supported browser and add it to your home screen. It works across phones and laptops without an App Store or Play Store download.'
},
{
  question: 'What music is included?',
  answer:
  'The launch library includes seven free soft soundscapes spanning public-domain classical compositions, original cinematic pieces and ambient textures. Cadence does not bundle copyrighted commercial recordings.'
},
{
  question: 'Where is my data stored?',
  answer:
  'Your data stays on your device first. If you create an account, it syncs to private rows protected by row-level security. Cadence does not sell your study data.'
}];