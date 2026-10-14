import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ProjectEditorModal } from './ProjectEditorModal';
import {
  ExternalLink,
  Github,
  Search,
  CheckCircle2,
  Clock,
  Edit3,
  Sparkles,
  Eye,
  Layers,
} from 'lucide-react';
import topologyImage from '../assets/images/showcase_network_topology_1791784684546.jpg';

interface ProjectsProps {
  darkMode: boolean;
  projects: ProjectItem[];
  onUpdateProjects: (updated: ProjectItem[]) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode, projects, onUpdateProjects }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  const statuses: string[] = ['All', 'In Development', 'Completed', 'Prototype', 'Awaiting Verification'];

  // Ensure priority ordering for spotlighted projects
  const orderedProjects = [...projects].sort((a, b) => {
    const priorityOrder = [
      'netsentinel',
      'localiq',
      'pocket-health',
      'lecture-tracking-system',
      'student-record-management',
      'ads-lab',
      'traffic-fine-management',
      'ghostcustomer',
    ];
    const aIdx = priorityOrder.indexOf(a.id);
    const bIdx = priorityOrder.indexOf(b.id);
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return 0;
  });

  const filteredProjects = orderedProjects.filter((project) => {
    const matchesStatus =
      selectedStatus === 'All' ? true : project.status === selectedStatus;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      (project.category && project.category.toLowerCase().includes(q)) ||
      project.problemStatement.toLowerCase().includes(q) ||
      project.solution.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q));

    return matchesStatus && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 lg:py-32 relative border-t border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
              <span>Engineering Initiatives</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span>Selected Works</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Intelligent Applications & Full-Stack Systems
            </h2>
            <p className={`text-base mt-2.5 max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Practical engineering projects demonstrating AI/ML architectures and full-stack software development. Each project transparently distinguishes implemented architecture from in-progress AI features.
            </p>
          </div>

          {/* Quick Action: Edit / Update details */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsEditorOpen(true)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl border transition-all duration-200 ${
                darkMode
                  ? 'border-blue-900/40 bg-[#0c1222]/80 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/40 hover:text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
              }`}
              title="Edit project descriptions and repository links"
            >
              <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Update Data</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Segmented status filter tabs */}
          <div
            className={`inline-flex p-1 rounded-xl border overflow-x-auto ${
              darkMode ? 'bg-[#0c1222]/90 border-blue-950/80' : 'bg-slate-100 border-slate-200'
            }`}
          >
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedStatus === status
                    ? darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-900/30'
                      : 'bg-white text-slate-900 shadow-sm'
                    : darkMode
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search AI, algorithms, full-stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 text-xs rounded-xl border transition-all ${
                darkMode
                  ? 'bg-[#0c1222]/80 border-blue-950/80 text-slate-200 placeholder-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-600 shadow-sm'
              } focus:outline-none`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeaturedHeroCard = project.id === 'netsentinel';
            const colSpan = isFeaturedHeroCard ? 'lg:col-span-12' : 'lg:col-span-6';

            return (
              <article
                key={project.id}
                className={`${colSpan} group rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  darkMode
                    ? 'bg-[#0c1222]/70 border-blue-900/35 hover:border-cyan-500/40 hover:bg-[#0c1222]/95 hover:shadow-[0_8px_30px_rgb(0,0,0,0.35),0_0_25px_rgba(6,182,212,0.12)]'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }`}
                style={{
                  transitionDelay: `${Math.min(index * 50, 300)}ms`,
                }}
              >
                {/* Featured Bento Layout for NetSentinel */}
                {isFeaturedHeroCard ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch h-full">
                    {/* Visual Topology Architecture */}
                    <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-[#060a14] overflow-hidden">
                      <img
                        src={topologyImage}
                        alt="NetSentinel Digital Twin Topology Graph Visualization"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060a14]/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0c1222]/95 pointer-events-none" />
                      <div className="absolute top-4 left-4 text-xs font-mono text-cyan-300 bg-[#060a14]/90 px-3 py-1 rounded-lg border border-cyan-500/30 shadow-md">
                        Graph Topology · BFS Shortest Paths
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        {/* Status & Unboxed Category */}
                        <div className="flex items-center gap-2 text-xs font-medium mb-3">
                          <span className="text-cyan-400 font-semibold uppercase tracking-wider">
                            {project.status}
                          </span>
                          <span className="text-slate-500" aria-hidden="true">·</span>
                          <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>
                            Network Systems & Algorithmic Routing
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-2xl font-bold tracking-tight mb-2.5 ${
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {project.title}
                        </h3>

                        {/* Problem Statement */}
                        <div className="mb-3.5">
                          <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                            Problem Statement
                          </span>
                          <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            {project.problemStatement}
                          </p>
                        </div>

                        {/* Solution & Architecture */}
                        <div className="mb-4">
                          <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                            Software Architecture & Solution
                          </span>
                          <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            {project.solution}
                          </p>
                        </div>

                        {/* Implemented Architecture vs Planned AI */}
                        <div
                          className={`p-3.5 rounded-2xl border text-xs mb-6 ${
                            darkMode ? 'bg-[#060a14]/80 border-blue-950/80' : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-semibold text-emerald-400 mb-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Implemented Architecture:</span>
                          </div>
                          <p className={`mb-2 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            Node and link representations, network topology graph, and BFS shortest-path algorithms with automated test coverage.
                          </p>
                          <div className="flex items-center gap-1.5 text-cyan-400 font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Planned AI Component: Pattern classification & ML anomaly detection engine (in active development).</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div>
                        {/* Technologies */}
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs mb-6 font-mono">
                          {project.technologies.map((tech, i) => (
                            <React.Fragment key={tech}>
                              <span className={darkMode ? 'text-cyan-300/90' : 'text-slate-700'}>{tech}</span>
                              {i < project.technologies.length - 1 && (
                                <span className="text-slate-600" aria-hidden="true">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-blue-950/70">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-200 shadow-sm"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>View GitHub</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl border transition-all duration-200 ${
                              darkMode
                                ? 'border-blue-900/40 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-cyan-500/40'
                                : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect Architecture & AI Scope</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard 2-column Grid Cards for remaining projects */
                  <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Status & Category */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 text-xs font-medium">
                          <span
                            className={`font-semibold uppercase tracking-wider ${
                              project.status === 'Completed'
                                ? 'text-emerald-400'
                                : project.status === 'In Development'
                                ? 'text-cyan-400'
                                : project.status === 'Prototype'
                                ? 'text-purple-400'
                                : 'text-amber-400'
                            }`}
                          >
                            {project.status}
                          </span>
                          {project.category && (
                            <>
                              <span className="text-slate-500" aria-hidden="true">·</span>
                              <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>
                                {project.category}
                              </span>
                            </>
                          )}
                        </div>
                        {project.isFeatured && (
                          <span className="text-[11px] text-cyan-400 font-medium flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold tracking-tight mb-2.5 ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {project.title}
                      </h3>

                      {/* Problem Statement */}
                      <div className="mb-3.5">
                        <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                          Problem Statement
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {project.problemStatement}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="mb-4">
                        <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                          Software Architecture & Solution
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {project.solution}
                        </p>
                      </div>

                      {/* Scope & Honest AI Status */}
                      {project.disclaimer && (
                        <div
                          className={`p-3 rounded-2xl border text-[11px] mb-4 ${
                            project.status === 'Awaiting Verification'
                              ? darkMode
                                ? 'bg-amber-950/20 border-amber-800/40 text-amber-300/90'
                                : 'bg-amber-50 border-amber-200 text-amber-800'
                              : darkMode
                              ? 'bg-[#060a14]/60 border-blue-950/80 text-slate-300'
                              : 'bg-slate-50 border-slate-200 text-slate-600'
                          }`}
                        >
                          <p className="leading-relaxed">{project.disclaimer}</p>
                        </div>
                      )}
                    </div>

                    {/* Bottom area */}
                    <div className="pt-4 border-t border-blue-950/70">
                      {/* Technologies */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs mb-4 font-mono">
                        {project.technologies.map((tech, i) => (
                          <React.Fragment key={tech}>
                            <span className={darkMode ? 'text-cyan-300/90' : 'text-slate-700'}>{tech}</span>
                            {i < project.technologies.length - 1 && (
                              <span className="text-slate-600" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl border border-blue-900/50 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-cyan-500/40 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Repository</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            Repo Pending Confirmation
                          </span>
                        )}

                        <button
                          onClick={() => setActiveModalProject(project)}
                          className={`text-xs font-medium underline underline-offset-4 transition-colors ${
                            darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                          }`}
                        >
                          View Details & AI Scope
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div
            className={`text-center py-16 rounded-3xl border ${
              darkMode ? 'border-blue-950/80 bg-[#0c1222]/40 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-600'
            }`}
          >
            <p className="text-sm">No projects matched your search criteria.</p>
            <button
              onClick={() => {
                setSelectedStatus('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        darkMode={darkMode}
      />

      {/* Project Editor Modal */}
      {isEditorOpen && (
        <ProjectEditorModal
          projects={projects}
          onSave={onUpdateProjects}
          onClose={() => setIsEditorOpen(false)}
          darkMode={darkMode}
        />
      )}
    </section>
  );
};
