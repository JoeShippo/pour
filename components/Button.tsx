import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "plain" ;
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  sizeSm?: ButtonSize;
  size2xl?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type ButtonAsButton = BaseProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center rounded-full font-sans font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const sizesSm: Record<ButtonSize, string> = {
  sm: "sm:px-4 sm:py-2 sm:text-xs",
  md: "sm:px-6 sm:py-3 sm:text-sm",
  lg: "sm:px-8 sm:py-4 sm:text-base",
};

const sizes2xl: Record<ButtonSize, string> = {
  sm: "2xl:px-4 2xl:py-2 2xl:text-xs",
  md: "2xl:px-6 2xl:py-3 2xl:text-sm",
  lg: "2xl:px-8 2xl:py-4 2xl:text-base",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-paper hover:bg-accent-dark",
  secondary:
    "border border-accent text-ink hover:bg-accent hover:text-paper",
  accent: "border border-accent text-paper hover:bg-accent hover:text-paper",
  plain: "border-accent text-paper hover:border-b",
};

export default function Button({
  variant = "primary",
  size = "md",
  sizeSm,
  size2xl,
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${sizeSm ? sizesSm[sizeSm] : ""} ${size2xl ? sizes2xl[size2xl] : ""} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
