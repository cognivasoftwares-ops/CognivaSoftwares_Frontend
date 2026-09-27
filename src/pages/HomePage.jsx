import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import TechnologyExperience from '../components/experience/TechnologyExperience';
import ServicesGrid from '../components/sections/ServicesGrid';
import ScrollReveal from '../components/common/ScrollReveal';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#070b14]">
      {/* 1. Hero Section */}
      <ScrollReveal direction="none" duration={0.8}>
        <HeroSection />
      </ScrollReveal>

      {/* 2. About Section */}
      <ScrollReveal direction="up" delay={0.1} duration={0.7}>
        <AboutSection />
      </ScrollReveal>

      {/* 3. Interactive Technology Experience (Mounted immediately after About details) */}
      <ScrollReveal direction="up" delay={0.1} duration={0.7}>
        <section className="relative w-full">
          <TechnologyExperience />
        </section>
      </ScrollReveal>

      {/* 4. Core Competencies / Services Grid */}
      <ScrollReveal direction="up" delay={0.15} duration={0.7}>
        <ServicesGrid />
      </ScrollReveal>
    </div>
  );
}