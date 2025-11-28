import HeaderNavigation from '@/components/sections/header-navigation';
import A1Footer from '@/components/sections/a1-footer';
import { Shield, Award, Users, Clock, Heart, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <HeaderNavigation />
      
      <main className="pt-16 md:pt-[108px]">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6">
                <span className="text-primary font-semibold text-sm">ESTABLISHED 1986</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">ABOUT </span>
                <span className="text-primary">A1 WALSALL</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Nearly 40 years of trusted transport services for schools, businesses, and families across Walsall and the West Midlands
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-foreground">Our </span>
                    <span className="text-primary">Story</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Since 1986, A1 Walsall Radio Taxis Ltd has been providing reliable, professional transport services to the local community. What started as a family-run taxi service has grown into one of the most trusted transport providers in the West Midlands.
                    </p>
                    <p>
                      Over nearly four decades, we've built our reputation on punctuality, safety, and exceptional customer service. We understand that reliable transport is essential for schools, businesses, and families alike.
                    </p>
                    <p>
                      Today, we operate a modern selection of minibuses, including wheelchair-accessible transport, and employ a team of professional, DBS-checked, safeguarding-trained drivers who are committed to delivering the highest standards of service.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Nearly 40 Years</h3>
                        <p className="text-muted-foreground">Of trusted service in the community</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Family Run</h3>
                        <p className="text-muted-foreground">Local business serving local people</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Council Approved</h3>
                        <p className="text-muted-foreground">Fully licensed and accredited</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-white">OUR </span>
                <span className="text-primary">VALUES</span>
              </h2>
              <p className="text-lg text-white/80">
                The principles that guide everything we do
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Safety</h3>
                <p className="text-white/70">
                  Your safety is our top priority. All drivers are DBS-checked and fully trained.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reliability</h3>
                <p className="text-white/70">
                  Punctual, dependable service you can count on, every single time.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Accessibility</h3>
                <p className="text-white/70">
                  Wheelchair-accessible vehicles with trained drivers for mobility support.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professionalism</h3>
                <p className="text-white/70">
                  Courteous, professional drivers and modern, clean minibuses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Driver Standards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-foreground">DRIVER </span>
                  <span className="text-primary">STANDARDS</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every driver meets our rigorous standards for safety, professionalism, and customer care
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">DBS Checked</h3>
                    <p className="text-muted-foreground">
                      All drivers undergo enhanced DBS background checks for your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Safeguarding Trained</h3>
                    <p className="text-muted-foreground">
                      Comprehensive safeguarding training for home-to-school transport.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Council Approved</h3>
                    <p className="text-muted-foreground">
                      Licensed and approved by local authorities and councils.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Professional Training</h3>
                    <p className="text-muted-foreground">
                      Ongoing training in customer service, disability awareness, and safe driving.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Local Knowledge</h3>
                    <p className="text-muted-foreground">
                      Extensive knowledge of Walsall and West Midlands routes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Fully Insured</h3>
                    <p className="text-muted-foreground">
                      Comprehensive insurance coverage for all passengers and journeys.
                    </p>
                  </div>
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