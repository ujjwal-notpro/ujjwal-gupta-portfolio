import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Star, 
  GitFork, 
  Eye, 
  Terminal,
  BookOpen,
  FolderGit2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { personalInfo, allProjects, internships } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="bg-[#ffffff] pt-8 pb-10 border-b border-[#d0d7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topic Banner Header like github.com/topics/portfolio-project */}
        <div className="gh-box mb-8 p-6 bg-[#f6f8fa] border-[#d0d7de] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#0969da]">
              <span className="px-2 py-0.5 rounded-full bg-[#ddf4ff] border border-[#0969da]/20">
                # portfolio-project
              </span>
              <span className="text-[#656d76]">•</span>
              <span className="text-[#656d76]">developer-portfolio</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1f2328] tracking-tight">
              {personalInfo.name} — <span className="font-normal text-[#656d76]">{personalInfo.role}</span>
            </h1>
            <p className="text-sm text-[#656d76] max-w-3xl leading-relaxed">
              "{personalInfo.tagline}" — {personalInfo.heroDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-center flex-shrink-0">
            <a
              href={personalInfo.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn text-xs font-semibold"
            >
              <Github className="w-4 h-4 text-[#1f2328]" />
              <span>Follow</span>
            </a>
            <button
              onClick={onOpenResume}
              className="gh-btn text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5 text-[#0969da]" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="gh-btn-primary text-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Profile Details & Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Developer Profile Details Card */}
          <div className="lg:col-span-4 space-y-5">
            <div className="gh-box p-6 space-y-4">
              
              {/* Profile Avatar & Identity */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-[#f6f8fa] border-2 border-[#d0d7de] flex items-center justify-center text-[#1f2328] shadow-xs">
                  <Code2 className="w-8 h-8 text-[#0969da]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1f2328] leading-tight">
                    {personalInfo.name}
                  </h2>
                  <div className="text-sm text-[#656d76]">
                    @{personalInfo.username}
                  </div>
                </div>
              </div>

              {/* Status Quote */}
              <div className="text-xs text-[#1f2328] bg-[#f6f8fa] p-3 rounded-md border border-[#d0d7de] italic">
                "{personalInfo.tagline}"
              </div>

              {/* Bio Details */}
              <div className="space-y-2.5 text-xs text-[#656d76] pt-1 border-t border-[#d0d7de]">
                <div className="flex items-center space-x-2 text-[#1f2328]">
                  <Briefcase className="w-4 h-4 text-[#656d76] flex-shrink-0" />
                  <span className="font-medium">{personalInfo.role}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#656d76] flex-shrink-0" />
                  <span>{personalInfo.location.origin}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-[#656d76] flex-shrink-0" />
                  <span>AKGEC • Computer Science</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-[#656d76] flex-shrink-0" />
                  <a 
                    href={personalInfo.social.github.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#0969da] hover:underline"
                  >
                    github/{personalInfo.username}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4 text-[#656d76] flex-shrink-0" />
                  <a 
                    href={personalInfo.social.linkedin.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#0969da] hover:underline"
                  >
                    linkedin/in/ujjwal-gupta
                  </a>
                </div>
              </div>

              {/* Quick Counter Chips */}
              <div className="pt-3 border-t border-[#d0d7de] grid grid-cols-3 gap-2 text-center">
                <a href="#projects" className="p-2 rounded bg-[#f6f8fa] border border-[#d0d7de] hover:bg-[#f3f4f6]">
                  <div className="text-base font-bold text-[#1f2328] font-mono">{allProjects.length}</div>
                  <div className="text-[10px] text-[#656d76]">Projects</div>
                </a>
                <a href="#experience" className="p-2 rounded bg-[#f6f8fa] border border-[#d0d7de] hover:bg-[#f3f4f6]">
                  <div className="text-base font-bold text-[#1f2328] font-mono">{internships.length}</div>
                  <div className="text-[10px] text-[#656d76]">Internships</div>
                </a>
                <a href="#skills" className="p-2 rounded bg-[#f6f8fa] border border-[#d0d7de] hover:bg-[#f3f4f6]">
                  <div className="text-base font-bold text-[#1f2328] font-mono">4</div>
                  <div className="text-[10px] text-[#656d76]">Languages</div>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: README.md Profile Box */}
          <div className="lg:col-span-8">
            <div className="gh-box overflow-hidden">
              
              {/* README Header Bar */}
              <div className="gh-box-header flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#1f2328]">
                  <BookOpen className="w-4 h-4 text-[#656d76]" />
                  <span>{personalInfo.username} / README.md</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#656d76]">
                  <span>preview</span>
                </div>
              </div>

              {/* Markdown Content */}
              <div className="p-6 sm:p-8 space-y-5 text-sm text-[#1f2328] leading-relaxed">
                
                <div className="border-b border-[#d0d7de] pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold flex items-center space-x-2">
                    <span>Hi there, I'm {personalInfo.name}</span>
                    <span className="text-base">👋</span>
                  </h2>
                  <p className="text-xs text-[#656d76] mt-1 font-mono">
                    Full Stack Developer • Computer Science Student @ AKGEC
                  </p>
                </div>

                <p className="text-[#1f2328] leading-relaxed">
                  {personalInfo.introduction}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2328] list-disc list-inside">
                  <li>🔭 <strong>Focus:</strong> Full Stack Web Development & modern application design</li>
                  <li>🌱 <strong>Core Languages:</strong> C, C++, Java, and Python with algorithmic reasoning</li>
                  <li>⚡ <strong>Frontend & Backend:</strong> HTML5, CSS3, JavaScript, React.js, Node.js, REST APIs</li>
                  <li>🎨 <strong>Extracurricular:</strong> Passionate interest in Art and Craft</li>
                  <li>📍 <strong>Location:</strong> From Prayagraj, UP; studying in Noida region</li>
                </ul>

                {/* Bottom Action CTA inside README */}
                <div className="pt-3 border-t border-[#d0d7de] flex flex-wrap items-center justify-between gap-3 text-xs text-[#656d76]">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1f883d]" />
                    <span>Verified Developer Portfolio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a href="#projects" className="gh-btn text-xs">
                      <span>View All 11 Projects</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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
