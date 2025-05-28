"use client";
import React, { useState } from "react";
import { Button, ButtonWhite } from "./Buttons";

const BottomCTA: React.FC = () => {
  const [seekerEmail, setSeekerEmail] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerCompany, setEmployerCompany] = useState("");
  const [employerEmail, setEmployerEmail] = useState("");

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
      employerEmail
    );
  };

  return (
    <section className="my-12 p-8 md:mx-[6%] grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Right: Employer Form */}
      <div className="border border-neutral-200 p-8 bg-neutral-900 rounded-xl">
        <span className="inline-block text-sm bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-700 mb-4">
          For Employees
        </span>
        <h2 className="text-neutral-100 text-4xl font-medium md:text-5xl leading-tight tracking-tight mb-4">
          Find Top{" "}
          <span className="font-pt-serif text-4xl sm:text-[42px] md:text-[54px] tracking-tighter italic">
            Manufacturing Talent.
          </span>
        </h2>
        <p className="text-neutral-200 text-lg mb-6">
          Tell me about your opening and I’ll deliver pre-vetted, mid- to
          senior-level candidates—backed by a free replacement guarantee.
        </p>
        <form onSubmit={submitEmployer} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Your name"
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
            className="w-full mb-8 md:mb-0 px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
          />

          <ButtonWhite text="Get in Touch" />
        </form>
      </div>
      {/* Left: Job Seeker CTA */}
      <div className="flex flex-col justify-between  p-8 bg-neutral-50 border border-neutral-200 rounded-xl">
        <div>
          <span className="inline-block text-sm bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-700 mb-4">
            For Job Seekers
          </span>
          <h2 className="text-neutral-900 text-4xl font-medium md:text-5xl leading-tight tracking-tight mb-4">
            Start Your
            <span className="font-pt-serif text-4xl sm:text-[42px] md:text-[54px] tracking-tighter italic">
              {" "}
              Job Search.
            </span>
          </h2>
          <p className="text-neutral-600 text-lg">
            Send your resume and I’ll match you to mid- and senior-level roles
            across Minnesota—entirely free to you.
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
              className="flex-1 mb-2 md:mb-0 px-4 py-3 border border-neutral-200 bg-white rounded-md focus:outline-none"
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
