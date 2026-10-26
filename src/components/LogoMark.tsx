import React from 'react';
import { LOGO_URL } from '../data/screenshots';

interface LogoMarkProps {
  size?: number;
  className?: string;
}

// The Cadence app icon — a "C" focus ring with a clock hand.
export function LogoMark({ size = 28, className = '' }: LogoMarkProps) {
  return (
    <img
      src={LOGO_URL}
      alt="Cadence"
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }} />);


}