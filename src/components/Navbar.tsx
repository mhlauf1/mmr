"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Hiring Managers", href: "/hiring-managers" },
  { label: "Job Seekers", href: "/job-seekers" },
  { label: "About", href: "/about" },
];
const NAV_ITEMS_MOBILE = [{ label: "Home", href: "/" }, ...NAV_ITEMS];

export default function Navbar() {
  const pathname = usePathname();
  const onContact = pathname === "/contact";

  // Only track scroll on “home”-type pages
  const isHome = ["/", "/job-seekers", "/hiring-managers", "/about"].includes(
    pathname
  );

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Transparent if on a “home” page AND not scrolled
  const isTransparent = isHome && !scrolled;

  // Force dark text on Contact
  const useDarkText = onContact || !isTransparent || menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        useDarkText
          ? "bg-white text-gray-800 shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-28">
        <div className="flex items-center justify-between p-2">
          {/* Logo */}
          <Link
            href="/"
            className={`flex flex-row items-center gap-[10px]
            ${!useDarkText ? "filter brightness-0 invert" : ""}
            `}
          >
            <Image
              src="/minnesota.svg"
              alt="Minnesota Manufacturing Recruiting"
              width={50}
              height={50}
            />
            <div className="h-[60px] w-[1px] bg-black"></div>
            <h3 className="font-pt-serif leading-[1] md:text-base font-semibold text-sm">
              Minnesota <br /> Manufacturing <br /> Recruiting
            </h3>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-gray-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop “Contact” button */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <button
                type="button"
                className={`px-5 py-3 cursor-pointer rounded-full border text-sm flex items-center gap-2 transition-colors duration-200 ${
                  useDarkText
                    ? "bg-neutral-800 text-white hover:bg-neutral-700"
                    : "bg-[#FCFCFC]/10 text-neutral-100 hover:bg-white hover:text-neutral-700"
                }`}
              >
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2"
            >
              {menuOpen ? (
                <X size={32} className="text-gray-800" />
              ) : (
                <Menu
                  size={32}
                  className={useDarkText ? "text-gray-800" : "text-white"}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } bg-white text-gray-800`}
      >
        <nav className="flex flex-col px-4 pt-4 pb-6 h-[calc(100vh-56px)] space-y-4">
          {NAV_ITEMS_MOBILE.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium hover:text-gray-500"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="mt-auto px-5 py-3 rounded-full bg-neutral-800 text-white text-sm flex items-center justify-center"
            >
              Contact
            </button>
          </Link>
        </nav>
      </div>
    </nav>
  );
}
