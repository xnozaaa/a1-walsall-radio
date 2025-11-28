'use client';

import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const A1Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Business Contracts', href: '/contracts' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] border-b border-[#DDDDDD]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* Desktop/Tablet: Horizontal Logo */}
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Artboard-2-1763336832861.png"
              alt="A1 Walsall Radio Taxis Ltd - Est. 1986"
              width={280}
              height={80}
              className="hidden sm:block h-14 md:h-16 w-auto"
              priority
            />
            {/* Mobile: Vertical Logo */}
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Artboard-1-1763336832866.png"
              alt="A1 Walsall Radio Taxis Ltd - Est. 1986"
              width={120}
              height={140}
              className="block sm:hidden h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#F2A93B] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:01922644577"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2A93B] text-white font-semibold rounded-lg hover:bg-[#D68A1F] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call Us</span>
            </a>
            <a
              href="mailto:walsallradiocars@hotmail.co.uk"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#F2A93B] text-[#F2A93B] font-semibold rounded-lg hover:bg-[#F2A93B] hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden lg:inline">Email Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#F2A93B] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-[#DDDDDD]/20">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-[#F2A93B] font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-[#DDDDDD]/20">
              <a
                href="tel:01922644577"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#F2A93B] text-white font-semibold rounded-lg"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a
                href="mailto:walsallradiocars@hotmail.co.uk"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-[#F2A93B] text-[#F2A93B] font-semibold rounded-lg"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};