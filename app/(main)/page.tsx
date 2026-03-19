import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SME Partner | Dual-Pathway Solar & Subsidy Command Center',
  description:
    'SME Partner is Uttar Pradesh’s most trusted industrial and solar consultancy. We provide expert guidance on PM Surya Ghar subsidies and massive capital grants for MSMEs.',
  alternates: { canonical: 'https://www.smepartner.in' },
};
import { Navbar } from '@/components/common/navbar';
import { Footer } from '@/components/common/footer';
import { CheckCircle2, ShieldHalf, ArrowRight } from 'lucide-react';
import { HomeCTASection } from '@/components/home/home-cta-section';

export default function DualPathwayPage() {
  return (
    <div className="selection:bg-tech-blue bg-tech-deep flex min-h-screen flex-col font-sans text-slate-700 selection:text-white">
      <Navbar />

      <section className="split-hero relative mt-15 flex flex-1 flex-col lg:flex-row">
        {/* SOLAR PATHWAY */}
        <Link
          href="/solar"
          className="pathway-card group relative flex flex-1 flex-col justify-end border-r border-slate-100 p-8 lg:p-20"
        >
          <img
            alt="Solar Energy Solutions"
            className="pathway-image absolute inset-0 h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT-MyN7fJiT491mDuz3HKzldoBaG2PihcgGdx1tsV_AtCPcSZPVhtRH4F-fsQD6xwYlIJqTJXCVMFwq4363L1eYoe4yMHfQODblujpwmD-i_9N4LvCv1X1q67BiQR9cxTCYChroWs12lI9EKsCNW70NWBmk-AP0ogNhBJlH9mQhPoU0-e8IWlSiMziaQSdQ5WA3uy4wEV0LL9cSY1qbYa5YLPSpZYVvJm9N9Lz9NTyy4vfUqx_TCewVWRrQ7_QAP3099_cIIcnhNw"
          />
          <div className="relative z-20 max-w-xl">
            {/* <div className="inline-flex items-center space-x-2 bg-tech-blue/10 border border-tech-blue/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 bg-tech-blue rounded-full"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-tech-blue">Official MNRE Associated Vendor</span>
            </div> */}
            <h2 className="font-display mb-6 text-4xl leading-tight font-black text-slate-900 lg:text-6xl">
              Explore{' '}
              <span className="from-tech-blue to-tech-cyan bg-gradient-to-r bg-clip-text text-transparent">
                Solar Solutions
              </span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed font-medium text-slate-600">
              Transition to clean energy with our end-to-end EPC services. We
              provide rooftop solar for homes, industrial solar plants, and
              solar water pumps with full MNRE compliance.
            </p>
            <ul className="mb-10 space-y-4">
              <li className="flex items-center text-sm font-semibold tracking-wide text-slate-700">
                <CheckCircle2 className="text-tech-green mr-3 h-5 w-5 flex-shrink-0" />
                PM Surya Ghar Residential Support
              </li>
              <li className="flex items-center text-sm font-semibold tracking-wide text-slate-700">
                <CheckCircle2 className="text-tech-green mr-3 h-5 w-5 flex-shrink-0" />
                Industrial & Commercial Rooftops
              </li>
              <li className="flex items-center text-sm font-semibold tracking-wide text-slate-700">
                <CheckCircle2 className="text-tech-green mr-3 h-5 w-5 flex-shrink-0" />
                Solar Pump Systems for Agriculture
              </li>
            </ul>
            <button className="glow-blue bg-tech-blue group/btn font-display flex w-fit items-center rounded-full px-10 py-5 font-black text-white transition-all hover:bg-slate-900">
              VIEW SOLAR SERVICES
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </Link>

        {/* SUBSIDY PATHWAY */}
        <Link
          href="/subsidy"
          className="pathway-card group relative flex flex-1 flex-col justify-end p-8 lg:p-20"
        >
          <img
            alt="Subsidy Consultancy"
            className="pathway-image absolute inset-0 h-full w-full object-cover opacity-60 contrast-125"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGPNA3nDRJA4vxdLJK5WHR4X0ZSDlyVXTcFr6uCOvzyJ6jn__U0710ReldgCMRCZ3zAx5sibJwNtaK0kIVbghlh_bvC6N_M5HvSZ9o0XFML2A8F0IHN9lGTx3VXQRLqEvrE25oVFcLCkonZIU_EosxEjhLdSpXZwbcXFLwLO_xeHIKIAzb5J41E_KP5550__O-5xCQ24Nse7yL1q0DzIe2vgShpqfIvEJZsNGwHOmeY2DuXVButHE2mKXwCJSJ9aLlUy0uVK_Jgtg"
          />
          <div className="relative z-20 max-w-xl">
            {/* <div className="inline-flex items-center space-x-2 bg-tech-orange/10 border border-tech-orange/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 bg-tech-orange rounded-full"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-tech-orange">Industrial Expertise</span>
                        </div> */}
            <h2 className="font-display mb-6 text-4xl leading-tight font-black text-slate-900 lg:text-6xl">
              Government{' '}
              <span className="from-tech-orange bg-gradient-to-r to-amber-500 bg-clip-text text-transparent">
                Subsidy Consultancy
              </span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed font-medium text-slate-600">
              Navigate complex government schemes with ease. We specialize in
              capital subsidies, mandi tax exemptions, MSME benefits, and
              project finance for food processing and textiles.
            </p>
            <ul className="mb-10 space-y-4">
              <li className="flex items-center text-sm font-semibold tracking-wide text-slate-700">
                <ShieldHalf className="text-tech-orange mr-3 h-5 w-5 flex-shrink-0" />
                Capital Subsidy Support
              </li>
              <li className="flex items-center text-sm font-semibold tracking-wide text-slate-700">
                <ShieldHalf className="text-tech-orange mr-3 h-5 w-5 flex-shrink-0" />
                Mandi Tax Exemptions
              </li>
              <li className="flex items-center text-sm font-semibold tracking-wide text-slate-700">
                <ShieldHalf className="text-tech-orange mr-3 h-5 w-5 flex-shrink-0" />
                MSME Project Finance
              </li>
              <li className="flex items-center text-sm font-semibold tracking-wide text-slate-700">
                <ShieldHalf className="text-tech-orange mr-3 h-5 w-5 flex-shrink-0" />
                Tech Upgradation
              </li>
            </ul>
            <button className="glow-orange bg-tech-orange group/btn font-display flex w-fit items-center rounded-full px-10 py-5 font-black text-white transition-all hover:bg-slate-900">
              VIEW SUBSIDY SERVICES
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </Link>
      </section>
      <HomeCTASection />

      <Footer />
    </div>
  );
}
