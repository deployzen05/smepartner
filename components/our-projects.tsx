'use client';

import { ArrowRight, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';
import { motion } from 'motion/react';

const projects = [
  {
    image:
      'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=1000&auto=format&fit=crop',
    title: 'Industrial Solar Project – Jiolite',
    location: 'Manufacturing Unit, Uttar Pradesh',
  },
  {
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop',
    title: 'Rooftop Solar Installation – Morano',
    location: 'Commercial Facility',
  },
  {
    image:
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1000&auto=format&fit=crop',
    title: 'Solar Power Project – Badshah',
    location: 'Food Processing Unit',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1679500295214-ef105cc843a5?q=80&w=1171&auto=format&fit=crop',
    title: 'Industrial Solar Support – Rustam',
    location: 'Industrial Client, Uttar Pradesh',
  },
  {
    image:
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1000&auto=format&fit=crop',
    title: 'Commercial Rooftop Solar Project',
    location: 'UP Based Client',
  },
  {
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop',
    title: 'Cold Storage Solar Project',
    location: 'Cold Storage Facility, UP',
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
}) => (
  <div className="group relative mx-4 w-[300px] shrink-0 overflow-hidden rounded-[30px] md:w-[380px]">
    <div className="relative h-[280px] overflow-hidden rounded-[30px] shadow-lg md:h-[320px]">
      <Image
        src={image}
        alt={title}
        fill
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />

      <div className="absolute bottom-0 left-0 right-0 p-8 transition-transform duration-300 group-hover:translate-y-0">
        <span className="mb-2 block text-xs font-bold tracking-wider text-orange-400 uppercase">
          {location}
        </span>
        <h3 className="text-xl font-bold text-white leading-tight">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

export function OurProjects() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-7xl px-4 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <Briefcase className="h-4 w-4" />
          </div>
          <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
            Projects & Client Engagements
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-bold text-orange-600 md:text-5xl">
          Trusted by Leading Businesses Across Uttar Pradesh
        </h2>

        <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
          A snapshot of solar and consultancy projects executed and supported by
          SME Partner for industrial, commercial, and food processing clients.
        </p>
      </div>

      <Marquee pauseOnHover className="py-6 [--duration:50s]">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </Marquee>
    </section>
  );
}
