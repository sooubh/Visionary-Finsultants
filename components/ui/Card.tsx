import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  variant?: "light" | "bordered" | "dark";
};

const variantClasses: Record<NonNullable<CardProps["variant"]>, string> = {
  light:
    "bg-white border border-gray-100 rounded-lg p-6 hover:border-gold hover:shadow-md transition-all duration-200",
  bordered: "bg-offwhite border-l-4 border-gold rounded-lg p-6",
  dark: "bg-charcoal text-offwhite rounded-lg p-6 hover:border hover:border-gold transition-all duration-200",
};

export default function Card({
  title,
  description,
  icon,
  variant = "light",
}: CardProps) {
  const isDark = variant === "dark";

  return (
    <div className={variantClasses[variant]}>
      {icon ? (
        <div className="mb-3 text-gold [&>svg]:h-6 [&>svg]:w-6">{icon}</div>
      ) : null}
      <h3
        className={`font-body text-base font-semibold ${isDark ? "text-offwhite" : "text-charcoal"}`}
      >
        {title}
      </h3>
      {description ? (
        <p
          className={`mt-2 font-body text-sm ${isDark ? "text-gray-400" : "text-textgray"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
