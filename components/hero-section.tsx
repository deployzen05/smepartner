'use client';

import React from 'react';

import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  PlayCircle,
  ChevronRight,
} from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { EnquiryDialog } from './Home/enquire-dialog';

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

  // Solar background images for carousel
  const bgImages = [
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1200&auto=format&fit=crop',
  ];

  // Simple carousel state
  const [bgIndex, setBgIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Handler for manual scroll button
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBgIndex((prev) => (prev + 1) % bgImages.length);
  };

  return (
    <div
      id="hero"
      className="max-w-8xl relative mx-auto flex min-h-[600px] flex-col items-center justify-center gap-0 pt-0 pb-4 lg:flex-row lg:pt-0"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 -z-40 h-full min-h-[600px] w-full overflow-hidden rounded-none">
        {bgImages.map((img, idx) => (
          <motion.div
            key={img}
            initial={{ opacity: 0 }}
            animate={{ opacity: bgIndex === idx ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
              opacity: 0.75,
            }}
            aria-hidden="true"
          />
        ))}
        {/* Overlay for readability */}
        <div
          className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/50"
          style={{ opacity: 0.92 }}
        />
      </div>
      {/* Scroll Button for Carousel */}
      <button
        onClick={handleNextImage}
        className="fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg ring-1 ring-orange-200 transition-colors hover:bg-orange-100"
        aria-label="Next background image"
        style={{ backdropFilter: 'blur(6px)' }}
      >
        <ChevronRight className="h-7 w-7 text-orange-600" />
      </button>

      {/* Left: Text Content */}
      <div className="ml-20 flex flex-1 flex-col justify-center">
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
            className="mb-6 text-4xl leading-[1.1] font-bold text-balance text-[#1a1a1a] md:text-5xl lg:text-6xl"
          >
            Empowering Your Business with
            <br />
            <span className="bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              SME Solar Solutions
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
            className="mb-8 max-w-xl text-lg leading-relaxed text-[#4a4a4a]"
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
            className="mb-10 flex flex-wrap gap-4"
          >
            {[
              { icon: Zap, text: 'PM Surya Ghar Yojana' },
              { icon: ShieldCheck, text: '25 Years Warranty' },
              { icon: CheckCircle2, text: '6% Interest Loans' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex cursor-default items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-0 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <feature.icon className="h-4 w-4 fill-orange-600 text-orange-600" />
                <span className="text-sm font-semibold text-slate-700">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>
          {/* Schedule a Demo Button */}
          <div className="mt-6">
            <Button
              asChild
              className="rounded-lg border-b-4 border-[#eec248] bg-[#ffd563] px-10 py-5 text-lg font-bold text-black shadow-lg hover:bg-[#ffca28] active:translate-y-1 active:border-b-0"
            >
              <a href="/enquire">Schedule a Demo</a>
            </Button>
          </div>
        </motion.div>
      </div>
      {/* No video or logo on the right; only background images remain */}
    </div>
  );
}
