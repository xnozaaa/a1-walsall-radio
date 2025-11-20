'use client';

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const A1Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">A1</span>
              <span className="text-white"> WALSALL</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Reliable transport for schools, businesses & local families since 1988. Serving Walsall and the West Midlands with professional, safe, and punctual service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-white/70 hover:text-primary transition-colors">
                  Fleet
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-white/70 hover:text-primary transition-colors">
                  Business Contracts
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-white/70">Home-to-School Transport</li>
              <li className="text-white/70">School Contracts</li>
              <li className="text-white/70">Corporate Transport</li>
              <li className="text-white/70">Wheelchair Accessible</li>
              <li className="text-white/70">Airport Transfers</li>
              <li className="text-white/70">Local & Long-Distance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:01922644577"
                  className="flex items-start gap-3 text-white/70 hover:text-primary transition-colors group"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 group-hover:text-primary" />
                  <span>01922 644577</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:walsallradiocars@hotmail.co.uk"
                  className="flex items-start gap-3 text-white/70 hover:text-primary transition-colors group"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 group-hover:text-primary" />
                  <span>walsallradiocars@hotmail.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Walsall, West Midlands<br />United Kingdom</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-white/50 mb-2">Operating Hours:</p>
              <p className="text-white/70">24/7 Service Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} A1 Walsall Radio Taxis Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-white/50 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookies" className="text-white/50 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default A1Footer;