import React from "react";
import Hero from "@/sections/about/Hero";
import Testimonials from "@/components/Testimonials";
import BottomCTA from "@/components/BottomCTA";
import AboutUs from "@/sections/about/AboutUs";
import Core from "@/sections/about/Core";

const page = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Core />
      <Testimonials />
      <BottomCTA />
    </main>
  );
};

export default page;
