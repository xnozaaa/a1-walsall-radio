import HeaderNavigation from '@/components/sections/header-navigation';
import HeroVideoSection from '@/components/sections/hero-video-section';
import A1ServicesSection from '@/components/sections/a1-services-section';
import { AirportPricingSection } from '@/components/sections/airport-pricing-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import CoverageAreaSection from '@/components/sections/coverage-area-section';
import A1Footer from '@/components/sections/a1-footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <HeaderNavigation />
      
      <main className="pt-16 md:pt-[108px]">
        <HeroVideoSection />
        
        <A1ServicesSection />
        
        <AirportPricingSection />
        
        <TestimonialsSection />
        
        <CoverageAreaSection />
      </main>
      
      <A1Footer />
    </div>
  );
}