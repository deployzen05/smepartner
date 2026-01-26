'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const experts = [
  {
    name: 'Ratnesh Jaiswal',
    img: '/experts/ratnesh.jpg',
  },
  {
    name: 'Jitendra Singh',
    img: '/experts/jitendra.jpg',
  },
  {
    name: 'Chetan Jaiswal',
    img: '/experts/chetan.jpg',
  },
];

export function About() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Images on the left */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-40 w-full overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                alt="Solar Install 1"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-40 w-full overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=800&auto=format&fit=crop"
                alt="Solar Install 2"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-40 w-full overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop"
                alt="Solar Install 3"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-40 w-full overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop"
                alt="Solar Install 4"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          {/* Text on the right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-orange-600 md:text-5xl">
              About SME Partner
            </h2>
            <p className="mb-6 max-w-2xl text-lg text-slate-700">
              Uttar Pradesh’s most trusted industrial consultancy for MSMEs,
              manufacturing, food processing, hospitality, textiles, and
              renewable energy.
              <br />
              <br />
              We help businesses secure government subsidies, project finance,
              and approvals for solar, machinery, hotels, and more.
              <br />
              <br />
              Our team provides complete handholding—from eligibility to
              documentation, departmental approvals, and final subsidy
              disbursement.
              <br />
              <br />
              Turning government policies into real financial benefits for your
              business growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
