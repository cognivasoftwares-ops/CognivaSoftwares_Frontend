import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { title: 'Web Development', desc: 'Custom portals, React & full-stack apps', path: '/services/web-development' },
    { title: 'Mobile App Development', desc: 'Native & cross-platform iOS/Android', path: '/services/mobile-app-development' },
    { title: 'Custom Software', desc: 'Enterprise business logic & automations', path: '/services/custom-software' },
    { title: 'Enterprise Solutions', desc: 'ERP, CRM, and cloud integrations', path: '/services/enterprise-solutions' },
    { title: 'UI/UX Design', desc: 'Modern interfaces and product prototyping', path: '/services/ui-ux-design' },
    { title: 'Cloud & DevOps', desc: 'CI/CD pipelines, Docker & AWS hosting', path: '/services/cloud-devops' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Info Bar */}
      <div className="hidden bg-slate-900 px-6 py-2 text-xs text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-sky-400" /> +91 7898588846
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-sky-400" /> cognivasoftwares@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-sky-400" /> Mon - Sat: 9:30 AM - 6:30 PM
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
          Cogniva Softwares<span className="text-sky-600">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link to="/" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition">
            About
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-sky-600 transition">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute -left-10 top-full w-80 rounded-xl border border-slate-100 bg-white p-3 shadow-xl">
                {services.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="block rounded-lg p-2.5 hover:bg-slate-50 transition"
                  >
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/portfolio" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition">
            Portfolio
          </Link>
          <Link to="/contact" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-slate-700 md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-800">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-800">About</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-800">Services</Link>
            <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-800">Portfolio</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-800">Contact</Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 block w-full rounded-lg bg-sky-600 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}