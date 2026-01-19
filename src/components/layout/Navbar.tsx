import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { TbDownload } from "react-icons/tb";
import { NAV_ITEMS, RESUME_LINK } from "@/utils/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const sectionIds = NAV_ITEMS.map((item) => item.href.substring(1));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string): void => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = (): void => {
    const link = document.createElement("a");
    link.href = RESUME_LINK;
    link.download = "EddyOdhiambo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary-900/90 backdrop-blur-sm shadow-md border-b border-primary-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-12 h-9 md:w-16 md:h-12 rounded-lg overflow-hidden">
              <img
                src="/logo.gif"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg lg:text-xl font-bold gradient-text">
              Eddy Odhiambo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-2 text-sm lg:text-[0.95rem] font-semibold transition-colors relative ${
                    isActive
                      ? "text-white"
                      : "text-secondary-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-primary-500 to-accent-500" />
                  )}
                </a>
              );
            })}
            <button
              onClick={handleResumeDownload}
              className="ml-4 btn-primary flex items-center gap-2 text-sm"
            >
              <TbDownload className="h-4 w-4" />
              Resume/CV
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-secondary-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-secondary-900/95 backdrop-blur-md border-b border-primary-500/10 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="container mx-auto px-4 py-3 space-y-1"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {NAV_ITEMS.map((item, index) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-white bg-primary-500/10"
                        : "text-secondary-300 hover:text-white"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 + 0.1, duration: 0.2 }}
              >
                <button
                  onClick={handleResumeDownload}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-sm"
                >
                  <TbDownload className="h-5 w-5" />
                  Resume/CV
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
