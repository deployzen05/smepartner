'use client';

import { motion } from 'motion/react';
import { Marquee } from '@/components/ui/marquee';

import { cn } from '@/lib/utils';
import Image from 'next/image';

import PremierEnergies from '../public/clients/premier-energies.png';
import Jakson from '../public/clients/Jackson.png';
import Luminous from '../public/clients/luminous.png';
import Havells from '../public/clients/Havells_Logo.svg';
import UTLSolar from '../public/clients/utm-solar.png';
import LoomSolar from '../public/clients/loom-solar-logo.png';
import VikramSolar from '../public/clients/Vikram_Solar_logo.svg';
import TataPower from '../public/clients/tata-power-solar.png';
import UshaShriram from '../public/clients/usha-shriram.png';

const PARTNERS = [
  { name: 'Premier Energies', logo: PremierEnergies, blur: true },
  { name: 'Jakson', logo: Jakson, blur: true },
  { name: 'Luminous Solar', logo: Luminous, blur: true },
  { name: 'Havells', logo: Havells, blur: false },
  { name: 'UTL Solar', logo: UTLSolar, blur: true },
  { name: 'Loom Solar', logo: LoomSolar, blur: true },
  { name: 'Vikram Solar', logo: VikramSolar, blur: false },
  { name: 'Tata Power Solar', logo: TataPower, blur: true },
  { name: 'Usha Shriram', logo: UshaShriram, blur: true },
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
                placeholder={partner.blur ? 'blur' : undefined}
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
