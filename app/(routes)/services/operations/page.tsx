import { Metadata } from 'next';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2, Link } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Solar Operations & Maintenance (O&M) | SME Partner',
  description:
    'Solar O&M services for residential, commercial, and industrial rooftop systems. Preventive maintenance, monitoring, and support to help maintain long-term system performance.',
};

export default function OperationsPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Operations & Maintenance (O&M) Services
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                SME Partner provides operations and maintenance services for
                residential, commercial, and industrial rooftop solar systems
                across Uttar Pradesh. Regular maintenance helps ensure reliable
                operation and consistent energy generation over the life of the
                system.
              </p>

              <p className="text-base leading-relaxed text-slate-600">
                Our O&M support focuses on preventive care, performance checks,
                and timely issue resolution to help system owners protect their
                investment and reduce downtime.
              </p>

              <ul className="space-y-4">
                {[
                  'Scheduled solar panel cleaning and visual inspections',
                  'Inverter and electrical system health checks',
                  'Performance monitoring and generation review',
                  'Support for fault identification and corrective actions',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 text-orange-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                
                    <Button
                      size="lg"
                      className="bg-orange-600 px-8 font-bold text-white hover:bg-orange-700"
                    asChild>
                      <Link href="/enquiry">
                        Enquiry Now
                      </Link>
                    </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
                alt="Solar operations and maintenance service"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Disclaimer */}
          {/* <p className="mt-12 max-w-4xl text-xs leading-relaxed text-slate-500">
            *System performance and energy generation depend on site conditions,
            system design, weather, and usage patterns. O&M services support
            ongoing operation and maintenance but do not guarantee specific
            energy output levels.
          </p> */}
        </div>
      </section>
    </div>
  );
}
