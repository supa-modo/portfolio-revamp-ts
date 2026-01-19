import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TbArrowLeft } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { findProjectBySlug } from "@/utils/slug";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Badge } from "@/components/ui/Badge";

export const ProjectDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (!slug) {
    navigate("/projects");
    return null;
  }

  const project = findProjectBySlug(slug);

  // 404 handling
  if (!project) {
    return (
      <div className="min-h-screen pt-16 bg-secondary-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-secondary-300 mb-8 text-lg">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors font-medium"
          >
            <TbArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-900">
      {/* Hero Carousel Section - Full Width, Starts from Navbar */}
      {project.images.length > 0 && (
        <div className="relative w-full h-[50vh] lg:h-[80vh] -mt-16">
          <ImageCarousel images={project.images} projectName={project.name} />
          {/* Project Name Overlay - Bottom Left */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-secondary-900 via-secondary-900/80 to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-2 md:bottom-4 lg:bottom-6 left-3 md:left-6 lg:left-20 z-20 pointer-events-auto"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg">
              {project.name}
            </h1>
          </motion.div>
        </div>
      )}

      {/* Back Button - Positioned over carousel or at top if no images */}
      <div className="relative z-30">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${project.images.length > 0 ? 'absolute top-3 md:top-4 lg:top-6 right-2 md:right-4 lg:right-12' : 'px-2 lg:px-0 pt-4 pb-6'} lg:px-20 mx-auto`}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-white hover:text-primary-400 text-xs md:text-[0.9rem] lg:text-base transition-colors bg-secondary-900/80 backdrop-blur-sm px-4 py-1.5 lg:py-2 rounded-lg border border-secondary-300/80 hover:border-primary-400/50"
          >
            <TbArrowLeft className="h-4 lg:h-5 w-4 lg:w-5" />
            Back to Projects
          </Link>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="lg:px-20 mx-auto px-2 pb-12 pt-4 md:pt-6 lg:pt-12">

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-2 lg:px-0"
        >
          <div className="max-w-screen-2xl mx-auto">
            {/* Description Section */}
            <div className="mb-8">
              <h2 className="text-base md:text-xl lg:text-2xl font-bold gradient-text mb-4">
                About This Project
              </h2>
              <p className="text-secondary-300 text-sm md:text-base lg:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies Section */}
            <div className="mb-8">
              <h2 className="text-base md:text-xl lg:text-2xl font-bold text-accent-200 mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links Section */}
            {(project.githubLink || project.liveLink) && (
              <div className="flex flex-wrap gap-4 pt-6 border-t border-secondary-700/30">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 md:px-6 py-2 lg:py-3 text-xs lg:text-sm bg-secondary-800 hover:bg-secondary-700 text-white rounded-lg transition-all duration-300 border border-secondary-700/30 hover:border-primary-500/30 font-medium"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Source Code</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 md:px-6 py-2 lg:py-3 text-xs lg:text-sm bg-linear-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white rounded-lg transition-all duration-300 font-medium shadow-lg shadow-primary-600/20"
                  >
                    <HiExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
