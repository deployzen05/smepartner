'use client';

import { Mail, Phone, Clock, Facebook, Instagram } from 'lucide-react';

export function TopHeader() {
  return (
    <div className="flex w-full flex-col items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-2 text-xs text-slate-300 sm:flex-row sm:justify-between sm:gap-0 sm:px-6 sm:text-sm">
      <div className="flex w-full flex-col flex-wrap items-center gap-2 text-center sm:w-auto sm:flex-row sm:gap-6 sm:text-left">
        <span className="flex items-center gap-2 transition-colors hover:text-white">
          <Clock className="h-3.5 w-3.5 text-orange-500" />
          <span>Mon-Sat: 10:00am - 7:00pm</span>
        </span>
        <a
          href="mailto:smepartner01@gmail.com"
          className="flex items-center gap-2 transition-colors hover:text-white"
        >
          <Mail className="h-3.5 w-3.5 text-orange-500" />
          <span>smepartner01@gmail.com</span>
        </a>
        <a
          href="mailto:smesolarsolution@gmail.com"
          className="flex items-center gap-2 transition-colors hover:text-white"
        >
          <Mail className="h-3.5 w-3.5 text-orange-500" />
          <span>smesolarsolution@gmail.com</span>
        </a>
        <a
          href="tel:+919169478991"
          className="flex items-center gap-2 transition-colors hover:text-white"
        >
          <Phone className="h-3.5 w-3.5 text-orange-500" />
          <span>+91 91694 78991</span>
        </a>
        <a
          href="tel:+919140299799"
          className="flex items-center gap-2 transition-colors hover:text-white"
        >
          <Phone className="h-3.5 w-3.5 text-orange-500" />
          <span>+91 91402 99799</span>
        </a>
        <a
          href="tel:+918828245701"
          className="flex items-center gap-2 transition-colors hover:text-white"
        >
          <Phone className="h-3.5 w-3.5 text-orange-500" />
          <span>+91 88282 45701</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.facebook.com/people/SME-Solar-Solutions/61586248106545/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-slate-400 transition-colors hover:text-orange-500"
        >
          <Facebook className="h-4 w-4" />
        </a>

        <a
          href="https://www.instagram.com/smesolarsolutions?igsh=MTNtemhmc2tiZjAxaw%3D%3D&utm_source=ig_contact_invite"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-slate-400 transition-colors hover:text-orange-500"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
