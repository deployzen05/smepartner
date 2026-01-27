import Link from 'next/link';
import { Sun } from 'lucide-react';
import { EnquiryDialog } from '@/components/Home/enquire-dialog';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/50">
      <div className="max-w-8xl container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
            <Sun className="h-6 w-6" strokeWidth={3} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-slate-900">
              SME
            </span>
            <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
              PARTNER
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="text-base font-medium text-slate-900 transition-colors hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-base font-medium text-slate-900 transition-colors hover:text-orange-500"
          >
            About
          </Link>
          <Link
            href="#solar"
            className="text-base font-medium text-slate-900 transition-colors hover:text-orange-500"
          >
            Solar Product
          </Link>
          <Link
            href="#subsidy"
            className="text-base font-medium text-slate-900 transition-colors hover:text-orange-500"
          >
            Subsidy Plans
          </Link>
        </div>
        {/* Popup Quote Dialog Button */}
        <div className="flex items-center gap-3">
          <EnquiryDialog>
            <Button
              variant="cta"
              className="px-6 py-3 text-sm shadow-sm md:text-base"
            >
              Enquiry
            </Button>
          </EnquiryDialog>
          <Button asChild variant="outline-brand" className="py-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=128/758,+Krishna+Rama+Chandra+Apartment,+K-Block,+Kidwai+Nagar,+Kanpur+-+208011"
              target="_blank"
              rel="noopener noreferrer"
            >
              Locate Us
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
