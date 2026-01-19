import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to ensure layout is ready before scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth" as ScrollBehavior,
      });
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
