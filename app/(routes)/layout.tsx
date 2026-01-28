'use client';

import { BreadcrumbSection } from '@/components/breadcrumb-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { WhyChooseUsTwo } from '@/components/why-choose-us-two';
import { usePathname } from 'next/navigation';

export default function SolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');

      const label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        label,
        href: index === segments.length - 1 ? undefined : href,
      };
    }),
  ];

  const title = breadcrumbItems[breadcrumbItems.length - 1].label;

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />
      <BreadcrumbSection title={title} breadcrumbItems={breadcrumbItems} />
      {children}
      <WhyChooseUsTwo />
      <CTASection />
      <Footer />
    </main>
  );
}
