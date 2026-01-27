'use client';

import { motion } from 'motion/react';
import { WhatWeOfferGrid } from './what-we-offer-grid';

export function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-center justify-center"
        >
          <h2 className="mb-4 text-center text-3xl font-bold text-orange-600 md:text-5xl">
            What We Offer
          </h2>
          <div className="mx-auto w-full max-w-2xl rounded-xl bg-white/60 p-6 text-center text-lg text-slate-700">
            Customized solar solutions, subsidies, and project support for
            residential, commercial, and industrial clients. Explore our
            offerings below!
          </div>
        </motion.div>

        <WhatWeOfferGrid />
      </div>
    </section>
  );
}
