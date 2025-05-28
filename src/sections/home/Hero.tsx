"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button, ButtonWhite } from "@/components/Buttons";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="h-[95vh]">
      <div className="relative  pt-20 h-full">
        <div className="absolute inset-0">
          <Image
            src="/mmr-bg.jpg"
            alt="New York City skyline with Empire State Building"
            fill
            className="object-cover -z-10"
          />
        </div>

        <div className="relative z-10 h-full md:border-t border-white/20 flex flex-col justify-center">
          <div className="flex flex-row px-4 md:h-[60vh] md:px-[6%]   w-full">
            <div className="flex flex-col justify-center md:flex-3/4">
              <div className="md:max-w-3xl">
                {/* Heading with subtle left animation */}
                <Link href="/contact" className="z-10">
                  <button
                    className="
      inline-flex items-center whitespace-nowrap
      md:mb-4 mb-8 tracking-tight font-semibold cursor-pointer
      text-sm bg-white/10 backdrop-blur
      gap-1 px-2 py-1 rounded-full
      duration-200 hover:text-white hover:shadow-xs
      text-neutral-50
    "
                  >
                    <span className="whitespace-nowrap">
                      Trusted by manufacturers throughout MN
                    </span>
                    <span
                      className="
        ml-3 inline-flex items-center whitespace-nowrap
        bg-white text-[#202023] rounded-full
        px-2 py-2 md:py-1 gap-1
      "
                    >
                      Read Client Reviews
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </span>
                  </button>
                </Link>

                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className=" mb-2 md:mb-4 text-center md:text-start max-w-[20ch] mx-auto font-normal title-line-height text-5xl lg:text-7xl text-white tracking-tight"
                >
                  Connecting Minnesota Manufacturers with
                  <span className="font-pt-serif tracking-tighter italic">
                    {" "}
                    Exceptional Talent
                  </span>
                </motion.h1>
              </div>
            </div>
            <div className="flex flex-col md:border-l border-white/20 md:flex-1/4"></div>
          </div>
          <div className="w-full  md:border-t px-4  md:px-[6%] flex flex-row justify-center md:justify-start items-center md:h-[35vh] border-white/20">
            <div className="flex md:pr-[6%] md:max-w-3xl flex-col">
              {/* Buttons with subtle left animation */}
              <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="mt-6 md:mt-4 text-white text-center md:text-start text-lg md:text-xl"
              >
                Permanent, full-time placement for mid- to senior-level
                manufacturing roles—no contract staffing, transparent fees, and
                backed by a free replacement guarantee.
              </motion.p>
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="flex flex-col justify-center md:justify-start md:flex-row gap-4 pt-8"
              >
                <Link
                  className="w-full flex  justify-center md:justify-start  md:w-auto"
                  href="/projects"
                >
                  <Button text="I need help hiring" />
                </Link>
                <Link
                  className="w-full flex justify-center md:justify-start md:w-auto "
                  href="/services"
                >
                  <ButtonWhite text="I’m looking for a job" />
                </Link>
              </motion.div>
            </div>
            <div className="bg-white/20 md:h-full w-[1px]"></div>
          </div>
        </div>
        <div className="absolute z-5 text-xs text-neutral-300 bottom-4 right-4 flex flex-col items-end">
          <span className="font-mono">Est. 2022</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
