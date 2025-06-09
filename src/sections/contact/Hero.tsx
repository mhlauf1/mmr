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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

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

  const handleOptionChange = (option: "hiring" | "job") => {
    if (option === "hiring") {
      setHelpHiring(true);
      setHelpJob(false);
    } else {
      setHelpJob(true);
      setHelpHiring(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!helpHiring && !helpJob) {
      alert("Please select whether you need help hiring or looking for a job.");
      return;
    }
    // All inputs are required via their required attributes
    // TODO: wire up submission (e.g., send to API)
    console.log({ helpHiring, helpJob, fullName, email });
  };

  return (
    <div className="px-4 py-[15vh] md:px-[6%] md:flex md:space-x-12">
      {/* Left column */}
      <div className="md:w-1/2">
        <span className="text-sm md:text-md bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-600">
          Get in touch
        </span>
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl mb-4 font-normal mt-6 title-line-height md:text-5xl text-neutral-900 tracking-tight"
        >
          <span className="font-pt-serif tracking-tight italic">
            Contact Us
          </span>
        </motion.h1>

        <ul className="mt-6 space-y-3">
          <li className="flex items-center gap-3">
            <FaMapPin size={20} />
            <span className="text-neutral-600">
              710 N 4th Street, Minneapolis, MN 55401
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MdEmail size={20} />
            <span className="text-neutral-600">Adam@MNmfgRecruiting.com</span>
          </li>
          <li className="flex items-center gap-3">
            <FaPhoneAlt size={20} />
            <span className="text-neutral-600">(612) 494-2350</span>
          </li>
        </ul>

        <hr className="my-8 border-gray-200" />

        <div>
          <h2 className="mt-4 text-lg md:text-xl font-medium text-neutral-700 leading-tight tracking-tight">
            What Can We Help With?
          </h2>
          <div className="my-4 flex flex-col md:flex-row gap-x-4 gap-y-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={helpHiring}
                onChange={() => handleOptionChange("hiring")}
                className="accent-[#68C9FB] size-4 mr-2"
              />
              I need help hiring
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={helpJob}
                onChange={() => handleOptionChange("job")}
                className="accent-[#68C9FB] size-4 mr-2"
              />
              I am looking for a job
            </label>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-neutral-500 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full border border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-neutral-500 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="mt-8">
              <Button text="Let's work together" />
            </div>
          </form>
        </div>
      </div>

      {/* Right column: full-height image */}
      <div className="mt-8 md:mt-0 md:w-1/2 h-64 md:h-auto relative rounded-lg overflow-hidden">
        <Image
          src="/contact-bg.jpg"
          alt="Office workspace"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
