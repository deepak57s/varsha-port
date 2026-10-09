import { useState, useEffect } from 'react';
import { X, Compass, GraduationCap, Briefcase, Mail, Layers, Award } from 'lucide-react';
import GooeyNav, { GooeyNavItem } from './GooeyNav';
import { HeroSection } from './components/HeroSection';
import { BackgroundSection } from './components/BackgroundSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { personalInfo } from './portfolioData';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const gooeyItems: GooeyNavItem[] = [
    { label: 'HOME', href: '#home', icon: <Compass size={15} className="text-[#ff6b35]" /> },
    { label: 'BACKGROUND', href: '#background', icon: <GraduationCap size={15} className="opacity-70" /> },
    { label: 'SKILLS & EXPERTISE', href: '#skills', icon: <Layers size={15} className="opacity-70" /> },
    { label: 'WORK & PROJECTS', href: '#projects', icon: <Briefcase size={15} className="opacity-70" /> },
    { label: 'CONTACT', href: '#contact', icon: <Mail size={15} className="opacity-70" /> },
  ];

  const drawerNavItems = [
    { label: 'Home', href: '#home', icon: <Compass size={18} /> },
    { label: 'Background & Experience', href: '#background', icon: <GraduationCap size={18} /> },
    { label: 'Skills & Expertise', href: '#skills', icon: <Layers size={18} /> },
    { label: 'Projects & Research', href: '#projects', icon: <Briefcase size={18} /> },
    { label: 'Certifications', href: '#certifications', icon: <Award size={18} /> },
    { label: 'Get in Touch', href: '#contact', icon: <Mail size={18} /> },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: personalInfo.linkedin },
    { label: 'GitHub', href: personalInfo.github },
    { label: 'Email', href: `mailto:${personalInfo.email}` },
  ];

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track scroll position to update header styling & active nav section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = ['home', 'background', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (_index: number, item: GooeyNavItem) => {
    const targetId = item.href.replace('#', '');
    scrollToSection(targetId);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#141414] text-cream font-hn selection:bg-cream selection:text-black">
      {/* =========================================================================
          FIXED HEADER: Dynamic Glass Navbar with GooeyNav
      ========================================================================= */}
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 sm:px-10 transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'py-3.5 bg-[#141414]/85 backdrop-blur-md border-b border-cream/10 shadow-lg'
            : 'pt-5 sm:pt-6 pb-2 bg-transparent'
        }`}
      >
        {/* Brand / Logo link (top-left) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="font-hn text-lg tracking-wide text-cream anim-fade-up hover:text-[#ff6b35] transition-colors cursor-pointer bg-transparent border-none p-0 text-left focus:outline-none"
            style={{ animationDelay: '800ms' }}
          >
            {personalInfo.brand}
          </button>
        </div>

        {/* Center: React Bits GooeyNav Component */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          <div
            className="anim-fade-up flex items-center"
            style={{ animationDelay: '950ms' }}
          >
            <GooeyNav
              items={gooeyItems}
              particleCount={14}
              particleDistances={[75, 12]}
              particleR={90}
              initialActiveIndex={0}
              activeIndex={activeSectionIndex}
              onItemClick={handleNavClick}
              animationTime={500}
              timeVariance={250}
              colors={[1, 2, 3, 1, 2, 3]}
            />
          </div>
        </div>

        {/* Right cluster: Social Links (2026 removed) */}
        <div className="hidden sm:flex items-center gap-6 lg:gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4 text-sm font-hn" aria-label="Social Links">
            {socialLinks.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-cream anim-fade-up hover:text-[#ff6b35] transition-colors duration-300"
                style={{ animationDelay: `${1150 + idx * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hamburger Button (Mobile Only) */}
      <button
        type="button"
        onClick={() => setIsDrawerOpen((prev) => !prev)}
        aria-label={isDrawerOpen ? 'Close Menu' : 'Open Menu'}
        aria-expanded={isDrawerOpen}
        className="sm:hidden fixed right-6 top-5 z-50 h-10 w-10 flex items-center justify-center focus:outline-none anim-fade-up cursor-pointer"
        style={{ animationDelay: '900ms' }}
      >
        <div className="relative h-4 w-6 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-cream transform transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
              isDrawerOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-cream transition-opacity duration-300 ${
              isDrawerOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-cream transform transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
              isDrawerOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Drawer + Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className={`sm:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      <aside
        className={`sm:hidden fixed top-0 right-0 bottom-0 z-40 w-[85%] max-w-sm bg-[#141414] px-8 py-10 flex flex-col justify-between transform transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-y-auto ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(false)}
          aria-label="Close Navigation"
          className={`absolute right-6 top-6 text-cream transition-all duration-300 cursor-pointer ${
            isDrawerOpen
              ? 'opacity-100 rotate-0 delay-300'
              : 'opacity-0 rotate-90 pointer-events-none'
          }`}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        {/* Drawer Content */}
        <div className="mt-14 flex flex-col gap-8">
          <div>
            <div
              className={`text-xs uppercase tracking-[0.2em] text-cream/50 mb-5 font-hn transition-all duration-500 ${
                isDrawerOpen
                  ? 'opacity-100 translate-y-0 delay-[250ms]'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Navigation
            </div>
            <nav className="flex flex-col gap-3">
              {drawerNavItems.map((item, idx) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    scrollToSection(item.href.replace('#', ''));
                  }}
                  className={`flex items-center gap-3 text-lg font-hn text-cream transition-all duration-500 hover:opacity-60 text-left bg-transparent border-none p-1 cursor-pointer ${
                    isDrawerOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    transitionDelay: isDrawerOpen ? `${250 + idx * 60}ms` : '0ms',
                  }}
                >
                  <span className="text-[#ff6b35] opacity-90">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div>
            <div
              className={`text-xs uppercase tracking-[0.2em] text-cream/50 mb-3 font-hn transition-all duration-500 ${
                isDrawerOpen
                  ? 'opacity-100 translate-y-0 delay-[500ms]'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Connect
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`text-sm font-hn text-cream transition-all duration-500 hover:text-[#ff6b35] ${
                    isDrawerOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isDrawerOpen ? `${500 + idx * 60}ms` : '0ms',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`text-xs font-hn text-cream/40 pt-6 border-t border-cream/10 transition-all duration-500 ${
            isDrawerOpen ? 'opacity-100 delay-[650ms]' : 'opacity-0'
          }`}
        >
          <span>{personalInfo.year}</span> &bull; <span>{personalInfo.footerLeft[0]}</span>
        </div>
      </aside>

      {/* =========================================================================
          MAIN PORTFOLIO SECTIONS
      ========================================================================= */}
      <main>
        {/* SECTION 0: Hero Landing Showcase */}
        <HeroSection onScrollToExplore={() => scrollToSection('background')} />

        {/* SECTION 1: Professional Background & Education */}
        <BackgroundSection />

        {/* SECTION 2: Skills & Competencies */}
        <SkillsSection />

        {/* SECTION 3: Projects & Research Internship */}
        <ProjectsSection />

        {/* SECTION 4: Certifications & Milestones */}
        <CertificationsSection />

        {/* SECTION 5: Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* =========================================================================
          SITE FOOTER
      ========================================================================= */}
      <FooterSection onBackToTop={() => scrollToSection('home')} />
    </div>
  );
}
