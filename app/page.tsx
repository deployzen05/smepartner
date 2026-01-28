import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { About } from '@/components/about';
import { WhatWeOffer } from '@/components/what-we-offer';
import { Team } from '@/components/team';
import { WhyChooseUsSection } from '@/components/why-choose-us';
import { OurUSP } from '@/components/our-usp';
import { ReadyToGoSolar } from '@/components/ready-to-go-solar';
import { Testimonials } from '@/components/testimonials';
import { OurProjects } from '@/components/our-projects';
import { Footer } from '@/components/footer';
import { TrustedSection } from '@/components/trusted-section';
import { CTASection } from '@/components/cta-section';

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
