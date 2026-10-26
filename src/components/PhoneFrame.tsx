import React from 'react';

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export function PhoneFrame({ src, alt, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative shadow-phone ${className}`}>
      <div className="relative rounded-[2.75rem] border-[6px] border-black bg-black ring-1 ring-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
        <div className="overflow-hidden rounded-[2.25rem]">
          <img src={src} alt={alt} className="block h-auto w-full select-none" draggable={false} />
        </div>
      </div>
    </div>);

}