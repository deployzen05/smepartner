'use client';

import { Marquee } from '@/components/ui/marquee';
import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Amit Deshmukh',
    role: 'Cold Storage Owner',
    location: 'Nagpur, India',
    content:
      'Choosing SME Partner was a game-changer. Our cold storage energy costs dropped 85%. From installation to grid connection, their service was smooth, professional, and trustworthy.',
    stars: 5,
  },
  {
    name: 'Rajendra Srivastava',
    role: 'Company Owner',
    location: 'Kanpur, India',
    content:
      'Switching to solar with SME Partner has significantly reduced our operational costs. Their installation process was smooth, and the system performance has exceeded our expectations.',
    stars: 5,
  },
  {
    name: 'Atul Singh',
    role: 'Small Business Owner',
    location: 'Lucknow, India',
    content:
      "Choosing SME Partner was one of the best decisions for my business. Their team guided me from installation to grid connection, and now I'm saving nearly 90% on my electricity bills.",
    stars: 5,
  },
  {
    name: 'Arjun M',
    role: 'Environmental Advocate',
    location: 'Delhi, India',
    content:
      'Their expert team ensured smooth installation, grid connection, and now we’re saving around 85% on power bills. Truly professional and reliable service.',
    stars: 5,
  },
];

const TestimonialCard = ({
  name,
  role,
  location,
  content,
  stars,
}: {
  name: string;
  role: string;
  location: string;
  content: string;
  stars: number;
}) => {
  return (
    <div className="relative mx-3 w-[280px] shrink-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:w-[350px] md:mx-4 md:w-[450px] md:p-8">
      <div className="mb-4 flex justify-center gap-1 md:mb-6 md:justify-start">
        {Array.from({ length: stars }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-orange-400 text-orange-400 md:h-4 md:w-4"
          />
        ))}
      </div>

      <div className="relative mb-6 md:mb-8">
        <MessageSquareQuote className="absolute -top-2 -left-2 -z-10 h-6 w-6 text-orange-100 md:h-8 md:w-8" />
        <p className="relative z-10 text-center text-sm leading-relaxed text-slate-600 italic md:text-left md:text-base">
          “{content}”
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 border-t border-slate-50 pt-4 md:justify-start md:gap-4 md:pt-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-base font-bold text-slate-500 md:h-12 md:w-12 md:text-lg">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div className="text-left">
          <div className="text-sm font-bold text-slate-900 md:text-base">
            {name}
          </div>
          <div className="text-[10px] text-slate-500 md:text-xs">
            {role} – {location}
          </div>
        </div>
      </div>
    </div>
  );
};

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 h-24 w-24 rounded-full bg-blue-100 opacity-60 blur-2xl"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.2, 1] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute right-10 bottom-20 h-32 w-32 rounded-full bg-orange-100 opacity-60 blur-2xl"
      />

      <div className="relative z-10 container mx-auto mb-16 max-w-7xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl leading-tight font-bold text-orange-600 md:text-5xl"
        >
          Our Customers Speak For Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-2xl rounded-xl bg-white/60 p-6 text-center text-lg text-slate-700"
        >
          Hear directly from our clients about their success with SME Partner.
          Real stories, real results, and real impact on their businesses.
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative w-full"
      >
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent md:w-48" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent md:w-48" />

        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
