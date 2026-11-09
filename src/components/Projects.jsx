import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Layers, 
  CloudSun, 
  ShoppingCart, 
  CheckSquare, 
  UserCheck, 
  Briefcase, 
  Gamepad2, 
  Shapes, 
  CreditCard, 
  Globe2,
  Code,
  Info,
  ArrowUpRight
} from 'lucide-react';
import { allProjects } from '../data/portfolioData';

// Custom Aesthetic Colorful Project Visual Showcases
const ProjectBanner = ({ id }) => {
  switch (id) {
    case 1: // Weather App
      return (
        <div className="w-full h-48 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            OpenWeatherMap API
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <CloudSun className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Weather Forecasting App</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">Live Meteorological Query & Metrics</div>
        </div>
      );
    case 2: // Mini Amazon
      return (
        <div className="w-full h-48 bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            E-Commerce
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Mini Amazon</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">Product Catalog & Cart Management</div>
        </div>
      );
    case 3: // To-Do List
      return (
        <div className="w-full h-48 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            Productivity
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <CheckSquare className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Task Management System</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">DOM Manipulation & Local Storage</div>
        </div>
      );
    case 4: // Personal Portfolio
      return (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            Developer Portfolio
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <Globe2 className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Personal Portfolio</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">React.js & Tailwind CSS</div>
        </div>
      );
    case 5: // Mini Portfolio
      return (
        <div className="w-full h-48 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            Landing Page
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Mini Portfolio</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">Lightweight & Responsive Layout</div>
        </div>
      );
    case 6: // Login Page
      return (
        <div className="w-full h-48 bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-600 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            Auth UI
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Authentication Interface</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">Input Validation & Password Toggle</div>
        </div>
      );
    case 7: // Internship Page
      return (
        <div className="w-full h-48 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            Portal Layout
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Internship Portal Page</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">Program Details & Criteria</div>
        </div>
      );
    case 8: // Game of Cards
      return (
        <div className="w-full h-48 bg-gradient-to-br from-rose-500 via-pink-600 to-purple-600 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            Browser Game
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <Gamepad2 className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Game of Cards</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">Deck Shuffling & Turn Logic</div>
        </div>
      );
    case 9: // Shape Game
      return (
        <div className="w-full h-48 bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-600 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            Reflex Game
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <Shapes className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Shape Game</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">Reflex Logic & Smooth Transitions</div>
        </div>
      );
    case 10: // Card Design (card.html)
      return (
        <div className="w-full h-48 bg-gradient-to-br from-violet-500 via-indigo-600 to-blue-700 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            UI Component
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Card Design (card.html)</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">Advanced CSS & Glassmorphism</div>
        </div>
      );
    case 11: // Ujjwal Personal Website (ujjwal.html)
      return (
        <div className="w-full h-48 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase border border-white/30">
            Personal Web
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg mb-2">
            <Globe2 className="w-8 h-8 text-white" />
          </div>
          <div className="text-lg font-extrabold tracking-tight">Personal Website (ujjwal.html)</div>
          <div className="text-xs font-medium text-white/90 mt-0.5">Custom HTML & CSS Implementation</div>
        </div>
      );
    default:
      return null;
  }
};

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Apps & APIs', 'Games & Logic', 'UI & Prototypes'];

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full badge-gradient-indigo text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            My <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            All 11 personal web applications, logic games, and modern UI components built with React.js, JavaScript, and APIs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                  : 'bg-white text-slate-600 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200 shadow-xs'
              }`}
            >
              {cat === 'All' ? `All (${allProjects.length})` : cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card overflow-hidden flex flex-col justify-between bg-white group border-slate-200"
            >
              {/* Visual Showcase Banner */}
              <div className="relative overflow-hidden">
                <ProjectBanner id={project.id} />
                
                {/* Number Badge */}
                <div className="absolute bottom-3 right-3 text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white border border-white/20">
                  #{project.id.toString().padStart(2, '0')}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status Indicator */}
                <div className="pt-2 flex items-center space-x-1.5 text-[11px] font-medium text-slate-500">
                  <Info className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <span className="truncate">{project.statusNote}</span>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:px-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2.5">
                <a
                  href="https://github.com/ujjwal-notpro060406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-xs transition-colors"
                  title="View GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-500/25 transition-all duration-200"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Verification Guarantee */}
        <div className="mt-14 text-center text-xs text-slate-600 max-w-2xl mx-auto flex items-center justify-center space-x-2 bg-white py-3.5 px-5 rounded-2xl border border-slate-200 shadow-xs">
          <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0" />
          <span>All 11 projects represent authentic works by Ujjwal Gupta. Click <strong>Live Demo</strong> to launch interactive previews.</span>
        </div>

      </div>
    </section>
  );
}
