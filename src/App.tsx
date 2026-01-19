import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { AllProjectsPage } from "./pages/AllProjectsPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <>
      <Analytics />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
