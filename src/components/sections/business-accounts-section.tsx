import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const BusinessAccountsSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Column */}
        <div className="relative min-h-[500px] w-full aspect-[5/7] lg:min-h-0 lg:aspect-auto">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/business-accounts-10.jpg"
            alt="A professional businesswoman working on her laptop in the back of a premium car."
            fill
            className="object-cover"
          />
        </div>

        {/* Content Column */}
        <div className="flex items-center bg-black px-4 py-12 sm:px-8 md:px-12 md:py-20 lg:px-12 xl:px-20">
          <div>
            <h2 className="font-medium uppercase text-[40px] leading-tight tracking-[-0.02em] md:text-[48px]">
              <span className="text-white">Business </span>
              <span className="text-primary">Accounts</span>
            </h2>
            <p className="mt-6 text-body-lg text-muted-foreground">
              Open an Addison Lee business account today and enjoy seamless corporate travel management with a range of benefits: fixed rates on London taxis and airport transfers, priority booking for meetings and events, plus dedicated account managers to support your travel needs, and more.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center rounded-none bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[1.4px] text-primary-foreground transition-colors hover:bg-primary/80 md:mt-12"
            >
              FIND OUT MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAccountsSection;