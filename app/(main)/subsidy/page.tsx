import { Metadata } from 'next';
import { SubsidyNavbar } from '@/components/subsidy/subsidy-navbar';
import { SubsidyHero } from '@/components/subsidy/subsidy-hero';
import { SubsidyAbout } from '@/components/subsidy/subsidy-about';
import { SubsidyBento } from '@/components/subsidy/subsidy-bento';
import { WhyChooseUsSection } from '@/components/common/why-choose-us';
import { OurUSP } from '@/components/common/our-usp';
import { Testimonials } from '@/components/common/testimonials';
import { SubsidyFooter } from '@/components/subsidy/subsidy-footer';
import { SubsidyCTA } from '@/components/subsidy/subsidy-cta';

export const metadata: Metadata = {
  title: 'Industrial & Government Subsidy Consultancy',
  description: 'Claim maximum government subsidies, Mandi Tax Exemptions, MSME benefits, and project finance across Uttar Pradesh with SME Partner.',
  alternates: { canonical: 'https://www.smepartner.in/subsidy' }
};

export default function SubsidyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden rounded-b-[40px] bg-[#FFF9F0] shadow-sm md:rounded-b-[80px]">
        <SubsidyNavbar />
        <div className="h-15" />
        <SubsidyHero />
      </div>
      <WhyChooseUsSection />
      <SubsidyAbout />
      <OurUSP />
      <SubsidyBento />
      <Testimonials />
      <SubsidyCTA />
      <SubsidyFooter />
    </div>
  );
}
