import * as React from "react";
import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={clsx(
        "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none",
        "focus:ring-2 focus:ring-slate-200",
        className
      )}
      {...props}
    />
  );
}
