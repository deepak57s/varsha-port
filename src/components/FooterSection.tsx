import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../portfolioData';

interface FooterSectionProps {
  onBackToTop: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onBackToTop }) => {
  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-cream/10 py-16 px-6 sm:px-10 lg:px-16 text-cream">
      <div className="max-w-6xl mx-auto flex flex-col justify-between gap-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-cream/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-cream/70">
                Available for New Roles & Collaborations
              </span>
            </div>
            <h3 className="text-2xl font-medium font-hn text-cream">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-cream/50 font-light mt-1">
              Data Analyst &bull; AI-ML Engineer &bull; Visakhapatnam, AP
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-cream/10 text-cream/70 hover:text-cream transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-cream/10 text-cream/70 hover:text-cream transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-cream/10 text-cream/70 hover:text-cream transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <button
              type="button"
              onClick={onBackToTop}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-cream/10 text-xs font-mono uppercase tracking-wider text-cream/70 hover:text-cream transition-colors cursor-pointer ml-2"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-cream/40">
          <div>
            &copy; {personalInfo.year} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript & Tailwind CSS &bull; {personalInfo.location}
          </div>
        </div>
      </div>
    </footer>
  );
};
