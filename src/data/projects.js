export const projects = [
  {
    slug: 'enterprise-cloud-microservices-platform',
    title: 'Enterprise Cloud & Microservices Platform',
    industry: 'Enterprise Software / SaaS',
    scope: 'Legacy modernization, microservices architecture, API engineering, cloud infrastructure, CI/CD',
    description:
      'Decomposing a monolithic enterprise platform into scalable, independently deployable services with automated, zero-downtime releases.',
    tags: ['Java / Spring Boot', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL'],
    accent: 'blue',
    summary: 'Turning a slow-moving monolith into an independently deployable microservices platform.',
    challenge:
      'A growing SaaS platform had outgrown its monolithic architecture. Deployments were slow and risky, and scaling individual parts of the system independently was not possible, limiting the pace of new feature delivery.',
    approach:
      'We audited the existing domain boundaries, mapped out a phased decomposition plan, and prioritized the highest-friction modules first — favoring incremental migration over a risky full rewrite.',
    solution: [
      'Decomposed the monolith into domain-driven microservices with clear ownership boundaries',
      'Introduced containerized deployments with orchestrated rollouts',
      'Built automated CI/CD pipelines for independent service releases',
      'Established shared API contracts and versioning standards across services',
    ],
  },
  {
    slug: 'warehouse-fleet-tracking-platform',
    title: 'Warehouse & Fleet Tracking Platform',
    industry: 'Supply Chain & Transportation',
    scope: 'Real-time tracking, high-concurrency systems, data ingestion, dashboards, database optimization',
    description:
      'A real-time visibility layer for warehouse operations and in-transit fleet assets, built to hold up under high-concurrency load.',
    tags: ['Node.js / TypeScript', 'Redis', 'PostgreSQL', 'AWS'],
    accent: 'emerald',
    summary: 'A real-time visibility layer connecting warehouse operations and in-transit fleet assets.',
    challenge:
      'Dispatch and inventory status relied on manual updates, creating visibility gaps between warehouse operations and field activity, and the existing dashboards struggled under concurrent load from many simultaneous location updates.',
    approach:
      'We designed a high-concurrency ingestion pipeline first, then layered real-time dashboards on top, validating performance under simulated peak load before rollout.',
    solution: [
      'Built a high-throughput ingestion pipeline for continuous location and status updates',
      'Delivered a real-time operations dashboard with live status and alerting',
      'Optimized database indexing and partitioning to remove contention under load',
      'Added anomaly detection for delayed or missing status updates',
    ],
  },
  {
    slug: 'b2b-payment-compliance-platform',
    title: 'B2B Payment & Compliance Platform',
    industry: 'FinTech / Business Payments',
    scope: 'Payment orchestration, secure APIs, event-driven architecture, audit automation, transaction reliability',
    description:
      'A resilient payment orchestration layer built around strict idempotency guarantees and full audit traceability.',
    tags: ['Java / Spring Boot', 'Kafka', 'PostgreSQL', 'AWS'],
    accent: 'amber',
    summary: 'A resilient payment orchestration layer built for auditability and transaction integrity.',
    challenge:
      'The client needed to support growing merchant volume while meeting strict audit and compliance requirements, and their existing settlement flow was vulnerable to duplicate charges when network calls failed mid-transaction.',
    approach:
      'We treated idempotency and auditability as first-class architectural requirements from the outset, rather than retrofitting them after launch.',
    solution: [
      'Re-architected payment workflows around strict idempotency guarantees',
      'Introduced event-driven processing with full transaction traceability',
      'Automated audit trail generation for compliance reporting',
      'Added encryption-at-rest and access controls across payment data paths',
    ],
  },
  {
    slug: 'business-operations-automation-platform',
    title: 'Business Operations Automation Platform',
    industry: 'Business Operations',
    scope: 'Workflow automation, role-based systems, reporting, integrations, process optimization',
    description:
      'Replacing manual, spreadsheet-driven operations workflows with a role-based automation platform and live reporting.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
    accent: 'indigo',
    summary: 'Replacing manual, spreadsheet-driven workflows with a role-based automation platform.',
    challenge:
      'Core operational workflows were spread across spreadsheets and email approvals, making status tracking, reporting and accountability difficult as the business scaled.',
    approach:
      'We mapped the existing workflows end-to-end with the operations team, then redesigned them as structured, role-based digital processes rather than a direct one-to-one digitization.',
    solution: [
      'Built role-based workflow and approval routing',
      'Replaced manual reporting with automated, real-time dashboards',
      'Integrated existing internal tools through a unified API layer',
      'Added audit logging across all workflow state changes',
    ],
  },
  {
    slug: 'oness-infra-construction-platform',
    title: 'Oness Infra — Construction & Infrastructure Platform',
    industry: 'Construction & Infrastructure',
    scope: 'Corporate website, project & service management, enquiry system, CMS, careers, blog',
    description:
      'A corporate construction platform showcasing projects, services and certifications, built on a content-managed MERN stack.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    accent: 'sky',
    liveUrl: 'https://onessinfra.com',
    stat1: { value: '500+', label: 'Projects Showcased' },
    stat2: { value: 'React + Node', label: 'Core Stack' },
    summary: 'A corporate construction platform presenting projects and services with a structured, CMS-driven enquiry pipeline.',
    challenge:
      'Oness Infra needed a single, credible digital presence to showcase a large project portfolio, certifications and multiple construction segments — building, industrial, residential and real estate — while giving the business team a simple way to manage projects and enquiries without engineering support.',
    approach:
      'We built the platform around a content-managed core so non-technical staff could update projects, services and news independently, then layered a structured enquiry flow on top so every lead captured the service type and location needed to route it correctly.',
    solution: [
      'Built a CMS-driven project and service catalog covering all four construction segments',
      'Implemented a structured enquiry flow capturing service type, location and contact details',
      'Delivered an admin panel for managing projects, careers, blog/news and testimonials',
      'Added authentication-gated CRM access for the internal business team',
    ],
  },
  {
    slug: 'yatraa-kavach-travel-insurance-platform',
    title: 'Yatraa Kavach — Travel Insurance Platform',
    industry: 'Travel Insurance / InsurTech',
    scope: 'Multi-step quote flow, plan comparison, policy management, customer data, payment-ready architecture',
    description:
      'A travel insurance platform guiding customers from destination selection through plan comparison to policy issuance.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    accent: 'violet',
    liveUrl: 'https://yatraakavach.com',
    stat1: { value: '24x7', label: 'Global Assistance' },
    stat2: { value: 'IRDAI Ready', label: 'Compliance' },
    summary: 'A travel insurance platform turning a multi-variable decision into a guided, side-by-side plan comparison.',
    challenge:
      'Travel insurance decisions involve many moving parts — destination, trip dates, traveller details and plan coverage — and the client needed a guided flow that made comparing plans simple instead of overwhelming, while capturing accurate traveller data for policy generation.',
    approach:
      'We broke the insurance journey into a validated multi-step flow, kept plan comparison visual and side-by-side, and structured the data model so policies, quotes and traveller records stayed cleanly separated for future claims handling.',
    solution: [
      'Built a multi-step quote flow covering destination, trip dates and traveller details',
      'Delivered side-by-side plan comparison across providers, coverage and premiums',
      'Structured policy, quote and traveller data for downstream claims handling',
      'Designed the architecture to plug into payment and notification providers',
    ],
  },
  {
    slug: 'the-bridgers-recruitment-platform',
    title: 'The Bridgers — Recruitment & Talent Acquisition Platform',
    industry: 'Recruitment / Talent Acquisition',
    scope: 'Job listings, candidate applications, resume upload, recruiter workflows, applicant tracking',
    description:
      'A recruitment platform connecting organizations with candidates through structured job listings and applicant tracking.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    accent: 'rose',
    liveUrl: 'https://thebridgers.in',
    stat1: { value: 'End-to-End', label: 'Hiring Pipeline' },
    stat2: { value: 'MERN Stack', label: 'Core Stack' },
    summary: 'A recruitment platform replacing email-based hiring coordination with structured applicant tracking.',
    challenge:
      'The client needed to move recruitment off manual, email-based coordination into a structured system — one where job postings, candidate applications and resumes stayed organized, and recruiters could track candidates through every stage without losing visibility.',
    approach:
      'We modeled the recruitment pipeline explicitly, from application through shortlisting, interviews and final decision, and built resume upload and candidate search directly into the recruiter workflow rather than bolting it on afterward.',
    solution: [
      'Built dynamic job listings with search and filtering by role, location and skills',
      'Implemented a candidate application flow with resume upload and confirmation',
      'Delivered recruiter tooling to track candidates through shortlisting and interviews',
      'Added client and recruiter management alongside applicant tracking',
    ],
  },
  {
    slug: 'indore-institute-of-design-education-platform',
    title: 'Indore Institute of Design — Education Platform',
    industry: 'Education / Design Institute',
    scope: 'Course catalog, admissions enquiries, events & workshops, student portfolio gallery, CMS',
    description:
      'An education platform presenting design courses, admissions and student work through a content-managed catalog.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    accent: 'cyan',
    liveUrl: 'https://indoreinstituteofdesign.com',
    stat1: { value: 'Course-Wise', label: 'Admissions Flow' },
    stat2: { value: 'CMS-Driven', label: 'Content Catalog' },
    summary: 'A design-education platform keeping courses, admissions and student work current without developer involvement.',
    challenge:
      'Indore Institute of Design needed to present its course catalog, admissions process and student work in a way that stayed current without constant developer involvement, while making it simple for prospective students to enquire about a specific course.',
    approach:
      'We separated content from structure so courses, events, workshops and student projects could be managed through an admin panel, and kept the admissions enquiry form short and course-specific to reduce drop-off.',
    solution: [
      'Built a dynamic course catalog with eligibility, duration and curriculum detail per course',
      'Implemented course-specific admission enquiry forms',
      'Delivered a CMS for events, workshops, student portfolios and testimonials',
      'Added faculty and facilities content management for the institute team',
    ],
  },
];

export const impactMetrics = [
  { label: 'Reduction in processing time' },
  { label: 'Improvement in system performance' },
  { label: 'Reduction in manual effort' },
  { label: 'Increase in operational efficiency' },
];

export const architectureFlow = [
  'User',
  'Frontend',
  'API Gateway',
  'Backend Services',
  'Database / Cache / Messaging',
  'Cloud Infrastructure',
];
