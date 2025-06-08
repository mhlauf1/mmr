import React from "react";
import { Button } from "@/components/Buttons";

const CTA = () => {
  return (
    <section className="bg-[#111111] relative h-[60vh] py-16 md:py-0 md:h-[65vh]">
      <div className="px-4 md:px-[4%] lg:px-[5%] h-full justify-center py-8 items-center flex flex-col">
        <div className="flex flex-col md:mt-auto  items-center">
          <h2 className=" text-4xl md:text-5xl max-w-[15ch] md:max-w-xl text-white lg:text-6xl font-medium tracking-tight text-center">
            Find the perfect hire for
            <span className="font-pt-serif tracking-tighter italic">
              {" "}
              Your{" "}
            </span>
            needs.
          </h2>
          <p className="text-center text-lg md:text-xl md:max-w-2xl mt-6 mb-12 md:mb-8 text-neutral-300">
            Providing direct hire placement services for Minnesota
            manufacturers. Delivering top-tier talent, backed by our free
            replacement guarantee.
          </p>
          <Button text="Get started today" />
        </div>
        <div className="hidden md:flex text-white mt-auto flex-row items-center gap-4">
          <span>Leadership placements</span>
          <div className="h-[4px] w-[4px] bg-neutral-200 rounded-full"></div>
          <span>Professional level placements</span>
          <div className="h-[4px] w-[4px] bg-neutral-200 rounded-full"></div>
          <span>Local candidate network</span>
        </div>
      </div>

      {/* speech blurbs */}
      {/* blurb 1 */}
      {/* <div className="absolute top-[8%] left-[15%]">
        <div className="flex flex-row gap-1 items-center">
          <div className="bg-neutral-100 text-sm text-neutral-900 font-medium rounded-full py-2 px-4">
            I had 4 interviews in my first month using MMR!
          </div>
          <Image
            className="rounded-full border-2 border-white"
            src="/cta-person-1.png"
            width={48}
            height={48}
            alt="CTA Text Image"
          />
        </div>
      </div> */}
      {/* blurb 2 */}
      {/* <div className="absolute bottom-[15%] right-[5%]">
        <div className="flex flex-row gap-1 items-center">
          <Image
            className="rounded-full border-2 border-white"
            src="/cta-person-1.png"
            width={48}
            height={48}
            alt="CTA Text Image"
          />
          <div className="bg-neutral-100 text-sm text-neutral-900  font-medium rounded-full py-2 px-4">
            I can focus on my company and don&#39;t need to stress about top
            talent
          </div>
        </div>
      </div> */}
      {/* blurb 3 */}
      {/* <div className="absolute top-[10%] right-[12%]">
        <div className="flex flex-row gap-1 items-center">
          <Image
            className="rounded-full border-2 border-white"
            src="/cta-person-1.png"
            width={48}
            height={48}
            alt="CTA Text Image"
          />
          <div className="bg-neutral-100 text-sm text-neutral-900  font-medium rounded-full py-2 px-4">
            Best way to find top talent in today&#39;s market{" "}
          </div>
        </div>
      </div> */}

      {/* blurb 5 */}
      {/* <div className="absolute bottom-[18%] left-[10%]">
        <div className="flex flex-row gap-1 items-center">
          <Image
            className="rounded-full border-2 border-white"
            src="/cta-person-1.png"
            width={48}
            height={48}
            alt="CTA Text Image"
          />
          <div className="bg-neutral-100 text-sm text-neutral-900 font-medium rounded-full py-2 px-4">
            I found a manufacturing job in 2 weeks!
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default CTA;
