import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import CaseStudyPage from '../pages/CaseStudyPage';
import ContactPage from '../pages/ContactPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import ComingSoonPage from '../pages/ComingSoonPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivacyPolicyPage from '../pages/legal/PrivacyPolicyPage';
import TermsOfServicePage from '../pages/legal/TermsOfServicePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        
        {/* Replace the placeholder div with <AboutPage /> */}
        <Route path="about" element={<AboutPage />} />

        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:slug" element={<CaseStudyPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="careers" element={<ComingSoonPage title="Careers" description="We're not hiring publicly through the website just yet — check back soon or reach out directly." />} />
        <Route path="blog" element={<ComingSoonPage title="Blog" description="We're working on engineering write-ups and case studies. Check back soon." />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}