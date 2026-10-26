import React from "react";
import { motion } from "framer-motion";
import { GlobeIcon, LaptopIcon, MonitorIcon, SmartphoneIcon, TabletIcon, BoxIcon } from "lucide-react";
import { platforms } from "../data/platforms";
import { fadeInUp, viewportOnce } from "../utils/motion";
const icons: Record<string, BoxIcon> = {
  phone: SmartphoneIcon,
  tablet: TabletIcon,
  laptop: LaptopIcon,
  monitor: MonitorIcon,
  globe: GlobeIcon
};
export function PlatformMarquee() {
  const loop = [...platforms, ...platforms];
  return <section className="relative z-30 pb-8 pt-12 md:pt-16" aria-labelledby="platforms-heading">
      <motion.h2 id="platforms-heading" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp} className="px-6 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
        Installs in seconds on <span className="text-accent">every device</span> you study on
      </motion.h2>

      <div className="marquee-mask mt-10 overflow-hidden">
        <ul className="animate-marquee flex w-max gap-3">
          {loop.map((p, i) => {
          const Icon = icons[p.icon];
          return <li key={`${p.label}-${i}`} aria-hidden={i >= platforms.length} className="glass flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white/80">
                <Icon className="h-4 w-4 text-white/50" />
                {p.label}
              </li>;
        })}
        </ul>
      </div>
    </section>;
}