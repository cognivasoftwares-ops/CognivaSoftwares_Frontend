import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import infinityImg from '../../assets/images/infinity-lifecycle.png';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white pt-8 pb-16">
      
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

          {/* Right Column: High-Res 3D Infinity Graphic */}
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

        {/* Bottom Metrics Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur-sm sm:grid-cols-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-sky-50 p-2.5 text-sky-600">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-black text-slate-900">25+</div>
              <div className="text-xs text-slate-500">Projects Delivered</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-black text-slate-900">4+</div>
              <div className="text-xs text-slate-500">Years Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-black text-slate-900">End-to-End</div>
              <div className="text-xs text-slate-500">Full-Stack Delivery</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-black text-slate-900">100%</div>
              <div className="text-xs text-slate-500">Delivery Success</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}