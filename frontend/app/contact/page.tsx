import Link from "next/link";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with ShopIntel for questions, feedback, suggestions and partnership enquiries.",
};

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.5C4 5.672 4.672 5 5.5 5H18.5C19.328 5 20 5.672 20 6.5V17.5C20 18.328 19.328 19 18.5 19H5.5C4.672 19 4 18.328 4 17.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 7L12 12.5L19 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5.5C5 4.672 5.672 4 6.5 4H17.5C18.328 4 19 4.672 19 5.5V14.5C19 15.328 18.328 16 17.5 16H10L6 19V16H6.5C5.672 16 5 15.328 5 14.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 8H16M8 11.5H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
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

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-20 sm:px-6 sm:pt-24">
      <div className="container-shopintel">
        {/* Header */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="shopintel-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/65 px-3.5 py-2 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111318] text-[10px] text-white">
              ✦
            </span>
            Get in touch
          </div>

          <h1
            className="shopintel-fade-up text-balance text-4xl font-semibold tracking-[-0.055em] text-[#111318] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            We&apos;d love to
            <br />
            <span className="text-gray-400">hear from you.</span>
          </h1>

          <p
            className="shopintel-fade-up mx-auto mt-6 max-w-2xl text-pretty text-sm leading-7 text-gray-500 sm:text-base"
            style={{ animationDelay: "200ms" }}
          >
            Have feedback, found an issue, or have an idea that could make
            ShopIntel better? Get in touch with us.
          </p>
        </section>

        {/* Contact options */}
        <section className="mx-auto mt-20 max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="shopintel-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-700">
                <MailIcon />
              </div>

              <h2 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-[#111318]">
                General enquiries
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                For general questions, feedback or suggestions about
                ShopIntel.
              </p>

              <a
                href="mailto:hello@shopintel.in"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#111318] transition-colors hover:text-gray-500"
              >
                hello@shopintel.in
                <ArrowIcon />
              </a>
            </div>

            <div className="shopintel-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-700">
                <MessageIcon />
              </div>

              <h2 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-[#111318]">
                Feedback & suggestions
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Tell us what could make product discovery and comparison
                more useful for you.
              </p>

              <a
                href="mailto:feedback@shopintel.in"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#111318] transition-colors hover:text-gray-500"
              >
                Send feedback
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className="mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-[28px] border border-gray-200/80 bg-[#111318] px-7 py-10 text-white shadow-[0_25px_70px_rgba(17,19,24,0.14)] sm:px-10 sm:py-12">
            <div
              className="pointer-events-none absolute -right-32 -top-40 h-80 w-80 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.55), transparent 70%)",
              }}
            />

            <div className="relative max-w-2xl">
              <p className="text-xs font-medium text-gray-400">
                Partnerships
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Interested in working with ShopIntel?
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                For store integrations, business enquiries or potential
                partnerships, reach out to our team.
              </p>

              <a
                href="mailto:partnerships@shopintel.in"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#111318] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg"
              >
                Contact partnerships
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Back to shopping */}
        <section className="mt-20 text-center">
          <p className="text-sm text-gray-500">
            Looking to compare products instead?
          </p>

          <Link
            href="/search"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#111318] transition-colors hover:text-gray-500"
          >
            Start comparing
            <ArrowIcon />
          </Link>
        </section>
      </div>
    </main>
  );
}