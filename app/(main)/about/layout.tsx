'use client';

import { Zap } from 'lucide-react';
import { CTASection } from '@/components/common/cta-section';
import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import { TrustedSection } from '@/components/common/trusted-section';
import { WhyChooseUsTwo } from '@/components/common/why-choose-us-two';
import { motion } from 'motion/react';




export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20" />
      {children}
      <WhyChooseUsTwo />
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Zap className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                Technology Ecosystem
              </span>
            </div>
            <h2 className="mb-8 text-2xl font-bold leading-tight text-balance text-orange-600 md:text-3xl">
              Equipment Sourced From Industry Leaders
            </h2>

            <TrustedSection noHeader noSection noAnimation />
          </motion.div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
