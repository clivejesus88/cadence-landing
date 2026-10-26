import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformMarquee } from './components/PlatformMarquee';
import { UseCaseCarousel } from './components/UseCaseCarousel';
import { PlanningSection } from './components/PlanningSection';
import { FocusSessionShowcase } from './components/focus/FocusSessionShowcase';
import { SoundscapesSection } from './components/SoundscapesSection';
import { NudgesSection } from './components/NudgesSection';
import { SyncSection } from './components/SyncSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-white">
      <Navbar />
      <main>
        <Hero />
        <PlatformMarquee />
        <UseCaseCarousel />
        <PlanningSection />
        <FocusSessionShowcase />
        <SoundscapesSection />
        <NudgesSection />
        <SyncSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>);

}