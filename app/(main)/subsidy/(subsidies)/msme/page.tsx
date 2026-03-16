import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MSME Policy',
  description: 'Details on the MSME Policy in Uttar Pradesh.',
};

export default function MsmePolicyPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                MSME Subsidy Policy 2022
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                The MSME Policy 2022 is designed to accelerate industrial growth 
                across Uttar Pradesh by offering substantial capital subsidies, 
                interest subvention, and stamp duty exemptions.
              </p>

              <ul className="space-y-4">
                {[
                  'Capital Subsidy: Up to 25% (Max ₹4 Crore) depending on region and enterprise size.',
                  'Special Category Bonus: +2% additional capital subsidy for SC/ST/Women.',
                  'Interest Subvention: 50% interest subsidy for 5 years (Micro units only).',
                  'Stamp Duty Exemption: Up to 100% exemption on land purchase in focus regions.',
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
                src="/subsidy/msme.png"
                alt="MSME Industrial Growth"
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
