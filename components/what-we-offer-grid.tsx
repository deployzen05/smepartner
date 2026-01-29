'use client';

import Link from 'next/link';
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

import ServiceResidential from '../public/service-residential.png';
import ServiceCommercial from '../public/service-commercial.png';
import ServiceIndustrial from '../public/service-industrial.png';
import ServicePump from '../public/service-pump.png';
import ServiceSubsidy from '../public/service-subsidy.png';
import ServiceMaintenance from '../public/service-maintenance.jpg';

const features = [
  {
    Icon: Home,
    name: 'Residential Solar (PM Surya Ghar)',
    description:
      'Rooftop solar solutions for homes under PM Surya Ghar Yojana with central & state subsidy assistance and bank finance options.',
    href: '/services/residential',
    cta: 'Know more',
    imgSrc: ServiceResidential,
  },
  {
    Icon: Building2,
    name: 'Commercial Solar Solutions',
    description:
      'Customized solar EPC solutions for hospitals, hotels, cold storages, and commercial establishments with long-term ROI focus.',
    href: '/services/commercial',
    cta: 'Know more',
    imgSrc: ServiceCommercial,
  },
  {
    Icon: Factory,
    name: 'Industrial Solar Projects',
    description:
      'Solar power plants for MSMEs and food processing units with eligibility-based capital subsidy support and compliance handling.',
    href: '/services/industrial',
    cta: 'Know more',
    imgSrc: ServiceIndustrial,
  },
  {
    Icon: Droplets,
    name: 'Solar Water Pump Systems',
    description:
      'Solar-powered pumping solutions for agriculture and industrial use, reducing dependency on grid electricity.',
    href: '/services/pumps',
    cta: 'Know more',
    imgSrc: ServicePump,
  },
  {
    Icon: Wallet,
    name: 'Industrial Subsidy Consultancy',
    description:
      'Consultancy services for capital subsidy, mandi tax exemption, MSME benefits, and project finance across eligible sectors.',
    href: '/subsidy',
    cta: 'Know more',
    imgSrc: ServiceSubsidy,
  },  
  {
    Icon: Zap,
    name: 'Operations & Maintenance',
    description:
      'Long-term operation and maintenance services to ensure consistent generation and system performance.',
    href: '/services/operations',
    cta: 'Know more',
    imgSrc: ServiceMaintenance,
  },
];

const chunk = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const rows = chunk(features, 2);

export function WhatWeOfferGrid() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {rows.map((row, rowIndex) => {
        const isPatternA = rowIndex % 2 === 0;

        return (
          <div key={rowIndex} className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            {row.map((feature, idx) => {
              const isLeft = idx === 0;
              // Pattern: 60/40 then 40/60
              const widthClass = isPatternA
                ? isLeft
                  ? 'lg:w-[60%]'
                  : 'lg:w-[40%]'
                : isLeft
                ? 'lg:w-[40%]'
                : 'lg:w-[60%]';

              return (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: (rowIndex * 2 + idx) * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98], // smooth ease-out-quart
                  }}
                  className={cn(
                    'group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-gray-50 p-6 will-change-transform transition-colors duration-300 hover:bg-white hover:shadow-xl md:p-10',
                    widthClass
                  )}
                >
                  <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                    {/* Header Part */}
                    <div>
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110 group-hover:ring-orange-100">
                        <feature.Icon className="h-7 w-7 text-zinc-600 transition-colors duration-300 group-hover:text-orange-600" />
                      </div>

                      <h3 className="mb-3 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                        {feature.name}
                      </h3>

                      <p className="max-w-md text-base leading-relaxed text-slate-500 md:text-lg">
                        {feature.description}
                      </p>
                    </div>

                    {/* Bottom Part: CTA + Image */}
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-slate-900 uppercase">
                        {feature.cta}
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white transition-transform duration-300 group-hover:-rotate-45">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl md:aspect-[2/1]">
                        <Image
                          src={feature.imgSrc}
                          alt={feature.name}
                          fill
                          placeholder="blur"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:saturate-150 group-hover:contrast-125"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Accessible Link Overlay */}
                  <Link
                    href={feature.href}
                    className="absolute inset-0 z-20 outline-none focus:ring-4 focus:ring-orange-500/20 focus:ring-offset-2"
                    aria-label={`View details for ${feature.name}`}
                  />
                </motion.div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
