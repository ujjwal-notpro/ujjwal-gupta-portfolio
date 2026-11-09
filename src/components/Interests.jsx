import React from 'react';
import { Palette, Compass, Code, Sparkles, Cpu, Heart } from 'lucide-react';
import { personalInterests } from '../data/portfolioData';

const interestConfig = {
  'Art and Craft': {
    gradient: 'from-purple-500 to-pink-500',
    bgLight: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    icon: Palette,
    tag: 'Extracurricular Pursuit'
  },
  'Exploring New Technologies': {
    gradient: 'from-cyan-500 to-blue-500',
    bgLight: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
    icon: Compass,
    tag: 'Continuous Learning'
  },
  'Learning Programming': {
    gradient: 'from-indigo-500 to-purple-600',
    bgLight: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    icon: Code,
    tag: 'Problem Solving'
  },
  'Building Creative Projects': {
    gradient: 'from-amber-400 to-rose-500',
    bgLight: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600',
    icon: Sparkles,
    tag: 'Hands-on Building'
  },
  'Exploring Software Development': {
    gradient: 'from-emerald-400 to-teal-600',
    bgLight: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    icon: Cpu,
    tag: 'Architecture & Scalability'
  }
};

export default function Interests() {
  return (
    <section id="interests" className="py-24 relative bg-white">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full badge-gradient-rose text-xs font-bold tracking-wide">
            <Heart className="w-3.5 h-3.5" />
            <span>Passions & Pursuits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Beyond <span className="gradient-text-warm">Coding</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Personal passions, artistic hobbies, and continuous curiosities that inspire my visual thinking and creative problem-solving.
          </p>
        </div>

        {/* Interests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {personalInterests.map((interest) => {
            const config = interestConfig[interest.title] || {
              gradient: 'from-indigo-500 to-purple-600',
              bgLight: 'bg-indigo-50',
              border: 'border-indigo-200',
              text: 'text-indigo-600',
              icon: Sparkles,
              tag: 'Personal Pursuit'
            };
            const Icon = config.icon;
            const isArt = interest.title === 'Art and Craft';

            return (
              <div
                key={interest.title}
                className={`portfolio-card p-6 sm:p-7 bg-white flex flex-col justify-between ${
                  isArt ? 'border-purple-300 ring-2 ring-purple-500/10' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${config.gradient} text-white flex items-center justify-center shadow-md shadow-indigo-500/15`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${config.bgLight} ${config.text} border ${config.border}`}>
                      {config.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 font-heading mb-2">
                    {interest.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center space-x-2 text-xs font-semibold text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span>Personal Interest & Continuous Growth</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
