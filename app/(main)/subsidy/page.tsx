import { Metadata } from 'next';
import { Navbar } from '@/components/common/navbar';
import { SubsidyHero } from '@/components/subsidy/subsidy-hero';
import { SubsidyBanner } from '@/components/subsidy/subsidy-banner';
import { SubsidyAbout } from '@/components/subsidy/subsidy-about';
import { SubsidyOfferings } from '@/components/subsidy/subsidy-offerings';
import { SubsidyPolicyDetails } from '@/components/subsidy/subsidy-policy-details';
import { WhyChooseUsSection } from '@/components/common/why-choose-us';
import { OurUSP } from '@/components/common/our-usp';
import { Testimonials } from '@/components/common/testimonials';
import { OurProjects } from '@/components/common/our-projects';
import { Footer } from '@/components/common/footer';
import { TrustedSection } from '@/components/common/trusted-section';
import { SubsidyCTA } from '@/components/subsidy/subsidy-cta';

export const metadata: Metadata = {
  title: 'Industrial & Government Subsidy Consultancy',
  description: 'Claim maximum government subsidies, Mandi Tax Exemptions, MSME benefits, and project finance across Uttar Pradesh with SME Partner.',
  alternates: { canonical: 'https://www.smepartner.in/subsidy' }
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
      {/* <SubsidyBanner /> */}

      <Testimonials />

      {/* CTA + FOOTER */}
      <SubsidyCTA />
      <Footer />
    </div>
  );
}
