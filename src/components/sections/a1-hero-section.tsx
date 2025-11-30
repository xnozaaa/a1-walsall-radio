'use client';

import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export const A1HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#FFCC66]/10 to-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-block px-4 py-2 bg-[#F2A93B]/10 rounded-full border border-[#F2A93B]/20">
              <p className="text-sm font-semibold text-[#D68A1F]">
                Est. 1986 • Nearly 40 Years of Trusted Service
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Reliable Transport for{' '}
              <span className="text-[#F2A93B]">Schools, Businesses & Local Passengers</span>{' '}
              Since 1986
            </h1>
            
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed font-medium">
              Wheelchair Accessible • Home-to-School Transport • Corporate Contracts • Airport Transfers
            </p>
            
            <p className="text-base md:text-lg text-[#555555] leading-relaxed">
              Whether you need daily home-to-school transport, wheelchair-accessible travel, corporate staff transport, or airport transfers, A1 Walsall Radio Taxis Ltd delivers safe, punctual and professional journeys every time.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-3 text-sm md:text-base text-[#555555]">
                <div className="flex items-center gap-2">
                  <span className="text-[#F2A93B] text-lg">✔</span>
                  <span>DBS-Checked, Safeguarding-Trained Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F2A93B] text-lg">✔</span>
                  <span>Wheelchair Accessible Vehicles Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F2A93B] text-lg">✔</span>
                  <span>Local Authority, School & Corporate Contracts</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:01922644577"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F2A93B] text-white font-semibold text-base rounded-lg hover:bg-[#D68A1F] transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
              <a
                href="mailto:walsallradiocars@hotmail.co.uk"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#F2A93B] text-[#F2A93B] font-semibold text-base rounded-lg hover:bg-[#F2A93B] hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#DDDDDD]">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#F2A93B]">Nearly 40</p>
                <p className="text-xs md:text-sm text-[#555555] mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#F2A93B]">24-hour</p>
                <p className="text-xs md:text-sm text-[#555555] mt-1">Service</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#F2A93B]">100%</p>
                <p className="text-xs md:text-sm text-[#555555] mt-1">DBS Checked</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#F2A93B]">
                  <svg className="inline-block h-8 w-8 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z"/>
                  </svg>
                </p>
                <p className="text-xs md:text-sm text-[#555555] mt-1">Council Approved</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/321dc789-f6df-4a18-a342-76c745235fcf/generated_images/modern-white-wheelchair-accessible-van-w-21b0dc13-20251116133721.jpg"
                alt="A1 Walsall Radio Taxis - Modern Wheelchair Accessible Vehicle"
                fill
                className="object-cover"
                priority
              />
              {/* Warm glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F2A93B]/10 to-transparent pointer-events-none" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-4 border-[#F2A93B]">
              <p className="text-sm font-semibold text-[#555555]">Trusted by</p>
              <p className="text-xl md:text-2xl font-bold text-[#F2A93B]">Schools & Councils</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};