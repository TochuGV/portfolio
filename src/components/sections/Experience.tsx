import { experience } from "../../data/Portfolio";
import { Badge } from "../ui/Badge";
import { Section } from "../ui/Section";
import { Timeline, TimelineItem } from "../ui/Timeline";

export const Experience = () => {
  return (
    <Section id="experience" title="Experience" className="bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <Timeline>
          {experience.map((exp) => (
            <TimelineItem key={exp.id}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                <h3 className="text-xl font-bold text-blue-300">
                  {exp.position}
                </h3>
                <span className="hidden sm:block text-slate-600">•</span>
                <h4 className="text-lg text-slate-400 font-medium">
                  {exp.company}
                </h4>
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-mono text-blue-400 bg-blue-900/20 rounded-full border border-blue-900/30">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed text-lg">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Section>
  )
}