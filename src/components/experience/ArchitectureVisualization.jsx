import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArchitectureVisualization({ visualType, id }) {
  return (
    <div className="relative flex h-[380px] w-full items-center justify-center sm:h-[460px] lg:h-[540px]">
      {/* Background Architectural Blueprint Grid */}
      <div 
        className="absolute inset-0 rounded-3xl border border-slate-800/80 bg-slate-950/40 p-4 backdrop-blur-sm"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(30, 41, 59, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30, 41, 59, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      >
        <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          SYS_ARCH // {visualType.toUpperCase()}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`diagram-${id}`}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-full w-full items-center justify-center p-6"
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
  const nodes = [
    { x: 120, y: 90, label: 'Node 01' },
    { x: 380, y: 90, label: 'Node 02' },
    { x: 440, y: 250, label: 'Node 03' },
    { x: 360, y: 400, label: 'Node 04' },
    { x: 140, y: 400, label: 'Node 05' },
    { x: 60, y: 250, label: 'Node 06' },
  ];

  return (
    <svg viewBox="0 0 500 500" className="h-full w-full max-w-[480px]">
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Radiating Halo */}
      <circle cx="250" cy="250" r="140" fill="url(#hubGlow)" />
      <circle cx="250" cy="250" r="170" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 6" />

      {/* Connecting Traces */}
      {nodes.map((n, i) => (
        <g key={i}>
          <line
            x1="250"
            y1="250"
            x2={n.x}
            y2={n.y}
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <circle cx={(250 + n.x) / 2} cy={(250 + n.y) / 2} r="2.5" fill="#fbbf24">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Node Point */}
          <circle cx={n.x} cy={n.y} r="18" fill="#090e17" stroke="#0ea5e9" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="4" fill="#38bdf8" />
          <text x={n.x} y={n.y + 32} fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}

      {/* Center Core */}
      <circle cx="250" cy="250" r="42" fill="#090e17" stroke="#fbbf24" strokeWidth="2" />
      <circle cx="250" cy="250" r="28" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="242" y="242" width="16" height="16" rx="3" fill="#fbbf24" />
    </svg>
  );
}

// 02: Vertical processing pipeline
function PipelineDiagram() {
  const steps = [
    { label: 'INGESTION', y: 70 },
    { label: 'TRANSFORMATION', y: 160 },
    { label: 'ORCHESTRATION', y: 250 },
    { label: 'OPTIMIZATION', y: 340 },
    { label: 'DELIVERY', y: 430 },
  ];

  return (
    <svg viewBox="0 0 500 500" className="h-full w-full max-w-[480px]">
      {/* Central Spinal Bus */}
      <line x1="250" y1="50" x2="250" y2="450" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 4" />

      {steps.map((s, i) => (
        <g key={i}>
          {/* Lateral Data Connectors */}
          <line x1="120" y1={s.y} x2="380" y2={s.y} stroke="#1e293b" strokeWidth="1" />
          <circle cx="120" cy={s.y} r="4" fill="#38bdf8" />
          <circle cx="380" cy={s.y} r="4" fill="#38bdf8" />

          {/* Central Stage Box */}
          <rect
            x="170"
            y={s.y - 20}
            width="160"
            height="40"
            rx="8"
            fill="#090e17"
            stroke={i === 2 ? '#fbbf24' : '#0ea5e9'}
            strokeWidth="1.5"
          />
          <text
            x="250"
            y={s.y + 4}
            fill={i === 2 ? '#fbbf24' : '#f8fafc'}
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
            textAnchor="middle"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* Animated Traveling Packet */}
      <circle cx="250" cy="50" r="5" fill="#fbbf24">
        <animate attributeName="cy" values="60;440;60" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// 03: Layered application architecture
function LayeredDiagram() {
  const layers = [
    { name: 'CLIENT / FRONTEND LAYER', color: '#38bdf8', y: 90 },
    { name: 'API GATEWAY & SECURITY', color: '#0284c7', y: 175 },
    { name: 'MICROSERVICES & BUSINESS LOGIC', color: '#fbbf24', y: 260 },
    { name: 'PERSISTENCE & DATA STORAGE', color: '#6366f1', y: 345 },
  ];

  return (
    <svg viewBox="0 0 500 500" className="h-full w-full max-w-[480px]">
      {layers.map((l, i) => (
        <g key={i}>
          {/* Isometric Angled Slab */}
          <polygon
            points={`80,${l.y + 15} 250,${l.y - 30} 420,${l.y + 15} 250,${l.y + 60}`}
            fill="#090e17"
            stroke={l.color}
            strokeWidth="1.5"
            opacity="0.9"
          />
          <text
            x="250"
            y={l.y + 18}
            fill="#ffffff"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="600"
            textAnchor="middle"
          >
            {l.name}
          </text>
        </g>
      ))}

      {/* Vertical Data Bus Pipes */}
      <line x1="120" y1="110" x2="120" y2="390" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="380" y1="110" x2="380" y2="390" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// 04: Network of interconnected nodes
function MeshNetworkDiagram() {
  const points = [
    [150, 120], [350, 110], [250, 200], [100, 260],
    [400, 270], [180, 380], [320, 390],
  ];

  return (
    <svg viewBox="0 0 500 500" className="h-full w-full max-w-[480px]">
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

      {/* Accent Paths */}
      <line x1="150" y1="120" x2="250" y2="200" stroke="#0284c7" strokeWidth="2" />
      <line x1="250" y1="200" x2="320" y2="390" stroke="#fbbf24" strokeWidth="2" />
      <line x1="250" y1="200" x2="400" y2="270" stroke="#38bdf8" strokeWidth="2" />

      {/* Nodes */}
      {points.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="14" fill="#090e17" stroke={i === 2 ? '#fbbf24' : '#0284c7'} strokeWidth="1.5" />
          <circle cx={x} cy={y} r="4" fill={i === 2 ? '#fbbf24' : '#38bdf8'} />
        </g>
      ))}
    </svg>
  );
}

// 05: Cloud/infrastructure-style architecture
function CloudInfraDiagram() {
  return (
    <svg viewBox="0 0 500 500" className="h-full w-full max-w-[480px]">
      {/* Cloud Perimeter Enclosure */}
      <rect
        x="60"
        y="90"
        width="380"
        height="320"
        rx="24"
        fill="#090e17"
        stroke="#0284c7"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />
      <text x="85" y="125" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
        VPC // REGION_01
      </text>

      {/* Inner Pod Clusters */}
      <rect x="90" y="160" width="140" height="90" rx="12" fill="#0f172a" stroke="#1e293b" />
      <text x="160" y="210" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
        CLUSTER_A
      </text>

      <rect x="270" y="160" width="140" height="90" rx="12" fill="#0f172a" stroke="#1e293b" />
      <text x="340" y="210" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
        CLUSTER_B
      </text>

      {/* Central Router / Load Balancer */}
      <rect x="180" y="295" width="140" height="75" rx="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="250" y="338" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        LOAD BALANCER
      </text>

      {/* Connecting Busses */}
      <line x1="160" y1="250" x2="220" y2="295" stroke="#38bdf8" strokeWidth="1.5" />
      <line x1="340" y1="250" x2="280" y2="295" stroke="#38bdf8" strokeWidth="1.5" />
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

  return (
    <svg viewBox="0 0 500 500" className="h-full w-full max-w-[480px]">
      {/* Outer Orbit Rings */}
      <circle cx="250" cy="250" r="160" fill="none" stroke="#1e293b" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="160" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="60 180" />

      {/* Circular Nodes */}
      {stages.map((st, i) => {
        const rad = (st.angle * Math.PI) / 180;
        const x = 250 + 160 * Math.cos(rad);
        const y = 250 + 160 * Math.sin(rad);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="22" fill="#090e17" stroke="#0ea5e9" strokeWidth="1.5" />
            <text x={x} y={y + 4} fill="#f8fafc" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              {st.label}
            </text>
          </g>
        );
      })}

      {/* Central Hub */}
      <circle cx="250" cy="250" r="48" fill="#090e17" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="250" y="254" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        LIFECYCLE
      </text>
    </svg>
  );
}

// 07: Connected data ecosystem
function EcosystemDiagram() {
  return (
    <svg viewBox="0 0 500 500" className="h-full w-full max-w-[480px]">
      {/* Concentric Ring Fields */}
      <circle cx="250" cy="250" r="70" fill="none" stroke="#1e293b" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="130" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 6" />
      <circle cx="250" cy="250" r="190" fill="none" stroke="#1e293b" strokeWidth="1.5" />

      {/* Orbiting Satellite Data Nodes */}
      {[45, 135, 225, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = 250 + 130 * Math.cos(rad);
        const y = 250 + 130 * Math.sin(rad);
        return (
          <g key={i}>
            <line x1="250" y1="250" x2={x} y2={y} stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx={x} cy={y} r="12" fill="#090e17" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="3" fill="#fbbf24" />
          </g>
        );
      })}

      {/* Center Data Matrix */}
      <rect x="220" y="220" width="60" height="60" rx="14" fill="#090e17" stroke="#fbbf24" strokeWidth="2" />
      <text x="250" y="254" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        DATA CORE
      </text>
    </svg>
  );
}