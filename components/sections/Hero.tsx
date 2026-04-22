import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-offwhite px-6 pb-16 pt-28 md:px-16 lg:px-24">
      <div className="flex min-h-[calc(100vh-11rem)] items-center">
        <div className="grid w-full gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
              Est. 2018 · Trusted by 315+ Families
            </span>

            <h1 className="font-display text-4xl font-bold leading-tight text-charcoal md:text-5xl lg:text-6xl">
              Your Financial Goals,
              <br />
              <span className="text-gold">Mapped With Precision.</span>
            </h1>

            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-textgray md:text-lg">
              Since 2018, Visionary Finsultants has guided 315+ families across
              India and globally — with structured, goal-oriented financial
              planning built on trust, clarity, and long-term vision.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                label="Explore Our Solutions"
                href="/solutions"
                variant="solid"
              />
              <Button label="Meet Our Team" href="/team" variant="outline" />
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="w-full max-w-md rounded-2xl border border-gold/20 bg-white p-8 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-wider text-gold">
                Trusted Since 2018
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-charcoal">
                315+ Families
              </h2>
              <p className="mt-3 font-body text-sm text-textgray">
                Structured financial planning for long-term clarity across
                India and global clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
