export const services = [
  {
    slug: 'web-development',
    icon: 'Globe',
    accent: 'sky',
    title: 'Web Development',
    tagline: 'Custom portals, React & full-stack apps',
    description:
      'We design and build fast, scalable web applications and business portals — from customer-facing products to internal enterprise dashboards — using modern, battle-tested technology.',
    highlights: [
      {
        title: 'Responsive, accessible interfaces',
        description: 'Interfaces built with React and Tailwind that work smoothly across every device and screen size.',
      },
      {
        title: 'Scalable backend APIs',
        description: 'Robust services in Node.js and Spring Boot designed to handle real production traffic.',
      },
      {
        title: 'Performance-first delivery',
        description: 'Server-side rendering, caching and code-splitting where it actually moves the needle.',
      },
      {
        title: 'Secure by default',
        description: 'Role-based access, encrypted data handling and audit-ready authentication flows.',
      },
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    idealFor: ['SaaS products', 'Internal business portals', 'Customer-facing platforms', 'E-commerce storefronts'],
  },
  {
    slug: 'mobile-app-development',
    icon: 'Smartphone',
    accent: 'violet',
    title: 'Mobile App Development',
    tagline: 'Native & cross-platform iOS/Android',
    description:
      'We build high-performance mobile applications that feel native, ship faster with cross-platform frameworks, and scale comfortably with your user base.',
    highlights: [
      {
        title: 'Near-native performance',
        description: 'React Native and Flutter builds tuned to feel as smooth as fully native apps.',
      },
      {
        title: 'Offline-first architecture',
        description: 'Local data sync, background updates and push notifications that work in poor connectivity.',
      },
      {
        title: 'Store-ready release management',
        description: 'End-to-end App Store and Play Store submission, versioning and rollout support.',
      },
      {
        title: 'Built-in observability',
        description: 'Analytics and crash reporting wired in from day one, not bolted on later.',
      },
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    idealFor: ['Consumer apps', 'Field-service tools', 'On-demand marketplaces', 'Internal ops apps'],
  },
  {
    slug: 'custom-software',
    icon: 'Code2',
    accent: 'indigo',
    title: 'Custom Software',
    tagline: 'Enterprise business logic & automations',
    description:
      'When off-the-shelf tools stop fitting how your business actually works, we build tailored software around your exact processes and rules.',
    highlights: [
      {
        title: 'Deep process discovery',
        description: 'We map how your teams really work before writing a single line of code.',
      },
      {
        title: 'Workflow automation',
        description: 'Approval routing, notifications and status tracking that replace manual spreadsheets.',
      },
      {
        title: 'Custom reporting',
        description: 'Live dashboards built around the metrics that matter to your operations.',
      },
      {
        title: 'Seamless integrations',
        description: 'Clean connections into the internal tools and data sources you already rely on.',
      },
    ],
    techStack: ['Java', 'Spring Boot', 'Python', 'REST APIs', 'PostgreSQL', 'Redis'],
    idealFor: ['Operations automation', 'Internal tooling', 'Legacy system replacement', 'Workflow platforms'],
  },
  {
    slug: 'enterprise-solutions',
    icon: 'Building2',
    accent: 'emerald',
    title: 'Enterprise Solutions',
    tagline: 'ERP, CRM, and cloud integrations',
    description:
      'We help larger organizations modernize core systems, connect fragmented tools, and build enterprise-grade platforms that scale safely across teams and regions.',
    highlights: [
      {
        title: 'ERP & CRM implementation',
        description: 'Configuration and customization of enterprise systems around your real processes.',
      },
      {
        title: 'Legacy modernization',
        description: 'Phased migration from monoliths to maintainable, independently deployable services.',
      },
      {
        title: 'Enterprise-grade security',
        description: 'Access controls, audit trails and compliance safeguards built in from the start.',
      },
      {
        title: 'Multi-team rollout support',
        description: 'Deployment and change-management support across departments and regions.',
      },
    ],
    techStack: ['Java', 'Kubernetes', 'Kafka', 'AWS', 'Azure', 'PostgreSQL'],
    idealFor: ['Large enterprises', 'Regulated industries', 'Multi-department platforms', 'Public sector systems'],
  },
  {
    slug: 'ui-ux-design',
    icon: 'Palette',
    accent: 'rose',
    title: 'UI/UX Design',
    tagline: 'Modern interfaces and product prototyping',
    description:
      'We design interfaces people actually enjoy using — grounded in research, validated with real prototypes, and built to convert.',
    highlights: [
      {
        title: 'User research & journey mapping',
        description: 'Understanding real user behavior before committing to a design direction.',
      },
      {
        title: 'Interactive prototypes',
        description: 'Clickable Figma prototypes you can test with real users before development starts.',
      },
      {
        title: 'Reusable design systems',
        description: 'Component libraries that keep your product consistent as it grows.',
      },
      {
        title: 'Conversion-focused UX',
        description: 'Interfaces designed around clear user goals and measurable outcomes.',
      },
    ],
    techStack: ['Figma', 'Prototyping', 'Design Systems', 'User Testing'],
    idealFor: ['New product design', 'Product redesigns', 'Design system creation', 'UX audits'],
  },
  {
    slug: 'cloud-devops',
    icon: 'Cloud',
    accent: 'amber',
    title: 'Cloud & DevOps',
    tagline: 'CI/CD pipelines, Docker & AWS hosting',
    description:
      'We build the infrastructure and delivery pipelines that let your team ship confidently, scale predictably, and stay in control of cost and uptime.',
    highlights: [
      {
        title: 'Automated CI/CD',
        description: 'Pipelines that test, build and deploy on every change, with rollback built in.',
      },
      {
        title: 'Containerized deployments',
        description: 'Docker and Kubernetes setups that make scaling services a configuration change, not a project.',
      },
      {
        title: 'Infrastructure as code',
        description: 'Reproducible environments defined in Terraform, not manual console clicks.',
      },
      {
        title: 'Monitoring & cost control',
        description: 'Alerting, dashboards and regular cost audits so surprises stay rare.',
      },
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    idealFor: ['Scaling startups', 'Deployment modernization', 'Reliability audits', 'Cost optimization'],
  },
];

export const engagementProcess = [
  {
    title: 'Discovery & Requirements',
    description: 'We dig into your goals, constraints and existing systems to scope the right solution.',
  },
  {
    title: 'Design & Architecture',
    description: 'Wireframes, technical architecture and a clear plan before any production code is written.',
  },
  {
    title: 'Build in Sprints',
    description: 'Iterative development with regular demos, so you see progress every step of the way.',
  },
  {
    title: 'QA & Performance Testing',
    description: 'Rigorous testing across functionality, performance and security before anything ships.',
  },
  {
    title: 'Launch & Ongoing Support',
    description: 'A smooth release, followed by monitoring and support as your product grows.',
  },
];
