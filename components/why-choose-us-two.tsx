'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, FileText, Banknote } from 'lucide-react';

export function WhyChooseUsTwo() {
  return (
    <section className="bg-[#f6f8fa] py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                Why Choose SME Partner
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-balance text-orange-600 md:text-5xl">
              A Trusted Partner for Solar & Government Subsidies
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              SME PARTNER is an industrial consultancy and solar EPC company
              established in 2015. We help businesses and households across
              Uttar Pradesh adopt solar energy while navigating government
              subsidies, approvals, and financing with confidence.
            </p>

            {/* Trust Blocks instead of fake numbers */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: 'Subsidy Expertise',
                  desc: 'Eligibility checks, documentation & department follow-ups',
                },
                {
                  icon: Banknote,
                  title: 'Finance Assistance',
                  desc: 'Support for bank loans & project finance',
                },
                {
                  icon: ShieldCheck,
                  title: 'Government Authorized',
                  desc: 'UPNEDA vendor & MNRE associated',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm"
                >
                  <item.icon className="mx-auto mb-2 h-6 w-6 text-orange-600" />
                  <h3 className="mb-1 text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center justify-center rounded-lg border-b-4 border-[#eec248] bg-[#ffd563] px-8 py-4 text-lg font-bold text-black shadow-lg transition hover:bg-[#ffca28] active:translate-y-1 active:border-b-0"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-2 md:h-64">
                <Image
                  src="/service-residential.png"
                  alt="Residential Solar Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-2 md:h-56">
                <Image
                  src="/service-commercial.png"
                  alt="Commercial Solar Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8 md:space-y-6 md:pt-12">
              <div className="relative h-40 overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-2 md:h-56">
                <Image
                  src="/service-residential.png"
                  alt="Industrial Solar & Subsidy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-2 md:h-64">
                <Image
                  src="/service-commercial.png"
                  alt="Government Subsidy Consultancy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
