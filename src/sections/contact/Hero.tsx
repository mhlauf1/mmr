"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Buttons";
import { FaPhoneAlt, FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  const [helpHiring, setHelpHiring] = useState(false);
  const [helpJob, setHelpJob] = useState(false);

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
    <div className="px-4 py-[15vh] md:px-[6%] md:flex md:space-x-12">
      {/* Left column */}
      <div className="md:w-1/2">
        {/* Top pill button */}
        <span className="text-sm md:text-md bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-600">
          Get in touch
        </span>
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl mb-4 font-normal mt-7 title-line-height md:text-5xl lg:text-7xl text-neutral-900 tracking-tight"
        >
          <span className="font-pt-serif tracking-tighter  italic">
            {" "}
            Contact Us
          </span>
        </motion.h1>
        {/* Contact details list */}
        <ul className="mt-6 space-y-3">
          <li className="flex flex-row items-center gap-2 md:gap-3">
            <FaMapPin size={20} />
            <span className="flex items-center md:text-lg text-md text-gray-700">
              710 N 4th Street, Minneapolis, MN 55401
            </span>
          </li>
          <li className="flex flex-row items-center gap-2 md:gap-3">
            <MdEmail size={20} />
            <span className="flex items-center md:text-lg text-md text-gray-700">
              Adam@MNmfgRecruiting.com
            </span>
          </li>
          <li className="flex flex-row items-center gap-2 md:gap-3">
            <FaPhoneAlt size={20} />
            <span className="flex items-center md:text-lg text-md text-gray-700">
              (612) 494-2350
            </span>
          </li>
        </ul>

        <hr className="my-8 border-gray-200" />

        {/* Form block */}
        <div className="bg-neutral-50 py-6 px-4 md:px-10 rounded-lg">
          <h2 className="text-lg font-semibold mb-4"></h2>
          <h2 className="mt-4 text-2xl  md:text-3xl text-start font-medium text-neutral-800 leading-tight tracking-tight">
            What Can We Help With?
          </h2>
          <div className="my-6 flex flex-col md:flex-row gap-x-4 gap-y-6">
            <label className="inline-flex  md:text-lg items-center">
              <input
                type="checkbox"
                checked={helpHiring}
                onChange={() => setHelpHiring(!helpHiring)}
                className=" border-neutral-200 size-6 accent-[#68C9FB] mr-2"
              />
              I need help hiring
            </label>
            <label className="inline-flex  md:text-lg items-center">
              <input
                type="checkbox"
                checked={helpJob}
                onChange={() => setHelpJob(!helpJob)}
                className="f border-neutral-200 size-6 accent-[#68C9FB] mr-2"
              />
              I am looking for a job
            </label>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-lg text-neutral-800 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="">
              <label className="block text-lg text-neutral-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border mb-4 bg-white border-neutral-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <Button text="Let's work together" />
          </form>
        </div>
      </div>

      {/* Right column: full-height image */}
      <div className="mt-8 md:mt-0 md:w-1/2 h-64 md:h-auto relative rounded-lg overflow-hidden">
        <Image
          src="/contact-bg.jpg" // <- swap for your real image path
          alt="Office workspace"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
