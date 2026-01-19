import { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
}

export const Badge = ({
  children,
  variant = "default",
  className = "",
  ...props
}: BadgeProps) => {
  const baseStyles = "px-3 py-0.5 lg:py-1 rounded-full text-[0.65rem] md:text-[0.7rem] lg:text-[0.8rem] font-medium";
  
  const variantStyles = {
    default: "bg-secondary-700/50 text-secondary-200 border border-secondary-600/30",
    primary: "bg-primary-500/10 text-primary-300 border border-primary-500/20",
    secondary: "bg-accent-500/10 text-accent-300 border border-accent-500/20",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
