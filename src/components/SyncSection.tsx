import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  ClockIcon,
  CloudIcon,
  DownloadIcon,
  FlameIcon,
  ListChecksIcon,
  Loader2Icon,
  LockIcon,
  TrendingUpIcon,
  WifiOffIcon } from
'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { fadeInUp, viewportOnce } from '../utils/motion';

type SyncStatus = 'synced' | 'offline' | 'syncing';

const stats = [
{ icon: ClockIcon, value: '4h 20m', label: 'This week' },
{ icon: FlameIcon, value: '7 days', label: 'Current streak' },
{ icon: ListChecksIcon, value: '12', label: 'Sessions' },
{ icon: TrendingUpIcon, value: '22m', label: 'Avg session' }];


const points = [
{ icon: WifiOffIcon, label: 'Works with zero signal' },
{ icon: CloudIcon, label: 'Cloud sync' },
{ icon: LockIcon, label: 'Private account' },
{ icon: DownloadIcon, label: 'Installs from browser' }];


const statusCopy: Record<SyncStatus, {title: string;body: string;action: string;}> = {
  synced: { title: 'Synced to all devices', body: 'Phone, laptop and tablet · just now', action: 'Go offline' },
  offline: { title: 'Offline — saved on this device', body: 'Your sessions keep counting', action: 'Reconnect' },
  syncing: { title: 'Syncing…', body: 'Merging 2 offline sessions', action: 'Syncing' }
};

export function SyncSection() {
  const [status, setStatus] = useState<SyncStatus>('synced');
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function handleAction() {
    if (status === 'synced') {
      setStatus('offline');
    } else if (status === 'offline') {
      setStatus('syncing');
      timer.current = window.setTimeout(() => setStatus('synced'), 900);
    }
  }

  const copy = statusCopy[status];
  const StatusIcon = status === 'offline' ? WifiOffIcon : status === 'syncing' ? Loader2Icon : CheckCircle2Icon;

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Offline-first"
            title={
            <>
                Works Offline.
                <br /> Syncs <span className="text-accent">Everywhere</span>.
              </>
            }
            description="Cadence runs on your device first, so a dead library basement never breaks a session. Stay in guest mode for the full local experience, or create an optional account for private cloud sync across screens." />
          
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            custom={1}
            className="mt-10 flex flex-wrap gap-2">
            
            {points.map((p) =>
            <li
              key={p.label}
              className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold text-white/80">
              
                <p.icon className="h-3.5 w-3.5 text-accent" />
                {p.label}
              </li>
            )}
          </motion.ul>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          custom={1}
          className="mx-auto w-full max-w-md">
          
          <GlassCard strong className="p-6">
            <p className="font-serif text-3xl text-white">Insights</p>
            <p className="text-sm text-white/50">Your focus patterns, at a glance.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((s) =>
              <div key={s.label} className="app-card-inset rounded-2xl p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-accent">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <p className="mt-4 text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/50">{s.label}</p>
                </div>
              )}
            </div>
          </GlassCard>

          <GlassCard className="mt-3 flex items-center gap-3 rounded-2xl p-3 pl-4">
            <StatusIcon
              className={`h-5 w-5 shrink-0 ${status === 'offline' ? 'text-white/60' : 'text-accent'} ${
              status === 'syncing' ? 'animate-spin' : ''}`
              } />
            
            <div className="min-w-0 flex-1" role="status" aria-live="polite">
              <p className="truncate text-sm font-semibold text-white">{copy.title}</p>
              <p className="truncate text-xs text-white/50">{copy.body}</p>
            </div>
            <button
              type="button"
              onClick={handleAction}
              disabled={status === 'syncing'}
              className="shrink-0 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-white/15 disabled:opacity-50">
              
              {copy.action}
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </section>);

}