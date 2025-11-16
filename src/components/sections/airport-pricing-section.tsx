'use client';

import { Plane, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const airportPrices = [
  {
    airport: 'Birmingham Airport',
    distance: '17 miles',
    estimatedPrice: '£25-35'
  },
  {
    airport: 'East Midlands Airport',
    distance: '40 miles',
    estimatedPrice: '£55-70'
  },
  {
    airport: 'Manchester Airport',
    distance: '70 miles',
    estimatedPrice: '£85-100'
  },
  {
    airport: 'Liverpool John Lennon Airport',
    distance: '80 miles',
    estimatedPrice: '£110-130'
  },
  {
    airport: 'Leeds Bradford Airport',
    distance: '116 miles',
    estimatedPrice: '£120-140'
  },
  {
    airport: 'Bristol Airport',
    distance: '102 miles',
    estimatedPrice: '£140-170'
  },
  {
    airport: 'Heathrow Airport',
    distance: '117 miles',
    estimatedPrice: '£150-180'
  },
  {
    airport: 'Luton Airport',
    distance: '94 miles',
    estimatedPrice: '£140-165'
  },
  {
    airport: 'Stansted Airport',
    distance: '125 miles',
    estimatedPrice: '£160-190'
  },
  {
    airport: 'Gatwick Airport',
    distance: '149 miles',
    estimatedPrice: '£180-220'
  },
  {
    airport: 'London City Airport',
    distance: '131 miles',
    estimatedPrice: '£165-200'
  },
  {
    airport: 'Newcastle Airport',
    distance: '195 miles',
    estimatedPrice: '£220-260'
  },
  {
    airport: 'Southampton Airport',
    distance: '141 miles',
    estimatedPrice: '£190-230'
  },
  {
    airport: 'Doncaster Sheffield Airport',
    distance: '86 miles',
    estimatedPrice: '£95-115'
  }
];

export const AirportPricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Plane className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Airport Transfer <span className="text-primary">Estimated Prices</span>
          </h2>
          <p className="text-lg text-[#DDDDDD]">
            Fixed, transparent pricing to all major English airports. No hidden charges. 
            100% on-time guarantee.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {airportPrices.map((airport, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border-2 border-[#DDDDDD]/20 rounded-xl p-6 hover:border-primary hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {airport.airport}
                </h3>
                <Plane className="h-5 w-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#DDDDDD]">Distance from Walsall:</span>
                  <span className="text-sm font-semibold text-white">{airport.distance}</span>
                </div>
                <div className="pt-3 border-t border-[#DDDDDD]/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#DDDDDD]">Estimated Price:</span>
                    <span className="text-2xl font-bold text-primary">{airport.estimatedPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 md:p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-primary">✓</span> Price Guarantee
          </h3>
          <ul className="space-y-2 text-[#DDDDDD]">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Prices are estimates based on standard routes and may vary depending on pickup location within Walsall area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Fixed pricing confirmed when you book - no surge pricing, ever</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>24/7 availability for all airport transfers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Meet & greet service available for airport pickups</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Flight monitoring included - we track your flight for delays</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>All vehicles regularly serviced and fully insured</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white text-lg mb-6">
            Need an exact quote? Contact us today for a personalized price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-[#D68A1F] text-white font-semibold"
              asChild
            >
              <a href="tel:01922123456" className="flex items-center gap-2">
                Call For Quote
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] font-semibold"
              asChild
            >
              <a href="mailto:info@a1walsall.co.uk" className="flex items-center gap-2">
                Email For Quote
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};