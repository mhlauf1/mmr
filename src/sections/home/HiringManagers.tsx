import { Button } from "@/components/Buttons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const contentData = [
  {
    id: 0,
    title: "Targeted Sourcing",
    text: "Tap into a vetted network of experienced manufacturing professionals across Minnesota.",
  },
  {
    id: 1,
    title: "Candidate Screening",
    text: "Evaluated for technical skills and culture fit to ensure only qualified candidates are presented.",
  },
  {
    id: 2,
    title: "Risk-Free Hiring",
    text: "To ensure you made the right hire, all placements come with a free replacement guarantee.",
  },
];

const HiringManagers = () => {
  return (
    <section className="border-t border-neutral-100 bg-[#F7F7F7]">
      <div className="flex flex-col py-12 md:py-24 px-4 md:px-[4%] lg:px-[5%]">
        <div className="flex flex-col-reverse md:flex-row justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto gap-4 md:gap-10 lg:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#EEF5FD] relative rounded-xl w-full h-64 md:h-full flex-1 md:min-h-[60vh] flex justify-center items-center overflow-hidden">
              <Image
                src="/2-guys.jpg"
                alt="Job seeking"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-between">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-sm md:text-md bg-neutral-50 border border-white px-3 py-2 rounded-md font-semibold text-neutral-600">
                Hiring Managers
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-medium text-neutral-800 leading-tight font-pt-serif   tracking-tight">
                Find Top Manufacturing Talent,{" "}
                <span className="italic">Fast</span>
              </h2>
              <div className="mt-8 flex flex-col gap-6">
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

            <Link href="/hiring-managers" className="mt-12">
              <Button text="Hiring Managers Can Learn More" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringManagers;
