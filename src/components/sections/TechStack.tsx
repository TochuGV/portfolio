import { BrandIcon, Card, Section } from "../ui"
import { techStack } from "../../data/Portfolio"

export const TechStack = () => {
  return (
    <Section id="tech-stack" title="Tech Stack">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category) => (
            <Card
              key={category.name}
              className="p-6 hover:bg-slate-800/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-300 text-center">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-900/20 transition-colors"
                  >
                    <BrandIcon
                      name={tech.name}
                      icon={tech.icon}
                      className="w-10 h-10"
                    />
                    <span className="text-gray-300 font-semibold select-none">{tech.name}</span>
                  </div>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}