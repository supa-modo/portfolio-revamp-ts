import { useMemo } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { Experience } from "@/types";
import { TbCalendarDot } from "react-icons/tb";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { RiUserStarLine } from "react-icons/ri";

// Stacked Timeline Card Component
interface StackedCardProps {
  experience: Experience;
  index: number;
  isVisible: boolean;
  isLast: boolean;
}

const StackedTimelineCard = ({
  experience,
  index,
  isVisible,
}: StackedCardProps) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className="relative w-full max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Card Container with Conditional Borders */}
      <div
        className={`group relative overflow-hidden border-y-4 -mt-[0.45rem] lg:-mt-1.5 lg:pl-8 ${
          isLeft
            ? "rounded-l-4xl lg:rounded-l-3xl rounded-bl-4xl lg:rounded-y-3xl border-l-8 border-primary-100 mr-4 lg:mr-3.5"
            : "rounded-r-4xl lg:rounded-r-3xl rounded-br-4xl lg:rounded-y-3xl border-r-8 border-primary-100 ml-[1.2rem] lg:ml-3.5"
        }  transition-all duration-500`}
      >
      
      

        {/* Card Content */}
        <div className={`relative
         ${isLeft ? "pl-6" : "pr-4"} py-6 md:p-8`}>
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <h3 className="text-base md:text-lg lg:text-2xl font-extrabold text-white  group-hover:text-accent-200 transition-colors">
                  {experience.position}
                </h3>
                <div className="text-sm md:text-[0.9rem] lg:text-lg font-semibold text-primary-400">
                  {experience.company}
                </div>
              </div>
              {/* Index Badge */}
              <div
                className={`shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary-900 font-extrabold lg:text-lg shadow-lg ${
                  isLeft ? "order-first" : "order-last"
                }`}
              >
                {index + 1}
              </div>
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-xs lg:text-sm text-secondary-400">
              <div className="flex items-center gap-1.5">
                <TbCalendarDot className="w-5 h-5 text-accent-500" />
                <span>{experience.duration}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-secondary-700" />
              <div className="flex items-center gap-1.5">
                <PiMapPinAreaDuotone className="w-4 h-4 text-secondary-300" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-secondary-300 leading-relaxed mb-5 text-sm lg:text-base">
            {experience.description}
          </p>

          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-5">
              
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[0.83rem] lg:text-[0.95rem] text-secondary-400"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-300 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="pt-5 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {experience.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-[0.5] lg:py-1 rounded-full text-[0.65rem] lg:text-xs font-semibold bg-white/20 text-secondary-300 border border-white/25 hover:bg-white/10 hover:text-white transition-all"
                >
                  {tech}
                </span>
              ))}
              {experience.technologies.length > 6 && (
                <span className="px-3 py-[0.5] lg:py-1 rounded-full text-xs font-semibold text-secondary-300">
                  +{experience.technologies.length - 6} more
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// Stacked Timeline Section Component
const StackedTimelineSection = ({
  experiences,
  isVisible,
}: {
  experiences: Experience[];
  isVisible: boolean;
}) => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Scrollable Container with Max Height*/}
      <div className="-mx-2.5 lg:mx-0 overflow-hidden rounded-b-3xl relative max-h-[85vh]">
       
        {/* Scrollable Content */}
        <div 
          className="relative h-full max-h-[85vh] overflow-y-auto overflow-x-hidden px-2 lg:px-0 pb-12 timeline-scroll-container"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          {/* Cards Stack */}
          <div className="-mx-2 lg:mx-0 relative space-y-0 py-4 md:py-6">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <StackedTimelineCard
                  experience={experience}
                  index={index}
                  isVisible={isVisible}
                  isLast={index === experiences.length - 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Fade Gradient - indicates scrollable content below (Desktop only) */}
        <div className=" absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-secondary-900 via-secondary-900/80 to-transparent pointer-events-none z-20 rounded-b-lg" />
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Use chronological order: Oldest (Start) -> Newest (Present)
  const timelineData = useMemo(() => [...experiences], []);

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 overflow-hidden border-t border-primary-300/20"
    >
       {/* Background */}
       <div className="absolute inset-0 lg:bg-linear-to-bl lg:from-indigo-950 lg:via-slate-900 lg:to-indigo-950 bg-linear-to-b from-gray-900 to-gray-950">
        <div
          className="absolute inset-0 opacity-30 lg:opacity-35"
          style={{
            backgroundImage: "url('/bg01.jpg')",
          }}
        ></div>
      </div>
      
      {/* Modern grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[24px_24px]" />
      
      {/* Custom Scrollbar Styles */}
      <style>{`
        .timeline-scroll-container::-webkit-scrollbar {
          width: 8px;
        }
        .timeline-scroll-container::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 4px;
        }
        .timeline-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6366f1, #a855f7);
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        .timeline-scroll-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #818cf8, #c084fc);
        }
      `}</style>

      <div className="px-4 lg:px-12 relative z-10 mx-auto">
      <motion.div
          className="text-center mb-6 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full bg-primary-500/10 text-primary-200 border border-primary-300/20 mb-4 lg:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <RiUserStarLine className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Work History
          </motion.div>
         
          <h2 className="text-3xl mt-2 md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 text-white">
            Work{" "}
            <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="h-1 w-16 md:w-20 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto ">
            My professional journey across various companies and projects
          </p>
        </motion.div>

        <StackedTimelineSection 
          experiences={timelineData} 
          isVisible={isVisible} 
        />
      </div>
    </section>
  );
};
