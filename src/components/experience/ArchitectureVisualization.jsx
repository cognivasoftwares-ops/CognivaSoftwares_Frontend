import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Per-technology ambient accent - keeps the shared dark-blue futuristic
// panel/grid, but tints each diagram's glow to match its stack identity.
const THEME = {
  'central-nodes': { accent: '#f97316', dot: 'bg-orange-400', label: 'text-orange-300' }, // Java
  pipeline: { accent: '#eab308', dot: 'bg-yellow-400', label: 'text-yellow-300' }, // Python
  layered: { accent: '#22d3ee', dot: 'bg-cyan-400', label: 'text-cyan-300' }, // MERN
  mesh: { accent: '#a855f7', dot: 'bg-purple-400', label: 'text-purple-300' }, // AI
  cloud: { accent: '#0ea5e9', dot: 'bg-sky-400', label: 'text-sky-300' }, // Cloud
  circular: { accent: '#fbbf24', dot: 'bg-amber-400', label: 'text-amber-300' }, // Idea -> Production
  ecosystem: { accent: '#2dd4bf', dot: 'bg-teal-400', label: 'text-teal-300' }, // Data & API
};

export default function ArchitectureVisualization({ visualType, id }) {
  const theme = THEME[visualType] || THEME['central-nodes'];

  return (
    <div className="relative flex h-[340px] w-full items-center justify-center sm:h-[420px] lg:h-[480px]">
      {/* Background Architectural Blueprint Grid */}
      <div
        className="absolute inset-0 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/40 p-4 backdrop-blur-sm"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(30, 41, 59, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30, 41, 59, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      >
        {/* Technology-tinted ambient glow */}
        <div
          key={`glow-${visualType}`}
          className="pointer-events-none absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 28% 22%, ${theme.accent}2e, transparent 58%), radial-gradient(circle at 78% 78%, ${theme.accent}1f, transparent 55%)`,
          }}
        />

        <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          <span className={`h-1.5 w-1.5 rounded-full ${theme.dot} animate-pulse`} />
          <span className={theme.label}>SYS_ARCH // {visualType.toUpperCase()}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`diagram-${id}`}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-full w-full items-center justify-center p-3"
        >
          {visualType === 'central-nodes' && <CentralNodesDiagram />}
          {visualType === 'pipeline' && <PipelineDiagram />}
          {visualType === 'layered' && <LayeredDiagram />}
          {visualType === 'mesh' && <MeshNetworkDiagram />}
          {visualType === 'cloud' && <CloudInfraDiagram />}
          {visualType === 'circular' && <CircularLifecycleDiagram />}
          {visualType === 'ecosystem' && <EcosystemDiagram />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// 01: Central system with connected service nodes
function CentralNodesDiagram() {
  const CX = 350;
  const CY = 250;
  const nodes = [
    { x: 168, y: 90, label: 'REST API' },
    { x: 532, y: 90, label: 'SPRING BOOT' },
    { x: 616, y: 250, label: 'KAFKA TOPIC' },
    { x: 504, y: 400, label: 'MICROSERVICE' },
    { x: 196, y: 400, label: 'JPA / SQL' },
    { x: 84, y: 250, label: 'AUTH / JWT' },
  ];

  return (
    <svg viewBox="0 0 700 500" className="h-full w-full">
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Radiating Halo */}
      <circle cx={CX} cy={CY} r="140" fill="url(#hubGlow)" />
      <circle cx={CX} cy={CY} r="170" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 6" />

      {/* Connecting Traces */}
      {nodes.map((n, i) => (
        <g key={i}>
          <line
            x1={CX}
            y1={CY}
            x2={n.x}
            y2={n.y}
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <circle cx={(CX + n.x) / 2} cy={(CY + n.y) / 2} r="2.5" fill="#fbbf24">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Node Point */}
          <circle cx={n.x} cy={n.y} r="16" fill="#090e17" stroke="#0ea5e9" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="3.5" fill="#38bdf8" />
          <text x={n.x} y={n.y + 30} fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}

      {/* Center Core */}
      <circle cx={CX} cy={CY} r="40" fill="#090e17" stroke="#fbbf24" strokeWidth="2" />
      <circle cx={CX} cy={CY} r="26" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x={CX - 8} y={CY - 8} width="16" height="16" rx="3" fill="#fbbf24" />
      <text x={CX} y={CY + 62} fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        JVM CORE
      </text>
    </svg>
  );
}

// 02: Vertical processing pipeline
function PipelineDiagram() {
  const steps = [
    { label: 'FASTAPI INGEST', y: 70 },
    { label: 'DATA PROCESSING', y: 160 },
    { label: 'DJANGO SERVICES', y: 250 },
    { label: 'AUTOMATION', y: 340 },
    { label: 'REST DELIVERY', y: 430 },
  ];

  return (
    <svg viewBox="0 0 700 500" className="h-full w-full">
      {/* Central Spinal Bus */}
      <line x1="350" y1="50" x2="350" y2="450" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 4" />

      {steps.map((s, i) => (
        <g key={i}>
          {/* Lateral Data Connectors */}
          <line x1="110" y1={s.y} x2="590" y2={s.y} stroke="#1e293b" strokeWidth="1" />
          <circle cx="110" cy={s.y} r="4" fill="#38bdf8" />
          <circle cx="590" cy={s.y} r="4" fill="#38bdf8" />

          {/* Central Stage Box */}
          <rect
            x="230"
            y={s.y - 22}
            width="240"
            height="44"
            rx="8"
            fill="#090e17"
            stroke={i === 2 ? '#fbbf24' : '#0ea5e9'}
            strokeWidth="1.5"
          />
          <text
            x="350"
            y={s.y + 5}
            fill={i === 2 ? '#fbbf24' : '#f8fafc'}
            fontSize="12"
            fontFamily="monospace"
            fontWeight="bold"
            textAnchor="middle"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* Animated Traveling Packet */}
      <circle cx="350" cy="50" r="5" fill="#fbbf24">
        <animate attributeName="cy" values="60;440;60" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// 03: Layered application architecture
function LayeredDiagram() {
  const layers = [
    { name: 'REACT CLIENT LAYER', color: '#38bdf8', y: 90 },
    { name: 'NODE.JS / EXPRESS API', color: '#0284c7', y: 175 },
    { name: 'GRAPHQL & BUSINESS LOGIC', color: '#fbbf24', y: 260 },
    { name: 'MONGODB DATA LAYER', color: '#6366f1', y: 345 },
  ];

  return (
    <svg viewBox="0 0 700 500" className="h-full w-full">
      {layers.map((l, i) => (
        <g key={i}>
          {/* Isometric Angled Slab */}
          <polygon
            points={`160,${l.y + 15} 350,${l.y - 30} 540,${l.y + 15} 350,${l.y + 60}`}
            fill="#090e17"
            stroke={l.color}
            strokeWidth="1.5"
            opacity="0.9"
          />
          <text
            x="350"
            y={l.y + 18}
            fill="#ffffff"
            fontSize="11"
            fontFamily="monospace"
            fontWeight="600"
            textAnchor="middle"
          >
            {l.name}
          </text>
        </g>
      ))}

      {/* Vertical Data Bus Pipes */}
      <line x1="190" y1="110" x2="190" y2="390" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="510" y1="110" x2="510" y2="390" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// 04: Network of interconnected nodes
function MeshNetworkDiagram() {
  const nodes = [
    { x: 220, y: 120, label: 'USER QUERY', dy: -20 },
    { x: 480, y: 110, label: 'AI AGENT', dy: -20 },
    { x: 350, y: 200, label: 'LLM CORE', dy: 34 },
    { x: 155, y: 260, label: 'VECTOR DB', dy: -20 },
    { x: 545, y: 270, label: 'DOC INTEL', dy: -20 },
    { x: 259, y: 380, label: 'RAG PIPELINE', dy: 26 },
    { x: 441, y: 390, label: 'AUTOMATION', dy: 26 },
  ];
  const points = nodes.map((n) => [n.x, n.y]);

  return (
    <svg viewBox="0 0 700 500" className="h-full w-full">
      {/* Mesh Interconnect Lines */}
      {points.map((p1, i) =>
        points.slice(i + 1).map((p2, j) => (
          <line
            key={`${i}-${j}`}
            x1={p1[0]}
            y1={p1[1]}
            x2={p2[0]}
            y2={p2[1]}
            stroke="#1e293b"
            strokeWidth="1.2"
          />
        ))
      )}

      {/* Accent Paths: query -> LLM core -> automation / doc intelligence */}
      <line x1="220" y1="120" x2="350" y2="200" stroke="#0284c7" strokeWidth="2" />
      <line x1="350" y1="200" x2="441" y2="390" stroke="#fbbf24" strokeWidth="2" />
      <line x1="350" y1="200" x2="545" y2="270" stroke="#38bdf8" strokeWidth="2" />

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="12" fill="#090e17" stroke={i === 2 ? '#fbbf24' : '#0284c7'} strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="3.5" fill={i === 2 ? '#fbbf24' : '#38bdf8'} />
          <text
            x={n.x + (n.dx || 0)}
            y={n.y + (n.dy || 0)}
            fill={i === 2 ? '#fbbf24' : '#94a3b8'}
            fontSize="9"
            fontFamily="monospace"
            fontWeight={i === 2 ? 'bold' : '500'}
            textAnchor={n.anchor || 'middle'}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

// 05: Cloud/infrastructure-style architecture
function CloudInfraDiagram() {
  return (
    <svg viewBox="0 0 700 500" className="h-full w-full">
      {/* Cloud Perimeter Enclosure */}
      <rect
        x="60"
        y="55"
        width="580"
        height="400"
        rx="24"
        fill="#090e17"
        stroke="#0284c7"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />
      <text x="85" y="95" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">
        AWS / AZURE // VPC
      </text>

      {/* Inner Pod Clusters */}
      <rect x="100" y="130" width="220" height="120" rx="12" fill="#0f172a" stroke="#1e293b" />
      <text x="210" y="190" fill="#94a3b8" fontSize="11" fontFamily="monospace" textAnchor="middle">
        KUBERNETES
      </text>
      <text x="210" y="208" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
        POD CLUSTER
      </text>

      <rect x="380" y="130" width="220" height="120" rx="12" fill="#0f172a" stroke="#1e293b" />
      <text x="490" y="190" fill="#94a3b8" fontSize="11" fontFamily="monospace" textAnchor="middle">
        DOCKER
      </text>
      <text x="490" y="208" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
        CONTAINERS
      </text>

      {/* Central Router / Load Balancer */}
      <rect x="270" y="330" width="160" height="95" rx="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="350" y="372" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        CI/CD PIPELINE
      </text>
      <text x="350" y="392" fill="#eab308" fontSize="9.5" fontFamily="monospace" textAnchor="middle">
        TERRAFORM · IaC
      </text>

      {/* Connecting Busses */}
      <line x1="210" y1="250" x2="310" y2="330" stroke="#38bdf8" strokeWidth="1.5" />
      <line x1="490" y1="250" x2="390" y2="330" stroke="#38bdf8" strokeWidth="1.5" />
    </svg>
  );
}

// 06: Circular product/lifecycle system
function CircularLifecycleDiagram() {
  const stages = [
    { label: 'PLAN', angle: 0 },
    { label: 'DESIGN', angle: 60 },
    { label: 'DEVELOP', angle: 120 },
    { label: 'VALIDATE', angle: 180 },
    { label: 'DEPLOY', angle: 240 },
    { label: 'SCALE', angle: 300 },
  ];

  const CX = 350;
  const CY = 250;
  const ORBIT_R = 165;

  return (
    <svg viewBox="0 0 700 500" className="h-full w-full">
      {/* Outer Orbit Rings */}
      <circle cx={CX} cy={CY} r={ORBIT_R} fill="none" stroke="#1e293b" strokeWidth="1.5" />
      <circle cx={CX} cy={CY} r={ORBIT_R} fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="60 180" />

      {/* Circular Nodes */}
      {stages.map((st, i) => {
        const rad = (st.angle * Math.PI) / 180;
        const x = CX + ORBIT_R * Math.cos(rad);
        const y = CY + ORBIT_R * Math.sin(rad);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="20" fill="#090e17" stroke="#0ea5e9" strokeWidth="1.5" />
            <text x={x} y={y + 4} fill="#f8fafc" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              {st.label}
            </text>
          </g>
        );
      })}

      {/* Central Hub */}
      <circle cx={CX} cy={CY} r="44" fill="#090e17" stroke="#fbbf24" strokeWidth="1.5" />
      <text x={CX} y={CY + 4} fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        LIFECYCLE
      </text>
    </svg>
  );
}

// 07: Connected data ecosystem
function EcosystemDiagram() {
  const CX = 350;
  const CY = 250;

  return (
    <svg viewBox="0 0 700 500" className="h-full w-full">
      {/* Concentric Ring Fields */}
      <circle cx={CX} cy={CY} r="70" fill="none" stroke="#1e293b" strokeWidth="1.5" />
      <circle cx={CX} cy={CY} r="135" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 6" />
      <circle cx={CX} cy={CY} r="195" fill="none" stroke="#1e293b" strokeWidth="1.5" />

      {/* Orbiting Satellite Data Nodes */}
      {[
        { deg: 45, label: 'REST API' },
        { deg: 135, label: 'GRAPHQL' },
        { deg: 225, label: 'MESSAGE QUEUE' },
        { deg: 315, label: 'POSTGRESQL' },
      ].map(({ deg, label }, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = CX + 135 * Math.cos(rad);
        const y = CY + 135 * Math.sin(rad);
        const labelY = y < CY ? y - 20 : y + 26;
        return (
          <g key={i}>
            <line x1={CX} y1={CY} x2={x} y2={y} stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx={x} cy={y} r="11" fill="#090e17" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="3" fill="#fbbf24" />
            <text x={x} y={labelY} fill="#94a3b8" fontSize="9" fontFamily="monospace" fontWeight="600" textAnchor="middle">
              {label}
            </text>
          </g>
        );
      })}

      {/* Center Data Matrix */}
      <rect x={CX - 30} y={CY - 30} width="60" height="60" rx="14" fill="#090e17" stroke="#fbbf24" strokeWidth="2" />
      <text x={CX} y={CY + 4} fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        DATA CORE
      </text>
    </svg>
  );
}