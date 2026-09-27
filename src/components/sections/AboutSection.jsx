import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Users2, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const keyPoints = [
  'Enterprise Web & Mobile Architecture',
  'End-to-End Product Lifecycle Support',
  'Cloud-Native Deployments & CI/CD',
  'Transparent Communication & Agile Delivery',
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    desc: 'We engineer software that directly solves operational bottlenecks and accelerates client growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-First',
    desc: 'Robust data integrity and strict architectural compliance embedded into every solution.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    desc: 'Optimized frontend rendering, decoupled microservices, and rapid response times.',
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Accent Gradients */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          
          {/* Left Column: Visual Highlight Box */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-8 text-white shadow-2xl">
              <div className="inline-flex rounded-xl bg-sky-500/20 p-3 text-sky-400 ring-1 ring-sky-500/30">
                <Users2 className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
                Engineering Digital Excellence Since Day One
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                At Cogniva Softwares, we bridge the gap between complex engineering and seamless user experience. We operate as your dedicated technical partner.
              </p>

              <div className="mt-8 space-y-3 border-t border-slate-700/60 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">On-Time Delivery</span>
                  <span className="font-semibold text-sky-400">99.4%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800">
                  <div className="h-1.5 w-[99.4%] rounded-full bg-sky-500" />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm">
                <div>
                  <div className="text-2xl font-black text-white">4+ Years</div>
                  <div className="text-xs text-slate-400">Industry Experience</div>
                </div>
                <div className="h-8 w-px bg-slate-700" />
                <div>
                  <div className="text-2xl font-black text-white">25+</div>
                  <div className="text-xs text-slate-400">Projects Launched</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold tracking-widest text-sky-700 uppercase ring-1 ring-inset ring-sky-700/10">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              We Don't Just Write Code — <br />
              <span className="text-sky-600">We Build Reliable Digital Assets.</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Cogniva Softwares is an enterprise software engineering and consulting firm. We specialize in building secure full-stack applications, scalable APIs, and automated business workflows that empower businesses to operate without technical friction.
            </p>

            {/* Checklist */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {keyPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600" />
                  <span className="text-sm font-medium text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            {/* Core Values 3-Grid */}
            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-3">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                    <Icon className="h-5 w-5 text-sky-600" />
                    <h4 className="mt-2 text-sm font-bold text-slate-900">{v.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{v.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700"
              >
                Learn more about our methodology <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}