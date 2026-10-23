/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductSection } from './components/ProductSection';
import { TeamSection } from './components/TeamSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveStudioModal } from './components/InteractiveStudioModal';
import { DocumentEvidenceViewer } from './components/DocumentEvidenceViewer';

import {
  INITIAL_PAPERS,
  INITIAL_GAPS,
  TEAM_MEMBERS,
  ROADMAP_PHASES
} from './data/mockData';
import {
  StructuredPaper,
  TraceableClaim,
  ContactSubmission,
  ThemeMode
} from './types';
import { toggleClaimVerification } from './utils/academicModel';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('pastel');
  const [papers, setPapers] = useState<StructuredPaper[]>(INITIAL_PAPERS);
  const [gaps, setGaps] = useState(INITIAL_GAPS);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(TEAM_MEMBERS);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [evidencePaper, setEvidencePaper] = useState<StructuredPaper | null>(null);
  const [evidenceClaim, setEvidenceClaim] = useState<TraceableClaim | null>(null);

  const isPastel = theme === 'pastel';

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'pastel' ? 'midnight' : 'pastel'));
  };

  const handleInspectEvidence = (paper: StructuredPaper, claim: TraceableClaim) => {
    setEvidencePaper(paper);
    setEvidenceClaim(claim);
  };

  const handleCloseEvidence = () => {
    setEvidencePaper(null);
    setEvidenceClaim(null);
  };

  const handleToggleVerifyClaim = (paperId: string, claimId: string) => {
    setPapers((prev) => toggleClaimVerification(prev, paperId, claimId));
    // Also update evidence claim if currently viewed
    if (evidenceClaim && evidenceClaim.id === claimId) {
      setEvidenceClaim((prev) => (prev ? { ...prev, verified: !prev.verified } : null));
    }
  };

  const handleAddPaper = (newPaper: StructuredPaper) => {
    setPapers((prev) => [newPaper, ...prev]);
  };

  const handleUpdateMemberPhoto = (memberId: string, photoUrl: string) => {
    setTeamMembers((prev) =>
      prev.map((m) => (m.id === memberId ? { ...m, photo: photoUrl } : m))
    );
  };

  const handleSubmitInquiry = (
    data: Omit<ContactSubmission, 'id' | 'timestamp'>
  ) => {
    const submission: ContactSubmission = {
      ...data,
      id: `inquiry-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setSubmissions((prev) => [submission, ...prev]);
  };

  return (
    <div
      className={`min-h-screen relative font-sans transition-colors duration-300 ${
        isPastel
          ? 'bg-[#fafafa] text-slate-800'
          : 'bg-[#070b19] text-slate-100'
      }`}
    >
      {/* Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenStudio={() => setIsStudioOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-20">
        <HeroSection
          theme={theme}
          onOpenStudio={() => setIsStudioOpen(true)}
          onInspectEvidence={handleInspectEvidence}
          samplePaper={papers[0]}
        />

        <AboutSection theme={theme} />

        <ProductSection
          theme={theme}
          onOpenStudio={() => setIsStudioOpen(true)}
        />

        <TeamSection
          theme={theme}
          teamMembers={teamMembers}
          onUpdateMemberPhoto={handleUpdateMemberPhoto}
        />

        <RoadmapSection theme={theme} phases={ROADMAP_PHASES} />

        <ContactSection
          theme={theme}
          submissions={submissions}
          onSubmitInquiry={handleSubmitInquiry}
        />
      </main>

      {/* Footer */}
      <Footer theme={theme} onOpenStudio={() => setIsStudioOpen(true)} />

      {/* Interactive Studio Modal */}
      {isStudioOpen && (
        <InteractiveStudioModal
          theme={theme}
          papers={papers}
          gaps={gaps}
          onClose={() => setIsStudioOpen(false)}
          onInspectEvidence={handleInspectEvidence}
          onAddPaper={handleAddPaper}
          onToggleVerifyClaim={handleToggleVerifyClaim}
        />
      )}

      {/* Source Traceability Document Evidence Viewer Modal */}
      {evidencePaper && evidenceClaim && (
        <DocumentEvidenceViewer
          paper={evidencePaper}
          claim={evidenceClaim}
          theme={theme}
          onClose={handleCloseEvidence}
          onToggleVerify={handleToggleVerifyClaim}
        />
      )}
    </div>
  );
}
