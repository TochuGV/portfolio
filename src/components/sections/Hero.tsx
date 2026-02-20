import { BrandIcon, Button, IconLink, Section } from "../ui"

export const Hero = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center py-20 px-4 md:px-8">
      <div className="max-w-450 mx-auto w-full">
        <div className="grid md:grid-cols-[55%_45%] gap-16 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              Tobías Vallejos
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">
              Full Stack Developer
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Building web applications from concept to deployment, 
              with focus on scalability and user experience.
            </p>
            
            <div className="flex gap-4 mb-8">
              <Button
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </Button>
              <Button
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg transition-all duration-300"
              >
                View Projects
              </Button>
            </div>
            
            <div className="flex gap-5">
              <IconLink href="https://github.com/TochuGV">
                <BrandIcon name="GitHub" icon="github" />
              </IconLink>
              
              <IconLink href="https://linkedin.com/in/tobiasvallejos">
                <BrandIcon name="LinkedIn" icon="linkedin" />
              </IconLink>
              
              <IconLink href="mailto:tu@email.com">
                <BrandIcon name="Gmail" icon="gmail" />
              </IconLink>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-96">
              <img 
                src="src/assets/logo.png"
                alt="Tobías Vallejos"
                className="w-full h-full object-cover rounded-2xl border-2 border-blue-500/30 shadow-2xl shadow-blue-900/20"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}