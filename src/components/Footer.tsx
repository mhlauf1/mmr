import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col px-4 items-center justify-center md:pt-16 py-12 md:pb-16 md:gap-8 gap-6 bg-neutral-900">
      <Link className="hidden md:block" href="/">
        <div className="h-auto text-white font-medium">
          MN Manufacturing Recruiting
        </div>
      </Link>
      <ul className="flex md:mb-12 text-base lg:mb-0 flex-col lg:flex-row items-center gap-5 lg:gap-12 mr-[-12px] text-white/70 hovert:text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">For Job Seekers</Link>
        </li>
        <li>
          <Link href="/how-it-works">For Employers</Link>
        </li>
        <li>
          <Link href="/benefits">About</Link>
        </li>
        <li>
          <Link href="/services">Contact</Link>
        </li>
      </ul>

      <div className="flex flex-col items-center gap-2">
        <p className="text-neutral-300  text-xs md:text-sm  text-center md:text-left">
          &copy; Minnesota Manufacturing Recruiting, 2025. All rights reserved.
        </p>
        <p className="text-neutral-300  text-xs md:text-sm  text-center md:text-left">
          Designed and developed by{" "}
          <a
            href="https://www.lauf.co"
            target="_blank"
            className="font-semibold"
          >
            Lauf.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
