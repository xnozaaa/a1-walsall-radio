"use client";

import Image from 'next/image';
import React from 'react';

const features = [
  {
    title: "Award Winning",
    description: "Recognized for excellence in customer service and reliable transportation.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/500x700_03-Addison-Lee-iD4-electric-Car-with-woman-12.jpg",
  },
  {
    title: "Professional Service",
    description: "The stylish, safe and reliable way to travel across Walsall.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/500x700_09-Addison-Lee-executive-car-with-man-and--13.jpg",
  },
  {
    title: "Quality Assured",
    description: "Experienced, DBS-checked drivers with well-maintained vehicles fully insured.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/500x700_14-Addison-Lee-Car-multivan-in-London-City-14.jpg",
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => (
  <div className="flex-shrink-0 w-[300px] group">
    <div className="relative h-[420px] mb-6 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        style={{ objectFit: 'cover' }}
        className="group-hover:scale-125 transition-transform duration-700 ease-in-out"
      />
    </div>
    <h5 className="text-2xl font-bold uppercase mb-4">
      {title === "Professional Service" ? <>Professional<br />Service</> : title}
    </h5>
    <p className="text-base text-[#B3B3B3]">
      {description}
    </p>
  </div>
);

const RotatingFeaturesCarousel = () => {
  const duplicatedFeatures = [...features, ...features];

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-${features.length} * (300px + 24px))); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
      <section className="bg-black text-white py-12 md:py-28 overflow-hidden">
        <div className="container mx-auto">
          <h3 className="text-base font-medium tracking-wider uppercase mb-8 md:mb-14">
            Our Features
          </h3>
        </div>
        <div className="relative flex">
          <div className="flex animate-scroll gap-6 hover:[animation-play-state:paused]">
            {duplicatedFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RotatingFeaturesCarousel;