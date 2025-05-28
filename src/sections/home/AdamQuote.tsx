import React from "react";
import Image from "next/image";

const AdamQuote = () => {
  return (
    <section className="px-4 md:px-[6%] mb-12 md:mb-16 mx-auto">
      <div className="rounded-lg  bg-linear-to-r from-[#1f1f20] to-[#1f1f20] via-black relative flex-col   flex items-center justify-center py-12 md:py-20 mt-12 md:mt-16 px-4">
        <span className="text-sm md:text-md border border-white/10 bg-neutral-800 px-3 py-2 rounded-md tracking-tight font-semibold text-neutral-200">
          Minnesota Manufacturing Recruiting
        </span>
        <h3 className="text-white  md:max-w-5xl font-pt-serif tracking-tight px-2 md:px-4 leading-[1.3] mt-6 text-2xl md:text-3xl lg:text-4xl  text-center ">
          “We find highly qualified candidates for your positions that are most
          difficult to fill. Our goal is to find the right long-term fit for
          your company and to provide a great experience for you and the
          candidate.”
        </h3>
        <Image
          src="/adam-mott.png"
          height={108}
          className="rounded-full h-[88px] md:h-[108px] w-[88px] md:w-[108px] mt-8"
          width={108}
          alt="Adam Mott"
        />
        <h3 className="mt-3 font-semibold text-lg md:text-xl text-white">
          Adam Mott
        </h3>
        <p className="text-neutral-300">Founder & Principal Recruiter</p>
      </div>
    </section>
  );
};

export default AdamQuote;
