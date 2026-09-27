import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Truck, ShieldCheck, Workflow, ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';

const iconMap = {
  'enterprise-cloud-microservices-platform': Cloud,
  'warehouse-fleet-tracking-platform': Truck,
  'b2b-payment-compliance-platform': ShieldCheck,
  'business-operations-automation-platform': Workflow,
};

const accentMap = {
  blue: { text: 'text-sky-400', bg: 'bg-sky-400' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-400' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-400' },
  indigo: { text: 'text-violet-400', bg: 'bg-violet-400' },
};

function CollapsedContent({ project, index, theme, Icon }) {
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
        <Icon className={`h-9 w-9 ${theme.text} opacity-80`} strokeWidth={1.5} />
      </div>

      <div className="border-t border-slate-800/70 pt-3">
        <div className={`text-xs font-bold ${theme.text}`}>{project.tags[0]}</div>
        <div className="text-[9px] font-semibold tracking-wider text-slate-500 uppercase">Core Stack</div>
      </div>
    </div>
  );
}

function ExpandedContent({ project, index, total, theme, Icon }) {
  return (
    <div className="relative flex h-full flex-col justify-center gap-5 overflow-hidden px-8 py-10 sm:px-12">
      <Icon
        className={`pointer-events-none absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 ${theme.text} opacity-[0.07]`}
        strokeWidth={1}
      />

      <span className="font-mono text-xs text-slate-500">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>

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

function Strip({ project, index, total, isActive, isAnyActive, onSelect, theme, Icon }) {
  return (
    <motion.button
      type="button"
      layout
      onMouseEnter={() => onSelect(index)}
      onFocus={() => onSelect(index)}
      onClick={() => onSelect(index)}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ flex: isActive || !isAnyActive ? '1 1 0%' : '0 0 112px' }}
      className={`group relative h-full overflow-hidden border-r border-slate-800/70 bg-slate-950/60 text-left last:border-r-0 focus:outline-none ${
        isActive ? 'bg-slate-950/80' : 'hover:bg-slate-900/60'
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
            <CollapsedContent project={project} index={index} theme={theme} Icon={Icon} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileActive, setMobileActive] = useState(0);

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
          {projects.map((project, index) => {
            const theme = accentMap[project.accent] || accentMap.blue;
            const Icon = iconMap[project.slug] || Cloud;
            return (
              <Strip
                key={project.slug}
                project={project}
                index={index}
                total={projects.length}
                isActive={index === activeIndex}
                isAnyActive={activeIndex !== null}
                onSelect={setActiveIndex}
                theme={theme}
                Icon={Icon}
              />
            );
          })}
        </div>

        {/* Mobile / tablet accordion */}
        <div className="mt-10 space-y-3 lg:hidden">
          {projects.map((project, index) => {
            const theme = accentMap[project.accent] || accentMap.blue;
            const Icon = iconMap[project.slug] || Cloud;
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
