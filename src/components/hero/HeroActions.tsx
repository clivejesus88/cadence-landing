import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../Button';
import { APP_URL } from '../../data/screenshots';

export function HeroActions() {
  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <Button
        href={APP_URL}
        external
        size="lg"
        className="w-full sm:w-auto"
        icon={<ArrowRightIcon className="h-4 w-4" />}>
        
        Start as a guest
      </Button>
      <a href="#features" className="text-sm font-medium text-white/55 transition-colors duration-150 hover:text-white">
        See how it works
      </a>
    </div>);

}