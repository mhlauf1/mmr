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
        src="/about-hero.jpg"
        alt="Manufacturing floor"
        fill
        className="object-cover object-top"
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col  justify-end pb-16 md:pb-0 md:justify-end h-full px-4 md:px-[4%] lg:px-[5%]">
        <div className=" flex-col md:h-[60vh] justify-between">
          <div>
            <span className="text-sm md:text-md bg-neutral-100/20 px-3 py-2 rounded-md font-semibold text-white">
              About Us
            </span>

            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 text-4xl md:text-5xl lg:text-7xl font-normal text-white font-pt-serif tracking-tight"
            >
              Minnesota Manufacturing Recruiting
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 md:max-w-2xl text-white text-md md:text-lg"
            >
              A Minneapolis based search firm providing direct hire placement
              services for manufacturers throughout the state. We recruit
              leaders and professional level talent, backed by a strong local
              network and a free replacement guarantee.
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
              className="mt-4 md:max-w-2xl text-white text-md md:text-lg"
            >
              Our focused, high-touch approach is why we&apos;re a trusted
              partner for many manufacturers in Minnesota.
            </motion.p>
            <Link href="/contact" className="w-full md:w-auto">
              <Button text="Let’s Work Together" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
