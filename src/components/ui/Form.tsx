import type { FormHTMLAttributes } from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const Form = ({ children, className = "", ...props}: Props) => {
  return (
    <form
      className={`space-y-6 ${className}`}
      {...props}
    >
      {children}
    </form>
  )
}