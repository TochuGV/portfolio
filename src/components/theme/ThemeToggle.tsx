import { useTheme } from "../../context/ThemeContext";
import type { Theme } from "../../context/ThemeContext";
import { Button } from "../ui"
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: Theme) => () => {
    setTheme(newTheme);
  };

  const options: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: 'light', icon: <FiSun size={16} />, label: 'Light' },
    { value: 'system', icon: <FiMonitor size={16} />, label: 'System' },
    { value: 'dark', icon: <FiMoon size={16} />, label: 'Dark' }
  ];

  return (
    <div className="flex items-center p-1 bg-slate-200 dark:bg-slate-800 rounded-full border border-slate-300 dark:border-slate-700">
      {options.map((option) => {
        const isActive = theme === option.value;
        return (
          <Button
            key={option.value}
            onClick={handleThemeChange(option.value)}
            aria-label={option.label}
            className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center
              ${isActive
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }
            `}
          >
            {option.icon}
          </Button>
        )
      })}
    </div>
  )
}