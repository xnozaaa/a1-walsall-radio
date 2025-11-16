import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-background text-foreground py-12 md:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-medium uppercase mb-8 -tracking-[0.02em] leading-[1.1]">
              <span>About </span>
              <span className="text-primary">Addison Lee</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-base leading-[1.6]">
              <p>
                Addison Lee is London’s leading private hire and premium transport provider, trusted for reliable courier services, airport transfers, executive cars and luxury chauffeur services.
              </p>
              <p>
                With over 50 years’ experience, we offer seamless London travel for business and personal needs. From same-day couriers to airport taxis serving Heathrow, Gatwick, Stansted, Luton and London City, we guarantee on-time, stress-free journeys.
              </p>
              <p>
                Our fleet of executive cars, chauffeur-driven vehicles and black taxis deliver comfort and style across the capital. Corporate clients benefit from Addison Lee business accounts with centralised booking, expense tracking and priority service.
              </p>
              <p>
                For London airport transfers and private hire cars, choose Addison Lee for reliability, comfort and exceptional service.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-full flex items-center md:order-first">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/about-AL-16.jpg"
              alt="View from inside an Addison Lee vehicle, looking at another branded van through the windshield"
              width={1200}
              height={1200}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;