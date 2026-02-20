interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className = "", onClick }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}