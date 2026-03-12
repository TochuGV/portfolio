import type { LabelHTMLAttributes } from "react";

type Props = LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ className = "", children, ...props }: Props) => {
  return (
    <label
      className={`text-sm font-medium text-slate-700 dark:text-slate-300 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};