import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from './Button';
import { PhoneFrame } from './PhoneFrame';
import { APP_URL, HERO_BACKDROP, SCREENSHOTS } from '../data/screenshots';
import { fadeInUp, viewportOnce } from '../utils/motion';

export function FinalCTA() {
  return (
    <section id="get-started" className="px-2 md:px-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface md:rounded-[2.5rem]">
        <img
          src={HERO_BACKDROP}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]" />
        
        <div className="absolute inset-0 bg-background/45" aria-hidden="true" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative z-10 mx-auto max-w-3xl px-5 pt-16 text-center sm:px-6 md:pt-28">
          
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            No account needed
          </span>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-6xl">
            Start Before You Can <span className="text-accent">Talk Yourself Out of It</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/65 md:text-lg">
            Open Cadence as a guest and begin a session now. Install it later if you want it on your home screen.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={APP_URL} external size="lg" className="w-full sm:w-auto" icon={<ArrowUpRightIcon className="h-4 w-4" />}>
              Start as a guest
            </Button>
            <Button href="#faq" variant="secondary" size="lg" className="w-full sm:w-auto">
              How installing works
            </Button>
          </div>
        </motion.div>

        <div className="relative z-10 -mb-32 mt-12 flex items-start justify-center gap-4 px-5 sm:-mb-44 sm:mt-16 sm:px-6 md:-mb-56 md:gap-8">
          <PhoneFrame
            src={SCREENSHOTS.insights}
            alt="Cadence insights screen"
            className="mt-12 hidden w-[200px] -rotate-6 sm:block md:w-[230px]" />
          
          <PhoneFrame src={SCREENSHOTS.home} alt="Cadence home dashboard" className="w-[190px] sm:w-[220px] md:w-[260px]" />
          <PhoneFrame
            src={SCREENSHOTS.focusSession}
            alt="Cadence focus session screen"
            className="mt-12 hidden w-[200px] rotate-6 sm:block md:w-[230px]" />
          
        </div>
      </div>
    </section>);

}