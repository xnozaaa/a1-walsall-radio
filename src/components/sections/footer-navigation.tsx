import React from 'react';

const footerLinkData = [
  {
    title: 'Company',
    links: [
      { name: 'Get a quote', href: '#' },
      { name: 'Drive with us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'About us', href: '#' },
      { name: 'Accreditations', href: '#' },
      { name: 'Sign Up', href: '#' },
      { name: 'Download App', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Support', href: '#' },
      { name: 'Contact us', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'School Transport', href: '#' },
      { name: 'Corporate Travel', href: '#' },
      { name: 'Airport Transfers', href: '#' },
      { name: 'Wheelchair Accessible', href: '#' },
    ],
  },
  {
    title: 'Legal Terms',
    links: [
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
];

const FooterNavigation = () => {
  return (
    <footer className="bg-black">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 lg:gap-x-16">
          {footerLinkData.map((section) => (
            <div key={section.title}>
              <p className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
                {section.title}
              </p>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[#B3B3B3] hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-white/20 pt-8 text-center">
          <p className="text-xs text-[#B3B3B3]">
            © 2025 A1 Walsall Radio Taxis Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavigation;