import { Metadata } from 'next';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Industrial Power Plants & Subsidy',
  description:
    'Large-scale industrial solar installations with up to 90% capital subsidy for food processing and other industries in Uttar Pradesh.',
};

export default function IndustrialPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Industrial Solar Power Plants
              </h1>
              <p className="text-lg leading-relaxed text-slate-600">
                Power your factory with renewable energy and unlock massive
                government incentives. We specialize in large-scale industrial
                solar installations for manufacturing units, textiles, and food
                processing industries.
              </p>

              <ul className="space-y-4">
                {[
                  '50% - 90% Capital Subsidy for Food Processing',
                  'Additional MSME Incentives',
                  'Mandi Tax Exemption Available',
                  'Seamless CAPEX & OPEX Models',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-medium text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-orange-600 px-8 font-bold text-white hover:bg-orange-700"
                    >
                      Calculate Savings
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <EnquiryForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=1000&auto=format&fit=crop"
                alt="Industrial Solar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
