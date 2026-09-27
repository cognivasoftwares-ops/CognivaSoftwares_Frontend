import React, { useState } from 'react';
import { ArrowRight, Quote, Mail, Phone, MapPin } from 'lucide-react';
import ProjectShowcase from '../components/portfolio/ProjectShowcase';

const testimonials = [
  {
    quote:
      'This space is reserved for a real client testimonial about working with Cogniva Softwares — add verified feedback here once available.',
    role: 'Engineering Lead · Enterprise Software Partner',
  },
  {
    quote:
      'This space is reserved for a real client testimonial about a specific engagement outcome — replace with an actual quote once available.',
    role: 'Operations Director · Supply Chain Partner',
  },
  {
    quote:
      'This space is reserved for a real client testimonial about reliability or delivery speed — replace with an actual quote once available.',
    role: 'Product Owner · FinTech Partner',
  },
];

function ContactBanner() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 rounded-[32px] bg-slate-900 p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a Complex Technology Challenge?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Tell us what you're building, what you're trying to improve, or where your current system is struggling.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-400">
                  <Mail className="h-4 w-4" />
                </span>
                cognivasoftwares@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-400">
                  <Phone className="h-4 w-4" />
                </span>
                +91 7898588846
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-400">
                  <MapPin className="h-4 w-4" />
                </span>
                [Business Location]
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <p className="text-lg font-semibold text-white">Thanks — we'll be in touch shortly.</p>
                <p className="mt-2 text-sm text-slate-400">We usually respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Work Email"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Project Type"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none sm:col-span-2"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-700 sm:col-span-2"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-700 ring-1 ring-inset ring-sky-700/10">
            Our Work
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Selected Engineering Work
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Real-world engineering challenges, thoughtfully designed systems and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Testimonials */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Client Feedback</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What Engineering Leaders Say
            </h2>
            <p className="mt-2 text-xs text-slate-400">
              Testimonials shown are illustrative placeholders pending verified client feedback.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <Quote className="h-7 w-7 text-sky-200" />
                <p className="mt-4 text-sm italic leading-relaxed text-slate-600">{t.quote}</p>
                <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactBanner />
    </div>
  );
}
