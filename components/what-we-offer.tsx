'use client';

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { WhatWeOfferGrid } from './what-we-offer-grid';

export function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Our Services
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-balance text-orange-600 md:text-5xl">
            What We Offer
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
            SME Partner provides end-to-end industrial consultancy and solar
            energy solutions across Uttar Pradesh. Our offerings are designed to
            help businesses and households access government subsidies, project
            finance, and reliable solar installations — all under one roof.
          </p>
        </motion.div>

        {/* Grid */}
        <WhatWeOfferGrid />
      </div>
    </section>
  );
}
