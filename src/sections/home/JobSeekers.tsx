import { Button } from "@/components/Buttons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const contentData = [
  {
    id: 0,
    title: "Expert Role Matching",
    text: "Get contacted about opportunities that align with your skills, goals, and preferences.",
  },
  {
    id: 1,
    title: "Dedicated Candidate Support",
    text: "Receive interview coaching, offer guidance, and onboarding tips to start strong.",
  },
  {
    id: 2,
    title: "Streamlined Application",
    text: "Submit your resume and preferences. Email your resume to adam@mnmfgrecruiting.com.",
  },
];

const JobSeekers = () => {
  return (
    <section className="flex border-t border-neutral-100  bg-[#FCFCFC] flex-col pt-12 md:py-24  px-4 md:px-[4%] lg:px-[5%]">
      <div className="flex justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex md:items-start w-full items-center justify-between flex-1 flex-col">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm md:text-md bg-neutral-100 px-3 py-2 rounded-md tracking-tight font-semibold text-neutral-600">
              Job Seekers
            </span>
            <h2 className="mt-4 text-center md:text-start text-3xl md:text-4xl lg:text-5xl max-w-[22ch] tracking-tight text-neutral-800 font-medium leading-tight">
              Launch Your Manufacturing Career
              <span className="font-pt-serif text-[31px] md:text-[40px] lg:text-[52px] tracking-tight italic">
                {" "}
                in Minnesota
              </span>
            </h2>

            <div className="flex mt-6 flex-col gap-6">
              {contentData.map((item) => (
                <div key={item.id} className="flex  flex-col gap-1">
                  <h4 className="text-neutral-900 font-medium text-lg md:text-xl">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600 md:max-w-xl text-md md:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/" className="mt-12 w-full">
            <Button text="Job Seekers Can Learn More" />
          </Link>
        </div>
        <div className="flex flex-1">
          <div className=" relative rounded-xl h-64 md:h-full flex justify-center items-center w-full">
            <Image
              src="/engineer-1.jpg"
              className="object-cover rounded-lg object-bottom"
              fill
              alt="Job skeeing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekers;
