import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-[#007BFF] hover:from-accent-hover hover:to-accent text-white shadow-lg shadow-accent/20 hover:shadow-accent/30",
  outline:
    "bg-transparent border border-border hover:border-accent/60 text-white hover:text-accent hover:bg-accent/5",
  ghost:
    "bg-transparent text-text-muted hover:text-white hover:bg-white/5",
  secondary:
    "bg-surface hover:bg-surface-raised text-white border border-border hover:border-accent/40",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2 rounded-lg gap-1.5",
  md: "text-sm px-5 py-2.5 rounded-lg gap-2",
  lg: "text-sm px-7 py-3.5 rounded-xl gap-2",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
