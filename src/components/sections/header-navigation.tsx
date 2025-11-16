'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, X } from 'lucide-react';

// Assuming Shadcn UI components are available at these paths
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

// Data for navigation links, derived from the provided HTML structure
const navLinks = [
  { href: 'https://book.addisonlee.com/al/sign-in', label: 'Sign In', size: 'large' },
  {
    label: 'Business Services',
    href: 'https://www.addisonlee.com/business/',
    size: 'large',
    submenu: [
      { href: '/business/apply', label: 'Open An Account' },
      { href: '/business', label: 'About Business Accounts' },
      { href: '/prism', label: 'Our Travel Management Tool' },
      { href: '/partnerships', label: 'Commercial Partnerships' },
    ],
  },
  {
    label: 'Passenger Services',
    href: '/car-services',
    size: 'large',
    submenu: [
        { href: '/services', label: 'All Services' },
        { href: '/car-services', label: 'A to B Transfers' },
        { href: '/airport-transfers', label: 'Airport Transfers' },
        { href: '/services/global', label: 'National/International' },
        { href: '/apps', label: 'Download the App' },
    ]
  },
  {
    label: 'Courier & Delivery',
    href: '/services/courier-services/',
    size: 'large',
    submenu: [
      { href: '/services/courier-services/', label: 'All Courier Services' },
      { href: '/services/courier-services/same-day', label: 'Same-Day Courier' },
      { href: '/services/courier-services/next-day', label: 'Next-Day Courier' },
      { href: '/services/courier-services/international', label: 'International Courier' },
    ]
  },
  {
    label: 'Events & Coaches',
    href: '/services',
    size: 'large',
    submenu: [
      { href: '/services/events', label: 'Events' },
      { href: '/services/coaches', label: 'Coaches' },
    ]
  },
  {
    label: 'Become A Driver',
    href: '/become-an-addisonlee-driver',
    size: 'large',
    submenu: [
      { href: '/become-an-addisonlee-driver/register', label: 'Drive With Us' },
      { href: '/become-an-addisonlee-driver', label: 'Become An Addison Lee Driver' },
      { href: '/do-you-already-own-a-car', label: 'Already Own A Car?' },
      { href: '/do-you-need-a-pco-licence', label: 'Do You Need A PCO Licence?' },
      { href: '/become-an-addisonlee-driver/courier-drivers', label: 'Courier Drivers' },
      { href: '/seru-support', label: 'SERU Support' },
    ]
  },
  {
    label: 'Contact Us',
    href: '/support',
    size: 'small',
    submenu: [
      { href: '/support', label: 'Support' },
      { href: '/support/faqs', label: 'FAQ' },
      { href: '/resources', label: 'Resources' },
    ]
  },
  {
    label: 'About Us',
    href: '/services/about',
    size: 'small',
    submenu: [
      { href: '/services/about', label: 'About Us' },
      { href: '/work-with-us', label: 'Careers' },
      { href: '/environmental-social-governance', label: 'ESG' },
      { href: '/addlib', label: 'Blog' },
    ]
  },
];

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white px-4 z-[10000] transition-colors duration-500 ease-[cubic-bezier(0.83,0,0.17,1)]">
      <div className="relative max-w-[1440px] mx-auto md:border-b md:border-white/64">
        <div className="h-16 md:h-[108px] flex justify-between items-center">
          {/* Desktop Left: Menu Button */}
          <div className="w-auto md:w-1/3 flex items-center">
             <a href="https://book.addisonlee.com/al/booking/new/car" className="btn-text bg-primary text-primary-foreground py-2 px-5 uppercase md:hidden">
              Book Now
            </a>

            <button
              id="main-menu-toggle"
              onClick={toggleMenu}
              className="group hidden md:flex items-center gap-2 outline-none hover:opacity-60 transition-opacity"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span className="block w-full h-0.5 bg-white origin-center transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]"></span>
                <span className="block w-full h-0.5 bg-white origin-center transition-opacity duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]"></span>
                <span className="block w-full h-0.5 bg-white origin-center transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]"></span>
              </div>
              <span className="text-sm font-medium tracking-[1.4px]">MENU</span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="w-auto md:w-1/3 flex justify-center absolute md:relative left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0">
            <a href="/" className="block md:w-36 mx-auto">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/addison-lee-logo-1.svg"
                alt="Addison Lee"
                width={144}
                height={26}
                className="hidden md:block"
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/addison-lee-mobile-2.svg"
                alt="Addison Lee"
                width={27}
                height={32}
                className="block md:hidden"
              />
            </a>
          </div>

           {/* Right: CTAs */}
          <div className="w-auto md:w-1/3 flex justify-end items-center">
            <button
              id="main-menu-toggle-mobile"
              onClick={toggleMenu}
              className="group flex-col items-center gap-2 outline-none hover:opacity-60 transition-opacity touch-manipulation md:hidden"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                 <span className={cn("block w-full h-0.5 bg-white origin-center transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]", isMenuOpen && "rotate-45 translate-y-[7px]")}></span>
                <span className={cn("block w-full h-0.5 bg-white origin-center transition-opacity duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]", isMenuOpen && "opacity-0")}></span>
                <span className={cn("block w-full h-0.5 bg-white origin-center transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]", isMenuOpen && "-rotate-45 -translate-y-[7px]")}></span>
              </div>
            </button>

            <div className="hidden md:flex justify-end items-center gap-8">
              <a href="https://book.addisonlee.com/al/sign-in" className="font-medium tracking-[1.6px] uppercase hover:text-primary transition-colors duration-300 text-sm">
                Sign In
              </a>
              <a href="https://book.addisonlee.com/al/booking/new/car" className="btn-text bg-primary text-primary-foreground py-3 px-6 uppercase">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-out Menu Panel */}
      <div
        id="main-menu-panel"
        className={cn(
          "absolute top-0 h-screen bg-black transition-all duration-700 ease-[cubic-bezier(0.83,0,0.17,1)] w-full md:max-w-[605px] overflow-hidden",
          isMenuOpen ? "left-0" : "-left-full md:-left-[605px]"
        )}
      >
        <div className="hidden md:flex justify-end px-20 pt-10">
          <button onClick={toggleMenu} className="cursor-pointer hover:opacity-60 transition-opacity" aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <div className="overflow-y-auto h-full pt-28 pb-10 md:pt-16">
          <div className="px-4 md:px-20">
            <Accordion type="multiple" className="w-full">
              {navLinks.map((item, index) =>
                item.submenu ? (
                  <AccordionItem value={`item-${index}`} key={item.label} className="border-b-0 mb-4 md:mb-6">
                    <div className="flex justify-between items-center group">
                      <a href={item.href} className={cn(
                        "font-medium uppercase group-hover:text-primary transition-colors duration-300",
                         item.size === 'large' ? 'text-xl md:text-2xl' : 'text-lg'
                       )}>
                        {item.label}
                      </a>
                      <AccordionTrigger className="p-0 [&[data-state=open]>svg]:rotate-180">
                        <ChevronDown className="h-10 w-10 text-white group-hover:text-primary transition-transform duration-300" />
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pt-6">
                      {item.submenu.map((subItem) => (
                        <a key={subItem.label} href={subItem.href} className="block text-muted-foreground hover:text-white mb-4 transition-colors duration-300 text-body-md">
                          {subItem.label}
                        </a>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <div key={item.label} className="mb-6 md:mb-8">
                    <a href={item.href} className={cn(
                        "font-medium uppercase hover:text-primary transition-colors duration-300",
                        item.size === 'large' ? 'text-xl md:text-2xl' : 'text-lg'
                      )}>
                      {item.label}
                    </a>
                  </div>
                )
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </header>
  );
}