import Link from "next/link";

export const metadata = {
  title: "About ShopIntel",
  description:
    "Learn how ShopIntel helps shoppers compare products, prices and offers to make smarter buying decisions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-20 sm:px-6 sm:pt-24">
      <div className="container-shopintel">
        {/* Header */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="shopintel-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/65 px-3.5 py-2 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111318] text-[10px] text-white">
              ✦
            </span>
            About ShopIntel
          </div>

          <h1
            className="shopintel-fade-up text-balance text-4xl font-semibold tracking-[-0.055em] text-[#111318] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Shopping should be
            <br />
            <span className="text-gray-400">a smarter decision.</span>
          </h1>

          <p
            className="shopintel-fade-up mx-auto mt-6 max-w-2xl text-pretty text-sm leading-7 text-gray-500 sm:text-base"
            style={{ animationDelay: "200ms" }}
          >
            ShopIntel is being built to make online shopping easier to
            understand by bringing product comparison, pricing information
            and shopping intelligence into one experience.
          </p>
        </section>

        {/* Mission */}
        <section className="mx-auto mt-20 max-w-5xl">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="shopintel-card p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg text-gray-700">
                ◈
              </div>

              <h2 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-[#111318]">
                Compare
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Compare products and pricing information across different
                shopping options instead of checking every store manually.
              </p>
            </div>

            <div className="shopintel-card p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg text-gray-700">
                ✦
              </div>

              <h2 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-[#111318]">
                Understand
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                ShopIntel is designed to bring important buying signals
                together so shoppers can understand the real value of an
                option.
              </p>
            </div>

            <div className="shopintel-card p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg text-gray-700">
                ↗
              </div>

              <h2 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-[#111318]">
                Decide
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                The goal is simple: help you make a more informed purchase
                decision without unnecessary searching and guesswork.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mx-auto mt-20 max-w-4xl">
          <div className="rounded-[28px] border border-gray-200/80 bg-[#111318] px-7 py-10 text-white shadow-[0_25px_70px_rgba(17,19,24,0.14)] sm:px-10 sm:py-12">
            <p className="text-xs font-medium text-gray-400">
              Our approach
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Lowest price isn&apos;t always the best deal.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
              A better purchase can depend on more than the number on a
              price tag. ShopIntel is being designed to consider factors
              such as offers, delivery, seller information and product
              signals when helping users evaluate their options.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-20 text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#111318] sm:text-3xl">
            Ready to compare?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Start by searching for a product and explore what ShopIntel is
            building.
          </p>

          <Link
            href="/search"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#111318] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24262d] hover:shadow-md"
          >
            Start comparing
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}