interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className="" }: Props) => {
  return (
    <div className={`bg-slate-900/80 rounded-xl p-6 border border-blue-900/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 ${className}`}>
      {children}
    </div>
  )
}