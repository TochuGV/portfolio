import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className = "", ...props }: Props) => {
  return (
    <input
      className={`px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${className}`}
      {...props}
    />
  );
};