'use client';

import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LogoImage from '@/public/logo.jpeg';

export function SubsidyFooter() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative z-20 overflow-hidden bg-white pt-16 pb-8 shadow-[0_-5px_30px_rgba(0,0,0,0.02)] md:pt-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12"
        >
          {/* Brand */}
          <motion.div variants={item} className="lg:col-span-4">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
                <Image
                  src={LogoImage}
                  alt="SME Partner"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  SME PARTNER
                </span>
                <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                  Solar & Industrial Consultancy
                </span>
              </div>
            </Link>

            <p className="mb-6 pr-4 leading-relaxed text-slate-500">
              SME PARTNER is an industrial subsidy consultant and solar EPC
              company established in 2015. We provide government subsidy
              assistance, project finance support, and solar power solutions
              across Uttar Pradesh.
            </p>

            <p className="mb-8 text-sm text-slate-500">
              Authorized UPNEDA Vendor
              <br />
              Registed in IIA
              <br />
              SIDBI Partner for Industrial Project Finance
            </p>

            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/people/SME-Solar-Solutions/61586248106545/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-orange-500 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.instagram.com/smesolarsolutions?igsh=MTNtemhmc2tiZjAxaw%3D%3D&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-orange-500 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className="lg:col-span-4">
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Contact Information
            </h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-slate-400" />
                <a
                  href="https://maps.google.com/?q=128/758,+Krishna+Rama+Chandra+Apartment,+K-Block,+Kidwai+Nagar,+Kanpur,+Uttar+Pradesh+–+208011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-orange-500"
                >
                  128/758, Krishna Rama Chandra Apartment, K-Block, Kidwai
                  Nagar, Kanpur, Uttar Pradesh – 208011
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-slate-400" />
                <a
                  href="tel:+919169478991"
                  className="transition hover:text-orange-500"
                >
                  +91 9169478991
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-slate-400" />
                <a
                  href="tel:+919140299799"
                  className="transition hover:text-orange-500"
                >
                  +91 9140299799
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-slate-400" />
                <a
                  href="tel:+919956286657"
                  className="transition hover:text-orange-500"
                >
                  +91 8828245701
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-slate-400" />
                <a
                  href="mailto:smesolarsolution@gmail.com"
                  className="transition hover:text-orange-500"
                >
                  smesolarsolution@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={item}
            className={isHomePage ? 'lg:col-span-4' : 'lg:col-span-2'}
          >
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {(isHomePage
                ? [
                    { label: 'Terms & Conditions', href: '#' },
                    { label: 'Privacy Policy', href: '#' },
                  ]
                : [
                    {
                      label: 'Food Processing',
                      href: '/subsidy/food-processing',
                    },
                    { label: 'PMFME Scheme', href: '/subsidy/pmfme-scheme' },
                    { label: 'MSME Policy', href: '/subsidy/msme' },
                    { label: 'UP Tourism Policy', href: '/subsidy/up-tourism' },
                    {
                      label: 'Tech Upgradation Scheme',
                      href: '/subsidy/tech-upgradation',
                    },
                    {
                      label: 'Nand Baba Dairy Mission',
                      href: '/subsidy/dairy-development',
                    },
                    { label: 'Terms & Conditions', href: '#' },
                    { label: 'Privacy Policy', href: '#' },
                  ]
              ).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-slate-500 transition hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          {!isHomePage && (
            <motion.div variants={item} className="lg:col-span-2">
              <h3 className="mb-6 text-xl font-bold text-slate-900">Support</h3>
              <ul className="space-y-3">
                {[
                  'Subsidy Claim Process',
                  'Documentation and Guidance',
                  'Udyam Registration',
                ].map((item) => (
                  <li key={item}>
                    <span className="text-sm font-semibold text-slate-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom */}
        <div className="my-12 h-px bg-slate-200" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-slate-900">SME PARTNER</span>.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://deployzen.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 transition hover:text-orange-500"
            >
              Developed by DeployZen
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
