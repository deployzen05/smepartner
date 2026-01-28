import { Metadata } from 'next';
import { WhyChooseUsSection } from '@/components/why-choose-us';
import { OurUSP } from '@/components/our-usp';

export const metadata: Metadata = {
  title: 'Solar Subsidy Consultancy',
  description:
    'Expert consultancy for UPNEDA and MNRE solar subsidies. Get up to 90% capital subsidy for food processing units and other industrial sectors.',
};

export default function SubsidyPage() {
  return (
    <>
      <WhyChooseUsSection />
      <OurUSP />
    </>
  );
}
