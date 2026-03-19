'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="mb-6 flex w-fit items-center gap-2 text-slate-300 hover:bg-white/10 hover:text-white"
    >
      <ArrowLeft className="h-4 w-4" />
      Go Back
    </Button>
  );
}
