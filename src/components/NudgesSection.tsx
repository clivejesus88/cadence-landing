import React from "react";
import { motion } from "framer-motion";
import { BellIcon, CrownIcon, FlameIcon, ShieldIcon, StarIcon, TrophyIcon, BoxIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GlassCard } from "./GlassCard";
import { WeekBars } from "./mockups/WeekBars";
import { nudges, Nudge } from "../data/nudges";
import { fadeInUp, viewportOnce } from "../utils/motion";
const icons: Record<Nudge['icon'], BoxIcon> = {
  bell: BellIcon,
  shield: ShieldIcon,
  flame: FlameIcon,
  trophy: TrophyIcon
};

// Desktop positions for the floating nudges, matched to the connector paths below.
const positions = ['left-0 top-[8%]', 'left-[3%] bottom-[8%]', 'right-0 top-[12%]', 'right-[3%] bottom-[4%]'];
const connectors = ['M20 15 H32 V35 H45', 'M22 83 H32 V65 H45', 'M80 21 H68 V35 H55', 'M78 88 H68 V65 H55'];
function NudgeChip({
  nudge


}: {nudge: Nudge;}) {
  const Icon = icons[nudge.icon];
  return <GlassCard className="flex w-64 items-center gap-3 rounded-2xl px-4 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-white">{nudge.title}</span>
        <span className="block text-xs text-white/55">{nudge.body}</span>
      </span>
    </GlassCard>;
}
function ProgressCard() {
  return <GlassCard strong className="w-full max-w-[300px] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
            C
          </span>
          <span className="font-serif text-lg text-white">Clive</span>
        </div>
        <span className="glass inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-white">
          <CrownIcon className="h-3 w-3 text-accent" /> Lv 2
        </span>
      </div>

      <div className="mt-5">
        <p className="text-xs text-white/45">This week</p>
        <p className="text-sm text-white/55">
          <span className="text-2xl font-bold text-white">4</span>h{' '}
          <span className="text-2xl font-bold text-white">20</span>m focused
        </p>
        <div className="mt-4">
          <WeekBars values={[40, 55, 30, 70, 45, 25, 85]} highlightIndex={6} height={64} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="app-card-inset rounded-2xl p-3">
          <FlameIcon className="h-4 w-4 text-accent" />
          <p className="mt-2 text-lg font-bold text-white">7 days</p>
          <p className="text-[11px] text-white/45">Current streak</p>
        </div>
        <div className="app-card-inset rounded-2xl p-3">
          <StarIcon className="h-4 w-4 text-accent" />
          <p className="mt-2 text-lg font-bold text-white">340 XP</p>
          <p className="text-[11px] text-white/45">60 XP to Lv 3</p>
        </div>
      </div>
    </GlassCard>;
}
export function NudgesSection() {
  return <section id="progress" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Accountability that feels good" title={<>
              Gentle Evidence You're <span className="text-accent">Improving</span>
            </>} description="A distraction plan that nudges rather than blocks, sensible local reminders such as a 4pm nudge and 6pm recap, and progress that never tries to shame you back." />

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp} custom={1} className="relative mx-auto mt-16 hidden h-[480px] max-w-[1000px] lg:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {connectors.map((d) => <path key={d} d={d} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth={1} vectorEffect="non-scaling-stroke" />)}
          </svg>

          {nudges.map((n, i) => <div key={n.id} className={`absolute z-10 ${positions[i]}`}>
              <NudgeChip nudge={n} />
            </div>)}

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <ProgressCard />
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-4 lg:hidden">
          <ProgressCard />
          <div className="grid w-full max-w-md gap-3 sm:grid-cols-2 sm:max-w-none sm:w-auto">
            {nudges.map((n) => <NudgeChip key={n.id} nudge={n} />)}
          </div>
        </div>
      </div>
    </section>;
}