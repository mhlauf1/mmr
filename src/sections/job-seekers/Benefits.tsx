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
    <h3 className="font-pt-serif text-2xl md:text-4xl tracking-tight">
      {title}
    </h3>
    <p className="mt-3 max-w-[28ch] md:max-w-[32ch] text-md md:text-lg text-neutral-500">
      {description}
    </p>
  </div>
);

const CandidateBenefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "100% Free to You",
      description:
        "Employers cover my fee; you never pay to find your next role.",
    },
    {
      id: 2,
      title: "Exclusive Manufacturing Focus",
      description:
        "I work only in manufacturing—so I speak your language and know the career paths.",
    },
    {
      id: 3,
      title: "Guaranteed Communication",
      description:
        "Never wonder “Where am I in the process?” You’ll get timely updates at every step.",
    },
  ];

  return (
    <section className="px-4 md:px-[6%] flex flex-col items-start pt-16 pb-0 bg-white">
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl md:max-w-[16ch] text-start tracking-tight text-neutral-800 font-medium leading-tight">
        Why Job Seekers <br />
        <span className="font-pt-serif text-4xl sm:text-[42px] md:text-[54px] tracking-tighter italic">
          {" "}
          Rely on MNMR
        </span>
      </h2>
      <p className="text-neutral-600 mt-4 text-md  text-start md:text-lg">
        Discover the benefits of partnering with a recruitment specialist who
        puts your career first.
      </p>
      <div className="w-full grid grid-cols-1 mt-8 md:grid-cols-3 gap-4">
        {benefits.map(({ id, title, description }) => (
          <BenefitsCard key={id} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default CandidateBenefits;
