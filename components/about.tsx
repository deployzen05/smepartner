'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import SolarIcon from '../public/solar.png';

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* VIDEO BLOCK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex w-full items-center justify-center"
          >
            <div className="relative aspect-video w-full max-w-lg overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg"
              >
                {/* ✅ VALID DIRECT MP4 */}
                <source
                  src="https://www.pexels.com/download/video/8853487/"

                  type="video/mp4"
                />
              </video>

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Decorative image */}
            <div className="absolute -bottom-8 -left-16 z-30 hidden md:block">
              <Image
                src={SolarIcon}
                alt="Solar Icon"
                width={140}
                height={140}
                priority
                placeholder="blur"
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
              About SME Partner
            </h2>

            <div className="space-y-5 max-w-2xl text-lg text-slate-700 leading-relaxed">
              <p>
                SME Partner is Uttar Pradesh’s trusted industrial consultancy,
                supporting MSMEs across manufacturing, food processing,
                hospitality, textiles, and renewable energy sectors.
              </p>

              <p>
                We specialize in securing government subsidies, project finance,
                and statutory approvals for solar installations, machinery,
                hotels, and industrial projects.
              </p>

              <p>
                Our team provides complete handholding — from eligibility
                assessment and documentation to departmental approvals and final
                subsidy disbursement.
              </p>

              <p className="font-semibold text-slate-800">
                Turning government policies into real financial benefits for
                your business growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
