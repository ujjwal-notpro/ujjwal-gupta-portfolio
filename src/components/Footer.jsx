import React from 'react';
import { Github, Linkedin, ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ffffff] border-t border-[#d0d7de] py-8 text-xs text-[#656d76]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Brand */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/ujjwal-notpro060406"
              target="_blank"
              rel="noreferrer"
              className="text-[#656d76] hover:text-[#1f2328]"
            >
              <Github className="w-6 h-6" />
            </a>
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a href="#hero" className="hover:text-[#0969da]">Overview</a>
            <a href="#projects" className="hover:text-[#0969da]">Repositories (11)</a>
            <a href="#skills" className="hover:text-[#0969da]">Skills</a>
            <a href="#experience" className="hover:text-[#0969da]">Experience</a>
            <a href="#education" className="hover:text-[#0969da]">Education</a>
            <a href="#interests" className="hover:text-[#0969da]">Beyond Coding</a>
            <a href="#contact" className="hover:text-[#0969da]">Contact</a>
            <a href={personalInfo.social.linkedin.url} target="_blank" rel="noreferrer" className="hover:text-[#0969da]">LinkedIn</a>
          </div>

          {/* Right Action */}
          <button
            onClick={scrollToTop}
            className="gh-btn text-xs py-1"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>

        </div>
      </div>
    </footer>
  );
}
