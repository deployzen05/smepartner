'use client';

import { CTASection } from '@/components/cta-section';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function PumpsPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Solar Water Pumps
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Ensure reliable water supply for irrigation without the burden
                of electricity bills or diesel costs. Our high-efficiency solar
                pumping systems are perfect for enhancing agricultural
                productivity.
              </p>

              <ul className="space-y-4">
                {[
                  'Zero Electricity Cost',
                  'Independent of Grid Fluctuations',
                  'Long-lasting Durability',
                  'Government Subsidy (Kusum Yojana) Support',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-medium text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-orange-500 px-8 font-bold text-white hover:bg-orange-600"
                    >
                      Enquire Now
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
                src="https://plus.unsplash.com/premium_photo-1664302342178-564b28c68d33?q=80&w=1170&auto=format&fit=crop"
                alt="Solar Water Pumps"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
