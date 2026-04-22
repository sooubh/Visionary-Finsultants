import Link from "next/link";

type ButtonProps = {
  label: string;
  variant: "solid" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
};

const variantClasses: Record<ButtonProps["variant"], string> = {
  solid:
    "bg-gold text-white px-6 py-3 rounded font-medium text-sm hover:brightness-110 active:scale-95 transition-all duration-200 shadow-sm",
  outline:
    "border border-gold text-gold px-6 py-3 rounded font-medium text-sm hover:bg-gold hover:text-white transition-all duration-200",
};

export default function Button({
  label,
  variant,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-body ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
