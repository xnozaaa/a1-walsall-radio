import HeaderNavigation from '@/components/sections/header-navigation';
import A1Footer from '@/components/sections/a1-footer';
import { School, Building2, Users, Tablet, Accessibility, Plane, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: School,
    title: 'Home-to-School Transport',
    description: 'Reliable daily pickups and drop-offs with safeguarding-trained drivers. Ideal for mainstream and SEN pupils.',
    benefits: [
      'DBS-checked, safeguarding-trained drivers',
      'Punctual daily service',
      'Suitable for mainstream and SEN pupils',
      'Door-to-door service',
      'Real-time tracking available',
      'Dedicated routes and schedules'
    ]
  },
  {
    icon: Building2,
    title: 'School Transport Contracts',
    description: 'Flexible, long-term solutions for councils and academies, managed with professionalism and consistency.',
    benefits: [
      'Long-term contract options',
      'Dedicated account management',
      'Flexible scheduling',
      'Council-approved service',
      'Comprehensive insurance',
      'Regular service reviews'
    ]
  },
  {
    icon: Users,
    title: 'Corporate Travel & Workplace Transport',
    description: 'Daily staff shuttles and on-demand journeys for businesses, warehouses, hospitals and industrial parks.',
    benefits: [
      'Fixed-rate corporate accounts',
      'Priority booking for business clients',
      'Invoice billing available',
      'Multi-passenger vehicles',
      'Flexible scheduling',
      '24/7 availability'
    ]
  },
  {
    icon: Tablet,
    title: 'On-Site Booking Tablets for Companies',
    description: 'We install dedicated booking tablets at your reception or staff entrance, allowing instant ride requests without phone calls.',
    benefits: [
      'Dedicated booking tablets',
      'Instant ride requests',
      'No phone calls needed',
      'Staff-only access',
      'Real-time vehicle tracking',
      'Seamless integration'
    ]
  },
  {
    icon: Accessibility,
    title: 'Wheelchair-Accessible Transport',
    description: 'Vehicles equipped with ramps/lifts and secure wheelchair anchoring. Drivers trained for mobility support.',
    benefits: [
      'Wheelchair ramps and lifts',
      'Secure wheelchair anchoring',
      'Trained mobility support drivers',
      'Door-through-door assistance',
      'Spacious accessible vehicles',
      'Medical appointment transport'
    ]
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Dependable 24/7 transfers to all major UK airports with fixed, transparent pricing.',
    benefits: [
      'Fixed, transparent pricing',
      'All major UK airports covered',
      '24/7 availability',
      'Flight tracking service',
      'Meet & greet option',
      'Luggage assistance included'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <HeaderNavigation />
      
      <main className="pt-16 md:pt-[108px]">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">OUR </span>
                <span className="text-primary">SERVICES</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive transport solutions tailored to schools, businesses, and individual passengers across Walsall and the West Midlands
              </p>
            </div>
          </div>
        </section>

        {/* Services Detailed */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-primary hover:bg-[#D68A1F] text-white" asChild>
                          <a href="tel:01922644577" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            Call to Book
                          </a>
                        </Button>
                        <Button variant="outline" className="border-2" asChild>
                          <Link href="/contact" className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Email Us
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20">
                        <h3 className="font-bold text-lg mb-4 text-primary">Key Benefits:</h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                              <span className="text-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">READY TO </span>
                <span className="text-primary">BOOK?</span>
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Contact us today to discuss your transport requirements and get a quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-[#D68A1F] text-white font-semibold" asChild>
                  <a href="tel:01922644577" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    CALL US NOW
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    EMAIL US
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <A1Footer />
    </div>
  );
}