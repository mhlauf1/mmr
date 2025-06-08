"use client";
import React, { useState } from "react";
import { Button, ButtonWhite } from "./Buttons";

const BottomCTA: React.FC = () => {
  const [seekerEmail, setSeekerEmail] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerCompany, setEmployerCompany] = useState("");
  const [employerEmail, setEmployerEmail] = useState("");
  const [additionalText, setAdditionalText] = useState("");

  const submitSeeker = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Seeker resume request:", seekerEmail);
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
    <section className=" mt-8 md:mt-0 md:my-12 md:p-8 md:px-[4%] lg:px-[5%] grid grid-cols-1 md:grid-cols-2 md:gap-4">
      {/* Right: Employer Form */}
      <div className="border border-neutral-200 p-8 bg-neutral-900 md:rounded-xl">
        <span className="inline-block text-sm bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-700 mb-4">
          Hiring Managers
        </span>
        <h2 className="text-neutral-100  text-3xl md:text-4xl lg:text-5xl  leading-tight tracking-tight mb-4">
          Find Top{" "}
          <span className="font-pt-serif  tracking-tight italic">
            Manufacturing Talent.
          </span>
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
            className="w-full mb-8 md:mb-8 px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
          />

          <ButtonWhite text="Get in Touch" />
        </form>
      </div>
      {/* Left: Job Seeker CTA */}
      <div className="flex flex-col justify-between  p-8 bg-neutral-50 border border-neutral-200 md:rounded-xl">
        <div>
          <span className="inline-block text-sm bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-700 mb-4">
            Job Seekers
          </span>
          <h2 className="text-neutral-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            Start Your
            <span className="font-pt-serif ] tracking-tight italic">
              {" "}
              Job Search.
            </span>
          </h2>
          <p className="text-neutral-600 text-lg">
            Send your resume and we&apos;ll contact you to learn more about your
            job search.
          </p>
        </div>

        <div className="mt-8 flex flex-col w-full">
          <form onSubmit={submitSeeker} className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="Your email"
              value={seekerEmail}
              onChange={(e) => setSeekerEmail(e.target.value)}
              className="flex-1 mb-2 md:mb-4 px-4 py-3 border border-neutral-200 bg-white rounded-md focus:outline-none"
            />
            <div>
              <Button text="Email Resume" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
