import React from "react";
import { Button, ButtonWhite } from "@/components/Buttons";
const Hero = () => {
  return (
    <section className="relative bg-neutral-900 pt-36  pb-16 md:pb-24">
      <div className="flex flex-col items-center px-8 md:px-36  relative z-10">
        <div className="flex flex-col max-w-6xl items-center">
          <div className="bg-[#7891C5]/20 backdrop-blur-sm py-1 pr-2 tracking-tight pl-4 rounded-full flex gap-2 items-center text-white">
            <p className="text-sm">
              Trusted by <span className="font-bold">500+</span> Minneapolis
              employees.
            </p>
            <div className="bg-[#7B94C6] font-semibold py-2 px-3 text-sm  rounded-full text-whtie">
              <p className="flex items-center">
                Read Client Reviews{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl mt-8 md:mt-12 text-white font-medium tracking-tight text-center ">
            Connecting Minnesota Manufacturers with Exceptional Talent
          </h1>
          <p className="text-white mt-4 md:mt-8 text-lg md:text-xl">
            Delivering growth for companies and careers
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-8 md:mt-10 items-start md:items-center">
            <Button text="I need help hiring" />
            <ButtonWhite text="I’m looking for a job" />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Add this to your global CSS */
/* 
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
*/

export default Hero;
