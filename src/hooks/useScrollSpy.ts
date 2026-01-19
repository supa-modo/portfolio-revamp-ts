import { useState, useEffect } from "react";

export const useScrollSpy = (sectionIds: string[], offset = 100): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = (): void => {
      // Check sections in reverse order to get the topmost visible section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
