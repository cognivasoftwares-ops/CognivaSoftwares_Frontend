import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        
        {/* Replace the placeholder div with <AboutPage /> */}
        <Route path="about" element={<AboutPage />} />

        <Route path="services" element={<div className="p-16 text-center text-slate-400">Services Page Coming Soon</div>} />
        <Route path="services/:slug" element={<div className="p-16 text-center text-slate-400">Service Detail Page</div>} />
        <Route path="portfolio" element={<div className="p-16 text-center text-slate-400">Portfolio Page Coming Soon</div>} />
        <Route path="contact" element={<div className="p-16 text-center text-slate-400">Contact Page Coming Soon</div>} />
        <Route path="*" element={<div className="p-16 text-center text-slate-400">404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}