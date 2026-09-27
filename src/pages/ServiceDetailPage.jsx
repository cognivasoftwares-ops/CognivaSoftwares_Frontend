import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Code2,
  Building2,
  Palette,
  Cloud,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { services, engagementProcess } from '../data/services';

const iconMap = { Globe, Smartphone, Code2, Building2, Palette, Cloud };

const accentMap = {
  sky: { bg: 'bg-sky-50', text: 'text-sky-600', dot: 'bg-sky-500', ring: 'ring-sky-600/10', tag: 'bg-sky-50 text-sky-700', solid: 'bg-sky-600 hover:bg-sky-700 shadow-sky-500/25' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', dot: 'bg-violet-500', ring: 'ring-violet-600/10', tag: 'bg-violet-50 text-violet-700', solid: 'bg-violet-600 hover:bg-violet-700 shadow-violet-500/25' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', dot: 'bg-indigo-500', ring: 'ring-indigo-600/10', tag: 'bg-indigo-50 text-indigo-700', solid: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/25' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-500', ring: 'ring-emerald-600/10', tag: 'bg-emerald-50 text-emerald-700', solid: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/25' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', dot: 'bg-rose-500', ring: 'ring-rose-600/10', tag: 'bg-rose-50 text-rose-700', solid: 'bg-rose-600 hover:bg-rose-700 shadow-rose-500/25' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-500', ring: 'ring-amber-600/10', tag: 'bg-amber-50 text-amber-700', solid: 'bg-amber-600 hover:bg-amber-700 shadow-amber-500/25' },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.icon];
  const theme = accentMap[service.accent];
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-20">
        <div className={`pointer-events-none absolute -top-24 right-1/4 h-[420px] w-[420px] rounded-full ${theme.bg} blur-[120px]`} />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 flex items-center gap-4"
          >
            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.bg} ${theme.text} ring-1 ring-inset ${theme.ring}`}>
              <Icon className="h-7 w-7" />
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">{service.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg transition ${theme.solid}`}
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              See Related Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">What's Included</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Highlights of This Service
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {service.highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-5"
              >
                <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${theme.text}`} />
                <div>
                  <div className="text-sm font-bold text-slate-900">{h.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{h.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack + Ideal for */}
      <section className="border-t border-slate-100 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Technology Stack</span>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.techStack.map((tag) => (
                <span key={tag} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${theme.tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Ideal For</span>
            <ul className="mt-5 space-y-2.5">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Our Process</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How We Deliver This Service
          </h2>

          <div className="mt-10 flex flex-col gap-6">
            {engagementProcess.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-mono text-xs font-bold text-white">
                  0{i + 1}
                </span>
                <div>
                  <div className="text-sm font-bold text-slate-900">{step.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Explore More</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Other Services</h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otherServices.map((s) => {
              const OtherIcon = iconMap[s.icon];
              const otherTheme = accentMap[s.accent];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${otherTheme.bg} ${otherTheme.text}`}>
                    <OtherIcon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 text-sm font-bold text-slate-900">{s.title}</div>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-slate-900">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to talk about your {service.title.toLowerCase()} project?
          </h2>
          <div className="mt-6">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition ${theme.solid}`}
            >
              Talk to Our Engineers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
