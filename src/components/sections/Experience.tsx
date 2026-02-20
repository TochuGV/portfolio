import { Badge, BrandIcon, Card, Section, Timeline, TimelineItem } from "../ui";
import { experience } from "../../data/Portfolio";

export const Experience = () => {
  return (
    <Section id="experience" title="Experience" className="bg-slate-900/50">
      <div className="max-w-400 mx-auto">
        <Timeline>
          {experience.map((exp) => (
            <TimelineItem key={exp.id}>
              <Card className="p-6 shadow-sm hover:border-blue-500/30 transition-colors duration-300">
                <h3 className="text-xl font-bold text-blue-300 mb-2">
                  {exp.position}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                  <a 
                    href={exp.company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center w-fit gap-2 group ${exp.company.url ? 'cursor-pointer' : 'pointer-events-none'}`}
                  >
                    {exp.company.logo && (
                      <BrandIcon
                        name={exp.company.name}
                        icon={exp.company.logo}
                        className="w-6 h-6 rounded bg-slate-100 p-0.5 shadow-sm object-contain transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-400/50 mr-1"
                      />
                    )}
                    <h4 className="text-lg text-slate-400 font-medium transition-colors duration-300 group-hover:text-blue-300">
                      {exp.company.name}
                      {exp.company.url && (
                        <span className="inline-block max-w-0 opacity-0 group-hover:max-w-5 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ease-in-out text-[10px] text-blue-300 overflow-hidden">
                          ↗
                        </span>
                      )}
                    </h4>
                  </a>

                  <span className="hidden sm:block text-slate-600">•</span>

                  <span className="inline-block px-3 py-1 text-xs font-mono text-blue-400 bg-blue-900/20 rounded-full border border-blue-900/30 w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  {exp.details.summary}
                </p>

                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-400">
                  {exp.details.achievements.map((item, index) => (
                    <li key={index} className="marker:text-blue-500/50">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {exp.technologies.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>

              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Section>
  );
};