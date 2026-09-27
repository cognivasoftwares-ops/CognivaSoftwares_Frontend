import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  'Services',
  'Products',
  'Case Studies',
  'Industries',
  'About',
  'Partner With Us',
  'Careers',
  'Blog',
];

export default function ExperienceHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-b border-slate-800/80 bg-[#070b14]/85 px-6 backdrop-blur-md lg:px-12">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/10 font-black text-amber-400 transition-colors group-hover:border-amber-400 group-hover:bg-amber-400/20">
          C
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-black tracking-widest text-white uppercase">
            Cogniva
          </span>
          <span className="text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase">
            Softwares
          </span>
        </div>
      </Link>

      {/* Center Nav Links */}
      <nav className="hidden items-center gap-7 xl:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xs font-semibold tracking-wider text-slate-400 uppercase transition-colors hover:text-white"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-lg border border-amber-400 bg-amber-400 px-5 py-2.5 text-xs font-bold tracking-wider text-slate-950 uppercase shadow-lg shadow-amber-400/10 transition-all hover:bg-amber-300 hover:shadow-amber-400/20"
      >
        <span>Talk to Us</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </header>
  );
}