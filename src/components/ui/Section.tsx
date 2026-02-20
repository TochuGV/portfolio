interface Props {
  id: string; // Ver si es necesario.
  title?: string;
  children: React.ReactNode;
  className?: string;
  gradientDirection?: 't' | 'b';
}

export const Section = ({ id, title, children, className="", gradientDirection }: Props) => {
  
  const bgClass = gradientDirection
    ? `bg-linear-to-${gradientDirection} from-slate-950 to-blue-900/25`
    : "bg-slate-950"
  
  return (
    <section id={id} className={`py-20 px-6 ${bgClass} ${className}`}>
      <div className="max-w-400 mx-auto">
        {title && (
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}