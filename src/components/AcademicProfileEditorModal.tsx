import React, { useState } from 'react';
import { EducationInfo } from '../types/portfolio';
import { X, Check, Save } from 'lucide-react';

interface AcademicProfileEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  educationData: EducationInfo;
  onSave: (updated: EducationInfo) => void;
  darkMode: boolean;
}

export const AcademicProfileEditorModal: React.FC<AcademicProfileEditorModalProps> = ({
  isOpen,
  onClose,
  educationData,
  onSave,
  darkMode,
}) => {
  const [formData, setFormData] = useState<EducationInfo>({ ...educationData });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
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
        aria-labelledby="edit-academic-profile-title"
        className={`relative w-full max-w-lg rounded-3xl border p-6 sm:p-8 shadow-2xl my-8 overflow-hidden z-10 ${
          darkMode
            ? 'bg-[#0c1222] border-blue-900/50 text-slate-100 shadow-blue-950/50'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
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
            <span>Student Profile Customizer</span>
            <span aria-hidden="true">·</span>
            <span>Academic Credentials</span>
          </div>
          <h3 id="edit-academic-profile-title" className="text-xl font-bold tracking-tight">
            Edit Academic & Profile Information
          </h3>
          <p className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Update your education, institution, graduation year, and current CGPA. Changes update live across the profile card, hero, and about sections.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold mb-1 text-slate-400">Institution</label>
            <input
              type="text"
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              className={`w-full px-3 py-2 rounded-xl border ${
                darkMode
                  ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
              } focus:outline-none`}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-400">Degree & Discipline</label>
            <input
              type="text"
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              className={`w-full px-3 py-2 rounded-xl border mb-2 ${
                darkMode
                  ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
              } focus:outline-none`}
            />
            <input
              type="text"
              value={formData.field}
              onChange={(e) => setFormData({ ...formData, field: e.target.value })}
              className={`w-full px-3 py-2 rounded-xl border ${
                darkMode
                  ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
              } focus:outline-none`}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-slate-400">Expected Graduation</label>
              <input
                type="text"
                placeholder="2028 (Expected)"
                value={formData.expectedGraduation}
                onChange={(e) => setFormData({ ...formData, expectedGraduation: e.target.value })}
                className={`w-full px-3 py-2 rounded-xl border ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
                } focus:outline-none`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-400">Current CGPA</label>
              <input
                type="text"
                placeholder="9.35 / 10.0"
                value={formData.cgpa}
                onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
                className={`w-full px-3 py-2 rounded-xl border font-mono ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
                } focus:outline-none`}
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-400">CGPA Verification Note</label>
            <input
              type="text"
              value={formData.cgpaNote}
              onChange={(e) => setFormData({ ...formData, cgpaNote: e.target.value })}
              className={`w-full px-3 py-2 rounded-xl border ${
                darkMode
                  ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
              } focus:outline-none`}
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className={`px-3.5 py-2 rounded-xl border transition-colors ${
                darkMode ? 'border-slate-800 text-slate-400 hover:text-white' : 'border-slate-200 text-slate-600'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-sm"
            >
              <Save className="w-3.5 h-3.5" />
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
