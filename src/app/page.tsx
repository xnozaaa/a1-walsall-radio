import HeaderNavigation from '@/components/sections/header-navigation';
import HeroVideoSection from '@/components/sections/hero-video-section';
import ServicesCarousel from '@/components/sections/services-carousel';
import AirportTransferSection from '@/components/sections/airport-transfer-section';
import BusinessAccountsSection from '@/components/sections/business-accounts-section';
import DriverRecruitmentSection from '@/components/sections/driver-recruitment-section';
import FeaturesGridSection from '@/components/sections/features-grid-section';
import RotatingFeaturesCarousel from '@/components/sections/rotating-features-carousel';
import AppDownloadSection from '@/components/sections/app-download-section';
import AboutSection from '@/components/sections/about-section';
import FooterNewsletterSignup from '@/components/sections/footer-newsletter-signup';
import CookieConsentBanner from '@/components/sections/cookie-consent-banner';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <HeaderNavigation />
      
      <main className="pt-16 md:pt-[108px]">
        <HeroVideoSection />
        
        <ServicesCarousel />
        
        <AirportTransferSection />
        
        <BusinessAccountsSection />
        
        <DriverRecruitmentSection />
        
        <FeaturesGridSection />
        
        <RotatingFeaturesCarousel />
        
        <AppDownloadSection />
        
        <AboutSection />
      </main>
      
      <FooterNewsletterSignup />
      
      <CookieConsentBanner />
    </div>
  );
}