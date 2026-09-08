import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing your use of the ShopIntel website and shopping comparison services.",
};

const sections = [
  {
    title: "1. About ShopIntel",
    content: [
      "ShopIntel is a shopping intelligence and product comparison platform designed to help users discover, compare and evaluate products and shopping options.",
      "ShopIntel may evolve over time, and features, integrations and available information may change without notice.",
    ],
  },
  {
    title: "2. Using ShopIntel",
    content: [
      "You may use ShopIntel for lawful personal and informational purposes.",
      "You agree not to misuse the website, interfere with its operation, attempt to gain unauthorized access, introduce malicious code, or use automated methods in a way that could harm or overload the service.",
    ],
  },
  {
    title: "3. Product and price information",
    content: [
      "ShopIntel may display product names, descriptions, images, prices, availability, offers, ratings and other information obtained from stores, affiliate programs or authorized data sources.",
      "Product information, prices and availability may change at any time. ShopIntel does not guarantee that information displayed on the website will always be complete, current or error-free.",
      "Before making a purchase, users should verify the final product details, price, availability, shipping costs, taxes and other applicable terms on the retailer's website.",
    ],
  },
  {
    title: "4. Third-party websites",
    content: [
      "ShopIntel may provide links to third-party websites, including online retailers and other services.",
      "When you follow a third-party link, you leave ShopIntel and become subject to that third party's terms, policies and practices.",
      "ShopIntel does not control and is not responsible for the content, availability, policies or practices of third-party websites.",
    ],
  },
  {
    title: "5. Affiliate relationships",
    content: [
      "ShopIntel may participate in affiliate programs operated by retailers and other third parties.",
      "Where an affiliate relationship applies, ShopIntel may receive a commission from qualifying purchases made through eligible links.",
      "Affiliate relationships do not mean that ShopIntel guarantees or endorses every product, seller or retailer shown on the platform.",
    ],
  },
  {
    title: "6. No purchase guarantee",
    content: [
      "ShopIntel provides comparison and decision-support information. It does not sell the products displayed through third-party retailers unless explicitly stated otherwise.",
      "ShopIntel does not guarantee that a particular product is the best choice for every user or that a displayed price will remain available when a user completes a purchase.",
    ],
  },
  {
    title: "7. Intellectual property",
    content: [
      "The ShopIntel name, branding, original website design, software, text and other original materials provided by ShopIntel are protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify or commercially exploit ShopIntel's original materials without appropriate authorization.",
      "Third-party product names, trademarks, logos, images and other materials remain the property of their respective owners.",
    ],
  },
  {
    title: "8. Service availability",
    content: [
      "We aim to keep ShopIntel available and reliable, but we do not guarantee uninterrupted or error-free operation.",
      "The service may occasionally be unavailable because of maintenance, updates, technical problems, third-party dependencies or circumstances outside our control.",
    ],
  },
  {
    title: "9. Limitation of responsibility",
    content: [
      "To the extent permitted by applicable law, ShopIntel is not responsible for losses arising from reliance on product information, pricing, availability, retailer policies or third-party websites.",
      "Nothing in these terms is intended to exclude or limit rights or protections that cannot legally be excluded or limited.",
    ],
  },
  {
    title: "10. Changes to these terms",
    content: [
      "We may update these Terms & Conditions as ShopIntel, its features or applicable requirements change.",
      "The updated version will be published on this page. Continued use of ShopIntel after an update may constitute acceptance of the revised terms to the extent permitted by applicable law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-20 sm:px-6 sm:pt-24">
      <div className="container-shopintel">
        {/* Header */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="shopintel-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/65 px-3.5 py-2 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111318] text-[10px] text-white">
              ✦
            </span>
            Legal
          </div>

          <h1
            className="shopintel-fade-up text-balance text-4xl font-semibold tracking-[-0.055em] text-[#111318] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Terms &amp; Conditions
          </h1>

          <p
            className="shopintel-fade-up mx-auto mt-6 max-w-2xl text-pretty text-sm leading-7 text-gray-500 sm:text-base"
            style={{ animationDelay: "200ms" }}
          >
            These terms describe the basic rules and conditions for using
            ShopIntel.
          </p>

          <p className="mt-4 text-xs text-gray-400">
            Effective date: September 8, 2026
          </p>
        </section>

        {/* Terms content */}
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
              Questions about these terms?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              If you have questions about using ShopIntel or these Terms &
              Conditions, please contact us.
            </p>

            <a
              href="mailto:legal@shopintel.in"
              className="mt-4 inline-flex text-sm font-medium text-[#111318] transition-colors hover:text-gray-500"
            >
              legal@shopintel.in
            </a>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-5 text-sm">
          <Link
            href="/privacy"
            className="font-medium text-gray-500 transition-colors hover:text-[#111318]"
          >
            Privacy Policy
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