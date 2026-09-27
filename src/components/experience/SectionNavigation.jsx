import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function SectionNavigation({
  sections,
  activeIndex,
  onSelectIndex,
  onPrev,
  onNext,
}) {
  return (
    <div className="relative w-full rounded-2xl border border-slate-800/80 bg-[#070b14]/80 px-6 py-3 backdrop-blur-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Horizontal Navigation Tabs */}
        <div className="flex flex-1 items-center gap-6 overflow-x-auto py-2">
          {sections.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectIndex(index)}
                className={`group relative flex shrink-0 flex-col py-1 text-left transition-all ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[11px] font-bold ${
                      isActive ? 'text-amber-400' : 'text-slate-400'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`text-xs font-semibold tracking-wider uppercase ${
                      isActive ? 'text-white' : 'text-slate-400'
                    }`}
                  >
                    {item.tabTitle}
                  </span>
                </div>

                {/* Underline Indicator */}
                {isActive ? (
                  <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                ) : (
                  <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-transparent transition-colors group-hover:bg-slate-700" />
                )}
              </button>
            );
          })}
        </div>

        {/* Scroll Label & Buttons */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-t border-slate-800/60 pt-3 sm:border-t-0 sm:pt-0">
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
            NAVIGATE
          </span>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onPrev}
              disabled={activeIndex === 0}
              aria-label="Previous Section"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900/60 text-slate-400 transition-colors hover:border-slate-700 hover:text-white disabled:opacity-30"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={activeIndex === sections.length - 1}
              aria-label="Next Section"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900/60 text-slate-400 transition-colors hover:border-slate-700 hover:text-white disabled:opacity-30"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}