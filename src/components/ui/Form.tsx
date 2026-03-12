import type { FormHTMLAttributes, Ref } from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  ref?: Ref<HTMLFormElement>;
}

export const Form = ({ children, ref, className = "", ...props}: Props) => {
  return (
    <form
      ref={ref}
      className={`space-y-6 ${className}`}
      {...props}
    >
      {children}
    </form>
  )
}