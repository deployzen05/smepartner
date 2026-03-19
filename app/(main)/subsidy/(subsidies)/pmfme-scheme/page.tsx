import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PMFME Scheme',
  description:
    'Details on the PM formalization of Micro Food Processing Enterprises (PMFME) scheme in Uttar Pradesh.',
};

export default function PmfmeSchemePage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
                PMFME Scheme
              </h1>

              <p className="text-lg leading-relaxed text-slate-600">
                The PM Formalisation of Micro food processing Enterprises
                (PMFME) scheme is designed to address the challenges faced by
                micro enterprises and support their upgradation and
                formalization.
              </p>

              <ul className="space-y-4">
                {[
                  'Capital Subsidy: 35% credit-linked subsidy on eligible project cost.',
                  'Maximum Subsidy Limit: Up to ₹10 Lakh per unit.',
                  'Financial Structure: Minimum 10% beneficiary contribution required.',
                  'Eligible Infrastructure: Ready-built worksheds and lease/rental worksheds.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-600" />
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
                  <Link href="/enquire">Enquiry Now</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/3]">
              <Image
                src="/subsidy/pmfme.jpg"
                alt="Micro Food Processing Enterprise"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
