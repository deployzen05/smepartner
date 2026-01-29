'use client';

import * as React from 'react';
import { TopHeader } from './top-header';
import Link from 'next/link';
import {
  Sun,
  Menu,
  Home,
  Building2,
  Factory,
  Droplets,
  Wallet,
  Zap,
  ArrowRight,
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import Image from 'next/image';
import LogoImage from '@/public/logo.jpeg';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const serviceLinks = [
    {
      title: 'Residential Solar',
      href: '/services/residential',
      description: 'Rooftop solar solutions for homes under PM Surya Ghar Yojana',
      icon: Home,
    },
    {
      title: 'Commercial Solar',
      href: '/services/commercial',
      description: 'Customized solar EPC solutions for businesses',
      icon: Building2,
    },
    {
      title: 'Industrial Projects',
      href: '/services/industrial',
      description: 'Solar power plants for MSMEs and industries',
      icon: Factory,
    },
    {
      title: 'Solar Water Pumps',
      href: '/services/pumps',
      description: 'Solar-powered pumping solutions for agriculture',
      icon: Droplets,
    },
    {
      title: 'O&M Services',
      href: '/services/operations',
      description: 'Long-term operation and maintenance services',
      icon: Zap,
    },
    {
      title: 'Subsidy Consultancy',
      href: '/subsidy',
      description: 'Consultancy for capital subsidy and benefits',
      icon: Wallet,
    },
  ];

  const ListItem = React.forwardRef<
    React.ComponentRef<'a'>,
    React.ComponentPropsWithoutRef<'a'> & { icon?: React.ElementType }
  >(({ className, title, children, icon: Icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 dark:hover:bg-slate-800 dark:hover:text-orange-400 dark:focus:bg-slate-800',
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2 text-sm font-medium leading-none">
              {Icon && <Icon className="h-4 w-4" />}
              {title}
            </div>
            <p className="line-clamp-2 mt-1 text-sm leading-snug text-slate-500 dark:text-slate-400">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = 'ListItem';

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full font-sans">
      <div className="hidden md:block">
        <TopHeader />
      </div>

      <nav className="relative z-40 w-full border-b border-white/5 bg-white/80 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-xl transition-all md:px-6 dark:border-white/5 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between xl:h-20">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-14 overflow-hidden w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 transition-transform group-hover:scale-105">
              <Image src={LogoImage} alt="Logo" width={56} height={56} placeholder="blur" />
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            <Link
              href="/"
              className="group relative flex items-center py-2 text-sm font-medium text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
            >
              Home
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-full dark:bg-orange-500" />
            </Link>

            <Link
              href="/about"
              className="group relative flex items-center py-2 text-sm font-medium text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
            >
              About
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-full dark:bg-orange-500" />
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group relative h-auto bg-transparent p-0 text-sm font-medium text-slate-600 hover:bg-transparent hover:text-orange-600 focus:bg-transparent focus:text-orange-600 data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-orange-600 data-[state=open]:hover:bg-transparent dark:text-slate-300 dark:hover:text-orange-400 dark:data-[active]:bg-transparent dark:data-[state=open]:bg-transparent">
                    Services
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-full data-[state=open]:w-full dark:bg-orange-500" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 bg-white p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-slate-950">
                      {serviceLinks.map((service) => (
                        <ListItem
                          key={service.href}
                          title={service.title}
                          href={service.href}
                          icon={service.icon}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/subsidy"
              className="group relative flex items-center py-2 text-sm font-medium text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
            >
              Subsidy
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-full dark:bg-orange-500" />
            </Link>
          </div>

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
              className="h-11 px-8"
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
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:text-slate-100 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                    >
                      Home
                      <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-500" />
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:text-slate-100 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                    >
                      About
                      <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-500" />
                    </Link>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="services" className="border-none">
                        <AccordionTrigger className="px-4 py-3 text-base font-medium text-slate-900 hover:bg-orange-50 hover:text-orange-600 hover:no-underline dark:text-slate-100 dark:hover:bg-orange-950/30 dark:hover:text-orange-400">
                          Services
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-1 px-4 pb-2">
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:text-slate-300 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                              >
                                {service.icon && (
                                  <service.icon className="h-4 w-4" />
                                )}
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Link
                      href="/subsidy"
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:text-slate-100 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                    >
                      Subsidy
                      <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-500" />
                    </Link>
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
