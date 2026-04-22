import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Visionary Finsultants",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-charcoal px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-body text-xs text-gray-500"
          >
            <Link href="/" className="transition-colors hover:text-gray-300">
              Home
            </Link>
            <span>/</span>
            <span>About Us</span>
          </nav>

          <h1 className="mt-4 font-display text-4xl font-bold text-offwhite md:text-5xl">
            About Visionary Finsultants
          </h1>
          <p className="mt-3 font-body text-lg text-gray-400">
            Planning begins with clear goals and disciplined execution.
          </p>
        </div>
      </section>

      <section className="bg-offwhite px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <blockquote className="border-l-4 border-gold pl-6 font-display text-2xl italic text-charcoal">
                “Financial confidence is built through clear intent, disciplined
                planning, and consistent action.”
              </blockquote>
              <span className="mt-6 inline-block rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
                Est. 2018
              </span>
            </div>

            <div className="space-y-6 lg:col-span-3">
              <p className="font-body text-base leading-relaxed text-textgray">
                Visionary Finsultants was founded in 2018 with a simple mission:
                to help families take control of their financial future through
                structured planning and practical execution. We believe financial
                progress is not accidental — it is the result of consistent
                decisions made with clarity and purpose.
              </p>
              <p className="font-body text-base leading-relaxed text-textgray">
                Over the years, we have partnered with clients across different
                life stages, from young professionals and growing families to
                business owners planning long-term wealth transfer. Our approach
                combines risk management, investment strategy, and goal-based
                planning into one integrated roadmap tailored to each family.
              </p>
              <p className="font-body text-base leading-relaxed text-textgray">
                At Visionary Finsultants, trust and discipline remain the
                foundation of every relationship. We focus on transparent
                guidance, regular review, and long-term alignment so that every
                client can move forward with confidence and measurable financial
                progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold text-charcoal md:text-4xl">
            Vision &amp; Mission
          </h2>
        </div>
      </section>
    </main>
  );
}
