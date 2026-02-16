interface Props {
  name: string;
  icon: string;
  className?: string;
}

// Refactorizar para los íconos que no existen en SkillIcons!
// Revisar si 'w-10 h-10' está bien que sea estricto o variable.

export const BrandIcon = ({ name, icon, className="w-10 h-10" }: Props) => {
  const isUrl = icon.startsWith("http") || icon.startsWith("/");
  const imageSrc = isUrl ? icon : `https://skillicons.dev/icons?i=${icon}`;

  return (
    <img 
      src={imageSrc}
      alt={name}
      className={`object-contain select-none transition-transform duration-300 ${className}`}
      draggable="false"
      loading="lazy"
    />
  )
}