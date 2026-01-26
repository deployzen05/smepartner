'use client';

import Link from 'next/link';
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Sun,
} from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative z-20 overflow-hidden bg-white pt-24 pb-8 shadow-[0_-5px_30px_rgba(0,0,0,0.02)]">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12"
        >
          {/* Column 1: Logo & About */}
          <motion.div variants={item} className="lg:col-span-4">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                <Sun className="h-6 w-6" strokeWidth={3} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  SME
                </span>
                <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
                  SOLAR
                </span>
              </div>
            </Link>
            <p className="mb-8 pr-4 leading-relaxed text-slate-500">
              SME Solar (Division of SME Partner) is a leading Solar EPC company
              based in Kanpur. As an authorized vendor for UPNEDA and associated
              with MNRE, we empower Uttar Pradesh with clean energy.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:scale-110 hover:bg-blue-700 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:scale-110 hover:bg-pink-600 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Column 2: Contact */}
          <motion.div variants={item} className="lg:col-span-3">
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="group flex items-start gap-3 text-slate-600 transition-colors hover:text-orange-500"
                >
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-slate-400 group-hover:text-orange-500" />
                  <span>
                    128/758, Krishna Rama Chandra Apartment, K-Block, Kidwai
                    Nagar, Kanpur - 208011
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919169478991"
                  className="group flex items-center gap-3 text-slate-600 transition-colors hover:text-orange-500"
                >
                  <Phone className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-orange-500" />
                  <span>+91 9169478991</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919140299799"
                  className="group flex items-center gap-3 text-slate-600 transition-colors hover:text-orange-500"
                >
                  <Phone className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-orange-500" />
                  <span>+91 9140299799</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:smesolarsolution@gmail.com"
                  className="group flex items-center gap-3 text-slate-600 transition-colors hover:text-orange-500"
                >
                  <Mail className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-orange-500" />
                  <span>smesolarsolution@gmail.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div variants={item} className="lg:col-span-2">
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                'RESIDENTIAL SOLAR',
                'COMMERCIAL SOLAR',
                'INDUSTRIAL SOLAR',
                'WATER PUMPS',
                'SUBSIDY INFO',
                'CONTACT',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="inline-block text-sm font-semibold text-slate-500 uppercase transition-colors hover:translate-x-1 hover:text-orange-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Support */}
          <motion.div variants={item} className="lg:col-span-3">
            <h3 className="mb-6 text-xl font-bold text-slate-900">Support</h3>
            <ul className="space-y-3">
              {[
                'Process Workflow',
                'Bank Finance Options',
                'Maintenance Services',
                'PM Surya Ghar Inquiry',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="inline-block text-sm font-semibold text-slate-500 transition-colors hover:translate-x-1 hover:text-orange-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="my-12 h-px w-full bg-slate-200" />

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              Copyright © 2024-25{' '}
              <span className="font-bold text-slate-900">SME Solar</span>. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="transition-colors hover:text-orange-500"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-orange-500"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
