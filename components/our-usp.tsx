'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const usps = {
  left: [
    {
      title: 'One-Stop EPC Solution',
      description:
        'End-to-end support including feasibility analysis, documentation, installation, and subsidy assistance.',
    },
    {
      title: 'Financial Ease',
      description:
        'Assistance with bank financing and solar loans starting from 6% interest, including project finance support.',
    },
  ],
  right: [
    {
      title: 'Government Authorized',
      description:
        'Authorized vendor with UPNEDA and associated with MNRE, ensuring compliance and eligibility-based subsidy support.',
    },
    {
      title: 'Long-Term Performance Support',
      description:
        'Dedicated operations and maintenance services to keep your plant running efficiently for decades.',
    },
  ],
};

export function OurUSP() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
      {/* Background glows */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 20, 0], y: [0, -20, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100/50 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, 30, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-orange-100/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-4 flex items-center justify-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Our USP
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-3xl font-bold leading-tight text-balance text-orange-600 md:text-5xl"
          >
            What Makes SME Partner Different
          </motion.h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-12 lg:space-y-24">
            {usps.left.map((item, idx) => (
              <USPItem
                key={item.title}
                item={item}
                align="right"
                delay={idx * 0.15}
              />
            ))}
          </div>

          {/* Center Image - Interactive */}
          <div className="relative mx-auto flex h-[400px] w-full max-w-md items-center justify-center lg:h-[500px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border-2 border-dashed border-slate-300"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 overflow-hidden rounded-full border-8 border-white/50 bg-white shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="https://images.pexels.com/photos/8853506/pexels-photo-8853506.jpeg"
                alt="Solar project expertise"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 lg:space-y-24">
            {usps.right.map((item, idx) => (
              <USPItem
                key={item.title}
                item={item}
                align="left"
                delay={0.2 + idx * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function USPItem({
  item,
  align,
  delay,
}: {
  item: any;
  align: 'left' | 'right';
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={`group flex flex-col gap-4 ${
        align === 'right'
          ? 'items-center lg:items-end lg:text-right'
          : 'items-center lg:items-start lg:text-left'
      }`}
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-md transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
        <CheckCircle2 className="h-8 w-8" />
        <div className="absolute -inset-2 rounded-3xl border border-orange-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-orange-600">
          {item.title}
        </h3>
        <p className="max-w-xs text-slate-600 leading-relaxed group-hover:text-slate-700">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
