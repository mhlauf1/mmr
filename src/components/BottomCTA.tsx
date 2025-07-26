"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, ButtonWhite } from "./Buttons";

const BottomCTA: React.FC = () => {
  // --- Job Seeker Formspree hook ---
  const [seekerState, handleSeekerSubmit] = useForm("xanbebqo");
  const seekerSubmitting = seekerState.submitting;
  const seekerSucceeded = seekerState.succeeded;

  // --- Hiring Manager Formspree hook ---
  const [employerState, handleEmployerSubmit] = useForm("xanbebqo");
  const employerSubmitting = employerState.submitting;
  const employerSucceeded = employerState.succeeded;

  // --- Job seeker state ---
  const [seekerName, setSeekerName] = useState("");
  const [seekerEmail, setSeekerEmail] = useState("");
  const [seekerPosition, setSeekerPosition] = useState("");
  const [seekerPhone, setSeekerPhone] = useState("");
  const [seekerMessage, setSeekerMessage] = useState("");

  // --- Hiring manager state ---
  const [employerName, setEmployerName] = useState("");
  const [employerCompany, setEmployerCompany] = useState("");
  const [employerEmail, setEmployerEmail] = useState("");
  const [employerPhone, setEmployerPhone] = useState("");
  const [employerMessage, setEmployerMessage] = useState("");

  return (
    <section className="md:my-12 md:p-8 md:px-[4%] lg:px-[5%] grid grid-cols-1 md:grid-cols-2 md:gap-4">
      {/* Hiring Managers */}
      <div className="border border-neutral-200 p-6 md:p-8 bg-neutral-900 md:rounded-xl">
        <span className="inline-block text-sm bg-neutral-100 px-3 py-2 rounded-md font-semibold text-neutral-700 mb-8">
          Hiring Managers
        </span>
        <h2 className="text-neutral-100 text-3xl  lg:text-[3vw] leading-tight font-pt-serif tracking-tight mb-4">
          Find <span className="italic">Manufacturing Talent.</span>
        </h2>

        {employerSucceeded && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
            Thanks for reaching out! We’ll be in touch soon.
          </div>
        )}

        <form onSubmit={handleEmployerSubmit} className="space-y-4 mt-6">
          {/* honeypot */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <div>
            <label className="block text-neutral-300 text-sm mb-1">
              Full Name
            </label>
            <input
              name="employerName"
              type="text"
              placeholder="Name"
              required
              value={employerName}
              onChange={(e) => setEmployerName(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
            />
            <ValidationError
              prefix="Name"
              field="employerName"
              errors={employerState.errors}
            />
          </div>

          <div>
            <label className="block text-neutral-300 text-sm mb-1">Email</label>
            <input
              name="employerEmail"
              type="email"
              placeholder="Email"
              required
              value={employerEmail}
              onChange={(e) => setEmployerEmail(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
            />
            <ValidationError
              prefix="Email"
              field="employerEmail"
              errors={employerState.errors}
            />
          </div>
          <div>
            <label className="block text-neutral-300 text-sm mb-1">
              Company
            </label>
            <input
              name="employerCompany"
              type="text"
              placeholder="Company"
              required
              value={employerCompany}
              onChange={(e) => setEmployerCompany(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
            />
            <ValidationError
              prefix="Company"
              field="employerCompany"
              errors={employerState.errors}
            />
          </div>

          <div>
            <label className="block text-neutral-300 text-sm mb-1">
              Phone Number
            </label>

            <input
              name="employerPhone"
              type="tel"
              placeholder="(123) 456-7890"
              required
              value={employerPhone}
              onChange={(e) => setEmployerPhone(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
            />
            <ValidationError
              prefix="Phone"
              field="employerPhone"
              errors={employerState.errors}
            />
          </div>

          <div>
            <label className="block text-neutral-300 text-sm mb-1">
              How can we help?
            </label>
            <textarea
              name="employerMessage"
              placeholder="Let us know..."
              required
              value={employerMessage}
              onChange={(e) => setEmployerMessage(e.target.value)}
              className="w-full mb-8 px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
            />
            <ValidationError
              prefix="Message"
              field="employerMessage"
              errors={employerState.errors}
            />
          </div>

          <ButtonWhite
            text={employerSubmitting ? "Submitting…" : "Get in Touch"}
          />
        </form>
      </div>
      {/* Job Seekers */}
      <div className="flex flex-col h-auto p-6 md:p-8 bg-neutral-50 border border-neutral-200 md:rounded-xl">
        <div>
          <span className="inline-block text-sm bg-neutral-100 px-3 py-3 rounded-md font-semibold text-neutral-700 mb-6">
            Job Seekers
          </span>
          <h2 className="text-neutral-900 text-3xl  lg:text-[3vw] leading-tight font-pt-serif tracking-tight">
            Start Your <span className="italic">Job Search.</span>
          </h2>
          {seekerSucceeded && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              Thanks for reaching out! We&apos;ll be in touch soon.
            </div>
          )}
        </div>
        <form onSubmit={handleSeekerSubmit} className="space-y-4 mt-6">
          {/* honeypot */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              Full Name
            </label>
            <input
              name="seekerName"
              type="text"
              placeholder="Name"
              required
              value={seekerName}
              onChange={(e) => setSeekerName(e.target.value)}
              className="w-full border border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <ValidationError
              prefix="Name"
              field="seekerName"
              errors={seekerState.errors}
            />
          </div>

          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              Email Address
            </label>
            <input
              name="seekerEmail"
              type="email"
              placeholder="Email"
              required
              value={seekerEmail}
              onChange={(e) => setSeekerEmail(e.target.value)}
              className="w-full border border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <ValidationError
              prefix="Email"
              field="seekerEmail"
              errors={seekerState.errors}
            />
          </div>
          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              Position
            </label>
            <input
              name="seekerPosition"
              type="text"
              placeholder="Position you're seeking"
              required
              value={seekerPosition}
              onChange={(e) => setSeekerPosition(e.target.value)}
              className="w-full border border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <ValidationError
              prefix="Position"
              field="seekerPosition"
              errors={seekerState.errors}
            />
          </div>

          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              Phone Number
            </label>
            <input
              name="seekerPhone"
              type="tel"
              placeholder="(123) 456-7890"
              required
              value={seekerPhone}
              onChange={(e) => setSeekerPhone(e.target.value)}
              className="w-full border border-neutral-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <ValidationError
              prefix="Phone"
              field="seekerPhone"
              errors={seekerState.errors}
            />
          </div>

          <div>
            <label className="block text-neutral-700 text-sm mb-1">
              How can we help?
            </label>
            <textarea
              name="seekerMessage"
              placeholder="Let us know..."
              required
              value={seekerMessage}
              onChange={(e) => setSeekerMessage(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 bg-white rounded-md focus:outline-none"
            />
            <ValidationError
              prefix="Message"
              field="seekerMessage"
              errors={seekerState.errors}
            />
          </div>

          <div className="mt-8">
            <Button text={seekerSubmitting ? "Submitting…" : "Get in Touch"} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default BottomCTA;
