import React from 'react';
import { Palette, Database, Code, Cpu, Terminal, Layers } from 'lucide-react';
import { skillCategories } from '../portfolioData';

const getIcon = (name: string) => {
  switch (name) {
    case 'palette':
      return <Palette size={20} className="text-[#38bdf8]" />;
    case 'database':
      return <Database size={20} className="text-[#38bdf8]" />;
    case 'code':
      return <Code size={20} className="text-[#38bdf8]" />;
    case 'cpu':
      return <Cpu size={20} className="text-[#38bdf8]" />;
    case 'terminal':
      return <Terminal size={20} className="text-[#38bdf8]" />;
    default:
      return <Layers size={20} className="text-[#38bdf8]" />;
  }
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative w-full py-24 px-6 sm:px-10 lg:px-16 border-t border-cream/10 bg-[#121212] text-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cream/50 mb-3">
              <span>02</span>
              <span>/</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight font-hn text-cream">
              Skills & Expertise
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            Multi-disciplinary capabilities spanning data analysis, full-stack web engineering, and product interface design.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 items-start">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`bg-[#181818]/80 border border-cream/10 hover:border-cream/25 rounded-2xl p-7 flex flex-col transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-xl ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#222222] border border-cream/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(cat.iconName)}
                </div>

                {/* Title & Context text with refined, disciplined gap */}
                <h3 className="text-lg sm:text-xl font-medium text-cream font-hn leading-snug">
                  {cat.title}
                </h3>
                <p className="text-xs text-cream/65 font-light leading-relaxed mt-2">
                  {cat.description}
                </p>
              </div>

              {/* Skill chips directly following context with clean spacing */}
              <div className="mt-5 pt-4 border-t border-cream/10 flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#202020] hover:bg-[#282828] text-cream/90 border border-cream/10 hover:border-cream/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
