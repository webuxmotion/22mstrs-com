import Link from "next/link";
import Footer from "./components/Footer";

function getCurrentDate() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const now = new Date();
  return {
    day: days[now.getDay()],
    month: months[now.getMonth()],
    date: now.getDate(),
  };
}

export default function Home() {
  const { day, month, date } = getCurrentDate();

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
        {/* Hero Section */}
        <section className="flex flex-col items-center bg-white px-6 pb-20 pt-24 text-center">
          <h1 className="text-[120px] font-bold leading-none tracking-tight text-black">
            Web agency
          </h1>
          <p className="mt-6 text-2xl">
            <span className="text-black">Today is </span>
            <span className="font-semibold text-accent">
              {day} {month} {date}
            </span>
          </p>
          <Link
            href="/works"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-button-gray px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-button-gray/90"
          >
            See works
          </Link>
        </section>

        {/* Technology Stack */}
        <section className="bg-muted px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-xl font-semibold text-black">
              Our technology stack
            </h2>
            <div className="mt-14 flex items-center justify-center gap-20">
              {/* MongoDB */}
              <div className="flex items-center gap-3">
                <svg
                  className="h-12 w-8"
                  viewBox="0 0 32 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.193 47.094l-1.326-.434s.162-6.676-2.24-7.154c-1.603-1.777.256-75.425 5.659-.094 0 0-1.935 1.023-2.005 2.55-.094 1.526-.088 5.132-.088 5.132z"
                    fill="#A6A385"
                  />
                  <path
                    d="M18.077 41.2s9.691-6.282 7.542-19.219c-1.926-10.177-7.196-13.558-7.751-14.932-.625-1.197-1.25-2.819-1.25-2.819l.423 27.795c0 .001-.7 7.36 1.036 9.175z"
                    fill="#499D4A"
                  />
                  <path
                    d="M15.581 41.665s-8.641-5.77-8.125-16.003c.514-10.234 6.811-15.886 8.573-17.205 1.017-.954 1.079-1.356 1.175-2.612 0 0 .604 1.977 1.017 2.87.414.893 1.079 2.036 1.079 2.036l-.095 27.826c.001.003-.255 2.073-3.624 3.088z"
                    fill="#58AA50"
                  />
                </svg>
                <span className="text-3xl font-medium tracking-tight text-black">
                  MongoDB
                </span>
              </div>

              {/* React */}
              <div className="flex items-center gap-3">
                <svg
                  className="h-12 w-12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="4" fill="#000" />
                  <ellipse
                    cx="24"
                    cy="24"
                    rx="20"
                    ry="8"
                    stroke="#000"
                    strokeWidth="2"
                    fill="none"
                  />
                  <ellipse
                    cx="24"
                    cy="24"
                    rx="20"
                    ry="8"
                    stroke="#000"
                    strokeWidth="2"
                    fill="none"
                    transform="rotate(60 24 24)"
                  />
                  <ellipse
                    cx="24"
                    cy="24"
                    rx="20"
                    ry="8"
                    stroke="#000"
                    strokeWidth="2"
                    fill="none"
                    transform="rotate(120 24 24)"
                  />
                </svg>
              </div>

              {/* Next.js */}
              <div className="flex items-center gap-3">
                <svg
                  className="h-12 w-12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#000" />
                  <path
                    d="M18 15v18l14-18"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M32 33V21"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span className="text-3xl font-medium tracking-tight text-black">
                  NEXT
                  <span className="text-xl">.JS</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
