import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className = "", type = "button", ...props }: Props) => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  )
}

// Revisar 'className' para pasar estilos en común de los botones.
// Si no son similares, eliminar atributo.