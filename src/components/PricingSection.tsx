import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Button } from './Button';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { pricingTiers } from '../data/pricing';
import { APP_URL } from '../data/screenshots';
import { fadeInUp, viewportOnce } from '../utils/motion';

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple, honest pricing"
          title={
          <>
              The Core App Is <span className="text-accent">Free Forever</span>
            </>
          }
          description="Start without an account. Upgrade only if the deeper library and insights become useful to you. Pro funds the servers and the next round of features." />
        

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pricingTiers.map((tier, index) =>
          <motion.div
            key={tier.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}>
            
              <GlassCard strong={tier.featured} className={`flex h-full flex-col p-5 sm:p-7 ${tier.featured ? 'ring-1 ring-accent/35' : ''}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xl font-semibold text-white">{tier.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{tier.description}</p>
                  </div>
                  {tier.featured &&
                <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">Launch offer</span>
                }
                </div>

                <div className="mt-7">
                  <p className="text-4xl font-bold tracking-tight text-white">{tier.monthlyPrice}</p>
                  {tier.annualPrice && <p className="mt-2 font-semibold text-accent-light">{tier.annualPrice}</p>}
                  {tier.annualNote && <p className="mt-1 text-xs text-white/45">{tier.annualNote}</p>}
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {tier.features.map((feature) =>
                <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                )}
                </ul>

                <div className="mt-auto pt-8">
                  <Button
                  href={APP_URL}
                  external
                  variant={tier.featured ? 'accent' : 'primary'}
                  className="w-full"
                  icon={<ArrowRightIcon className="h-4 w-4" />}>
                  
                    {tier.id === 'free' ? 'Start free as a guest' : 'Explore Cadence Pro'}
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}