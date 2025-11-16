'use client';

import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const A1HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#FFCC66]/20 to-white py-20 md:py-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">
                ✔ 40+ Years of Trusted Service
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Reliable Transport for{' '}
              <span className="text-primary">Schools, Businesses & Local Passengers</span>{' '}
              Since 1988
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Wheelchair Accessible • Home-to-School Transport • Corporate Contracts • Airport Transfers
            </p>
            
            <p className="text-base text-muted-foreground">
              Whether you need daily home-to-school transport, wheelchair-accessible travel, corporate staff transport, or airport transfers, A1 Walsall Radio Taxis Ltd delivers safe, punctual and professional journeys every time.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:01922123456"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold text-base rounded-lg hover:bg-[#D68A1F] transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
              <a
                href="mailto:info@a1walsalltaxis.co.uk"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold text-base rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">40+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">DBS</p>
                <p className="text-xs md:text-sm text-muted-foreground">Checked Drivers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">24/7</p>
                <p className="text-xs md:text-sm text-muted-foreground">Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">100%</p>
                <p className="text-xs md:text-sm text-muted-foreground">Wheelchair Accessible</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/321dc789-f6df-4a18-a342-76c745235fcf/generated_images/modern-white-wheelchair-accessible-van-w-21b0dc13-20251116133721.jpg"
                alt="A1 Walsall Radio Taxis - Modern Wheelchair Accessible Vehicle"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-4 border-primary">
              <p className="text-sm font-semibold text-muted-foreground">Trusted by</p>
              <p className="text-2xl font-bold text-primary">Schools & Councils</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const A1HeroSection = A1HeroSection;
