import { Metadata } from 'next';
import { EnquiryForm } from '@/components/common/enquiry-form';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { BackButton } from '@/components/common/back-button';

export const metadata: Metadata = {
  title: 'Enquire Now - Schedule a Consultation',
  description:
    'Contact SME Partner for your solar and subsidy requirements. Schedule a consultation or get a customized quote for your industrial or residential projects.',
};

export default function EnquirePage() {
  return (
    <div className="min-h-screen bg-[#0a1128]">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <BackButton />
              <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                <Sparkles className="h-4 w-4" />
                YOUR ENQUIRIES
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                Explore Your <br />
                <span className="text-cyan-400">Enquiries</span> with Us
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-slate-300">
                Contact SME Partner for your solar and subsidy requirements.
                Schedule a consultation or get a customized quote for your
                residential, commercial, or industrial projects.
              </p>

              <div className="relative mt-8 w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.pexels.com/photos/7709257/pexels-photo-7709257.jpeg"
                    alt="Enquiry Support"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {/* Bottom Banner */}
                <div className="absolute right-0 bottom-0 left-0 bg-[#00AEEF] py-4 text-center">
                  <p className="text-lg font-bold text-white md:text-xl">
                    Uttar Pradesh's Trusted Solar & Subsidy Partner*
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
