import React from "react";
import Hero from "@/sections/job-seekers/Hero";
import Opportunities from "@/sections/job-seekers/Opportunities";
import HowItWorks from "@/sections/job-seekers/HowItWorks";
import CandidateBenefits from "@/sections/job-seekers/Benefits";
import BottomCTA from "@/components/BottomCTA";

const page = () => {
  return (
    <main>
      <Hero />
      <Opportunities />
      <HowItWorks />
      <CandidateBenefits />
      <BottomCTA />
    </main>
  );
};

export default page;
