'use client';

import React from 'react';

import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const bgImages = [
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1200&auto=format&fit=crop',
  ];

  const [bgIndex, setBgIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const heroRef = React.useRef<HTMLDivElement>(null);
  const [showScrollBtn, setShowScrollBtn] = React.useState(true);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowScrollBtn(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBgIndex((prev) => (prev + 1) % bgImages.length);
  };

  return (
    <div
      id="hero"
      ref={heroRef}
      className="relative -mt-10 flex min-h-[750px] w-full flex-col items-center justify-center gap-0 md:mt-0 lg:flex-row"
    >
      <div className="absolute inset-0 -z-40 h-full min-h-[600px] w-full overflow-hidden rounded-none">
        {bgImages.map((img, idx) => (
          <motion.div
            key={img}
            initial={{ opacity: 0 }}
            animate={{ opacity: bgIndex === idx ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={img}
              alt="Solar energy background"
              fill
              className="object-cover opacity-75"
              priority={idx === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}
        <div
          className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30"
          style={{ opacity: 0.95 }}
        />
      </div>
      {showScrollBtn && (
        <button
          onClick={handleNextImage}
          className="fixed right-4 bottom-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-lg ring-1 ring-orange-200 transition-colors hover:bg-orange-100 sm:right-8 sm:bottom-8 sm:h-12 sm:w-12"
          aria-label="Next background image"
          style={{ backdropFilter: 'blur(6px)' }}
        >
          <ChevronRight className="h-6 w-6 text-orange-600 sm:h-7 sm:w-7" />
        </button>
      )}

      <div className="flex flex-1 flex-col justify-center px-2 sm:px-6 md:px-10 lg:ml-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: 'easeOut' },
              },
            }}
          >
            <Badge className="mb-6 w-fit max-w-full border-none bg-orange-100 px-3 py-1 text-center text-sm font-medium whitespace-normal text-orange-600 hover:bg-orange-200">
              🌞 Authorized Vendor for UPNEDA & MNRE
            </Badge>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
              },
            }}
            className="mb-6 text-2xl leading-[1.1] font-bold text-balance text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Empowering Your Business with
            <br />
            <span className="bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              SME Partner
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' },
              },
            }}
            className="mb-8 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            SME Partner delivers end-to-end solar execution services. From
            Residential Rooftops to Industrial Power Plants, we help you secure
            government subsidies and financing at 6% interest.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' },
              },
            }}
            className="mb-10 flex flex-wrap gap-2 sm:gap-4"
          >
            {[
              { icon: Zap, text: 'PM Surya Ghar Yojana' },
              { icon: ShieldCheck, text: '25 Years Warranty' },
              { icon: CheckCircle2, text: '6% Interest Loans' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex cursor-default items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-0 text-xs text-white shadow-sm backdrop-blur-md transition-shadow hover:shadow-md sm:text-sm"
              >
                <feature.icon className="h-4 w-4 fill-orange-500 text-orange-500" />
                <span className="text-sm font-semibold text-slate-100">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-lg border-b-4 border-[#eec248] bg-[#ffd563] px-6 py-3 text-base font-bold text-black shadow-lg hover:bg-[#ffca28] active:translate-y-1 active:border-b-0 sm:px-10 sm:py-5 sm:text-lg"
            >
              <a href="/enquire">Schedule a Demo</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
