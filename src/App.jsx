import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<div className="p-16 text-center text-slate-600">About Page Coming Soon</div>} />
          <Route path="services" element={<div className="p-16 text-center text-slate-600">Services Page Coming Soon</div>} />
          <Route path="portfolio" element={<div className="p-16 text-center text-slate-600">Portfolio Page Coming Soon</div>} />
          <Route path="contact" element={<div className="p-16 text-center text-slate-600">Contact Page Coming Soon</div>} />
          <Route path="*" element={<div className="p-16 text-center text-slate-600">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}