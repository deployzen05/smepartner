import { Metadata } from 'next';
import { WhatWeOffer } from '@/components/what-we-offer';
import { Testimonials } from '@/components/testimonials';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our wide range of solar services including Residential, Commercial, Industrial Solar Solutions, and Solar Water Pumps.',
};

export default function ServicesPage() {
  return (
    <>
      <WhatWeOffer />
      <Testimonials />
    </>
  );
}
