interface Props {
  id: string; // Ver si es necesario.
  title?: string; // Revisar 'Hero'.
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className="" }: Props) => {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
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