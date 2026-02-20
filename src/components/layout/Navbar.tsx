import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg"
        : "bg-transparent py-6 border-b border-transparent"
    }`}>
      <div className="max-w-960 mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center gap-2 group transition-opacity hover:opacity-80"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            <img 
              src="src/assets/logo.png"
              alt="Logo" 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" 
            />
          </div>
        </a>
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-md font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="/resume/CV_Tobías_Vallejos_ENG.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300 font-medium"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden text-slate-300">
          ☰
        </div>
      </div>
    </nav>
  )
}