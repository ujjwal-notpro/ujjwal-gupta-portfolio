import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Terminal,
  Layers,
  Briefcase,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { personalInfo, allProjects, internships } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#FAF5FF]/60 via-[#F8FAFC] to-[#FFFFFF]">
      {/* Luminous Ambient Colorful Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-pink-400/15 to-rose-400/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Narrative & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill with Animated Glowing Pulse */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/90 border border-indigo-200/80 shadow-sm shadow-indigo-500/10 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-700 tracking-wide flex items-center space-x-1">
                <span>Available for Full Stack Opportunities & Projects</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 ml-1" />
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <p className="text-sm font-bold tracking-widest uppercase text-indigo-600 flex items-center space-x-1.5 font-mono">
                <span>Hi, I'm</span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-heading leading-[1.05]">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text-primary font-heading pt-1">
                {personalInfo.role}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-slate-800 font-heading">
              "{personalInfo.tagline}"
            </p>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            {/* Location & Academic Chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-700 pt-1">
              <div className="flex items-center space-x-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs font-semibold">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{personalInfo.location.origin}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs font-semibold">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>AKGEC • Computer Science</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-indigo-400 shadow-xs hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-bold text-sm text-indigo-600 hover:text-indigo-700 bg-indigo-50/80 hover:bg-indigo-100/80 border border-indigo-200/80 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/80">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                Connect With Me:
              </span>
              <a
                href={personalInfo.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200 shadow-xs transition-all duration-200 text-xs font-semibold group"
                title={`GitHub: ${personalInfo.social.github.username}`}
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>github/{personalInfo.social.github.username}</span>
              </a>
              <a
                href={personalInfo.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 shadow-xs transition-all duration-200 text-xs font-semibold group"
                title={`LinkedIn: ${personalInfo.social.linkedin.username}`}
              >
                <Linkedin className="w-4 h-4 text-blue-600 group-hover:text-white group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: Creative Developer Showcase Card with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Colorful Glowing Ambient Layer behind Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500 -z-10 animate-pulse-slow" />

              {/* Main Card */}
              <div className="portfolio-card p-6 bg-white relative overflow-hidden">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500 shadow-xs" />
                    <div className="w-3 h-3 rounded-full bg-amber-400 shadow-xs" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-xs" />
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-500 flex items-center space-x-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                    <span>ujjwal.developer.ts</span>
                  </div>
                  <div className="w-3 h-3" />
                </div>

                {/* Developer ID Header */}
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-purple-50/40 to-pink-50/30 border border-indigo-100/80 mb-5">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 flex-shrink-0">
                    <span className="font-extrabold text-lg">UG</span>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold text-slate-900 font-heading">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      {personalInfo.role}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      AKGEC • Computer Science
                    </p>
                  </div>
                </div>

                {/* Syntax Code Snippet */}
                <div className="font-mono text-xs bg-slate-900 text-slate-200 rounded-2xl p-4 space-y-1.5 shadow-inner overflow-x-auto">
                  <div className="text-emerald-400">// Ready to build scalable digital experiences</div>
                  <div>
                    <span className="text-indigo-400 font-bold">const</span> <span className="text-amber-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    name: <span className="text-pink-300 font-semibold">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    role: <span className="text-cyan-300">"Full Stack Developer"</span>,
                  </div>
                  <div className="pl-4">
                    origin: <span className="text-amber-200">"Prayagraj, UP, India"</span>,
                  </div>
                  <div className="pl-4">
                    languages: [<span className="text-purple-300">"C"</span>, <span className="text-purple-300">"C++"</span>, <span className="text-purple-300">"Java"</span>, <span className="text-purple-300">"Python"</span>],
                  </div>
                  <div className="pl-4">
                    technologies: [<span className="text-cyan-300">"React.js"</span>, <span className="text-emerald-300">"Node.js"</span>, <span className="text-amber-300">"REST APIs"</span>],
                  </div>
                  <div className="pl-4">
                    openToOpportunity: <span className="text-emerald-400 font-bold">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-slate-100 text-center">
                  <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100">
                    <div className="text-lg font-extrabold text-indigo-700 font-heading">{allProjects.length}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100">
                    <div className="text-lg font-extrabold text-purple-700 font-heading">{internships.length}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Internships</div>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-50/60 border border-cyan-100">
                    <div className="text-lg font-extrabold text-cyan-700 font-heading">4+</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Languages</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
