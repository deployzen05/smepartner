'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  User,
  Mail,
  Building2,
  Briefcase,
  Phone,
  Globe,
  FileText,
  Zap,
  LayoutDashboard,
} from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  country: z.string().min(1, 'Country is required'),
  phone: z.string().min(5, 'Phone number is required'),
  companyName: z.string().min(1, 'Company name is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
  role: z.string().min(1, 'Role is required'),
  purpose: z.string().min(1, 'Selection required'),
  capacity: z.string().min(1, 'Capacity required'),
  projectsPerMonth: z.string().min(1, 'Selection required'),
  requirements: z.string().optional(),
});

export function EnquiryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      country: 'in',
      phone: '',
      companyName: '',
      jobTitle: '',
      role: '',
      purpose: '',
      capacity: '',
      projectsPerMonth: '',
      requirements: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success('Demo Scheduled!', {
      description: 'Our team will be in touch shortly.',
    });
    form.reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      className="w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-8"
    >
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-orange-600 md:text-3xl">
          Schedule a Demo
        </h2>
        <p className="mt-2 text-slate-500">
          Get a personalized walkthrough of our platform
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Detailed Info Group */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="h-11 border-slate-200 bg-slate-50 pl-10 transition-colors focus:bg-white"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Business Email
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="john@company.com"
                        {...field}
                        className="h-11 border-slate-200 bg-slate-50 pl-10 transition-colors focus:bg-white"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Country
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div className="relative">
                        <Globe className="absolute top-3 left-3 z-10 h-4 w-4 text-slate-400" />
                        <SelectTrigger className="h-11 border-slate-200 bg-slate-50 pl-10 focus:bg-white">
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                      </div>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="in">India (भारत)</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Phone Number
                  </FormLabel>
                  <div className="flex h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 transition-colors focus-within:border-slate-500 focus-within:bg-white focus-within:ring-1 focus-within:ring-slate-500">
                    <div className="mr-3 flex items-center gap-2 border-r border-slate-300 pr-3">
                      <Image
                        src="https://flagcdn.com/w20/in.png"
                        alt="IN"
                        width={20}
                        height={15}
                        className="object-cover"
                      />
                    </div>
                    <input
                      className="flex w-full bg-transparent text-sm outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="00000 00000"
                      {...field}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Company */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Building2 className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Company Ltd."
                        {...field}
                        className="h-11 border-slate-200 bg-slate-50 pl-10 focus:bg-white"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Job Title */}
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Job Title
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Briefcase className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Director, Manager…"
                        {...field}
                        className="h-11 border-slate-200 bg-slate-50 pl-10 focus:bg-white"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Role */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Your Role
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div className="relative">
                        <User className="absolute top-3 left-3 z-10 h-4 w-4 text-slate-400" />
                        <SelectTrigger className="h-11 border-slate-200 bg-slate-50 pl-10 focus:bg-white">
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                      </div>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="installer">
                        Solar Installer/EPC
                      </SelectItem>
                      <SelectItem value="manufacturer">Manufacturer</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Purpose */}
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Purpose
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div className="relative">
                        <FileText className="absolute top-3 left-3 z-10 h-4 w-4 text-slate-400" />
                        <SelectTrigger className="h-11 border-slate-200 bg-slate-50 pl-10 focus:bg-white">
                          <SelectValue placeholder="Select Purpose" />
                        </SelectTrigger>
                      </div>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="exploring">
                        Exploring Software
                      </SelectItem>
                      <SelectItem value="purchasing">Purchasing</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Capacity */}
            <FormField
              control={form.control}
              name="capacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Project Capacity
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div className="relative">
                        <Zap className="absolute top-3 left-3 z-10 h-4 w-4 text-slate-400" />
                        <SelectTrigger className="h-11 border-slate-200 bg-slate-50 pl-10 focus:bg-white">
                          <SelectValue placeholder="Select Capacity" />
                        </SelectTrigger>
                      </div>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3-25kw">3-25KW</SelectItem>
                      <SelectItem value="25-200kw">25-200KW</SelectItem>
                      <SelectItem value="200-500kw">200-500KW</SelectItem>
                      <SelectItem value="500kw+">500KW - 2.5MW</SelectItem>
                      <SelectItem value="2.5mw+">Above 2.5MW</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Frequency */}
            <FormField
              control={form.control}
              name="projectsPerMonth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Projects / Month
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div className="relative">
                        <LayoutDashboard className="absolute top-3 left-3 z-10 h-4 w-4 text-slate-400" />
                        <SelectTrigger className="h-11 border-slate-200 bg-slate-50 pl-10 focus:bg-white">
                          <SelectValue placeholder="Average Count" />
                        </SelectTrigger>
                      </div>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-5">1-5</SelectItem>
                      <SelectItem value="5-10">5-10</SelectItem>
                      <SelectItem value="10-20">10-20</SelectItem>
                      <SelectItem value="20+">20+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                  Additional Requirements
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about specific features or needs…"
                    className="min-h-[80px] w-full resize-none rounded-md border-slate-200 bg-slate-50 p-3 focus:border-slate-500 focus:bg-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mt-6 h-12 w-full rounded-lg bg-[#ffd563] text-sm font-bold tracking-wide text-black uppercase shadow-md transition-all hover:bg-[#ffca28] hover:shadow-lg active:translate-y-0.5"
          >
            Schedule a Demo
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
