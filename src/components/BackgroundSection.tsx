import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, experiences, educations } from '../portfolioData';

export const BackgroundSection: React.FC = () => {
  return (
    <section id="background" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-cream/10 bg-transparent text-cream">
      {/* Decorative subtle hairline grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(239, 238, 233, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cream/50 mb-3">
              <span>01</span>
              <span>/</span>
              <span>BIOGRAPHY & EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight font-hn text-cream">
              Professional Background
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            Data Analyst and AI-ML engineer blending analytical precision with thoughtful interface architecture.
          </p>
        </div>

        {/* Narrative & Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">
          {/* Narrative statement */}
          <div className="lg:col-span-7 bg-[#1a1a1a]/70 border border-cream/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cream/60 mb-5">
                <Sparkles size={14} className="text-[#ff6b35]" />
                <span>Career Objective & Vision</span>
              </div>
              <blockquote className="text-lg sm:text-xl font-light leading-relaxed text-cream/90 italic">
                "{personalInfo.objective}"
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/10 flex flex-wrap items-center gap-6 text-xs font-mono text-cream/60">
              <span className="flex items-center gap-2">
                <MapPin size={13} className="text-cream/40" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase size={13} className="text-cream/40" />
                Tao Digital Solutions
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap size={13} className="text-cream/40" />
                Raghu Institute of Technology
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#181818] border border-cream/10 rounded-xl p-6 flex flex-col justify-center transition-all duration-300 hover:border-cream/30"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-cream/50 mb-2">
                  {stat.label}
                </span>
                <span className="text-2xl sm:text-3xl font-medium text-cream tracking-tight font-hn">
                  {stat.value}
                </span>
                <span className="text-[11px] text-cream/60 mt-1 font-light">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column: Professional Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16">
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-3 border-b border-cream/10">
              <Briefcase size={18} className="text-cream/70" />
              <h3 className="text-xl font-medium tracking-wide font-hn">Professional Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-[#181818]/90 border border-cream/10 hover:border-cream/25 rounded-2xl p-7 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-medium text-cream group-hover:text-white transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-cream/70">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <span className="text-xs font-mono text-cream/60 flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="text-[11px] font-mono text-cream/40 flex items-center gap-1 mt-0.5">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-cream/80 font-light mb-5 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2.5 mb-6 text-sm text-cream/70 font-light">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 size={15} className="text-[#ff6b35] mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-cream/10 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#222222] text-cream/80 border border-cream/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-3 border-b border-cream/10">
              <GraduationCap size={18} className="text-cream/70" />
              <h3 className="text-xl font-medium tracking-wide font-hn">Education</h3>
            </div>

            <div className="space-y-6">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-[#181818]/90 border border-cream/10 hover:border-cream/25 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#ff6b35] mb-1">
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-medium text-cream">{edu.degree}</h4>
                      {edu.field && (
                        <p className="text-xs text-cream/80 font-light mt-0.5">{edu.field}</p>
                      )}
                      <p className="text-xs text-cream/60 mt-1">{edu.institution} &bull; {edu.location}</p>
                    </div>

                    <div className="text-right shrink-0 bg-[#222222] px-3 py-1.5 rounded-lg border border-cream/10">
                      <span className="text-[10px] font-mono block text-cream/50 uppercase">
                        {edu.scoreType}
                      </span>
                      <span className="text-base font-semibold text-cream font-mono">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="mt-4 pt-4 border-t border-cream/10 space-y-2 text-xs text-cream/70 font-light leading-relaxed">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#ff6b35] mt-1 shrink-0">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
