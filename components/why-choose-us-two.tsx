'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function WhyChooseUsTwo() {
  return (
    <section className="py-24" style={{ backgroundColor: '#f6f8fa' }}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Text & Stats */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="mb-4 flex items-center gap-2">
              {/* Sub-logo placeholder */}
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="mb-6 text-3xl leading-tight font-bold text-balance text-orange-600 md:text-5xl">
              Empowering Homes and Businesses with Solar
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              Choosing us means choosing a partner dedicated to transforming the
              way you use energy. With years of expertise, cutting-edge
              technology.
            </p>

            {/* Counter Box Area */}
            <div className="mb-10 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-8 divide-x divide-slate-100 text-center md:grid-cols-3">
                <div className="px-2">
                  <h2 className="mb-2 text-4xl font-bold text-slate-900">
                    1600<span className="text-orange-500">+</span>
                  </h2>
                  <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                    Projects Completed
                  </p>
                </div>
                <div className="px-2">
                  <h2 className="mb-2 text-4xl font-bold text-slate-900">
                    650<span className="text-orange-500">+</span>
                  </h2>
                  <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                    Happy Customers
                  </p>
                </div>
                <div className="col-span-2 mt-8 border-t px-2 pt-8 md:col-span-1 md:mt-0 md:border-t-0 md:pt-0">
                  <h2 className="mb-2 text-4xl font-bold text-slate-900">
                    96<span className="text-orange-500">%</span>
                  </h2>
                  <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                    Satisfied Customers
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center justify-center rounded-lg border-b-4 border-[#eec248] bg-[#ffd563] px-8 py-4 text-lg font-bold text-black shadow-lg transition-transform hover:bg-[#ffca28] active:translate-y-1 active:border-b-0"
            >
              Learn More{' '}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Image Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Column 1 */}
            <div className="space-y-4 md:space-y-6">
              <div className="animate-in fade-in zoom-in relative h-48 overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:-translate-y-2 md:h-64">
                <Image
                  src="/service-residential.png"
                  alt="Service 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="animate-in fade-in zoom-in relative h-40 overflow-hidden rounded-2xl shadow-lg transition-transform delay-100 duration-500 hover:-translate-y-2 md:h-56">
                <Image
                  src="/service-commercial.png"
                  alt="Service 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 2 - Offset */}
            <div className="space-y-4 pt-8 md:space-y-6 md:pt-12">
              <div className="animate-in fade-in zoom-in relative h-40 overflow-hidden rounded-2xl shadow-lg transition-transform delay-200 duration-500 hover:-translate-y-2 md:h-56">
                <Image
                  src="/service-residential.png"
                  alt="Service 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="animate-in fade-in zoom-in relative h-48 overflow-hidden rounded-2xl shadow-lg transition-transform delay-300 duration-500 hover:-translate-y-2 md:h-64">
                <Image
                  src="/service-commercial.png"
                  alt="Service 4"
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
