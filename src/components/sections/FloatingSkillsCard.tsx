import { motion } from "framer-motion";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiExpress,
  SiFlutter,
  SiReact,
  SiNodedotjs,
    SiVercel,
  SiRailway,
  SiGraphql,
  SiNextdotjs,
  SiFramer,
  SiFirebase,
  SiSequelize,
} from "react-icons/si";
import { PiCodeBold } from "react-icons/pi";
import { VscAzure } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: <FaReact className="w-4 h-4" />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" />, category: "Frontend" },
  { name: "TailwindCSS", icon: <SiTailwindcss className="w-4 h-4" />, category: "Frontend" },
  { name: "Framer Motion", icon: <SiFramer className="w-4 h-4" />, category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" />, category: "Backend" },
  { name: "Express", icon: <SiExpress className="w-4 h-4" />, category: "Backend" },
  { name: "REST APIs", icon: <PiCodeBold className="w-4 h-4" />, category: "Backend" },
  { name: "GraphQL", icon: <SiGraphql className="w-4 h-4" />, category: "Backend" },
  
  // Mobile
  { name: "React Native", icon: <SiReact className="w-4 h-4" />, category: "Mobile" },
  { name: "Flutter", icon: <SiFlutter className="w-4 h-4" />, category: "Mobile" },
  
  // Databases
  { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" />, category: "Database" },
  { name: "Redis", icon: <SiRedis className="w-4 h-4" />, category: "Database" },
  { name: "Firebase", icon: <SiFirebase className="w-4 h-4" />, category: "Database" },
  { name: "Sequelize", icon: <SiSequelize className="w-4 h-4" />, category: "Database" },
  
  // Cloud & DevOps
  { name: "AWS", icon: <FaAws className="w-4 h-4" />, category: "Cloud" },
  { name: "Azure", icon: <VscAzure className="w-4 h-4" />, category: "Cloud" },
  { name: "Docker", icon: <FaDocker className="w-4 h-4" />, category: "DevOps" },
  { name: "GitHub Actions", icon: <FaGithub className="w-4 h-4" />, category: "DevOps" },
  { name: "Vercel", icon: <SiVercel className="w-4 h-4" />, category: "DevOps" },
  { name: "Railway", icon: <SiRailway className="w-4 h-4" />, category: "DevOps" },
  { name: "Git", icon: <FaGitAlt className="w-4 h-4" />, category: "DevOps" },
];

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-400",
  Backend: "from-green-500/10 to-emerald-500/10 border-green-500/20 text-green-400",
  Mobile: "from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400",
  Database: "from-orange-500/10 to-red-500/10 border-orange-500/20 text-orange-400",
  Cloud: "from-yellow-500/10 to-amber-500/10 border-yellow-500/20 text-yellow-400",
  DevOps: "from-indigo-500/10 to-violet-500/10 border-indigo-500/20 text-indigo-400",
};

export const FloatingSkillsCard = () => {
  return (
    <div className="relative -mx-4 lg:mx-0 -mt-10 md:-mt-12 lg:-mt-16 z-40">
        {/* Background */}
      <div className="absolute inset-0 bg-linear-to-bl from-indigo-950 via-slate-900 to-indigo-950">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/bg01.jpg')",
          }}
        ></div>
      </div>
            {/* Modern grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-linear-to-b lg:from-slate-200 lg:via-primary-200 lg:to-primary-300 from-primary-100 via-primary-400 to-gray-950 pb-6 lg:pb-0  backdrop-blur-md rounded-t-4xl lg:rounded-3xl lg:border border-slate-700/50 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-primary-500/5 via-transparent to-accent-500/5" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[20px_20px] opacity-50" />

          <div className="relative pt-6 p-4 md:p-6 lg:p-8">
            {/* Compact Header */}
            <motion.div
              className="mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              
              <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 mb-2">
                Technologies I Work With
              </h3>
            </motion.div>

            {/* Compact Skills Grid - All in one flow */}
            <div className="flex flex-wrap gap-2 md:gap-2.5 -mx-1.5 lg:mx-0">
              {skills.map((skill, index) => {
                const category = skill.category;
                const colors = categoryColors[category] || categoryColors.Frontend;
                
                return (
                  <motion.div
                    key={skill.name}
                    className={`group relative inline-flex items-center gap-1.5 px-3 py-1.5 lg:py-2 md:px-3.5 md:py-2 rounded-full bg-primary-800/80 backdrop-blur-sm transition-all duration-300 cursor-default`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.02,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                   
                  >
                    <div className={`flex items-center justify-center ${colors.split(' ')[2]}`}>
                      {skill.icon}
                    </div>
                    <span className="text-xs md:text-sm lg:text-[0.9rem] font-medium text-slate-200 group-hover:text-white">
                      {skill.name}
                    </span>
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-lg bg-primary-500/0 group-hover:bg-primary-500/10 transition-all duration-300 blur-sm -z-10" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
