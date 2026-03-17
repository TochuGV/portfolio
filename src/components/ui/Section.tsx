interface Props {
  id: string; // Ver si es necesario.
  title?: string;
  children: React.ReactNode;
  className?: string;
  gradientDirection?: 't' | 'b';
}

export const Section = ({ id, title, children, className="", gradientDirection }: Props) => {
  
  // bg-linear-to-t bg-linear-to-b
  const bgClass = gradientDirection
    ? `bg-linear-to-${gradientDirection} from-blue-300 to-blue-200 dark:from-slate-950 dark:to-blue-900/25`
    : "bg-blue-100 dark:bg-slate-950"
  
  return (
    <section id={id} className={`py-20 px-6 overflow-hidden ${bgClass} ${className}`}>
      <div className="max-w-240 w-full mx-auto">
        {title && (
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}