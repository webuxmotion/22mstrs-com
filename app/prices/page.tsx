import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Prices | 22MSTRS - Our Pricing Plans",
  description: "Transparent pricing for web development services. Choose the plan that fits your project needs.",
};

const plans = [
  {
    name: "Landing Page",
    price: "$1,500",
    description: "Perfect for small businesses and startups",
    features: [
      "Single page design",
      "Mobile responsive",
      "Contact form",
      "SEO optimization",
      "1 round of revisions",
    ],
  },
  {
    name: "Business Website",
    price: "$4,000",
    description: "For growing businesses that need more",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form & CMS",
      "SEO optimization",
      "Analytics integration",
      "3 rounds of revisions",
    ],
    popular: true,
  },
  {
    name: "Web Application",
    price: "Custom",
    description: "Full-featured web applications",
    features: [
      "Custom functionality",
      "Database integration",
      "User authentication",
      "API development",
      "Admin dashboard",
      "Ongoing support",
    ],
  },
];

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-muted">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-16">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-accent">22</span>
              <span className="text-black">MSTRS</span>
            </Link>
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  href="/works"
                  className="text-base text-black transition-colors hover:text-black/70"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/prices"
                  className="text-base font-semibold text-black"
                >
                  Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base text-black transition-colors hover:text-black/70"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/contacts"
            className="text-base text-black transition-colors hover:text-black/70"
          >
            Contacts
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-white px-6 py-20 text-center">
          <h1 className="text-6xl font-bold tracking-tight text-black">
            Prices
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/60">
            Transparent pricing for quality web development
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="bg-muted px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl bg-white p-8 ${
                    plan.popular ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-sm font-medium text-white">
                      Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-black">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-black/60">{plan.description}</p>
                  <p className="mt-6 text-4xl font-bold text-black">
                    {plan.price}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-black/70"
                      >
                        <svg
                          className="h-5 w-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacts"
                    className={`mt-8 block w-full rounded-full py-3 text-center font-medium transition-colors ${
                      plan.popular
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "bg-muted text-black hover:bg-black/10"
                    }`}
                  >
                    Get started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ or Note */}
        <section className="bg-white px-6 py-20 text-center">
          <p className="mx-auto max-w-2xl text-lg text-black/60">
            All prices are starting points. Final pricing depends on project
            complexity and specific requirements. Contact us for a detailed quote.
          </p>
          <Link
            href="/contacts"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-button-gray px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-button-gray/90"
          >
            Get a quote
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
