import { Section } from "../ui";
import { projects } from "../../data/Portfolio";
import ProjectCard from "../projects/ProjectCard"

export const Projects = () => {
  return (
    <Section id="projects" title="Projects" className="bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};