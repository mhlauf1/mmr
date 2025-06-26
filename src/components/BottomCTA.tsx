"use client";
import React, { useState } from "react";
import { Button, ButtonWhite } from "./Buttons";

const BottomCTA: React.FC = () => {
  const [seekerName, setSeekerName] = useState("");
  const [seekerEmail, setSeekerEmail] = useState("");
  const [seekerPhone, setSeekerPhone] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [employerName, setEmployerName] = useState("");
  const [employerCompany, setEmployerCompany] = useState("");
  const [employerEmail, setEmployerEmail] = useState("");
  const [additionalText, setAdditionalText] = useState("");

  const submitSeeker = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Seeker data:", {
      seekerName,
      seekerEmail,
      seekerPhone,
      resumeFile,
    });
  };

  const submitEmployer = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Employer inquiry:",
      employerName,
      employerCompany,
      employerEmail,
      additionalText
    );
  };

  return (
    <section className="md:my-12 md:p-8 md:px-[4%] lg:px-[5%] grid grid-cols-1 md:grid-cols-2 md:gap-4">
      {/* Right: Employer Form */}
      <div className="border border-neutral-200 p-6 md:p-8 bg-neutral-900 md:rounded-xl">
        <span className="inline-block text-sm bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-700 mb-8">
          Hiring Managers
        </span>
        <h2 className="text-neutral-100 text-3xl md:text-4xl lg:text-5xl leading-tight font-pt-serif tracking-tight mb-4">
          Find Top <span className="italic">Manufacturing Talent.</span>
        </h2>
        <form onSubmit={submitEmployer} className="space-y-4 mt-8">
          <input
            type="text"
            required
            placeholder="Name"
            value={employerName}
            onChange={(e) => setEmployerName(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
          />

          <input
            type="text"
            required
            placeholder="Company"
            value={employerCompany}
            onChange={(e) => setEmployerCompany(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={employerEmail}
            onChange={(e) => setEmployerEmail(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
          />
          <textarea
            required
            placeholder="How can we help?"
            value={additionalText}
            onChange={(e) => setAdditionalText(e.target.value)}
            className="w-full mb-8 px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
          />

          <ButtonWhite text="Get in Touch" />
        </form>
      </div>

      {/* Left: Job Seeker CTA */}
      <div className="flex flex-col justify-between p-6 md:p-8 bg-neutral-50 border border-neutral-200 md:rounded-xl">
        <div>
          <span className="inline-block text-sm bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-700 mb-8">
            Job Seekers
          </span>
          <h2 className="text-neutral-900 text-3xl md:text-4xl lg:text-5xl leading-tight font-pt-serif tracking-tight mb-4">
            Start Your <span className="italic">Job Search.</span>
          </h2>
          <p className="text-neutral-600 text-lg">
            Send your resume and we&apos;ll contact you to learn more about your
            job search.
          </p>
        </div>

        <form onSubmit={submitSeeker} className="space-y-4 mt-8">
          {/* Full Name */}
          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={seekerName}
              onChange={(e) => setSeekerName(e.target.value)}
              required
              className="w-full border border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@gmail.com"
              value={seekerEmail}
              onChange={(e) => setSeekerEmail(e.target.value)}
              required
              className="w-full border border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(123) 456-7890"
              value={seekerPhone}
              onChange={(e) => setSeekerPhone(e.target.value)}
              required
              className="w-full border border-neutral-200 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Optional Resume Upload */}
          <div>
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
              <span className="text-gray-500 italic">
                {resumeFile?.name ?? "No file chosen"}
              </span>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-4">
            <Button text="Email Resume" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default BottomCTA;
