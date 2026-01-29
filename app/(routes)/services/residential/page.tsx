import { Metadata } from 'next';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential Rooftop Solar | PM Surya Ghar Yojana – SME Partner',
  description:
    'Residential rooftop solar solutions under PM Surya Ghar Muft Bijli Yojana. Subsidy assistance up to ₹1,08,000 with bank finance support at 6% interest, subject to eligibility.',
};

export default function ResidentialPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Residential Rooftop Solar Solutions
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                SME Partner provides residential rooftop solar solutions under
                the Government of India’s <strong>PM Surya Ghar Muft Bijli Yojana</strong>.
                We assist homeowners across Uttar Pradesh in adopting solar
                energy with complete support for documentation, approvals, and
                subsidy processing.
              </p>

              <p className="text-base leading-relaxed text-slate-600">
                Depending on system capacity and household consumption,
                residential solar can significantly reduce electricity bills
                while enabling long-term savings through clean energy.
              </p>

              <ul className="space-y-4">
                {[
                  'Subsidy assistance up to ₹1,08,000 as per applicable guidelines',
                  'Residential rooftop systems designed for household consumption',
                  'Bank finance support available at approximately 6% interest',
                  'Solar panels with long-term performance warranty (up to 25 years)',
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
                src="/service-residential.png"
                alt="Residential rooftop solar installation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Disclaimer */}
          {/* <p className="mt-12 max-w-4xl text-xs leading-relaxed text-slate-500">
            *Subsidy amounts, electricity savings, and financing options are
            subject to prevailing central and state government guidelines,
            system capacity, household electricity consumption, and technical
            feasibility. SME Partner provides assistance in application and
            processing but does not guarantee approvals.
          </p> */}
        </div>
      </section>
    </div>
  );
}
