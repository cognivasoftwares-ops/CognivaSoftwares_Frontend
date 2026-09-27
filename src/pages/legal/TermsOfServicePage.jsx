import React from 'react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing this website or engaging Cogniva Softwares for services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.',
  },
  {
    title: '2. Services',
    body: 'Cogniva Softwares provides software engineering services including web development, mobile app development, custom software, enterprise solutions, UI/UX design, and cloud & DevOps consulting. Specific project scope, timelines and deliverables are defined in individual client agreements.',
  },
  {
    title: '3. Intellectual Property',
    body: 'Unless otherwise agreed in writing, all deliverables produced during an engagement are transferred to the client upon full payment. Cogniva Softwares retains the right to reuse general knowledge, frameworks and non-confidential methodologies developed during the engagement.',
  },
  {
    title: '4. Payment Terms',
    body: 'Payment terms are defined per project agreement. Late payments may result in paused work until outstanding invoices are settled.',
  },
  {
    title: '5. Confidentiality',
    body: 'We treat client information, project details and business data as confidential, and are willing to sign a mutual NDA before detailed discussions begin.',
  },
  {
    title: '6. Limitation of Liability',
    body: 'Cogniva Softwares will not be liable for indirect, incidental or consequential damages arising from the use of delivered software, except where required by applicable law.',
  },
  {
    title: '7. Changes to These Terms',
    body: 'We may revise these Terms of Service from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.',
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="inline-block rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-700 ring-1 ring-inset ring-sky-700/10">
            Legal
          </span>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-10 px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            These Terms of Service govern your use of the Cogniva Softwares website and engagement with our
            services. This is placeholder content for demonstration purposes and should be replaced with terms
            reviewed by legal counsel before going live.
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
