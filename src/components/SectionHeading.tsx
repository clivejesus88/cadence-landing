import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../utils/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={`max-w-2xl ${alignment}`}>
      
      <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white/70">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-white/55 md:text-lg">{description}</p>}
    </motion.div>);

}