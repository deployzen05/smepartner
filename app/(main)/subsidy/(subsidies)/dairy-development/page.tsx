import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nand Baba Dairy Mission',
  description: 'Details on the Nand Baba Dairy Mission in Uttar Pradesh.',
};

export default function DairyDevelopmentPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Nand Baba Dairy Mission
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                The Dairy Development Policy 2022 aims to strengthen the entire dairy 
                value chain in Uttar Pradesh, from establishing new processing plants 
                and expanding existing capacities to supporting cold chain infrastructure.
              </p>

              <ul className="space-y-4">
                {[
                  'Establishment: Support for new (Greenfield) milk processing plants.',
                  'Expansion: Capacity enhancement incentives for existing dairy processors.',
                  'Value Addition: Subsidies for MSME units crafting cheese, ice cream, etc.',
                  'Infrastructure: Incentives for cattle feed units and cold chain development.',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-orange-600 px-8 font-bold text-white hover:bg-orange-700"
                  asChild
                >
                  <Link href="/enquire">Enquiry Now</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/3]">
              <Image
                src="/subsidy/dairy.png"
                alt="Nand Baba Dairy Mission"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
