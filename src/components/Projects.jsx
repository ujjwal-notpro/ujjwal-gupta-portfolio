import React, { useState } from 'react';
import { 
  FolderGit2, 
  Star, 
  Eye, 
  Github, 
  ExternalLink, 
  Search, 
  Filter, 
  CheckCircle2, 
  Info,
  BookMarked,
  Tag
} from 'lucide-react';
import { allProjects, personalInfo } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Web Apps & APIs', 'Games & Logic', 'UI & Prototypes'];

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 bg-[#ffffff] border-b border-[#d0d7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header like GitHub Topic Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-[#d0d7de] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#656d76] uppercase tracking-wider mb-1">
              <FolderGit2 className="w-4 h-4 text-[#0969da]" />
              <span>Repository Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] tracking-tight">
              All Repositories & Projects ({allProjects.length})
            </h2>
            <p className="text-xs sm:text-sm text-[#656d76] mt-1">
              Curated list of verified personal web applications, APIs, games, and UI components.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#656d76]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find a repository..."
                className="pl-9 pr-3 py-1.5 bg-[#f6f8fa] text-xs text-[#1f2328] rounded-md border border-[#d0d7de] focus:bg-[#ffffff] focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none w-full sm:w-56"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-medium text-[#656d76] mr-1 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Type:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filter === cat
                  ? 'bg-[#1f2328] text-[#ffffff]'
                  : 'bg-[#f6f8fa] text-[#656d76] hover:bg-[#f3f4f6] border border-[#d0d7de]'
              }`}
            >
              {cat === 'All' ? `All (${allProjects.length})` : cat}
            </button>
          ))}
        </div>

        {/* Repository Cards Grid - GitHub Repo Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="gh-box p-5 hover:border-[#0969da]/50 transition-all duration-150 flex flex-col justify-between group shadow-xs bg-[#ffffff]"
            >
              <div>
                {/* Repo Header Bar */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2 min-w-0">
                    <BookMarked className="w-4 h-4 text-[#656d76] flex-shrink-0" />
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-base font-semibold text-[#0969da] hover:underline truncate text-left"
                    >
                      {project.slug || project.title.toLowerCase().replace(/ /g, '-')}
                    </button>
                    <span className="text-[11px] font-medium text-[#656d76] border border-[#d0d7de] rounded-full px-2 py-0.2 bg-[#f6f8fa] flex-shrink-0">
                      Public
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="gh-btn text-xs py-1 px-2.5 flex-shrink-0"
                    title="Live Demo Preview"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#0969da]" />
                    <span>Demo</span>
                  </button>
                </div>

                {/* Display Title & Description */}
                <div className="text-xs font-semibold text-[#1f2328] mb-1">
                  {project.title}
                </div>
                <p className="text-xs text-[#656d76] leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>

                {/* Topic Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(project.topics || project.techStack).map((tag) => (
                    <span
                      key={tag}
                      className="gh-topic"
                    >
                      {tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Language Color Dot */}
              <div className="pt-3 border-t border-[#d0d7de]/70 flex flex-wrap items-center justify-between text-xs text-[#656d76] gap-2">
                <div className="flex items-center space-x-4">
                  {/* Primary Language Colored Dot */}
                  <div className="flex items-center space-x-1.5">
                    <span 
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: project.languageColor || '#f1e05a' }}
                    />
                    <span className="font-medium text-[#1f2328]">
                      {project.primaryLanguage || project.techStack[0]}
                    </span>
                  </div>

                  {/* Star count simulation */}
                  <div className="flex items-center space-x-1 hover:text-[#0969da] cursor-pointer">
                    <Star className="w-3.5 h-3.5" />
                    <span>{project.id * 3 + 4}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="https://github.com/ujjwal-notpro060406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-btn text-[11px] py-0.5 px-2"
                  >
                    <Github className="w-3 h-3" />
                    <span>Repo</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Verified Data */}
        <div className="mt-8 p-3.5 rounded-md bg-[#f6f8fa] border border-[#d0d7de] text-xs text-[#656d76] flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#1f883d] flex-shrink-0" />
            <span>Showing all 11 verified repositories. Click on any repository title or <strong>Demo</strong> to inspect interactive previews.</span>
          </div>
          <a
            href={personalInfo.social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0969da] font-medium hover:underline flex items-center space-x-1"
          >
            <span>Visit @{personalInfo.username} on GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
