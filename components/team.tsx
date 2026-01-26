'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const experts = [
  {
    name: 'Ratnesh Jaiswal',
    img: '/image.png',
  },
  {
    name: 'Jitendra Singh',
    img: '/image1.png',
  },
  {
    name: 'Chetan Jaiswal',
    img: '/image2.png',
  },
  {
    name: 'Expert Name Coming Soon',
    img: '/image3.png',
  },
];

export function Team() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-orange-600 md:text-5xl">
            Our Experts
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-700">
            Meet the SME Partner team—your trusted experts in industrial
            consultancy, subsidy, and solar solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-4">
          {experts.map((expert, idx) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative h-52 w-52 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={expert.img}
                  alt={expert.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="mt-2 text-center text-lg font-semibold text-slate-800">
                {expert.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
