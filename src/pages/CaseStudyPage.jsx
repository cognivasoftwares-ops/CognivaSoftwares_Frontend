import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowDown, ExternalLink } from 'lucide-react';
import { impactMetrics, architectureFlow } from '../data/projects';
import { useProjects } from '../hooks/useCatalog';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const { projects, loading } = useProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    // Wait for the API before redirecting, in case this project only exists in the database.
    if (loading) return <div className="min-h-[60vh] bg-white" />;
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {project.summary}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
            >
              Visit Live Site
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          {/* Metadata cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Industry</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{project.industry}</div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Engagement Scope</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{project.scope}</div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Technology Stack</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-sky-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Approach / Solution */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700">The Challenge</span>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{project.challenge}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700">The Approach</span>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{project.approach}</p>
            </div>
          </div>

          <div className="mt-14">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">The Solution</span>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.solution.map((point, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                  <span className="mt-0.5 font-mono text-xs font-bold text-sky-600 shrink-0">0{i + 1}</span>
                  <span className="text-sm leading-relaxed text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Business & Technical Impact</span>
          <p className="mt-2 text-xs text-slate-500">
            Figures shown are illustrative placeholders — verified results are shared on request.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-black text-white">XX%</div>
                <div className="mt-1 text-xs leading-relaxed text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Solution Architecture</span>
          <div className="mt-8 flex flex-col items-center gap-2">
            {architectureFlow.map((step, i) => (
              <React.Fragment key={step}>
                <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-800 shadow-sm">
                  {step}
                </div>
                {i < architectureFlow.length - 1 && <ArrowDown className="h-4 w-4 text-slate-300" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Have a similar challenge?
          </h2>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-700"
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
