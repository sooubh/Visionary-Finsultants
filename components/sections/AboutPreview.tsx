import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="bg-offwhite px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <SectionHeading
              title="About Visionary Finsultants"
              subtitle="A trusted financial planning partner helping families map goals with structure, clarity, and long-term confidence."
              align="left"
            />

            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-textgray">
              Founded in 2018, we combine disciplined planning with practical
              execution across insurance, investments, and wealth strategy —
              always tailored to each family&apos;s unique journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button label="Learn More About Us" href="/about" variant="solid" />
              <Button label="Contact Us" href="/contact" variant="outline" />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full rounded-2xl border border-gold/20 bg-white p-8 shadow-sm md:p-10">
              <p className="font-mono text-xs uppercase tracking-wider text-gold">
                Why Clients Choose Us
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-charcoal md:text-3xl">
                Personalized Advice.
                <br />
                Consistent Discipline.
                <br />
                Measurable Progress.
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-textgray">
                We focus on long-term relationships, transparent guidance, and
                structured reviews that keep your financial roadmap aligned with
                life&apos;s milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
