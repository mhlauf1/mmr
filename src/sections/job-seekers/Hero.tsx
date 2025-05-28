"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Buttons";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
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

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Resume request for:", email);
  };

  return (
    <section className="relative h-[95vh] overflow-hidden">
      <Image
        src="/hero-2.jpg"
        alt="Manufacturing floor"
        fill
        className="object-cover object-top"
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-[6%]">
        <div className="max-w-3xl flex-col justify-between">
          <div>
            <span className="text-sm md:text-md bg-neutral-100/20 px-3 py-2 rounded-md font-semibold text-white">
              Job Seekers
            </span>

            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 text-3xl md:text-5xl lg:text-7xl font-normal text-white tracking-tight"
            >
              Looking for a career <br />
              <span className="font-pt-serif tracking-tighter italic">
                {" "}
                in manufacturing?
              </span>
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 text-white text-md md:text-xl"
            >
              If you&rsquo;re exploring new opportunities in manufacturing,
              you&rsquo;ve come to the right place. MN MFG Recruiting partners
              with high performing manufacturers across the Twin Cities and
              throughout Minnesota.
            </motion.p>
          </div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-8 space-y-6"
          >
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 text-white text-md md:text-xl"
            >
              We know how important communication is during your job
              search—that&#39;s why it&#39;s our top priority. We guarantee that
              you&#39;ll never be left in the dark, and we&#39;re committed to
              keeping you informed every step of the way. You can count on
              timely responses to your calls and emails—always.
            </motion.p>
            <p className="text-white/90 text-md md:text-lg">
              Send us your resume to begin your job search today!
            </p>
            <form className="flex gap-3 max-w-lg" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-white text-neutral-800 placeholder-neutral-500 focus:outline-none"
              />
              <Button text="Email your resume" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
