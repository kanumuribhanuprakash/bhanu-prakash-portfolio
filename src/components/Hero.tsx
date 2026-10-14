import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { EducationInfo } from '../types/portfolio';
import { ArrowDown, Github, Linkedin, Code2, Mail, ExternalLink, Edit2, Sparkles } from 'lucide-react';
import headshotImage from '../../Confident Young Professional Headshot-1.png';

interface HeroProps {
  darkMode: boolean;
  educationData: EducationInfo;
  onOpenAcademicEditor: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  darkMode,
  educationData,
  onOpenAcademicEditor,
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle ambient animated gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] pointer-events-none opacity-50 blur-3xl animate-subtle-glow"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(37, 99, 235, 0.22) 0%, rgba(6, 182, 212, 0.12) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(6, 182, 212, 0.06) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split screen hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy with Gentle Entrance Animation */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up">
            {/* Academic Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-4">
              <span>{educationData.institution}</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span>Computer Science & Engineering</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="font-mono">2024–2028</span>
            </div>

            {/* Name */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
              style={{ textWrap: 'balance' }}
            >
              K. Bhanu Prakash
            </h1>

            {/* Headline with Electric Blue & Cyan Accents */}
            <p
              className={`text-lg sm:text-xl font-medium tracking-normal mb-6 flex flex-wrap items-center gap-2 ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}
            >
              <span className="text-blue-400 font-semibold">AI/ML Student</span>
              <span className="text-slate-600 opacity-60" aria-hidden="true">/</span>
              <span className="text-cyan-400 font-semibold">Full Stack Developer</span>
              <span className="text-slate-600 opacity-60" aria-hidden="true">/</span>
              <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Intelligent Applications</span>
            </p>

            {/* Introduction prose */}
            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
                darkMode ? 'text-slate-300/90' : 'text-slate-600'
              }`}
            >
              I am a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, and Full Stack Development. I enjoy building intelligent, user-focused applications that combine AI capabilities with practical software engineering. Through hands-on projects, I am continuously strengthening my skills in machine learning, web technologies, and problem-solving.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-xl border transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap ${
                  darkMode
                    ? 'border-blue-900/40 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:border-cyan-500/40 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-sm'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-5 text-sm pt-4 border-t border-blue-950/60">
              <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Verified Profiles:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${
                    darkMode
                      ? 'border-blue-900/40 bg-slate-900/40 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${
                    darkMode
                      ? 'border-blue-900/40 bg-slate-900/40 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${
                    darkMode
                      ? 'border-blue-900/40 bg-slate-900/40 text-slate-300 hover:text-amber-400 hover:bg-slate-800 hover:border-amber-500/40 hover:shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-amber-600 hover:bg-slate-50'
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Send direct email"
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${
                    darkMode
                      ? 'border-blue-900/40 bg-slate-900/40 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Profile Frame with Subtle Floating Animation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up delay-200">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative border card with subtle electric glow */}
              <div
                className={`relative rounded-3xl p-3 sm:p-4 border shadow-2xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0c1222]/80 border-blue-900/40 shadow-blue-950/40 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                    : 'bg-white border-slate-200 shadow-slate-300/40'
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#060a14] border border-blue-950/60 group">
                  <img
                    src={headshotImage}
                    alt="K. Bhanu Prakash - AI/ML Student & Full Stack Developer"
                    className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-[1.03] transition-transform duration-700"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('Confident')) {
                        target.src = '/assets/Confident Young Professional Headshot-1.png';
                      }
                    }}
                  />
                  {/* Subtle dark gradient scrim at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060a14]/90 via-transparent to-transparent pointer-events-none rounded-2xl" />

                  {/* On-image caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-end justify-between">
                    <div>
                      <p className="font-bold text-sm tracking-tight">K. Bhanu Prakash</p>
                      <p className="text-slate-300 text-[11px] mt-0.5">{educationData.field} · {educationData.institution}</p>
                    </div>
                    {/* Quick Edit button for education, CGPA, graduation */}
                    <button
                      onClick={onOpenAcademicEditor}
                      title="Edit academic credentials & CGPA"
                      className="p-1.5 rounded-lg bg-black/60 hover:bg-cyan-600 text-slate-200 hover:text-white transition-colors border border-white/20"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="mt-3.5 px-2 py-2 flex items-center justify-between text-xs">
                  <div className="flex flex-col">
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Current CGPA</span>
                    <span className={`font-mono font-semibold text-sm ${darkMode ? 'text-cyan-400' : 'text-slate-900'}`}>
                      {educationData.cgpa}
                    </span>
                  </div>
                  <div className="h-6 w-px bg-blue-950/80" />
                  <div className="flex flex-col">
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Graduation</span>
                    <span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {educationData.expectedGraduation}
                    </span>
                  </div>
                  <div className="h-6 w-px bg-blue-950/80" />
                  <div className="flex flex-col">
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Primary Focus</span>
                    <span className="font-semibold text-sm text-blue-400">AI/ML & Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width editorial metrics row below hero split */}
        <div
          className={`mt-16 pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-6 text-left ${
            darkMode ? 'border-blue-950/60 text-slate-400' : 'border-slate-200 text-slate-600'
          }`}
        >
          <div>
            <span className="block text-xs uppercase tracking-wider text-slate-500">Institution</span>
            <span className={`text-base font-semibold mt-0.5 block ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
              {educationData.institution}
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-wider text-slate-500">Academic Standing</span>
            <span className={`text-base font-semibold mt-0.5 block font-mono ${darkMode ? 'text-cyan-400' : 'text-slate-900'}`}>
              {educationData.cgpa}*
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-wider text-slate-500">Engineering Focus</span>
            <span className={`text-base font-semibold mt-0.5 block ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
              AI/ML · Full Stack Development
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-wider text-slate-500">Projects Showcase</span>
            <span className={`text-base font-semibold mt-0.5 block ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
              Featured Initiatives
            </span>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 mt-2 italic">
          * {educationData.cgpaNote}.
        </p>
      </div>
    </section>
  );
};
