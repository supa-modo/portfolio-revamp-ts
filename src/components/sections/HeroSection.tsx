import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp, FaReact, FaNode, FaDatabase } from "react-icons/fa";
import {  TbBrandTypescript, TbMailFilled } from "react-icons/tb";
import { SiRedis, SiAmazon, SiPostgresql, SiNodedotjs, SiTypescript } from "react-icons/si";
import { PiCodeDuotone, PiCodeBold } from "react-icons/pi";
import { Button } from "../ui/Button";
import { SOCIAL_LINKS } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-10 md:pt-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/bg01.jpg')",
          }}
        ></div>
      </div>

      {/* Modern grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[24px_24px]" />


      <div className="container relative z-10 mx-auto px-4 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs md:text-[0.83rem] lg:text-sm">
              
              <span className="text-white font-semibold">Greetings Visitor,</span>
            </div>

            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="block">
                  <GradientText
                    text="I'm Eddy Ochieng"
                    delay={0.6}
                    gradient="from-white via-slate-100 to-accent-300"
                  />
                </span>
                <div className="flex items-center space-x-2">
                  <span className="block mt-2">
                    <GradientText
                      text="Odhiambo"
                      delay={1.2}
                      gradient="gradient-text"
                    />
                  </span>
                  <motion.span
                    className="animate-pulse text-indigo-300 text-4xl md:text-5xl lg:text-6xl"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                    }}
                  >
                    |
                  </motion.span>
                </div>
              </motion.h1>
              <motion.div
                className="h-1.5 w-24 bg-linear-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              />
            </div>

            <p className="text-lg lg:text-xl font-outfit text-secondary-300 leading-relaxed max-w-2xl">
              I transform complex business challenges into <span className="font-bold gradient-text">scalable, production-ready software solutions</span> with enterprise-grade standards, integrations, real-time processing, and robust backend architectures that drive business growth.
            </p>

            <div className="py-2">
              <div className="flex flex-wrap gap-3">
                <EnhancedTechBadge
                  icon={<SiTypescript className="h-4 w-4 text-slate-900" />}
                  label="TypeScript"
                  color="from-slate-300/80 to-slate-400/80"
                  textColor="text-slate-900"
                />
                <EnhancedTechBadge
                  icon={<FaReact className="h-4 w-4 text-slate-900" />}
                  label="React"
                  color="from-slate-300/80 to-slate-400/80"
                  textColor="text-slate-900"
                />
                <EnhancedTechBadge
                  icon={<SiNodedotjs className="h-4 w-4 text-slate-900" />}
                  label="Node.js"
                  color="from-slate-300/80 to-slate-400/80"
                  textColor="text-slate-900"
                />
                <EnhancedTechBadge
                  icon={<SiPostgresql className="h-4 w-4 text-slate-900" />}
                  label="PostgreSQL"
                  color="from-slate-300/80 to-slate-400/80"
                  textColor="text-slate-900"
                />
                 <EnhancedTechBadge
                  icon={<PiCodeBold className="h-4 w-4 text-slate-900" />}
                  label="Microservices"
                  color="from-slate-300/80 to-slate-400/80"
                  textColor="text-slate-900"
                />
               
                
                <EnhancedTechBadge
                  icon={<PiCodeDuotone className="h-5 w-5 text-slate-900" />}
                  label="API Integrations"
                  color="from-slate-300/80 to-slate-400/80"
                  textColor="text-slate-900"
                />
                <EnhancedTechBadge
                  icon={<SiAmazon className="h-4 w-4 text-slate-900" />}
                  label="AWS Services"
                  color="from-slate-300/80 to-slate-400/80"
                  textColor="text-slate-900"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 pt-1 lg:pt-3">
              <Button
                onClick={() => navigate("/projects")}
                className="px-8 lg:px-10 flex rounded-xl items-center justify-center gap-2"
              >
                Explore My Projects
                <HiArrowRight className="h-5 w-5" />
              </Button>
              <Button
              className="rounded-xl px-8"
                variant="outline"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 lg:gap-4 lg:pt-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 lg:w-13 h-10 lg:h-13 flex items-center justify-center rounded-full bg-secondary-800 text-secondary-300 hover:text-primary-200 hover:bg-primary-600/70 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 lg:h-6 w-5 lg:w-6" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 lg:w-13 h-10 lg:h-13 flex items-center justify-center rounded-full bg-secondary-800 text-secondary-300 hover:text-primary-200 hover:bg-primary-600/70 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 lg:h-6 w-5 lg:w-6" />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 lg:w-13 h-10 lg:h-13 flex items-center justify-center rounded-full bg-secondary-800 text-secondary-300 hover:text-primary-200 hover:bg-primary-600/70 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 lg:h-6 w-5 lg:w-6" />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="w-10 lg:w-13 h-10 lg:h-13 flex items-center justify-center rounded-full bg-secondary-800 text-secondary-300 hover:text-primary-200 hover:bg-primary-600/70 transition-colors"
                aria-label="Email"
              >
                <TbMailFilled className="h-5 lg:h-6 w-5 lg:w-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Interactive Terminal */}
          <motion.div
            className="hidden lg:block relative w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Terminal Window */}
            <div className="-mx-2 relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
              {/* Glow Effects */}
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50" />
              <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900" />
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30" />

              {/* Terminal Header */}
              <div className="relative flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-slate-800/90 border-b border-slate-700/50">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="flex gap-1 md:gap-1.5">
                    <motion.div 
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500 cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs text-slate-400 font-mono">
                  <span className="px-1.5 md:px-2 py-0.5 rounded bg-slate-700/50 text-cyan-400">zsh</span>
                  <span className="hidden sm:inline">eddy@portfolio</span>
                </div>
                <div className="w-8 md:w-16" />
              </div>

              {/* Terminal Content */}
              <div className="relative p-3 md:p-5 font-mono text-xs md:text-sm min-h-[320px] md:min-h-[420px] bg-slate-900/95 flex">
                {/* Terminal Text Content */}
                <div className="flex-1 min-w-0">
                  <TerminalContent />
                </div>
                
                {/* Floating Tech Icons Inside Terminal - Right Side */}
                <div className="relative hidden md:block w-20 shrink-0 ml-2">
                  <TechIconFloating
                    icon={<FaReact className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />}
                    position={{ top: "8%", right: "0%" }}
                    delay={1.5}
                  />
                  <TechIconFloating
                    icon={<TbBrandTypescript className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />}
                    position={{ top: "22%", right: "0%" }}
                    delay={1.6}
                  />
                  <TechIconFloating
                    icon={<FaNode className="w-5 h-5 md:w-6 md:h-6 text-green-500" />}
                    position={{ top: "36%", right: "0%" }}
                    delay={1.7}
                  />
                  <TechIconFloating
                    icon={<FaDatabase className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />}
                    position={{ top: "50%", right: "0%" }}
                    delay={1.8}
                  />
                  <TechIconFloating
                    icon={<SiRedis className="w-4 h-4 md:w-5 md:h-5 text-red-500" />}
                    position={{ top: "64%", right: "0%" }}
                    delay={1.9}
                  />
                  <TechIconFloating
                    icon={<SiAmazon className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />}
                    position={{ top: "78%", right: "0%" }}
                    delay={2.0}
                  />
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="relative flex items-center justify-between gap-2 sm:gap-0 px-3 md:px-4 py-2 bg-slate-800/50 border-t border-slate-700/30 text-[10px] sm:text-xs text-slate-500">
                <span className="whitespace-nowrap">TypeScript 5.3</span>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    online
                  </span>
                  <span className="whitespace-nowrap">{projects.length} + projects shipped</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// GradientText Component with Typewriter Effect
interface GradientTextProps {
  text: string;
  delay?: number;
  gradient?: string;
}

const GradientText = ({ text, delay = 0, gradient = "from-indigo-400 via-purple-400 to-cyan-400" }: GradientTextProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeNextChar, 100);
      }
    };

    const delayTimeout = setTimeout(() => {
      typeNextChar();
    }, delay * 1000);

    return () => {
      if (timeout) clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, delay]);

  // Check if gradient is a CSS class name (like "gradient-text")
  const isCssClass = gradient === "gradient-text";
  
  return (
    <span className={isCssClass ? gradient : `bg-linear-to-r ${gradient} bg-clip-text text-transparent`}>
      {displayText}
    </span>
  );
};

// Enhanced Tech Badge Component
interface EnhancedTechBadgeProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  textColor: string;
}

const EnhancedTechBadge = ({ icon, label, color, textColor }: EnhancedTechBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 rounded-full bg-linear-to-r ${color} px-4 md:px-5 py-1.5 md:py-2 text-[0.78rem] md:text-[0.8rem] lg:text-sm backdrop-blur-sm ${textColor} font-semibold font-outfit`}
    >
      {icon}
      <span className="font-bold font-open">{label}</span>
    </motion.div>
  );
};

// Terminal Content with Typewriter Effect
const TerminalContent = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const terminalLines = [
    { type: "command", text: "whoami", delay: 0 },
    { type: "output", text: "Eddy Ochieng Odhiambo", delay: 400 },
    { type: "output", text: "└── Fullstack Software Engineer", delay: 600, color: "text-cyan-400" },
    { type: "empty", delay: 800 },
    { type: "command", text: "cat skills.json", delay: 1000 },
    { type: "output", text: "{", delay: 1200, color: "text-slate-400" },
    { type: "output", text: '  "frontend": ["React", "TypeScript", "TailwindCSS"],', delay: 1400, color: "text-emerald-400" },
    { type: "output", text: '  "backend": ["Node.js", "Express", "PostgreSQL"],', delay: 1600, color: "text-blue-400" },
    { type: "output", text: '  "mobile": ["React Native", "Flutter"],', delay: 1800, color: "text-purple-400" },
    { type: "output", text: '  "cloud": ["AWS", "Azure", "Docker, GitHub Actions"]', delay: 2000, color: "text-orange-400" },
    { type: "output", text: "}", delay: 2200, color: "text-slate-400" },
    { type: "empty", delay: 2400 },
    { type: "command", text: "echo $STATUS", delay: 2600 },
    { type: "output", text: "✨ We can ship amazing solutions together. I'm free", delay: 2800, color: "text-green-400" },
    { type: "empty", delay: 3000 },
    { type: "command", text: "ls projects/ | wc -l", delay: 3200 },
    { type: "output", text: "25+ production apps shipped", delay: 3400, color: "text-yellow-400" },
  ];

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    terminalLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
      timers.push(timer);
    });

    // Cursor blink
    const cursorTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => {
      timers.forEach(t => clearTimeout(t));
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <div className="space-y-1">
      <AnimatePresence>
        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-start"
          >
            {line.type === "command" ? (
              <>
                <span className="text-emerald-400 mr-2">❯</span>
                <span className="text-slate-200">{line.text}</span>
              </>
            ) : line.type === "empty" ? (
              <span>&nbsp;</span>
            ) : (
              <span className={`ml-4 ${line.color || "text-slate-300"}`}>
                {line.text}
              </span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Blinking Cursor */}
      {visibleLines >= terminalLines.length && (
        <motion.div
          className="flex items-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="text-emerald-400 mr-2">❯</span>
          <motion.span
            className="w-2.5 h-5 bg-emerald-400"
            animate={{ opacity: cursorVisible ? 1 : 0 }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
      )}
    </div>
  );
};

// Floating Tech Icon Component
interface TechIconFloatingProps {
  icon: React.ReactNode;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay: number;
}

const TechIconFloating = ({ icon, position, delay }: TechIconFloatingProps) => {
  return (
    <motion.div
      className="absolute z-10"
      style={position}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      <motion.div
        className="relative p-1.5 md:p-2 rounded-lg md:rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-600/50 shadow-lg shadow-black/20"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          borderColor: "rgba(34, 211, 238, 0.5)",
          boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)",
          transition: { duration: 0.2 },
        }}
      >
        <div className="relative z-10">{icon}</div>
      </motion.div>
    </motion.div>
  );
};
