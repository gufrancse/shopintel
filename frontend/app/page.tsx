import Link from "next/link";
import HeroSearch from "@/components/home/HeroSearch";

const categories = [
  {
    name: "Electronics",
    description: "Phones, laptops & more",
    icon: "◈",
  },
  {
    name: "Grocery",
    description: "Everyday essentials",
    icon: "✦",
  },
  {
    name: "Fashion",
    description: "Clothing & accessories",
    icon: "◇",
  },
  {
    name: "Home & Kitchen",
    description: "Everything for home",
    icon: "⌂",
  },
  {
    name: "Beauty",
    description: "Personal care & beauty",
    icon: "✧",
  },
  {
    name: "Automotive",
    description: "Cars & accessories",
    icon: "◎",
  },
];

const popularSearches = [
  "iPhone",
  "Laptops",
  "Headphones",
  "Smartwatches",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32">
        {/* Ambient background */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[620px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(168,85,247,0.06) 35%, transparent 70%)",
          }}
        />

        <div className="container-shopintel text-center">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/65 px-3.5 py-2 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111318] text-[10px] text-white">
              ✦
            </span>

            AI-powered shopping intelligence
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-balance text-[48px] font-semibold leading-[0.98] tracking-[-0.065em] text-[#111318] sm:text-[64px] lg:text-[82px]">
            Find smarter.
            <br />
            <span className="text-gray-400">Pay less. Buy better.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-[15px] leading-7 text-gray-500 sm:text-base">
            Compare products, prices and offers across stores — then let
            ShopIntel help you decide what&apos;s actually worth buying.
          </p>
          
          <HeroSearch />

        </div>
      </section>

      {/* Categories */}
      <section className="px-4 pb-24 sm:px-6 sm:pb-28">
        <div className="container-shopintel">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                Explore
              </p>

              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#111318] sm:text-3xl">
                What are you shopping for?
              </h2>
            </div>

            <Link
              href="/search"
              className="hidden text-sm font-medium text-gray-500 transition-colors hover:text-[#111318] sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/search?category=${encodeURIComponent(category.name)}`}
                className="shopintel-card group min-h-[155px] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg text-gray-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#111318] group-hover:text-white">
                  {category.icon}
                </div>

                <h3 className="mt-5 text-sm font-semibold tracking-[-0.02em] text-[#111318]">
                  {category.name}
                </h3>

                <p className="mt-1.5 text-[11px] leading-4 text-gray-400">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Trending searches */}
      <section className="px-4 pb-24 sm:px-6">
      <div className="container-shopintel">
        <div className="mb-8">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            Trending searches
          </p>

          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#111318] sm:text-3xl">
            What people are comparing
          </h2>
        </div>

      <div className="flex flex-wrap gap-3">
      {popularSearches.map((search) => (
          <Link
            key={search}
            href={`/search?q=${encodeURIComponent(search)}`}
            className="group inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:text-[#111318] hover:shadow-md"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500 transition-colors group-hover:bg-[#111318] group-hover:text-white">
              ↗
            </span>

            {search}
          </Link>
        ))}
      </div>
    </div>
  </section>

        {/* Deals */}
        <section className="px-4 pb-24 sm:px-6">
        <div className="container-shopintel">
          <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
          Deals
        </p>

        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#111318] sm:text-3xl">
          Deals worth watching
        </h2>
      </div>

      <Link
        href="/deals"
        className="hidden text-sm font-medium text-gray-500 transition-colors hover:text-[#111318] sm:block"
      >
        View all →
      </Link>
    </div>

    <div className="rounded-[24px] border border-dashed border-gray-300 bg-white/70 px-6 py-12 text-center sm:px-10">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
        ✦
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[#111318]">
        Smart deals are coming
      </h3>

      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500">
        Once store data is connected, ShopIntel will surface price drops,
        offers and genuinely worthwhile deals here.
      </p>
    </div>
  </div>
</section>

      {/* Intelligence teaser */}
      <section className="px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="container-shopintel">
          <div className="relative overflow-hidden rounded-[28px] border border-gray-200/80 bg-[#111318] px-6 py-10 text-white shadow-[0_25px_70px_rgba(17,19,24,0.14)] sm:px-10 sm:py-12 lg:px-14">
            <div
              className="pointer-events-none absolute -right-32 -top-40 h-80 w-80 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.55), transparent 70%)",
              }}
            />

            <div className="relative max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-xs font-medium text-gray-300">
                <span>✦</span>
                Shopping intelligence
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Don&apos;t just find the lowest price.
                <br />
                Find the better deal.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400">
                ShopIntel will consider price, offers, delivery, seller
                quality and product signals to help you make a smarter
                purchase decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}