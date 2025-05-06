'use client';

import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import MissionValuesSection from '@/components/organisms/Know';
import Navbar from '@/components/organisms/Navbar';
import NextSteps from '@/components/organisms/NextSteps';
import ProductShowcase from '@/components/organisms/Products';
import LegalServicesSection from '@/components/organisms/Services';
import TestimonialsSection from '@/components/organisms/Testimonials';
import TopSection from '@/components/organisms/TopSection';
import { dataSite } from '@/data';

export default function Home() {
  return (
    <div className='min-h-screen bg-[#FAF9F7] text-[#1F2937]'>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Top Section */}
      <TopSection />

      <MissionValuesSection />
      {/* Next steps */}
      <LegalServicesSection />

      <ProductShowcase />
      <NextSteps />

      <TestimonialsSection />
      <Footer />
    </div>
  );
}
