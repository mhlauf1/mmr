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
    <section className="border-t border-neutral-100 relative  bg-neutral-900">
      <div className="flex flex-col py-16 md:py-28 px-4 md:px-[6%]">
        <div className="flex justify-between md:max-w-[90vw]  md:min-h-[60vh] w-full mx-auto flex-col md:flex-row gap-16">
          <div className="flex flex-1">
            <div className="bg-[#EEF5FD] relative rounded-xl h-full flex justify-center items-center w-full">
              <Image
                src="/about-worker.jpg"
                className="rounded-xl object-cover"
                fill
                alt="Job skeeing"
              />
            </div>
          </div>
          <div className="flex items-start justify-between flex-1 flex-col">
            <div>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl md:max-w-[18ch] tracking-tight text-neutral-100 font-medium leading-tight">
                Core Recruiting{" "}
                <span className="font-pt-serif text-4xl sm:text-[42px] md:text-[54px] tracking-tighter italic">
                  Capabilities
                </span>
              </h2>
              <div className="flex mt-8 flex-col gap-8">
                {contentData.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1">
                    <h4 className="text-neutral-100 font-medium text-lg md:text-xl">
                      {item.title}
                    </h4>
                    <p className="text-neutral-300 ">{item.text}</p>
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

export default Core;
