import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { Badge } from "../ui/Badge"
import { Card } from "../ui/Card"
import type { Project } from "../../types"

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="group overflow-hidden flex flex-col h-full hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20">
      
      <div className="relative h-48 overflow-hidden bg-slate-950 p-4 group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 to-transparent opacity-60"></div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4 grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs py-0.5">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 pt-4 border-t border-slate-700/50 mt-auto">
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
          >
            <FaGithub size={18} className="group-hover/link:text-white transition-colors" />
            <span>Code</span>
          </a>

          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
            >
              <FiExternalLink size={18} className="group-hover/link:text-blue-300 transition-colors" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard