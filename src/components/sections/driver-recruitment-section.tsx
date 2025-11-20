import Image from 'next/image';

const DriverRecruitmentSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-black py-12 text-white md:py-28 min-h-[600px] md:min-h-fit">
      {/* Background Image */}
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/321dc789-f6df-4a18-a342-76c745235fcf-addisonlee-com/assets/images/1920x1080_15-Addison-Lee-multivan-in-London-11.jpg"
        alt="Modern vehicle on an urban street with modern architecture in the background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent" />

      {/* Content */}
      <div className="container relative z-20">
        <div className="max-w-xl">
          <h2 className="text-[36px] font-medium uppercase leading-[1.2] -tracking-[0.02em] md:text-[56px] md:leading-[1.1]">
            <span className="text-white">Drive with</span>
            <br className="md:hidden" />{' '}
            <span className="text-primary">A1 Walsall</span>
          </h2>
          <p className="mt-6 text-body-lg text-white">
            Join Walsall's trusted local transport company and start earning today. We're looking for professional, reliable drivers with excellent customer service skills to join our team.
          </p>
          <a
            href="#"
            className="group mt-8 inline-flex items-center bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[1.4px] text-primary-foreground transition-opacity hover:opacity-60"
          >
            Learn More
            <svg
              width="17"
              height="12"
              viewBox="0 0 17 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M10.7222 1L15.5 6M15.5 6L10.7222 11M15.5 6H0.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DriverRecruitmentSection;