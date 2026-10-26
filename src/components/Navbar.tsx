import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { LogoMark } from './LogoMark';
import { APP_URL } from '../data/screenshots';

const navLinks = [
{ label: 'Planner', href: '#planner' },
{ label: 'Focus', href: '#features' },
{ label: 'Sounds', href: '#sounds' },
{ label: 'Pricing', href: '#pricing' }];


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 56);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 px-3 transition-[top,padding] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] md:px-4 ${
      scrolled ? 'top-3' : 'top-0'}`
      }>
      
      <div
        className={`mx-auto transition-[max-width,background-color,border-color,border-radius,box-shadow,backdrop-filter,padding] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled ?
        'max-w-5xl rounded-full border border-white/10 bg-[#111316]/80 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:px-4' :
        'max-w-[calc(100vw-1rem)] border border-transparent bg-transparent px-4 py-5 md:max-w-[calc(100vw-2rem)] md:px-8 md:py-6'}`
        }>
        
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Cadence home">
            <LogoMark size={scrolled ? 27 : 30} />
            <span className={`font-serif italic text-white ${scrolled ? 'text-xl' : 'text-2xl'}`}>Cadence</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-150 ${
              scrolled ? 'text-white/65 hover:bg-white/[0.07] hover:text-white' : 'text-white/75 hover:text-white'}`
              }>
              
                {link.label}
              </a>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className={`hidden rounded-full text-sm font-semibold transition-[background-color,color,padding] duration-150 sm:inline-flex ${
              scrolled ?
              'bg-accent px-4 py-2 text-black hover:bg-accent-light' :
              'bg-white px-5 py-2.5 text-black hover:bg-white/90'}`
              }>
              
              Open app
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className={`flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-white md:hidden ${
              scrolled ? 'bg-white/[0.07]' : 'border border-white/10 bg-black/20 backdrop-blur-xl'}`
              }
              onClick={() => setOpen((v) => !v)}>
              
              {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
              Menu
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open &&
          <motion.nav
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="app-card-strong absolute inset-x-3 top-full mt-2 flex flex-col gap-1 rounded-2xl p-2 md:hidden"
            aria-label="Mobile">
            
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm text-white/75 hover:bg-white/[0.06] hover:text-white">
              
                  {link.label}
                </a>
            )}
              <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 rounded-xl bg-accent px-3 py-2.5 text-center text-sm font-semibold text-black">
              
                Open app
              </a>
            </motion.nav>
          }
        </AnimatePresence>
      </div>
    </header>);

}