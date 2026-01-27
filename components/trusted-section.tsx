'use client';

import { motion } from 'motion/react';
import { Marquee } from '@/components/ui/marquee';

const PARTNERS = [
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

export function TrustedSection() {
  return (
    <section className="border-b border-slate-100 bg-white py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center"
      >
        <p className="mb-8 text-sm font-bold tracking-widest text-slate-500 uppercase">
          Official Partners & Equipment Sourced From
        </p>
        <Marquee pauseOnHover className="[--duration:30s]">
          {PARTNERS.map((partner, i) => (
            <div key={i} className="mx-8 flex items-center justify-center">
              <span className="text-xl font-bold whitespace-nowrap text-slate-400 transition-colors hover:text-slate-800 md:text-2xl">
                {partner}
              </span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
