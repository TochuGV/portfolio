import { Navbar, Footer } from "./components/layout"
import { Hero, AboutMe, Projects, Experience, TechStack, Contact } from "./components/sections";

const App = () => {
  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default App