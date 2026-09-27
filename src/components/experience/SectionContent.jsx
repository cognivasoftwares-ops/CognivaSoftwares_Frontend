import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SectionContent({ section, currentIndex, total }) {
  return (
    <div className="flex flex-col justify-center">
      {/* Eyebrow Label */}
      <motion.div
        key={`label-${section.id}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-amber-400 uppercase"
      >
        <span>ENGINEERING CAPABILITIES</span>
        <span className="text-slate-600">·</span>
        <span className="text-slate-400">
          0{currentIndex + 1} / 0{total}
        </span>
      </motion.div>

      {/* Large Modern Heading */}
      <motion.h2
        key={`title-${section.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]"
      >
        {section.title}
      </motion.h2>

      {/* Multiline Professional Description */}
      <motion.p
        key={`desc-${section.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
      >
        {section.description}
      </motion.p>

      {/* Technology Tags */}
      <motion.div
        key={`tags-${section.id}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.24 }}
        className="mt-8 flex flex-wrap gap-2"
      >
        {section.tags.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-slate-700 hover:text-white"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Primary Action Button */}
      <motion.div
        key={`cta-${section.id}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-10"
      >
        <button
          type="button"
          className="group inline-flex items-center gap-3 rounded-lg border border-amber-400 bg-amber-400 px-6 py-3.5 text-xs font-bold tracking-widest text-slate-950 uppercase shadow-lg shadow-amber-400/10 transition-all hover:bg-amber-300 hover:shadow-amber-400/20"
        >
          <span>Explore Details</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </motion.div>
    </div>
  );
}