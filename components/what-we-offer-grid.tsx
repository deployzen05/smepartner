'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  ArrowRight,
  Home,
  Building2,
  Factory,
  Droplets,
  Wallet,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    Icon: Home,
    name: 'Residential (PM Surya Ghar)',
    description:
      'Get up to ₹1,08,000 subsidy & free electricity (300 units). 6% Bank Finance available.',
    href: '/residential',
    cta: 'Check Eligibility',
    imgSrc:
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    Icon: Building2,
    name: 'Commercial Solar',
    description:
      'End-to-end solar solutions for hospitals, hotels, and cold storages with high ROI.',
    href: '/commercial',
    cta: 'Learn more',
    imgSrc:
      'https://images.unsplash.com/photo-1726776230751-183496c51f00?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    Icon: Factory,
    name: 'Industrial Solar',
    description:
      '50-90% Capital Subsidy specially for Food Processing units & MSMEs.',
    href: '/industrial',
    cta: 'View Subsidies',
    imgSrc:
      'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=1000&auto=format&fit=crop',
  },
  {
    Icon: Droplets,
    name: 'Solar Water Pumps',
    description:
      'Efficient solar pumping solutions for unlimited water supply without electricity bills.',
    href: '/pumps',
    cta: 'Learn more',
    imgSrc:
      'https://plus.unsplash.com/premium_photo-1664302342178-564b28c68d33?q=80&w=1170&auto=format&fit=crop',
  },
  {
    Icon: Wallet,
    name: 'Industrial Subsidy',
    description:
      'Consultancy for Capital Subsidy, Mandi Tax Exemption, and Project Finance.',
    href: '/subsidy',
    cta: 'Get Consultation',
    imgSrc:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    Icon: Zap,
    name: 'O&M Services',
    description:
      'Comprehensive operation & maintenance to ensure maximum generation for 25 years.',
    href: '/operations',
    cta: 'View Plans',
    imgSrc:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
  },
];

const chunk = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export function WhatWeOfferGrid() {
  const rows = chunk(features, 2);

  return (
    <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {rows.map((row, rowIndex) => {
        const isPatternA = rowIndex % 2 === 0;

        const leftWidth = isPatternA ? 'lg:w-3/5' : 'lg:w-2/5';
        const rightWidth = isPatternA ? 'lg:w-2/5' : 'lg:w-3/5';

        const leftAspect = isPatternA ? 'lg:aspect-[2.4]' : 'lg:aspect-[1.45]';
        const rightAspect = isPatternA ? 'lg:aspect-[1.45]' : 'lg:aspect-[2.4]';

        const Feature1 = row[0];
        const Feature2 = row[1];

        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: rowIndex * 0.1 }}
            key={rowIndex}
            className={cn(
              'flex flex-col lg:flex-row',
              rowIndex !== rows.length - 1 && 'border-b border-gray-200'
            )}
          >
            {/* Left Item */}
            {row[0] && (
              <div
                className={cn(
                  'flex flex-col justify-between border-b border-gray-200 p-8 transition-colors hover:bg-gray-50/50 lg:border-r lg:border-b-0 lg:p-10',
                  leftWidth
                )}
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Feature1.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                    {row[0].name}
                  </h3>
                  <p className="mb-6 leading-relaxed text-zinc-500">
                    {row[0].description}
                  </p>
                  <div className="group flex w-fit cursor-pointer items-center text-sm font-medium text-zinc-900 transition-colors hover:text-orange-600">
                    {row[0].cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="group relative mt-8 w-full overflow-hidden rounded-sm bg-zinc-100">
                  <div
                    className={cn('relative aspect-[1.5] w-full', leftAspect)}
                  >
                    <Image
                      src={row[0].imgSrc}
                      alt={row[0].name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Right Item */}
            {row[1] && (
              <div
                className={cn(
                  'flex flex-col justify-between p-8 transition-colors hover:bg-gray-50/50 lg:p-10',
                  rightWidth
                )}
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Feature2.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                    {row[1].name}
                  </h3>
                  <p className="mb-6 leading-relaxed text-zinc-500">
                    {row[1].description}
                  </p>
                  <div className="group flex w-fit cursor-pointer items-center text-sm font-medium text-zinc-900 transition-colors hover:text-orange-600">
                    {row[1].cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="group relative mt-8 w-full overflow-hidden rounded-sm bg-zinc-100">
                  <div
                    className={cn('relative aspect-[1.5] w-full', rightAspect)}
                  >
                    <Image
                      src={row[1].imgSrc}
                      alt={row[1].name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
