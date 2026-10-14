import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Code2, Mail, ArrowUp, Terminal } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenDeploymentGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  darkMode,
  onOpenDeploymentGuide,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-16 transition-colors ${
        darkMode ? 'bg-[#04070e] border-blue-950/80 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#main-content"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className={`text-lg font-bold tracking-tight block transition-colors ${
                darkMode ? 'text-white hover:text-cyan-400' : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              K. Bhanu Prakash
            </a>
            <p className="text-xs leading-relaxed max-w-sm text-slate-400">
              AI/ML Student & Full Stack Developer at GITAM University. Building intelligent, user-focused applications and practical software systems.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  darkMode ? 'border-blue-950 bg-[#0c1222]/60 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500/40' : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  darkMode ? 'border-blue-950 bg-[#0c1222]/60 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/40' : 'border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-white'
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  darkMode ? 'border-blue-950 bg-[#0c1222]/60 text-slate-400 hover:text-amber-400 hover:bg-slate-800 hover:border-amber-500/40' : 'border-slate-200 text-slate-600 hover:text-amber-600 hover:bg-white'
                }`}
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  darkMode ? 'border-blue-950 bg-[#0c1222]/60 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500/40' : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick navigation links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-semibold uppercase tracking-wider block text-slate-300">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects Showcase</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">Academic Background</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills & Domains</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications & Summits</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Get in Touch</a>
              </li>
            </ul>
          </div>

          {/* Developer Tools & Operations */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="font-semibold uppercase tracking-wider block text-slate-300">
              Developer Resources
            </span>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenDeploymentGuide}
                className="text-left text-cyan-400 hover:underline flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Deployment & Customization Guide</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
              B.Tech Computer Science and Engineering, GITAM University (Class of 2028).
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-blue-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} K. Bhanu Prakash. Built with React, TypeScript & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border transition-all duration-200 ${
              darkMode ? 'border-blue-950 bg-[#0c1222]/60 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500/40' : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
