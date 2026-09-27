import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesGrid from '../components/sections/ServicesGrid';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
    </div>
  );
}