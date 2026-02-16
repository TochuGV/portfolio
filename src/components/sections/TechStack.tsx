import { techStack } from "../../data/Portfolio"
import { Section } from "../ui/Section"

export const TechStack = () => {
  return (
    <Section id="tech-stack" title="Tech Stack">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category) => (
            <div
              key={category.name}
              className="bg-slate-900/80 rounded-xl p-6 border border-blue-900/30"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-900/20 transition-colors"
                  >
                    <img 
                      src={`https://skillicons.dev/icons?i=${tech.icon}`}
                      alt={tech.name}
                      className="w-10 h-10"
                    />
                    <span className="text-gray-300 font-semibold">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </Section>
  )
}