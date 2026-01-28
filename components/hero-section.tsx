'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Zap, ShieldCheck, ChevronRight, FileText } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const bgImages = [
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1600&auto=format&fit=crop',
  ];

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
      id="hero"
      className="relative z-10 flex min-h-[750px] pt-5 w-full items-center overflow-hidden"
    >
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, idx) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: bgIndex === idx ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src={img}
              alt="Solar and industrial background"
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
          whileInView="show"
          viewport={{ once: true }}
          className="flex max-w-2xl flex-col items-start text-left"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-700">
            🌞 Authorized UPNEDA Vendor · MNRE Associated
          </Badge>

          <motion.h1 className="mb-4 text-left text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Empowering Your Business with
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Government Subsidies & Solar Power
            </span>
          </motion.h1>

          <motion.p className="mb-6 max-w-xl text-left text-base text-slate-200 sm:text-lg">
            Since 2015, SME Partner has helped businesses and households across
            Uttar Pradesh unlock industrial incentives, capital subsidies, and
            reliable solar power solutions — with complete documentation and
            government coordination.
          </motion.p>

          <motion.div className="mb-8 flex flex-wrap gap-3">
            {[
              { icon: Zap, text: 'PM Surya Ghar Yojana Support' },
              { icon: ShieldCheck, text: '25+ Years Panel Life' },
              { icon: FileText, text: 'Up to 90% Subsidy Assistance' },
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

          <Button
            asChild
            className="rounded-lg border-b-4 border-[#eec248] bg-[#ffd563] px-8 py-5 text-lg font-bold text-black shadow-lg hover:bg-[#ffca28] active:translate-y-1 active:border-b-0"
          >
            <Link href="/enquire">Get Free Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
