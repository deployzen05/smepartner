'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbSectionProps {
  title: string;
  breadcrumbItems: { label: string; href?: string }[];
  backgroundImage?: string;
  className?: string;
}

export function BreadcrumbSection({
  title,
  breadcrumbItems,
  backgroundImage = '/breadcrumb-bg.jpg',
  className,
}: BreadcrumbSectionProps) {
  return (
    <div
      className={cn(
        'relative flex min-h-[250px] items-center bg-cover bg-center bg-no-repeat',
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold text-white md:text-5xl">{title}</h2>

          <Breadcrumb>
            <BreadcrumbList className="text-white/80">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;

                return (
                  <div key={index} className="flex items-center">
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="font-semibold text-white">
                          {item.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          asChild
                          className="text-white/80 transition-colors hover:text-orange-300"
                        >
                          <Link href={item.href || '#'}>{item.label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>

                    {!isLast && (
                      <BreadcrumbSeparator className="mx-2 text-white/60" />
                    )}
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
