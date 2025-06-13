import React from "react";
import Image from "next/image";

const Supercharge = () => {
  return (
    <section className="bg-[#202023] py-12 md:py-24 items-center px-4 md:px-[4%] lg:px-[5%] flex flex-col md:flex-row gap-16">
      <div className="flex flex-col items-center md:items-start flex-1">
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-center md:text-start font-pt-serif  tracking-tight text-neutral-100 font-medium">
          How We Supercharge Your Hiring Process
        </h2>
        <p className="text-neutral-100 mt-4 md:mt-8 text-md text-center md:text-start  leading-relaxed md:text-lg">
          Finding qualified talent requires industry expertise and a specialized
          approach. Our focus is on finding candidates who not only meet your
          technical needs but also align with your company culture and possess
          the soft skills needed to thrive in your environment. We make it a
          priority to visit your facility and to meet in person. This gives us a
          deeper understanding of your organization and allows us to present
          your opportunity more effectively.
        </p>
        <p className="text-neutral-100 mt-4 md:mt-8 text-md text-center md:text-start  leading-relaxed md:text-lg">
          Honesty, integrity, and transparency are the principles that guide
          everything we do.
        </p>
      </div>
      <div className="flex justify-end flex-1">
        <Image
          src="/hiring-3.jpg"
          alt="Manufacturing Hiring"
          className="rounded-lg object-cover"
          height={400}
          width={700}
        />
      </div>
    </section>
  );
};

export default Supercharge;
