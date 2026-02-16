type Variant = 'primary' | 'secondary'

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export const Badge = ({ children, variant = 'secondary', className = "" }: Props) => {
  const baseStyles = "px-2 py-1 text-xs font-medium rounded-md border transition-colors cursor-default";
  const variants = {
    primary:"bg-blue-900/20 text-blue-200 border-blue-500/30 hover:bg-blue-900/30 hover:border-blue-400/50",
    secondary: "bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500 hover:text-slate-100",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}