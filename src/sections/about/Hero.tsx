"use client";
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

  return (
    <section className="relative h-[95vh] overflow-hidden">
      <Image
        src="/about-hero.png"
        alt="Manufacturing floor"
        fill
        priority
        className="object-cover object-top"
        quality={100}
        sizes="100vw"
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-[6%]">
        <div className="max-w-3xl flex-col justify-between">
          <div>
            <span className="text-sm md:text-md bg-neutral-100/20 px-3 py-2 rounded-md font-semibold text-white">
              About Us
            </span>

            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 text-3xl md:text-5xl lg:text-7xl font-normal text-white tracking-tight"
            >
              What Sets Us Apart
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 text-white text-md md:text-xl"
            >
              We specialize in full-time, permanent placements and do not work
              on any contract or contract to hire positions. We recruit for
              mid-senior level individual contributor and leadership positions.
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
              We understand that an impressive interview does not always
              translate to a new hire being the right fit. That&#39;s why we
              provide a free replacement guarantee to all clients in the event a
              candidate doesn&#39;t work out.
            </motion.p>
            <Button text="Let’s work together" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
