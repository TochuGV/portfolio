interface Props {
  name: string;
  icon: string;
  className?: string;
}

// Refactorizar para los íconos que no existen en SkillIcons!
// Revisar si 'w-10 h-10' está bien que sea estricto o variable.

export const BrandIcon = ({ name, icon, className="w-10 h-10" }: Props) => {
  const isUrl = icon.startsWith("http") || icon.startsWith("/");
  const isSolidBox = icon.includes("trello");
  const imageSrc = isUrl ? icon : `https://skillicons.dev/icons?i=${icon}`;
  const customBgClass = isUrl && !isSolidBox 
    ? "bg-[#242938] p-1.5 rounded-xl" 
    : (isSolidBox ? "rounded-xl" : "");

  return (
    <img
      src={imageSrc}
      alt={name}
      className={`object-contain select-none transition-transform duration-300 ${className} ${customBgClass}`}
      draggable="false"
      loading="lazy"
    />
  )
}