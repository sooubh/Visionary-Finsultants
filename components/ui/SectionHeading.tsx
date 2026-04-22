type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "text-center" : "text-left"}>
      <h2 className="font-display text-3xl font-bold text-charcoal md:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-3 h-0.5 w-12 bg-gold ${isCentered ? "mx-auto" : "ml-0"}`}
      />
      {subtitle ? (
        <p
          className={`mt-3 max-w-2xl font-body text-base text-textgray ${isCentered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
