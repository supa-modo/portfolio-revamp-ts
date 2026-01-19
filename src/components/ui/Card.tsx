import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "elevated";
}

export const Card = ({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) => {
  const baseStyles = "bg-secondary-900/50 backdrop-blur-sm rounded-t-3xl lg:rounded-2xl py-5 px-3 lg:p-5 border border-secondary-700/30";
  
  const variantStyles = {
    default: "",
    elevated: "shadow-lg",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
