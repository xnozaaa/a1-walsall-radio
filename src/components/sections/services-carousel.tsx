"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const servicesData: Service[] = [
  {
    title: "Standard",
    description: "Your everyday London car and airport transfer service.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/600x600_11-Addison-Lee-Car-iD4-electric-vehicle-5.jpg",
    link: "#",
  },
  {
    title: "Executive",
    description: "Premium cars for business and airport travel.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/600x600_24-Addison-Lee-Executive-Car-6.jpg",
    link: "#",
  },
  {
    title: "Courier",
    description: "London’s largest same day courier fleet.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/600x600_27-Addison-Lee-Courier-in-London-7.jpg",
    link: "#",
  },
  {
    title: "Black Taxi",
    description: "London’s largest black taxi fleet.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/600x600_TC_03-Black-Taxi-with-Roundel-8.jpg",
    link: "#",
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <Link href={service.link} className="group block">
    <div className="overflow-hidden aspect-square mb-6">
      <Image
        src={service.imageUrl}
        alt={service.title}
        width={600}
        height={600}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-2xl font-medium text-white uppercase mb-4">
        {service.title}
      </h3>
      <p className="text-lg text-[#B3B3B3] mb-4 md:mb-10 min-h-[54px]">
        {service.description}
      </p>
      <div className="flex items-center text-sm font-medium uppercase tracking-[1.4px] text-white transition-opacity group-hover:opacity-60">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </div>
  </Link>
);

export default function ServicesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!api) return;
    const progress = Math.max(0, Math.min(1, api.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onScroll();
    api.on("scroll", onScroll);
    api.on("reInit", onScroll);
    return () => {
      api.off("scroll", onScroll);
      api.off("reInit", onScroll);
    };
  }, [api, onScroll]);

  return (
    <section className="bg-black text-white py-12 md:py-[112px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false }}
          className="w-full"
        >
          <div className="mb-8 md:mb-14">
            <div className="flex justify-between items-start">
              <h2 className="text-[32px] md:text-[56px] font-medium uppercase leading-none">
                <span className="text-white">Our </span>
                <span className="text-primary">Services</span>
              </h2>
              <div className="hidden md:flex items-center gap-2">
                <CarouselPrevious className="relative translate-x-0 translate-y-0 w-10 h-10 bg-transparent border-none text-white hover:text-primary disabled:text-white/30">
                   <ChevronLeft className="h-10 w-10" />
                </CarouselPrevious>
                <CarouselNext className="relative translate-x-0 translate-y-0 w-10 h-10 bg-transparent border-none text-white hover:text-primary disabled:text-white/30">
                   <ChevronRight className="h-10 w-10" />
                 </CarouselNext>
              </div>
            </div>
          </div>
          <CarouselContent className="-ml-8">
            {servicesData.map((service, index) => (
              <CarouselItem key={index} className="pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                <ServiceCard service={service} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 md:mt-14">
          <div className="w-full h-[1px] bg-white/20 relative">
            <div
              className="h-[1px] bg-primary transition-all duration-300 ease-linear"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}