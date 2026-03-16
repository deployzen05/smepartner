import { Metadata } from 'next';
import { AboutContent } from './about-content';

export const metadata: Metadata = {
  title: 'About Us - SME Partner',
  description:
    'Learn about SME Partner, Uttar Pradesh’s trusted industrial consultancy and authorized UPNEDA vendor offering subsidy assistance and solar power solutions.',
};

export default function AboutPage() {
  return <AboutContent />;
}
