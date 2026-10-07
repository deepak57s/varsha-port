import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#181818] border border-cream/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-cream max-h-[90vh] overflow-y-auto z-10 anim-fade-up">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-6 right-6 p-2 rounded-lg bg-[#222222] border border-cream/10 text-cream/70 hover:text-cream hover:border-cream/30 transition-colors focus:outline-none"
        >
          <X size={20} />
        </button>

        {/* Category & Date */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cream/50 mb-3">
          <span className="px-2.5 py-1 rounded bg-[#252525] text-[#38bdf8] border border-cream/10 uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {project.period}
          </span>
          {project.location && (
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {project.location}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 id="modal-title" className="text-2xl sm:text-3xl font-medium font-hn text-cream mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-cream/70 font-light mb-6">
          {project.subtitle}
        </p>

        {/* Narrative Description */}
        <div className="py-4 border-t border-b border-cream/10 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-cream/50">
            Architecture & Implementation
          </h4>
          <p className="text-sm text-cream/80 font-light leading-relaxed">
            {project.description}
          </p>

          <h4 className="text-xs font-mono uppercase tracking-widest text-cream/50 pt-2">
            Key Highlights & Deliverables
          </h4>
          <ul className="space-y-2 text-sm text-cream/80 font-light">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <CheckCircle2 size={15} className="text-[#38bdf8] mt-1 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-cream/50 mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#222222] border border-cream/10 text-cream/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-cream/10 flex flex-wrap items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] border border-cream/15 text-xs font-mono text-cream transition-colors"
            >
              <Github size={15} />
              <span>View Source on GitHub</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cream text-black hover:bg-white font-medium text-xs font-mono transition-colors"
            >
              <ExternalLink size={15} />
              <span>Verify & Open Live Application</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
