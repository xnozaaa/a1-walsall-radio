'use client';

import { ArrowRight } from 'lucide-react';

const services = [
  "The Service",
  "The Car Service",
  "The Courier Service",
  "The Business Service",
  "The Events Service",
  "The App Experience",
  "The Premium Car",
  "The Airport Transfer",
  "The London Taxi",
];

const TickerAnimation = () => {
  const animationDuration = services.length * 2.5; // Adjust speed here
  const itemHeight = 80; // Corresponds to md:h-[80px]
  const yTranslate = services.length * itemHeight;

  return (
    <style>
      {`
        @keyframes ticker-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-${yTranslate}px); }
        }
        .animate-ticker-scroll {
          animation: ticker-scroll ${animationDuration}s linear infinite;
        }
      `}
    </style>
  );
};

const TextTicker = () => {
  return (
    <div className="relative h-[80px] overflow-hidden">
      <div className="animate-ticker-scroll absolute top-0 left-0">
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="flex h-[80px] items-center text-white"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroVideoSection = () => {
  return (
    <>
      <TickerAnimation />
      <section className="relative h-screen w-full bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://www.addisonlee.com/wp-content/uploads/2025/03/AL2025_030_Homepage_Video_CAR_B2B_DRAFT1-1.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0 flex h-full items-end px-4 pb-36 md:items-center md:px-0 md:py-24"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
          }}
        >
          <div className="container mx-auto w-full">
            <div className="mb-4 font-medium uppercase leading-none tracking-tight text-[40px] md:text-[72px]">
              <div className="hidden md:block">
                <TextTicker />
              </div>
              <p className="block text-white md:hidden">The Business Service</p>
              <p className="block text-primary md:ml-40">You Deserve</p>
            </div>
            <div className="md:pl-40">
              <p className="max-w-xl text-xl text-white !leading-tight">
                Book your car, courier, or London black taxi with Addison Lee,
                the trusted choice for airport transfers, city travel, and
                courier services across London.
              </p>
              <a
                href="https://book.addisonlee.com/al/booking/new/car"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[1.4px] text-primary-foreground transition-opacity hover:opacity-60 md:mt-12"
              >
                Get a quote
                <ArrowRight className="h-3 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroVideoSection;