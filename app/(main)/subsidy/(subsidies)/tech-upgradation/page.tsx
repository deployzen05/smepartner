import { Metadata } from 'next';
import { SubsidyNavbar } from '@/components/subsidy/subsidy-navbar';
import { SubsidyFooter } from '@/components/subsidy/subsidy-footer';
import { SubsidyCTA } from '@/components/subsidy/subsidy-cta';

export const metadata: Metadata = {
  title: 'Tech Upgradation Scheme',
  description: 'Details on the Tech Upgradation Scheme in Uttar Pradesh.',
};

export default function TechUpgradationPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32">
      <SubsidyNavbar />
      
      <main className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Tech Upgradation Scheme</h1>
        <p className="text-lg text-slate-600">Detailed information coming soon...</p>
      </main>

      <SubsidyCTA />
      <SubsidyFooter />
    </div>
  );
}
