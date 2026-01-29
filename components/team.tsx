'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Image1 from '../public/image.png';
import Image2 from '../public/image1.png';
import Image3 from '../public/image3.png';

const teams = [
  {
    name: 'Chetan Jaiswal',
    title: 'Industrial Subsidy & Solar Consultant',
    image: Image1,
  },
  {
    name: 'Ratnesh Singh',
    title: 'SME & Project Finance Specialist',
    image: Image2,
  },
  {
    name: 'Jitendra Singh',
    title: 'Industrial Compliance & Subsidy Consultant',
    image: Image3,
  },
];

export function Team() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />
        <div className="absolute -right-[10%] bottom-[20%] h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wider text-orange-600 uppercase">
              Our Experts
            </span>
          </div>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Meet the Minds Behind <span className="text-orange-600">SME Partner</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 text-pretty">
            Experienced consultants dedicated to maximizing your industrial subsidies
            and ensuring compliant solar energy projects across Uttar Pradesh.
          </p>
        </motion.header>

        {/* Team Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-fill transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                
                {/* Floating Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold leading-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-orange-200 opacity-90">
                    {member.title}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-4 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
