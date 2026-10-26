import React from 'react';
import { motion } from 'framer-motion';
import { AudioLinesIcon, MoonIcon, PauseIcon, PlayIcon, RotateCcwIcon, ShieldIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { GlassCard } from '../GlassCard';
import { FocusDial } from '../mockups/FocusDial';
import { SESSION_PRESETS, useFocusDemo } from './useFocusDemo';
import { fadeInUp, viewportOnce } from '../../utils/motion';

export function FocusSessionShowcase() {
  const demo = useFocusDemo();
  const primaryLabel = demo.isComplete ?
  'Session complete — go again' :
  demo.running ?
  'Pause' :
  demo.hasStarted ?
  'Resume' :
  'Start focusing';

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Focus sessions"
          title={
          <>
              A Timer That Keeps You <span className="text-accent">In Flow</span>, Not on Your Phone
            </>
          }
          description="Set your time, choose from seven free launch soundscapes and switch on a focus shield that knows the difference between wandering away and simply turning your screen off." />
        

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          custom={1}
          className="relative mt-16">
          
          <div aria-hidden="true" className="absolute inset-x-0 top-1/2 hidden h-px bg-white/10 md:block" />
          <div aria-hidden="true" className="absolute inset-x-0 top-[30%] hidden h-px bg-white/5 md:block" />
          <div aria-hidden="true" className="absolute inset-x-0 top-[70%] hidden h-px bg-white/5 md:block" />

          <GlassCard strong className="relative mx-auto grid max-w-3xl gap-6 p-4 sm:p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-8">
            <div className="my-[-16px] flex justify-center scale-[0.84] sm:my-0 sm:scale-100">
              <FocusDial
                size={230}
                progress={demo.progress}
                value={demo.display}
                label={demo.dialLabel} />
              
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className="font-serif text-2xl text-white">Focus session</p>
                <p className="text-sm text-white/50">Set up your session, then dive in.</p>
              </div>

              <div role="radiogroup" aria-label="Session length" className="flex flex-wrap gap-1.5 sm:gap-2">
                {SESSION_PRESETS.map((m) => {
                  const selected = demo.preset === m;
                  return (
                    <button
                      key={m}
                      role="radio"
                      aria-checked={selected}
                      onClick={() => demo.selectPreset(m)}
                      className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-150 sm:px-4 ${
                      selected ? 'bg-accent text-black' : 'glass text-white/70 hover:text-white'}`
                      }>
                      
                      {m}m
                    </button>);

                })}
              </div>

              <button
                type="button"
                onClick={demo.nextSound}
                aria-label={`Focus sound: ${demo.sound.name}. Change sound`}
                className="app-card flex items-center gap-3 rounded-[1.15rem] p-3 text-left transition-colors duration-150 hover:border-white/20">
                
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <MoonIcon className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-white">{demo.sound.name}</span>
                  <span className="block text-xs text-white/50">Focus sound · tap to change</span>
                </span>
                <AudioLinesIcon className={`h-4 w-4 ${demo.running ? 'text-accent' : 'text-white/40'}`} />
              </button>

              <div className="app-card flex items-center gap-3 rounded-[1.15rem] p-3">
                <ShieldIcon className="h-5 w-5 shrink-0 text-accent" />
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-white">Focus shield</span>
                  <span className="block text-xs text-white/50">Nudges on app switches · quiet when screen is off</span>
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={demo.distractionPlan}
                  aria-label="Distraction plan"
                  onClick={() => demo.setDistractionPlan(!demo.distractionPlan)}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-150 ${
                  demo.distractionPlan ? 'bg-accent' : 'bg-white/15'}`
                  }>
                  
                  <span
                    className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-150 ease-out ${
                    demo.distractionPlan ? 'translate-x-5' : 'translate-x-0'}`
                    } />
                  
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={demo.toggleRunning}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-semibold text-black transition-[background-color,transform] duration-150 hover:bg-accent-light active:scale-[0.98]">
                  
                  {demo.running ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4 fill-black" />}
                  {primaryLabel}
                </button>
                {demo.hasStarted && !demo.isComplete &&
                <button
                  type="button"
                  onClick={demo.reset}
                  aria-label="Reset session"
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 hover:text-white">
                  
                    <RotateCcwIcon className="h-4 w-4" />
                  </button>
                }
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>);

}