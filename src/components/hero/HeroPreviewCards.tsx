import React from 'react';
import { motion } from 'framer-motion';
import { PhoneFrame } from '../PhoneFrame';
import { SCREENSHOTS } from '../../data/screenshots';

const previewMotion = (delay: number) => ({
  initial: { opacity: 0, y: 28, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] }
});

// Real Cadence product screens — not reconstructed marketing cards. They enter
// above the hero's existing bottom fade, then dissolve naturally into the page.
export function HeroPreviewCards() {
  return (
    <div className="relative z-10 mx-auto -mb-16 flex h-[265px] max-w-5xl items-start justify-center gap-3 overflow-hidden px-5 sm:h-[310px] sm:gap-5 md:-mb-24 md:h-[390px] md:gap-8">
      <motion.div {...previewMotion(0.28)} className="mt-11 hidden w-[145px] -rotate-6 sm:block md:mt-14 md:w-[190px]">
        <PhoneFrame
          src={SCREENSHOTS.home}
          alt="Cadence home screen showing a quick-start focus session and weekly progress"
          className="w-full" />
        
      </motion.div>

      <motion.div {...previewMotion(0.34)} className="z-10 w-[176px] sm:w-[210px] md:w-[250px]">
        <PhoneFrame
          src={SCREENSHOTS.focusSession}
          alt="Cadence focus session screen with timer, ambient sound and focus shield"
          className="w-full" />
        
      </motion.div>

      <motion.div {...previewMotion(0.4)} className="mt-11 hidden w-[145px] rotate-6 sm:block md:mt-14 md:w-[190px]">
        <PhoneFrame
          src={SCREENSHOTS.insights}
          alt="Cadence insights screen showing focus patterns and consistency"
          className="w-full" />
        
      </motion.div>
    </div>);

}