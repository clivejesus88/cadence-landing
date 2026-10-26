import React from 'react';
import { motion } from 'framer-motion';
import { HeroActions } from './hero/HeroActions';
import { HeroPreviewCards } from './hero/HeroPreviewCards';
import { HERO_BACKDROP } from '../data/screenshots';

const rise = (i: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }
});

export function Hero() {
  return (
    <section id="top" className="px-2 pt-2 md:px-4 md:pt-4">
      <div className="relative overflow-hidden rounded-t-[2rem] border-x border-t border-white/10 bg-surface md:rounded-t-[2.5rem]">
        <img
          src={HERO_BACKDROP}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]" />
        
        <div className="absolute inset-0 bg-background/35" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-10 pt-28 text-center sm:px-6 md:pt-40">
          <motion.h1
            {...rise(0)}
            className="text-[2rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            
            Find your focus.
            <br /> Keep your rhythm.
          </motion.h1>

          <motion.p {...rise(1)} className="mx-auto mt-5 max-w-lg text-base text-white/65 md:text-lg">
            A calm, offline-first focus timer for students.
          </motion.p>

          <motion.div {...rise(2)}>
            <HeroActions />
          </motion.div>
        </div>

        <HeroPreviewCards />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-b from-transparent via-background/75 to-background md:h-64" />
        
      </div>
    </section>);

}