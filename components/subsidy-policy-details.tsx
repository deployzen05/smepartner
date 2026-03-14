'use client';

import { motion } from 'motion/react';
import {
  FileText,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Zap,
  Truck,
  Waves,
  Hammer,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const policies = [
  {
    id: 'food-processing',
    title: 'Food Processing Policy 2023',
    icon: FileText,
    content: [
      {
        subTitle: 'Capital Subsidy',
        details: [
          '35% subsidy on plant & machinery for new units (Max ₹5 Cr).',
          '25% subsidy for expansion/modernization (Max ₹1 Cr).',
          'Cold Chain Infrastructure: 35% grant (Max ₹10 Cr).',
          'Value Addition Infra: 50% grant for frozen storage/irradiation (Max ₹10 Cr).',
        ],
      },
      {
        subTitle: 'Solar Power Projects',
        details: [
          '50% subsidy for rural units (up to 75 kva).',
          '90% subsidy for women owned & operated plants.',
        ],
      },
      {
        subTitle: 'Freight Subsidy',
        details: [
          '25% transportation cost reimbursement for exports to non-neighboring countries.',
        ],
      },
    ],
  },
  {
    id: 'msme-2022',
    title: 'MSME Subsidy 2022',
    icon: TrendingUp,
    content: [
      {
        subTitle: 'Regional Capital Subsidy',
        details: [
          'Bundelkhand & Purvanchal: Micro (25%), Small (20%), Medium (15%).',
          'Madhyanchal & Paschimanchal: Micro (20%), Small (15%), Medium (10%).',
          '+2% additional subsidy for SC/ST and women entrepreneurs.',
          'Capped at ₹4 Crore per unit.',
        ],
      },
      {
        subTitle: 'Interest & Stamp Duty',
        details: [
          'Micro units: 50% interest subsidy (Max ₹25 Lakh/unit).',
          'Stamp Duty: 100% exemption in Purvanchal/Bundelkhand; 75% in Paschimanchal/Madhyanchal.',
          'Women Entrepreneurs: 100% stamp duty exemption statewide.',
        ],
      },
    ],
  },
  {
    id: 'tech-upgradation',
    title: 'Technical Upgradation (TUS/RAMP)',
    icon: Hammer,
    content: [
      {
        subTitle: 'Financial Assistance',
        details: [
          '50% capital expense subsidy on advanced machinery (Max ₹5 Lakh).',
          '50% interest subsidy on tech-upgradation loans (Max ₹1 Lakh/yr).',
          'RAMP Bonus: Additional 15% subsidy for tech upgradation.',
          'Green Preference: Priority for solar and renewable energy adopters.',
        ],
      },
    ],
  },
  {
    id: 'pmfme',
    title: 'PMFME Scheme',
    icon: MapPin,
    content: [
      {
        subTitle: 'Micro Food Enterprises',
        details: [
          '35% credit-linked capital subsidy (Max ₹10 Lakh per unit).',
          'Beneficiary contrib: Min 10% of project cost.',
          'Covers work-sheds and rental facilities (up to 3 years).',
        ],
      },
    ],
  },
  {
    id: 'tourism-2022',
    title: 'UP Tourism Policy 2022',
    icon: Waves,
    content: [
      {
        subTitle: 'Capital Investment Subsidy',
        details: [
          '₹10 Lakh - ₹10 Cr investment: 25% subsidy (Max ₹2 Cr).',
          '₹10 Cr - ₹50 Cr investment: 20% subsidy (Max ₹7.5 Cr).',
          'Above ₹500 Cr investment: 10% subsidy (Max ₹40 Cr).',
          '+5% bonus for Tier 2 cities, women, and SC/ST classes.',
        ],
      },
      {
        subTitle: 'Incentive Caps',
        details: [
          'Total sum of all incentives capped at 30% of investment cost.',
          'Interest subsidy: 5% for 5 years on loans up to ₹5 Cr.',
        ],
      },
    ],
  },
  {
    id: 'dairy-2022',
    title: 'Dairy Development Policy 2022',
    icon: Truck,
    content: [
      {
        subTitle: 'Infrastructure Support',
        details: [
          'Incentives for New (Greenfield) Milk Processing units.',
          '25% capacity improvement grants for existing units.',
          'Cattle Feed & Nutritional product manufacturing support.',
          'Cold Chain: Milk chilling centres and bulk milk coolers.',
        ],
      },
    ],
  },
];

export function SubsidyPolicyDetails() {
  return (
    <section id="policy-details" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-orange-600 md:text-5xl"
          >
            Detailed Policy Breakdown
          </motion.h2>
          <p className="mt-4 text-lg text-slate-600">
            Official incentives and subsidies applicable under current Uttar
            Pradesh government policies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {policies.map((policy, idx) => (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <policy.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {policy.title}
                </h3>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {policy.content.map((section, sidx) => (
                  <AccordionItem
                    key={sidx}
                    value={`item-${idx}-${sidx}`}
                    className="border-slate-100"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-orange-600">
                      {section.subTitle}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3">
                        {section.details.map((detail, didx) => (
                          <li
                            key={didx}
                            className="flex items-start gap-3 text-slate-600"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
