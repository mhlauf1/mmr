import React from "react";

const ServicesBento: React.FC = () => {
  return (
    <section className="flex flex-col items-start py-12 md:py-20 w-full px-4 md:px-[4%] lg:px-[5%]">
      <div className="flex flex-col md:flex-row md:gap-8 items-center md:items-center w-full">
        <div className="flex-1 items-start flex flex-col">
          <span className="text-sm md:text-md bg-neutral-100 px-3 py-2 rounded-md tracking-tight font-semibold text-neutral-600">
            Services
          </span>
          <h2 className="text-neutral-900  text-3xl font-medium md:text-5xl leading-tight font-pt-serif tracking-tight mt-4 md:mt-4">
            What we help with
          </h2>
          <div className="md:max-w-2xl">
            <p className="text-neutral-700 md:text-lg mt-2 leading-relaxed">
              MN MFG Recruiting places top talent into leadership positions and
              into professional level individual contributor openings. We focus
              exclusively on direct hire opportunities, ensuring long-term
              alignment between our clients and candidates
            </p>
          </div>
        </div>
      </div>
      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12 md:mt-10">
        {/* Box 1: Contingent Search */}
        <div className="bg-neutral-100 md:p-12 p-6 flex flex-col items-start flex-1 rounded-lg">
          <h3 className="font-pt-serif text-2xl md:text-3xl tracking-tight  mb-1 md:mb-2">
            Contingent Search
          </h3>
          <p className="text-neutral-700 mt-1 md:text-lg text-start leading-relaxed ">
            Typically used when searching for professional level individual
            contributors or manager level employees. No upfront costs and a fee
            is only paid if we find the candidate you hire. Plus, we offer a
            free replacement guarantee to ensure peace of mind with placement.
          </p>
        </div>

        {/* Box 2: Retained Search */}
        <div className="bg-neutral-100 md:p-12 p-4 flex flex-col items-start flex-1 rounded-lg">
          <h3 className="font-pt-serif text-2xl md:text-3xl tracking-tight  mb-1 md:mb-2">
            Retained Search
          </h3>
          <p className="text-neutral-700 md:text-lg mt-1 text-start leading-relaxed">
            Typically used for director, VP, and executive level searches. A
            portion of the fee is paid upfront with the remaining balance is due
            after successful placement of the candidate. We offer an extended
            free replacement guarantee to ensure the right leader is at your
            organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
