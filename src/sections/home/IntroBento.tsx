import React from "react";
import Image from "next/image";
import { Button } from "@/components/Buttons";
import Link from "next/link";

const IntroBento = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-28 py-16 md:py-28 flex flex-col">
      <h2 className="text-3xl mb-2 md:mb-4 max-w-[18ch] capitalize font-medium title-line-height sm:text-4xl md:text-5xl   tracking-tight">
        Delivering growth for companies and careers
      </h2>
      <div className="flex flex-col md:flex-row mt-2 flex-1 gap-4">
        <div className="flex flex-1 flex-col items-start px-12 py-12 bg-[#F7F7F7] rounded-xl">
          <span className="font-semibold text-[#6995F3] text-sm">
            For Employers
          </span>
          <h2 className="mt-4 text-3xl">
            Need Technical Expertise for Your Team?
          </h2>
          <p className="text-neutral-700 md:text-lg mb-6 md:max-w-[48ch] mt-4">
            Skip the job boards and receive highly qualified candidates directly
            to your inbox with the industry expertise you need
          </p>

          <Link href="/" className="">
            <Button text="Learn More" />
          </Link>
          <div className="w-full mt-8">
            <Image
              src="/employeers-home.png"
              alt="For Employees"
              width={600} // replace with your image's intrinsic width
              height={700} // replace with your image's intrinsic height
              className="max-w-full h-auto max-h-[500px] object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start px-12 py-12 bg-[#F7F7F7] rounded-xl">
          <h2 className="mt-4 text-3xl">
            Want to work for Minnesota&#39;s top Manufacturers?
          </h2>

          <p className="text-neutral-600 mb-6 w-[90%] mt-4">
            Instead of having to complete another job application form, please
            just email your resume to the Principal Recruiter, Adam Mott at
            adam@mnmfgrecruiting.com. He will reach out ASAP to discuss next
            steps.
          </p>
          <Link href="/" className="">
            <Button text="For Job Seekers" />
          </Link>
          <div className="w-full mt-8">
            <Image
              src="/job-seekers-home.png"
              alt="For Job Seekers"
              width={700} // replace with your image's intrinsic width
              height={600} // replace with your image's intrinsic height
              className="max-w-full  max-h-[500px] h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex text-white relative mt-2 flex-1 flex-col items-start pl-4 md:pl-[7%] pr-4 md:pr-[5%] pt-16 pb-8 bg-[#6995F3] rounded-lg">
        <div className="mb-4">
          <h3
            style={{ lineHeight: 1.4 }}
            className="text-2xl sm:text-3xl md:max-w-[58ch] md:text-4xl tracking-tight font-medium "
          >
            “We find highly qualified candidates for your positions that are
            most difficult to fill. Our goal is to find the right long-term fit
            for your company and to provide a great experience for you and the
            candidate”
          </h3>
        </div>
        <div className="flex w-[90%] flex-row justify-between items-end">
          <div className="flex flex-row items-end gap-3">
            <p className="text-white font-semibold">
              Minnesota Manufacturing Recruiting
            </p>
          </div>
          <div className="">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
              Adam Mott
            </h3>
            <p className="text-white/90">Founder & Principal Recruiter</p>
          </div>
          {/* <Image src="/mmr-white-logo.png" width={150} height={70} alt="Logo" /> */}
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/adam-main.png"
            height={184}
            width={184}
            alt="Adam Mott"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroBento;
