"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Explore", href: "/search" },
  { label: "Deals", href: "/deals" },
  { label: "How it works", href: "/how-it-works" },
];

function SparkIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
        fill="currentColor"
      />
      <path
        d="M19 16L19.8 18.2L22 19L19.8 19.8L19 22L18.2 19.8L16 19L18.2 18.2L19 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M8 7H17V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-5 flex-col justify-center gap-1.5">
      <span
        className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
          open ? "translate-y-[3px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
          open ? "-translate-y-[3px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className="
          mx-auto max-w-7xl
          overflow-hidden rounded-[22px]
          border border-white/70
          bg-white/75
          shadow-[0_12px_45px_rgba(17,19,24,0.08)]
          backdrop-blur-2xl
          supports-[backdrop-filter]:bg-white/60
        "
      >
        {/* Main Navbar */}
        <div className="flex h-[68px] items-center px-3 sm:px-5">

          {/* Brand */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="ShopIntel home"
          >
            <span
              className="
                relative flex h-10 w-10 items-center justify-center
                overflow-hidden rounded-[13px]
                bg-[#111318]
                text-sm font-bold text-white
                shadow-[0_5px_16px_rgba(17,19,24,0.18)]
                transition-all duration-300
                group-hover:-translate-y-0.5
                group-hover:shadow-[0_8px_22px_rgba(17,19,24,0.24)]
              "
            >
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              <span className="relative">S</span>
            </span>

            <div className="hidden sm:block">
              <div className="text-[16px] font-semibold tracking-[-0.035em] text-[#111318]">
                ShopIntel
              </div>

              <div className="mt-[-1px] text-[9px] font-medium uppercase tracking-[0.16em] text-gray-400">
                Shopping intelligence
              </div>
            </div>
          </Link>

          {/* Center Navigation */}
          <div className="mx-auto hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group relative rounded-xl px-4 py-2.5
                  text-[13px] font-medium text-gray-600
                  transition-all duration-200
                  hover:bg-black/[0.035]
                  hover:text-[#111318]
                "
              >
                {item.label}

                <span
                  className="
                    absolute bottom-1.5 left-1/2 h-[2px] w-0
                    -translate-x-1/2 rounded-full
                    bg-[#111318]
                    transition-all duration-200
                    group-hover:w-4
                  "
                />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="ml-auto flex items-center gap-2">

            {/* AI badge */}
            <div
              className="
                hidden items-center gap-1.5 rounded-xl
                border border-gray-200/80
                bg-white/55 px-3 py-2.5
                text-[11px] font-semibold text-gray-600
                md:flex
              "
            >
              <span className="text-gray-800">
                <SparkIcon />
              </span>
              AI powered
            </div>

            {/* Sign in */}
            <Link
              href="/login"
              className="
                hidden rounded-xl px-3.5 py-2.5
                text-[13px] font-semibold text-gray-700
                transition-colors duration-200
                hover:bg-black/[0.035]
                hover:text-[#111318]
                sm:block
              "
            >
              Sign in
            </Link>

            {/* CTA */}
            <Link
              href="/search"
              className="
                group hidden items-center gap-1.5 rounded-xl
                bg-[#111318] px-4 py-2.5
                text-[12px] font-semibold text-white
                shadow-[0_5px_16px_rgba(17,19,24,0.16)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#24262d]
                hover:shadow-[0_8px_22px_rgba(17,19,24,0.22)]
                md:flex
              "
            >
              Compare prices
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRightIcon />
              </span>
            </Link>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-gray-200
                bg-white/60 text-[#111318]
                transition-all duration-200
                hover:bg-white
                md:hidden
              "
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`grid transition-all duration-300 md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-gray-200/70 px-3 pb-4 pt-3">
              
              {/* Mobile Search */}
              <Link
                href="/search"
                onClick={() => setMenuOpen(false)}
                className="
                  mb-2 flex items-center gap-3 rounded-xl
                  border border-gray-200/80
                  bg-white/70 px-4 py-3
                  text-sm text-gray-500
                "
              >
                <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                >
                    <path
                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3 19 11Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
                Search products
              </Link>

              {/* Mobile Links */}
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      rounded-xl px-4 py-3
                      text-sm font-medium text-gray-700
                      transition-colors
                      hover:bg-black/[0.035]
                      hover:text-[#111318]
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="my-3 h-px bg-gray-200/70" />

              {/* Mobile AI */}
              <div className="mb-2 flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-500">
                <span className="text-gray-800">
                  <SparkIcon />
                </span>
                AI-powered shopping intelligence
              </div>

              {/* Mobile Actions */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-xl border border-gray-200
                    px-4 py-3 text-center text-sm font-semibold
                    text-gray-700
                  "
                >
                  Sign in
                </Link>

                <Link
                  href="/search"
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-xl bg-[#111318]
                    px-4 py-3 text-center text-sm font-semibold
                    text-white
                  "
                >
                  Compare prices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}