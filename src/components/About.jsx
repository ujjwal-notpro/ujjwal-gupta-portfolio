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
  Sparkles,
  Heart
} from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-white">
      {/* Background Soft Color Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full badge-gradient-indigo text-xs font-bold tracking-wide">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            About <span className="gradient-text-primary">Me</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A genuine overview of my computer science journey, full stack web development passions, and creative mindset.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="portfolio-card p-7 sm:p-9 bg-white h-full flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2.5 pb-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                    Passionate Developer & Problem Solver
                  </h3>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    My name is <strong className="text-slate-900 font-semibold">Ujjwal Gupta</strong>, and I am a Computer Science student with a keen focus on <strong className="text-indigo-600 font-semibold">Full Stack Web Development</strong>. Originally from <span className="text-slate-900 font-medium">Prayagraj, Uttar Pradesh</span>, I am currently pursuing technical academics in the Noida region at Ajay Kumar Garg Engineering College (AKGEC).
                  </p>
                  <p>
                    I genuinely enjoy developing responsive, user-friendly websites and web applications. Over the course of my learning and project work, I have worked across both <span className="text-slate-900 font-semibold">frontend and backend technologies</span>, building component-driven React applications and connecting practical REST APIs.
                  </p>
                  <p>
                    I have built solid foundations in multiple programming languages including <span className="text-indigo-600 font-bold">C, C++, Java, and Python</span>, which allows me to approach problems with algorithmic reasoning and structured thinking.
                  </p>
                  <p>
                    Through practical internship experiences, I have gained real-world development exposure and collaborative coding insight. Outside programming, I have a passionate interest in <strong className="text-purple-600 font-bold">art and craft</strong> as an extracurricular activity, which enhances my attention to visual detail, aesthetic balance, and intuitive user experiences.
                  </p>
                </div>
              </div>

              {/* Direct Quote Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-purple-50/60 to-pink-50/40 border border-indigo-100 shadow-xs">
                <p className="text-xs sm:text-sm text-slate-800 italic font-semibold leading-relaxed">
                  "My goal is to become a skilled software developer and contribute to building impactful and scalable digital solutions."
                </p>
                <span className="text-[11px] font-bold text-indigo-600 mt-1 block">
                  — Ujjwal Gupta
                </span>
              </div>

            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              
              {/* Card 1: Academic Focus */}
              <div className="portfolio-card p-5 bg-white flex flex-col justify-between border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 mb-3">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                    Academic Focus
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    Computer Science
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    AKGEC (Noida/Ghaziabad)
                  </p>
                </div>
              </div>

              {/* Card 2: Development Focus */}
              <div className="portfolio-card p-5 bg-white flex flex-col justify-between border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/20 mb-3">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600">
                    Specialization
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    Full Stack Web
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    React.js & Node.js
                  </p>
                </div>
              </div>

              {/* Card 3: Creative Hobby */}
              <div className="portfolio-card p-5 bg-white flex flex-col justify-between border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-md shadow-purple-500/20 mb-3">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">
                    Extracurricular
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    Art and Craft
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Creative Visual Eye
                  </p>
                </div>
              </div>

              {/* Card 4: Internships */}
              <div className="portfolio-card p-5 bg-white flex flex-col justify-between border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 mb-3">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    Work History
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    3 Internships
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    BeeSkilled • Vault • UptoSkills
                  </p>
                </div>
              </div>

              {/* Card 5: Geographic Roots */}
              <div className="portfolio-card p-5 bg-white sm:col-span-2 border-slate-200">
                <div className="flex items-center space-x-3.5 mb-2">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                      Geographic Background
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      From Prayagraj, Uttar Pradesh, India
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-14">
                  Born and raised in Prayagraj; currently pursuing technical education and full-stack software development in the Noida region.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
