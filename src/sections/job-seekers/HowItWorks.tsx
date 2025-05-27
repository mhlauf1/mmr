import React from "react";
import Image from "next/image";

const contentData = [
  {
    id: 0,
    title: "Share Your Profile",
    text: "Email your resume and tell me what you’re looking for—role level, specialties (controls, mechanical, process, quality), and preferred locations.",
  },
  {
    id: 1,
    title: "Receive Hand-Picked Matches",
    text: "I’ll comb my Minnesota network and surface only roles that fit your experience and goals. You’ll get a tailored shortlist, not a spam list.",
  },
  {
    id: 2,
    title: "Interview & Land the Job",
    text: "Get interview prep, salary guidance, and offer negotiation support—so you start strong on Day One.",
  },
];

const HowItWorks = () => {
  return (
    <section className="border-t border-neutral-100 relative  bg-[#EEF5FD]">
      <div className="flex flex-col py-12 md:py-24 px-4 md:px-[6%]">
        <div className="flex justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto flex-col md:flex-row gap-16">
          <div className="flex flex-1">
            <div className="bg-[#EEF5FD] relative rounded-xl h-full flex justify-center items-center w-full">
              <Image
                src="/2-guys.jpg"
                className="rounded-xl object-cover"
                fill
                alt="Job skeeing"
              />
            </div>
          </div>
          <div className="flex items-start justify-between flex-1 flex-col">
            <div>
              <span className="text-sm md:text-md bg-neutral-50 px-3 py-2 rounded-md tracking-tight font-semibold text-neutral-600">
                How It Works
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl md:max-w-[18ch] tracking-tight text-neutral-800 font-medium leading-tight">
                Get Hired in <br />{" "}
                <span className="font-pt-serif text-4xl sm:text-[42px] md:text-[54px] tracking-tighter italic">
                  Three Simple Steps
                </span>
              </h2>
              <div className="flex mt-8 flex-col gap-8">
                {contentData.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1">
                    <h4 className="text-neutral-900 font-medium text-lg md:text-xl">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600  text-md md:text-lg">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
