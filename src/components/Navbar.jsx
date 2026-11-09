import React, { useState, useEffect } from 'react';
import { 
  Github, 
  BookOpen, 
  FolderGit2, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Mail, 
  FileText, 
  Star,
  ExternalLink,
  Menu,
  X,
  Search
} from 'lucide-react';
import { personalInfo, allProjects, internships } from '../data/portfolioData';

const navTabs = [
  { name: 'Overview', href: '#hero', icon: BookOpen },
  { name: 'Repositories', href: '#projects', icon: FolderGit2, count: allProjects.length },
  { name: 'Skills', href: '#skills', icon: Cpu },
  { name: 'Experience', href: '#experience', icon: Briefcase, count: internships.length },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Beyond Coding', href: '#interests', icon: Sparkles },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'experience', 'education', 'interests', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff] border-b border-[#d0d7de]">
      {/* Top Main Navigation Bar */}
      <div className="bg-[#f6f8fa] border-b border-[#d0d7de] px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Brand Identity */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/ujjwal-notpro060406" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1f2328] hover:text-[#0969da] transition-colors flex items-center space-x-2"
              title="View GitHub Profile"
            >
              <Github className="w-8 h-8 fill-current" />
            </a>
            
            <div className="flex items-center text-sm font-semibold text-[#1f2328]">
              <a href="#hero" className="hover:text-[#0969da] transition-colors">
                {personalInfo.username}
              </a>
              <span className="mx-1 text-[#656d76]">/</span>
              <span className="text-[#0969da] hover:underline cursor-pointer">
                portfolio-project
              </span>
              <span className="ml-2 text-[11px] font-medium text-[#656d76] border border-[#d0d7de] rounded-full px-2 py-0.2 bg-[#ffffff]">
                Public
              </span>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-2">
            <a
              href={personalInfo.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn"
              title="Star on GitHub"
            >
              <Star className="w-3.5 h-3.5 text-[#656d76]" />
              <span>Star</span>
              <span className="ml-1 px-1.5 py-0.2 text-[11px] bg-[#afb8c133] rounded-full font-mono">
                11
              </span>
            </a>

            <button
              onClick={onOpenResume}
              className="gh-btn"
              title="Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5 text-[#0969da]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="gh-btn-primary"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="gh-btn px-2"
              title="Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#0969da]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="gh-btn p-1.5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* GitHub-Style Underline Sub-Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-none">
        <nav className="flex space-x-1 sm:space-x-3 text-sm">
          {navTabs.map((tab) => {
            const sectionId = tab.href.replace('#', '');
            const isActive = activeTab === sectionId;
            const Icon = tab.icon;

            return (
              <a
                key={tab.name}
                href={tab.href}
                className={`flex items-center space-x-2 py-2.5 px-3 border-b-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-[#fd8c73] text-[#1f2328] font-semibold'
                    : 'border-transparent text-[#656d76] hover:text-[#1f2328] hover:border-[#d0d7de]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#1f2328]' : 'text-[#656d76]'}`} />
                <span>{tab.name}</span>
                {tab.count !== undefined && (
                  <span className="text-[11px] font-mono bg-[#afb8c133] text-[#1f2328] rounded-full px-1.5 py-0.2">
                    {tab.count}
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#ffffff] border-b border-[#d0d7de] p-3 space-y-1">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded text-sm text-[#1f2328] hover:bg-[#f6f8fa]"
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className="w-4 h-4 text-[#656d76]" />
                  <span>{tab.name}</span>
                </div>
                {tab.count !== undefined && (
                  <span className="text-xs bg-[#afb8c133] text-[#656d76] px-2 py-0.5 rounded-full font-mono">
                    {tab.count}
                  </span>
                )}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#d0d7de] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="gh-btn w-full justify-center"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="gh-btn-primary w-full justify-center"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
