import React from "react";
import { Button } from "@/components/Buttons";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-[#111111] relative h-[60vh] py-16 md:py-0 md:h-[65vh]">
      <div className="px-4 md:px-[4%] lg:px-[5%] h-full justify-center py-8 items-center flex flex-col">
        <div className="flex flex-col md:mt-auto  items-center">
          <h2 className=" text-4xl md:text-5xl max-w-[15ch] md:max-w-xl text-white lg:text-6xl font-medium font-pt-serif tracking-tight text-center">
            Find the perfect hire for
            <span className="italic"> Your needs.</span>
          </h2>
          <p className="text-center text-lg md:text-xl md:max-w-2xl mt-6 mb-12 md:mb-8 text-neutral-300">
            Providing direct hire placement services for Minnesota
            manufacturers. Delivering top-tier talent, backed by our free
            replacement guarantee.
          </p>
          <Link className="w-full md:w-auto" href="/contact">
            <Button text="Get Started Today" />
          </Link>
        </div>
        <div className="hidden md:flex text-white mt-auto flex-row items-center gap-4">
          <span>Leadership placements</span>
          <div className="h-[4px] w-[4px] bg-neutral-200 rounded-full"></div>
          <span>Professional level placements</span>
          <div className="h-[4px] w-[4px] bg-neutral-200 rounded-full"></div>
          <span>Local candidate network</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
