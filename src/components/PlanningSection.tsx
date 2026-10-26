import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircle2Icon, CircleIcon, PlayIcon, TimerIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { plannerTasks, planningBenefits, resumableSession } from '../data/planning';
import { loadFocusSession, scrollToFocusTimer } from '../utils/focusBus';
import { fadeInUp, viewportOnce } from '../utils/motion';

const groups = ['Overdue', 'Today', 'Tomorrow'] as const;

export function PlanningSection() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const resumedTask = plannerTasks.find((task) => task.id === resumableSession.taskId);

  function toggleTask(id: string) {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleResume() {
    loadFocusSession(resumableSession.remainingMinutes);
    scrollToFocusTimer();
  }

  return (
    <section id="planner" className="relative py-24 md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Plan without the overhead"
            title={
            <>
                Turn Deadlines Into <span className="text-accent">Doable Sessions</span>
              </>
            }
            description="Give each task a subject and a realistic number of focus blocks. Cadence keeps today clear—and lets you resume when real life interrupts." />
          
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            custom={1}
            className="mt-8 flex flex-col gap-3">
            
            {planningBenefits.map((benefit) =>
            <li key={benefit} className="flex items-start gap-3 text-sm text-white/70">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2Icon className="h-3 w-3" />
                </span>
                {benefit}
              </li>
            )}
          </motion.ul>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          custom={1}>
          
          <GlassCard strong className="p-5 md:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-serif text-2xl text-white">Planner</p>
                <p className="text-xs text-white/50">Tap a task to mark it done</p>
              </div>
              <span className="glass rounded-full px-3 py-1.5 text-xs font-semibold text-white/70">Example plan</span>
            </div>

            <div className="mt-6 flex flex-col gap-5">
              {groups.map((group) => {
                const tasks = plannerTasks.filter((task) => task.group === group);
                if (tasks.length === 0) return null;
                return (
                  <div key={group}>
                    <div className="mb-2 flex items-center justify-between">
                      <p className={`text-xs font-semibold ${group === 'Overdue' ? 'text-accent-light' : 'text-white/55'}`}>
                        {group}
                      </p>
                      <span className="text-[11px] text-white/35">{tasks.length}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {tasks.map((task) => {
                        const isDone = Boolean(completed[task.id]);
                        return (
                          <button
                            key={task.id}
                            type="button"
                            aria-pressed={isDone}
                            onClick={() => toggleTask(task.id)}
                            className="app-card-inset flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-opacity duration-150 hover:opacity-90">
                            
                            {isDone ?
                            <CheckCircle2Icon className="h-4 w-4 shrink-0 text-accent" /> :

                            <CircleIcon className="h-4 w-4 shrink-0 text-white/30" />
                            }
                            <div className="min-w-0 flex-1">
                              <p
                                className={`truncate text-sm font-semibold ${
                                isDone ? 'text-white/35 line-through' : 'text-white'}`
                                }>
                                
                                {task.title}
                              </p>
                              <p className="text-xs text-white/45">{task.subject}</p>
                            </div>
                            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-white/60">
                              <TimerIcon className="h-3 w-3" /> {task.blocks}
                            </span>
                          </button>);

                      })}
                    </div>
                  </div>);

              })}
            </div>

            <button
              type="button"
              onClick={handleResume}
              className="mt-5 flex w-full items-center gap-3 rounded-2xl border border-accent/20 bg-accent/[0.08] p-3 text-left transition-colors duration-150 hover:border-accent/40 hover:bg-accent/[0.12]">
              
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-black">
                <PlayIcon className="h-4 w-4 fill-black" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">Resume: {resumedTask?.title}</p>
                <p className="text-xs text-white/50">
                  {resumableSession.focusedMinutes}m focused · {resumableSession.remainingMinutes}m left
                </p>
              </div>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-accent" />
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </section>);

}