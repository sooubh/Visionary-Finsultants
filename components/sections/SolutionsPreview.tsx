import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const solutions = [
  {
    title: "Insurance Planning",
    description:
      "Structured coverage recommendations that protect your family while aligning with long-term goals.",
  },
  {
    title: "Investment Advisory",
    description:
      "Goal-based portfolio guidance designed for disciplined wealth creation across market cycles.",
  },
  {
    title: "Retirement Strategy",
    description:
      "Personalized retirement roadmaps to help you transition from accumulation to confident income.",
  },
];

export default function SolutionsPreview() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="Solutions That Move You Forward"
            subtitle="Explore our focused financial services built to simplify decisions and keep your plan on track."
            align="left"
          />
          <Button label="View All Solutions" href="/solutions" variant="outline" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              title={solution.title}
              description={solution.description}
              variant="light"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
