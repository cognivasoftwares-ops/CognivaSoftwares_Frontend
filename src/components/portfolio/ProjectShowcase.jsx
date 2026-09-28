import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Plane, Users, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useProjects } from '../../hooks/useCatalog';

// Bespoke line-art illustrations, one per vertical — thin stroke, currentColor,
// so they inherit each project's accent color.
function ConstructionArt(props) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M35 150V95l25-18 25 18v55" />
      <path d="M85 150V70l30-22 30 22v80" />
      <path d="M145 150V110l15-10 15 10v40" />
      <line x1="20" y1="150" x2="180" y2="150" />
      <line x1="60" y1="150" x2="60" y2="115" />
      <line x1="115" y1="150" x2="115" y2="95" />
      <line x1="160" y1="150" x2="160" y2="125" />
      <path d="M25 105h20M90 82h20M150 118h15" strokeDasharray="3 4" opacity="0.6" />
      <circle cx="35" cy="95" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="85" cy="70" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="145" cy="110" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TravelInsuranceArt(props) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M100 25c22 12 38 16 55 16 4 45-8 88-55 112-47-24-59-67-55-112 17 0 33-4 55-16Z" />
      <path d="M72 103l14-4 8-20 6-2-2 20 16-4 6-8 4 2-4 10 4 8-4 2-8-6-16 4 4 20-6 2-8-18-14 4z" />
      <circle cx="100" cy="42" r="2.5" fill="currentColor" stroke="none" />
      <path d="M40 100h14M146 100h14" strokeDasharray="3 4" opacity="0.6" />
      <circle cx="34" cy="100" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="166" cy="100" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RecruitmentArt(props) {
  const nodes = [
    { x: 60, y: 60 },
    { x: 140, y: 60 },
    { x: 100, y: 120 },
    { x: 50, y: 155 },
    { x: 150, y: 155 },
  ];
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <line x1="60" y1="60" x2="100" y2="120" strokeDasharray="3 4" opacity="0.6" />
      <line x1="140" y1="60" x2="100" y2="120" strokeDasharray="3 4" opacity="0.6" />
      <line x1="100" y1="120" x2="50" y2="155" strokeDasharray="3 4" opacity="0.6" />
      <line x1="100" y1="120" x2="150" y2="155" strokeDasharray="3 4" opacity="0.6" />
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y - 10} r="9" />
          <path d={`M${n.x - 13} ${n.y + 18}c0-10 6-17 13-17s13 7 13 17`} />
        </g>
      ))}
      <circle cx="100" cy="120" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EducationArt(props) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M30 78 100 48l70 30-70 30Z" />
      <path d="M62 92v28c0 8 17 16 38 16s38-8 38-16V92" />
      <path d="M170 78v34" strokeDasharray="3 4" />
      <circle cx="170" cy="118" r="3" fill="currentColor" stroke="none" />
      <path d="M60 140h80" strokeDasharray="3 4" opacity="0.6" />
      <circle cx="55" cy="140" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="145" cy="140" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const iconMap = {
  'oness-infra-construction-platform': Building2,
  'yatraa-kavach-travel-insurance-platform': Plane,
  'the-bridgers-recruitment-platform': Users,
  'indore-institute-of-design-education-platform': GraduationCap,
};

const artMap = {
  'oness-infra-construction-platform': ConstructionArt,
  'yatraa-kavach-travel-insurance-platform': TravelInsuranceArt,
  'the-bridgers-recruitment-platform': RecruitmentArt,
  'indore-institute-of-design-education-platform': EducationArt,
};

