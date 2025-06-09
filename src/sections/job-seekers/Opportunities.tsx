import React from "react";
import Image from "next/image";

const contentData = [
  {
    id: 0,
    title: "Communication You Can Count On",
    text: "We know how important communication is during your job search, that's why it's our top priority. You'll never be left in the dark, and we're committed to keeping you informed every step of the way. You can count on timely responses to your calls and emails - always.",
  },
  {
    id: 1,
    title: "Exclusive Manufacturing Focus",
    text: "Unlike general recruiters, we work exclusively in the manufacturing sector. This specialized focus means we understand the technical requirements, industry trends, and career paths available to you. We speak your language and know how to position your skills for maximum impact.",
  },
];

const JobSeekers = () => {
  return (
    <section className="flex flex-col border-t border-neutral-100 bg-[#FCFCFC] py-12 md:py-24 px-4 md:px-[4%] lg:px-[5%]">
      <div className="flex flex-col md:flex-row justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto gap-8 md:gap-16">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="text-sm md:text-md bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-600">
              Minnesota Manufacturing Recruiting
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl max-w-[20ch] font-medium text-neutral-800 ">
              We identify the best
              <span className="font-pt-serif italic tracking-tight">
                {" "}
                opportunities for you.
              </span>
            </h2>
            <p className="text-neutral-600 mt-4 text-md md:text-lg">
              Looking for a career in manufacturing? You&#39;ve come to the
              right place. MN MFG Recruiting partners with high-performing
              manufacturers across the Twin Cities and throughout Minnesota to
              connect exceptional talent with premier opportunities.
            </p>
            <div className="mt-8 flex flex-col gap-8">
              {contentData.map((item) => (
                <div key={item.id} className="flex flex-col gap-1">
                  <h4 className="text-neutral-900 font-medium text-lg md:text-xl">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600 text-md md:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-neutral-800 mt-8 md:mt-16 md:max-w-xl text-md md:text-lg">
            Ready to take the next step?{" "}
            <span className="underline">Send us your resume today.</span>
          </p>
        </div>

        {/* Image */}
        <div className="flex flex-1">
          <div className="relative w-full h-64 md:h-full md:min-h-[65vh] rounded-xl overflow-hidden bg-[#EEF5FD]">
            <Image
              src="/hiring-hero.png"
              alt="Job seeking"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekers;
