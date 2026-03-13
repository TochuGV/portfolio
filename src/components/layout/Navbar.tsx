import { useState, useEffect } from "react";
import { Button, Link } from "../ui";
import logoImage from '../../assets/logo.png'
import { useTheme } from "../../context/ThemeContext";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi"

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ['Home', 'About Me', 'Projects', 'Experience', 'Tech Stack', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 py-4 shadow-lg"
        : "bg-transparent py-6 border-b border-transparent"
    }`}>
      <div className="max-w-960 mx-auto px-6 flex justify-between items-center">
        <Link 
          href="#home" 
          className="flex items-center gap-2 group transition-opacity hover:opacity-80"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            <img 
              src={logoImage}
              alt="Logo" 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" 
            />
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-md font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </Link>
          ))}

          <div className="flex items-center gap-4 ml-4">
            <Button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' && <FiSun size={20} />}
              {theme === 'dark' && <FiMoon size={20} />}
              {theme === 'system' && <FiMonitor size={20} />}
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4 text-slate-300">
          <Button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' && <FiSun size={20} />}
            {theme === 'dark' && <FiMoon size={20} />}
            {theme === 'system' && <FiMonitor size={20} />}
          </Button>
          <div className="cursor-pointer text-2xl">
            ☰
          </div>
        </div>
      </div>
    </nav>
  )
}