'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import SolarIcon from '../public/solar.png';

export function SubsidyAbout() {
  return (
    <section
      id="about-subsidy"
      className="overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* VIDEO/IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex w-full items-center justify-center"
          >
            <div className="relative aspect-video w-full max-w-lg overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <Image
                src="/sub-2.jfif"
                alt="Solar Subsidy Expertise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="absolute -bottom-8 -left-16 z-30 hidden md:block">
              <Image
                src={SolarIcon}
                alt="Solar Icon"
                width={140}
                height={140}
                priority
              />
            </div>
          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-orange-600 md:text-5xl">
              Solar Subsidy Experts
            </h2>

            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                Navigating government incentives can be complex. At SME Partner,
                we simplify the process of claiming capital subsidies — ranging
                from <strong>35% for industrial units</strong> to a massive{' '}
                <strong>90% for women-owned food processing plants</strong>.
              </p>

              <p>
                Whether it is the <strong>PM Surya Ghar Yojana</strong>, MSME
                Policy 2022, or the Food Processing Policy 2023, our team
                handles the entire lifecycle of your application to ensure
                maximum benefit realization.
              </p>

              <p>
                We ensure that your project is fully compliant with department
                guidelines, from system design to statutory documentation,
                guaranteeing you get the financial support you deserve.
              </p>

              <p className="font-semibold text-slate-800">
                Turning Uttar Pradesh’s industrial and dairy development
                policies into real financial benefits for your business growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
