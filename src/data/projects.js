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
