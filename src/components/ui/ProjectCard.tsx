import { Project } from "@/types";
import { Badge } from "./Badge";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-secondary-700/30 bg-secondary-900/50 backdrop-blur-sm transition-colors duration-500 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 cursor-pointer"
      onClick={onClick}
    >
      {/* Project Image */}

      {project.images.length > 0 && (
        <div className="relative h-48 overflow-hidden">
        <motion.img
        src={project.images[0]}
            alt={project.name}
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
        
          <div className="absolute inset-0 bg-linear-to-t from-secondary-900 via-secondary-900/50 to-transparent" />
        </div>
      )}

      {/* Project Content */}
      <div className="p-3 md:p-4 lg:p-5">
        <h3 className="text-base md:text[1.1rem] lg:text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
          {project.name}
        </h3>
        <p className="text-secondary-300 text-xs md:text-[0.8rem] lg:text-sm mb-2.5 md:mb-3 lg:mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="default">+{project.tags.length - 3}</Badge>
          )}
        </div>

        {/* Links */}
        <div className="pl-2 flex gap-3">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors text-xs md:text-[0.8rem]"
            >
              <FaGithub className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
              <span>Code</span>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors text-xs md:text-[0.8rem]"
            >
              <HiExternalLink className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
