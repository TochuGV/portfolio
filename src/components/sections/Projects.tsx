import { useState } from "react"
import { Section } from "../ui"
import { projects } from "../../data/Portfolio"
import ProjectCard from "../projects/ProjectCard"
import ProjectCarouselModal from "../projects/ProjectCarouselModal"
import type { Project } from "../../types"

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const isAnyModalOpen = activeProject !== null;
  const handleCloseModal = () => setActiveProject(null);

  return (
    <Section id="projects" title="Projects" gradientDirection="b">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isAnyModalOpen={isAnyModalOpen}
            onOpenModal={() => setActiveProject(project)}
          />
        ))}
      </div>

      { activeProject && (
        <ProjectCarouselModal
          isOpen={isAnyModalOpen}
          onClose={handleCloseModal}
          images={activeProject.images}
          initialIndex={0}
        />
      )}
    </Section>
  );
};