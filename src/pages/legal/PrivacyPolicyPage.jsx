import React from 'react';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We may collect basic contact information you provide through our forms — such as your name, email address, phone number and company — along with technical information like browser type and pages visited, used to improve our website and services.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use the information you share with us to respond to inquiries, provide quotes, deliver our services, and occasionally share relevant updates. We do not sell your personal information to third parties.',
  },
  {
    title: '3. Cookies & Tracking',
    body: 'Our website may use cookies and similar technologies to remember preferences and understand how visitors use our site. You can disable cookies through your browser settings at any time.',
  },
  {
    title: '4. Data Security',
    body: 'We apply reasonable technical and organizational safeguards to protect the information you share with us. No method of transmission over the internet is completely secure, but we work to protect your data at every stage.',
  },
  {
    title: '5. Third-Party Services',
    body: 'We may use trusted third-party tools for analytics, hosting and communication. These providers only access the information necessary to perform their services and are bound by confidentiality obligations.',
  },
  {
    title: '6. Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal information at any time by contacting us directly using the details on our Contact page.',
  },
  {
    title: '7. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="inline-block rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-700 ring-1 ring-inset ring-sky-700/10">
            Legal
          </span>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-10 px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            This Privacy Policy describes how Cogniva Softwares ("we", "us") collects, uses and protects information
            when you visit our website or engage our services. This is placeholder content for demonstration
            purposes and should be replaced with a policy reviewed by legal counsel before going live.
          </p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
