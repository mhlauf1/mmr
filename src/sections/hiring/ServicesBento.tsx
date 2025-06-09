import React from "react";
import Image from "next/image";

const ServicesBento: React.FC = () => {
  return (
    <section className="flex flex-col items-start py-12 md:py-28 w-full px-4 md:px-[4%] lg:px-[5%]">
      <div className="flex flex-col md:flex-row md:gap-8 items-start md:items-stretch w-full">
        {/* Left column */}
        <div className="flex-1 items-start flex flex-col">
          <span className="text-sm md:text-md bg-neutral-100 px-3 py-2 rounded-md tracking-tight font-semibold text-neutral-600">
            Services
          </span>
          <h2 className="text-neutral-900 text-3xl font-medium md:text-5xl leading-tight tracking-tight mt-4 md:mt-4 mb-4 md:mb-6">
            What we
            <span className="font-pt-serif tracking-tight italic">
              {" "}
              help with
            </span>
          </h2>
          <div className="md:w-[90%]">
            <p className="text-neutral-600 mb-4 md:text-lg tracking-tight leading-relaxed">
              Our focus is on finding candidates who not only meet your
              technical needs but also align with your company culture and
              possess the soft skills needed to thrive in your environment.
            </p>
            <p className="text-neutral-600 md:text-lg tracking-tight leading-relaxed">
              We visit your facility, meet your team, and ensure honesty,
              integrity, and transparency guide every placement.
            </p>
          </div>
        </div>

        {/* Right column (image) */}
        <div className="relative flex-1 justify-end h-[300px] md:h-auto">
          <Image
            fill
            src="/hiring-bento.jpg"
            alt="Hiring"
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 300px, 800px"
          />
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12 md:mt-16">
        {/* Box 1: Contingent Search */}
        <div className="bg-neutral-100 md:p-12 p-6 flex flex-col items-center flex-1 rounded-lg">
          <h3 className="font-pt-serif text-3xl md:text-4xl tracking-tight md:tracking-tighter  mb-1 md:mb-2">
            Contingent Search
          </h3>
          <p className="text-neutral-700 mt-2 md:max-w-xl md:text-lg text-center leading-relaxed ">
            Typically used when searching for mid- to senior-level individual
            contributors or manager roles. No upfront costs, only a placement
            fee if you hire. Plus an industry-leading free replacement guarantee
            for true peace of mind.
          </p>
        </div>

        {/* Box 2: Retained Search */}
        <div className="bg-neutral-100 md:p-12 p-4 flex flex-col items-center flex-1 rounded-lg">
          <h3 className="font-pt-serif text-3xl md:text-4xl tracking-tight md:tracking-tighter  mb-1 md:mb-2">
            Retained Search
          </h3>
          <p className="text-neutral-700 md:text-lg mt-2 md:max-w-xl text-center leading-relaxed">
            Ideal for director, VP, and executive searches. A portion of fees is
            upfront, with the balance due on placement. Includes an extended
            free replacement guarantee to ensure long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
