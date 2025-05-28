import React from "react";
import Image from "next/image";

const contentData = [
  {
    id: 0,
    title: "Engineering",
    text: "Controls • Electrical • Industrial • Manufacturing • Mechanical • Process • Quality",
  },
  {
    id: 1,
    title: "Operations Leadership",
    text: "Production Supervisor • Production Manager • Plant Manager • Operations Manager • Director of Operations • VP of Operations • General Manager",
  },
  {
    id: 2,
    title: "Additional Leadership",
    text: "Engineering Manager/Director/VP • Quality Manager/Director/VP • EHS Leader • Facilities/Maintenance Leader",
  },
  {
    id: 3,
    title: "Additional Skillsets",
    text: "Accounting • Finance • IT • Sales • Supply Chain • HR",
  },
];

const Core = () => {
  return (
    <section className="border-t border-neutral-100 bg-neutral-900">
      <div className="flex flex-col py-12 md:py-28 px-4 md:px-[6%]">
        <div className="flex flex-col-reverse md:flex-row justify-between md:max-w-[90vw] md:min-h-[60vh] w-full mx-auto gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-auto md:min-h-[60vh] rounded-xl overflow-hidden bg-[#EEF5FD]">
              <Image
                src="/about-worker.jpg"
                alt="Core recruiting capabilities"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl md:max-w-[18ch] font-medium text-neutral-100 leading-tight">
              Core Recruiting
              <span className="block font-pt-serif text-4xl sm:text-[42px] md:text-[54px] italic tracking-tighter">
                Capabilities
              </span>
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              {contentData.map((item) => (
                <div key={item.id} className="flex flex-col gap-1">
                  <h4 className="text-neutral-100 font-medium text-lg md:text-xl">
                    {item.title}
                  </h4>
                  <p className="text-neutral-300 text-md md:text-lg">
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

export default Core;
