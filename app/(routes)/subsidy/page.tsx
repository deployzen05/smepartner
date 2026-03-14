import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { SubsidyHero } from '@/components/subsidy-hero';
import { SubsidyBanner } from '@/components/subsidy-banner';
import { SubsidyAbout } from '@/components/subsidy-about';
import { SubsidyOfferings } from '@/components/subsidy-offerings';
import { SubsidyPolicyDetails } from '@/components/subsidy-policy-details';
import { WhyChooseUsSection } from '@/components/why-choose-us';
import { OurUSP } from '@/components/our-usp';
import { Testimonials } from '@/components/testimonials';
import { OurProjects } from '@/components/our-projects';
import { Footer } from '@/components/footer';
import { TrustedSection } from '@/components/trusted-section';
import { SubsidyCTA } from '@/components/subsidy-cta';

export const metadata: Metadata = {
  title: 'Solar Subsidy Consultancy | SME Partner',
  description:
    'Claim maximum UPNEDA and PM Surya Ghar solar subsidies. Get up to 90% capital subsidy with end-to-end documentation support from SME Partner.',
};

export default function SubsidyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-b-[40px] bg-[#FFF9F0] shadow-sm md:rounded-b-[80px]">
        <Navbar />
        <div className="h-15" />
        <SubsidyHero />
      </div>

      {/* TRUST */}
      {/* <TrustedSection /> */}
      <WhyChooseUsSection />

      {/* BRAND */}
      <SubsidyAbout />
      <OurUSP />

      {/* SERVICES */}
      <SubsidyOfferings />

      {/* POLICY DETAILS */}
      <SubsidyPolicyDetails />

      {/* PROOF */}
      {/* <OurProjects /> */}
      {/* BANNER SECTION */}
      <SubsidyBanner />

      <Testimonials />

      {/* CTA + FOOTER */}
      <SubsidyCTA />
      <Footer />
    </div>
  );
}
