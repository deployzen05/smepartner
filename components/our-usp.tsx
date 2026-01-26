'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const usps = {
  left: [
    {
      title: 'One-Stop Solution',
      description:
        'Complete EPC services: Analysis, Documentation, Installation, and Subsidy Disbursement.',
    },
    {
      title: 'Financial Ease',
      description:
        'We facilitate bank loans at 6% interest and manage all project finance assisting.',
    },
  ],
  right: [
    {
      title: 'Government Authorized',
      description:
        'Direct vendor for UPNEDA and associated with MNRE. Guaranteed subsidy support.',
    },
    {
      title: 'Expert Maintenance',
      description:
        'Dedicated O&M team ensuring your plant operates at peak efficiency for decades.',
    },
  ],
};

export function OurUSP() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Decorative background elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100/50 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-orange-100/40 blur-3xl"
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center justify-center gap-2"
          >
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
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Our USP
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl leading-tight font-bold text-slate-900 md:text-5xl"
          >
            Leading Solar Energy Provider in UP
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          {/* Left Column */}
          <div className="order-2 space-y-12 lg:order-1 lg:space-y-24">
            {usps.left.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group flex flex-col items-center text-center lg:items-end lg:text-right"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-orange-600">
                  {item.title}
                </h3>
                <p className="max-w-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative order-1 mx-auto h-[400px] w-full max-w-md lg:order-2 lg:h-[500px]">
            {/* Circle Background behind image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border-2 border-dashed border-slate-300"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
              className="absolute inset-0 overflow-hidden rounded-full border-8 border-white/50 bg-white shadow-2xl"
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1664302342178-564b28c68d33?q=80&w=1170&auto=format&fit=crop"
                alt="Solar Expert"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="order-3 space-y-12 lg:space-y-24">
            {usps.right.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                className="group flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-orange-600">
                  {item.title}
                </h3>
                <p className="max-w-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
