import React, { type ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  strong?: boolean;
}

// Matches Cadence's in-app card language: near-black layered surface, cool hairline,
// subtle top sheen and restrained depth. `strong` increases opacity over imagery.
export function GlassCard({ children, className = '', strong = false }: GlassCardProps) {
  return <div className={`${strong ? 'app-card-strong' : 'app-card'} rounded-[1.15rem] ${className}`}>{children}</div>;
}