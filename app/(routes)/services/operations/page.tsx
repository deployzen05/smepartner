'use client';

import { CTASection } from '@/components/cta-section';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function OperationsPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Operations & Maintenance (O&M)
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Protect your investment and ensure peak performance with our
                comprehensive commercial O&M services. Regular maintenance is
                key to maximizing energy generation and extending the lifespan
                of your solar plant.
              </p>

              <ul className="space-y-4">
                {[
                  'Scheduled Panel Cleaning',
                  'Inverter & Electrical System Health Checkups',
                  'Real-time Performance Monitoring',
                  'Rapid Fault Rectification',
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
                      View Maintenance Plans
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
                alt="Solar Maintenance"
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
