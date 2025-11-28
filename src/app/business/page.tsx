import HeaderNavigation from '@/components/sections/header-navigation';
import A1Footer from '@/components/sections/a1-footer';
import { Building2, Tablet, Users, Clock, FileText, Headphones, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BusinessPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <HeaderNavigation />
      
      <main className="pt-16 md:pt-[108px]">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6">
                <span className="text-primary font-semibold text-sm">CORPORATE SOLUTIONS</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">BUSINESS & COUNCIL </span>
                <span className="text-primary">CONTRACTS</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Tailored transport solutions for businesses, councils, schools, and organizations across the West Midlands
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">PARTNERSHIP </span>
                <span className="text-primary">BENEFITS</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join hundreds of organizations who trust A1 Walsall for their transport needs
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white border-2 border-border rounded-xl hover:border-primary hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fixed-Rate Contracts</h3>
                <p className="text-muted-foreground">
                  Predictable monthly costs with no surge pricing. Budget with confidence.
                </p>
              </div>

              <div className="p-6 bg-white border-2 border-border rounded-xl hover:border-primary hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Priority Booking</h3>
                <p className="text-muted-foreground">
                  Your bookings take priority during peak times. Guaranteed availability.
                </p>
              </div>

              <div className="p-6 bg-white border-2 border-border rounded-xl hover:border-primary hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Dedicated Account Manager</h3>
                <p className="text-muted-foreground">
                  Personal point of contact who understands your organization's needs.
                </p>
              </div>

              <div className="p-6 bg-white border-2 border-border rounded-xl hover:border-primary hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Monthly Invoicing</h3>
                <p className="text-muted-foreground">
                  Simple consolidated invoicing. Detailed reports for expenses and reconciliation.
                </p>
              </div>

              <div className="p-6 bg-white border-2 border-border rounded-xl hover:border-primary hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Minibus Options</h3>
                <p className="text-muted-foreground">
                  Modern minibuses for group transport. Wheelchair accessible vehicles available.
                </p>
              </div>

              <div className="p-6 bg-white border-2 border-border rounded-xl hover:border-primary hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  Round-the-clock service for shift work, emergencies, and urgent requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* On-Site Booking Tablets */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-lg mb-6">
                    <Tablet className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-foreground">ON-SITE </span>
                    <span className="text-primary">BOOKING TABLETS</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    For large organizations, we can install dedicated booking tablets at your reception or staff entrance. This innovative solution allows your employees to request transport instantly without making phone calls.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">One-touch booking system for instant ride requests</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">Real-time vehicle tracking and ETA updates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">Staff-only access with secure authentication</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">Automatic expense tracking and reporting</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-primary/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Perfect For:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                      <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Large Corporate Offices</p>
                        <p className="text-sm text-muted-foreground">100+ employees</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                      <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Hospitals & Healthcare</p>
                        <p className="text-sm text-muted-foreground">Staff transport solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                      <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Industrial Parks</p>
                        <p className="text-sm text-muted-foreground">Shift worker transport</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                      <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Distribution Centers</p>
                        <p className="text-sm text-muted-foreground">24/7 operations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">WHO WE </span>
                <span className="text-primary">WORK WITH</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted by a diverse range of organizations across the West Midlands
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Local Authorities</h3>
                <p className="text-sm text-muted-foreground">Council transport contracts</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Schools & Academies</h3>
                <p className="text-sm text-muted-foreground">Home-to-school transport</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Corporate Businesses</h3>
                <p className="text-sm text-muted-foreground">Staff & client transport</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Healthcare Facilities</h3>
                <p className="text-sm text-muted-foreground">Patient & staff transport</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">READY TO </span>
                <span className="text-primary">PARTNER WITH US?</span>
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Contact our business development team to discuss your organization's transport requirements and receive a tailored quote.
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