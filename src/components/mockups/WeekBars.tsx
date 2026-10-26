import React from 'react';

interface WeekBarsProps {
  values: number[];
  highlightIndex: number;
  height?: number;
}

const DAYS = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];

// The app's weekly focus chart: muted bars with today's bar in orange.
export function WeekBars({ values, highlightIndex, height = 80 }: WeekBarsProps) {
  const max = Math.max(...values, 1);
  return (
    <div>
      <div className="flex items-end gap-2" style={{ height }}>
        {values.map((v, i) =>
        <div
          key={i}
          className={`flex-1 rounded-md ${i === highlightIndex ? 'bg-accent-light' : 'bg-white/10'}`}
          style={{ height: `${Math.max(6, v / max * 100)}%` }} />

        )}
      </div>
      <div className="mt-2 flex gap-2">
        {DAYS.map((d, i) =>
        <span
          key={i}
          className={`flex-1 text-center text-[10px] font-medium ${i === highlightIndex ? 'text-accent-light' : 'text-white/40'}`}>
          
            {d}
          </span>
        )}
      </div>
    </div>);

}