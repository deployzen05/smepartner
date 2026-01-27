'use client';

import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export function ReadyToGoSolar() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
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
                <path d="M12 3v19" />
                <path d="M5 8h14" />
                <path d="M15 11l-3 3-3-3" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Ready to Go Solar?
            </span>
          </div>
          <h2 className="mb-6 text-3xl leading-tight font-bold text-slate-900 md:text-5xl">
            Let’s Get Started with SME Partner
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Getting your own solar rooftop system is easier and more affordable
            than ever! At SME Partner, we simplify your transition to clean
            energy with a hassle-free process designed for maximum savings and
            efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="grid grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative col-span-7 h-48 overflow-hidden rounded-2xl shadow-md sm:h-64"
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                alt="Solar Install 1"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative col-span-5 mt-8 h-48 overflow-hidden rounded-2xl shadow-md sm:mt-12 sm:h-64"
            >
              <Image
                src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=800&auto=format&fit=crop"
                alt="Solar Install 2"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative col-span-5 -mt-8 h-48 overflow-hidden rounded-2xl shadow-md sm:-mt-12 sm:h-64"
            >
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop"
                alt="Solar Install 3"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative col-span-7 h-48 overflow-hidden rounded-2xl shadow-md sm:h-64"
            >
              <Image
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop"
                alt="Solar Install 4"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>

          <div className="space-y-6">
            {[
              'Reach Out to Us',
              'Free Site Assessment',
              'Personalized Solar Design & System Planning',
              'Documentation & Approval',
              'Quick Installation',
            ].map((step, idx, arr) => (
              <Link href="#form" key={idx} className="group block">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl font-bold text-slate-200 transition-colors group-hover:text-orange-500">
                      0{idx + 1}.
                    </span>
                    <span className="text-lg font-bold text-slate-800 group-hover:text-slate-900 md:text-xl">
                      {step}
                    </span>
                  </div>
                  {idx !== arr.length - 1 && (
                    <ArrowDown className="h-5 w-5 text-slate-400 transition-colors group-hover:text-orange-500" />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
