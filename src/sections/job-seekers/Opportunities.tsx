import React from "react";
import Image from "next/image";

const contentData = [
  {
    id: 0,
    title: "Communication You Can Count On",
    text: "We know how important communication is during your job search—that's why it's our top priority. You'll never be left in the dark, and we're committed to keeping you informed every step of the way. You can count on timely responses to your calls and emails—always.",
  },
  {
    id: 1,
    title: "Exclusive Manufacturing Focus",
    text: "Unlike general recruiters, we work exclusively in the manufacturing sector. This specialized focus means we understand the technical requirements, industry trends, and career paths available to you. We speak your language and know how to position your skills for maximum impact.",
  },
];

const JobSeekers = () => {
  return (
    <section className="flex border-t border-neutral-100  bg-[#FCFCFC] flex-col py-12 md:py-24 px-4 md:px-[6%]">
      <div className="flex justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto flex-col md:flex-row gap-16">
        <div className="flex items-start justify-between flex-1 flex-col">
          <div>
            <span className="text-sm md:text-md bg-neutral-100 px-3 py-2 rounded-md tracking-tight font-semibold text-neutral-600">
              Minnesota Manufacturing Recruiting
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl md:max-w-[20ch] tracking-tight text-neutral-800 font-medium leading-tight">
              We identify the best
              <span className="font-pt-serif text-4xl sm:text-[42px] md:text-[54px] tracking-tighter italic">
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
            <div className="flex mt-8 flex-col gap-8">
              {contentData.map((item) => (
                <div key={item.id} className="flex  flex-col gap-1">
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
          <p className="text-neutral-800 mt-16 md:max-w-xl text-md md:text-lg">
            Ready to take the next step?{" "}
            <span className="underline">Send us your resume today.</span>
          </p>
        </div>
        <div className="flex flex-1">
          <div className=" relative rounded-xl  flex justify-center items-center w-full">
            <Image
              src="/hiring-hero.png"
              className="object-cover rounded-lg object-center"
              fill
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
