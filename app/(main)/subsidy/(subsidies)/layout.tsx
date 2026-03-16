'use client';

import { SubsidyNavbar } from '@/components/subsidy/subsidy-navbar';
import { SubsidyFooter } from '@/components/subsidy/subsidy-footer';
import { SubsidyCTA } from '@/components/subsidy/subsidy-cta';
import { BreadcrumbSection } from '@/components/common/breadcrumb-section';
import { usePathname } from 'next/navigation';
export default function SubsidiesLayout({
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

      // Handle specific acronyms like PMFME or MSME
      let label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

      if (segment === 'pmfme-scheme') label = 'PMFME Scheme';
      if (segment === 'msme') label = 'MSME Policy';
      if (segment === 'up-tourism') label = 'UP Tourism Policy';
      if (segment === 'food-processing') label = 'Food Processing Policy 2023';

      return {
        label,
        href: index === segments.length - 1 ? undefined : href,
      };
    }),
  ];

  const title = breadcrumbItems[breadcrumbItems.length - 1].label;

  return (
    <div className="min-h-screen bg-slate-50">
      <SubsidyNavbar />
      <div className="w-full h-24" />
      <BreadcrumbSection
        className="pb-8 md:pb-12"
        title={title}
        breadcrumbItems={breadcrumbItems}
      />

      {children}

      <SubsidyCTA />
      <SubsidyFooter />
    </div>
  );
}
