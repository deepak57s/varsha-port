import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../portfolioData';

interface HeroSectionProps {
  onScrollToExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToExplore }) => {
  return (
    <section
      id="home"
      className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden bg-[#141414] select-none text-cream font-hn"
    >
      {/* LAYER 0: Full-bleed Background Image */}
      <img
        src={personalInfo.bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover anim-fade-in pointer-events-none opacity-80"
      />

      {/* Subtle overlay gradient to ensure seamless visual transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141414]/20 to-[#141414] pointer-events-none" />

      {/* LAYER 1: Marquee Name (top-[16vh] sm:top-[14vh]) */}
      <div
        className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden pointer-events-none anim-fade-up"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee font-hn text-[16vh] sm:text-[26vh] leading-none text-cream font-normal">
          <span className="pr-[6vw] inline-flex items-center">
            {personalInfo.name.replace(' ', ' \u2014 ')}&nbsp;
          </span>
          <span className="pr-[6vw] inline-flex items-center">
            {personalInfo.name.replace(' ', ' \u2014 ')}&nbsp;
          </span>
        </div>
      </div>

      {/* LAYER 2: Horizontal Cream Rule */}
      <div
        className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream/90 anim-line pointer-events-none"
        aria-hidden="true"
      />

      {/* LAYER 3: Desktop Footer Info */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden sm:flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn">
        {/* Footer Left */}
        <div
          className="flex flex-col anim-fade-up text-cream"
          style={{ animationDelay: '1400ms' }}
        >
          {personalInfo.footerLeft.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>

        {/* Explore Downward Cue */}
        <button
          type="button"
          onClick={onScrollToExplore}
          className="group flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-300 pointer-events-auto cursor-pointer focus:outline-none"
          aria-label="Scroll to background and explore portfolio"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
            Scroll to explore
          </span>
          <div className="w-7 h-7 rounded-full border border-cream/30 flex items-center justify-center group-hover:border-cream/80 transition-colors anim-float">
            <ArrowDown size={14} className="stroke-[1.5]" />
          </div>
        </button>

        {/* Footer Right */}
        <div
          className="flex flex-col text-right anim-fade-up text-cream"
          style={{ animationDelay: '1550ms' }}
        >
          {personalInfo.footerRight.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>
      </div>

      {/* Mobile Footer Info */}
      <div className="absolute inset-x-0 bottom-0 z-30 sm:hidden flex items-end justify-between px-6 pb-5 text-xs leading-relaxed font-hn">
        <div
          className="flex flex-col anim-fade-up text-cream"
          style={{ animationDelay: '1400ms' }}
        >
          {personalInfo.footerLeft.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>

        <button
          type="button"
          onClick={onScrollToExplore}
          className="flex flex-col items-center gap-1.5 text-cream/70 hover:text-cream transition-colors cursor-pointer pointer-events-auto"
          aria-label="Explore portfolio"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Explore</span>
          <ArrowDown size={14} className="anim-float stroke-[1.5]" />
        </button>

        <div
          className="flex flex-col text-right anim-fade-up text-cream"
          style={{ animationDelay: '1550ms' }}
        >
          {personalInfo.footerRight.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>
      </div>

      {/* LAYER 4: Front Portrait */}
      <div className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none anim-rise-in">
        <img
          src={personalInfo.portraitImage}
          alt="Portrait of Donkada Varsha"
          className="h-[80vh] sm:h-[86vh] w-auto max-w-[85vw] object-contain object-bottom drop-shadow-2xl"
        />
      </div>
    </section>
  );
};
