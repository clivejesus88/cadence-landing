import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { faqItems } from '../data/faq';
import { fadeInUp, viewportOnce } from '../utils/motion';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        eyebrow="FAQ"
        title={
        <>
            Questions, <span className="text-accent">Answered</span>
          </>
        } />
      

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        custom={1}
        className="mt-12 flex flex-col gap-3">
        
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div key={item.question} className="app-card rounded-[1.15rem]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5">
                
                <span className="font-semibold text-white">{item.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-white/40 transition-transform duration-200 ease-out ${
                  isOpen ? 'rotate-180' : ''}`
                  } />
                
              </button>
              <AnimatePresence initial={false}>
                {isOpen &&
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden">
                  
                    <p className="px-5 pb-5 text-white/60 md:px-6">{item.answer}</p>
                  </motion.div>
                }
              </AnimatePresence>
            </div>);

        })}
      </motion.div>
    </section>);

}