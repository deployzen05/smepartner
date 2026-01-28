'use client';

import * as React from 'react';
import { TopHeader } from './top-header';
import Link from 'next/link';
import {
  Sun,
  Menu,
  Clock,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
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
    <header className="fixed top-0 right-0 left-0 z-50 w-full font-sans">
      {/* TopHeader only visible on md+ screens */}
      <div className="hidden md:block">
        <TopHeader />
      </div>

      <nav className="relative z-40 w-full border-b border-white/5 bg-white/80 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-xl transition-all md:px-6 dark:border-white/5 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between xl:h-20">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 transition-transform group-hover:scale-105">
              <Sun className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                SME
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">
                PARTNER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex items-center py-2 text-sm font-medium text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-full dark:bg-orange-500" />
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Button
              asChild
              variant="cta"
              className="h-11 px-8 text-sm font-semibold shadow-md shadow-orange-500/20 transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-orange-500/30"
            >
              <Link href="/enquire">Enquiry</Link>
            </Button>
            <Button
              asChild
              variant="outline-brand"
              className="h-11 border-slate-200 bg-transparent px-6 text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            >
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
              className="w-[300px] border-l border-white/10 bg-white/95 p-0 backdrop-blur-xl sm:max-w-sm dark:bg-slate-950/95"
            >
              <div className="flex h-full flex-col p-6">
                <SheetHeader className="px-1 text-left">
                  <SheetTitle>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-white shadow-lg shadow-orange-500/20">
                        <Sun className="h-6 w-6" strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col leading-none">
                        <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                          SME
                        </span>
                        <span className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">
                          PARTNER
                        </span>
                      </div>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="no-scrollbar flex flex-1 flex-col gap-6 overflow-y-auto px-1 py-6">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:text-slate-100 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                      >
                        {link.label}
                        <span className="text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-500">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <Button
                        asChild
                        variant="cta"
                        className="w-full text-base font-semibold shadow-sm"
                      >
                        <Link href="/enquire">Enquiry</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline-brand"
                        className="w-full"
                      >
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
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
