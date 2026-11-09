import React from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, AlertCircle, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full badge-gradient-indigo text-xs font-bold tracking-wide">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            My <span className="gradient-text-primary">Education</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Formal foundations in Computer Science engineering and secondary school credentials.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`portfolio-card p-6 sm:p-7 bg-white flex flex-col justify-between ${
                edu.isCurrent ? 'border-indigo-300 ring-2 ring-indigo-500/10' : 'border-slate-200'
              }`}
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    edu.isCurrent 
                      ? 'bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {edu.isCurrent ? (
                    <span className="text-[11px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Current Student</span>
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      Completed
                    </span>
                  )}
                </div>

                {/* Institution & Degree */}
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-bold text-indigo-600 mt-1">
                    {edu.degree}
                  </p>
                </div>

                {/* Highlights / Notes */}
                <ul className="space-y-2 pt-2 text-xs text-slate-600">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Meta */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center space-x-1.5 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{edu.period}</span>
                </div>
                {edu.board && (
                  <span className="font-bold text-[11px] bg-slate-100 px-2.5 py-0.5 rounded-lg text-slate-700 border border-slate-200">
                    {edu.board}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 flex items-start space-x-3 text-xs text-slate-600 shadow-xs">
          <AlertCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-900">Profile Integrity Note:</strong> Degree title, current semester, CGPA, and specific enrollment/graduation years are left customizable and open for formal documentation upon request.
          </p>
        </div>

      </div>
    </section>
  );
}
