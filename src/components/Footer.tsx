import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="bg-neutral-900 px-4 md:px-[6%] py-12">
    <div className="flex items-start lg:items-center gap-8 lg:gap-0 lg:flex-row flex-col-reverse justify-between w-full">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link href="/" className="flex lg:items-center gap-2">
          <Image
            src="/minnesota.svg"
            alt="Minnesota Manufacturing Recruiting"
            width={40}
            height={40}
            className="filter brightness-0 invert"
          />
          <div className="h-12 w-px bg-white" />
          <h3 className="ml-2 font-pt-serif text-white font-semibold text-sm leading-none">
            Minnesota <br /> Manufacturing <br /> Recruiting
          </h3>
        </Link>
      </div>

      {/* Center: Links */}
      <nav className="flex-1">
        <ul className="flex justify-center flex-col lg:flex-row gap-5 lg:gap-8 whitespace-nowrap">
          <li className=" text-sm text-white/70 hover:text-white">
            <Link href="/">Home</Link>
          </li>
          <li className=" text-sm text-white/70 hover:text-white">
            <Link href="/hiring-managers ">Hiring Managers</Link>
          </li>
          <li className=" text-sm text-white/70 hover:text-white">
            <Link href="/job-seekers">Job Seekers</Link>
          </li>
          <li className=" text-sm text-white/70 hover:text-white">
            <Link href="/about">About</Link>
          </li>
          <li className=" text-sm text-white/70 hover:text-white">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Right: LinkedIn */}
      <div className="flex-1 flex justify-end">
        <a
          target="_blank"
          href="https://www.linkedin.com/company/minnesota-manufacturing-recruiting/"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            size={28}
            className="text-white hover:text-white transition-colors duration-200"
          />
        </a>
      </div>
    </div>

    <div className="mt-6 border-t border-neutral-500 pt-5">
      <p className="text-start lg:text-center max-w-[54ch] leading-[1.5] md:max-w-none text-neutral-400 text-xs md:text-sm">
        &copy; Minnesota Manufacturing Recruiting, 2025. All rights reserved.
        Designed and developed by{" "}
        <a
          href="https://www.lauf.co"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-neutral-200"
        >
          Lauf.
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
