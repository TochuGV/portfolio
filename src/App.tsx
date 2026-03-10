import { ThemeProvider } from "./context/ThemeProvider";
import { Navbar, Footer } from "./components/layout"
import { Hero, AboutMe, Projects, Experience, TechStack, Contact } from "./components/sections";
import useScrollbar from "./hooks/useScrollbar";

const App = () => {
  useScrollbar();
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 min-h-screen">
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App