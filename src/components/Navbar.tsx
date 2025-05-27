"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Hiring Managers", href: "/hiring-managers" },
  { label: "Job Seekers", href: "/job-seekers" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || "/job-seekers";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return; // only track scroll on homepage
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // on homepage & at top → transparent/white; otherwise → white background + dark
  const isTransparent = isHome && !scrolled;

  return (
    <nav
      className={`
        fixed  top-0 left-0 w-full z-50
        
        ${isTransparent ? "bg-transparent text-white" : "bg-white shadow-sm"}
      `}
    >
      <div className="px-4 sm:px-6 lg:px-28">
        <div className="flex items-center justify-between p-2">
          {/* Logo */}
          <Link className="flex flex-1" href="/">
            <Image
              src={isTransparent ? "/mmr-white-logo.png" : "/mmr-dark-logo.png"}
              alt="Minnesota Manufacturing Recruiting"
              width={140}
              height={60}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex justify-center items-center flex-1 space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  transition-colors duration-200
                      ? "text-[#152841] hover:text-gray-200"
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact button */}
          <Link className="flex justify-end flex-1" href="/contact">
            <button
              className={`
                px-5 py-3 rounded-full border border-neutral-200/20 text-sm gap-2 flex items-center transition-colors duration-200
                text-neutral-100  bg-[#FCFCFC]/10 hover:bg-[white]
           ${!isTransparent && "bg-neutral-800 text-white"}
              `}
            >
              Contact
            </button>
          </Link>

          {/* Mobile menu toggle placeholder */}
          <div className="md:hidden">{/* TODO: add mobile menu */}</div>
        </div>
      </div>
    </nav>
  );
}
