import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, BookOpenIcon, BrainIcon, ClockIcon, ZapIcon, BoxIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useCases } from "../data/useCases";
const icons: Record<string, BoxIcon> = {
  zap: ZapIcon,
  brain: BrainIcon,
  book: BookOpenIcon
};
const ease = [0.23, 1, 0.32, 1] as const;
export function UseCaseCarousel() {
  const [active, setActive] = useState(1);
  const count = useCases.length;
  const order = [(active - 1 + count) % count, active, (active + 1) % count];
  return <section id="sessions" className="relative py-24 md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Built for how you study" title={<>
              The Most Flexible and <span className="text-accent">Easy to Use</span> Focus Timer
            </>} />

        <div className="scrollbar-none mt-10 flex max-w-full justify-start overflow-x-auto px-1 sm:justify-center">
          <div role="tablist" aria-label="Study styles" className="glass inline-flex w-max shrink-0 gap-1 rounded-full p-1">
            {useCases.map((useCase, index) => {
            const Icon = icons[useCase.icon];
            const selected = index === active;
            return <button key={useCase.id} role="tab" aria-selected={selected} onClick={() => setActive(index)} className={`inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-150 sm:px-3.5 sm:text-sm ${selected ? 'bg-accent text-black' : 'text-white/60 hover:text-white'}`}>
                  <Icon className="h-3.5 w-3.5" />
                  {useCase.tab}
                </button>;
          })}
          </div>
        </div>

        <div className="mt-12 grid items-center gap-5 md:grid-cols-[1fr_1.2fr_1fr]">
          {order.map((index, slot) => {
          const useCase = useCases[index];
          const Icon = icons[useCase.icon];
          const isActive = slot === 1;
          return <motion.article key={useCase.id} layout transition={{
            duration: 0.3,
            ease
          }} onClick={isActive ? undefined : () => setActive(index)} role={isActive ? undefined : 'button'} tabIndex={isActive ? undefined : 0} onKeyDown={(event) => {
            if (!isActive && (event.key === 'Enter' || event.key === ' ')) {
              event.preventDefault();
              setActive(index);
            }
          }} aria-label={isActive ? undefined : `Show ${useCase.title}`} className={`flex min-h-[290px] flex-col rounded-[1.15rem] p-7 ${isActive ? 'app-card-strong shadow-[0_28px_55px_-30px_rgba(249,115,22,0.42)] ring-1 ring-accent/35' : 'app-card hidden cursor-pointer opacity-60 transition-opacity duration-150 hover:opacity-90 md:flex'}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{useCase.description}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${isActive ? 'bg-accent text-black' : 'bg-white/[0.06] text-white/70'}`}>
                    <ClockIcon className="h-3.5 w-3.5" />
                    {useCase.duration}
                  </span>
                  {isActive && <a href="#features" className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black">
                      Try it <ArrowRightIcon className="h-3.5 w-3.5" />
                    </a>}
                </div>
              </motion.article>;
        })}
        </div>
      </div>
    </section>;
}