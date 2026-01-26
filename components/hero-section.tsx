'use client';

import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Zap, ShieldCheck, PlayCircle } from 'lucide-react';
import { motion, type Variants } from 'motion/react';

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

  return (
    <div className="flex flex-col justify-center pt-8 lg:pt-0">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <Badge className="mb-6 w-fit border-none bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 hover:bg-orange-200">
            🌞 Authorized Vendor for UPNEDA & MNRE
          </Badge>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 text-4xl leading-[1.1] font-bold text-[#1a1a1a] md:text-5xl lg:text-6xl"
        >
          Empowering Your Business with
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            SME Solar Solutions
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-8 max-w-xl text-lg leading-relaxed text-[#4a4a4a]"
        >
          SME Partner delivers end-to-end solar execution services. From
          Residential Rooftops to Industrial Power Plants, we help you secure
          government subsidies and financing at 6% interest.
        </motion.p>

        <motion.div variants={item} className="mb-10 flex flex-wrap gap-4">
          {[
            { icon: Zap, text: 'PM Surya Ghar Yojana' },
            { icon: ShieldCheck, text: '25 Years Warranty' },
            { icon: CheckCircle2, text: '6% Interest Loans' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex cursor-default items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
            >
              <feature.icon className="h-4 w-4 fill-orange-500 text-orange-500" />
              <span className="text-sm font-semibold text-slate-700">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
        >
          <video
            className="absolute inset-0 h-full w-full scale-105 transform object-cover transition-transform duration-1000 group-hover:scale-100"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200"
          >
            <source
              src="https://videos.pexels.com/video-files/3195650/3195650-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-full bg-white/30 p-4 backdrop-blur-md">
              <PlayCircle
                className="h-16 w-16 text-white drop-shadow-lg"
                fill="currentColor"
              />
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20 text-white">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-lg font-bold">
                  Industrial & Residential Solar
                </div>
                <div className="text-sm opacity-90">
                  Up to ₹1,08,000 Subsidy Available
                </div>
              </div>
              <div className="hidden text-right sm:block">
                <div className="mb-1 text-xs font-bold tracking-wider uppercase opacity-80">
                  Max Subsidy
                </div>
                <div className="text-xl font-bold">₹ 1.08 Lakh</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
