'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';
import { motion } from 'motion/react';

const projects = [
  {
    image:
      'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=1000&auto=format&fit=crop',
    title: 'Industrial Solar Project, Jiolite',
    location: 'Manufacturing Unit',
  },
  {
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop',
    title: 'Rooftop Solar Plant, Morano',
    location: 'Commercial Facility',
  },
  {
    image:
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1000&auto=format&fit=crop',
    title: 'Solar Installation, Badshah',
    location: 'Food Processing',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1679500295214-ef105cc843a5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Solar Power Plant, Rustam',
    location: 'Industrial Client',
  },
  {
    image:
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1000&auto=format&fit=crop',
    title: '155kWp Solar Plant, Siliguri',
    location: 'Commercial Rooftop',
  },
  {
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop',
    title: '150kWp Solar Plant, Cold Store',
    location: 'Cold Storage Facility',
  },
];

const ProjectCard = ({
  image,
  title,
  location,
}: {
  image: string;
  title: string;
  location: string;
}) => {
  return (
    <div className="group relative mx-4 w-[300px] max-w-sm shrink-0 overflow-hidden rounded-[30px] md:w-[380px]">
      <div className="relative h-[280px] w-full overflow-hidden rounded-[30px] shadow-lg md:h-[320px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        <div className="absolute right-0 bottom-0 left-0 translate-y-4 transform p-8 transition-transform duration-300 group-hover:translate-y-0">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-orange-400 uppercase">
              {location}
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-opacity delay-100 duration-300 group-hover:opacity-100">
              <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </div>
          </div>
          <h3 className="text-xl leading-tight font-bold text-white">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export function OurProjects() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="container mx-auto mb-16 max-w-7xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18" />
            </svg>
          </div>
          <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
            Valuable Customers
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-4xl text-3xl leading-tight font-bold text-slate-900 md:text-5xl"
        >
          Trusted by top brands for their energy needs.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full"
      >
        <Marquee pauseOnHover className="py-4 [--duration:50s]">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
