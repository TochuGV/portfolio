import type { AnchorHTMLAttributes } from "react"

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, className = "", target, rel, ...props }: Props) => {
  const safeRel = target === "_blank" ? rel || "noopener noreferrer" : rel;
  
  return (
    <a 
      target={target}
      rel={safeRel}
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}
