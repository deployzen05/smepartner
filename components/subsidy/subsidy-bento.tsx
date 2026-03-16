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
    <main className="min-h-screen bg-orange-50/30 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left flex justify-center items-center flex-col"
        >
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-orange-100/50 px-4 py-1.5">
            <Trophy className="h-3.5 w-3.5 text-orange-600" />
            <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">
              Comprehensive Guide
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-balance text-slate-900 md:text-5xl mb-4">
            Uttar Pradesh Subsidy <br className="hidden md:block" /> <span className="text-orange-600">& Industrial Policies</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl font-medium text-center">
            An organized summary of key subsidies and incentives to boost your business in Uttar Pradesh.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Food Processing (Large Image) */}
            <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden bg-orange-900 text-white shadow-lg shadow-orange-900/10 group flex flex-col justify-end min-h-[480px]">
              <Image
                src="/subsidy/food-processing.png"
                alt="Food Processing"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-orange-900/60 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
              <div className="relative z-10 p-8 md:p-10 pt-32 transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Food Processing Policy 2023</p>
                <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight tracking-tight">
                  Up to 35% Capital Subsidy for Food Processing Units
                </h2>
                <p className="text-orange-50 text-sm md:text-base leading-relaxed font-medium">
                  Get up to ₹5 Crore for new units and ₹1 Crore for expansion. Includes 50% subsidy on solar power (90% for women) and 25% freight reimbursement for exports.
                </p>
                <Link href="/subsidy/food-processing" className="mt-6 flex items-center text-sm font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors w-fit">
                  View Detail <ArrowRight className="ml-2 w-4 h-4 group-hover:-rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: PMFME (Medium Text) */}
            <motion.div variants={itemVariants} className="rounded-[2rem] bg-white p-8 md:p-10 shadow-lg shadow-slate-200/50 border border-orange-100 group hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl rounded-full -z-10 group-hover:bg-yellow-400/20 transition-colors"></div>
              <p className="text-orange-600 text-xs font-bold tracking-widest uppercase mb-3">PMFME Scheme</p>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-800 leading-tight tracking-tight group-hover:text-orange-600 transition-colors">
                Formalize your Micro Food Processing Business
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Avail 35% capital subsidy up to ₹10 Lakh per unit. Start with just 10% beneficiary contribution and include lease rental costs for up to 3 years.
              </p>
              <Link href="/subsidy/pmfme-scheme" className="mt-6 flex items-center text-sm font-bold text-orange-600 group-hover:text-orange-700 transition-colors w-fit">
                View Detail <ArrowRight className="ml-2 w-4 h-4 group-hover:-rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Card 5: Tourism (Small CTA) */}
            <motion.div variants={itemVariants} className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-orange-100/50 p-8 md:p-10 shadow-lg shadow-orange-100/50 border border-orange-200/60 group">
              <p className="text-orange-600 text-xs font-bold tracking-widest uppercase mb-3">Uttar Pradesh Tourism Policy 2022</p>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 leading-tight tracking-tight">
                Invest in UP Tourism
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-8 font-medium">
                Up to ₹40 Crore capital subsidy (10-25%) or 5% interest subsidy for 5 years. Extra 5% for Tier-2 cities, women, and SC/ST entrepreneurs. PPP projects eligible.
              </p>

              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Image key={i} className="w-10 h-10 rounded-full border-2 border-orange-50 transition-transform hover:-translate-y-1 z-10 hover:z-20 relative" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" width={40} height={40} />
                  ))}
                </div>
                <Link href="/subsidy/up-tourism" className="inline-block text-center bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm uppercase tracking-widest transition-all shadow-md hover:shadow-lg w-full sm:w-auto transform hover:-translate-y-0.5">
                  View Detail
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Card 2: MSME (Small Text) */}
            <motion.div variants={itemVariants} className="rounded-[2rem] bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-10 shadow-lg shadow-orange-500/20 text-white group hover:shadow-orange-500/30 transition-shadow">
              <p className="text-yellow-300 text-xs font-bold tracking-widest uppercase mb-3">MSME Subsidy Policy 2022</p>
              <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight tracking-tight">
                Boost your MSME with up to 25% Capital Subsidy
              </h2>
              <p className="text-orange-50 text-sm md:text-base leading-relaxed font-medium">
                Special focus on Bundelkhand & Purvanchal. Enjoy up to 60% interest subsidy and 100% stamp duty exemption for women entrepreneurs. Max limit ₹4 Crore.
              </p>
              <Link href="/subsidy/msme" className="mt-6 flex items-center text-sm font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors w-fit">
                View Detail <ArrowRight className="ml-2 w-4 h-4 group-hover:-rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Card 3: Tech Upgradation (Small Text) */}
            <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2rem] bg-white p-8 md:p-10 shadow-lg shadow-slate-200/50 border border-slate-200 group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 blur-3xl rounded-full -z-10 group-hover:bg-orange-400/20 transition-colors"></div>
              <p className="text-orange-600 text-xs font-bold tracking-widest uppercase mb-3">Technical Upgradation Scheme</p>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-800 leading-tight tracking-tight group-hover:text-orange-600 transition-colors">
                Modernize with 50% Capital & Interest Subsidy
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Adopt modern machinery with up to ₹5 Lakh capital subsidy and ₹1 Lakh/year interest subsidy. Extra 15% under RAMP for green tech and women-owned MSMEs.
              </p>
              <Link href="/subsidy/tech-upgradation" className="mt-6 flex items-center text-sm font-bold text-orange-600 group-hover:text-orange-700 transition-colors w-fit">
                View Detail <ArrowRight className="ml-2 w-4 h-4 group-hover:-rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Card 6: Dairy (Large Image) */}
            <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden bg-slate-900 text-white shadow-lg shadow-slate-900/10 group flex flex-col justify-end min-h-[480px] flex-grow">
              <Image
                src="/subsidy/dairy.png"
                alt="Dairy Development"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
              <div className="relative z-10 p-8 md:p-10 pt-32 transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-3">Dairy Development Policy 2022</p>
                <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight tracking-tight text-white group-hover:text-yellow-400 transition-colors">
                  Strengthen the Dairy Value Chain
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                  Support for new milk processing plants, 25% capacity expansion, and value-added products like cheese and ice cream. Build robust cold chain infrastructure including chilling centers.
                </p>
                <Link href="/subsidy/dairy-development" className="mt-6 flex items-center text-sm font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors w-fit">
                  View Detail <ArrowRight className="ml-2 w-4 h-4 group-hover:-rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}