import React from 'react';
import { GraduationCap, Calendar, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-[#ffffff] border-b border-[#d0d7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-6 mb-8 border-b border-[#d0d7de]">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#656d76] uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4 text-[#0969da]" />
            <span>Academic Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] tracking-tight">
            Academic Background
          </h2>
          <p className="text-xs sm:text-sm text-[#656d76] mt-1">
            Formal foundations in Computer Science engineering and secondary education credentials.
          </p>
        </div>

        {/* Education Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="gh-box overflow-hidden flex flex-col justify-between">
              
              <div>
                {/* Box Header */}
                <div className="gh-box-header flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-[#0969da]" />
                    <span className="text-xs font-semibold text-[#1f2328]">
                      {edu.isCurrent ? 'Higher Education' : 'Secondary Education'}
                    </span>
                  </div>
                  {edu.isCurrent ? (
                    <span className="text-[10px] font-bold uppercase bg-[#dafbe1] text-[#1a7f37] border border-[#2da44e]/30 px-2 py-0.5 rounded-full">
                      Current Student
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium text-[#656d76] bg-[#ffffff] border border-[#d0d7de] px-2 py-0.5 rounded-full">
                      Completed
                    </span>
                  )}
                </div>

                {/* Box Body */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1f2328]">
                      {edu.institution}
                    </h3>
                    <div className="text-xs font-semibold text-[#0969da] mt-0.5">
                      {edu.degree}
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#656d76] list-disc list-inside">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Box Footer */}
              <div className="p-3 bg-[#f6f8fa] border-t border-[#d0d7de] flex items-center justify-between text-xs text-[#656d76]">
                <div className="flex items-center space-x-1 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
                {edu.board && (
                  <span className="font-mono text-[11px] bg-[#ffffff] border border-[#d0d7de] px-2 py-0.5 rounded text-[#1f2328]">
                    {edu.board}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 p-3 rounded-md bg-[#f6f8fa] border border-[#d0d7de] text-xs text-[#656d76] flex items-start space-x-2.5 max-w-2xl mx-auto">
          <AlertCircle className="w-4 h-4 text-[#0969da] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#1f2328]">Academic Verification Note:</strong> Degree title, current semester, CGPA, and specific enrollment/graduation years are left customizable and open for formal documentation upon request.
          </p>
        </div>

      </div>
    </section>
  );
}
