import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { CheckCircle2, Compass, ArrowRight } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [filterMode, setFilterMode] = useState<'all' | 'core' | 'learning'>('all');

  return (
    <section id="skills" className="py-24 lg:py-32 relative border-t border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
              <span>Technical Competencies</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span>Engineering Skills</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Structured Technical Toolkit
            </h2>
            <p className={`text-base mt-2.5 max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Organized into four academic and engineering domains. Technologies are honestly distinguished between skills actively used in codebases and tools currently being learned—without arbitrary proficiency percentages.
            </p>
          </div>

          {/* Interactive filter toggle for learning status */}
          <div
            className={`inline-flex p-1 rounded-xl border self-start md:self-end ${
              darkMode ? 'bg-[#0c1222]/90 border-blue-950/80' : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterMode === 'all'
                  ? darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-900/30'
                    : 'bg-white text-slate-900 shadow-sm'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setFilterMode('core')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterMode === 'core'
                  ? darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-900/30'
                    : 'bg-white text-slate-900 shadow-sm'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Used in Projects
            </button>
            <button
              onClick={() => setFilterMode('learning')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterMode === 'learning'
                  ? darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-900/30'
                    : 'bg-white text-slate-900 shadow-sm'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Currently Learning
            </button>
          </div>
        </div>

        {/* 4 Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, idx) => {
            return (
              <div
                key={group.title}
                className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0c1222]/70 border-blue-900/35 hover:border-cyan-500/35 hover:bg-[#0c1222]/95 hover:shadow-[0_8px_25px_rgba(6,182,212,0.1)]'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      Domain 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {group.coreSkills.length + group.learningSkills.length} Items
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold tracking-tight mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {group.title}
                  </h3>
                  <p className={`text-xs mb-6 leading-relaxed min-h-[3rem] ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {group.description}
                  </p>

                  {/* Core & Practiced Technologies */}
                  {(filterMode === 'all' || filterMode === 'core') && (
                    <div className="mb-6">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Practiced & Implemented</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs">
                        {group.coreSkills.map((skill, sIdx) => (
                          <React.Fragment key={skill}>
                            <span
                              className={`font-mono font-medium ${
                                darkMode ? 'text-slate-200' : 'text-slate-800'
                              }`}
                            >
                              {skill}
                            </span>
                            {sIdx < group.coreSkills.length - 1 && (
                              <span className="text-slate-600" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Currently Learning Technologies */}
                  {(filterMode === 'all' || filterMode === 'learning') && (
                    <div className="pt-4 border-t border-blue-950/70">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Currently Learning</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs">
                        {group.learningSkills.map((skill, sIdx) => (
                          <React.Fragment key={skill}>
                            <span
                              className={`font-mono italic ${
                                darkMode ? 'text-cyan-300/80' : 'text-slate-600'
                              }`}
                            >
                              {skill}
                            </span>
                            {sIdx < group.learningSkills.length - 1 && (
                              <span className="text-slate-600" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-blue-950/60 text-[11px] text-slate-500 font-mono">
                  Applied across projects & coursework
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Transparency Policy */}
        <div
          className={`mt-12 p-5 rounded-2xl border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            darkMode ? 'bg-[#0c1222]/50 border-blue-950/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">Engineering Transparency:</span>
            <span>Skills are supported by real project repositories and coursework, without arbitrary percentages.</span>
          </div>
          <a
            href="#projects"
            className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 whitespace-nowrap"
          >
            <span>Explore AI & Full-Stack Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
