'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, FileText, IndianRupee } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

  const bgImages = ['/sub-1.png', '/sub-2.png', '/sub-3.png', '/sub-4.png'];

  const [bgIndex, setBgIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(
      () => setBgIndex((i) => (i + 1) % bgImages.length),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="subsidy-hero"
      className="relative z-10 flex min-h-[750px] w-full items-center overflow-hidden bg-slate-900 pt-5"
    >
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, idx) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: idx === 0 ? 1 : 0 }}
            animate={{ opacity: bgIndex === idx ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src={img}
              alt="Solar energy backgrounds"
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-2xl flex-col items-start text-left"
        >
          <motion.div variants={item}>
            <Badge className="mb-4 bg-orange-100 text-orange-700">
              🌞 Authorized UPNEDA Vendor
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-4 text-left text-2xl leading-tight font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Experience the Power of
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Clean Energy & Subsidies
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-6 max-w-xl text-left text-base text-slate-200 sm:text-lg"
          >
            Unlock up to 90% capital subsidy with SME Partner. We manage all
            documentation and coordination for industries and homes across UP.
          </motion.p>

          <motion.div variants={item} className="mb-8 flex flex-wrap gap-3">
            {[
              { icon: FileText, text: 'UPNEDA Authorized Vendor' },
              { icon: IndianRupee, text: 'Up to 90% Capital Subsidy' },
              { icon: ShieldCheck, text: 'Complete Documentation' },
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur"
              >
                <f.icon className="h-4 w-4 text-orange-400" />
                <span>{f.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <Button
              asChild
              className="rounded-lg border-b-4 border-[#eec248] bg-[#ffd563] px-8 py-5 text-lg font-bold text-black shadow-lg hover:bg-[#ffca28] active:translate-y-1 active:border-b-0"
            >
              <Link href="/enquire">Claim Your Subsidy</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
