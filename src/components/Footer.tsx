import React from 'react';
import { LogoMark } from './LogoMark';
import { APP_URL, PRIVACY_URL, TERMS_URL } from '../data/screenshots';

const columns = [
{
  title: 'Product',
  links: [
  { label: 'Features', href: '#features' },
  { label: 'Use cases', href: '#sessions' },
  { label: 'Progress', href: '#progress' },
  { label: 'FAQ', href: '#faq' }]

},
{
  title: 'App',
  links: [
  { label: 'Open Cadence', href: APP_URL },
  { label: 'Install guide', href: '#faq' }]

},
{
  title: 'Legal',
  links: [
  { label: 'Privacy', href: PRIVACY_URL },
  { label: 'Terms', href: TERMS_URL }]

}];


export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <LogoMark size={28} />
              <span className="font-serif text-2xl italic text-white">Cadence</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-white/50">A calm, installable focus timer for students.</p>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/35">
              Your work lives on your device first. An account is optional and only needed for private cloud sync.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) =>
            <div key={col.title}>
                <h3 className="text-sm font-semibold text-white">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) =>
                <li key={link.label}>
                      <a
                    href={link.href}
                    {...link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}}
                    className="text-sm text-white/50 transition-colors duration-150 hover:text-white">
                    
                        {link.label}
                      </a>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-8 text-sm text-white/40">
          © 2026 Cadence. Built for students everywhere.
        </div>
      </div>
    </footer>);

}