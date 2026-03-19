import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Food Processing Policy 2023',
  description: 'Details on the Food Processing Policy 2023 in Uttar Pradesh.',
};

export default function FoodProcessingPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Food Processing Policy 2023
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                The Uttar Pradesh government offers substantial incentives to
                encourage investment in the state's food processing sector. From
                setting up new facilities to adopting solar power, discover what
                benefits your unit can claim.
              </p>

              <ul className="space-y-4">
                {[
                  'Capital Subsidy: Up to 35% of eligible expenditure (Max ₹5 Crore) for new units.',
                  'Solar Power Subsidy: 50% subsidy on solar installation (90% for women-owned).',
                  'Cold Chain & Value Addition: Up to 50% project cost subsidy (Max ₹10 Crore).',
                  'Freight Subsidy: 25% reimbursement of actual transportation cost for exports.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
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
                src="/subsidy/food.webp"
                alt="Food Processing Facility"
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
