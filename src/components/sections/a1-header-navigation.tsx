'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const A1HeaderNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Business Contracts', href: '/business-contracts' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/321dc789-f6df-4a18-a342-76c745235fcf/generated_images/professional-logo-for-a1-walsall-radio-t-9a501cfb-20251116133719.jpg"
                alt="A1 Walsall Radio Taxis Ltd"
                width={180}
                height={60}
                className="h-12 md:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:01922123456"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-[#D68A1F] transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a
                href="mailto:info@a1walsalltaxis.co.uk"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold text-sm rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-border shadow-lg">
            <nav className="container mx-auto py-6 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-base font-semibold text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:01922123456"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-white font-semibold text-sm rounded-lg"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
                <a
                  href="mailto:info@a1walsalltaxis.co.uk"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary text-primary font-semibold text-sm rounded-lg"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export const A1HeaderNavigation = A1HeaderNavigation;
