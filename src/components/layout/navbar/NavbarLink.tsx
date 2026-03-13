import { Link } from "../../ui";

interface Props {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavbarLink = ({ href, children, onClick }: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg md:text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  )
}