import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-cream/10 bg-[#141414] text-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cream/50 mb-3">
              <span>05</span>
              <span>/</span>
              <span>INITIATE CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight font-hn text-cream">
              Let’s Connect & Collaborate
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            Actively open to Data Analyst, AI-ML engineering, and digital design opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium font-hn text-cream mb-4">
                Direct Contact Channels
              </h3>

              {/* Email Card */}
              <div className="bg-[#1a1a1a] border border-cream/10 rounded-xl p-5 flex items-center justify-between gap-3 group hover:border-cream/25 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#242424] flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#38bdf8]" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono uppercase text-cream/50 block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-cream hover:text-white truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2.5 rounded-lg bg-[#242424] hover:bg-[#2e2e2e] text-cream/70 hover:text-cream border border-cream/10 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check size={15} className="text-emerald-400" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-[#1a1a1a] border border-cream/10 rounded-xl p-5 flex items-center justify-between gap-3 group hover:border-cream/25 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#242424] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#38bdf8]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-cream/50 block">Phone / Mobile</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-medium text-cream hover:text-white block font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-lg bg-[#242424] hover:bg-[#2e2e2e] text-cream/70 hover:text-cream border border-cream/10 transition-colors shrink-0 cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <Check size={15} className="text-emerald-400" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="bg-[#1a1a1a] border border-cream/10 rounded-xl p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#242424] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#38bdf8]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-cream/50 block">Location Base</span>
                  <span className="text-sm font-medium text-cream block">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-cream/10">
              <span className="text-xs font-mono uppercase tracking-widest text-cream/50 block mb-4">
                Verified Social Profiles
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1e1e1e] hover:bg-[#262626] border border-cream/10 text-xs font-mono text-cream transition-colors group"
                >
                  <Linkedin size={15} className="text-[#38bdf8]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} className="text-cream/40 group-hover:text-cream transition-colors" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1e1e1e] hover:bg-[#262626] border border-cream/10 text-xs font-mono text-cream transition-colors group"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} className="text-cream/40 group-hover:text-cream transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-[#181818]/90 border border-cream/10 rounded-2xl p-7 sm:p-9">
            <h3 className="text-xl font-medium font-hn text-cream mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-cream/60 font-light mb-6">
              Have an open role, inquiry, or potential project? Send a note directly to Varsha.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-6 text-center anim-fade-up">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check size={22} />
                </div>
                <h4 className="text-base font-medium text-cream mb-1">Message Dispatched!</h4>
                <p className="text-xs text-cream/70 font-light">
                  Thank you for reaching out. Varsha will review your note and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-cream/60 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#121212] border border-cream/15 focus:border-cream/50 rounded-xl px-4 py-2.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-cream/60 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-[#121212] border border-cream/15 focus:border-cream/50 rounded-xl px-4 py-2.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase text-cream/60 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Data Analyst Opportunity / Project Collaboration"
                    className="w-full bg-[#121212] border border-cream/15 focus:border-cream/50 rounded-xl px-4 py-2.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-cream/60 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-[#121212] border border-cream/15 focus:border-cream/50 rounded-xl px-4 py-2.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cream hover:bg-white text-black font-medium text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
