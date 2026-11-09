import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, GitCommit, Tag } from 'lucide-react';
import { internships } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-[#ffffff] border-b border-[#d0d7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-6 mb-8 border-b border-[#d0d7de]">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#656d76] uppercase tracking-wider mb-1">
            <Briefcase className="w-4 h-4 text-[#0969da]" />
            <span>Work History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] tracking-tight">
            Internship Experience ({internships.length})
          </h2>
          <p className="text-xs sm:text-sm text-[#656d76] mt-1">
            Professional timeline of practical software development learning and industry exposure.
          </p>
        </div>

        {/* Milestone / Release Cards */}
        <div className="space-y-6">
          {internships.map((intern) => (
            <div key={intern.id} className="gh-box overflow-hidden">
              
              {/* Header Bar */}
              <div className="gh-box-header flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-md bg-[#ffffff] border border-[#d0d7de] flex items-center justify-center text-[#0969da]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1f2328]">
                      {intern.company}
                    </h3>
                    <div className="text-xs font-semibold text-[#0969da]">
                      {intern.role}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-[#656d76] bg-[#ffffff] px-2.5 py-1 rounded border border-[#d0d7de] self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#656d76]" />
                  <span>{intern.duration}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <p className="text-xs sm:text-sm text-[#1f2328] leading-relaxed">
                  {intern.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#d0d7de]/70">
                  <span className="text-[11px] font-medium text-[#656d76] mr-1 flex items-center space-x-1">
                    <Tag className="w-3 h-3" />
                    <span>Focus:</span>
                  </span>
                  {intern.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#f6f8fa] text-[#1f2328] border border-[#d0d7de]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Verification Note */}
        <div className="mt-8 p-3 rounded-md bg-[#f6f8fa] border border-[#d0d7de] text-xs text-[#656d76] flex items-center justify-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-[#1f883d] flex-shrink-0" />
          <span>All 3 internships documented with verified timeline periods and practical exposure domains.</span>
        </div>

      </div>
    </section>
  );
}
