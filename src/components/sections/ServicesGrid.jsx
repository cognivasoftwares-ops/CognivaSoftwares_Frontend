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
import { motion } from 'framer-motion';

const services = [
  {
    slug: 'web-development',
    icon: Globe,
    title: 'Web Application Development',
    desc: 'Scalable, responsive web portals built with React, Spring Boot, and modern cloud microservices architecture.',
    tags: ['React', 'Spring Boot', 'Next.js'],
    theme: {
      cardBg: 'bg-slate-900/80 hover:bg-slate-900',
      border: 'border-sky-500/20 hover:border-sky-400/60',
      iconBox: 'bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/30',
      title: 'text-white',
      text: 'text-slate-400',
      tag: 'bg-sky-950/60 text-sky-300 border-sky-800/40',
      action: 'text-sky-400 hover:text-sky-300',
      glow: 'hover:shadow-[0_0_30px_rgba(14,165,233,0.18)]',
      divider: 'border-slate-800'
    }
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'High-performance native iOS & Android applications and unified cross-platform Flutter solutions.',
    tags: ['Flutter', 'React Native', 'Swift'],
    theme: {
      cardBg: 'bg-slate-900/80 hover:bg-slate-900',
      border: 'border-violet-500/20 hover:border-violet-400/60',
      iconBox: 'bg-violet-500/15 text-violet-400 ring-1 ring-violet-500/30',
      title: 'text-white',
      text: 'text-slate-400',
      tag: 'bg-violet-950/60 text-violet-300 border-violet-800/40',
      action: 'text-violet-400 hover:text-violet-300',
      glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]',
      divider: 'border-slate-800'
    }
  },
  {
    slug: 'custom-software',
    icon: Code2,
    title: 'Custom Software Engineering',
    desc: 'Bespoke enterprise backends, automated workflow engines, and complex third-party system integrations.',
    tags: ['Java', 'REST APIs', 'PostgreSQL'],
    theme: {
      cardBg: 'bg-slate-900/80 hover:bg-slate-900',
      border: 'border-indigo-500/20 hover:border-indigo-400/60',
      iconBox: 'bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/30',
      title: 'text-white',
      text: 'text-slate-400',
      tag: 'bg-indigo-950/60 text-indigo-300 border-indigo-800/40',
      action: 'text-indigo-400 hover:text-indigo-300',
      glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.18)]',
      divider: 'border-slate-800'
    }
  },
  {
    slug: 'enterprise-solutions',
    icon: ShieldCheck,
    title: 'Enterprise Solutions',
    desc: 'ERP and CRM implementation, legacy modernization, and secure enterprise-grade platforms for large organizations.',
    tags: ['ERP', 'CRM', 'Compliance'],
    theme: {
      cardBg: 'bg-slate-900/80 hover:bg-slate-900',
      border: 'border-emerald-500/20 hover:border-emerald-400/60',
      iconBox: 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
      title: 'text-white',
      text: 'text-slate-400',
      tag: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40',
      action: 'text-emerald-400 hover:text-emerald-300',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]',
      divider: 'border-slate-800'
    }
  },
  {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX & Product Design',
    desc: 'Research-backed user interfaces, rapid interactive prototypes, design systems, and conversion-focused UX.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    theme: {
      cardBg: 'bg-slate-900/80 hover:bg-slate-900',
      border: 'border-rose-500/20 hover:border-rose-400/60',
      iconBox: 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30',
      title: 'text-white',
      text: 'text-slate-400',
      tag: 'bg-rose-950/60 text-rose-300 border-rose-800/40',
      action: 'text-rose-400 hover:text-rose-300',
      glow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.18)]',
      divider: 'border-slate-800'
    }
  },
  {
    slug: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud DevOps & Infrastructure',
    desc: 'Automated CI/CD pipelines, containerization with Docker & Kubernetes, and scalable AWS cloud hosting.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    theme: {
      cardBg: 'bg-slate-900/80 hover:bg-slate-900',
      border: 'border-amber-500/20 hover:border-amber-400/60',
      iconBox: 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
      title: 'text-white',
      text: 'text-slate-400',
      tag: 'bg-amber-950/60 text-amber-300 border-amber-800/40',
      action: 'text-amber-400 hover:text-amber-300',
      glow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]',
      divider: 'border-slate-800'
    }
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 [perspective:1200px]">
      {/* Background Soft Glow Orbs */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-96 w-[750px] rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header with Soft Fade Down */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/50 px-4 py-1.5 text-xs font-bold tracking-widest text-sky-400 uppercase backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
            Our Core Competencies
          </div>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Software Solutions Built to <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Empower Your Enterprise
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            We deliver reliable end-to-end technology services designed to eliminate operational friction and accelerate measurable business results.
          </p>
        </motion.div>

        {/* 6 Colored Cards Grid with 3D Spring Tilt Animation */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const t = service.theme;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.94, rotateX: 18 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: 'spring',
                  stiffness: 90,
                  damping: 15,
                  mass: 0.8,
                  delay: index * 0.08,
                }}
                className={`group relative flex flex-col justify-between rounded-3xl border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2.5 ${t.cardBg} ${t.border} ${t.glow}`}
              >
                <div>
                  {/* Top Row: Colored Icon + Watermark Number */}
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex rounded-2xl p-3.5 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${t.iconBox}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-800 transition-colors duration-300 group-hover:text-slate-700">
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
                        className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold ${t.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className={`mt-8 border-t pt-5 ${t.divider}`}>
                  <Link
                    to={`/services/${service.slug}`}
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${t.action}`}
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}