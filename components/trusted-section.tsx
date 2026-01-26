import Link from 'next/link';
import Image from 'next/image';

const LOGOS = [
  {
    name: 'Premier Energies',
    src: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format',
  }, // Placeholder for generic logo
  {
    name: 'Jakson',
    src: 'https://jakson.com/wp-content/uploads/2022/04/jakson-logo.png',
  }, // Trying a public URL if possible, otherwise generic
  {
    name: 'Luminous',
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Luminous_Power_Technologies_Logo.png',
  },
  {
    name: 'Havells',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Havells_Logo.svg/1200px-Havells_Logo.svg.png',
  },
  {
    name: 'Tata Power Solar',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_Power_logo.svg/2560px-Tata_Power_logo.svg.png',
  },
  {
    name: 'Vikram Solar',
    src: 'https://upload.wikimedia.org/wikipedia/en/2/29/Vikram_Solar_Logo.png',
  },
];

// Fallback to text if logos are hard to source reliable URLs for all
// Actually, let's keep the design from before but with placeholders OR text labels if we can't get logos.
// Simplest is to use the existing Marquee but with updated "Trusted By" text and maybe just listing the NAMES if images fail,
// But the user liked the logo marquee.
// I will use a Text Marquee for reliable "Partners" representation if I can't get all images,
// OR I will just mix the ones I have.
// Let's try to stick to the visual the user approved (Marquee of images).
// Since I don't have all specific logo URLs for "Jiolite", "Morano", etc., and the user said "use only solar data",
// I will update the "Trusted Section" to list the *Equipment Partners* (Tata, Jakson, etc) which are famous and I can likely find or just leave as a "Partners" section.
// Wait, the user said "use only solar data". The Logos in the previous trusted section were random/dummy.
// I should probably replace them with *Brand Names* in text or generic placeholders if I can't find them.
// Let's use a nice Text Marquee for the Partners to be safe and accurate, or stick to the previous icons if they were generic enough?
// No, the previous icons were real companies (Tersus, etc).
// I'll make a Text Marquee of the partners. It's safer and cleaner than broken images.

import { Marquee } from '@/components/ui/marquee';

const PARTNERS = [
  'Premier Energies',
  'Jakson',
  'Luminous Solar',
  'Havells',
  'UTL Solar',
  'Loom Solar',
  'Vikram Solar',
  'Tata Power Solar',
  'Usha Shriram',
];

export function TrustedSection() {
  return (
    <section className="border-b border-slate-100 bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <p className="mb-8 text-sm font-bold tracking-widest text-slate-500 uppercase">
          Official Partners & Equipment Sourced From
        </p>
        <Marquee pauseOnHover className="[--duration:30s]">
          {PARTNERS.map((partner, i) => (
            <div key={i} className="mx-8 flex items-center justify-center">
              <span className="text-xl font-bold whitespace-nowrap text-slate-400 transition-colors hover:text-slate-800 md:text-2xl">
                {partner}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
