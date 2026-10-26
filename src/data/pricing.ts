export type PricingTier = {
  id: 'free' | 'pro';
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice?: string;
  annualNote?: string;
  features: string[];
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
{
  id: 'free',
  name: 'Free',
  description: 'Everything you need to plan, focus and build a steady study rhythm.',
  monthlyPrice: '$0',
  features: [
  'Tasks, planner and focus timer',
  'Breaks and core soundscapes',
  'Streaks, insights and reminders',
  'Full guest mode—no account required']

},
{
  id: 'pro',
  name: 'Cadence Pro',
  description: 'More depth when you want it. The free core always stays useful.',
  monthlyPrice: '$6.99/mo',
  annualPrice: '$47.99/year',
  annualNote: '≈ $4/month · save 40%',
  features: [
  'Full sound library',
  'Advanced distraction planning',
  'Deeper focus insights',
  'First-cohort annual launch price'],

  featured: true
}];