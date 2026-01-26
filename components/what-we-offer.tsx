'use client';

import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { Home, Building2, Factory, Droplets, Wallet, Zap } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const features = [
  {
    Icon: Home,
    name: 'Residential (PM Surya Ghar)',
    description:
      'Get up to ₹1,08,000 subsidy & free electricity (300 units). 6% Bank Finance available.',
    href: '/residential',
    cta: 'Check Eligibility',
    background: (
      <Image
        className="absolute inset-0 object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
        src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop"
        alt="Residential Solar"
        fill
      />
    ),
    className: 'lg:col-span-1',
  },
  {
    Icon: Building2,
    name: 'Commercial Solar',
    description:
      'End-to-end solar solutions for hospitals, hotels, and cold storages with high ROI.',
    href: '/commercial',
    cta: 'Learn more',
    background: (
      <Image
        className="absolute inset-0 object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
        src="https://images.unsplash.com/photo-1549520935-7c0934988457?q=80&w=1000&auto=format&fit=crop"
        alt="Commercial Solar"
        fill
      />
    ),
    className: 'lg:col-span-2',
  },
  {
    Icon: Factory,
    name: 'Industrial Solar',
    description:
      '50-90% Capital Subsidy specially for Food Processing units & MSMEs.',
    href: '/industrial',
    cta: 'View Subsidies',
    background: (
      <Image
        className="absolute inset-0 object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
        src="https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=1000&auto=format&fit=crop"
        alt="Industrial Solar"
        fill
      />
    ),
    className: 'lg:col-span-2',
  },
  {
    Icon: Droplets,
    name: 'Solar Water Pumps',
    description:
      'Efficient solar pumping solutions for unlimited water supply without electricity bills.',
    href: '/pumps',
    cta: 'Learn more',
    background: (
      <Image
        className="absolute inset-0 object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
        src="https://plus.unsplash.com/premium_photo-1664302342178-564b28c68d33?q=80&w=1170&auto=format&fit=crop"
        alt="Solar Pumps"
        fill
      />
    ),
    className: 'lg:col-span-1',
  },
  {
    Icon: Wallet,
    name: 'Industrial Subsidy',
    description:
      'Consultancy for Capital Subsidy, Mandi Tax Exemption, and Project Finance.',
    href: '/subsidy',
    cta: 'Get Consultation',
    background: (
      <Image
        className="absolute inset-0 object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
        alt="Finance"
        fill
      />
    ),
    className: 'lg:col-span-1',
  },
  {
    Icon: Zap,
    name: 'O&M Services',
    description:
      'Comprehensive operation & maintenance to ensure maximum generation for 25 years.',
    href: '/operations',
    cta: 'View Plans',
    background: (
      <Image
        className="absolute inset-0 object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
        alt="Solar O&M"
        fill
      />
    ),
    className: 'lg:col-span-2',
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20" />
                <path d="M2 12h20" />
                <path d="m4.93 4.93 14.14 14.14" />
                <path d="m19.07 4.93-14.14 14.14" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl leading-tight font-bold text-slate-900 md:text-5xl">
            Customized Solar Solutions & Subsidies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-1"
        >
          <BentoGrid className="lg:auto-rows-[25rem]">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className={feature.className}
              >
                <BentoCard {...feature} className="h-full" />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
