const countries = [
  "United Kingdom",
  "United States",
  "Canada",
  "Singapore",
  "Australia",
  "Norway",
  "Germany",
];

export default function FootprintStrip() {
  return (
    <section className="bg-gold px-6 py-16 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <h2 className="font-display text-2xl font-bold text-charcoal md:text-3xl">
            Serving Clients Across India &amp; the Globe
          </h2>
          <p className="mt-2 font-body text-sm text-charcoal/70">
            315+ families · 45+ cities · 12 states
          </p>
        </div>

        <div>
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-wider text-charcoal/60">
            International Presence:
          </p>
          <div className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <span
                key={country}
                className="rounded-full bg-charcoal px-3 py-1.5 font-body text-xs font-medium text-offwhite"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
