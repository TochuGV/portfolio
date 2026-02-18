import { Navbar, Footer } from "./components/layout"
import { AboutMe, Projects, Experience, TechStack } from "./components/sections";

const App = () => {
  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Hola, soy [Tu Nombre]
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            Desarrollador Full Stack
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Apasionado por crear experiencias web increíbles y soluciones innovadoras.
            Especializado en desarrollo frontend y backend con tecnologías modernas.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contacto"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </a>
            <a
              href="#proyectos"
              className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              Ver Proyectos
            </a>
          </div>
          
          {/* Social Icons con Skill Icons */}
          <div className="flex gap-6 justify-center mt-8">
            <a href="#" className="hover:scale-110 transition-transform">
              <img 
                src="https://skillicons.dev/icons?i=github" 
                alt="GitHub"
                className="w-10 h-10"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img 
                src="https://skillicons.dev/icons?i=linkedin" 
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
            <a href="mailto:tu@email.com" className="hover:scale-110 transition-transform">
              <img 
                src="https://skillicons.dev/icons?i=gmail" 
                alt="Email"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </section>

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