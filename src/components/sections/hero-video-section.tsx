'use client';

import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingFormDialog } from '@/components/booking-form-dialog';

const HeroVideoSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[700px] flex items-center justify-center bg-charcoal overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/321dc789-f6df-4a18-a342-76c745235fcf/generated_images/modern-black-taxi-vehicle-on-a-professio-b0cc994f-20251120154901.jpg"
          alt="A1 Walsall Radio Taxis"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-8 md:py-0 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
            <span className="text-primary font-semibold text-xs md:text-sm">40+ YEARS OF TRUSTED SERVICE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-white">RELIABLE TRANSPORT FOR</span>
            <br />
            <span className="text-primary">SCHOOLS, BUSINESSES & LOCAL FAMILIES</span>
            <br />
            <span className="text-white">SINCE 1986</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm md:text-xl text-white/90 mb-3 md:mb-4 max-w-3xl mx-auto leading-relaxed">
            Whether you need daily home-to-school transport, wheelchair-accessible travel, corporate staff transport, or airport transfers, A1 Walsall Radio Taxis Ltd delivers safe, punctual and professional journeys every time.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8 text-xs md:text-base">
            <div className="flex items-center gap-1.5 md:gap-2 text-white">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full" />
              <span>Wheelchair Accessible</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-white">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full" />
              <span>Home-to-School Transport</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-white">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full" />
              <span>Corporate Contracts</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-white">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full" />
              <span>Airport Transfers</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-[#D68A1F] text-white font-semibold text-sm md:text-base px-6 py-5 md:px-8 md:py-6 min-w-[180px] md:min-w-[200px]"
              asChild
            >
              <a href="tel:01922644577" className="flex items-center gap-2">
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
                CALL US NOW
              </a>
            </Button>
            <BookingFormDialog>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold text-sm md:text-base px-6 py-5 md:px-8 md:py-6 min-w-[180px] md:min-w-[200px] flex items-center gap-2"
              >
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
                BOOK ONLINE
              </Button>
            </BookingFormDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;