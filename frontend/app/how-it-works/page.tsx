import Link from "next/link";

export const metadata = {
  title: "How It Works",
  description:
    "Learn how ShopIntel compares products, prices and shopping options to help you make smarter buying decisions.",
};

const steps = [
  {
    number: "01",
    title: "Search for a product",
    description:
      "Tell ShopIntel what you are looking for using the product search. You can search by product name, category or other relevant terms.",
  },
  {
    number: "02",
    title: "Compare your options",
    description:
      "ShopIntel brings available product and pricing information together so you can evaluate different shopping options in one place.",
  },
  {
    number: "03",
    title: "Understand the real value",
    description:
      "A good purchase is not always the one with the lowest listed price. Offers, delivery, seller information and other product signals can matter too.",
  },
  {
    number: "04",
    title: "Make a smarter decision",
    description:
      "Use the comparison and shopping intelligence provided by ShopIntel to decide which option makes the most sense for your needs.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-20 sm:px-6 sm:pt-24">
      <div className="container-shopintel">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="shopintel-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/65 px-3.5 py-2 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111318] text-[10px] text-white">
              ✦
            </span>
            How ShopIntel works
          </div>

          <h1
            className="shopintel-fade-up text-balance text-4xl font-semibold tracking-[-0.055em] text-[#111318] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            From search to
            <br />
            <span className="text-gray-400">a smarter purchase.</span>
          </h1>

          <p
            className="shopintel-fade-up mx-auto mt-6 max-w-2xl text-pretty text-sm leading-7 text-gray-500 sm:text-base"
            style={{ animationDelay: "200ms" }}
          >
            ShopIntel is being built to reduce the time and effort it takes
            to research products, compare options and understand what is
            actually worth buying.
          </p>
        </section>

        {/* Steps */}
        <section className="mx-auto mt-20 max-w-5xl">
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="shopintel-card p-7 sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#111318] text-xs font-semibold text-white">
                    {step.number}
                  </div>

                  <span className="text-xs font-medium text-gray-300">
                    Step {index + 1}
                  </span>
                </div>

                <h2 className="mt-7 text-xl font-semibold tracking-[-0.035em] text-[#111318]">
                  {step.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Intelligence section */}
        <section className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-[28px] border border-gray-200/80 bg-[#111318] px-7 py-10 text-white shadow-[0_25px_70px_rgba(17,19,24,0.14)] sm:px-10 sm:py-12 lg:px-14">
            <div
              className="pointer-events-none absolute -right-32 -top-40 h-80 w-80 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.55), transparent 70%)",
              }}
            />

            <div className="relative max-w-3xl">
              <div className="mb-4 flex items-center gap-2 text-xs font-medium text-gray-300">
                <span>✦</span>
                Beyond price comparison
              </div>

              <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                The goal is not just to find a cheaper product.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                ShopIntel is being designed around a broader shopping
                intelligence layer that can consider price, offers,
                delivery, seller quality and product signals together.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-20 text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#111318] sm:text-3xl">
            Ready to explore?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Search for a product and start comparing your options.
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