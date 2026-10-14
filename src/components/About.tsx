import React from 'react';
import { EducationInfo } from '../types/portfolio';
import { GraduationCap, Terminal, Sparkles, Cpu, Network, Layers, Edit2 } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
  educationData: EducationInfo;
  onOpenAcademicEditor: () => void;
}

export const About: React.FC<AboutProps> = ({ darkMode, educationData, onOpenAcademicEditor }) => {
  const learningPillars = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description:
        'Actively learning core machine learning concepts, statistical algorithms, local vector embeddings, and retrieval-augmented generation (RAG) through project-based experimentation.',
      icon: Cpu,
    },
    {
      title: 'Full Stack Web Development',
      description:
        'Building modern web interfaces and backend services using React, TypeScript, and Node.js. Focused on clean component architecture, responsive design, and intuitive user experiences.',
      icon: Terminal,
    },
    {
      title: 'AI-Powered Application Development',
      description:
        'Bridging machine learning models with practical applications—building systems like LOCALIQ for private offline document querying and Pocket Health for healthcare workflows.',
      icon: Sparkles,
    },
    {
      title: 'Data Structures & Algorithms (DSA)',
      description:
        'Strengthening foundational problem-solving through graph traversals, shortest path searches (BFS), recursion, and algorithmic complexity analysis in C, Java, and Python.',
      icon: Network,
    },
    {
      title: 'Software Engineering & Problem-Solving',
      description:
        'Approaching code with systematic debugging, modular design patterns, unit testing, and version control—continuously building practical software as an undergraduate learner.',
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative border-t border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            <span>Academic Focus & Growth</span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span>About Me</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Student Journey & Engineering Path
          </h2>
          <p className={`text-base mt-2.5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            As an undergraduate Computer Science student at GITAM University, I focus on hands-on project building. Rather than presenting myself as an experienced industry professional, I take pride in being an active learner continuously expanding my technical capabilities.
          </p>
        </div>

        {/* 2-Column Split: Education Profile + Learning Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education & Academic Credentials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card with Dark Navy Frame */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-[#0c1222]/80 border-blue-900/40 shadow-xl shadow-black/30 hover:border-cyan-500/30'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/15 text-cyan-400 border border-blue-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {educationData.institution}
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold">{educationData.degree}</p>
                  </div>
                </div>

                <button
                  onClick={onOpenAcademicEditor}
                  title="Edit education details"
                  className={`p-2 rounded-xl border text-xs transition-colors shrink-0 ${
                    darkMode
                      ? 'border-blue-900/40 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500/40'
                      : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="block uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Field of Study
                  </span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {educationData.field}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-blue-950/70">
                  <div>
                    <span className="block uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Expected Graduation
                    </span>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                      {educationData.expectedGraduation}
                    </span>
                  </div>

                  <div>
                    <span className="block uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Current CGPA
                    </span>
                    <span className="text-sm font-mono font-bold text-cyan-400">
                      {educationData.cgpa}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 italic pt-1">
                  *{educationData.cgpaNote}.
                </p>

                <div className="pt-3 border-t border-blue-950/70">
                  <span className="block uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                    Primary Academic Focus Areas
                  </span>
                  <ul className="space-y-2 text-xs">
                    {educationData.focusAreas.map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Student Philosophy Card */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border ${
                darkMode ? 'bg-[#0c1222]/50 border-blue-950/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <h4 className={`text-sm font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Learning by Building Systems</span>
              </h4>
              <p className="text-xs leading-relaxed text-slate-400">
                I believe engineering competence comes from writing code, testing edge cases, and constructing functioning architectures. Whether experimenting with offline retrieval algorithms or designing network simulation graphs, I continuously apply coursework concepts to concrete codebases.
              </p>
            </div>
          </div>

          {/* Right Column: Emphasized Learning Interests */}
          <div className="lg:col-span-7">
            <h3
              className={`text-lg font-bold tracking-tight mb-5 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Key Areas of Learning & Exploration
            </h3>

            <div className="space-y-4">
              {learningPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`p-5 rounded-2xl border transition-all duration-200 ${
                      darkMode
                        ? 'bg-[#0c1222]/70 border-blue-900/35 hover:bg-[#0c1222]/95 hover:border-cyan-500/35 hover:shadow-[0_4px_20px_rgba(6,182,212,0.08)]'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-blue-600/15 text-cyan-400 shrink-0 mt-0.5 border border-blue-500/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {pillar.title}
                        </h4>
                        <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300/90' : 'text-slate-600'}`}>
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
