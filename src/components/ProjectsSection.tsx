import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { projects } from '../portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { label: 'All Works (3)', value: 'all' },
    { label: 'AI & Full-Stack', value: 'ai-fullstack' },
    { label: 'Web Applications', value: 'web-app' },
    { label: 'Research & Systems', value: 'research' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-cream/10 bg-[#141414] text-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cream/50 mb-3">
              <span>03</span>
              <span>/</span>
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight font-hn text-cream">
              Projects & Research
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            Production systems, artificial intelligence integrations, and telecommunication network slicing research.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-8 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-[#ff6b35] text-white font-medium shadow-md shadow-[#ff6b35]/20'
                  : 'bg-[#1e1e1e] text-cream/70 hover:text-cream border border-cream/10 hover:border-cream/25'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#181818]/90 border border-cream/10 hover:border-cream/30 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff6b35] bg-[#222222] px-2.5 py-1 rounded-md border border-cream/10">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-cream/50 flex items-center gap-1">
                    <Calendar size={12} />
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-cream group-hover:text-white transition-colors font-hn mb-2">
                  {project.title}
                </h3>

                {project.location && (
                  <p className="text-xs font-mono text-cream/40 flex items-center gap-1 mb-4">
                    <MapPin size={12} />
                    {project.location}
                  </p>
                )}

                <p className="text-sm text-cream/75 font-light leading-relaxed mb-6">
                  {project.subtitle}
                </p>

                {/* Key bullets */}
                <ul className="space-y-2 mb-6 text-xs text-cream/70 font-light border-t border-cream/10 pt-4">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-[#ff6b35] mt-0.5 shrink-0" />
                      <span className="line-clamp-2">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 pb-6 border-t border-cream/10">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#222222] text-cream/80 border border-cream/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-cream/40">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-cream/10">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cream/80 hover:text-[#ff6b35] cursor-pointer transition-colors"
                  >
                    <span>Architecture Deep-Dive</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#222222] hover:bg-[#2c2c2c] text-cream/70 hover:text-[#ff6b35] border border-cream/10 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2c2c2c] text-[#ff6b35] border border-cream/10 hover:border-[#ff6b35]/40 transition-colors text-xs font-mono"
                        aria-label={`Verify live application for ${project.title}`}
                        title={`Verify live app: ${project.demoUrl}`}
                      >
                        <ExternalLink size={13} />
                        <span>Verify Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
