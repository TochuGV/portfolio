import { Navbar, Footer } from "./components/layout"
import { Hero, AboutMe, Projects, Experience, TechStack } from "./components/sections";

const App = () => {
  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <TechStack />

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">
            Contacto
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <div className="bg-slate-900/80 rounded-2xl p-8 border border-blue-900/30">
            <div className="flex flex-col gap-4">
              <a
                href="mailto:tu@email.com"
                className="flex items-center justify-center gap-3 p-4 bg-blue-900/30 hover:bg-blue-900/50 rounded-lg transition-colors border border-blue-800/50"
              >
                <img 
                  src="https://skillicons.dev/icons?i=gmail"
                  alt="Email"
                  className="w-8 h-8"
                />
                <span className="text-gray-300">tu@email.com</span>
              </a>
              <a
                href="https://github.com/tuusuario"
                className="flex items-center justify-center gap-3 p-4 bg-blue-900/30 hover:bg-blue-900/50 rounded-lg transition-colors border border-blue-800/50"
              >
                <img 
                  src="https://skillicons.dev/icons?i=github"
                  alt="GitHub"
                  className="w-8 h-8"
                />
                <span className="text-gray-300">github.com/tuusuario</span>
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                className="flex items-center justify-center gap-3 p-4 bg-blue-900/30 hover:bg-blue-900/50 rounded-lg transition-colors border border-blue-800/50"
              >
                <img 
                  src="https://skillicons.dev/icons?i=linkedin"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
                <span className="text-gray-300">linkedin.com/in/tuusuario</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default App