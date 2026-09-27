import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Code2, 
  ShieldCheck, 
  Palette, 
  Cloud, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    desc: 'Scalable, responsive web portals built with React, Spring Boot, and modern cloud microservices architecture.',
    tags: ['React', 'Spring Boot', 'Next.js'],
    theme: {
      cardBg: 'bg-sky-50/70 hover:bg-sky-50',
      border: 'border-sky-200/80 hover:border-sky-400',
      iconBox: 'bg-sky-500 text-white shadow-sky-500/25',
      title: 'text-sky-950',
      text: 'text-sky-900/80',
      tag: 'bg-white/80 text-sky-800 border-sky-200/60',
      action: 'text-sky-700 hover:text-sky-900',
      glow: 'hover:shadow-sky-500/20',
      divider: 'border-sky-200/60'
    }
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'High-performance native iOS & Android applications and unified cross-platform Flutter solutions.',
    tags: ['Flutter', 'React Native', 'Swift'],
    theme: {
      cardBg: 'bg-violet-50/70 hover:bg-violet-50',
      border: 'border-violet-200/80 hover:border-violet-400',
      iconBox: 'bg-violet-600 text-white shadow-violet-500/25',
      title: 'text-violet-950',
      text: 'text-violet-900/80',
      tag: 'bg-white/80 text-violet-800 border-violet-200/60',
      action: 'text-violet-700 hover:text-violet-900',
      glow: 'hover:shadow-violet-500/20',
      divider: 'border-violet-200/60'
    }
  },
  {
    icon: Code2,
    title: 'Custom Software Engineering',
    desc: 'Bespoke enterprise backends, automated workflow engines, and complex third-party system integrations.',
    tags: ['Java', 'REST APIs', 'PostgreSQL'],
    theme: {
      cardBg: 'bg-indigo-50/70 hover:bg-indigo-50',
      border: 'border-indigo-200/80 hover:border-indigo-400',
      iconBox: 'bg-indigo-600 text-white shadow-indigo-500/25',
      title: 'text-indigo-950',
      text: 'text-indigo-900/80',
      tag: 'bg-white/80 text-indigo-800 border-indigo-200/60',
      action: 'text-indigo-700 hover:text-indigo-900',
      glow: 'hover:shadow-indigo-500/20',
      divider: 'border-indigo-200/60'
    }
  },
  {
    icon: ShieldCheck,
    title: 'E-Governance & Public Portals',
    desc: 'Secure citizen services platforms, audit-compliant municipal workflows, and enterprise document systems.',
    tags: ['Security', 'RBAC', 'Compliance'],
    theme: {
      cardBg: 'bg-emerald-50/70 hover:bg-emerald-50',
      border: 'border-emerald-200/80 hover:border-emerald-400',
      iconBox: 'bg-emerald-600 text-white shadow-emerald-500/25',
      title: 'text-emerald-950',
      text: 'text-emerald-900/80',
      tag: 'bg-white/80 text-emerald-800 border-emerald-200/60',
      action: 'text-emerald-700 hover:text-emerald-900',
      glow: 'hover:shadow-emerald-500/20',
      divider: 'border-emerald-200/60'
    }
  },
  {
    icon: Palette,
    title: 'UI/UX & Product Design',
    desc: 'Research-backed user interfaces, rapid interactive prototypes, design systems, and conversion-focused UX.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    theme: {
      cardBg: 'bg-rose-50/70 hover:bg-rose-50',
      border: 'border-rose-200/80 hover:border-rose-400',
      iconBox: 'bg-rose-600 text-white shadow-rose-500/25',
      title: 'text-rose-950',
      text: 'text-rose-900/80',
      tag: 'bg-white/80 text-rose-800 border-rose-200/60',
      action: 'text-rose-700 hover:text-rose-900',
      glow: 'hover:shadow-rose-500/20',
      divider: 'border-rose-200/60'
    }
  },
  {
    icon: Cloud,
    title: 'Cloud DevOps & Infrastructure',
    desc: 'Automated CI/CD pipelines, containerization with Docker & Kubernetes, and scalable AWS cloud hosting.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    theme: {
      cardBg: 'bg-amber-50/70 hover:bg-amber-50',
      border: 'border-amber-200/80 hover:border-amber-400',
      iconBox: 'bg-amber-600 text-white shadow-amber-500/25',
      title: 'text-amber-950',
      text: 'text-amber-900/80',
      tag: 'bg-white/80 text-amber-800 border-amber-200/60',
      action: 'text-amber-700 hover:text-amber-900',
      glow: 'hover:shadow-amber-500/20',
      divider: 'border-amber-200/60'
    }
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Soft Glow Orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-gradient-to-r from-sky-200/30 via-indigo-200/20 to-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-bold tracking-widest text-sky-700 uppercase">
            <Sparkles className="h-3.5 w-3.5 text-sky-600" />
            Our Core Competencies
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Software Solutions Built to <br />
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Empower Your Enterprise
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We deliver reliable end-to-end technology services designed to eliminate operational friction and accelerate measurable business results.
          </p>
        </div>

        {/* 6 Colored Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const t = service.theme;
            return (
              <div
                key={service.title}
                className={`group relative flex flex-col justify-between rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${t.cardBg} ${t.border} ${t.glow}`}
              >
                <div>
                  {/* Top Row: Solid Colored Icon + Watermark Number */}
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex rounded-2xl p-3.5 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${t.iconBox}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-300/70 transition-colors group-hover:text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`mt-6 text-xl font-bold tracking-tight ${t.title}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${t.text}`}>
                    {service.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold shadow-xs ${t.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className={`mt-8 border-t pt-5 ${t.divider}`}>
                  <Link
                    to="/services"
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${t.action}`}
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}