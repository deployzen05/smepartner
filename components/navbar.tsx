import Link from 'next/link';
import { Sun } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/0 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
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
        <Link href="#form">
          <button className="rounded-md border-b-4 border-[#eec248] bg-[#ffd563] px-6 py-3 text-sm font-bold text-black shadow-sm transition-colors hover:bg-[#ffca28] active:translate-y-1 active:border-b-0 md:text-base">
            Get Solar Quote
          </button>
        </Link>
      </div>
    </nav>
  );
}