const accentMap = {
  sky: { text: 'text-sky-400', bg: 'bg-sky-400', hex: '#38bdf8' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-400', hex: '#a855f7' },
  rose: { text: 'text-rose-400', bg: 'bg-rose-400', hex: '#fb7185' },
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-400', hex: '#22d3ee' },
};

function CollapsedContent({ project, index, theme, Art, isCompact }) {
  return (
    <div className="flex h-full flex-col justify-between p-5">
      <span className="font-mono text-xs text-slate-500">{String(index + 1).padStart(2, '0')}</span>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-8">
        <span
          className="whitespace-nowrap text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {project.industry}
        </span>
        {!isCompact && <Art className={`h-28 w-28 ${theme.text} opacity-90`} />}
      </div>

      {!isCompact && (
        <div className="grid grid-cols-2 gap-2 border-t pt-3" style={{ borderColor: `${theme.hex}33` }}>
          <div>
            <div className={`text-sm font-bold ${theme.text}`}>{project.stat1.value}</div>
            <div className="text-[9px] font-semibold tracking-wider text-slate-500 uppercase">{project.stat1.label}</div>
          </div>
          <div>
            <div className="text-sm font-bold text-white">{project.stat2.value}</div>
            <div className="text-[9px] font-semibold tracking-wider text-slate-500 uppercase">{project.stat2.label}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function ExpandedContent({ project, index, total, theme, Icon }) {
  return (
    <div className="relative flex h-full flex-col justify-center gap-5 overflow-hidden px-8 py-10 sm:px-12">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-slate-500">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <Icon className={`h-6 w-6 ${theme.text}`} strokeWidth={1.75} />
      </div>

      <h3 className="max-w-lg text-2xl font-black tracking-tight text-white sm:text-3xl">{project.title}</h3>

      <p className="max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">{project.description}</p>

      <ul className="max-w-lg space-y-2">
        {project.solution.slice(0, 3).map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-slate-300">
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bg}`} />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/portfolio/${project.slug}`}
        className={`group relative z-10 inline-flex w-fit items-center gap-2 text-xs font-bold tracking-widest ${theme.text} uppercase`}
      >
        Explore This Project
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
}

function Strip({ project, index, total, isActive, isAnyActive, onSelect, theme, Icon, Art }) {
  const isCompact = isAnyActive && !isActive;
  return (
    <motion.button
      type="button"
      layout
      onMouseEnter={() => onSelect(index)}
      onFocus={() => onSelect(index)}
      onClick={() => onSelect(index)}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        flex: isActive || !isAnyActive ? '1 1 0%' : '0 0 112px',
        backgroundImage: `radial-gradient(circle at 25% 0%, ${theme.hex}2e, transparent 55%), linear-gradient(180deg, ${theme.hex}12, transparent 45%)`,
      }}
      className={`group relative h-full overflow-hidden border-r border-slate-800/70 bg-slate-950 text-left last:border-r-0 focus:outline-none ${
        isActive ? 'bg-slate-950/80' : 'hover:brightness-110'
      }`}
    >
      <span className={`absolute top-0 left-0 right-0 z-10 h-[3px] ${theme.bg}`} />
      <AnimatePresence mode="wait" initial={false}>
        {isActive ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="h-full"
          >
            <ExpandedContent project={project} index={index} total={total} theme={theme} Icon={Icon} />
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <CollapsedContent project={project} index={index} theme={theme} Art={Art} isCompact={isCompact} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileActive, setMobileActive] = useState(0);
  const { projects } = useProjects();

  // Only the most recently added, verified client projects are shown for now.
  const featured = projects.slice(-4);

  return (
    <section className="bg-[#070b14] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Selected Work</span>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Explore each project below to see the challenge, approach and outcome in detail.
        </p>

        {/* Desktop interactive strips */}
        <div
          onMouseLeave={() => setActiveIndex(null)}
          className="mt-10 hidden h-[520px] overflow-hidden rounded-3xl border border-slate-800/70 lg:flex"
        >
          {featured.map((project, index) => {
            const theme = accentMap[project.accent] || accentMap.sky;
            const Icon = iconMap[project.slug] || Building2;
            const Art = artMap[project.slug] || ConstructionArt;
            return (
              <Strip
                key={project.slug}
                project={project}
                index={index}
                total={featured.length}
                isActive={index === activeIndex}
                isAnyActive={activeIndex !== null}
                onSelect={setActiveIndex}
                theme={theme}
                Icon={Icon}
                Art={Art}
              />
            );
          })}
        </div>

        {/* Mobile / tablet accordion */}
        <div className="mt-10 space-y-3 lg:hidden">
          {featured.map((project, index) => {
            const theme = accentMap[project.accent] || accentMap.sky;
            const Icon = iconMap[project.slug] || Building2;
            const isActive = index === mobileActive;
            return (
              <div key={project.slug} className="overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/60">
                <button
                  type="button"
                  onClick={() => setMobileActive(isActive ? -1 : index)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <Icon className={`h-5 w-5 shrink-0 ${theme.text}`} strokeWidth={1.75} />
                  <div className="flex-1">
                    <div className="font-mono text-[10px] text-slate-500">{String(index + 1).padStart(2, '0')}</div>
                    <div className="text-sm font-bold text-white">{project.title}</div>
                  </div>
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${theme.bg}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 px-5 pb-6">
                        <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
                        <ul className="space-y-2">
                          {project.solution.slice(0, 3).map((point) => (
                            <li key={point} className="flex items-start gap-3 text-sm text-slate-300">
                              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bg}`} />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={`/portfolio/${project.slug}`}
                          className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest ${theme.text} uppercase`}
                        >
                          Explore This Project
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
