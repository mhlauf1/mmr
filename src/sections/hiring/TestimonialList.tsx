import React from "react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonialData = [
  {
    id: 0,
    quote:
      "We’ve had the pleasure of working with Minnesota Manufacturing Recruiting since 2022, and their services have truly made a positive impact on our business. From the beginning, Adam Mott has been incredibly responsive, professional, and dedicated to understanding our specific needs. What sets Minnesota Manufacturing Recruiting apart is their recruiting services, which has helped us hire several hard-to-fill positions with very qualified candidates. Their commitment to delivering top-notch solutions and their seamless support has made them an invaluable partner for us. I highly recommend Minnesota Manufacturing Recruiting to any organization looking for recruiting talent. We look forward to continuing our successful partnership!",
    position: "Director of Human Resources",
    comapny: "Industrial Automation Manufacturing",
  },
  {
    id: 1,
    quote:
      "Minnesota Manufacturing Recruiting was an excellent choice as our retained search partner. Adam took the time to thoroughly understand our requirements, and he was fantastic to work with throughout the hiring process. Minnesota Manufacturing Recruiting found us a top tier financially focused manufacturing leader who has and will continue to play a key role in our future growth.",
    position: "Executive Vice President",
    comapny: "Sheet Metal Contract Manufacturer",
  },
];

const TestimonialList = () => {
  return (
    <section className="py-16 px-[5%] flex flex-row gap-8">
      {testimonialData.map((item) => (
        <div className="flex flex-1" key={item.id}>
          <TestimonialCard
            position={item.position}
            company={item.comapny}
            quote={item.quote}
          />
        </div>
      ))}
    </section>
  );
};

export default TestimonialList;
