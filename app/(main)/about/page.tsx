import { Metadata } from 'next';
import { Team } from '@/components/common/team';
import { TrustedSection } from '@/components/common/trusted-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Sun,
  Building2,
  FileCheck,
  Briefcase,
  Zap,
  MapPin,
  CheckCircle2,
  Users
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - SME Partner',
  description:
    'Learn about SME Partner, Uttar Pradesh’s trusted industrial consultancy and authorized UPNEDA vendor offering subsidy assistance and solar power solutions.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-inner">
            <Sun className="h-10 w-10" strokeWidth={2.5} />
          </div>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Empowering Your <br className="hidden md:block" />
            <span className="text-orange-600">Business Growth.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Established in 2015, SME Partner is Uttar Pradesh's most trusted 
            industrial consultancy. From securing government incentives and project 
            finance to end-to-end solar EPC services, we provide comprehensive support 
            for MSMEs, manufacturers, and homeowners.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-base bg-orange-600 hover:bg-orange-700">
              <Link href="/enquire">Consult With Us</Link>
            </Button>
            <div className="flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-md border border-slate-100">
              <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-sm font-semibold text-slate-700">Authorized UPNEDA Vendor</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL EXPERTISE (BENTO GRID) */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">Our Dual Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">Providing an unmatched combination of policy consulting and energy execution.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Subsidy Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-50 p-8 transition-shadow hover:shadow-2xl md:p-12 border border-slate-100">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">Industrial Subsidy Consultancy</h3>
              <p className="mb-8 text-slate-600 leading-relaxed text-lg">
                We specialize in securing government incentives and finance for various industries across Uttar Pradesh, simplifying the bureaucratic process.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Food Processing (Up to 35% Capital Subsidy)',
                  'MSME Development (Up to 25% Capital Subsidy)',
                  'UP Tourism Policy (Hotels & Wellness)',
                  'Tech Upgradation & Dairy Development'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full text-blue-700 border-blue-200 hover:bg-blue-50">
                <Link href="/subsidy">Explore Subsidy Services</Link>
              </Button>
            </div>

            {/* Solar Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-orange-50 p-8 transition-shadow hover:shadow-2xl md:p-12 border border-orange-100">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-200 text-orange-700 transition-transform group-hover:scale-110">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">Solar Power Solutions</h3>
              <p className="mb-8 text-slate-700 leading-relaxed text-lg">
                End-to-end solar execution services under the PM Surya Ghar Muft Bijli Yojana, yielding up to ₹1,08,000 in subsidies for residential, plus massive commercial setups.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Residential Rooftop Solar (PM Surya Ghar)',
                  'Commercial & Industrial Solar Plants',
                  'Solar Water Pump Solutions',
                  'Operation & Maintenance Services'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/solar/services/residential">Explore Solar Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS WORKFLOW */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Our Process Workflow</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              A streamlined, proven 5-step methodology ensuring timely project execution and subsidy realization.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-5 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-slate-800" />

            {[
              { title: "Analysis", desc: "Project Analysis & Scheme Eligibility Check", icon: Users },
              { title: "Documentation", desc: "Site Assessment & Document Collection", icon: FileCheck },
              { title: "Processing", desc: "Submission & Strict Compliance Review", icon: Briefcase },
              { title: "Execution", desc: "Panel Mounting or Policy Follow-ups", icon: Building2 },
              { title: "Completion", desc: "System Activation & Subsidy Disbursement", icon: CheckCircle2 }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-800 border-4 border-slate-900 text-orange-500 shadow-xl transition-transform hover:scale-110">
                  <step.icon className="h-10 w-10" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM & TRUSTED LOGOS */}
      <section className="bg-white">
        <Team />
        <TrustedSection />
      </section>
    </div>
  );
}
