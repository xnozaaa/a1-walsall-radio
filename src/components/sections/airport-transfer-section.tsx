import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AirportTransferSection = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Image Section: Top on mobile, right on desktop */}
        <div className="relative h-[50vh] min-h-[400px] lg:h-auto lg:w-[60%] lg:order-2">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/airport-transfer-9.jpg"
            alt="Couple with luggage and an Addison Lee car on a London street"
            fill
            sizes="(max-width: 1023px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        {/* Text Section: Bottom on mobile, left on desktop */}
        <div className="flex items-center justify-center lg:w-[40%] lg:order-1">
          <div className="w-full px-8 py-16 lg:px-20 lg:py-28">
            <h2 className="text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.02em] lg:text-[56px] mb-6">
              Book your
              <br />
              <span className="text-primary">airport transfer</span>
            </h2>
            <p className="text-lg leading-[1.5] text-muted-foreground mb-10">
              Need a Heathrow airport transfer, or a taxi from London to
              Gatwick, Stansted, or Luton Airport? Choose our Airport Assured
              Service with fixed pricing, flight tracking, and a 100% on-time
              guarantee, or your next journey is free.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-primary py-4 px-8 text-sm font-medium uppercase tracking-[0.0875rem] text-primary-foreground transition-opacity hover:opacity-80"
            >
              Find out more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirportTransferSection;