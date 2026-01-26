import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  name: string;
  className?: string;
  background: React.ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl',
      // light styles
      'border bg-white text-black shadow-sm',
      // dark styles
      'dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)]',
      className
    )}
  >
    <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
      {background}
    </div>

    {/* Gradient Overlay for better text visibility */}
    <div className="pointer-events-none absolute inset-0 z-10 space-y-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <div className="pointer-events-none z-20 flex flex-col px-6 pb-6 transition-all duration-300">
      <div className="mb-2 flex h-12 w-12 origin-bottom-left items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-0 group-hover:opacity-0">
        <Icon className="h-6 w-6" />
      </div>

      <div className="origin-bottom-left translate-y-0 text-white transition-all duration-300 group-hover:-translate-y-10 group-hover:scale-95 group-hover:opacity-0">
        <h3 className="font-sans text-xl font-bold">{name}</h3>
      </div>

      <div className="absolute right-6 bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="mb-2 text-xl font-bold text-white">{name}</h3>
        <p className="mb-4 line-clamp-2 font-sans text-sm text-white/80 md:line-clamp-3">
          {description}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="pointer-events-auto w-fit gap-2 border-white/40 bg-white/20 text-white hover:border-white hover:bg-white hover:text-black"
        >
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
