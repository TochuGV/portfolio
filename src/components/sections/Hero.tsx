import { BrandIcon, Link, Section } from "../ui"
import profileImage from "../../assets/logo.png"

export const Hero = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center py-20 px-4 md:px-8" gradientDirection="b">
      <div className="w-full">
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
            
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white border-2 border-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:border-blue-700 hover:shadow-[0_0_2rem] hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_2rem] hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                View Projects
              </Link>
            </div>
            
            <div className="flex gap-5">
              <Link href="https://github.com/TochuGV" className="hover:scale-110 transition-transform">
                <BrandIcon name="GitHub" icon="github" />
              </Link>
              
              <Link href="https://linkedin.com/in/tobiasvallejos" className="hover:scale-110 transition-transform">
                <BrandIcon name="LinkedIn" icon="linkedin" />
              </Link>
              
              <Link href="mailto:tu@email.com" className="hover:scale-110 transition-transform">
                <BrandIcon name="Gmail" icon="gmail" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-96">
              <img 
                src={profileImage}
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