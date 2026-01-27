'use client';

import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function CommercialPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Commercial Solar Solutions
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Maximize profits and reduce operational costs for your business.
                Our end-to-end solar execution services are tailored for
                hospitals, hotels, schools, and commercial complexes, offering
                high Return on Investment (ROI).
              </p>

              <ul className="space-y-4">
                {[
                  'Accelerated Depreciation Benefits',
                  'Reduce Electricity Bill by up to 90%',
                  'High ROI & Payback within 3-4 Years',
                  'Customized Designs for Rooftops',
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
                      Get a Quote
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
                src="https://images.unsplash.com/photo-1726776230751-183496c51f00?q=80&w=1210&auto=format&fit=crop"
                alt="Commercial Solar"
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
