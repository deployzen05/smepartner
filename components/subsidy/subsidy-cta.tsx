'use client';

import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

export function SubsidyCTA() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex w-full flex-col gap-6 overflow-hidden rounded-2xl border border-orange-100 bg-[#FFF9F0] p-8 shadow-none md:rounded-3xl lg:flex-row lg:items-center lg:justify-between lg:p-16">
          {/* Background glows */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-orange-100 opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-yellow-100 opacity-60 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl flex-1">
            <h3 className="mb-4 text-3xl leading-tight font-bold text-balance text-orange-600 md:text-5xl">
              Ready to Claim Your Solar Subsidy?
            </h3>
            <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
              Don't miss out on government incentives. Our team will handle all
              documentation and coordination with department officials to ensure
              you receive your
              <span className="font-bold text-slate-900">
                {' '}
                maximum eligible subsidy
              </span>
              .
            </p>
          </div>
          <div className="relative z-10 flex shrink-0 flex-col items-center justify-center gap-4 sm:flex-row lg:gap-6">
            <Link href="/enquire">
              <Button
                variant="cta"
                className="px-6 py-4 text-sm shadow-sm md:text-base"
              >
                Apply for Subsidy
              </Button>
            </Link>
            <Button
              asChild
              variant="outline-brand"
              className="w-full px-8 py-4 text-base sm:w-auto"
              size="lg"
            >
              <Link href="tel:+919169478991">
                <PhoneCall className="mr-2 h-5 w-5 text-orange-600" /> Talk to a
                Consultant
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
