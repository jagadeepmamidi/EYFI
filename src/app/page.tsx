import { WaitlistForm } from "./waitlist-form";

const features = [
  {
    title: "Unified signals",
    body: "Bring every source into one stream so nothing important slips past.",
  },
  {
    title: "Insight, not noise",
    body: "Surfacing the few things that matter instead of another dashboard to babysit.",
  },
  {
    title: "Built to act",
    body: "Every insight comes with a next step, so momentum never stalls.",
  },
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(56,189,248,0.25),transparent_70%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-16 px-6 py-20 sm:py-28">
        <section className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky-300">
            Eyes For Insight
          </span>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Turn raw signals into insight you can{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              actually act on
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-slate-300">
            EYFI watches the streams you care about and hands you the moments
            worth your attention — nothing more, nothing less.
          </p>
          <div className="mt-10 w-full max-w-md">
            <WaitlistForm />
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="text-lg font-semibold text-white">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {feature.body}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
