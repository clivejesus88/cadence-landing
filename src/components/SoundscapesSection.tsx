import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { AudioWave01Icon, MusicNote02Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { soundCollections } from '../data/soundLibrary';
import { sounds } from '../data/sounds';
import { selectFocusSound } from '../utils/focusBus';
import { fadeInUp, viewportOnce } from '../utils/motion';

const icons = {
  music: MusicNote02Icon,
  audio: AudioWave01Icon,
  waves: AudioWave01Icon
};

export function SoundscapesSection() {
  const [selectedId, setSelectedId] = useState(sounds[0].id);
  const selectedSound = sounds.find((sound) => sound.id === selectedId);

  function handleSelect(soundId: string) {
    setSelectedId(soundId);
    selectFocusSound(soundId);
  }

  return (
    <section id="sounds" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Seven free during launch"
          title={
          <>
              Soundscapes That Quiet the Room, <span className="text-accent">Not Your Thoughts</span>
            </>
          }
          description="Pick a sound here and it loads straight into the focus timer above—study with public-domain classical pieces, original cinematic music or simple ambient textures." />
        

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {soundCollections.map((collection, index) => {
            const icon = icons[collection.icon];
            return (
              <motion.div
                key={collection.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}>
                
                <GlassCard className="flex h-full flex-col p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <HugeiconsIcon icon={icon} size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{collection.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{collection.description}</p>
                  <div className="mt-5 flex flex-col gap-1.5">
                    {collection.soundIds.map((soundId) => {
                      const sound = sounds.find((soundItem) => soundItem.id === soundId);
                      if (!sound) return null;
                      const isSelected = soundId === selectedId;
                      return (
                        <button
                          key={soundId}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => handleSelect(soundId)}
                          className={`flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-xs font-medium transition-colors duration-150 ${
                          isSelected ?
                          'bg-accent/15 text-white ring-1 ring-inset ring-accent/40' :
                          'text-white/65 hover:bg-white/[0.05] hover:text-white'}`
                          }>
                          
                          <span className="flex items-center gap-2">
                            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${isSelected ? 'bg-accent' : 'bg-white/30'}`} />
                            {sound.name}
                          </span>
                          {isSelected && <HugeiconsIcon icon={Tick02Icon} size={14} strokeWidth={2} className="shrink-0 text-accent" />}
                        </button>);

                    })}
                  </div>
                </GlassCard>
              </motion.div>);

          })}
        </div>

        <p className="mt-6 text-center text-sm text-white/55">
          Now set as your focus sound: <span className="font-semibold text-white">{selectedSound?.name}</span> —{' '}
          <a href="#features" className="font-semibold text-accent hover:text-accent-light">
            see it in the timer above
          </a>
          .
        </p>
        <p className="mt-2 text-center text-xs text-white/40">
          Classical pieces are public-domain compositions performed for Cadence; copyrighted commercial recordings are not included.
        </p>
      </div>
    </section>);

}