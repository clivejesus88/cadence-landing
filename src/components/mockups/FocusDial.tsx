import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface FocusDialProps {
  progress: number;
  value: string;
  label: string;
  size?: number;
}

const TICK_COUNT = 24;
const EASE = [0.23, 1, 0.32, 1] as const;

// Recreation of the app's focus ring: track, orange progress arc, tick marks and handle.
// The arc, handle and tick marks all glide between values instead of snapping, and the
// ring glows gently while a session is actually running.
export function FocusDial({ progress, value, label, size = 200 }: FocusDialProps) {
  const reduceMotion = useReducedMotion();
  const isLive = label === 'Focusing';

  const center = size / 2;
  const stroke = size * 0.05;
  const r = center - stroke;
  const circumference = 2 * Math.PI * r;
  const p = Math.min(1, Math.max(0, progress));
  const handleRad = (p * 360 - 90) * Math.PI / 180;
  const geometryTransition = reduceMotion ? 'none' : 'cx 280ms cubic-bezier(0.23,1,0.32,1), cy 280ms cubic-bezier(0.23,1,0.32,1)';

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {!reduceMotion &&
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: '0 0 36px 6px rgba(249,115,22,0.35)' }}
        animate={isLive ? { opacity: [0.25, 0.6, 0.25] } : { opacity: 0 }}
        transition={isLive ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3, ease: EASE }} />

      }

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" className="relative">
        <circle cx={center} cy={center} r={r - stroke * 1.1} fill="#0e0e10" />
        <circle cx={center} cy={center} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} />
        <circle
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke="#f97316"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - p)}
          transform={`rotate(-90 ${center} ${center})`}
          style={{
            transition: reduceMotion ? 'none' : 'stroke-dashoffset 280ms cubic-bezier(0.23, 1, 0.32, 1)'
          }} />
        
        {Array.from({ length: TICK_COUNT }, (_, i) => {
          const rad = (i / TICK_COUNT * 360 - 90) * Math.PI / 180;
          const inner = r - stroke * 2.4;
          const outer = r - stroke * 1.8;
          return (
            <line
              key={i}
              x1={center + inner * Math.cos(rad)}
              y1={center + inner * Math.sin(rad)}
              x2={center + outer * Math.cos(rad)}
              y2={center + outer * Math.sin(rad)}
              stroke={i / TICK_COUNT < p ? '#f97316' : 'rgba(255,255,255,0.15)'}
              strokeWidth={1.5}
              strokeLinecap="round"
              style={{ transition: reduceMotion ? 'none' : 'stroke 280ms ease-out' }} />);


        })}
        <circle
          cx={center + r * Math.cos(handleRad)}
          cy={center + r * Math.sin(handleRad)}
          r={stroke * 0.95}
          fill="#ffffff"
          style={{ transition: geometryTransition }} />
        
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 5, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -5, scale: 0.97 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="font-bold tabular-nums tracking-tight text-white"
            style={{ fontSize: size * 0.19 }}>
            
            {value}
          </motion.span>
        </AnimatePresence>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">{label}</span>
      </div>
    </div>);

}