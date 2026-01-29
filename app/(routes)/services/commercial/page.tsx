import { Metadata } from 'next';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Solar Solutions | SME Partner',
  description:
    'Commercial rooftop solar solutions for hospitals, hotels, offices, and business facilities in Uttar Pradesh. End-to-end execution with subsidy and finance assistance.',
};

export default function CommercialPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Commercial Solar Solutions
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                SME Partner provides end-to-end commercial rooftop solar
                solutions for hospitals, hotels, offices, cold storages, and
                other commercial establishments across Uttar Pradesh.
              </p>

              <p className="text-base leading-relaxed text-slate-600">
                From feasibility assessment and system design to installation,
                approvals, and grid connectivity, we handle the complete
                execution while assisting with applicable government incentives
                and bank financing options.
              </p>

              <ul className="space-y-4">
                {[
                  'Rooftop solar systems designed for commercial load patterns',
                  'Assistance with applicable tax and depreciation benefits',
                  'Improved energy cost efficiency over long-term operation',
                  'Customized system sizing based on site assessment',
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
                    asChild
                    >
                      <Link href="/enquiry">
                      Request a Consultation
                      </Link>
                    </Button>
                  
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/3]">
              <Image
                src="/service-commercial.png"
                alt="Commercial rooftop solar installation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Disclaimer */}
          {/* <p className="mt-12 max-w-4xl text-xs leading-relaxed text-slate-500">
            *Energy savings, financial benefits, and payback periods depend on
            site conditions, electricity tariff, system capacity, usage
            patterns, and applicable government policies. Eligibility for
            subsidies and incentives is subject to prevailing guidelines.
          </p> */}
        </div>
      </section>
    </div>
  );
}
