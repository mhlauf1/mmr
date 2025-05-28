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
    <section className="border-t border-neutral-100 bg-[#EEF5FD]">
      <div className="flex flex-col py-12 md:py-24 px-4 md:px-[6%]">
        <div className="flex flex-col-reverse md:flex-row justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto gap-16">
          {/* Image */}
          <div className="flex-1">
            <div className="relative w-full h-64 md:h-auto md:min-h-[60vh] rounded-xl overflow-hidden bg-[#EEF5FD]">
              <Image
                src="/2-guys.jpg"
                alt="Job seeking"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-start justify-start">
            <span className="text-sm md:text-md bg-neutral-50 px-3 py-2 rounded-md font-semibold text-neutral-600">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl md:max-w-[18ch] font-medium text-neutral-800 leading-tight">
              Get Hired in{" "}
              <span className="block font-pt-serif text-4xl sm:text-[42px] md:text-[54px] italic tracking-tighter">
                Three Simple Steps
              </span>
            </h2>
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
