'use client';

import * as React from 'react';
import Link from 'next/link';
import { Sun, Menu } from 'lucide-react';
import { EnquiryDialog } from '@/components/Home/enquire-dialog';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/subsidy', label: 'Subsidy' },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/50 backdrop-blur-md">
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-900 transition-colors hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
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

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex flex-col gap-6 px-6 pt-10 sm:max-w-sm"
          >
            <SheetHeader>
              <SheetTitle className="text-left">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white">
                    <Sun className="h-5 w-5" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-black tracking-tight text-slate-900">
                      SME
                    </span>
                    <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                      PARTNER
                    </span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-900 transition-colors hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <EnquiryDialog>
                  <Button variant="cta" className="w-full text-base shadow-sm">
                    Enquiry
                  </Button>
                </EnquiryDialog>
                <Button asChild variant="outline-brand" className="w-full">
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
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
