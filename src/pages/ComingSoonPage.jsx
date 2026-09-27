import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function ComingSoonPage({ title = 'Coming Soon', description = "We're working on this page. Check back soon." }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-24">
      <div className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-inset ring-sky-600/10">
          <Sparkles className="h-6 w-6" />
        </span>
        <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">{description}</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
