import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  User, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Mail, 
  FileText, 
  Menu, 
  X,
  Layers,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Cpu },
  { name: 'Projects', href: '#projects', icon: Layers },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Beyond Coding', href: '#interests', icon: Sparkles },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'interests', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'portfolio-nav-glass shadow-md shadow-slate-900/5 py-3'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand with Colorful Gradient */}
          <a
            href="#hero"
            className="group flex items-center space-x-3 text-slate-900 font-heading font-bold"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-indigo-500/40 transition-all duration-200">
              <span className="font-extrabold text-sm tracking-wider">UG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 group-hover:text-indigo-600 transition-colors font-extrabold text-base tracking-tight leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                {personalInfo.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-xs border border-indigo-100/80 font-bold'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 shadow-xs transition-all duration-200"
              title="Preview & Download Resume"
            >
              <FileText className="w-4 h-4 text-indigo-600" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-xl bg-white text-indigo-600 border border-slate-200 shadow-xs hover:bg-slate-50"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-xs hover:bg-slate-50"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-indigo-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100"
            >
              <FileText className="w-4 h-4 text-indigo-600" />
              <span>Preview Curriculum Vitae</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
