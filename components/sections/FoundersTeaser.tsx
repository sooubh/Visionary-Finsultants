import Button from "../ui/Button";

export default function FoundersTeaser() {
  return (
    <section className="bg-charcoal px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-2xl border border-gold/20 bg-charcoal p-8 md:p-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-gold">
              Founders&apos; Teaser
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-offwhite md:text-4xl">
              A Message From the Founders
            </h2>
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-gray-300">
              Visionary Finsultants was built to make financial planning simple,
              disciplined, and deeply personal for every family we serve.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-xl border border-gold/20 bg-white/5 p-6">
            <p className="font-body text-sm leading-relaxed text-gray-300">
              Get to know the vision, values, and long-term commitment that drive
              every recommendation we make.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button label="Meet the Founders" href="/team" variant="solid" />
              <Button
                label="Read Our Story"
                href="/about"
                variant="outline"
                className="border-gold/70 text-gold hover:border-gold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
