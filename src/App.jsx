import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* 1. Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. About Me */}
        <About />

        {/* 4. Technical Skills */}
        <Skills />

        {/* 5. Featured Projects (All 11 Projects in Portfolio Cards) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Internship Experience (All 3 Internships in Creative Timeline) */}
        <Experience />

        {/* 7. Education (AKGEC, NIOS Class 12, UP Board Class 11) */}
        <Education />

        {/* 8. Beyond Coding (Personal Interests) */}
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
