import React from 'react';
import { ArrowRight, Globe, Smartphone, Code, ShieldCheck, Palette, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    desc: 'Scalable, modern web apps built with Spring Boot and React tailored to business workflows.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'High-performance native iOS & Android applications and cross-platform solutions.',
  },
  {
    icon: Code,
    title: 'Custom Software Engineering',
    desc: 'Bespoke enterprise applications designed to eliminate manual bottlenecks and scale operations.',
  },
  {
    icon: ShieldCheck,
    title: 'E-Governance Solutions',
    desc: 'Secure citizen-facing portals, administrative dashboards, and public sector platforms.',
  },
  {
    icon: Palette,
    title: 'UI/UX & Product Design',
    desc: 'User-centric wireframes, rapid interactive prototypes, and modern design systems.',
  },
  {
    icon: Cloud,
    title: 'Cloud DevOps & Migration',
    desc: 'Dockerized microservices, automated CI/CD pipelines, and managed cloud infrastructure.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700 ring-1 ring-inset ring-sky-700/10">
              <span className="h-2 w-2 rounded-full bg-sky-600 animate-pulse" />
              Empowering Digital Transformation
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              We Turn Ideas Into Powerful <br />
              <span className="text-sky-600">Digital Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We deliver custom web, mobile, and enterprise cloud applications tailored to your business needs. Scalable, secure, and production-ready.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-sky-700 transition"
              >
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div>
                <div className="text-2xl font-bold text-slate-900">100+</div>
                <div className="text-xs text-slate-500">Solutions Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-xs text-slate-500">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">99%</div>
                <div className="text-xs text-slate-500">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Our Expertise</span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Reliable IT Services For Growing Businesses
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              From modern web systems to enterprise e-governance, we turn complex challenges into scalable digital solutions.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-sky-50 p-3 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.desc}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-sky-600 group-hover:text-sky-700">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}