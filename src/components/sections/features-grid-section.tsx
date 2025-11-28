import Image from 'next/image';

const featuresData = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/team-3.svg",
    title: "Trusted",
    description: "With nearly 40 years of exceptional service since 1986, A1 Walsall Radio Taxis Ltd is the trusted choice for passengers, schools and businesses seeking reliable local transportation.",
    alt: "Team icon symbolizing trust",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/user-4.svg",
    title: "Reliable",
    description: "Wherever you need to be in Walsall and beyond, we ensure prompt, dependable journeys—day or night, rain or shine.",
    alt: "User check icon symbolizing reliability",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/car-5.svg",
    title: "Professional",
    description: "Professional travel with a well-maintained fleet of vehicles and DBS-checked drivers offering superior comfort and safety.",
    alt: "Car icon symbolizing professional service",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/battery-6.svg",
    title: "Sustainable",
    description: "Committed to a greener future with environmentally conscious practices, reducing our carbon footprint one journey at a time.",
    alt: "Battery icon symbolizing sustainability",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/app-7.svg",
    title: "Convenient",
    description: "Easy booking by phone or email for all your transport needs including school runs, airport transfers and corporate travel.",
    alt: "App icon symbolizing convenience",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/svgs/lock-8.svg",
    title: "Safe",
    description: "Your safety is our priority. From DBS-checked, safeguarding-trained drivers to well-maintained vehicles, we ensure your journey is safe and stress-free.",
    alt: "Lock icon symbolizing safety",
  },
];

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  alt: string;
}

const FeatureCard = ({ icon, title, description, alt }: FeatureCardProps) => (
  <div>
    <Image src={icon} alt={alt} width={48} height={48} className="mb-6" />
    <h6 className="text-xl font-medium uppercase text-foreground mb-4">{title}</h6>
    <p className="text-base text-[#B3B3B3]">{description}</p>
  </div>
);

const FeaturesGridSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-20">
        <h3 className="text-center text-4xl font-medium uppercase mb-16 lg:mb-24">
          <span className="text-foreground">What Sets Us </span>
          <span className="text-primary">Apart</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              alt={feature.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;