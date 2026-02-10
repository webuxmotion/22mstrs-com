import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Works | 22MSTRS - Our Portfolio",
  description: "Explore our portfolio of web development projects built with MongoDB, React, and Next.js.",
};

const projects = [
  {
    name: "hi-eddy.com",
    url: "https://hi-eddy.com",
    description: "Modern web application built with Next.js",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
];

export default function WorksPage() {
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
                  className="text-base font-semibold text-black"
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
            Our Works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/60">
            A selection of projects we&apos;ve built for our clients
          </p>
        </section>

        {/* Projects Grid */}
        <section className="bg-muted px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <h3 className="text-2xl font-semibold text-black group-hover:text-accent">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-black/60">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-sm text-black/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}

              {/* Placeholder for more projects */}
              <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-black/10 p-8">
                <p className="text-center text-black/40">More projects coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-black">
            Want to be our next success story?
          </h2>
          <Link
            href="/contacts"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-accent/90"
          >
            Start a project
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
