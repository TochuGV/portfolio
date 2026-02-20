interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const IconLink = ({ href, children, className="" }: Props) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:scale-110 transition-transform ${className}`}
    >
      {children}
    </a>
  )
}