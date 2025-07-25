"use client";
import React, { useState } from "react";
import { hiringTestimonialData } from "@/lib/data";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type TestimonialProps = {
  quote: string;
  position: string;
  prev: () => void;
  next: () => void;
  index: number;
  total: number;
};

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  position,
  prev,
  next,
  index,
  total,
}) => (
  <div className="md:bg-[#FCFCFC] md:border border-neutral-100 flex flex-col rounded-2xl md:px-[4%] lg:px-[5%] md:pb-6 pt-6 md:pt-10">
    {/* Animate only this block */}
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col flex-1"
      >
        <p className="text-neutral-700 font-pt-serif tracking-tight leading-[1.4] text-2xl md:text-3xl">
          &quot;{quote}&quot;
        </p>
        <div className="mt-6 flex flex-col text-neutral-700">
          <span className="md:text-lg font-medium">{position}</span>
        </div>
      </motion.div>
    </AnimatePresence>

    {/* Static controls at bottom */}
    <div className="mt-2 flex items-center justify-end gap-4">
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="p-2 rounded-full bg-white border border-neutral-200 hover:border-neutral-300 duration-300"
      >
        <ArrowLeft className="text-neutral-600" />
      </button>
      <span className="text-neutral-600 font-medium">
        {index + 1}/{total}
      </span>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="p-2 rounded-full bg-white border border-neutral-200 hover:border-neutral-300 duration-300"
      >
        <ArrowRight className="text-neutral-600" />
      </button>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const [index, setIndex] = useState(0);
  const total = hiringTestimonialData.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const { quote, position } = hiringTestimonialData[index];

  return (
    <section className="px-4 md:px-[4%] lg:px-[5%] bg-[#EEF5FD] py-12 md:py-24  flex flex-col md:flex-row ">
      <div className="flex flex-col items-start md:flex-1/3 w-full">
        <span className="text-sm md:text-md bg-white px-3 py-2 mb-4 rounded-md tracking-tight font-semibold text-neutral-600">
          Testimonials
        </span>
        <h2 className=" capitalize md:max-w-[15ch] text-center md:text-start leading-tight text-3xl md:text-4xl lg:text-5xl font-pt-serif tracking-tight">
          Job Seeker Testimonials
        </h2>
      </div>

      <div className="w-full md:flex-2/3">
        <Testimonial
          quote={quote}
          position={position}
          prev={prev}
          next={next}
          index={index}
          total={total}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
