'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-[108px]">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/321dc789-f6df-4a18-a342-76c745235fcf/visual-edit-uploads/1763338228746-rnkd5503p5.png"
                alt="A1 Walsall Radio Taxis Ltd"
                width={320}
                height={90}
                className="h-12 md:h-16 lg:h-20 w-auto"
                priority />

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-primary transition-colors font-medium">
                About Us
              </Link>
              <Link href="/services" className="text-white hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link href="/fleet" className="text-white hover:text-primary transition-colors font-medium">
                Fleet
              </Link>
              <Link href="/business" className="text-white hover:text-primary transition-colors font-medium">
                Business Contracts
              </Link>
              <Link href="/contact" className="text-white hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal"
                asChild>

                <a href="tel:01922644577" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  CALL
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-[#D68A1F] text-white"
                asChild>

                <a href="mailto:walsallradiocars@hotmail.co.uk" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  EMAIL
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu">

              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {isMenuOpen &&
      <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/80" onClick={toggleMenu} />
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-charcoal overflow-y-auto">
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
              <Link
              href="/"
              className="text-xl text-white hover:text-primary transition-colors font-semibold"
              onClick={toggleMenu}>

                Home
              </Link>
              <Link
              href="/about"
              className="text-xl text-white hover:text-primary transition-colors font-semibold"
              onClick={toggleMenu}>

                About Us
              </Link>
              <Link
              href="/services"
              className="text-xl text-white hover:text-primary transition-colors font-semibold"
              onClick={toggleMenu}>

                Services
              </Link>
              <Link
              href="/fleet"
              className="text-xl text-white hover:text-primary transition-colors font-semibold"
              onClick={toggleMenu}>

                Fleet
              </Link>
              <Link
              href="/business"
              className="text-xl text-white hover:text-primary transition-colors font-semibold"
              onClick={toggleMenu}>

                Business Contracts
              </Link>
              <Link
              href="/contact"
              className="text-xl text-white hover:text-primary transition-colors font-semibold"
              onClick={toggleMenu}>

                Contact
              </Link>

              <div className="mt-8 flex flex-col gap-4">
                <Button
                size="lg"
                className="bg-primary hover:bg-[#D68A1F] text-white font-semibold w-full"
                asChild>

                  <a href="tel:01922644577" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    CALL US NOW
                  </a>
                </Button>
                <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold w-full"
                asChild>

                  <a href="mailto:walsallradiocars@hotmail.co.uk" className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    EMAIL US
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      }
    </>);

};

export default HeaderNavigation;