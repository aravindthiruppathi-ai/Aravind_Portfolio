import * as React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "solid" | "outline" | "link";
  size?: "sm" | "md";
  className?: string;
};

export function Button({ asChild, variant = "solid", size = "md", className, ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl border transition px-4 py-2 text-sm";
  const variants = {
    solid: "bg-slate-900 text-white border-slate-900 hover:opacity-90",
    outline: "bg-white text-slate-900 border-slate-300 hover:bg-slate-50",
    link: "border-transparent p-0 text-slate-900 underline hover:opacity-80"
  };
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "" };

  if (asChild) {
    // @ts-expect-error: allow anchor-as-button
    return <a className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
  }
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}
