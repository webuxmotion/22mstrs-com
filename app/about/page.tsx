import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About | 22MSTRS - Who We Are",
  description: "Learn about 22MSTRS, a web agency specializing in modern web development with MongoDB, React, and Next.js.",
};

export default function AboutPage() {
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
                  className="text-base text-black transition-colors hover:text-black/70"
                >
                  Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base font-semibold text-black"
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
            About Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/60">
            We&apos;re a web agency passionate about building modern digital experiences
          </p>
        </section>

        {/* Story */}
        <section className="bg-muted px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-black">Our Story</h2>
            <p className="mt-6 text-lg leading-relaxed text-black/70">
              22MSTRS was founded with a simple mission: to help businesses
              succeed online with modern, fast, and user-friendly websites. We
              believe that great web experiences shouldn&apos;t be complicated or
              expensive.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-black/70">
              Our name represents the 22 masters of web development disciplines
              we&apos;ve studied and refined over the years. From design to
              deployment, we handle every aspect of your web presence.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-black">
              What We Stand For
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-black">
                  Performance
                </h3>
                <p className="mt-2 text-black/60">
                  Fast-loading websites that keep users engaged
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-black">
                  Quality
                </h3>
                <p className="mt-2 text-black/60">
                  Clean code and attention to every detail
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-black">
                  Communication
                </h3>
                <p className="mt-2 text-black/60">
                  Transparent process and regular updates
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-muted px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-black">Our Tech Stack</h2>
            <p className="mt-4 text-lg text-black/60">
              We use modern, battle-tested technologies
            </p>
            <div className="mt-8 flex items-center justify-center gap-12">
              <span className="text-xl font-medium text-black">MongoDB</span>
              <span className="text-xl font-medium text-black">React</span>
              <span className="text-xl font-medium text-black">Next.js</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-black">
            Ready to work with us?
          </h2>
          <Link
            href="/contacts"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-accent/90"
          >
            Get in touch
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
