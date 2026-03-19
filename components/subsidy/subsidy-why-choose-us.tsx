'use client';

import {
  ArrowRight,
  Trophy,
  ShieldCheck,
  Percent,
  IndianRupee,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

const benefits = [
  {
    title: 'Registered IIA',
    description:
      'Registered with the Indian Industries Association (IIA), ensuring compliance and dedicated subsidy support.',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Consultants',
    description:
      'Our team comprises seasoned experts deeply versed in state and central government industrial policies.',
    icon: Award,
  },
  {
    title: 'Maximum Subsidy Realization',
    description:
      'We meticulously prepare and file your claims to ensure you receive the highest possible grant.',
    icon: Percent,
  },
  {
    title: 'Project Finance Support',
    description:
      'Facilitation of industrial loans and project financing through our extensive banking network.',
    icon: IndianRupee,
  },
  {
    title: 'End-to-End Execution',
    description:
      'From document preparation to department liaison, we manage the entire subsidy lifecycle.',
    icon: Trophy,
  },
];

export function SubsidyWhyChooseUs() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left"
          >
            <div>
              <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Trophy className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                  Why Choose Us
                </span>
              </div>

              <h2 className="mb-6 text-3xl leading-tight font-bold text-balance text-orange-600 md:text-5xl">
                Why SME Partner is Uttar Pradesh’s Trusted Choice for Subsidies
              </h2>

              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Claiming industrial and government subsidies requires a deep
                  understanding of policies, meticulous documentation, and
                  consistent follow-ups. SME Partner simplifies this complex
                  process for businesses across UP.
                </p>
                <p>
                  Whether you are seeking Capital Grants, Mandi Tax Exemptions,
                  or MSME incentives, our experienced consultants act as an
                  extension of your team to secure the benefits your business
                  deserves.
                </p>
              </div>
            </div>

            <Link
              href="/enquire"
              className="group inline-flex items-center rounded-md bg-[#ffd563] px-8 py-3 font-bold text-black shadow-md transition-all hover:bg-[#ffca28] hover:shadow-lg"
            >
              Consult an Expert
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* BENEFITS LIST */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: 'easeOut',
                  }}
                  className="flex flex-col items-center gap-4 rounded-xl border border-slate-100 p-5 text-center transition-colors hover:border-orange-200 hover:bg-orange-50/30 sm:flex-row sm:text-left"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white text-orange-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
