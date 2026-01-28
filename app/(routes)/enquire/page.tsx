import { Metadata } from 'next';
import { EnquiryForm } from '@/components/enquiry-form';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enquire Now - Schedule a Demo',
  description:
    'Contact SME Partner for your solar requirements. Schedule a demo or get a customized quote for residential, commercial, or industrial solar.',
};

export default function EnquirePage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-1 text-sm font-semibold tracking-wider text-orange-600 uppercase">
              <Sparkles className="h-4 w-4" />
              YOUR ENQUIRIES
            </div>
            <h1 className="text-3xl font-bold text-orange-600 md:text-5xl">
              Explore Your Enquiries with Us
            </h1>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-square min-h-[400px] w-full overflow-hidden rounded-3xl shadow-lg lg:aspect-auto lg:h-full">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661540692683-524469fae479?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Enquiry Support"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
