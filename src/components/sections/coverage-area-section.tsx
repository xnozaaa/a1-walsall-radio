'use client';

import { MapPin, Check } from 'lucide-react';

const coverageAreas = [
  'Walsall',
  'Wolverhampton',
  'Birmingham',
  'Sandwell',
  'Dudley',
  'West Bromwich',
  'Wednesbury',
  'Darlaston',
  'Willenhall',
  'Bloxwich',
  'Aldridge',
  'Brownhills',
];

const CoverageAreaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">AREAS WE </span>
            <span className="text-primary">COVER</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Serving Walsall and surrounding West Midlands regions with reliable transport services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coverageAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20 hover:border-primary hover:shadow-md transition-all"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-foreground">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 md:p-8 bg-gradient-to-br from-charcoal to-black rounded-2xl text-center">
            <p className="text-white text-lg mb-4">
              <span className="font-semibold text-primary">Going further afield?</span> We also provide long-distance travel throughout the UK.
            </p>
            <p className="text-white/80">
              Contact us for airport transfers to Birmingham, Manchester, London, and all major UK airports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageAreaSection;