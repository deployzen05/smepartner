'use client';

import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ResidentialPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Residential Solar Solutions (PM Surya Ghar)
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Transform your home into a powerhouse with our residential solar
                solutions. With the PM Surya Ghar Muft Bijli Yojana, you can get
                free electricity (up to 300 units) and subsidies up to ₹1,08,000
                directly from the government.
              </p>

              <ul className="space-y-4">
                {[
                  'Up to ₹1,08,000 Capital Subsidy',
                  'Free Electricity up to 300 Units',
                  '6% Interest Bank Finance Available',
                  '25 Years Performance Warranty',
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
                      Check Eligibility
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
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop"
                alt="Residential Solar"
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
