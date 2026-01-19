import { useState } from "react";
import { Project } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { Badge } from "../ui/Badge";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const ProjectModal = ({
  project,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
}: ProjectModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-secondary-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-secondary-700/30">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-secondary-700/30">
                <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-secondary-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
                {/* Image Gallery */}
                {project.images.length > 0 && (
                  <div className="relative h-64 md:h-96 bg-secondary-800">
                    <img
                      src={project.images[activeImageIndex]}
                      alt={`${project.name} - Image ${activeImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {project.images.length > 1 && (
                      <>
                        {hasPrev && (
                          <button
                            onClick={onPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                            aria-label="Previous image"
                          >
                            <HiChevronLeft className="h-6 w-6" />
                          </button>
                        )}
                        {hasNext && (
                          <button
                            onClick={onNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                            aria-label="Next image"
                          >
                            <HiChevronRight className="h-6 w-6" />
                          </button>
                        )}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveImageIndex(index)}
                              className={`h-2 rounded-full transition-all ${
                                index === activeImageIndex
                                  ? "w-8 bg-primary-500"
                                  : "w-2 bg-secondary-600"
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <p className="text-secondary-300">{project.description}</p>

                  <div>
                    <h3 className="text-white font-semibold mb-2">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-secondary-800 hover:bg-secondary-700 text-white rounded-lg transition-colors"
                      >
                        <FaGithub className="h-5 w-5" />
                        View Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 gradient-bg text-white rounded-lg transition-colors"
                      >
                        <HiExternalLink className="h-5 w-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
