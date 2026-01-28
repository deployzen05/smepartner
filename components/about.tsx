'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useIsMobile } from '@/hooks/use-mobile';

export function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="overflow-hidden bg-white py-5">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex h-[320px] w-full items-center justify-center"
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
                <source
                  src="https://www.pexels.com/download/video/8853487/"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="absolute -bottom-8 -left-20 z-30 hidden md:block">
              <Image
                src="/solar.png"
                alt="Solar Logo"
                width={140}
                height={140}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={isMobile ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-orange-600 md:text-5xl">
              About SME Partner
            </h2>
            <p className="mb-6 max-w-2xl text-justify text-lg text-slate-700">
              Uttar Pradesh's most trusted industrial consultancy for MSMEs,
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
