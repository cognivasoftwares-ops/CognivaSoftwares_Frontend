import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  GitBranch, 
  Server, 
  Code2, 
  Workflow, 
  RefreshCw, 
  Database,
  ArrowRight,
  ExternalLink, // Replaced missing Linkedin icon
  Calendar,
  CheckCircle2
} from 'lucide-react';

const tenets = [
  {
    icon: Cpu,
    title: 'Architecture-First Mindset',
    desc: 'Scalability is an engineering discipline, not a buzzword. Every service, database schema, and pipeline we design is built for high availability, fault tolerance, and modular evolution.',
    accent: 'border-amber-400/40 text-amber-400 bg-amber-400/10'
  },
  {
    icon: GitBranch,
    title: 'Radical Transparency & Zero Lock-In',
    desc: 'You own 100% of your intellectual property, source code, CI/CD pipelines, and infrastructure configs from day one. You work directly with engineers—not layers of non-technical account managers.',
    accent: 'border-sky-400/40 text-sky-400 bg-sky-400/10'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Reliability by Design',
    desc: "From zero-trust access controls to automated regression and security scanning, enterprise-grade compliance isn't an afterthought bolted on at the end—it's woven into our everyday build pipeline.",
    accent: 'border-emerald-400/40 text-emerald-400 bg-emerald-400/10'
  },
  {
    icon: Zap,
    title: 'Velocity Driven by Clean Code',
    desc: 'Fast delivery does not mean cutting corners. By enforcing strict automated testing, containerized environments, and continuous delivery, we ship faster by minimizing production fires.',
    accent: 'border-indigo-400/40 text-indigo-400 bg-indigo-400/10'
  },
];

const capabilities = [
  {
    icon: Code2,
    area: 'Custom Software & Platforms',
    whatWeBuild: 'Multi-tenant SaaS, internal enterprise portals, high-throughput microservices.',
    techFocus: ['Java / Spring Boot', 'Go', 'Node.js', 'Next.js', 'GraphQL', 'REST APIs']
  },
  {
    icon: Server,
    area: 'Cloud & DevOps Engineering',
    whatWeBuild: 'Automated cloud environments, Kubernetes orchestration, zero-downtime CI/CD.',
    techFocus: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Terraform', 'GitHub Actions']
  },
  {
    icon: RefreshCw,
    area: 'Modernization & Refactoring',
    whatWeBuild: 'Monolith decomposition, legacy code audits, database optimization.',
    techFocus: ['Distributed Event Buses (Kafka/RabbitMQ)', 'Redis Caching', 'DB Sharding']
  },
  {
    icon: Workflow,
    area: 'Data & Systems Integration',
    whatWeBuild: 'Enterprise workflow automation, CRM/ERP synchronization, data pipelines.',
    techFocus: ['Middleware Connectors', 'Event-Driven Pipelines', 'Secure Webhook Gateways']
  },
];

const standards = [
  {
    metric: '99.9%+',
    title: 'Uptime Target',
    desc: 'Designed systems operate with active health monitoring and automated failover routines.'
  },
  {
    metric: 'Sprint 0 → Prod',
    title: 'Cadence-Driven Delivery',
    desc: 'Pragmatic sprint cadences delivering testable, verified software increments every two weeks.'
  },
  {
    metric: '100%',
    title: 'Code Sovereignty',
    desc: 'Clean Git commit histories, automated unit/integration test suites, and thorough architectural documentation.'
  }
];

