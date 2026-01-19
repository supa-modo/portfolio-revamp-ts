import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Project } from "@/types";
import { TbArrowLeft } from "react-icons/tb";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { getProjectSlug } from "@/utils/slug";

export const AllProjectsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Number of tags to show initially (only on small screens)
  const initialTagCount = 6; // Show 6 tags initially on mobile
  // On large screens, show all tags. On small screens, use slice logic
  const visibleTags = isLargeScreen 
    ? allTags 
    : (showAllFilters ? allTags : allTags.slice(0, initialTagCount));
  const hasMoreTags = !isLargeScreen && allTags.length > initialTagCount;

  const handleProjectClick = (project: Project): void => {
    const slug = getProjectSlug(project);
    navigate(`/projects/${slug}`);
  };

  return (
    <div className="min-h-screen pt-16 bg-secondary-900">
      <div className="lg:px-36 mx-auto px-2 pb-12 pt-4 lg:py-12">
        {/* Header */}
        <div className="px-2 lg:px-0 mb-4 lg:mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary-300 hover:text-primary-400 text-sm lg:text-base transition-colors mb-6"
          >
            <TbArrowLeft className="h-4 lg:h-5 w-4 lg:w-5" />
            Previous Page
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold gradient-text mb-4">
            My Projects
          </h1>
          <p className="text-secondary-300 text-sm md:text-[0.9rem] lg:text-lg">
            Browse through most of my non-NDA projects and work
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-1.5 lg:gap-2">
            <AnimatePresence mode="wait">
              {visibleTags.map((tag) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setFilter(tag)}
                  className={`px-4 lg:px-6 py-1.5 rounded-full text-[0.67rem] md:text-xs lg:text-[0.83rem] font-medium transition-all ${
                    filter === tag
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                      : "bg-secondary-800 text-secondary-300 hover:bg-secondary-700"
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </AnimatePresence>
            
            {/* Show All / Show Less Button - Only on small screens */}
            {hasMoreTags && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="md:hidden px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all bg-secondary-700 text-secondary-200 hover:bg-secondary-600 flex items-center gap-1.5"
              >
                {showAllFilters ? (
                  <>
                    Show Less
                    <HiChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show All ({allTags.length - initialTagCount})
                    <HiChevronDown className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondary-400">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};
