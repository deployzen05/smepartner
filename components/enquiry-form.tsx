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
      transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
      className="w-full rounded-xl border border-slate-100 bg-white p-5 shadow-sm md:p-8"
    >
      <h2 className="mb-8 text-center text-2xl font-bold text-[#1a1a1a]">
        Schedule a demo
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-sm font-semibold text-slate-800">
                  Full Name*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full Name"
                    {...field}
                    className="h-11 rounded-md border-slate-300 focus:border-slate-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-sm font-semibold text-slate-800">
                  Business Email*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Business Email"
                    {...field}
                    className="h-11 rounded-md border-slate-300 focus:border-slate-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-sm font-semibold text-slate-800">
                    Country*
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-11 rounded-md border-slate-300 focus:border-slate-500">
                        <SelectValue placeholder="India (भारत)" />
                      </SelectTrigger>
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

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-sm font-semibold text-slate-800">
                    Phone Number*
                  </FormLabel>
                  <div className="flex h-11 w-full rounded-md border border-slate-300 bg-transparent px-3 py-1 shadow-sm focus-within:ring-1 focus-within:ring-slate-500">
                    <div className="mr-2 flex items-center gap-2 border-r border-slate-300 pr-2">
                      <Image
                        src="https://flagcdn.com/w20/in.png"
                        alt="IN"
                        width={20}
                        height={15}
                        className="object-cover"
                      />
                    </div>
                    <input
                      className="placeholder:text-muted-foreground flex w-full bg-transparent text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="074104 10123"
                      {...field}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-sm font-semibold text-slate-800">
                    Company Name*
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company Name"
                      {...field}
                      className="h-11 rounded-md border-slate-300 focus:border-slate-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-sm font-semibold text-slate-800">
                    Job Title*
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Job Title"
                      {...field}
                      className="h-11 rounded-md border-slate-300 focus:border-slate-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-sm font-semibold text-slate-800">
                  Your Role in the Solar Industry*
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-11 rounded-md border-slate-300 focus:border-slate-500">
                      <SelectValue placeholder="Select your role..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="installer">
                      Solar Installer/EPC Developer
                    </SelectItem>
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="consultant">Solar Consultant</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-sm font-semibold text-slate-800">
                  What are you here for? *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-11 rounded-md border-slate-300 focus:border-slate-500">
                      <SelectValue placeholder="What are you here for..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="exploring">
                      Exploring the software
                    </SelectItem>
                    <SelectItem value="purchasing">
                      Purchasing subscription
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="capacity"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-sm font-semibold text-slate-800">
                  What capacity of projects you generally do?*
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-11 rounded-md border-slate-300 focus:border-slate-500">
                      <SelectValue placeholder="Select one..." />
                    </SelectTrigger>
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

          <FormField
            control={form.control}
            name="projectsPerMonth"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-sm font-semibold text-slate-800">
                  Average Number of projects per month *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-11 rounded-md border-slate-300 focus:border-slate-500">
                      <SelectValue placeholder="Average Number of projects..." />
                    </SelectTrigger>
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

          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-sm font-semibold text-slate-800">
                  What would you like to see in this demo? Any special
                  requirements?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Special requirements"
                    className="min-h-[60px] resize-none rounded-md border-slate-300 focus:border-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mt-4 h-12 w-full bg-[#ffd563] text-sm font-bold tracking-wide text-black uppercase shadow-sm hover:bg-[#ffca28]"
          >
            Schedule a DEMO
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
