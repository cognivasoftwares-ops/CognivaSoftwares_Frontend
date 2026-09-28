import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Code2, Building2, Palette, Cloud, ArrowRight } from 'lucide-react';
import { engagementProcess } from '../data/services';
import { useServices } from '../hooks/useCatalog';

const iconMap = { Globe, Smartphone, Code2, Building2, Palette, Cloud };

const accentMap = {
  sky: { bg: 'bg-sky-50', text: 'text-sky-600', dot: 'bg-sky-500', ring: 'ring-sky-600/10', tag: 'bg-sky-50 text-sky-700' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', dot: 'bg-violet-500', ring: 'ring-violet-600/10', tag: 'bg-violet-50 text-violet-700' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', dot: 'bg-indigo-500', ring: 'ring-indigo-600/10', tag: 'bg-indigo-50 text-indigo-700' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-500', ring: 'ring-emerald-600/10', tag: 'bg-emerald-50 text-emerald-700' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', dot: 'bg-rose-500', ring: 'ring-rose-600/10', tag: 'bg-rose-50 text-rose-700' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-500', ring: 'ring-amber-600/10', tag: 'bg-amber-50 text-amber-700' },
};

function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-sky-200/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-[380px] w-[380px] rounded-full bg-violet-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-700 ring-1 ring-inset ring-sky-700/10"
        >
          What We Do
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
        >
          Engineering Services Built Around Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          From web and mobile products to enterprise modernization and cloud infrastructure — we bring the same
          engineering discipline to every engagement, whatever stage you're at.
        </motion.p>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon];
  const theme = accentMap[service.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${theme.bg} ${theme.text} ring-1 ring-inset ${theme.ring}`}>
        <Icon className="h-6 w-6" />
      </span>

      <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{service.title}</h3>
      <p className="mt-2 text-sm font-semibold text-slate-500">{service.tagline}</p>

      <ul className="mt-5 space-y-2">
        {service.highlights.slice(0, 3).map((h) => (
          <li key={h.title} className="flex items-start gap-2 text-sm text-slate-600">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`} />
            <span>{h.title}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {service.techStack.slice(0, 3).map((tag) => (
          <span key={tag} className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${theme.tag}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Link
          to={`/services/${service.slug}`}
          className={`inline-flex items-center gap-2 text-sm font-bold ${theme.text} transition group-hover:gap-3`}
        >
          Explore Service
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function ServicesGridSection() {
  const { services } = useServices();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">How We Work</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Predictable Path From Idea to Launch
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {engagementProcess.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 font-mono text-sm font-bold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] bg-slate-900 px-8 py-14 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-[100px]" />
          <h2 className="relative text-3xl font-black tracking-tight text-white sm:text-4xl">
            Not Sure Which Service Fits?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Tell us what you're building and we'll recommend the right approach — no obligation, no generic pitch.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-700"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesHero />
      <ServicesGridSection />
      <ProcessSection />
      <ServicesCTA />
    </div>
  );
}
