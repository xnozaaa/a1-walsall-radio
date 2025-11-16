'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Parent - Walsall Academy',
    rating: 5,
    text: 'A1 Walsall has been transporting my daughter to school for two years now. The drivers are always punctual, friendly, and professional. I have complete peace of mind knowing she\'s in safe hands.',
  },
  {
    name: 'David Martinez',
    role: 'Operations Manager - TechCorp Ltd',
    rating: 5,
    text: 'We\'ve been using A1 Walsall for our corporate staff transport for over three years. Their reliability and professionalism are outstanding. The on-site booking tablet has made arranging transport effortless for our team.',
  },
  {
    name: 'Margaret Williams',
    role: 'Wheelchair User',
    rating: 5,
    text: 'I rely on A1 Walsall for all my medical appointments and shopping trips. The wheelchair-accessible vehicles are spotless, and the drivers are incredibly patient and helpful. A truly caring service.',
  },
  {
    name: 'James Parker',
    role: 'Business Traveller',
    rating: 5,
    text: 'I use A1 Walsall for all my airport transfers. They\'ve never let me down - always on time, competitive pricing, and professional drivers. Highly recommend for business travel.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">WHAT OUR </span>
            <span className="text-primary">CUSTOMERS SAY</span>
          </h2>
          <p className="text-lg text-white/80">
            Trusted by families, schools, and businesses across Walsall and the West Midlands
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-white/90 text-center mb-8 leading-relaxed italic">
                "{currentTestimonial.text}"
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="text-lg font-semibold text-white">
                  {currentTestimonial.name}
                </p>
                <p className="text-primary">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;