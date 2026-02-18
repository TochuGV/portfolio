interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className="" }: Props) => {
  return (
    <div className={`
    bg-slate-900/80 
      backdrop-blur-sm 
      rounded-xl 
      border border-blue-900/30
      ${className}
      `}
    >
      {children}
    </div>
  )
}