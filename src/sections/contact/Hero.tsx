"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Buttons";
import { FaPhoneAlt, FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [helpHiring, setHelpHiring] = useState(true);
  const [helpJob, setHelpJob] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [extraText, setExtraText] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  // Formspree hook
  const [state, handleSubmit] = useForm("xanbebqo");
  const submitting = state.submitting;
  const success = state.succeeded;

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
    setFormError(null);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!helpHiring && !helpJob) {
      setFormError(
        "Please select either “I need help hiring” or “I am looking for a job.”"
      );
      return;
    }
    handleSubmit(e);
  };

  return (
    <div className="px-4 py-[12vh] md:py-[15vh] md:min-h-[90vh] md:pb-[7vh] md:px-[6%] md:flex md:space-x-12">
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
            Thanks for reaching out! We&apos;ll be in touch soon.
          </div>
        )}

        <div className="my-4 flex flex-row gap-x-6 gap-y-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="contactType"
              checked={helpHiring}
              onChange={() => handleOptionChange("hiring")}
              className="accent-[#68C9FB] rounded-full size-5 md:size-6 mr-2"
            />
            I need help hiring
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="contactType"
              checked={helpJob}
              onChange={() => handleOptionChange("job")}
              className="accent-[#68C9FB] rounded-full md:size-6 size-5 mr-2"
            />
            I am looking for a job
          </label>
        </div>

        {formError && <p className="text-red-600 text-sm mb-4">{formError}</p>}

        {(helpHiring || helpJob) && (
          <form onSubmit={onSubmit} className="space-y-4">
            {/* honeypot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            {/* hidden fields */}
            <input type="hidden" name="helpHiring" value={String(helpHiring)} />
            <input type="hidden" name="helpJob" value={String(helpJob)} />

            <div>
              <label className="block text-neutral-700 text-sm mb-1">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                placeholder="Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <ValidationError
                prefix="Full Name"
                field="fullName"
                errors={state.errors}
              />
            </div>

            <div>
              <label className="block text-neutral-700 text-sm mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="email@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label className="block text-neutral-700 text-sm mb-1">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="tel"
                placeholder="(123) 456-7890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <ValidationError
                prefix="Phone Number"
                field="phoneNumber"
                errors={state.errors}
              />
            </div>

            {helpHiring && (
              <div>
                <label className="block text-neutral-700 text-sm mb-1">
                  Company
                </label>
                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <ValidationError
                  prefix="Company"
                  field="company"
                  errors={state.errors}
                />
              </div>
            )}

            {helpJob && (
              <div>
                <label className="block text-neutral-700 text-sm mb-1">
                  Position
                </label>
                <input
                  name="position"
                  required
                  type="text"
                  placeholder="Position you're seeking"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <ValidationError
                  prefix="Position"
                  field="position"
                  errors={state.errors}
                />
              </div>
            )}

            <div>
              <label className="block text-neutral-700 text-sm mb-1">
                What can we help with?
              </label>
              <textarea
                name="extraText"
                placeholder={
                  helpHiring
                    ? "I need help recruiting..."
                    : "Let us know how we can assist you..."
                }
                required
                value={extraText}
                onChange={(e) => setExtraText(e.target.value)}
                className="w-full border text-sm border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <ValidationError
                prefix="Message"
                field="extraText"
                errors={state.errors}
              />
            </div>

            <div className="mt-8">
              <Button
                text={submitting ? "Submitting…" : "Let’s Work Together"}
              />
            </div>
          </form>
        )}
      </div>

      {/* Right column */}
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
