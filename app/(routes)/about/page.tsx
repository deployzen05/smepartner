import { Metadata } from 'next';
import { About } from '@/components/about';
import { Team } from '@/components/team';
import { TrustedSection } from '@/components/trusted-section';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about SME Partner, an authorized UPNEDA vendor and reliable solar EPC company in Uttar Pradesh.',
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Team />
      <TrustedSection />
    </>
  );
}
