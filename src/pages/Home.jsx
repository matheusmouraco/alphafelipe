import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import GallerySection from '../components/home/GallerySection';
import ClientsSection from '../components/home/ClientsSection';
import FAQSection from '../components/home/FAQSection';
import ContactSection from '../components/home/ContactSection';
import TimeBasedMessage from '../components/home/TimeBasedMessage';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TimeBasedMessage />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <GallerySection />
      <ClientsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}