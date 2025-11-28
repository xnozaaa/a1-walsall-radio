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
              <span className="text-primary">A1 Walsall</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-base leading-[1.6]">
              <p>
                A1 Walsall Radio Taxis Ltd is Walsall's trusted private hire and transport provider, delivering reliable services for schools, businesses and local passengers.
              </p>
              <p>
                With nearly 40 years' experience since 1986, we offer seamless transportation for all your needs. From daily home-to-school runs to wheelchair-accessible vehicles, corporate staff transport and airport transfers to Birmingham and beyond.
              </p>
              <p>
                Our well-maintained minibuses and DBS-checked, safeguarding-trained drivers deliver comfort, safety and punctuality across Walsall and the West Midlands. Schools and corporate clients benefit from dedicated contracts with reliable scheduling and priority service.
              </p>
              <p>
                For professional transport services in Walsall, choose A1 Walsall Radio Taxis Ltd for reliability, safety and exceptional local service.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-full flex items-center md:order-first">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/about-AL-16.jpg"
              alt="View from inside an A1 Walsall vehicle"
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