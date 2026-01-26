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
        src="https://images.unsplash.com/photo-1726776230751-183496c51f00?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

import { useRef, useEffect } from 'react';

export function WhatWeOffer() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Infinite scroll logic for both rows
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let scrollAmount = 0;
    const speed = 1.1; // px per frame
    let rafId: number;
    function animate() {
      if (carousel && carousel.scrollWidth > carousel.clientWidth) {
        scrollAmount += speed;
        if (carousel && scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
        }
        if (carousel) carousel.scrollLeft = scrollAmount;
      }
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Use all features in a single row
  const row = features;

  // Duplicate features for infinite scroll effect
  const getLoopedRow = (row: typeof features) => [...row, ...row];

  return (
    <section className="bg-white py-20">
      <div className="max-w-8xl container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-center justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 text-center text-3xl font-bold text-orange-600 md:text-5xl"
          >
            What We Offer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-full max-w-2xl rounded-xl bg-white/60 p-6 text-center text-lg text-slate-700 shadow-lg backdrop-blur-md"
          >
            Customized solar solutions, subsidies, and project support for
            residential, commercial, and industrial clients. Explore our
            offerings below!
          </motion.div>
        </motion.div>
        <div>
          <div
            ref={carouselRef}
            className="no-scrollbar flex gap-12 overflow-x-hidden pb-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {getLoopedRow(row).map((feature, idx) => (
              <motion.div
                key={feature.name + idx}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * idx }}
                className="h-105 max-w-135 min-w-110 flex-1"
              >
                <BentoCard {...feature} className="h-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
