const App = () => {
  // Datos de ejemplo - reemplaza con tus datos reales
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción breve del proyecto. Explica qué problema resuelve y las características principales.",
      technologies: [
        { name: "React", icon: "react" },
        { name: "TypeScript", icon: "ts" },
        { name: "Node.js", icon: "nodejs" },
        { name: "MongoDB", icon: "mongodb" }
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción breve del proyecto. Explica qué problema resuelve y las características principales.",
      technologies: [
        { name: "Next.js", icon: "nextjs" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "PostgreSQL", icon: "postgres" }
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Descripción breve del proyecto. Explica qué problema resuelve y las características principales.",
      technologies: [
        { name: "Python", icon: "py" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Docker", icon: "docker" }
      ],
      github: "#",
      demo: "#"
    }
  ];

  const experience = [
    {
      id: 1,
      position: "Desarrollador Full Stack",
      company: "Empresa ABC",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web utilizando React y Node.js. Implementación de APIs RESTful y gestión de bases de datos."
    },
    {
      id: 2,
      position: "Desarrollador Frontend",
      company: "Empresa XYZ",
      period: "2021 - 2023",
      description: "Creación de interfaces de usuario responsivas. Optimización de rendimiento y experiencia de usuario."
    },
    {
      id: 3,
      position: "Desarrollador Junior",
      company: "Startup Tech",
      period: "2020 - 2021",
      description: "Desarrollo de componentes reutilizables. Colaboración en proyectos ágiles con equipo multidisciplinario."
    }
  ];

  const techStack = {
    "Frontend": [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" }
    ],
    "Backend": [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "py" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Express", icon: "express" }
    ],
    "Bases de Datos": [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MySQL", icon: "mysql" }
    ],
    "Herramientas": [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "VSCode", icon: "vscode" }
    ]
  };

  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-blue-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Mi Portfolio
            </h1>
            <div className="flex gap-6">
              {['Inicio', 'Sobre Mí', 'Proyectos', 'Experiencia', 'Tech Stack', 'Contacto'].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

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

      {/* About Me Section */}
      <section id="sobre-mí" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
            Sobre Mí
          </h2>
          <div className="bg-slate-900/80 rounded-2xl p-8 border border-blue-900/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Soy un desarrollador full stack con experiencia en la creación de aplicaciones web
              modernas y escalables. Me apasiona aprender nuevas tecnologías y resolver problemas
              complejos con código limpio y eficiente.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Cuando no estoy programando, disfruto [tus hobbies]. Siempre busco nuevos desafíos
              y oportunidades para crecer profesionalmente.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
            Proyectos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/80 rounded-xl p-6 border border-blue-900/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-3 text-blue-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <img 
                          src={`https://skillicons.dev/icons?i=${tech.icon}`}
                          alt={tech.name}
                          className="w-10 h-10"
                          title={tech.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <img 
                      src="https://skillicons.dev/icons?i=github"
                      alt="GitHub"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experiencia" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
            Experiencia
          </h2>
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-900/50"></div>
            
            {experience.map((exp, idx) => (
              <div
                key={exp.id}
                className={`relative mb-12 ${
                  idx % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                }`}
              >
                {/* Punto en la línea */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                
                <div className={`ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-slate-900/80 rounded-xl p-6 border border-blue-900/30 hover:border-blue-600/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2 text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span className="text-sm font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-300 mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-gray-400 mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, techs]) => (
              <div
                key={category}
                className="bg-slate-900/80 rounded-xl p-6 border border-blue-900/30"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  {category}
                </h3>
                <div className="space-y-3">
                  {techs.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-900/20 transition-colors"
                    >
                      <img 
                        src={`https://skillicons.dev/icons?i=${tech.icon}`}
                        alt={tech.name}
                        className="w-10 h-10"
                      />
                      <span className="text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-900/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 [Tu Nombre]. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App