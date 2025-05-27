import React from "react";
import Hero from "@/sections/hiring/Hero";
import ServicesBento from "@/sections/hiring/ServicesBento";
import Supercharge from "@/sections/hiring/Supercharge";
import Testimonials from "@/components/Testimonials";
import BottomCTA from "@/components/BottomCTA";

const page = () => {
  return (
    <main>
      <Hero />
      <ServicesBento />
      <Supercharge />
      <Testimonials />
      <BottomCTA />
    </main>
  );
};

export default page;
