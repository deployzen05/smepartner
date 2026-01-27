'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const teams = [
  {
    name: 'Ratnesh Jaiswal',
    title: 'SME Expert',
    image: '/image.png',
  },
  {
    name: 'Jitendra Singh',
    title: 'SME Expert',
    image: '/image1.png',
  },
  {
    name: 'Chetan Jaiswal',
    title: 'SME Expert',
    image: '/image2.png',
  },
  {
    name: 'Expert Name Coming Soon',
    title: 'SME Expert',
    image: '/image3.png',
  },
];

export function Team() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl space-y-2 text-center"
        >
          <h2 className="mb-4 text-center text-3xl font-bold text-orange-600 md:text-5xl">
            Our Team
          </h2>
          <div className="mx-auto w-full max-w-2xl rounded-xl bg-white/60 p-6 text-center text-lg text-slate-700">
            Meet the team behind SME Partner—Uttar Pradesh’s most trusted
            industrial consultancy.
          </div>
        </motion.header>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {teams.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-lg border text-center"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={member.image}
                  alt={`picture of ${member.name}`}
                  fill
                  className="rounded-t-lg object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-1 p-4">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
