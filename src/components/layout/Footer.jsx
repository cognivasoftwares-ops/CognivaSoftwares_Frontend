import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle, Rss, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
  { label: 'Cookie Policy', path: '/privacy-policy' },
];

const socials = [
  { icon: Globe, label: 'Website' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: Rss, label: 'Blog' },
];

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{title}</h3>
      <div className="mt-5 space-y-3">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-white">
              Cogniva Softwares<span className="text-sky-400">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              We design and build reliable web, mobile and cloud products for startups and enterprises — turning
              complex engineering challenges into scalable, well-crafted software.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-sky-400/40 hover:bg-white/10 hover:text-sky-400"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <FooterColumn title="Quick Links">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </FooterColumn>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <FooterColumn title="Services">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </FooterColumn>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <FooterColumn title="Company">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </FooterColumn>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <FooterColumn title="Contact">
              <a href="tel:+917898588846" className="flex items-start gap-2.5 text-sm text-slate-400 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                +91 7898588846
              </a>
              <a href="mailto:cognivasoftwares@gmail.com" className="flex items-start gap-2.5 text-sm text-slate-400 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                cognivasoftwares@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                108, Tech Park Avenue, Whitefield, Bengaluru, KA 560066
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                Mon - Sat: 9:30 AM - 6:30 PM
              </div>
            </FooterColumn>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-sm font-semibold text-white">Have a project in mind? Let's talk about it.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-400"
          >
            Get a Quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Cogniva Softwares. All rights reserved.</span>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.label} to={link.path} className="transition hover:text-slate-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
