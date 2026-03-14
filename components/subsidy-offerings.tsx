'use client';

import { motion } from 'motion/react';
import {
  Sparkles,
  Building2,
  Home,
  Factory,
  GraduationCap,
  Gavel,
  Landmark,
} from 'lucide-react';

const offers = [
  {
    title: 'Food Processing 2023',
    description:
      'Capital subsidy up to 35% (max ₹5 Cr) for new units and 50% for cold chain value addition infrastructure.',
    icon: Factory,
  },
  {
    title: 'MSME Policy 2022',
    description:
      'Regional capital subsidies from 10% to 25% with additional 2% for women and SC/ST entrepreneurs.',
    icon: Landmark,
  },
  {
    title: 'Solar Power Projects',
    description:
      '50% subsidy for rural food industries (up to 75 kva) and 90% for women-owned & operated units.',
    icon: Sparkles,
  },
  {
    title: 'Technical Upgradation',
    description:
      '50% capital assistance (max ₹5 Lakh) + 15% additional subsidy under the RAMP programme.',
    icon: Gavel,
  },
  {
    title: 'UP Tourism Policy',
    description:
      'Sliding scale capital investment subsidy from 10% to 25%, capped at ₹40 Crores for major projects.',
    icon: Building2,
  },
  {
    title: 'Dairy Development',
    description:
      'Incentives for greenfield milk processing, chilling centres, and cattle feed manufacturing units.',
    icon: Landmark,
  },
];

export function SubsidyOfferings() {
  return (
    <section id="subsidy-offerings" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Our Expertise
            </span>
          </div>

          <h2 className="mb-6 text-3xl leading-tight font-bold text-orange-600 md:text-5xl">
            Subsidies We Help You Secure
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
            SME Partner provides specialized consultancy for several government
            schemes, ensuring that your transition to solar is as cost-effective
            as possible through maximized incentives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {offer.title}
                </h3>
                <p className="text-slate-600">{offer.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
