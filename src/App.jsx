import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1f2328] flex flex-col font-sans selection:bg-[#ddf4ff] selection:text-[#0969da]">
      {/* 1. Navigation Bar (GitHub style with sub-nav tabs) */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section (Topic & Profile Header + README.md) */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. About Section */}
        <About />

        {/* 4. Repositories / Projects (All 11 in GitHub Repo Card format with language dots) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Technical Skills */}
        <Skills />

        {/* 6. Internship Experience (All 3 in Release / Milestones format) */}
        <Experience />

        {/* 7. Education */}
        <Education />

        {/* 8. Beyond Coding */}
        <Interests />

        {/* 9. Contact Me */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {isResumeOpen && (
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      )}
    </div>
  );
}
