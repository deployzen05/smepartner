'use client';

import { motion } from 'motion/react';
import { Marquee } from '@/components/ui/marquee';

const EQUIPMENT_PARTNERS = [
  'Premier Energies',
  'Jakson',
  'Luminous Solar',
  'Havells',
  'UTL Solar',
  'Loom Solar',
  'Vikram Solar',
  'Tata Power Solar',
  'Usha Shriram',
];

const VALUABLE_CLIENTS = ['Jiolite', 'Morano', 'Badshah', 'Rustam'];

export function PartnersAndClients() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Equipment Partners - Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="mb-2 text-sm font-bold tracking-widest text-orange-600 uppercase">
            Our Technology Ecosystem
          </h3>
          <p className="mb-8 text-2xl font-bold text-slate-900 text-balance md:text-3xl">
            Equipment Sourced From Industry Leaders
          </p>
          
          <div className="relative mx-auto max-w-[90vw] overflow-hidden mask-linear-gradient">
            <Marquee pauseOnHover className="[--duration:40s]">
              {EQUIPMENT_PARTNERS.map((partner, i) => (
                <div
                  key={i}
                  className="mx-6 flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="text-lg font-bold whitespace-nowrap text-slate-600 md:text-xl">
                    {partner}
                  </span>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-slate-50 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-slate-50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Clients - Static Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="mb-2 text-sm font-bold tracking-widest text-slate-500 uppercase">
            Trusted By
          </h3>
          <p className="mb-10 text-xl font-semibold text-slate-900">
            Valuable Customers & Brands
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {VALUABLE_CLIENTS.map((client, i) => (
              <div
                key={i}
                className="group flex min-w-[140px] items-center justify-center rounded-2xl bg-white px-8 py-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-orange-500/20"
              >
                <span className="text-xl font-black tracking-tight text-slate-400 grayscale transition-all group-hover:text-slate-900 group-hover:grayscale-0">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
