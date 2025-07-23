"use client";
import Image from "next/image";
import { Button } from "@/components/Buttons";
import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    <section className="relative h-[95vh] overflow-hidden">
      <Image
        src="/hero-2.jpg"
        alt="Manufacturing floor"
        fill
        className="object-cover object-top"
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col justify-end pb-16 md:pb-0 md:justify-center h-full px-4 md:px-[4%] lg:px-[5%]">
        <div className="md:max-w-2xl flex-col justify-between">
          <div>
            <span className="text-sm md:text-md bg-neutral-100/20 px-3 py-2 rounded-md font-semibold text-white">
              Job Seekers
            </span>

            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 text-4xl md:text-5xl lg:text-7xl font-normal text-white font-pt-serif tracking-tight"
            >
              Looking for a career <br />
              <span className=" italic"> in manufacturing?</span>
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 text-white text-md md:text-lg"
            >
              If you&apos;re exploring new opportunities in manufacturing,
              you&apos;ve come to the right place. MN MFG Recruiting partners
              with high performing manufacturers across the Twin Cities and
              throughout Minnesota.
            </motion.p>
          </div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-4 space-y-6"
          >
            <Link href="contact">
              <Button text="Get in Touch" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
