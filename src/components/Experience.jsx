import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { internships } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-purple-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full badge-gradient-indigo text-xs font-bold tracking-wide">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Learning & Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Internship <span className="gradient-text-primary">Experience</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Professional timeline showcasing practical engineering learning, development exposure, and real-world workflows.
          </p>
        </div>

        {/* Vertical Creative Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line with Vibrant Gradient */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-70" />

          <div className="space-y-12">
            {internships.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Timeline Center Node with Animated Hover Glow */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 border-4 border-white flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-115 transition-all duration-300 z-10">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Spacer for Alternate Layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="pl-14 sm:pl-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="portfolio-card p-6 sm:p-7 bg-white group-hover:shadow-xl transition-all duration-300">
                      
                      {/* Top Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 mb-3 border-b border-slate-100">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading">
                            {item.company}
                          </h3>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 self-start sm:self-auto">
                          <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      {/* Role */}
                      <div className="text-sm font-extrabold text-indigo-600 mb-2">
                        {item.role}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Exposure Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-slate-50 text-slate-700 border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Authenticity Guarantee Note */}
        <div className="mt-14 max-w-xl mx-auto text-center text-xs text-slate-600 bg-slate-50 py-3.5 px-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Practical internship milestones documented with verified roles and timeline periods.</span>
        </div>

      </div>
    </section>
  );
}
