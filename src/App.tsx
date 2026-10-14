/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';
import { AcademicProfileEditorModal } from './components/AcademicProfileEditorModal';
import { INITIAL_PROJECTS, EDUCATION_DATA } from './data/portfolioData';
import { ProjectItem, EducationInfo } from './types/portfolio';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme_preference');
      if (stored) return stored === 'dark';
      return true;
    }
    return true;
  });

  const [educationData, setEducationData] = useState<EducationInfo>(() => {
    if (typeof window !== 'undefined') {
      const savedEdu = localStorage.getItem('bhanu_education_data');
      if (savedEdu) {
        try {
          return JSON.parse(savedEdu);
        } catch {
          return EDUCATION_DATA;
        }
      }
    }
    return EDUCATION_DATA;
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedProjects = localStorage.getItem('bhanu_portfolio_projects_v4');
      if (savedProjects) {
        try {
          return JSON.parse(savedProjects);
        } catch {
          return INITIAL_PROJECTS;
        }
      }
      // Merge legacy cache to ensure newly added academic projects & fixed LOCALIQ-1 are included
      const legacyProjects = localStorage.getItem('bhanu_portfolio_projects');
      if (legacyProjects) {
        try {
          const parsed: ProjectItem[] = JSON.parse(legacyProjects);
          const projectMap = new Map<string, ProjectItem>(parsed.map((p) => [p.id, p]));
          const merged = INITIAL_PROJECTS.map((initProj) => {
            const existing = projectMap.get(initProj.id);
            if (!existing) return initProj;
            return {
              ...initProj,
              ...existing,
              githubUrl: initProj.githubUrl || existing.githubUrl,
              githubUrlPending: initProj.githubUrlPending ?? false,
            };
          });
          localStorage.setItem('bhanu_portfolio_projects_v4', JSON.stringify(merged));
          return merged;
        } catch {
          return INITIAL_PROJECTS;
        }
      }
    }
    return INITIAL_PROJECTS;
  });

  const [isDeploymentGuideOpen, setIsDeploymentGuideOpen] = useState(false);
  const [isAcademicEditorOpen, setIsAcademicEditorOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-slate-50', 'text-slate-900');
      document.body.classList.add('bg-slate-950', 'text-slate-100');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-slate-950', 'text-slate-100');
      document.body.classList.add('bg-slate-50', 'text-slate-900');
    }
    localStorage.setItem('theme_preference', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleUpdateProjects = (updated: ProjectItem[]) => {
    setProjects(updated);
    localStorage.setItem('bhanu_portfolio_projects_v4', JSON.stringify(updated));
  };

  const handleUpdateEducation = (updated: EducationInfo) => {
    setEducationData(updated);
    localStorage.setItem('bhanu_education_data', JSON.stringify(updated));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-200 ${
        darkMode ? 'bg-[#060a14] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          darkMode={darkMode}
          educationData={educationData}
          onOpenAcademicEditor={() => setIsAcademicEditorOpen(true)}
        />

        {/* Projects Showcase */}
        <Projects
          darkMode={darkMode}
          projects={projects}
          onUpdateProjects={handleUpdateProjects}
        />

        {/* About & Education */}
        <About
          darkMode={darkMode}
          educationData={educationData}
          onOpenAcademicEditor={() => setIsAcademicEditorOpen(true)}
        />

        {/* Technical Skills */}
        <Skills darkMode={darkMode} />

        {/* Certifications, Hackathons & Activities */}
        <Certifications darkMode={darkMode} />

        {/* Contact & Inquiry */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
      />

      {/* Deployment & Guide Modal */}
      <DeploymentGuideModal
        isOpen={isDeploymentGuideOpen}
        onClose={() => setIsDeploymentGuideOpen(false)}
        darkMode={darkMode}
      />

      {/* Academic Profile Editor Modal */}
      <AcademicProfileEditorModal
        isOpen={isAcademicEditorOpen}
        onClose={() => setIsAcademicEditorOpen(false)}
        educationData={educationData}
        onSave={handleUpdateEducation}
        darkMode={darkMode}
      />
    </div>
  );
}
