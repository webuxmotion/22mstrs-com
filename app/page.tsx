export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <main className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          22mstrs
        </h1>
        <p className="mt-4 text-lg text-foreground/60 sm:text-xl">
          Digital Agency
        </p>

        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="text-sm font-medium uppercase tracking-widest text-foreground/40">
            Opening Soon
          </span>
          <div className="mt-2 h-px w-16 bg-foreground/20" />
        </div>

        <div className="mt-20">
          <p className="text-sm text-foreground/50">Our work</p>
          <a
            href="https://hi-eddy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-foreground transition-colors hover:text-foreground/70"
          >
            hi-eddy.com
          </a>
        </div>
      </main>
    </div>
  );
}
