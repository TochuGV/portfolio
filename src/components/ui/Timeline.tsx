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
    <div className={`group relative pl-12 md:pl-16 ${className}`}>
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12.5 md:w-16.5 h-0.5 bg-blue-900/50 opacity-100 transition-all duration-300 group-hover:bg-blue-500/50 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.2)]"></span>
      <span className="absolute left-12 md:left-16 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 rounded-full z-5">
        <span className="absolute inset-0 rounded-full border border-transparent transition-all duration-300 [clip-path:polygon(-50%_-50%,50%_-50%,50%_150%,-50%_150%)] group-hover:border-blue-500/70 group-hover:shadow-[-2px_0_10px_rgba(59,130,246,0.2)]"></span>
      </span>
      <span className="absolute left-12 md:left-16 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"></span>
      {children}
    </div>
  )
}