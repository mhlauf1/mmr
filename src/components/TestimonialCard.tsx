import React from "react";

const TestimonialCard = ({
  quote,
  position,
  company,
}: {
  quote: string;
  position: string;
  company: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-8 bg-[#232323] rounded-lg p-8">
      <h3 className="text-white text-xl md:text-2xl font-medium">{quote}</h3>
      <div className="flex flex-row gap-2 items-center">
        <h4 className="text-neutral-300 font-medium tracking-tight">
          {position},
        </h4>
        <p className="text-neutral-300 font-medium tracking-tight">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
