import Testimonials from "@/components/Testimonials";
import Hero from "@/sections/home/Hero";
import BottomCTA from "@/components/BottomCTA";
import CTA from "@/sections/home/CTA";
import FAQ from "@/sections/home/FAQ";
import JobSeekers from "@/sections/home/JobSeekers";
import HiringManagers from "@/sections/home/HiringManagers";
import AdamQuote from "@/sections/home/AdamQuote";

export default function Home() {
  return (
    <main>
      <Hero />
      <HiringManagers />
      <JobSeekers />
      <AdamQuote />
      <div id="testimonials">
        <Testimonials />
      </div>
      <CTA />
      <FAQ />
      <BottomCTA />
    </main>
  );
}
