import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { AllProjectsPage } from "./pages/AllProjectsPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import ScrollToTop from "./hooks/useScrollToTop";
import { SeoHead } from "./components/seo/SeoHead";

export function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <SeoHead />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}
