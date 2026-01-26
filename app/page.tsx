import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { EnquiryForm } from '@/components/enquiry-form';
import { TrustedSection } from '@/components/trusted-section';
import { WhatWeOffer } from '@/components/what-we-offer';
import { WhyChooseUsSection } from '@/components/why-choose-us';
import { OurUSP } from '@/components/our-usp';
import { ReadyToGoSolar } from '@/components/ready-to-go-solar';
import { Testimonials } from '@/components/testimonials';
import { OurProjects } from '@/components/our-projects';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden rounded-b-[40px] bg-[#FFF9F0] pb-12 shadow-sm md:rounded-b-[80px]">
        <Navbar />
        <div className="h-16" />

        <main className="relative z-10 container mx-auto max-w-7xl px-4 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-24">
            <div className="w-full pt-4 lg:w-[48%]">
              <HeroSection />
            </div>
            <div
              id="form"
              className="mx-auto w-full max-w-lg lg:mx-0 lg:w-[45%]"
            >
              <EnquiryForm />
            </div>
          </div>
        </main>
      </div>

      <TrustedSection />

      <WhatWeOffer />

      <WhyChooseUsSection />

      <OurUSP />

      <ReadyToGoSolar />

      <OurProjects />

      <Testimonials />

      <Footer />
    </div>
  );
}
