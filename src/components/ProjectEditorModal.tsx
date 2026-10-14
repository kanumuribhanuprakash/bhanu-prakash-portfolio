import React, { useState } from 'react';
import { ProjectItem, ProjectStatus } from '../types/portfolio';
import { X, Check, Copy, RefreshCw } from 'lucide-react';

interface ProjectEditorModalProps {
  projects: ProjectItem[];
  onSave: (updatedProjects: ProjectItem[]) => void;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectEditorModal: React.FC<ProjectEditorModalProps> = ({
  projects,
  onSave,
  onClose,
  darkMode,
}) => {
  const [selectedId, setSelectedId] = useState<string>(projects[0]?.id || '');
  const [localProjects, setLocalProjects] = useState<ProjectItem[]>(JSON.parse(JSON.stringify(projects)));
  const [copiedCode, setCopiedCode] = useState(false);

  const currentProject = localProjects.find((p) => p.id === selectedId) || localProjects[0];

  const handleFieldChange = (field: keyof ProjectItem, value: any) => {
    setLocalProjects((prev) =>
      prev.map((p) => (p.id === selectedId ? { ...p, [field]: value } : p))
    );
  };

  const handleSaveAndApply = () => {
    onSave(localProjects);
    onClose();
  };

  const handleCopyTSConfig = () => {
    const codeString = `export const INITIAL_PROJECTS: ProjectItem[] = ${JSON.stringify(
      localProjects,
      null,
      2
    )};`;
    navigator.clipboard.writeText(codeString);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-3xl rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all my-8 overflow-hidden z-10 ${
          darkMode
            ? 'bg-[#0c1222] border-blue-900/50 text-slate-100 shadow-blue-950/50'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close editor"
          className={`absolute top-5 right-5 p-2 rounded-lg border transition-colors ${
            darkMode
              ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="pr-8 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-1">
            <span>Live Project Editor</span>
            <span aria-hidden="true">·</span>
            <span>Update Descriptions & Repository URLs</span>
          </div>
          <h3 className="text-xl font-bold">Edit Project Information</h3>
          <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Modify any project title, status, problem statement, solution, or repository URL. Changes update the live UI immediately and can be exported back into <code className="font-mono text-blue-400">src/data/portfolioData.ts</code>.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-5 border-b border-slate-800">
          {localProjects.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedId === p.id
                  ? 'bg-blue-600 text-white'
                  : darkMode
                  ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {p.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        {/* Edit Form */}
        {currentProject && (
          <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-2 text-xs">
            <div>
              <label className="block font-semibold mb-1 text-slate-400">Project Title</label>
              <input
                type="text"
                value={currentProject.title}
                onChange={(e) => handleFieldChange('title', e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-xs ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
                } focus:outline-none`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-slate-400">Development Status</label>
                <select
                  value={currentProject.status}
                  onChange={(e) => handleFieldChange('status', e.target.value as ProjectStatus)}
                  className={`w-full px-3 py-2 rounded-lg border text-xs ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-slate-100'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  } focus:outline-none`}
                >
                  <option value="In Development">In Development</option>
                  <option value="Prototype">Prototype</option>
                  <option value="Completed">Completed</option>
                  <option value="Awaiting Verification">Awaiting Verification</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-400">GitHub Repository URL</label>
                <input
                  type="text"
                  placeholder="https://github.com/kanumuribhanuprakash/..."
                  value={currentProject.githubUrl || ''}
                  onChange={(e) => handleFieldChange('githubUrl', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border text-xs ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-slate-100'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  } focus:outline-none`}
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-400">Tagline / Short Hook</label>
              <input
                type="text"
                value={currentProject.tagline}
                onChange={(e) => handleFieldChange('tagline', e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-xs ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-100'
                    : 'bg-slate-50 border-slate-300 text-slate-900'
                } focus:outline-none`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-400">Problem Statement</label>
              <textarea
                rows={2}
                value={currentProject.problemStatement}
                onChange={(e) => handleFieldChange('problemStatement', e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-xs ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-100'
                    : 'bg-slate-50 border-slate-300 text-slate-900'
                } focus:outline-none`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-400">Solution & Technical Approach</label>
              <textarea
                rows={2}
                value={currentProject.solution}
                onChange={(e) => handleFieldChange('solution', e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-xs ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-100'
                    : 'bg-slate-50 border-slate-300 text-slate-900'
                } focus:outline-none`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-400">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={currentProject.technologies.join(', ')}
                onChange={(e) =>
                  handleFieldChange(
                    'technologies',
                    e.target.value.split(',').map((t) => t.trim()).filter(Boolean)
                  )
                }
                className={`w-full px-3 py-2 rounded-lg border text-xs ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-100'
                    : 'bg-slate-50 border-slate-300 text-slate-900'
                } focus:outline-none`}
              />
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyTSConfig}
            className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors ${
              darkMode ? 'border-slate-800 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedCode ? 'Copied Code!' : 'Copy Code for portfolioData.ts'}
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors ${
                darkMode ? 'border-slate-800 text-slate-400 hover:text-slate-200' : 'border-slate-200 text-slate-600'
              }`}
            >
              Cancel
            </button>
            <button
              onClick={handleSaveAndApply}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm"
            >
              Apply Updates to Live View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
