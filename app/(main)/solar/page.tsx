import { Navbar } from '@/components/common/navbar';
import { HeroSection } from '@/components/solar/hero-section';
import { About } from '@/components/common/about';
import { WhatWeOffer } from '@/components/solar/what-we-offer';
import { Team } from '@/components/common/team';
import { WhyChooseUsSection } from '@/components/common/why-choose-us';
import { OurUSP } from '@/components/common/our-usp';
import { ReadyToGoSolar } from '@/components/solar/ready-to-go-solar';
import { Testimonials } from '@/components/common/testimonials';
import { OurProjects } from '@/components/common/our-projects';
import { Footer } from '@/components/common/footer';
import { TrustedSection } from '@/components/common/trusted-section';
import { CTASection } from '@/components/common/cta-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solar Energy Solutions & PM Surya Ghar Subsidy',
  description: 'Transition to clean energy with residential, commercial, industrial, and agricultural solar solutions across UP with PM Surya Ghar benefits.',
  alternates: { canonical: 'https://www.smepartner.in/solar' }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-b-[40px] bg-[#FFF9F0] shadow-sm md:rounded-b-[80px]">
        <Navbar />
        <div className="h-15" />
        <HeroSection />
      </div>

      {/* TRUST */}
      <TrustedSection />
      <WhyChooseUsSection />

      {/* BRAND */}
      <About />
      <OurUSP />

      {/* SERVICES */}
      <WhatWeOffer />
      <ReadyToGoSolar />

      {/* PROOF */}
      <OurProjects />
      <Team />
      <Testimonials />

      {/* CTA + FOOTER */}
      <CTASection />
      <Footer />
    </div>
  );
}
