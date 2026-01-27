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

  // Split path into segments
  const segments = pathname.split('/').filter(Boolean);

  // Generate breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...segments.map((segment, index) => {
      // Build the path for this segment (e.g. /services, /services/residential)
      const href = '/' + segments.slice(0, index + 1).join('/');

      // Format the label (capitalize, remove hyphens)
      const label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize first letter of each word

      return {
        label,
        href: index === segments.length - 1 ? undefined : href, // No href for the last item (current page)
      };
    }),
  ];

  // Title for the banner is the last breadcrumb's label, or "Home"
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
