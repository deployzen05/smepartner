'use client';

import { Marquee } from '@/components/ui/marquee';
import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Amit Verma',
    role: 'Cold Storage Owner',
    location: 'Kanpur, Uttar Pradesh',
    content:
      'SME Partner supported us throughout the solar installation and subsidy process. From site assessment to documentation and grid coordination, everything was handled professionally. We have seen a significant reduction in our electricity expenses.',
    stars: 5,
  },
  {
    name: 'Rajendra Srivastava',
    role: 'Manufacturing Unit Owner',
    location: 'Kanpur, Uttar Pradesh',
    content:
      'Our manufacturing unit benefited from SME Partner’s consultancy and solar solutions. Their team managed approvals and follow-ups efficiently, making the entire process smooth and reliable.',
    stars: 5,
  },
  {
    name: 'Atul Singh',
    role: 'MSME Business Owner',
    location: 'Lucknow, Uttar Pradesh',
    content:
      'SME Partner guided us through eligibility checks, documentation, and installation. Their structured approach and clear communication gave us confidence at every stage.',
    stars: 5,
  },
  {
    name: 'Sanjay Mishra',
    role: 'Food Processing Unit Owner',
    location: 'Varanasi, Uttar Pradesh',
    content:
      'We worked with SME Partner for solar installation and subsidy assistance. Their understanding of government schemes and consistent follow-up support was extremely helpful for our business.',
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
}) => (
  <div className="relative mx-3 w-[280px] shrink-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:w-[350px] md:mx-4 md:w-[450px] md:p-8">
    {/* Stars */}
    <div className="mb-4 flex justify-center gap-1 md:justify-start">
      {Array.from({ length: stars }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-orange-400 text-orange-400"
        />
      ))}
    </div>

    {/* Quote */}
    <div className="relative mb-6">
      <MessageSquareQuote className="absolute -top-2 -left-2 -z-10 h-7 w-7 text-orange-100" />
      <p className="text-center text-sm leading-relaxed text-slate-600 italic md:text-left md:text-base">
        “{content}”
      </p>
    </div>

    {/* Author */}
    <div className="flex items-center justify-center gap-4 border-t border-slate-100 pt-4 md:justify-start">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-500">
        {name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">
          {name}
        </div>
        <div className="text-xs text-slate-500">
          {role} · {location}
        </div>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
      {/* Soft background glows */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 h-24 w-24 rounded-full bg-orange-100 blur-2xl"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-10 bottom-20 h-32 w-32 rounded-full bg-yellow-100 blur-2xl"
      />

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-600 md:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          Feedback from industrial, commercial, and MSME clients who have worked
          with SME Partner for solar installations and subsidy consultancy
          services across Uttar Pradesh.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative z-10">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent md:w-40" />

        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </Marquee>
      </div>

      {/* Disclaimer */}
      {/* <p className="relative z-10 mt-8 text-center text-xs text-slate-500">
        Client experiences may vary based on project scope, system capacity,
        usage patterns, and applicable government guidelines.
      </p> */}
    </section>
  );
}
