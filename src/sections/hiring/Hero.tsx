"use client";
import React from "react";
import Image from "next/image";
import { ButtonWhite } from "@/components/Buttons";
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
      <div className="relative h-full">
        <div className="absolute inset-0">
          <Image
            src="/hiring-managers-hero.png"
            alt="New York City skyline with Empire State Building"
            fill
            className="object-cover -z-10"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col pb-16 md:pb-0 justify-end md:justify-center">
          <div className="flex flex-row px-4 md:px-[4%] lg:px-[5%] md:h-[60vh]  w-full">
            <div className="flex flex-col justify-end md:flex-3/4">
              <div className="max-w-3xl">
                {/* Heading with subtle left animation */}
                <span className="text-sm md:text-md bg-neutral-100/20 px-3 py-2 rounded-md font-semibold text-white">
                  Hiring Managers
                </span>
                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="text-4xl mb-4 font-normal mt-7 font-pt-serif title-line-height md:text-5xl lg:text-7xl text-white tracking-tight"
                >
                  Hire Minnesota&#39;s Best <br />
                  <span className="  italic"> Manufacturing Talent</span>
                </motion.h1>
                <motion.p
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="mt-4 text-white text-md md:text-lg"
                >
                  At Minnesota Manufacturing Recruiting, we&#39;re redefining
                  how hiring managers view their recruiting partners. We go
                  beyond matching résumés to job descriptions. We take the time
                  to fully understand the technical requirements of your role,
                  while also recognizing that success depends on more than just
                  hard skills.
                </motion.p>
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="flex flex-col md:flex-row gap-4 pt-6 md:pt-8"
                >
                  <Link className="w-full md:w-auto " href="/contact">
                    <ButtonWhite text="I Need Help Hiring" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
