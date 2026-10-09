import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { certifications } from '../portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative w-full py-20 px-6 sm:px-10 lg:px-16 border-t border-cream/10 bg-[#141414] text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-cream/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cream/50 mb-3">
              <span>04</span>
              <span>/</span>
              <span>HONORS & CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight font-hn text-cream">
              Certifications & Workshops
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
            Verified qualifications demonstrating continuous technical learning and specialized competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#181818]/80 border border-cream/10 hover:border-cream/25 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#222222] border border-cream/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  <Award size={20} className="text-[#ff6b35]" />
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-cream/50 block mb-1">
                  {cert.issuer}
                </span>

                <h3 className="text-lg font-medium text-cream mb-3 font-hn">
                  {cert.title}
                </h3>

                <p className="text-xs text-cream/70 font-light leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-cream/10 flex items-center justify-between text-xs font-mono text-cream/50">
                <span className="flex items-center gap-1.5 text-cream/70">
                  <CheckCircle size={13} className="text-[#ff6b35]" />
                  Verified Credential
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
