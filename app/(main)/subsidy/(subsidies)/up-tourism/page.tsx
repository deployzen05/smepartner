import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UP Tourism Policy',
  description: 'Details on the UP Tourism Policy in Uttar Pradesh.',
};

export default function UpTourismPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                UP Tourism Policy 2022
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                The Uttar Pradesh Tourism Policy provides large-scale capital subsidies 
                to boost tourism infrastructure, hotels, wellness centers, and resorts, 
                recognizing the state's vast spiritual and cultural tourism potential.
              </p>

              <ul className="space-y-4">
                {[
                  'Capital Subsidy: 10% to 25% subsidy depending on total investment size.',
                  'Bonus Incentives: +5% for Tier-2 cities, Women/SC/ST, or focus destinations.',
                  'Interest Subsidy: 5% interest subsidy for 5 years on loans up to ₹5 Crore.',
                  'Max Limit: Total incentives cannot exceed 30% of the project cost.',
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
                src="/subsidy/up-tourism.png"
                alt="Uttar Pradesh Tourism and Wellness"
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
