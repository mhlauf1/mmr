import React from "react";
import Image from "next/image";

const Supercharge = () => {
  return (
    <section className="bg-[#202023] py-12 md:py-24 items-center px-[5%] flex flex-col md:flex-row gap-16">
      <div className="flex flex-col items-start flex-1">
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-center md:text-start md:max-w-[18ch] tracking-tight text-neutral-100 font-medium leading-tight">
          How We Supercharge <br />{" "}
          <span className="font-pt-serif text-4xl sm:text-[42px] md:text-[54px] tracking-tighter italic">
            Your Manufacturing Hiring
          </span>
        </h2>
        <p className="text-neutral-200 mt-8 text-md text-center md:text-start md:text-lg">
          In today&#39;s candidate-driven market, finding qualified
          manufacturing talent requires industry expertise and a specialized
          approach. As Minnesota&#39;s only recruitment firm focused exclusively
          on manufacturing, we bring the domain knowledge and professional
          network to help you succeed.
        </p>
        <p className="text-neutral-200 mt-8 text-center md:text-start text-md md:text-lg">
          We bring honesty, integrity, and transparency to every client and
          candidate that we work with.
        </p>
      </div>
      <div className="flex justify-end flex-1">
        <Image
          src="/job-seekers-hero.jpg"
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
