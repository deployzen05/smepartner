import { Metadata } from 'next';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2, Link } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Solar Water Pumps | SME Partner',
  description:
    'Solar water pumping solutions for agriculture and rural applications in Uttar Pradesh. End-to-end installation with government subsidy assistance under applicable schemes.',
};

export default function PumpsPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Solar Water Pump Solutions
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                SME Partner provides solar water pumping solutions for
                agricultural and rural applications across Uttar Pradesh.
                These systems help farmers and landowners access reliable
                water supply by reducing dependence on grid electricity
                and diesel-based pumping.
              </p>

              <p className="text-base leading-relaxed text-slate-600">
                We offer complete support including site assessment, system
                selection, installation, and assistance with applicable
                government subsidy schemes such as PM-KUSUM, subject to
                eligibility and prevailing guidelines.
              </p>

              <ul className="space-y-4">
                {[
                  'Reduced dependence on grid electricity and diesel fuel',
                  'Suitable for irrigation and rural water supply needs',
                  'Durable solar pumping systems designed for long-term use',
                  'Assistance with government subsidy schemes (eligibility-based)',
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
                src="/service-pump.png"
                alt="Solar water pump installation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Disclaimer */}
          {/* <p className="mt-12 max-w-4xl text-xs leading-relaxed text-slate-500">
            *Subsidy availability, system performance, and financial benefits
            depend on site conditions, water requirements, pump capacity,
            and prevailing central and state government policies. SME Partner
            provides assistance with application and execution but does not
            guarantee subsidy approval.
          </p> */}
        </div>
      </section>
    </div>
  );
}
