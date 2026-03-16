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








const features = [
  {
    Icon: Home,
    name: 'Residential Solar (PM Surya Ghar)',
    description:
      'Rooftop solar solutions for homes under PM Surya Ghar Yojana with central & state subsidy assistance and bank finance options.',
    href: '/solar/services/residential',
    cta: 'Know more',
    imgSrc: "/service-residential.png",
  },
  {
    Icon: Building2,
    name: 'Commercial Solar Solutions',
    description:
      'Customized solar EPC solutions for hospitals, hotels, cold storages, and commercial establishments with long-term ROI focus.',
    href: '/solar/services/commercial',
    cta: 'Know more',
    imgSrc: "/service-commercial.png",
  },
  {
    Icon: Factory,
    name: 'Industrial Solar Projects',
    description:
      'Solar power plants for MSMEs and food processing units with eligibility-based capital subsidy support and compliance handling.',
    href: '/solar/services/industrial',
    cta: 'Know more',
    imgSrc: "/service-industrial.png",
  },
  {
    Icon: Droplets,
    name: 'Solar Water Pump Systems',
    description:
      'Solar-powered pumping solutions for agriculture and industrial use, reducing dependency on grid electricity.',
    href: '/solar/services/pumps',
    cta: 'Know more',
    imgSrc: "/service-pump.png",
  },
  {
    Icon: Wallet,
    name: 'Industrial Subsidy Consultancy',
    description:
      'Consultancy services for capital subsidy, mandi tax exemption, MSME benefits, and project finance across eligible sectors.',
    href: '/subsidy',
    cta: 'Know more',
    imgSrc: "/service-subsidy.png",
  },
  {
    Icon: Zap,
    name: 'Operations & Maintenance',
    description:
      'Long-term operation and maintenance services to ensure consistent generation and system performance.',
    href: '/solar/services/operations',
    cta: 'Know more',
    imgSrc: "/service-maintenance.jpg",
  },
];


export function WhatWeOfferGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, idx) => (
        <motion.div
          key={feature.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-100 p-6 transition-all duration-300 hover:border-orange-200 hover:shadow-xl"
        >
          <div className="relative z-10 flex h-full flex-col justify-between gap-6">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110 group-hover:ring-orange-100">
                <feature.Icon className="h-5 w-5 text-zinc-600 transition-colors duration-300 group-hover:text-orange-600" />
              </div>

              <h3 className="mb-2 text-lg font-bold leading-tight text-slate-900">
                {feature.name}
              </h3>

              <p className="text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-900 uppercase">
                {feature.cta}
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-white transition-transform duration-300 group-hover:-rotate-45">
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>

              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                <Image
                  src={feature.imgSrc}
                  alt={feature.name}
                  fill
                  
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:saturate-125"
                />
              </div>
            </div>
          </div>

          <Link
            href={feature.href}
            className="absolute inset-0 z-20 outline-none focus:ring-4 focus:ring-orange-500/20"
            aria-label={`View details for ${feature.name}`}
          />
        </motion.div>
      ))}
    </div>
  );
}
