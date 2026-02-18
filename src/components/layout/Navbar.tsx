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
  // <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-blue-900/20">

  const navItems = ['Home', 'About Me', 'Projects', 'Experience', 'Tech Stack', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg"
        : "bg-transparent py-6 border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          TGV
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
        </div>

        <div className="md:hidden text-slate-300">
          ☰
        </div>
      </div>
    </nav>
  )
}