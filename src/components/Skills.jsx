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
  CheckCircle2,
  Sparkles
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
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const filtered = activeCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full badge-gradient-indigo text-xs font-bold tracking-wide">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Technical <span className="gradient-text-primary">Skills</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A comprehensive, verified toolkit of programming languages, frontend and backend technologies, frameworks, and developer workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                  : 'bg-white text-slate-600 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="space-y-10">
          {filtered.map((group) => (
            <div 
              key={group.category}
              className="portfolio-card p-6 sm:p-8 bg-white border border-slate-200 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
                    <span>{group.category}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full self-start sm:self-auto border border-indigo-100">
                  {group.skills.length} Technologies
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group p-4 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div 
                          className="w-11 h-11 rounded-xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-110"
                          style={{ 
                            backgroundColor: `${skill.color || '#6366f1'}15`,
                            color: skill.color || '#4f46e5',
                            border: `1px solid ${skill.color || '#6366f1'}30`
                          }}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          {skill.badge}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 text-center text-xs text-slate-600 max-w-2xl mx-auto flex items-center justify-center space-x-2 bg-white py-3.5 px-5 rounded-2xl border border-slate-200 shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>All technologies listed are authentic skills from my actual development stack. No artificial skill percentages.</span>
        </div>

      </div>
    </section>
  );
}
