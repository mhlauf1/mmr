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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [extraText, setExtraText] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

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
    console.log({
      helpHiring,
      helpJob,
      fullName,
      email,
      phoneNumber,
      extraText,
      resumeFile,
    });
  };

  return (
    <div className="px-4 py-[15vh] pb-[7vh]  md:px-[6%] md:flex md:space-x-12">
      {/* Left column */}
      <div className="md:w-1/2">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl mb-4 font-normal mt-6 title-line-height md:text-5xl text-neutral-900 tracking-tight"
        >
          <span className="font-pt-serif tracking-tight italic">
            What Can We Help With?
          </span>
        </motion.h1>
        <hr className="my-6 border-gray-200" />
        <div>
          <div className="my-4 flex flex-row gap-x-6 gap-y-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={helpHiring}
                onChange={() => handleOptionChange("hiring")}
                className="accent-[#68C9FB] rounded-md size-5 md:size-4 mr-2"
              />
              I need help hiring
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={helpJob}
                onChange={() => handleOptionChange("job")}
                className="accent-[#68C9FB] rounded-md  size-5 md:size-4 mr-2"
              />
              I am looking for a job
            </label>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mt-8">
              <label className="block text-neutral-700 text-sm mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-neutral-700 text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-neutral-700 text-sm mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="(123) 456-7890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-neutral-700 text-sm mb-1">
                What can we help with?
              </label>
              <textarea
                placeholder="I need help recruiting..."
                value={extraText}
                onChange={(e) => setExtraText(e.target.value)}
                required
                className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label className="block text-neutral-700 text-sm mb-1">
                Optional: Upload Your Resume (PDF or DOCX)
              </label>
              <div className="flex items-center space-x-4">
                {/* hidden native input */}
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
                {/* styled label as button */}
                <label
                  htmlFor="resume-upload"
                  className="
            inline-block
        bg-white
                  hover:bg-neutral-50
                  text-neutral-800
                  border
                  border-neutral-300
                  text-sm
            px-4 
            py-2 
            rounded-md 
            cursor-pointer
            transition
            duration-150
          "
                >
                  Choose File
                </label>
                {/* filename display */}
                <span className="text-gray-500 italic">
                  {resumeFile?.name ?? "No file chosen"}
                </span>
              </div>
            </div>
            <div className="mt-8">
              <Button text="Let's Work Together" />
            </div>
          </form>
        </div>
      </div>

      {/* Right column: contact info + image */}
      <div className="md:w-1/2 flex flex-col">
        <hr className="mt-6 border-gray-200 flex md:hidden" />

        <ul className="mt-6 text-sm space-y-3">
          <li className="flex items-center gap-3">
            <FaPhoneAlt size={16} />
            <span className="text-neutral-600">(612) 494-2350</span>
          </li>
          <li className="flex items-center gap-3">
            <MdEmail size={16} />
            <span className="text-neutral-600">Adam@MNmfgRecruiting.com</span>
          </li>
          <li className="flex items-center gap-3">
            <FaMapPin size={16} />
            <span className="text-neutral-600">
              710 N 4th Street, Minneapolis, MN 55401
            </span>
          </li>
        </ul>
        <div className="mt-8 hidden md:flex flex-1 relative rounded-lg overflow-hidden h-64 md:h-auto">
          <Image
            src="/contact-bg.jpg"
            alt="Office workspace"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
