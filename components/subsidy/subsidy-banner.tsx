'use client';

import Image from 'next/image';
import { motion } from 'motion/react';


export function SubsidyBanner() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative aspect-[16/12] w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl md:aspect-[21/11]"
        >
          <Image
            src="/banner.jpeg"
            alt="Solar Subsidy Information Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/5" />
        </motion.div>
      </div>
    </section>
  );
}
