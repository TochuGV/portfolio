export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-blue-900/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tobías Vallejos. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs">
          Built with <span className="text-sky-300">React</span>, <span className="text-teal-500">Tailwind</span> & <span className="text-blue-400">TypeScript</span>.
        </p>
      </div>
    </footer>
  )
}