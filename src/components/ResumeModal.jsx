import React from 'react';
import { X, Printer, Download, ExternalLink, Github, Linkedin, MapPin, Mail, Phone, Briefcase, GraduationCap, Code } from 'lucide-react';
import { personalInfo, skillCategories, allProjects, internships, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
================================================================================
UJJWAL GUPTA - FULL STACK DEVELOPER
================================================================================
GitHub: ${personalInfo.social.github.url}
LinkedIn: ${personalInfo.social.linkedin.url}
Location: ${personalInfo.location.origin} | Studying in Noida Region

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
${personalInfo.introduction}

EDUCATION
--------------------------------------------------------------------------------
* Ajay Kumar Garg Engineering College (AKGEC) - Computer Science (Current Student)
* National Institute of Open Schooling (NIOS) - Class 12, Completed 2025
* Uttar Pradesh State Board (UP Board) - Class 11, Completed 2023

TECHNICAL SKILLS
--------------------------------------------------------------------------------
* Programming Languages: C, C++, Java, Python
* Frontend Development: HTML5, CSS3, JavaScript, React.js
* Backend Development: Node.js, REST API
* CSS Frameworks: Bootstrap, Tailwind CSS
* Development Tools: Git, GitHub, Visual Studio Code
* Additional: Responsive Web Design, API Integration, DOM Manipulation

INTERNSHIP EXPERIENCE
--------------------------------------------------------------------------------
1. UptoSkills | Full Stack Development Intern (June 2026 – September 2026)
   Full Stack Development internship focusing on web development, technical learning, and practical exposure.
2. Vault of Code | Internship Experience (June 2026 – July 2026)
   Practical technical learning, development exposure, and problem solving.
3. BeeSkilled | Internship Experience (May 2026 – June 2026)
   Structured practical learning and technical exposure in modern software workflows.

FEATURED PROJECTS (11 REPOSITORIES)
--------------------------------------------------------------------------------
1. Weather App (React.js, OpenWeatherMap API, CSS3)
2. Mini Amazon (React.js, Tailwind CSS, JavaScript)
3. To-Do List (JavaScript, DOM Manipulation, HTML5, CSS3)
4. Personal Portfolio (React.js, Tailwind CSS)
5. Mini Portfolio (HTML5, CSS3, JavaScript)
6. Login Page (HTML5, CSS3, JavaScript)
7. Internship Page (HTML5, CSS3, Responsive Web Design)
8. Game of Cards (JavaScript, DOM Manipulation, CSS3)
9. Shape Game (JavaScript, HTML5, CSS3 Animations)
10. Card Design (card.html - HTML5, CSS3)
11. Ujjwal Personal Website (ujjwal.html - HTML5, CSS3, JavaScript)

EXTRACURRICULAR INTERESTS
--------------------------------------------------------------------------------
* Art and Craft
* Exploring New Technologies & Software Development
================================================================================
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ujjwal_Gupta_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar with Colorful Gradient Accent */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-b border-indigo-100 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
            <h3 className="text-sm font-extrabold text-slate-900 font-heading">
              Curriculum Vitae Preview • {personalInfo.name}
            </h3>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 hover:text-indigo-600 border border-slate-200 shadow-xs transition-colors"
              title="Print Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs transition-colors"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-white transition-colors ml-1"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 space-y-7 font-sans selection:bg-indigo-100 selection:text-indigo-900">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 space-y-2 sm:flex sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-base font-bold text-indigo-600">
                {personalInfo.role}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1 font-medium">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>{personalInfo.location.origin}</span>
                </span>
                <span>•</span>
                <span>AKGEC (Noida/Ghaziabad)</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end space-y-1 text-xs text-slate-600 pt-2 sm:pt-0 font-medium">
              <a 
                href={personalInfo.social.github.url} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-indigo-600 flex items-center space-x-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/{personalInfo.social.github.username}</span>
              </a>
              <a 
                href={personalInfo.social.linkedin.url} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-blue-600 flex items-center space-x-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/{personalInfo.social.linkedin.username}</span>
              </a>
            </div>
          </div>

          {/* Professional Introduction */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personalInfo.introduction}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1">
              Technical Stack & Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block mb-0.5 font-bold">Programming Languages:</strong>
                <span className="text-slate-600">C, C++, Java, Python</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block mb-0.5 font-bold">Frontend Development:</strong>
                <span className="text-slate-600">HTML5, CSS3, JavaScript, React.js</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block mb-0.5 font-bold">Backend & APIs:</strong>
                <span className="text-slate-600">Node.js, REST API, API Integration</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block mb-0.5 font-bold">Frameworks & Tools:</strong>
                <span className="text-slate-600">Tailwind CSS, Bootstrap, Git, GitHub, VS Code</span>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1">
              Internship Experience
            </h3>
            <div className="space-y-3">
              {internships.map(intern => (
                <div key={intern.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline font-medium">
                    <span className="text-slate-900 font-extrabold text-sm">{intern.company} — <span className="text-indigo-600">{intern.role}</span></span>
                    <span className="text-slate-500 font-mono text-[11px] font-bold">{intern.duration}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {intern.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1">
              Education
            </h3>
            <div className="space-y-1.5 text-xs">
              {educationData.map((edu, i) => (
                <div key={i} className="flex justify-between items-baseline">
                  <div>
                    <span className="text-slate-900 font-bold">{edu.institution}</span>
                    <span className="text-slate-600"> — {edu.degree}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px] font-bold">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1">
              Projects Archive (11 Verified Applications)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {allProjects.map(proj => (
                <div key={proj.id} className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="font-bold text-slate-900">{proj.title}</div>
                  <div className="text-[11px] text-indigo-600 font-mono font-semibold">{proj.techStack.join(', ')}</div>
                  <div className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">{proj.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-1 text-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1">
              Extracurricular & Interests
            </h3>
            <p className="text-slate-600 pt-1 leading-relaxed">
              Art and Craft (Extracurricular creative activity), Exploring New Technologies, Learning Programming, Building Creative Projects.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
