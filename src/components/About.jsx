import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Palette, 
  Briefcase, 
  MapPin, 
  User, 
  Terminal, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#ffffff] border-b border-[#d0d7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-6 mb-8 border-b border-[#d0d7de]">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#656d76] uppercase tracking-wider mb-1">
            <User className="w-4 h-4 text-[#0969da]" />
            <span>Developer Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] tracking-tight">
            About Me
          </h2>
          <p className="text-xs sm:text-sm text-[#656d76] mt-1">
            Detailed background in Computer Science, full-stack engineering, and creative extracurricular pursuits.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Narrative */}
          <div className="lg:col-span-8">
            <div className="gh-box overflow-hidden">
              <div className="gh-box-header flex items-center space-x-2 text-xs font-semibold text-[#1f2328]">
                <FileText className="w-4 h-4 text-[#656d76]" />
                <span>Biography & Development Journey</span>
              </div>
              <div className="p-6 space-y-4 text-xs sm:text-sm text-[#1f2328] leading-relaxed">
                <p>
                  My name is <strong className="font-semibold">Ujjwal Gupta</strong>, and I am a Computer Science student with a passionate focus on <strong className="text-[#0969da] font-semibold">Full Stack Web Development</strong>. Originally from <span className="font-medium">Prayagraj, Uttar Pradesh</span>, I am currently pursuing technical academics in the Noida region at Ajay Kumar Garg Engineering College (AKGEC).
                </p>
                <p>
                  I enjoy developing websites and functional web applications that solve real-world problems. Over the course of my coursework and personal projects, I have worked across both frontend and backend technologies, building interactive user interfaces with React.js and connecting server-side REST APIs.
                </p>
                <p>
                  I have built foundational competence in multiple programming languages including <span className="font-semibold text-[#1f2328]">C, C++, Java, and Python</span>, which allows me to approach problems with strong algorithmic fundamentals.
                </p>
                <p>
                  Through multiple practical internships, I have gained real-world development exposure and collaborative coding experience. Outside programming, I have an interest in <strong className="font-semibold text-[#8250df]">art and craft</strong> as an extracurricular activity, which enhances my attention to visual detail, component hierarchy, and user-centric design.
                </p>
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div className="lg:col-span-4 space-y-3">
            <div className="gh-box p-4 space-y-3 text-xs">
              <div className="font-bold text-[#1f2328] pb-2 border-b border-[#d0d7de]">
                Quick Facts
              </div>
              <div className="flex items-center space-x-2.5">
                <GraduationCap className="w-4 h-4 text-[#0969da]" />
                <div>
                  <div className="font-semibold">College Student</div>
                  <div className="text-[#656d76]">AKGEC • Computer Science</div>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Code className="w-4 h-4 text-[#1a7f37]" />
                <div>
                  <div className="font-semibold">Core Focus</div>
                  <div className="text-[#656d76]">Full Stack Web (React & Node)</div>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Briefcase className="w-4 h-4 text-[#0969da]" />
                <div>
                  <div className="font-semibold">Internships</div>
                  <div className="text-[#656d76]">BeeSkilled • Vault • UptoSkills</div>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Palette className="w-4 h-4 text-[#8250df]" />
                <div>
                  <div className="font-semibold">Extracurricular</div>
                  <div className="text-[#656d76]">Art & Craft Hobby</div>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-[#cf222e]" />
                <div>
                  <div className="font-semibold">Origin</div>
                  <div className="text-[#656d76]">Prayagraj, Uttar Pradesh</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
