'use client';

import Image from 'next/image';
import { motion, Variants } from 'motion/react';
import { Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SubsidyBento() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-orange-50/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center justify-center text-center md:text-left"
        >
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-orange-100/50 px-4 py-1.5">
            <Trophy className="h-3.5 w-3.5 text-orange-600" />
            <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">
              Comprehensive Guide
            </span>
          </div>
          <h2 className="mb-4 text-3xl leading-tight font-bold text-balance text-slate-900 md:text-5xl">
            Uttar Pradesh Subsidy <br className="hidden md:block" />{' '}
            <span className="text-orange-600">& Industrial Policies</span>
          </h2>
          <p className="max-w-2xl text-center text-lg font-medium text-slate-600">
            An organized summary of key subsidies and incentives to boost your
            business in Uttar Pradesh.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Food Processing (Large Image) */}
            <motion.div
              variants={itemVariants}
              className="group relative flex min-h-[480px] flex-col justify-end overflow-hidden rounded-[2rem] bg-orange-900 text-white shadow-lg shadow-orange-900/10"
            >
              <Image
                src="/subsidy/food.webp"
                alt="Food Processing"
                fill
                className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-orange-900/60 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
              <div className="relative z-10 transform p-8 pt-32 transition-transform duration-500 group-hover:-translate-y-2 md:p-10">
                <p className="mb-3 text-xs font-bold tracking-widest text-yellow-400 uppercase">
                  Food Processing Policy 2023
                </p>
                <h2 className="mb-4 text-3xl leading-tight font-black tracking-tight md:text-4xl">
                  Up to 35% Capital Subsidy for Food Processing Units
                </h2>
                <p className="text-sm leading-relaxed font-medium text-orange-50 md:text-base">
                  Get up to ₹5 Crore for new units and ₹1 Crore for expansion.
                  Includes 50% subsidy on solar power (90% for women) and 25%
                  freight reimbursement for exports.
                </p>
                <Link
                  href="/subsidy/food-processing"
                  className="mt-6 flex w-fit items-center text-sm font-bold text-yellow-400 transition-colors group-hover:text-yellow-300"
                >
                  View Detail{' '}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: PMFME (Medium Text) */}
            <motion.div
              variants={itemVariants}
              className="group rounded-[2rem] border border-orange-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 md:p-10"
            >
              <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl transition-colors group-hover:bg-yellow-400/20"></div>
              <p className="mb-3 text-xs font-bold tracking-widest text-orange-600 uppercase">
                PMFME Scheme
              </p>
              <h2 className="mb-4 text-2xl leading-tight font-black tracking-tight text-slate-800 transition-colors group-hover:text-orange-600 md:text-3xl">
                Formalize your Micro Food Processing Business
              </h2>
              <p className="text-sm leading-relaxed font-medium text-slate-600 md:text-base">
                Avail 35% capital subsidy up to ₹10 Lakh per unit. Start with
                just 10% beneficiary contribution and include lease rental costs
                for up to 3 years.
              </p>
              <Link
                href="/subsidy/pmfme-scheme"
                className="mt-6 flex w-fit items-center text-sm font-bold text-orange-600 transition-colors group-hover:text-orange-700"
              >
                View Detail{' '}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
              </Link>
            </motion.div>

            {/* Card 5: Tourism (Small CTA) */}
            <motion.div
              variants={itemVariants}
              className="group rounded-[2rem] border border-orange-200/60 bg-gradient-to-br from-orange-50 to-orange-100/50 p-8 shadow-lg shadow-orange-100/50 md:p-10"
            >
              <p className="mb-3 text-xs font-bold tracking-widest text-orange-600 uppercase">
                Uttar Pradesh Tourism Policy 2022
              </p>
              <h2 className="mb-4 text-2xl leading-tight font-black tracking-tight text-slate-900 md:text-3xl">
                Invest in UP Tourism
              </h2>
              <p className="mb-8 text-sm leading-relaxed font-medium text-slate-700 md:text-base">
                Up to ₹40 Crore capital subsidy (10-25%) or 5% interest subsidy
                for 5 years. Extra 5% for Tier-2 cities, women, and SC/ST
                entrepreneurs. PPP projects eligible.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                      key={i}
                      className="relative z-10 h-10 w-10 rounded-full border-2 border-orange-50 transition-transform hover:z-20 hover:-translate-y-1"
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Avatar"
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
                <Link
                  href="/subsidy/up-tourism"
                  className="inline-block w-full transform rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-3 text-center text-xs font-bold tracking-widest text-white uppercase shadow-md transition-all hover:-translate-y-0.5 hover:from-orange-600 hover:to-yellow-600 hover:shadow-lg sm:w-auto sm:text-sm"
                >
                  View Detail
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Card 2: MSME (Small Text) */}
            <motion.div
              variants={itemVariants}
              className="group rounded-[2rem] bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white shadow-lg shadow-orange-500/20 transition-shadow hover:shadow-orange-500/30 md:p-10"
            >
              <p className="mb-3 text-xs font-bold tracking-widest text-yellow-300 uppercase">
                MSME Subsidy Policy 2022
              </p>
              <h2 className="mb-4 text-2xl leading-tight font-black tracking-tight md:text-3xl">
                Boost your MSME with up to 25% Capital Subsidy
              </h2>
              <p className="text-sm leading-relaxed font-medium text-orange-50 md:text-base">
                Special focus on Bundelkhand & Purvanchal. Enjoy up to 60%
                interest subsidy and 100% stamp duty exemption for women
                entrepreneurs. Max limit ₹4 Crore.
              </p>
              <Link
                href="/subsidy/msme"
                className="mt-6 flex w-fit items-center text-sm font-bold text-yellow-300 transition-colors group-hover:text-yellow-200"
              >
                View Detail{' '}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
              </Link>
            </motion.div>

            {/* Card 3: Tech Upgradation (Small Text) */}
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-1 md:p-10"
            >
              <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl transition-colors group-hover:bg-orange-400/20"></div>
              <p className="mb-3 text-xs font-bold tracking-widest text-orange-600 uppercase">
                Technical Upgradation Scheme
              </p>
              <h2 className="mb-4 text-2xl leading-tight font-black tracking-tight text-slate-800 transition-colors group-hover:text-orange-600 md:text-3xl">
                Modernize with 50% Capital & Interest Subsidy
              </h2>
              <p className="text-sm leading-relaxed font-medium text-slate-600 md:text-base">
                Adopt modern machinery with up to ₹5 Lakh capital subsidy and ₹1
                Lakh/year interest subsidy. Extra 15% under RAMP for green tech
                and women-owned MSMEs.
              </p>
              <Link
                href="/subsidy/tech-upgradation"
                className="mt-6 flex w-fit items-center text-sm font-bold text-orange-600 transition-colors group-hover:text-orange-700"
              >
                View Detail{' '}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
              </Link>
            </motion.div>

            {/* Card 6: Dairy (Large Image) */}
            <motion.div
              variants={itemVariants}
              className="group relative flex min-h-[480px] flex-grow flex-col justify-end overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-lg shadow-slate-900/10"
            >
              <Image
                src="/subsidy/dairy.jfif"
                alt="Dairy Development"
                fill
                className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
              <div className="relative z-10 transform p-8 pt-32 transition-transform duration-500 group-hover:-translate-y-2 md:p-10">
                <p className="mb-3 text-xs font-bold tracking-widest text-yellow-500 uppercase">
                  Dairy Development Policy 2022
                </p>
                <h2 className="mb-4 text-3xl leading-tight font-black tracking-tight text-white transition-colors group-hover:text-yellow-400 md:text-4xl">
                  Strengthen the Dairy Value Chain
                </h2>
                <p className="text-sm leading-relaxed font-medium text-slate-300 md:text-base">
                  Support for new milk processing plants, 25% capacity
                  expansion, and value-added products like cheese and ice cream.
                  Build robust cold chain infrastructure including chilling
                  centers.
                </p>
                <Link
                  href="/subsidy/dairy-development"
                  className="mt-6 flex w-fit items-center text-sm font-bold text-yellow-400 transition-colors group-hover:text-yellow-300"
                >
                  View Detail{' '}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
