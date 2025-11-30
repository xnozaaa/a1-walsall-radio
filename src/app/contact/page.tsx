import HeaderNavigation from '@/components/sections/header-navigation';
import A1Footer from '@/components/sections/a1-footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingFormDialog } from '@/components/booking-form-dialog';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <HeaderNavigation />
      
      <main className="pt-16 md:pt-[108px]">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">GET IN </span>
                <span className="text-primary">TOUCH</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We're here to help with all your transport needs. Contact us today for bookings, quotes, or general inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Phone Contact */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-6">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Call Us</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Speak to our friendly team for immediate assistance, bookings, or quotes.
                  </p>
                  <a href="tel:01922644577" className="text-3xl font-bold text-primary hover:text-[#D68A1F] transition-colors block mb-4">
                    01922 644577
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Lines open 24 hours for bookings and emergencies
                  </p>
                  <Button className="mt-6 bg-primary hover:bg-[#D68A1F] text-white w-full" asChild>
                    <a href="tel:01922644577" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      CALL NOW
                    </a>
                  </Button>
                </div>

                {/* Email Contact */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Email Us</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Send us an email for quotes, contract inquiries, or general questions.
                  </p>
                  <a href="mailto:walsallradiocars@hotmail.co.uk" className="text-2xl font-bold text-primary hover:text-[#D68A1F] transition-colors block mb-4 break-all">
                    walsallradiocars@hotmail.co.uk
                  </a>
                  <p className="text-sm text-muted-foreground">
                    We aim to respond within 2 hours during business hours
                  </p>
                  <BookingFormDialog>
                    <Button className="mt-6 bg-primary hover:bg-[#D68A1F] text-white w-full">
                      <Mail className="h-5 w-5 mr-2" />
                      SEND EMAIL
                    </Button>
                  </BookingFormDialog>
                </div>
              </div>

              {/* Operating Hours & Location */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Operating Hours */}
                <div className="bg-white border-2 border-border rounded-xl p-8 hover:border-primary transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Operating Hours</h3>
                      <p className="text-muted-foreground">We're here when you need us</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-semibold">Bookings & Dispatch</span>
                      <span className="text-primary font-bold">24-hour service</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-semibold">Office Hours</span>
                      <span className="text-primary font-bold">24-hour service</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-semibold">Weekend Office</span>
                      <span className="text-primary font-bold">24-hour service</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-semibold">Emergency Service</span>
                      <span className="text-primary font-bold">24-hour service</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white border-2 border-border rounded-xl p-8 hover:border-primary transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                      <p className="text-muted-foreground">Serving Walsall and the West Midlands</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Head Office:</p>
                      <p className="text-muted-foreground leading-relaxed">
                        A1 Walsall Radio Taxis Ltd<br />
                        165 Stafford St<br />
                        Walsall WS2 8EA<br />
                        West Midlands<br />
                        United Kingdom
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold mb-2">Service Area:</p>
                      <p className="text-muted-foreground">
                        Walsall, Wolverhampton, Birmingham, Sandwell, Dudley, and surrounding West Midlands regions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-white">NEED IMMEDIATE </span>
                  <span className="text-primary">ASSISTANCE?</span>
                </h2>
                <p className="text-lg text-white/80">
                  Our team is standing by to help with your transport needs
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">Call</h3>
                  <p className="text-white/70 text-sm mb-3">For immediate bookings</p>
                  <a href="tel:01922644577" className="text-primary hover:text-accent transition-colors font-semibold">
                    01922 644577
                  </a>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">Email</h3>
                  <p className="text-white/70 text-sm mb-3">For quotes & inquiries</p>
                  <a href="mailto:walsallradiocars@hotmail.co.uk" className="text-primary hover:text-accent transition-colors font-semibold text-sm break-all">
                    walsallradiocars@hotmail.co.uk
                  </a>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">Available</h3>
                  <p className="text-white/70 text-sm mb-3">Round the clock service</p>
                  <span className="text-primary font-semibold">24-hour service</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <A1Footer />
    </div>
  );
}