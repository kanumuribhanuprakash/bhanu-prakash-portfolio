import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, GitBranch, Globe, FileCode, CheckCircle2 } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const gitCommands = `# 1. Initialize git and commit all changes
git init
git add .
git commit -m "feat: complete modern developer portfolio for K. Bhanu Prakash"

# 2. Add your GitHub repository remote
git remote add origin https://github.com/kanumuribhanuprakash/bhanu-portfolio.git
git branch -M main

# 3. Push to GitHub
git push -u origin main`;

  const resumeInstructions = `# Place your official PDF resume in the public directory:
# Path: /public/resume.pdf
# Once added, any visitor clicking 'Download Resume' will instantly receive your verified PDF!`;

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
        aria-labelledby="deployment-guide-title"
        className={`relative w-full max-w-3xl rounded-3xl border p-6 sm:p-8 shadow-2xl my-8 overflow-hidden z-10 ${
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

        {/* Header */}
        <div className="pr-8 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-1">
            <span>Engineering Operations Guide</span>
            <span aria-hidden="true">·</span>
            <span>Developer Handbook</span>
          </div>
          <h3 id="deployment-guide-title" className="text-2xl font-bold tracking-tight">
            Publishing, Updating & Deploying
          </h3>
          <p className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Comprehensive step-by-step instructions for K. Bhanu Prakash to customize projects, attach your resume, sync with GitHub, and deploy to production.
          </p>
        </div>

        {/* Body Steps */}
        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 text-xs">
          {/* Step 1: Updating Projects */}
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 font-bold text-sm text-blue-400">
                <FileCode className="w-4 h-4" />
                <span>1. How to Update Project Information</span>
              </div>
            </div>
            <p className={`mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              You can update any project information in two ways:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-slate-400 pl-1">
              <li>
                <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Via the Live Web Editor:</strong> Click the <em>"Edit / Update Data"</em> button in the Projects section header. Edit descriptions, toggle statuses, and click <em>"Copy Code for portfolioData.ts"</em>.
              </li>
              <li>
                <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Via Source Code:</strong> Open <code className="font-mono text-blue-400">src/data/portfolioData.ts</code> in your editor. Modify the <code className="font-mono text-blue-400">INITIAL_PROJECTS</code> array with your latest commits, repository URLs, and verified milestones.
              </li>
            </ol>
          </div>

          {/* Step 2: Uploading Resume & Updating Portrait */}
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>2. How to Attach Resume PDF & Update Profile Picture</span>
              </div>
              <button
                onClick={() => copyToClipboard(resumeInstructions, 'resume')}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedSection === 'resume' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSection === 'resume' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Save your resume as <code className="font-mono text-blue-400">resume.pdf</code> and place it inside the <code className="font-mono text-blue-400">public/</code> directory. To update your profile portrait, replace <code className="font-mono text-blue-400">public/assets/portrait.jpg</code>:
            </p>
            <pre className="p-2.5 rounded-xl bg-black/60 font-mono text-[11px] text-slate-300 overflow-x-auto">
              {resumeInstructions}
            </pre>
          </div>

          {/* Step 3: Git & GitHub Sync */}
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 font-bold text-sm text-purple-400">
                <GitBranch className="w-4 h-4" />
                <span>3. Synchronizing Code to GitHub</span>
              </div>
              <button
                onClick={() => copyToClipboard(gitCommands, 'git')}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedSection === 'git' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSection === 'git' ? 'Copied' : 'Copy Commands'}</span>
              </button>
            </div>
            <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Run these commands in your terminal to initialize and push this portfolio to your GitHub account (<code className="font-mono text-blue-400">kanumuribhanuprakash</code>):
            </p>
            <pre className="p-2.5 rounded-xl bg-black/60 font-mono text-[11px] text-slate-300 overflow-x-auto whitespace-pre">
              {gitCommands}
            </pre>
          </div>

          {/* Step 4: Public Deployment Options */}
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center gap-2 font-bold text-sm text-cyan-400 mb-2">
              <Globe className="w-4 h-4" />
              <span>4. Free 1-Click Production Deployment Options</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <p>
                <strong>Option A — Vercel / Netlify:</strong> Connect your GitHub repository to Vercel or Netlify. Set the build command to <code className="font-mono text-blue-400">npm run build</code> and publish directory to <code className="font-mono text-blue-400">dist</code>. Deploys in ~30 seconds with automatic custom domain and HTTPS.
              </p>
              <p>
                <strong>Option B — GitHub Pages:</strong> Use the standard Vite GitHub Pages action or run <code className="font-mono text-blue-400">npm run build</code> and push the <code className="font-mono text-blue-400">dist</code> folder to a <code className="font-mono text-blue-400">gh-pages</code> branch.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-blue-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-sm"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
