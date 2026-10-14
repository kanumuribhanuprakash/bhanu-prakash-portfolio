import React, { useState } from 'react';
import { CERTIFICATIONS_AND_ACTIVITIES } from '../data/portfolioData';
import { CertificationActivity } from '../types/portfolio';
import { CheckCircle2, Edit2, Info, X } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const [activities, setActivities] = useState<CertificationActivity[]>(CERTIFICATIONS_AND_ACTIVITIES);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<CertificationActivity | null>(null);

  const startEditing = (activity: CertificationActivity) => {
    setEditingId(activity.id);
    setEditForm({ ...activity });
  };

  const handleSaveEdit = () => {
    if (editForm) {
      setActivities((prev) => prev.map((a) => (a.id === editForm.id ? editForm : a)));
      setEditingId(null);
      setEditForm(null);
    }
  };

  return (
    <section id="certifications" className="py-24 lg:py-32 relative border-t border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            <span>Verified Engagement</span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span>Certifications & Activities</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Programs, Hackathons & Summits
          </h2>
          <p className={`text-base mt-2.5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Verified records of extracurricular engineering programs, developer sprints, and leadership initiatives. Entry details can be updated as credentials and badges are published.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => {
            return (
              <div
                key={activity.id}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative ${
                  darkMode
                    ? 'bg-[#0c1222]/70 border-blue-900/35 hover:border-cyan-500/35 hover:bg-[#0c1222]/95 hover:shadow-[0_8px_25px_rgba(6,182,212,0.1)]'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                      {activity.organization}
                    </span>
                    <h3
                      className={`text-lg font-bold tracking-tight ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {activity.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => startEditing(activity)}
                    aria-label={`Edit ${activity.title} entry`}
                    className={`p-2 rounded-xl border text-xs transition-colors shrink-0 ${
                      darkMode
                        ? 'border-blue-900/40 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500/40'
                        : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    title="Edit record details"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Scope details */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {activity.description}
                </p>

                {/* Footer metadata unboxed */}
                <div className="pt-4 border-t border-blue-950/70 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{activity.verifiedStatus}</span>
                  </div>

                  {activity.dateOrYear && (
                    <span className={darkMode ? 'text-slate-400 font-mono text-[11px]' : 'text-slate-500 font-mono text-[11px]'}>
                      {activity.dateOrYear}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Policy Notice */}
        <div
          className={`mt-12 p-5 rounded-2xl border text-xs flex items-center gap-3.5 ${
            darkMode ? 'bg-[#0c1222]/50 border-blue-950/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}
        >
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            Strict integrity policy: No certificate IDs, awards, or rankings are assumed. Records reflect confirmed student participation and are kept verifiable before final distribution.
          </span>
        </div>
      </div>

      {/* Quick Edit Modal if editing */}
      {editingId && editForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className={`w-full max-w-lg rounded-3xl border p-6 sm:p-7 shadow-2xl ${
              darkMode ? 'bg-[#0c1222] border-blue-900/60 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-base font-bold">Edit Activity Entry</h4>
              <button
                onClick={() => setEditingId(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">Title</label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-blue-950 bg-[#060a14] text-slate-100 focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Organization</label>
                <input
                  type="text"
                  value={editForm.organization}
                  onChange={(e) => setEditForm({ ...editForm, organization: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-blue-950 bg-[#060a14] text-slate-100 focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Verification Status</label>
                <input
                  type="text"
                  value={editForm.verifiedStatus}
                  onChange={(e) => setEditForm({ ...editForm, verifiedStatus: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-blue-950 bg-[#060a14] text-slate-100 focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Description / Participation Scope</label>
                <textarea
                  rows={3}
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-blue-950 bg-[#060a14] text-slate-100 focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Date / Year</label>
                <input
                  type="text"
                  value={editForm.dateOrYear || ''}
                  onChange={(e) => setEditForm({ ...editForm, dateOrYear: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-blue-950 bg-[#060a14] text-slate-100 focus:outline-none focus:border-cyan-500/60"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 text-xs">
              <button
                onClick={() => setEditingId(null)}
                className="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-500 hover:to-cyan-500 shadow-md transition-all"
              >
                Save Updates
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
