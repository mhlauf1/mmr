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
    <section className="h-[90vh] md:h-[95vh]">
      <div className="relative  h-full">
        <div className="absolute inset-0">
          <Image
            src="/mmr-bg.jpg"
            alt="New York City skyline with Empire State Building"
            fill
            className="object-cover -z-10"
          />
        </div>

        <div className="relative z-10 h-full pt-16 md:pt-0 flex flex-col justify-center">
          <div className="flex flex-row px-4 md:px-[4%] lg:px-[5%] w-full">
            <div className="flex flex-col justify-center md:flex-3/4">
              <div className="md:max-w-3xl">
                {/* Heading with subtle left animation */}
                <Link
                  href="#testimonials"
                  className="z-10 w-full mx-auto flex md:justify-start justify-center"
                >
                  <button
                    type="button"
                    className="inline-flex items-center whitespace-nowrap mb-4 tracking-tight font-semibold cursor-pointer text-sm bg-white/10 backdrop-blur gap-2 md:px-3 md:py-2 rounded-full duration-200 hover:text-white hover:shadow-xs text-neutral-50"
                  >
                    {/* hidden below md, shown md+ */}
                    <span className="hidden md:inline whitespace-nowrap">
                      Trusted by manufacturers throughout MN
                    </span>

                    {/* always visible */}
                    <span className="inline-flex items-center whitespace-nowrap bg-white text-[#202023] rounded-full px-3 py-2  gap-1 md:ml-3">
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
                  className=" mb-2 md:mb-4 text-center md:text-start md:max-w-[20ch] mx-auto font-normal leading-[1.2] text-[36px] sm:text-5xl lg:text-7xl text-white tracking-tight"
                >
                  Connecting Minnesota Manufacturers with
                  <span className="font-pt-serif tracking-tighter italic">
                    {" "}
                    Exceptional Talent
                  </span>
                </motion.h1>
                <motion.p
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="mt-6 md:mt-4 text-white md:max-w-[50ch] text-center md:text-start text-md md:text-xl"
                >
                  Direct hire placement services for manufacturers in Minnesota.
                  Delivering top-tier leadership and professional level talent —
                  all backed by our free replacement guarantee.
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
                    href="/hiring-managers"
                  >
                    <Button text="I need help hiring" />
                  </Link>
                  <Link
                    className="w-full flex justify-center md:justify-start md:w-auto "
                    href="/job-seekers"
                  >
                    <ButtonWhite text="I’m looking for a job" />
                  </Link>
                </motion.div>
              </div>
            </div>
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
