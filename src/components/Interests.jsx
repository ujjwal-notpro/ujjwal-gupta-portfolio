import React from 'react';
import { Palette, Compass, Code, Sparkles, Cpu, Heart, CheckCircle2 } from 'lucide-react';
import { personalInterests } from '../data/portfolioData';

const iconMap = {
  Palette,
  Compass,
  Code,
  Sparkles,
  Cpu
};

export default function Interests() {
  return (
    <section id="interests" className="py-16 bg-[#ffffff] border-b border-[#d0d7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-6 mb-8 border-b border-[#d0d7de]">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#656d76] uppercase tracking-wider mb-1">
            <Heart className="w-4 h-4 text-[#cf222e]" />
            <span>Extracurricular & Creative</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] tracking-tight">
            Beyond Coding
          </h2>
          <p className="text-xs sm:text-sm text-[#656d76] mt-1">
            Personal passions, artistic hobbies, and continuous curiosities that inspire my visual thinking and daily learning.
          </p>
        </div>

        {/* Interests Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInterests.map((interest) => {
            const Icon = iconMap[interest.icon] || Sparkles;
            const isArt = interest.title === 'Art and Craft';

            return (
              <div key={interest.title} className="gh-box overflow-hidden flex flex-col justify-between">
                
                <div>
                  {/* Header */}
                  <div className="gh-box-header flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className={`w-4 h-4 ${isArt ? 'text-[#8250df]' : 'text-[#0969da]'}`} />
                      <span className="text-xs font-bold text-[#1f2328]">
                        {interest.title}
                      </span>
                    </div>
                    {isArt && (
                      <span className="text-[10px] font-bold uppercase bg-[#fbefff] text-[#8250df] border border-[#d8b9ff] px-2 py-0.5 rounded-full">
                        Extracurricular
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="text-xs sm:text-sm text-[#656d76] leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#f6f8fa] border-t border-[#d0d7de] flex items-center space-x-2 text-[11px] text-[#656d76]">
                  <span className="w-2 h-2 rounded-full bg-[#1f883d]" />
                  <span>Personal Interest & Continuous Pursuit</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
