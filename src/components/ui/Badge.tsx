type Variant = 'primary' | 'secondary'

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export const Badge = ({ children, variant = 'secondary', className = "" }: Props) => {
  const baseStyles = "px-2 text-xs rounded-md border transition-colors cursor-default";
  const variants = {
    primary:"bg-blue-500/5 text-blue-400 font-bold uppercase tracking-wider border-blue-500/20 px-2 py-0.5 rounded",
    secondary: "bg-slate-800 text-slate-300 font-medium border-slate-700 py-1 rounded-md",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}