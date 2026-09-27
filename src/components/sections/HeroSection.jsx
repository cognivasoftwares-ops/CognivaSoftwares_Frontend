import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'framer-motion';
import infinityImg from '../../assets/images/infinity-lifecycle.png';

const metrics = [
  {
    icon: Briefcase,
    value: '25+',
    label: 'Projects Delivered',
    color: 'sky',
    // Oscillates towards card 2, then recoils left
    xAnimation: [0, 22, -18, 0],
    rotateAnimation: [0, 2, -2, 0],
    delay: 0,
    theme: {
      card: 'bg-white/95 border-sky-200/80 shadow-sky-500/10 hover:border-sky-400',
      iconBox: 'bg-sky-50 text-sky-600',
      node: 'border-sky-400 bg-sky-500 shadow-sky-400/50'
    }
  },
  {
    icon: Users,
    value: '4+',
    label: 'Years Experience',
    color: 'blue',
    // Oscillates towards card 1 and 3 (head-on rebound simulation)
    xAnimation: [0, -22, 20, 0],
    rotateAnimation: [0, -2.5, 2, 0],
    delay: 0.25,
    theme: {
      card: 'bg-white/95 border-blue-200/80 shadow-blue-500/10 hover:border-blue-400',
      iconBox: 'bg-blue-50 text-blue-600',
      node: 'border-blue-400 bg-blue-500 shadow-blue-400/50'
    }
  },
  {
    icon: Sparkles,
    value: 'End-to-End',
    label: 'Full-Stack Delivery',
    color: 'indigo',
    // Oscillates inward towards card 2 and 4
    xAnimation: [0, 20, -22, 0],
    rotateAnimation: [0, 2, -2.5, 0],
    delay: 0.15,
    theme: {
      card: 'bg-white/95 border-indigo-200/80 shadow-indigo-500/10 hover:border-indigo-400',
      iconBox: 'bg-indigo-50 text-indigo-600',
      node: 'border-indigo-400 bg-indigo-500 shadow-indigo-400/50'
    }
  },
  {
    icon: CheckCircle2,
    value: '100%',
    label: 'Delivery Success',
    color: 'emerald',
    // Recoils against card 3
    xAnimation: [0, -18, 22, 0],
    rotateAnimation: [0, -2, 2, 0],
    delay: 0.4,
    theme: {
      card: 'bg-white/95 border-emerald-200/80 shadow-emerald-500/10 hover:border-emerald-400',
      iconBox: 'bg-emerald-50 text-emerald-600',
      node: 'border-emerald-400 bg-emerald-500 shadow-emerald-400/50'
    }
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white pt-8 pb-20">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 right-8 h-[450px] w-[450px] rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column: Hero Copy & CTA */}
          <div className="z-10 lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-1.5 text-xs font-bold tracking-widest text-sky-700 uppercase shadow-xs backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              BUILD • SCALE • GROW
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-[52px] lg:leading-[1.12]">
              We Turn Ideas Into <br />
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Solutions
              </span> <br />
              That Move Forward.
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
              We design, develop and deliver reliable web, mobile and business software
              that simplify workflows, solve real problems and create measurable value.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-700 hover:shadow-sky-500/35"
              >
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="rounded-xl border border-slate-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs backdrop-blur transition hover:bg-slate-50"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Infinity Graphic */}
          <div className="relative flex items-center justify-center lg:col-span-7">
            <div className="relative w-full max-w-[650px] transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={infinityImg}
                alt="Cogniva Digital Solutions - Software Development Lifecycle"
                className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(2,132,199,0.20)]"
                loading="eager"
              />
            </div>
          </div>

        </div>

        {/* Dynamic Metric Boxes Flowing on Straight Connecting Line */}
        <div className="relative mt-20 pt-6">
          
          {/* Central Straight Connecting Line (Guide Rail) */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-300 to-transparent sm:via-slate-300" />
          
          {/* Laser Pulse along the wire */}
          <motion.div 
            animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 h-[3px] w-32 -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-[1px]"
          />

          {/* Grid of 4 Separate Floating Metric Boxes */}
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  animate={{ 
                    x: item.xAnimation,
                    rotate: item.rotateAnimation
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: [0.45, 0.05, 0.55, 0.95], // Elastic swing & rebound curve
                    delay: item.delay
                  }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  {/* Central Axis Alignment Anchor Pin */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full border-2 bg-white shadow-xs ${item.theme.node} pointer-events-none -z-10`} />

                  {/* Individual Metric Card */}
                  <div className={`flex w-full items-center gap-4 rounded-2xl border p-5 shadow-lg backdrop-blur-md transition-shadow duration-300 ${item.theme.card}`}>
                    <div className={`rounded-xl p-3 shadow-inner ${item.theme.iconBox}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black tracking-tight text-slate-900">
                        {item.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-500">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}