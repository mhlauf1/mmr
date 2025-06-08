import React from "react";
import Image from "next/image";

const AdamQuote = () => {
  return (
    <section className="px-4 md:px-[4%] lg:px-[5%] mb-12 md:mb-16 mx-auto">
      <div className="rounded-lg  bg-linear-to-r from-[#161616] to-black relative flex-col   flex md:items-center justify-center py-10 md:py-20 mt-12 md:mt-16 px-4">
        <div
          className={`flex flex-row items-center mb-2 gap-[10px]
            `}
        >
          <Image
            src="/minnesota.svg"
            alt="Minnesota Manufacturing Recruiting"
            className="filter h-[42px] md:h-[50px] brightness-0 invert"
            width={50}
            height={50}
          />
          <div className="h-[60px] w-[1px] bg-white"></div>
          <h3 className="font-pt-serif leading-[1]  text-white font-semibold text-xs md:text-sm">
            Minnesota <br /> Manufacturing <br /> Recruiting
          </h3>
        </div>
        <h3 className="text-white  md:max-w-5xl font-pt-serif tracking-tight px-2 md:px-4 leading-[1.4] mt-4 md:mt-6 text-2xl md:text-3xl lg:text-4xl  md:text-center ">
          “We find highly qualified candidates for your positions that are most
          difficult to fill. Our goal is to find the right long-term fit for
          your company and to provide a great experience for you and the
          candidate.”
        </h3>
        <div className="flex mt-8 flex-col items-end md:items-center">
          <Image
            src="/adam-mott.png"
            height={108}
            className="rounded-full h-[64px] md:h-[74px] w-[64px] md:w-[74px] mt-12 md:mt-8"
            width={108}
            alt="Adam Mott"
          />
          <h3 className="mt-3 font-semibold text-base md:text-lg lg:text-xl text-white">
            Adam Mott
          </h3>
          <p className="text-neutral-300 md:text-base text-sm">
            Founder & Principal Recruiter
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdamQuote;
