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
    <section className="h-[95vh] ">
      <div className="relative  pt-20 h-full">
        <div className="absolute inset-0">
          <Image
            src="/mmr-bg.jpg"
            alt="New York City skyline with Empire State Building"
            fill
            className="object-cover -z-10"
          />
        </div>

        <div className="relative z-10 h-full border-t border-white/20 flex flex-col justify-center">
          <div className="flex flex-row px-4 h-[60vh] md:px-[6%]   w-full">
            <div className="flex flex-col justify-center flex-3/4">
              <div className="max-w-3xl">
                {/* Heading with subtle left animation */}
                <Link className="z-10" href="/contact">
                  <button className="bg-white/10 items-center mb-4 tracking-tight border-none font-semibold cursor-pointer flex text-sm border bg-blur gap-3 pl-4 duration-200 hover:text-white hover:shadow-xs text-neutral-50 px-1 py-1 rounded-full">
                    Trusted by manufacturers throughout MN{" "}
                    <span className="text-[#202023] rounded-full bg-white px-3 py-2  flex flex-row gap-1 items-center">
                      Read Client Reviews{" "}
                      <ArrowUpRight size={16} strokeWidth={"2"} />
                    </span>
                  </button>
                </Link>
                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="text-3xl mb-2 md:mb-4 font-normal title-line-height md:text-5xl lg:text-7xl text-white tracking-tight"
                >
                  Connecting Minnesota Manufacturers with
                  <span className="font-pt-serif tracking-tighter italic">
                    {" "}
                    Exceptional Talent
                  </span>
                </motion.h1>
              </div>
            </div>
            <div className="flex flex-col border-l border-white/20 flex-1/4"></div>
          </div>
          <div className="w-full  border-t px-4  md:px-[6%] flex flex-row justify-start items-center h-[35vh] border-white/20">
            <div className="flex pr-[6%] md:max-w-3xl flex-col">
              {/* Buttons with subtle left animation */}
              <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="mt-4 text-white text-md md:text-xl"
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
                className="flex flex-col md:flex-row gap-4 pt-6 md:pt-8"
              >
                <Link className="w-full md:w-auto" href="/projects">
                  <Button text="I need help hiring" />
                </Link>
                <Link className="w-full md:w-auto " href="/services">
                  <ButtonWhite text="I’m looking for a job" />
                </Link>
              </motion.div>
            </div>
            <div className="bg-white/20 h-full w-[1px]"></div>
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
