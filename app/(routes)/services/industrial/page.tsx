import { Metadata } from 'next';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industrial Solar Power Plants & Subsidy Assistance | SME Partner',
  description:
    'Industrial rooftop and ground-mounted solar solutions for food processing and MSME units in Uttar Pradesh. Subsidy and finance assistance as per applicable government schemes.',
  keywords: [
    'Industrial Solar Uttar Pradesh',
    'Food Processing Solar Subsidy',
    'Rice Mill Solar',
    'Atta Chakki Solar',
    'Cold Storage Solar',
    'UPNEDA Authorized Vendor',
    'Industrial Solar Consultancy',
  ],
};

export default function IndustrialPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                Industrial Solar Power Plants
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                SME Partner provides industrial solar power plant solutions for
                food processing units, manufacturing facilities, and MSMEs
                across Uttar Pradesh. Our services combine solar EPC execution
                with expert subsidy and project finance consultancy.
              </p>

              <p className="text-base leading-relaxed text-slate-600">
                We specialize in solar projects for <strong>Rice Mills, Cold
                Storages, Atta Chakkis (Flour Mills)</strong>, textile units,
                and other eligible industrial sectors, supporting clients
                through eligibility assessment, documentation, approvals,
                and execution.
              </p>

              <ul className="space-y-4">
                {[
                  'Subsidy assistance for food processing units (as per applicable schemes)',
                  'Support for MSME incentives and industrial policies',
                  'Guidance on mandi tax exemption where applicable',
                  'CAPEX and OPEX models based on project feasibility',
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
                        Check Eligibility & Feasibility
                      </Link> 
                    </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/3]">
              <Image
                src="/service-industrial.png"
                alt="Industrial solar power plant installation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Disclaimer */}
          {/* <p className="mt-12 max-w-4xl text-xs leading-relaxed text-slate-500">
            *Subsidy percentages, incentives, and financial benefits depend on
            unit category, system capacity, project location, and prevailing
            central and state government guidelines. SME Partner provides
            consultancy and execution support but does not guarantee subsidy
            approval or sanction amounts.
          </p> */}
        </div>
      </section>
    </div>
  );
}
