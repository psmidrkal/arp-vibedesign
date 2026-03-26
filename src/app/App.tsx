import { useState } from "react";
import HomePage from "@/app/components/HomePage";
import MilestoneDetails from "@/app/components/MilestoneDetails";
import CollaboratorsApprovers from "@/app/components/CollaboratorsApprovers";
import RepositorySetup from "@/app/components/RepositorySetup";
import MilestoneSummary from "@/app/components/MilestoneSummary";
import MyStudies, { Study, TeamMember } from "@/app/components/MyStudies";
import AdminPage from "@/app/components/AdminPage";
import ReportsPage from "@/app/components/ReportsPage";
import SDTMDataExtract, { SDTMExtractRequest } from "@/app/components/SDTMDataExtract";
import ProjectDetailsPage from "@/app/components/ProjectDetailsPage";
import { RoleProvider } from "@/app/context/RoleContext";

type Screen = 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'admin' | 'reports' | 'sdtm-extract' | 'project-details';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [previousScreen, setPreviousScreen] = useState<Screen | null>(null);
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);
  const [studies, setStudies] = useState<Study[]>([
    // Mock existing studies
    {
      id: '22',
      businessArea: 'EDS',
      blublType: 'Blinded',
      therapeuticArea: 'oncology',
      mkVNumber: '1084a',
      indication: 'NA',
      protocolNumber: 'prot005',
      milestoneName: 'test10',
      milestoneCategory: 'General',
      status: 'Active',
      insertedDate: '2025-11-25',
      createdBy: 'kunmylil',
      lastUpdateDate: '2026-01-15',
      updatedBy: 'prakashu',
      trialType: 'Interventional',
      phase: 'Phase 3',
      trialTypeSecondary: 'Randomized',
      protocolTitle: 'A Phase 3 Study of Oncology Treatment',
      projectDescription: 'This is a comprehensive phase 3 clinical trial evaluating the efficacy and safety of the investigational treatment.',
      visibility: 'Internal',
      projectTags: 'oncology, phase3, blinded',
      projectEnvironment: 'Production',
      hardwareTier: 'Standard',
      collaborators: [
        { firstName: 'Petr', lastName: 'Smidrkal', role: 'Project Lead' },
        { firstName: 'Usha', lastName: 'Prakash', role: 'Statistician' },
        { firstName: 'Sanjay', lastName: 'Jasti', role: 'Programmer' },
        { firstName: 'Barbara', lastName: 'Dutsura', role: 'Output Consumer' }
      ]
    },
    {
      id: '24',
      businessArea: 'R&D',
      blublType: 'Unblinded',
      therapeuticArea: 'cardiology',
      mkVNumber: '2095b',
      indication: 'Heart Disease',
      protocolNumber: 'prot006',
      milestoneName: 'test12',
      milestoneCategory: 'Stealth',
      status: 'Active',
      insertedDate: '2025-12-01',
      createdBy: 'johndoe',
      lastUpdateDate: '2026-01-20',
      updatedBy: 'smithj',
      collaborators: [
        { firstName: 'Petr', lastName: 'Smidrkal', role: 'Project Lead' },
        { firstName: 'Jennifer', lastName: 'Smith', role: 'Statistician' },
        { firstName: 'Kevin', lastName: 'Brown', role: 'Programmer' }
      ]
    },
    {
      id: '25',
      businessArea: 'BDS',
      blublType: 'Blinded',
      therapeuticArea: 'neurology',
      mkVNumber: '3456c',
      indication: 'Alzheimers',
      protocolNumber: 'prot007',
      milestoneName: 'phase3interim',
      milestoneCategory: 'General',
      status: 'Active',
      insertedDate: '2025-10-15',
      createdBy: 'andersm',
      lastUpdateDate: '2026-02-28',
      updatedBy: 'leeanna',
      collaborators: [
        { firstName: 'Petr', lastName: 'Smidrkal', role: 'Project Lead' },
        { firstName: 'Michael', lastName: 'Anderson', role: 'Statistician' },
        { firstName: 'Anna', lastName: 'Lee', role: 'Statistician' },
        { firstName: 'David', lastName: 'Chen', role: 'Programmer' },
        { firstName: 'Maria', lastName: 'Garcia', role: 'Programmer' },
        { firstName: 'James', lastName: 'Wilson', role: 'Output Consumer' }
      ]
    },
    {
      id: '26',
      businessArea: 'EDS',
      blublType: 'Unblinded',
      therapeuticArea: 'immunology',
      mkVNumber: '7890d',
      indication: 'Rheumatoid Arthritis',
      protocolNumber: 'prot008',
      milestoneName: 'interim1',
      milestoneCategory: 'General',
      status: 'Active',
      insertedDate: '2025-09-20',
      createdBy: 'thomasr',
      lastUpdateDate: '2026-01-05',
      updatedBy: 'martinl',
      collaborators: [
        { firstName: 'Petr', lastName: 'Smidrkal', role: 'Project Lead' },
        { firstName: 'Robert', lastName: 'Thomas', role: 'Statistician' },
        { firstName: 'Laura', lastName: 'Martin', role: 'Programmer' },
        { firstName: 'Sarah', lastName: 'Johnson', role: 'Output Consumer' }
      ]
    },
    {
      id: '27',
      businessArea: 'LDS',
      blublType: 'Blinded',
      therapeuticArea: 'cardiology',
      mkVNumber: '4567e',
      indication: 'Hypertension',
      protocolNumber: 'prot009',
      milestoneName: 'final',
      milestoneCategory: 'Firewalled',
      status: 'Active',
      insertedDate: '2025-08-10',
      createdBy: 'smidrkal',
      lastUpdateDate: '2026-03-01',
      updatedBy: 'parkj',
      collaborators: [
        { firstName: 'Petr', lastName: 'Smidrkal', role: 'Project Lead' },
        { firstName: 'Katherine', lastName: 'Smidr', role: 'Statistician' },
        { firstName: 'Jason', lastName: 'Park', role: 'Statistician' },
        { firstName: 'Emily', lastName: 'Davis', role: 'Programmer' },
        { firstName: 'Richard', lastName: 'Miller', role: 'Output Consumer' },
        { firstName: 'Patricia', lastName: 'Moore', role: 'Output Consumer' },
        { firstName: 'Daniel', lastName: 'Taylor', role: 'Output Consumer' }
      ]
    }
  ]);
  const [formData, setFormData] = useState<any>(null);
  const [sdtmExtractRequests, setSDTMExtractRequests] = useState<SDTMExtractRequest[]>([]);

  const handleNavigate = (screen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const handleMilestoneDetailsNext = (data: any) => {
    setFormData({ ...formData, ...data });
    setCurrentScreen('collaborators-approvers');
  };

  const handleCollaboratorsBack = () => {
    setCurrentScreen('milestone-details');
  };

  const handleCollaboratorsNext = (data: any) => {
    setFormData({ ...formData, ...data });
    setCurrentScreen('repository-setup');
  };

  const handleRepositoryNext = () => {
    setCurrentScreen('milestone-summary');
  };

  const handleSubmitStudy = () => {
    if (formData) {
      // Create new study — auto-approved with new role hierarchy
      const newStudy: Study = {
        id: String(studies.length + 22), // Generate next ID
        businessArea: formData.businessArea,
        blublType: formData.blublType,
        therapeuticArea: formData.therapeuticArea,
        mkVNumber: formData.mkVNumber,
        indication: formData.indication,
        protocolNumber: formData.protocolNumber,
        milestoneName: formData.generatedProjectName || formData.milestoneName, // Use generated project name
        milestoneCategory: formData.milestoneCategory || 'General', // Use form data or default to General
        status: 'Active',
        insertedDate: new Date().toISOString().split('T')[0],
        createdBy: 'smidrkal',
        lastUpdateDate: new Date().toISOString().split('T')[0],
        updatedBy: 'smidrkal',
        collaborators: formData.teamMembers || [],
      };

      setStudies([newStudy, ...studies]);
      setFormData(null);
      setCurrentScreen('my-studies');
    }
  };

  const handleUpdateCollaborators = (studyId: string, newCollaborators: TeamMember[]) => {
    setStudies(studies.map(study => 
      study.id === studyId ? { ...study, collaborators: newCollaborators } : study
    ));
    // Update selectedStudy if it's the one being edited
    if (selectedStudy && selectedStudy.id === studyId) {
      setSelectedStudy({ ...selectedStudy, collaborators: newCollaborators });
    }
  };

  const handleSDTMExtractRequest = (study: Study) => {
    // Create a new SDTM extract request
    const newRequest: SDTMExtractRequest = {
      id: String(sdtmExtractRequests.length + 1),
      requestId: `REQ${String(sdtmExtractRequests.length + 1000).padStart(12, '0')}`,
      runId: `RUN${String(Math.floor(Math.random() * 1000000000)).padStart(12, '0')}`,
      requestedDate: `${new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '/')} ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`,
      archivedStaged: 'Active (0)',
      dataLifecycle: 'First Preview',
      maskedBlinded: study.blublType.includes('Blinded') ? 'Unmasked & Blinded' : 'Unmasked & Unblinded',
      mkVNumber: study.mkVNumber,
      protocolNumber: study.protocolNumber,
      catalogName: `mr_crd_sdtm_ctms_preview`,
      schemaName: `${study.mkVNumber.toLowerCase()}_${study.protocolNumber.toLowerCase()}_sdtm34_0`,
      extractStatus: 'SUBMITTED',
      convertStatus: 'Not Started',
      convertProgress: 'Not started',
    };

    setSDTMExtractRequests([newRequest, ...sdtmExtractRequests]);
    setPreviousScreen('my-studies'); // Track that we came from Projects
    setCurrentScreen('sdtm-extract');
  };

  const handleNewSDTMRequest = (data: any) => {
    // Create a new SDTM extract request from the modal
    const newRequest: SDTMExtractRequest = {
      id: String(sdtmExtractRequests.length + 1),
      requestId: `REQ${String(sdtmExtractRequests.length + 1000).padStart(12, '0')}`,
      runId: `RUN${String(Math.floor(Math.random() * 1000000000)).padStart(12, '0')}`,
      requestedDate: `${new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '/')} ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`,
      archivedStaged: 'Active (0)',
      dataLifecycle: data.dataLifecycle,
      maskedBlinded: data.maskedBlinded,
      mkVNumber: data.mkVNumber,
      protocolNumber: data.protocolNumber,
      catalogName: `mr_crd_sdtm_ctms_preview`,
      schemaName: data.schemaName,
      extractStatus: 'SUBMITTED',
      convertStatus: 'Not Started',
      convertProgress: 'Not started',
    };

    setSDTMExtractRequests([newRequest, ...sdtmExtractRequests]);
  };

  const handleProjectDetails = (study: Study) => {
    setSelectedStudy(study);
    setCurrentScreen('project-details');
  };

  return (
    <RoleProvider>
      <div className="size-full">
        {currentScreen === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentScreen === 'milestone-details' && <MilestoneDetails onNavigate={handleNavigate} onNext={handleMilestoneDetailsNext} previousScreen={previousScreen} initialData={formData} />}
        {currentScreen === 'collaborators-approvers' && <CollaboratorsApprovers onNavigate={handleNavigate} onBack={handleCollaboratorsBack} onNext={handleCollaboratorsNext} initialData={formData} />}
        {currentScreen === 'repository-setup' && <RepositorySetup onNavigate={handleNavigate} onSubmit={handleRepositoryNext} />}
        {currentScreen === 'milestone-summary' && <MilestoneSummary onNavigate={handleNavigate} onSubmit={handleSubmitStudy} formData={formData} />}
        {currentScreen === 'my-studies' && <MyStudies onNavigate={handleNavigate} studies={studies} onUpdateCollaborators={handleUpdateCollaborators} onSDTMExtractRequest={handleSDTMExtractRequest} onProjectDetails={handleProjectDetails} />}
        {currentScreen === 'admin' && <AdminPage onNavigate={handleNavigate} />}
        {currentScreen === 'reports' && <ReportsPage onNavigate={handleNavigate} />}
        {currentScreen === 'sdtm-extract' && <SDTMDataExtract onNavigate={handleNavigate} extractRequests={sdtmExtractRequests} fromProjects={previousScreen === 'my-studies'} onNewSDTMRequest={handleNewSDTMRequest} />}
        {currentScreen === 'project-details' && selectedStudy && <ProjectDetailsPage onNavigate={handleNavigate} study={selectedStudy} onUpdateTeamMembers={handleUpdateCollaborators} />}
      </div>
    </RoleProvider>
  );
}