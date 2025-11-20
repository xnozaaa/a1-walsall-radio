"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinkColumns = [
  {
    title: "Company",
    links: [
      { text: "Get a quote", href: "#" },
      { text: "Drive with us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Blog", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { text: "About us", href: "/about" },
      { text: "Accreditations", href: "#" },
      { text: "Sign Up", href: "#" },
      { text: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Support", href: "/contact" },
      { text: "Contact us", href: "/contact" },
      { text: "FAQs", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { text: 'School Transport', href: '/services' },
      { text: 'Corporate Travel', href: '/services' },
      { text: 'Airport Transfers', href: '/services' },
      { text: 'Wheelchair Accessible', href: '/services' },
    ],
  },
  {
    title: "Legal Terms",
    links: [
      { text: "Terms & Conditions", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Cookie Policy", href: "#" },
    ],
  },
];

const paymentMethods = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/mastercard_logo-9.svg", alt: "Mastercard" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/VISA_logo-10.svg", alt: "Visa" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/PayPal_logo-11.svg", alt: "PayPal" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/Googlepay-12.svg", alt: "Google Pay" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/ApplePay_logo-13.svg", alt: "Apple Pay" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/BLUEAmerican_Express_logo-14.svg", alt: "American Express" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/amazonpay-15.svg", alt: "Amazon Pay" },
];

const socialLinks = [
  { Icon: Facebook, href: "#", name: "Facebook" },
  { Icon: Twitter, href: "#", name: "Twitter" },
  { Icon: Instagram, href: "#", name: "Instagram" },
  { Icon: Linkedin, href: "#", name: "LinkedIn" },
];

const FooterNewsletterSignup = () => {
  const renderLink = (link: { text: string; href: string }) => {
    const isExternal = link.href.startsWith("http");
    const commonClasses = "text-sm text-muted-foreground transition-colors hover:text-primary";
    
    if (isExternal) {
      return (
        <a href={link.href} className={commonClasses} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      );
    }
    
    return (
      <Link href={link.href} className={commonClasses}>
        {link.text}
      </Link>
    );
  };

  return (
    <footer id="colophon" className="bg-background text-foreground">
      <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-20 md:py-28">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="mb-6 text-sm text-muted-foreground">
              By providing us with your email address, we will keep you up to date
              with our latest news and offers.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); }}>
              <input
                type="text"
                placeholder="First Name"
                className="h-14 rounded-none border border-border bg-transparent px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="h-14 rounded-none border border-border bg-transparent px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="btn-text flex h-14 w-full items-center justify-center rounded-none border border-foreground bg-transparent transition-opacity hover:opacity-60"
              >
                SIGN UP
              </button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              *Your personal data will be collected and handled in accordance with our Privacy Policy.
              <br />
              *You can unsubscribe from marketing emails from us at any time.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-4">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:gap-10 lg:grid-cols-5">
              {footerLinkColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="btn-text mb-4 text-foreground">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.text}>{renderLink(link)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-12">
            <div className="mb-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                {paymentMethods.map((method) => (
                    <img key={method.alt} src={method.src} alt={method.alt} className="h-10 w-auto" />
                ))}
            </div>
            
            <div className="flex flex-col-reverse items-center justify-between gap-y-8 text-center md:flex-row md:text-left">
                <p className="text-sm text-muted-foreground">
                    © 2025 A1 Walsall Radio Taxis Ltd. All rights reserved.
                </p>
                <div className="flex items-center gap-x-6">
                    {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.name}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <social.Icon className="h-6 w-6" />
                    </a>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNewsletterSignup;