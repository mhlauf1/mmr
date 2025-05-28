import { Button } from "@/components/Buttons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const contentData = [
  {
    id: 0,
    title: "Specializationn",
    text: "Unlike most search firms that recruit across various sectors, we recruit exclusively for manufacturing. Having a niche enables us to develop deeper expertise and a more comprehensive understanding of the domain.",
  },
  {
    id: 1,
    title: "Local Talent Network",
    text: "Based in Minneapolis, we specialize in recruiting talent across the Twin Cities and throughout Minnesota. As a result, our network consists of local manufacturing talent who often live within commuting distance of your facility.",
  },
  {
    id: 2,
    title: "Customer Experience",
    text: "As a service provider, delivering exceptional customer service is our highest priority, for our clients and the candidates we work with. We recognize that a positive experience is as critical as finding the right candidate. Clear, consistent communication is at the heart of our approach. We keep all parties informed with regular updates, ensuring no one is left in the dark about how the search is progressing. Our team is available around the clock—morning, noon, or night—whenever you need us.",
  },
];

const AboutUs = () => {
  return (
    <section className="flex border-t border-neutral-100  bg-[#FCFCFC] flex-col py-12 md:py-24 px-4 md:px-[6%]">
      <div className="flex justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto flex-col md:flex-row gap-16">
        <div className="flex items-start justify-between flex-1 flex-col">
          <div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl md:max-w-[20ch] tracking-tight text-neutral-800 font-medium leading-tight">
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

          <Link href="/" className="mt-12">
            <Button text="Let’s work together" />
          </Link>
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
            {/*   <div className="w-[1px] absolute top-0 right-[25%] h-full bg-white"></div>
            <div className="absolute top-36 right-[25%] left-0 h-[1px] bg-white"></div>
            <div className="absolute bottom-16 right-0 left-[75%] h-[1px] bg-white"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
