import Link from "next/link";

const exploreLinks = [
  { label: "Explore", href: "/search" },
  { label: "Deals", href: "/deals" },
  { label: "How it works", href: "/how-it-works" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
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

function SparkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
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

function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        group inline-flex items-center gap-1.5
        text-sm text-gray-500
        transition-colors duration-200
        hover:text-[#111318]
      "
    >
      {label}

      <span
        className="
          -translate-x-1 opacity-0
          transition-all duration-200
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        <ArrowIcon />
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/80 bg-white/50">
      <div className="container-shopintel py-14 sm:py-16">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
              aria-label="ShopIntel home"
            >
              <span
                className="
                  relative flex h-10 w-10 items-center justify-center
                  overflow-hidden rounded-[13px]
                  bg-[#111318]
                  text-sm font-bold text-white
                  shadow-[0_5px_16px_rgba(17,19,24,0.16)]
                  transition-all duration-300
                  group-hover:-translate-y-0.5
                  group-hover:shadow-[0_8px_22px_rgba(17,19,24,0.22)]
                "
              >
                <span className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                <span className="relative">S</span>
              </span>

              <span className="text-[17px] font-semibold tracking-[-0.035em] text-[#111318]">
                ShopIntel
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
              Compare products, understand the real value, and make smarter
              buying decisions.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-200/80 bg-white/70 px-3 py-2 text-[11px] font-semibold text-gray-500 shadow-sm">
              <span className="text-gray-800">
                <SparkIcon />
              </span>
              AI-powered shopping intelligence
            </div>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
              Explore
            </h2>

            <div className="mt-5 flex flex-col items-start gap-3.5">
              {exploreLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
              Company
            </h2>

            <div className="mt-5 flex flex-col items-start gap-3.5">
              {companyLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
              Legal
            </h2>

            <div className="mt-5 flex flex-col items-start gap-3.5">
              {legalLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-200/80" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ShopIntel. All rights reserved.</p>

          <p>
            Find smarter. Pay less. Buy better.
          </p>
        </div>
      </div>
    </footer>
  );
}