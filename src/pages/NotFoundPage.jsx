import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-24">
      <div className="text-center">
        <span className="text-6xl font-black tracking-tight text-slate-200">404</span>
        <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
          The page you're looking for doesn't exist or may have moved.
        </p>
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
