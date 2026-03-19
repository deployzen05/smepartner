'use client';

import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export function ReadyToGoSolar() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <ArrowDown className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Ready to Go Solar?
            </span>
          </div>

          <h2 className="mb-6 text-3xl leading-tight font-bold text-balance text-orange-600 md:text-5xl">
            Start Your Solar Journey with SME Partner
          </h2>

          <p className="text-lg leading-relaxed text-slate-700">
            SME Partner simplifies your transition to solar energy with a
            structured, transparent process — from site assessment and
            documentation to installation and subsidy support, all handled by
            our in-house team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            {[
              'https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg',
              'https://images.pexels.com/photos/6040783/pexels-photo-6040783.jpeg',
              'https://images.pexels.com/photos/28321970/pexels-photo-28321970.jpeg',
              'https://images.pexels.com/photos/7211069/pexels-photo-7211069.jpeg',
            ].map((id, idx) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={id}
                  alt="Solar project execution by SME Partner"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {[
              'Initial Consultation & Requirement Understanding',
              'Free Site Survey & Feasibility Assessment',
              'System Design, Costing & Documentation',
              'Government Approvals & Subsidy Processing',
              'Installation, Commissioning & Support',
            ].map((step, idx, arr) => (
              <Link href="/enquire" key={idx} className="group block">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-orange-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl font-bold text-slate-300 group-hover:text-orange-600">
                      0{idx + 1}.
                    </span>
                    <span className="text-lg font-semibold text-slate-800 md:text-xl">
                      {step}
                    </span>
                  </div>
                  {idx !== arr.length - 1 && (
                    <ArrowDown className="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
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
