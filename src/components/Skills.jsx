import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Coffee, 
  Binary, 
  FileCode, 
  Palette, 
  FileJson, 
  Layers, 
  Server, 
  Network, 
  LayoutGrid, 
  Wind, 
  GitBranch, 
  Github, 
  Terminal, 
  MonitorSmartphone, 
  Boxes, 
  Sliders, 
  Globe, 
  Database, 
  AppWindow,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2,
  Cpu,
  Coffee,
  Binary,
  FileCode,
  Palette,
  FileJson,
  Layers,
  Server,
  Network,
  LayoutGrid,
  Wind,
  GitBranch,
  Github,
  Terminal,
  MonitorSmartphone,
  Boxes,
  Sliders,
  Globe,
  Database,
  AppWindow
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-16 bg-[#ffffff] border-b border-[#d0d7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-[#d0d7de] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#656d76] uppercase tracking-wider mb-1">
              <Cpu className="w-4 h-4 text-[#0969da]" />
              <span>Developer Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] tracking-tight">
              Technical Stack & Skills
            </h2>
            <p className="text-xs sm:text-sm text-[#656d76] mt-1">
              Verified programming languages, frontend/backend libraries, frameworks, and developer tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {['All', ...skillCategories.map(c => c.category)].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1f2328] text-[#ffffff]'
                    : 'bg-[#f6f8fa] text-[#656d76] hover:bg-[#f3f4f6] border border-[#d0d7de]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((group) => (
            <div key={group.category} className="gh-box overflow-hidden flex flex-col justify-between">
              
              {/* Category Header */}
              <div className="gh-box-header flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#1f2328] flex items-center space-x-2">
                  <span>{group.category}</span>
                </h3>
                <span className="text-[11px] font-mono text-[#656d76] bg-[#afb8c133] px-2 py-0.5 rounded-full">
                  {group.skills.length}
                </span>
              </div>

              {/* Skills List with Language Colored Dots */}
              <div className="p-4 space-y-2.5">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded hover:bg-[#f6f8fa] transition-colors border border-transparent hover:border-[#d0d7de]"
                    >
                      <div className="flex items-center space-x-2.5">
                        <span 
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: skill.color || '#0969da' }}
                        />
                        <span className="text-xs font-semibold text-[#1f2328]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#656d76] bg-[#f6f8fa] border border-[#d0d7de] px-2 py-0.5 rounded">
                        {skill.badge}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Verified Notice */}
        <div className="mt-8 text-center text-xs text-[#656d76] max-w-xl mx-auto flex items-center justify-center space-x-2 bg-[#f6f8fa] py-3 px-4 rounded-md border border-[#d0d7de]">
          <CheckCircle2 className="w-4 h-4 text-[#1f883d] flex-shrink-0" />
          <span>Authentic proficiencies verified from actual development projects. No artificial ratings.</span>
        </div>

      </div>
    </section>
  );
}
