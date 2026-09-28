import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Globe,
  MessageCircle,
  Rss,
  AlertCircle,
} from 'lucide-react';
import { submitContactEnquiry } from '../api/cogniva';
import { parseApiError } from '../api/client';

const contactDetails = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 7898588846',
    hint: 'Mon - Sat, 9:30 AM - 6:30 PM',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'cognivasoftwares@gmail.com',
    hint: 'We reply within one business day',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '108, Tech Park Avenue, Whitefield',
    hint: 'Bengaluru, Karnataka 560066',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sat: 9:30 AM - 6:30 PM',
    hint: 'Sunday: Closed',
  },
];

const projectTypes = [
  'Web Development',
  'Mobile App Development',
  'Custom Software',
  'Enterprise Solutions',
  'UI/UX Design',
  'Cloud & DevOps',
  'Something Else',
];

const faqs = [
  {
    q: 'What does a typical engagement timeline look like?',
    a: 'Most projects kick off with a 1-2 week discovery phase, followed by iterative build cycles. A focused MVP can ship in 6-10 weeks, while larger platform engagements run longer and are scoped in phases.',
  },
  {
    q: 'Do you sign an NDA before we share project details?',
    a: 'Yes. We are happy to sign your NDA, or share ours, before any detailed discussion of your product, data or roadmap.',
  },
  {
    q: 'What does your pricing model look like?',
    a: 'We offer both fixed-scope pricing for well-defined projects and dedicated team / time-and-materials engagements for ongoing product work. We will recommend the right model after understanding your goals.',
  },
  {
    q: 'Do you work with early-stage startups as well as enterprises?',
    a: 'Both. We regularly partner with early-stage teams to ship an MVP quickly, and with larger organizations on modernization and scaling efforts.',
  },
];

function fieldClasses() {
  return 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10';
}

function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-sky-200/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-[380px] w-[380px] rounded-full bg-indigo-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-700 ring-1 ring-inset ring-sky-700/10"
        >
          Get In Touch
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
        >
          Let's Build Something Great Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          Tell us about your product, your team, or the problem you're trying to solve. We'll get back to you with next
          steps, not a generic sales pitch.
        </motion.p>
      </div>
    </section>
  );
}

function ContactInfoCards() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <item.icon className="h-5 w-5" />
              </span>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</div>
              <div className="mt-1 text-sm font-bold text-slate-900">{item.value}</div>
              <div className="mt-1 text-xs text-slate-500">{item.hint}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  message: '',
  website: '', // honeypot - hidden from real users
};

function FieldError({ message }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-rose-600">{message}</p>;
}

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setFieldErrors({});
    try {
      await submitContactEnquiry({
        ...form,
        phone: form.phone.trim() || null,
        company: form.company.trim() || null,
      });
      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      const parsed = parseApiError(err);
      setError(parsed.message);
      setFieldErrors(parsed.fieldErrors);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle2 className="h-16 w-16 text-emerald-500" />
        </motion.div>
        <h3 className="mt-6 text-xl font-bold text-slate-900">Message sent successfully</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
          Thanks for reaching out — one of our engineers will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-bold text-sky-600 hover:text-sky-700"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10"
    >
      <h2 className="text-2xl font-black tracking-tight text-slate-900">Start a Conversation</h2>
      <p className="mt-2 text-sm text-slate-500">Fill in a few details and we'll take it from there.</p>

      {error && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Honeypot: visually hidden, bots tend to fill every field */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={updateField} />
        </label>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">Full Name</label>
          <input id="fullName" name="fullName" required maxLength={120} type="text" placeholder="Jane Doe" value={form.fullName} onChange={updateField} className={fieldClasses()} />
          <FieldError message={fieldErrors.fullName} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">Work Email</label>
          <input id="email" name="email" required maxLength={160} type="email" placeholder="jane@company.com" value={form.email} onChange={updateField} className={fieldClasses()} />
          <FieldError message={fieldErrors.email} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">Phone Number</label>
          <input id="phone" name="phone" maxLength={30} type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={updateField} className={fieldClasses()} />
          <FieldError message={fieldErrors.phone} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">Company</label>
          <input id="company" name="company" maxLength={160} type="text" placeholder="Company name" value={form.company} onChange={updateField} className={fieldClasses()} />
          <FieldError message={fieldErrors.company} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="projectType" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">Project Type</label>
          <div className="relative">
            <select id="projectType" name="projectType" required value={form.projectType} onChange={updateField} className={`${fieldClasses()} appearance-none pr-10`}>
              <option value="" disabled>
                Select a project type
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
          <FieldError message={fieldErrors.projectType} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="What are you building, and what problem are you trying to solve?"
            value={form.message}
            onChange={updateField}
            className={fieldClasses()}
          />
          <FieldError message={fieldErrors.message} />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-700 disabled:opacity-70 sm:w-auto"
      >
        {submitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </motion.button>
    </form>
  );
}

function ContactSidePanel() {
  const socials = [
    { icon: Globe, label: 'Website' },
    { icon: MessageCircle, label: 'Chat' },
    { icon: Rss, label: 'Blog' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-slate-900 p-8 text-white sm:p-10"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />

      <div className="relative z-10">
        <h3 className="text-xl font-bold">Prefer to talk directly?</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Book a free 30-minute call with our engineering team to walk through your requirements — no sales script,
          just a technical conversation.
        </p>

        <a
          href="#contact-form"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Schedule a Call
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
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
            Whitefield, Bengaluru
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href="#"
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-sky-400/40 hover:text-sky-400"
          >
            <social.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

function ContactFormSection() {
  return (
    <section id="contact-form" className="pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
          <div className="lg:col-span-5">
            <ContactSidePanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="text-sm font-bold text-slate-900 sm:text-base">{item.q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
          <ChevronDown className="h-5 w-5 text-slate-400" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-t border-slate-100 bg-slate-50/60 py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <ContactFAQ />
    </div>
  );
}
