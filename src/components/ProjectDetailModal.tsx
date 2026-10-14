import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, ExternalLink, Github, CheckCircle2, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all my-8 overflow-hidden z-10 ${
          darkMode
            ? 'bg-[#0c1222] border-blue-900/50 text-slate-100 shadow-blue-950/50'
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-300'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className={`absolute top-5 right-5 p-2 rounded-xl border transition-colors ${
            darkMode
              ? 'border-blue-950 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500/40'
              : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2">
            <span
              className={
                project.status === 'Completed'
                  ? 'text-emerald-400'
                  : project.status === 'In Development'
                  ? 'text-cyan-400'
                  : project.status === 'Prototype'
                  ? 'text-purple-400'
                  : 'text-amber-400'
              }
            >
              {project.status}
            </span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="text-slate-400">Technical Scope Report</span>
          </div>

          <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
            {project.title}
          </h3>
          <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {project.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-1">
          {/* Problem Statement */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Problem Statement
            </h4>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
              {project.problemStatement}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Engineering Solution
            </h4>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
              {project.solution}
            </p>
          </div>

          {/* Completed vs In-Progress Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Completed */}
            <div
              className={`p-4 rounded-2xl border ${
                darkMode ? 'bg-[#060a14]/80 border-blue-950/80' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Milestones</span>
              </div>
              <ul className="space-y-2 text-xs">
                {project.completedScope.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In Progress */}
            <div
              className={`p-4 rounded-2xl border ${
                darkMode ? 'bg-[#060a14]/80 border-blue-950/80' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Active Development</span>
              </div>
              <ul className="space-y-2 text-xs">
                {project.inProgressScope.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-cyan-400 shrink-0 mt-0.5">⋯</span>
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className={darkMode ? 'text-cyan-300/90 font-mono' : 'text-slate-700 font-mono'}>
                    {tech}
                  </span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Disclaimer if present */}
          {project.disclaimer && (
            <div
              className={`p-3.5 rounded-2xl border flex items-start gap-3 text-xs ${
                darkMode
                  ? 'bg-amber-950/20 border-amber-800/40 text-amber-200/90'
                  : 'bg-amber-50 border-amber-200 text-amber-800'
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{project.disclaimer}</p>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-5 border-t border-blue-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Repository status verified by engineering log.
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border border-blue-950 text-slate-400 bg-slate-900/40">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Repository Release Pending
              </span>
            )}
            <button
              onClick={onClose}
              className={`px-4 py-2 text-xs font-medium rounded-xl border transition-colors ${
                darkMode
                  ? 'border-blue-950 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
