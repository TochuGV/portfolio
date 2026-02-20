interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Button = ({ children, className="", href, onClick }: Props) => {
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}