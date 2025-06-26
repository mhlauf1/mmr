import React from "react";
import Image from "next/image";

const contentData = [
  {
    id: 0,
    title: "Specialization",
    text: "Unlike most search firms that recruit across various sectors, we recruit exclusively for manufacturers vs. manufacturing. This niche enables us to develop deeper expertise and a more comprehensive understanding of the domain.",
  },
  {
    id: 1,
    title: "Local Talent Network",
    text: "Since we specialize in recruiting across the Twin Cities and throughout Minnesota, our extensive network already consists of local talent that lives within commuting distance of your facility.",
  },
  {
    id: 2,
    title: "Customer Experience",
    text: "As a service provider, delivering exceptional customer service is our highest priority, for our clients and the candidates we work with. We recognize that a positive experience is as critical as finding the right candidate. Clear, consistent communication is at the heart of our approach. We keep all parties informed with regular updates, ensuring no one is left in the dark about how the search is progressing. Our team is available around the clock.",
  },
];

const AboutUs = () => {
  return (
    <section className="flex border-t border-neutral-100  bg-[#FCFCFC] flex-col py-12 md:py-24 px-4 md:px-[4%] lg:px-[5%]">
      <div className="flex justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto flex-col md:flex-row gap-16">
        <div className="flex items-start justify-between flex-1 flex-col">
          <div>
            <h2 className="text-neutral-900  text-3xl font-medium md:text-5xl leading-tight font-pt-serif tracking-tight mt-4 md:mt-4">
              Why Us?
            </h2>

            <div className="flex mt-8 flex-col gap-8">
              {contentData.map((item) => (
                <div key={item.id} className="flex  flex-col gap-1">
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
        <div className="flex flex-1">
          <div className=" relative rounded-xl h-full flex justify-end items-center w-full">
            <Image
              src="/about-us-section.jpg"
              className="max-h-[75vh] hidden md:flex w-[33vw] object-cover rounded-lg"
              height={1200}
              width={800}
              alt="Job skeeing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
