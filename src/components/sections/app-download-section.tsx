import Image from 'next/image';
import type { SVGProps } from 'react';

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="17"
    height="12"
    viewBox="0 0 17 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.8333 1L15.8333 6L10.8333 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 6H15.8333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AppDownloadSection = () => {
  return (
    <section className="bg-background text-foreground py-12 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-y-8 md:gap-y-0 md:gap-x-12 lg:gap-x-20">
          <div className="md:col-span-4">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/download-app-15.jpg"
              alt="Booking app shown on a smartphone"
              width={500}
              height={700}
              className="w-full h-auto mx-auto max-w-sm md:max-w-full"
            />
          </div>
          <div className="md:col-span-6">
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-medium uppercase tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">CONTACT US </span>
              <br className="md:hidden" />
              <span className="text-primary">TODAY</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl">
              Experience reliable transport at your fingertips. Contact us to book airport transfers, school transport, corporate journeys or everyday trips: fast, reliable, and hassle‑free.
            </p>
            <a
              href="tel:01922123456"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-[1.4px] hover:opacity-60 transition-opacity"
            >
              <span>Call Now</span>
              <ArrowRightIcon className="w-4 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;