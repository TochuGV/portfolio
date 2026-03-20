import { BrandIcon, Card, Section } from "../ui"
import { techStack } from "../../data/Portfolio"

export const TechStack = () => {
  return (
    <Section id="tech-stack" title="Tech Stack" gradientDirection="b">
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {techStack.map((category) => (
            <Card
              key={category.name}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] p-6 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
            >
              <div className="border-b border-blue-900/30 pb-6 mb-4">
              <h3 className="text-xl font-bold text-blue-300 text-center">
                {category.name}
              </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-2 rounded-lg"
                  >
                    <BrandIcon
                      name={tech.name}
                      icon={tech.icon}
                      className="w-10 h-10 shrink-0"
                    />
                    <span className="text-gray-300 text-lg font-semibold select-none">{tech.name}</span>
                  </div>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}