'use client';

import {
  Mail,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

export function TopHeader() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex w-full flex-col items-center gap-2 border-b border-orange-100 bg-orange-50 px-2 py-2 text-xs text-orange-900 sm:flex-row sm:justify-between sm:gap-0 sm:px-4 sm:text-sm">
      <div className="flex w-full flex-col flex-wrap items-center gap-1 text-center sm:w-auto sm:flex-row sm:gap-4 sm:text-left">
        <span className="flex items-center justify-center gap-1">
          <Clock className="h-4 w-4" /> Mon-Sat: 9:00am - 6:00pm
        </span>
        <span className="flex items-center justify-center gap-1">
          <Mail className="h-4 w-4" /> info@smepartner.com
        </span>
        <span className="flex items-center justify-center gap-1">
          <Phone className="h-4 w-4" /> +91 98765 43210
        </span>
      </div>
      <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <Facebook className="h-4 w-4 hover:text-orange-600" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <Twitter className="h-4 w-4 hover:text-orange-600" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4 hover:text-orange-600" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <Instagram className="h-4 w-4 hover:text-orange-600" />
        </a>
      </div>
    </div>
  );
}
