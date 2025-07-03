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

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const handleOptionChange = (option: "hiring" | "job") => {
    setHelpHiring(option === "hiring");
    setHelpJob(option === "job");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!helpHiring && !helpJob) {
      return alert(
        "Please select whether you need help hiring or looking for a job."
      );
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("helpHiring", String(helpHiring));
      formData.append("helpJob", String(helpJob));
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber);
      formData.append("extraText", extraText);
      if (resumeFile) {
        formData.append("resume", resumeFile, resumeFile.name);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`Error ${res.status}`);
      setSuccess(true);
      setHelpHiring(false);
      setHelpJob(false);
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setExtraText("");
      setResumeFile(null);
    } catch (err) {
      console.error(err);
      alert("Oops! Something went wrong.");
    } finally {
      setSubmitting(false);
    }
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

        {success && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
            Thanks for reaching out! We’ll be in touch soon.
          </div>
        )}

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
          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              What can we help with?
            </label>
            <textarea
              placeholder="I need help recruiting..."
              required
              value={extraText}
              onChange={(e) => setExtraText(e.target.value)}
              className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-neutral-700 text-sm mb-1">
              Optional: Upload Your Resume (PDF or DOCX)
            </label>
            <div className="flex items-center space-x-4">
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                className="hidden"
              />
              <label
                htmlFor="resume-upload"
                className="inline-block bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-sm px-4 py-2 rounded-md cursor-pointer transition duration-150"
              >
                Choose File
              </label>
              <span className="text-gray-500 italic">
                {resumeFile?.name ?? "No file chosen"}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <Button text={submitting ? "Submitting…" : "Let's Work Together"} />
          </div>
        </form>
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
