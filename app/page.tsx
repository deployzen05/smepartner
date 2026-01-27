import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { EnquiryForm } from '@/components/enquiry-form';
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
      <div className="relative overflow-hidden rounded-b-[40px] bg-[#FFF9F0] pb-12 shadow-sm md:rounded-b-[80px]">
        <Navbar />
        <div className="h-16" />

        {/* HeroSection now full width, outside container */}
        <div className="relative z-10 w-full overflow-hidden px-4 py-8 md:px-8 md:py-16 lg:py-20">
          <HeroSection />
        </div>
      </div>
      <TrustedSection />
      <About />

      <WhatWeOffer />
      <WhyChooseUsSection />
      <OurUSP />
      <ReadyToGoSolar />
      <Team />
      <Testimonials />
      <OurProjects />
      <CTASection />

      <Footer />
    </div>
  );
}
