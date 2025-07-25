import React from "react";

interface BenefitsCardProps {
  title: string;
  description: string;
}

export const BenefitsCard: React.FC<BenefitsCardProps> = ({
  title,
  description,
}) => (
  <div className="py-12 px-6 flex-1 bg-[#F7F7F7] rounded-xl flex flex-col items-center text-center">
    {/* {topContent && <>{topContent}</>} */}
    <h3 className="font-pt-serif text-2xl md:text-3xl tracking-tight">
      {title}
    </h3>
    <p className="mt-2 md:mt-3  md:max-w-[32ch] text-md md:text-lg text-neutral-600">
      {description}
    </p>
  </div>
);

const CandidateBenefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "Free for Candidates",
      description: "Job seekers never pay a fee.",
    },
    {
      id: 2,
      title: "Manufacturing Focus",
      description: "We recruit for manufactures so we speak your language.",
    },
    {
      id: 3,
      title: "Guaranteed Communication",
      description: "You’ll always receive timely updates and responses.",
    },
  ];

  return (
    <section className="px-4 md:px-[4%] lg:px-[5%] flex flex-col items-start pt-16 pb-8 bg-white">
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-start font-pt-serif tracking-tight text-neutral-800 font-medium">
        Why Job Seekers Rely on Us
      </h2>
      <div className="w-full grid grid-cols-1 mt-4 md:mt-8 md:grid-cols-3 gap-4">
        {benefits.map(({ id, title, description }) => (
          <BenefitsCard key={id} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default CandidateBenefits;
