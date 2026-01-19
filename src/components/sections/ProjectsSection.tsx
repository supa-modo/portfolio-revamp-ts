
import { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { PiLinkDuotone } from "react-icons/pi";
import { projects } from "@/data/projects";
// import { ProjectCard } from "../ui/ProjectCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useNavigate } from "react-router-dom";

export const ProjectsSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [featuredRef, isFeaturedVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: false });
  const [activeProject, setActiveProject] = useState(0);
  const navigate = useNavigate();
  // const featuredProjects = projects.slice(0, 6);

  // Next and previous project handlers
  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative pb-24 pt-14 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 lg:bg-linear-to-br lg:from-indigo-950 lg:via-slate-900 lg:to-indigo-950 bg-linear-to-b from-gray-950/80 to-gray-900">
        <div
          className="absolute inset-0 opacity-30 lg:opacity-35"
          style={{
            backgroundImage: "url('/bg01.jpg')",
          }}
        ></div>
      </div>
      
      {/* Modern grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-6 md:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full bg-primary-500/10 text-primary-200 border border-primary-300/20 mb-4">
            Some of My Work
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-3 gradient-text">
            Featured Projects
          </h2>
          <p className="text-secondary-300 text-[0.9rem] md:text-base lg:text-lg max-w-6xl mx-auto">
            Explore my portfolio of projects spanning web development, mobile applications, and innovative solutions.
          </p>
        </motion.div>

        {/* Featured Project Spotlight */}
        <div ref={featuredRef as React.RefObject<HTMLDivElement>} className="mb-6 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturedVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden -mx-2.5 lg:mx-0 rounded-3xl shadow-2xl shadow-indigo-500/10"
          >
            <div className="grid md:grid-cols-2 rounded-3xl bg-linear-to-br from-slate-900/90 via-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/30">
              {/* Featured Project Image */}
              <div className="relative h-68 md:h-84 lg:h-128 overflow-hidden">
                <motion.img
                  src={projects[activeProject].images[0]}
                  alt={projects[activeProject].name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 to-transparent md:bg-linear-to-t md:from-transparent md:to-transparent" />

                {/* Project navigation */}
                <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                  <button
                    onClick={prevProject}
                    className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/30 flex items-center justify-center text-white hover:bg-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300"
                  >
                    <HiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/30 flex items-center justify-center text-white hover:bg-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300"
                  >
                    <HiChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Project count indicator */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-xs text-white px-3 py-1 rounded-full border border-slate-700/30">
                  {activeProject + 1} / {projects.length}
                </div>
              </div>

              {/* Featured Project Info */}
              <div className="p-4 sm:p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <motion.h3
                    className="text-base md:text-lg lg:text-2xl font-extrabold text-indigo-300 mb-3"
                    key={projects[activeProject].name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {projects[activeProject].name}
                  </motion.h3>

                  <motion.p
                    className="text-slate-300 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed"
                    key={`desc-${activeProject}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {projects[activeProject].description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {projects[activeProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-0.5 lg:py-1 text-[0.65rem] lg:text-xs font-medium rounded-xl bg-linear-to-r from-indigo-500/10 to-purple-500/10 text-indigo-200 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Project links */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {projects[activeProject].githubLink && (
                    <a
                      href={projects[activeProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 md:px-5 px-4 md:py-2 py-1.5 text-xs lg:text-sm font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/30 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {projects[activeProject].liveLink && (
                    <a
                      href={projects[activeProject].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 md:px-6 px-4 md:py-2 py-1.5 text-xs lg:text-[0.8rem] font-medium rounded-lg bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white transition-all duration-300"
                    >
                      <PiLinkDuotone className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/projects")}
            className="w-full lg:w-auto flex items-center justify-center text-sm lg:text-base font-semibold gap-2  bg-linear-to-r from-slate-600 via-slate-500 to-slate-700 text-white hover:from-primary-600 hover:via-accent-600 hover:to-accent-700 px-8 py-3 rounded-xl transition-all duration-300"
          >
            Go to All Projects Page
            <HiArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
