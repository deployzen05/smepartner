'use client';

import { ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

const benefits = [
  {
    title: 'Authorized UPNEDA Vendor',
    description:
      'Trusted partner authorized by Uttar Pradesh New & Renewable Energy Development Agency.',
  },
  {
    title: 'MNRE Associated',
    description:
      'Recognized by the Ministry of New and Renewable Energy for quality standards.',
  },
  {
    title: 'Max Subsidies Available',
    description:
      'Expertise in securing up to 90% capital subsidy for eligible units.',
  },
  {
    title: '6% Interest Financing',
    description:
      'Easy bank finance options available at just 6% interest rate.',
  },
  {
    title: '25 Years Warranty',
    description:
      'Long-term peace of mind with 25-year performance warranty on panels.',
  },
  // {
  //   title: 'End-to-End Execution',
  //   description:
  //     'From site survey and design to installation and net metering.',
  // },
  // {
  //   title: 'Premium Partners',
  //   description:
  //     'We use only Tier-1 brands like Tata Power, Jakson, and Premier Energies.',
  // },
];

export function WhyChooseUsSection() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Heading and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <div className="mb-4 flex items-center gap-2">
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
                Why SME Solar is Uttar Pradesh’s Most Trusted Choice
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  At SME Solar, we are not just installers; we are your energy
                  partners. As registered vendors with UPNEDA and associated
                  with MNRE, we guarantee compliance, quality, and the highest
                  possible subsidies for your project.
                </p>
                <p>
                  Whether you are a food processing unit looking for a 90%
                  subsidy or a homeowner applying for the PM Surya Ghar Yojana,
                  our team handles the entire documentation, financing, and
                  installation process seamlessly.
                </p>
              </div>
            </div>

            <div>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center rounded-md bg-[#ffd563] px-8 py-3 font-bold text-black shadow-md transition-all duration-300 hover:bg-[#ffca28] hover:shadow-lg"
              >
                Know More{' '}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Benefits List */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="group flex cursor-pointer items-start gap-4 rounded-xl border border-slate-100 p-5 transition-all duration-300 hover:border-orange-100 hover:bg-orange-50/30"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white text-orange-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900 transition-colors group-hover:text-orange-600">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
