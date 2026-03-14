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
import { User, Mail, Globe } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  country: z.string().min(1, 'Country is required'),
  phone: z.string().min(5, 'Phone number is required'),
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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Name
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

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                    Email
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

          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                  Requirements
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
