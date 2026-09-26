import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 bg-slate-900 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} Cogniva Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}