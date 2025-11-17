'use client';

import { School, Accessibility, Plane, Building2, Tablet, Users } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: School,
    title: 'Home-to-School Transport',
    description: 'Reliable daily pickups and drop-offs with safeguarding-trained drivers. Ideal for mainstream and SEN pupils.',
    color: 'text-primary'
  },
  {
    icon: Building2,
    title: 'School Transport Contracts',
    description: 'Flexible, long-term solutions for councils and academies, managed with professionalism and consistency.',
    color: 'text-primary'
  },
  {
    icon: Users,
    title: 'Corporate Travel & Workplace Transport',
    description: 'Daily staff shuttles and on-demand journeys for businesses, warehouses, hospitals and industrial parks.',
    color: 'text-primary'
  },
  {
    icon: Tablet,
    title: 'On-Site Booking Tablets for Companies',
    description: 'We install dedicated booking tablets at your reception or staff entrance, allowing instant ride requests without phone calls.',
    color: 'text-primary'
  },
  {
    icon: Accessibility,
    title: 'Wheelchair-Accessible Transport',
    description: 'Vehicles equipped with ramps/lifts and secure wheelchair anchoring. Drivers trained for mobility support.',
    color: 'text-primary'
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Dependable 24/7 transfers to all major UK airports with fixed, transparent pricing.',
    color: 'text-primary'
  }
];

const A1ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Core Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive transport solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white border-2 border-border rounded-xl hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className={`h-8 w-8 ${service.color} group-hover:text-white transition-colors`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-[#D68A1F] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 md:mt-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Choose <span className="text-primary">A1 Walsall?</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <p className="font-semibold text-foreground">40+ years in local transport</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <p className="font-semibold text-foreground">Fully licensed and council approved</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <p className="font-semibold text-foreground">Modern, clean vehicles</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <p className="font-semibold text-foreground">Strong reputation for punctuality</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <p className="font-semibold text-foreground">Trusted by schools, companies & families</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <p className="font-semibold text-foreground">Always available — 24/7 support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default A1ServicesSection;