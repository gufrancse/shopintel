import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how ShopIntel handles information when you use the ShopIntel website.",
};

const sections = [
  {
    title: "1. Information we collect",
    content: [
      "ShopIntel is designed to let visitors explore and compare products without requiring an account.",
      "When you use search and comparison features, information such as the search query, requested URL and basic technical information may be processed as part of operating the website.",
      "If account-based features are introduced in the future, we will update this policy to explain what account information is collected and how it is used.",
    ],
  },
  {
    title: "2. How we use information",
    content: [
      "Information may be used to operate, maintain and improve ShopIntel, provide search and comparison functionality, understand website usage and help identify technical problems.",
      "We do not use information for purposes unrelated to operating or improving the service without an appropriate legal basis or notice.",
    ],
  },
  {
    title: "3. Product and shopping data",
    content: [
      "ShopIntel may display product information, prices, availability, offers and other shopping information obtained from participating stores, affiliate programs or other authorized data sources.",
      "Product information and prices can change. The retailer or store may be the final source of truth for availability, pricing and purchase terms.",
    ],
  },
  {
    title: "4. Cookies and similar technologies",
    content: [
      "ShopIntel may use cookies or similar technologies when they are necessary for website functionality, security, analytics or future account-based features.",
      "If additional analytics, advertising or personalization technologies are introduced, this policy may be updated to describe them and any relevant choices available to users.",
    ],
  },
  {
    title: "5. Third-party services",
    content: [
      "ShopIntel may link to or interact with third-party services, including online retailers and technology providers.",
      "When you leave ShopIntel and visit a third-party website, that website's own privacy policy and terms apply.",
      "ShopIntel does not control the privacy practices of third-party websites.",
    ],
  },
  {
    title: "6. Affiliate relationships",
    content: [
      "ShopIntel may participate in affiliate programs. When applicable, ShopIntel may earn a commission when a user follows an eligible link and completes a qualifying purchase.",
      "Affiliate relationships do not change the price a shopper pays unless the applicable retailer states otherwise.",
    ],
  },
  {
    title: "7. Data security",
    content: [
      "We take reasonable measures intended to protect information processed through the service.",
      "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "8. Children",
    content: [
      "ShopIntel is not intended to knowingly collect personal information from children in violation of applicable laws.",
      "If you believe that a child has provided personal information to ShopIntel improperly, please contact us so the matter can be reviewed.",
    ],
  },
  {
    title: "9. Changes to this policy",
    content: [
      "This Privacy Policy may be updated as ShopIntel's features, integrations and legal requirements evolve.",
      "When material changes are made, the updated version will be published on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-20 sm:px-6 sm:pt-24">
      <div className="container-shopintel">
        {/* Header */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="shopintel-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/65 px-3.5 py-2 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111318] text-[10px] text-white">
              ✦
            </span>
            Privacy
          </div>

          <h1
            className="shopintel-fade-up text-balance text-4xl font-semibold tracking-[-0.055em] text-[#111318] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Privacy Policy
          </h1>

          <p
            className="shopintel-fade-up mx-auto mt-6 max-w-2xl text-pretty text-sm leading-7 text-gray-500 sm:text-base"
            style={{ animationDelay: "200ms" }}
          >
            This policy explains how information may be handled when you use
            the ShopIntel website.
          </p>

          <p className="mt-4 text-xs text-gray-400">
            Effective date: September 8, 2026
          </p>
        </section>

        {/* Policy content */}
        <section className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-[28px] border border-gray-200/80 bg-white/75 p-6 shadow-sm backdrop-blur-md sm:p-10">
            <div className="space-y-10">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-lg font-semibold tracking-[-0.025em] text-[#111318] sm:text-xl">
                    {section.title}
                  </h2>

                  <div className="mt-3 space-y-3">
                    {section.content.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-gray-500"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-[24px] border border-gray-200 bg-gray-50/80 px-6 py-7 sm:px-8">
            <h2 className="text-lg font-semibold tracking-[-0.025em] text-[#111318]">
              Questions about privacy?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              If you have a question about this policy or how ShopIntel
              handles information, you can contact us.
            </p>

            <a
              href="mailto:privacy@shopintel.in"
              className="mt-4 inline-flex text-sm font-medium text-[#111318] transition-colors hover:text-gray-500"
            >
              privacy@shopintel.in
            </a>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-5 text-sm">
          <Link
            href="/terms"
            className="font-medium text-gray-500 transition-colors hover:text-[#111318]"
          >
            Terms
          </Link>

          <span className="text-gray-300">•</span>

          <Link
            href="/contact"
            className="font-medium text-gray-500 transition-colors hover:text-[#111318]"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}