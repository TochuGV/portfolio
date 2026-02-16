interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Timeline = ({ children, className = "" }: Props) => {
  return (
    <div className={`relative border-l-2 border-blue-900/50 ml-3 md:ml-6 space-y-10 ${className}`}>
      {children}
    </div>
  )
}

export const TimelineItem = ({ children, className = "" }: Props) => {
  return (
    <div className={`relative pl-8 md:pl-12 ${className}`}>
      <span className="absolute -left-2.25 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
      {children}
    </div>
  )
}