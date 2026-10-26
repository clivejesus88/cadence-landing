import React from 'react';

interface MiniRingProps {
  progress: number;
  value: string;
  label: string;
  size?: number;
}

export function MiniRing({ progress, value, label, size = 72 }: MiniRingProps) {
  const center = size / 2;
  const r = center - 5;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={center} cy={center} r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={5} />
        <circle
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke="#f97316"
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
          transform={`rotate(-90 ${center} ${center})`} />
        
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-bold leading-none text-white">{value}</span>
        <span className="mt-0.5 text-[8px] font-medium uppercase tracking-wider text-white/45">{label}</span>
      </div>
    </div>);

}