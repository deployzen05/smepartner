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

          <h2 className="mb-6 text-3xl font-bold leading-tight text-balance text-orange-600 md:text-5xl">
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
          <div className="grid grid-cols-12 gap-4">
            {[
              'photo-1509391366360-2e959784a276',
              'photo-1624397640148-949b1732bb0a',
              'photo-1497435334941-8c899ee9e8e9',
              'photo-1548337138-e87d889cc369',
            ].map((id, idx) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-2xl shadow-md ${
                  idx % 2 === 0 ? 'col-span-7' : 'col-span-5'
                } h-48 sm:h-64`}
              >
                <Image
                  src={`https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`}
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
