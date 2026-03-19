'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, FileText, IndianRupee } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const bgImages = [
  '/sub-1.png',
  '/sub-2.png',
  '/sub-3.png',
  '/sub-4.png',
];

export function SubsidyHero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [bgIndex, setBgIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(
      () => setBgIndex((i) => (i + 1) % bgImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, [bgIndex]);

  return (
    <section
      id="subsidy-hero"
      className="relative z-10 flex min-h-[750px] w-full items-center overflow-hidden bg-slate-900 pt-5 pb-10"
    >
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, idx) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: idx === 0 ? 1 : 0, scale: 1.1 }}
            animate={{
              opacity: bgIndex === idx ? 1 : 0,
              scale: bgIndex === idx ? 1 : 1.1
            }}
            transition={{
              opacity: { duration: 1.5, ease: 'easeInOut' },
              scale: { duration: 5, ease: 'easeOut' }
            }}
          >
            <Image
              src={img}
              alt="Solar energy backgrounds"
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-3xl flex-col items-start text-left"
        >
          <motion.div variants={item}>
            <Badge className="mb-6 border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-md">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Authorized UPNEDA Vendor
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            Experience the Power of
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
              Clean Energy & Subsidies
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-10 max-w-xl text-left text-lg font-light leading-relaxed text-slate-300 sm:text-xl"
          >
            Unlock up to <strong className="font-semibold text-white">90% capital subsidy</strong> with SME Partner. We manage all
            documentation and coordination for industries and homes across UP.
          </motion.p>

          <motion.div variants={item} className="mb-12 flex flex-col gap-4 sm:flex-row sm:gap-8">
            {[
              { icon: FileText, text: 'UPNEDA Authorized' },
              { icon: IndianRupee, text: 'Up to 90% Subsidy' },
              { icon: ShieldCheck, text: 'End-to-End Docs' },
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-slate-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <f.icon className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-sm font-medium tracking-wide uppercase">{f.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <Button
              asChild
              className="group relative overflow-hidden rounded-full bg-orange-500 px-10 py-7 text-lg font-semibold tracking-wide text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] transition-all hover:scale-105 hover:bg-orange-600"
            >
              <Link href="/enquire">
                <span className="relative z-10">Claim Your Subsidy</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </Link>
            </Button>
          </motion.div>

          {/* CAROUSEL INDICATORS */}
          <motion.div variants={item} className="mt-12 flex items-center gap-3">
            {bgImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setBgIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${bgIndex === idx
                  ? 'w-8 bg-orange-400'
                  : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
