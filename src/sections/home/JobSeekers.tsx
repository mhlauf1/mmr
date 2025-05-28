import { Button } from "@/components/Buttons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const contentData = [
  {
    id: 0,
    title: "Streamlined Application",
    text: "Submit your resume and preferences for fast, personalized feedback. Email your resume to the Principal Recruiter,  Adam Mott at adam@mnmfgrecruiting.com.",
  },
  {
    id: 1,
    title: "Expert Role Matching",
    text: "Get hand-picked opportunities aligned to your skills, goals, and preferred locations.",
  },
  {
    id: 2,
    title: "Dedicated Candidate Support",
    text: "Receive interview coaching, offer guidance, and onboarding tips to start strong.",
  },
];

const JobSeekers = () => {
  return (
    <section className="flex border-t border-neutral-100  bg-[#FCFCFC] flex-col py-12 md:py-24 px-4 md:px-[6%]">
      <div className="flex justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto flex-col md:flex-row gap-16">
        <div className="flex items-start justify-between flex-1 flex-col">
          <div>
            <span className="text-sm md:text-md bg-neutral-100 px-3 py-2 rounded-md tracking-tight font-semibold text-neutral-600">
              Job Seekers
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl md:max-w-[20ch] tracking-tight text-neutral-800 font-medium leading-tight">
              Launch Your Manufacturing Career
              <span className="font-pt-serif text-4xl sm:text-[42px] md:text-[54px] tracking-tighter italic">
                {" "}
                in Minnesota
              </span>
            </h2>

            <div className="flex mt-8 flex-col gap-8">
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

          <Link href="/" className="mt-12">
            <Button text="Learn More For Job Seekers" />
          </Link>
        </div>
        <div className="flex flex-1">
          <div className=" relative rounded-xl h-full flex justify-center items-center w-full">
            <Image
              src="/engineer-1.jpg"
              className="object-cover rounded-lg object-bottom"
              height={800}
              width={800}
              alt="Job skeeing"
            />
            {/*   <div className="w-[1px] absolute top-0 right-[25%] h-full bg-white"></div>
            <div className="absolute top-36 right-[25%] left-0 h-[1px] bg-white"></div>
            <div className="absolute bottom-16 right-0 left-[75%] h-[1px] bg-white"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekers;
