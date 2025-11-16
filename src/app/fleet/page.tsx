import HeaderNavigation from '@/components/sections/header-navigation';
import A1Footer from '@/components/sections/a1-footer';
import { Car, Users, Accessibility, Shield, CheckCircle2 } from 'lucide-react';

const vehicles = [
  {
    name: 'Standard Saloon Cars',
    capacity: '4 passengers',
    features: ['Comfortable seating', 'Air conditioning', 'Spacious boot', 'Professional drivers'],
    description: 'Perfect for local journeys, airport transfers, and business travel.'
  },
  {
    name: 'Executive Vehicles',
    capacity: '4 passengers',
    features: ['Premium comfort', 'Luxury interior', 'Extra legroom', 'Professional chauffeur service'],
    description: 'Ideal for corporate clients and special occasions.'
  },
  {
    name: 'Estate Cars',
    capacity: '4-5 passengers',
    features: ['Extra luggage space', 'Comfortable seating', 'Ideal for families', 'Airport transfers'],
    description: 'Great for group travel and airport journeys with luggage.'
  },
  {
    name: 'MPVs & People Carriers',
    capacity: '6-8 passengers',
    features: ['Group travel', 'Spacious interior', 'Multiple seating configurations', 'Large luggage capacity'],
    description: 'Perfect for family trips, corporate groups, and school runs.'
  },
  {
    name: 'Wheelchair Accessible Vehicles',
    capacity: '1 wheelchair + 3 passengers',
    features: ['Wheelchair ramps/lifts', 'Secure wheelchair anchoring', 'Trained mobility support', 'Door-through-door service'],
    description: 'Fully accessible transport for wheelchair users with trained drivers.'
  },
  {
    name: 'Minibuses',
    capacity: '12-16 passengers',
    features: ['Large group transport', 'School contracts', 'Corporate events', 'Comfortable seating'],
    description: 'Ideal for schools, corporate groups, and large parties.'
  }
];

export default function FleetPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <HeaderNavigation />
      
      <main className="pt-16 md:pt-[108px]">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6">
                <span className="text-primary font-semibold text-sm">MODERN & WELL-MAINTAINED</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">OUR </span>
                <span className="text-primary">FLEET</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                A diverse range of modern, clean, and fully-insured vehicles to meet all your transport needs
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                  <Car className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Vehicles in Fleet</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                  <Accessibility className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">10+</h3>
                  <p className="text-muted-foreground">Wheelchair Accessible</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">100%</h3>
                  <p className="text-muted-foreground">Fully Insured & Licensed</p>
                </div>
              </div>

              <div className="space-y-8">
                {vehicles.map((vehicle, index) => (
                  <div key={index} className="border-2 border-border rounded-xl p-6 md:p-8 hover:border-primary transition-colors">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Users className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                            <p className="text-primary font-semibold">{vehicle.capacity}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {vehicle.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {vehicle.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wheelchair Accessible Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Accessibility className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-white">WHEELCHAIR </span>
                  <span className="text-primary">ACCESSIBLE VEHICLES</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Our wheelchair-accessible vehicles are specially equipped to provide safe, comfortable, and dignified transport for passengers with mobility requirements.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Vehicle Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Electric wheelchair ramps and lifts</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Secure wheelchair anchoring systems</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Spacious interior for easy maneuvering</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Climate control for passenger comfort</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Driver Training</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Specialist disability awareness training</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Manual handling and mobility assistance</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Patient and supportive approach</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Door-through-door assistance available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Standards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-foreground">VEHICLE </span>
                  <span className="text-primary">STANDARDS</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every vehicle in our fleet meets rigorous standards for safety, cleanliness, and comfort
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Fully Licensed & Insured</h3>
                    <p className="text-muted-foreground">All vehicles are properly licensed with local authorities and carry comprehensive insurance coverage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Regular Maintenance</h3>
                    <p className="text-muted-foreground">Strict maintenance schedules ensure all vehicles are in excellent working condition at all times.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Daily Cleaning</h3>
                    <p className="text-muted-foreground">Every vehicle is thoroughly cleaned and sanitized daily to maintain the highest hygiene standards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white border-2 border-border rounded-xl hover:border-primary transition-colors">
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Safety Equipment</h3>
                    <p className="text-muted-foreground">All vehicles equipped with safety features including seatbelts, first aid kits, and fire extinguishers.</p>
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
