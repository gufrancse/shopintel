"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const popularSearches = [
  "iPhone",
  "Laptops",
  "Headphones",
  "Smartwatches",
];

function SearchIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  }

  function handlePopularSearch(search: string) {
    router.push(`/search?q=${encodeURIComponent(search)}`);
  }

  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div
          className="
            group flex min-h-[68px] items-center
            rounded-2xl border border-gray-200
            bg-white/85 p-2 pl-5
            shadow-[0_18px_55px_rgba(17,19,24,0.10)]
            backdrop-blur-xl
            transition-all duration-300
            focus-within:-translate-y-1
            focus-within:border-gray-300
            focus-within:shadow-[0_24px_65px_rgba(17,19,24,0.14)]
          "
        >
          <span className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
            <SearchIcon />
          </span>

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="What are you looking for?"
            aria-label="Search for products"
            className="
              min-w-0 flex-1 bg-transparent
              text-sm text-[#111318]
              outline-none
              placeholder:text-gray-400
              sm:text-[15px]
            "
          />

          <button
            type="submit"
            aria-label="Search products"
            disabled={!query.trim()}
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-xl bg-[#111318]
              text-white
              shadow-sm
              transition-all duration-300
              hover:scale-[1.03]
              hover:bg-[#24262d]
              disabled:cursor-not-allowed
              disabled:opacity-40
              disabled:hover:scale-100
            "
          >
            <ArrowIcon />
          </button>
        </div>
      </form>

      {/* Popular searches */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1 text-[11px] text-gray-400">
          Popular:
        </span>

        {popularSearches.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => handlePopularSearch(item)}
            className="
              rounded-full border border-gray-200/80
              bg-white/55 px-3 py-1.5
              text-[11px] font-medium text-gray-500
              transition-all duration-200
              hover:border-gray-300
              hover:bg-white
              hover:text-gray-800
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}