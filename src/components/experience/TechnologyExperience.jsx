import React, { useState, useEffect, useRef, useCallback } from 'react';
import SectionContent from './SectionContent';
import ArchitectureVisualization from './ArchitectureVisualization';
import SectionNavigation from './SectionNavigation';

const sections = [
  {
    id: 1,
    tabTitle: 'Technology',
    title: 'Java Engineering',
    description: 'Reliable backend systems build for performance, mainatainabilty, and long-term growth. We design APIs, services and enterprise applications that remain stable as yours product and traffic evolve',
    tags: ['JAVA 8/17/21/25', 'Spring-Boot', 'Microservers', 'REST APIs', 'Kafka'],
    visualType: 'central-nodes',
  },
  {
    id: 2,
    tabTitle: 'Technology',
    title: 'Python Engineering',
    description: 'From business automation to data-intensive applications, we use Python to build fast, adaptable systems that simplify complex workflows ans accelerate product development.',
    tags: ['PYTHON', 'FASTAPI', 'DJANGO', 'REST APIs', 'Automation', 'DATA PROCESSING'],
    visualType: 'pipeline',
  },
  {
    id: 3,
    tabTitle: 'Technology',
    title: 'MERN Full-Stack',
    description: 'Complete web products engineered from interface to infrastructure. We connect modern user experiences with scalable APIs, secure authentication and production-ready data layers.',
    tags: ['REACT', 'NODE.JS', 'TYPESCRIPT', 'REST / GRAPHQL','MONGODB','EXPRESS'],
    visualType: 'layered',
  },
  {
    id: 4,
    tabTitle: 'Technology',
    title: 'AI That Works With Your Business',
    description: 'We turn AI capabilities into practical business systems — from intelligent search and document processing to workflow automation, assistants and decision-support tools.',
    tags: ['LLM APPLICATIONS', 'RAG', 'VECTOR SEARCH', 'AI AGENT', 'DOCUMENT INTELLIGENCE','AUTOMATION'],
    visualType: 'mesh',
  },
  {
    id: 5,
    tabTitle: 'Technology',
    title: 'Cloud Engineering',
    description: 'We build cloud-ready foundations that make applications easier to deploy, observe, secure and scale — from containerized services to automated delivery pipelines.',
    tags: ['AWS', 'AZURE', 'DOCKER', 'KUBERNETES','CI/CD', 'TERRAFORM'],
    visualType: 'cloud',
  },
  {
    id: 6,
    tabTitle: 'Technology',
    title: 'From Idea to Production',
    description: 'We help turn business ideas into working digital products — combining product thinking, engineering discipline and scalable architecture from the first release onward.',
    tags: ['MVP DEVELOPMENT', 'SYSTEM DESIGN', 'API ENGINEERING', 'UI/UX', 'SCALABILITY', 'MAINTENANCE'],
    visualType: 'circular',
  },
  {
    id: 7,
    tabTitle: 'Technology',
    title: 'Data & API Engineering',
    description: 'Connect applications, services and business data through reliable APIs, integrations and event-driven workflows that keep information moving where it needs to go.',
    tags: ['REST APIs', 'GRAPHQL', 'EVENT-DRIVEN SYSTEMS', 'POSTGRESQL', 'REDIS', 'MESSAGE QUEUESS'],
    visualType: 'ecosystem',
  },
];

export default function TechnologyExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const containerRef = useRef(null);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, sections.length - 1));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Scoped wheel listener: only steps inside the component when mouse is over it
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Allow regular page scroll if we reached the first or last slide
      if (e.deltaY > 30 && activeIndex < sections.length - 1) {
        e.preventDefault();
        if (isScrollingRef.current) return;
        isScrollingRef.current = true;
        handleNext();
        setTimeout(() => { isScrollingRef.current = false; }, 600);
      } else if (e.deltaY < -30 && activeIndex > 0) {
        e.preventDefault();
        if (isScrollingRef.current) return;
        isScrollingRef.current = true;
        handlePrev();
        setTimeout(() => { isScrollingRef.current = false; }, 600);
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [activeIndex, handleNext, handlePrev]);

  const activeSection = sections[activeIndex];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[750px] w-full bg-[#070b14] py-16 text-white selection:bg-amber-400 selection:text-slate-950"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -top-20 right-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <SectionContent
              section={activeSection}
              currentIndex={activeIndex}
              total={sections.length}
            />
          </div>

          {/* Right Visualization */}
          <div className="lg:col-span-7">
            <ArchitectureVisualization
              visualType={activeSection.visualType}
              id={activeSection.id}
            />
          </div>

        </div>

        {/* Section Navigation Tabs & Arrows */}
        <div className="mt-12">
          <SectionNavigation
            sections={sections}
            activeIndex={activeIndex}
            onSelectIndex={(index) => setActiveIndex(index)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}