export default function AboutHub() {
  return (
    <div className="relative min-h-screen bg-[#070b14] text-slate-100 overflow-hidden">
      
      {/* Background Tech Lights */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-[450px] w-[450px] rounded-full bg-amber-400/5 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        
        {/* 1. HERO SECTION */}
        <section className="max-w-4xl pt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold tracking-widest text-amber-400 uppercase">
            ABOUT COGNIVA SOFTWARES
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            Engineering Digital Infrastructure <br />
            <span className="bg-gradient-to-r from-amber-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              That Actually Scales.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-3xl">
            We help high-growth companies and modern enterprises build resilient software, 
            modernize legacy architectures, and ship production-ready systems—without the 
            bureaucracy of traditional IT agencies.
          </p>
        </section>

        {/* 2. THE MISSION & PROBLEM */}
        <section className="mt-24 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8 sm:p-12 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-5 border-l-2 border-amber-400 pl-6">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
                THE FOUNDATIONAL PROBLEM
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl leading-snug">
                Most software initiatives fail not from a lack of talent, but from architectural bloat, broken feedback loops, and misaligned incentives.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              <p>
                <strong className="text-white">Cogniva Softwares</strong> was founded by engineers who grew frustrated watching companies get trapped between rigid legacy consultancies and unreliable freelance talent. We bridge that gap by pairing senior engineering execution with business-first product thinking.
              </p>
              <p>
                We do not simply build features; we build secure, maintainable digital assets that adapt to your growth and eliminate technical debt before it starts.
              </p>
            </div>

          </div>
        </section>

        {/* 3. OUR ENGINEERING TENETS */}
        <section className="mt-28">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              OPERATING PRINCIPLES
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Our Engineering Tenets
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              The non-negotiable architectural standards that govern every service, commit, and deployment we deliver.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {tenets.map((tenet) => {
              const Icon = tenet.icon;
              return (
                <div
                  key={tenet.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70"
                >
                  <div>
                    <div className={`inline-flex rounded-xl border p-3 ${tenet.accent}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                      {tenet.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {tenet.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. WHAT WE DELIVER */}
        <section className="mt-28">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              ENTERPRISE PRACTICE AREAS
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              What We Deliver
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Battle-tested competencies spanning custom product architecture, distributed backends, and cloud DevOps.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70">
            <div className="grid grid-cols-12 border-b border-slate-800/80 bg-slate-900/60 p-4 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
              <div className="col-span-12 md:col-span-3">Practice Area</div>
              <div className="col-span-12 md:col-span-5">What We Build</div>
              <div className="col-span-12 md:col-span-4">Tech & Architectural Focus</div>
            </div>

            <div className="divide-y divide-slate-800/60">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.area} className="grid grid-cols-12 items-center gap-4 p-5 hover:bg-slate-900/30 transition-colors">
                    
                    <div className="col-span-12 md:col-span-3 flex items-center gap-3">
                      <div className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-amber-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-bold text-white">{cap.area}</span>
                    </div>

                    <div className="col-span-12 md:col-span-5 text-xs sm:text-sm text-slate-300">
                      {cap.whatWeBuild}
                    </div>

                    <div className="col-span-12 md:col-span-4 flex flex-wrap gap-1.5">
                      {cap.techFocus.map((tech) => (
                        <span key={tech} className="rounded-md border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-[11px] font-mono text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. METRICS & OPERATING STANDARDS */}
        <section className="mt-28">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              VERIFIABLE RIGOUR
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Metrics & Operating Standards
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {standards.map((st) => (
              <div key={st.title} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm">
                <div className="font-mono text-3xl font-black text-amber-400">
                  {st.metric}
                </div>
                <div className="mt-2 text-base font-bold text-white">
                  {st.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. LEADERSHIP & TECHNICAL TEAM */}
        <section className="mt-28">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              TECHNICAL LEADERSHIP
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Leadership & Technical Team
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              We are a distributed team of systems engineers, solutions architects, and product leads who have designed, deployed, and scaled mission-critical systems.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* CTO Profile */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Engineering Leadership</h3>
                    <p className="text-xs font-mono text-amber-400 mt-0.5">Chief Technology Officer / Co-Founder</p>
                  </div>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400">
                  <strong>Background:</strong> Systems Architect with extensive experience in distributed computing and enterprise backend platforms. Focused on high-concurrency systems, API design, and cloud-native resilience.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-500 font-mono">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                <span>Distributed Systems · Backend Architecture</span>
              </div>
            </div>

            {/* CEO Profile */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Product Strategy & Ops</h3>
                    <p className="text-xs font-mono text-amber-400 mt-0.5">Chief Executive Officer / Co-Founder</p>
                  </div>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400">
                  <strong>Background:</strong> Product strategist and engineering lead with a track record of driving software transformation for modern enterprises. Focused on bridging engineering execution with measurable business ROI.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-500 font-mono">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                <span>Product Engineering · Systems Scalability</span>
              </div>
            </div>

          </div>
        </section>

        {/* 7. NEXT STEP / CALL TO ACTION (CTA) */}
        <section className="mt-28 rounded-3xl border border-amber-400/30 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 backdrop-blur-md shadow-2xl shadow-amber-400/5">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              DIRECT TECHNICAL ENGAGEMENT
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Building something ambitious or fixing a bottleneck?
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
              Skip the sales pitch. Schedule an exploratory call directly with our technical team to review your architecture, performance bottlenecks, or delivery roadmap.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-xl border border-amber-400 bg-amber-400 px-6 py-3.5 text-xs font-bold tracking-widest text-slate-950 uppercase shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300"
              >
                <Calendar className="h-4 w-4" />
                <span>Schedule an Architecture Review</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-xs font-bold tracking-widest text-slate-200 uppercase backdrop-blur transition-all hover:border-slate-500 hover:text-white"
              >
                Explore Our Case Studies
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}