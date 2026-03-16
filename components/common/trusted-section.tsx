'use client';

import { motion } from 'motion/react';
import { Marquee } from '@/components/ui/marquee';

import { cn } from '@/lib/utils';
import Image from 'next/image';











const PARTNERS = [
  { name: 'Premier Energies', logo: "/clients/premier-energies.png", blur: true },
  { name: '"/clients/Jackson.png"', logo: "/clients/Jackson.png", blur: true },
  { name: '"/clients/luminous.png" Solar', logo: "/clients/luminous.png", blur: true },
  { name: '"/clients/Havells_Logo.svg"', logo: "/clients/Havells_Logo.svg", blur: false },
  { name: 'UTL Solar', logo: "/clients/utm-solar.png", blur: true },
  { name: 'Loom Solar', logo: "/clients/loom-solar-logo.png", blur: true },
  { name: 'Vikram Solar', logo: "/clients/Vikram_Solar_logo.svg", blur: false },
  { name: 'Tata Power Solar', logo: "/clients/tata-power-solar.png", blur: true },
  { name: 'Usha Shriram', logo: "/clients/usha-shriram.png", blur: true },
];

export function TrustedSection({ 
  noHeader = false, 
  noSection = false,
  noAnimation = false
}: { 
  noHeader?: boolean;
  noSection?: boolean;
  noAnimation?: boolean;
}) {
  const innerContent = (
    <div className={cn("container mx-auto px-4 text-center", noSection && "p-0")}>
      {!noHeader && (
        <p className="mb-8 text-sm font-bold tracking-widest text-slate-500 uppercase">
          Official Partners & Equipment Sourced From
        </p>
      )}
      <Marquee pauseOnHover className="[--duration:30s]">
        {PARTNERS.map((partner, i) => (
          <div key={i} className="mx-8 flex items-center justify-center">
            <div className="relative h-12 w-28 md:h-14 md:w-36 px-2">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                
                className="object-contain transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );

  const content = noAnimation ? (
    innerContent
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {innerContent}
    </motion.div>
  );

  if (noSection) return content;

  return (
    <section className="border-b border-slate-100 bg-white py-10 md:py-12">
      {content}
    </section>
  );
}
