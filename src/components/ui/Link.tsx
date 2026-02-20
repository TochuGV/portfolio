interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self"
  rel?: string;
}

export const Link = ({ 
  href, 
  children, 
  className = "",
  target = "_self",
  rel = target === "_blank" ? "noopener noreferrer" : undefined
}: Props) => {
  return (
    <a 
      href={href}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </a>
  )
}
