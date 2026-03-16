"use client";
import Image from 'next/image';
import { motion } from 'motion/react';

export function AboutContent() {
  return (
    <div className="relative pt-20">
      <section className="relative flex h-[40vh] min-h-[400px] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg"
            alt="SME Partner Consultancy and Solar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-black text-white md:text-5xl lg:text-6xl drop-shadow-md">
            SME Partner
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-medium text-slate-200 md:text-xl md:font-semibold drop-shadow">
            Uttar Pradesh's most trusted partner for Industrial Subsidy Consultancy and end-to-end Solar EPC solutions.
          </p>
        </div>
      </section>

      <section id="about" className="overflow-hidden bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
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
                  <source
                    src="https://www.pexels.com/download/video/8853487/"

                    type="video/mp4"
                  />
                </video>

                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="absolute -bottom-8 -left-16 z-30 hidden md:block">
                <Image
                  src="/solar.png"
                  alt="Solar Icon"
                  width={140}
                  height={140}
                  priority
                />
              </div>
            </motion.div>

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

              <div className="space-y-6 max-w-2xl text-lg text-slate-700 leading-relaxed">
                <p>
                  Established in 2015, <strong className="text-slate-900">SME Partner</strong> is Uttar Pradesh’s most trusted industrial consultancy and an authorized UPNEDA vendor.
                </p>

                <p>
                  We specialize in securing critical government subsidies (up to 35% capital subsidy for food processing, MSME technology upgradation grants) and providing robust project financing for dynamic sectors including manufacturing, tourism, and textiles.
                </p>

                <p>
                  Operating under our dedicated solar division, we also deliver end-to-end solar EPC services. From residential rooftop installations under the <strong className="text-slate-900">PM Surya Ghar Yojana</strong> to large-scale commercial and industrial solar plants, we ensure maximum clean energy subsidies and financing at minimal interest rates.
                </p>

                <div className="rounded-xl bg-orange-50 p-6 border border-orange-100">
                  <p className="font-semibold text-slate-800 mb-2">
                    Our comprehensive 5-step approach:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-base text-slate-700">
                    <li>In-depth analysis & eligibility assessment</li>
                    <li>Site survey & documentation collection</li>
                    <li>Strict compliance review & processing</li>
                    <li>Seamless execution & policy follow-ups</li>
                    <li>Final approval & direct DB subsidy disbursement</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
