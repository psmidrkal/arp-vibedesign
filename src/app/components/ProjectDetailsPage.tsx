import TopNav from "./shared/TopNav";
import { ChevronRight, AlertCircle, X } from "lucide-react";
import { useState } from "react";
import FolderTree from "./shared/FolderTree";
import { Study, TeamMember } from "./MyStudies";
import Select from "./shared/Select";
import { toast } from "./shared/Toast";

interface ProjectDetailsPageProps {
  study: Study;
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'admin' | 'reports' | 'sdtm-extract') => void;
  onUpdateTeamMembers: (studyId: string, members: TeamMember[]) => void;
}

type UserDirectoryEntry = {
  firstName: string;
  lastName: string;
  email: string;
  isid: string;
};

// Mock user directory
const USER_DIRECTORY: Record<string, UserDirectoryEntry> = {
  'arpitteam@example.com': { firstName: 'Arpit', lastName: 'Team', email: 'arpitteam@example.com', isid: 'ARPITTeam' },
  'ARPITTeam': { firstName: 'Arpit', lastName: 'Team', email: 'arpitteam@example.com', isid: 'ARPITTeam' },
  'arpitusers@example.com': { firstName: 'Arpit', lastName: 'Users', email: 'arpitusers@example.com', isid: 'ARPITUsers' },
  'ARPITUsers': { firstName: 'Arpit', lastName: 'Users', email: 'arpitusers@example.com', isid: 'ARPITUsers' },
  'john.doe@example.com': { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', isid: 'JDoe' },
  'JDoe': { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', isid: 'JDoe' },
  'sarah.smith@example.com': { firstName: 'Sarah', lastName: 'Smith', email: 'sarah.smith@example.com', isid: 'SSmith' },
  'SSmith': { firstName: 'Sarah', lastName: 'Smith', email: 'sarah.smith@example.com', isid: 'SSmith' },
  'michael.chen@example.com': { firstName: 'Michael', lastName: 'Chen', email: 'michael.chen@example.com', isid: 'MChen' },
  'MChen': { firstName: 'Michael', lastName: 'Chen', email: 'michael.chen@example.com', isid: 'MChen' },
  'usha.prakash@example.com': { firstName: 'Usha', lastName: 'Prakash', email: 'usha.prakash@example.com', isid: 'UPrakash' },
  'UPrakash': { firstName: 'Usha', lastName: 'Prakash', email: 'usha.prakash@example.com', isid: 'UPrakash' },
};

const SEARCH_BY_OPTIONS = ['Email', 'ISID'];
const ROLE_OPTIONS: TeamMember['role'][] = ['Statistician', 'Programmer', 'Output Consumer', 'Project Lead'];
const EMAIL_DIRECTORY_OPTIONS = Object.keys(USER_DIRECTORY).filter((key) => key.includes('@'));
const ISID_DIRECTORY_OPTIONS = Object.keys(USER_DIRECTORY).filter((key) => !key.includes('@'));

function normalizeSlugValue(value: string): string {
  return value.toLowerCase().replace(/\s+/g, '-');
}

function normalizeCompactValue(value: string): string {
  return value.toLowerCase().replace(/\s+/g, '');
}

function hasDuplicateTeamMember(members: TeamMember[], user: UserDirectoryEntry): boolean {
  return members.some(
    (member) => member.firstName === user.firstName && member.lastName === user.lastName
  );
}

function SummaryField({ label, value }: { label: string; value: string | React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="text-muted-foreground text-sm mb-1">{label}</div>
      <div className="text-foreground font-medium">{value}</div>
    </div>
  );
}

function generateProjectName(study: Study): string {
  const businessArea = normalizeSlugValue(study.businessArea);
  const therapeuticArea = study.therapeuticArea.toLowerCase().substring(0, 3);
  const blinding = study.blublType.toLowerCase().includes('blinded') ? 'bl' : 'unbl';
  const mkv = normalizeCompactValue(study.mkVNumber);
  const indication = normalizeSlugValue(study.indication);
  const protocol = normalizeCompactValue(study.protocolNumber);
  const milestone = normalizeCompactValue(study.milestoneName);
  
  return `${businessArea}-${therapeuticArea}-${blinding}-${mkv}-${indication}-${protocol}-${milestone}`;
}

export default function ProjectDetailsPage({ study, onNavigate, onUpdateTeamMembers }: ProjectDetailsPageProps) {
  const [isDataFoldersExpanded, setIsDataFoldersExpanded] = useState(false);
  const [isCodeFoldersExpanded, setIsCodeFoldersExpanded] = useState(false);
  const [isArtifactsFoldersExpanded, setIsArtifactsFoldersExpanded] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(study.collaborators || []);
  const [searchBy, setSearchBy] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectedISID, setSelectedISID] = useState('');
  const [role, setRole] = useState<TeamMember['role'] | ''>('');
  const [isEditingTeam, setIsEditingTeam] = useState(false);

  const handleAddMember = () => {
    const userKey = searchBy === 'Email' ? selectedEmail : selectedISID;
    
    if (!userKey || !role) {
      toast.error('Please select a user and role');
      return;
    }

    const userInfo = USER_DIRECTORY[userKey];
    
    if (!userInfo) {
      toast.error('User not found in directory');
      return;
    }

    // Check if user is already added
    const isDuplicate = hasDuplicateTeamMember(teamMembers, userInfo);

    if (isDuplicate) {
      toast.error('This team member has already been added');
      return;
    }

    const newMember: TeamMember = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      role: role as TeamMember['role']
    };

    setTeamMembers([...teamMembers, newMember]);
    setSelectedEmail('');
    setSelectedISID('');
    setRole('');
    toast.success('Team member added successfully');
  };

  const handleRemoveMember = (index: number) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
    toast.success('Team member removed');
  };

  const handleSaveTeamMembers = () => {
    onUpdateTeamMembers(study.id, teamMembers);
    setIsEditingTeam(false);
    toast.success('Team members updated successfully');
  };

  const handleCancelEdit = () => {
    setTeamMembers([...study.collaborators]);
    setIsEditingTeam(false);
    setSearchBy('');
    setSelectedEmail('');
    setSelectedISID('');
    setRole('');
  };

  return (
    <div className="bg-background min-h-screen">
      <TopNav onNavigate={onNavigate} />
      
      {/* Breadcrumbs */}
      <div className="bg-card px-6 py-3 border-b border-border">
        <div className="flex items-center gap-2 text-sm">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="text-primary hover:underline cursor-pointer"
          >
            Home
          </a>
          <ChevronRight size={14} className="text-muted-foreground" />
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('my-studies');
            }}
            className="text-primary hover:underline cursor-pointer"
          >
            Projects
          </a>
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="text-foreground">Project Details</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-8 bg-muted">
        <div className="max-w-7xl mx-auto bg-card p-8 rounded-[var(--radius-card)]">
          {/* Page Header */}
          <div className="mb-6 pb-6 border-b border-border">
            <h1 className="text-[24px]" style={{ color: '#00857C' }}>Project Details</h1>
            <p className="text-muted-foreground text-sm mt-1">
              View project details and configuration.
            </p>
          </div>

          {/* Summary Content */}
          <div className="space-y-8">
            {/* Project Details Section */}
            <div>
              <div className="grid grid-cols-3 gap-6">
                <SummaryField label="Business Area" value={study.businessArea || 'N/A'} />
                <SummaryField label="TrialType" value={study.trialType || 'N/A'} />
                <SummaryField label="Therapeutic Area" value={study.therapeuticArea || 'N/A'} />
                <SummaryField label="MK/V Number" value={study.mkVNumber || 'N/A'} />
                <SummaryField label="Indication" value={study.indication || 'N/A'} />
                <SummaryField label="Protocol Number" value={study.protocolNumber || 'N/A'} />
                <SummaryField label="Phase" value={study.phase || 'N/A'} />
                <SummaryField label="Trial Type" value={study.trialTypeSecondary || 'N/A'} />
                <SummaryField label="Protocol Title" value={study.protocolTitle || 'N/A'} />
                <SummaryField label="Milestone Name" value={study.milestoneName || 'N/A'} />
                <SummaryField label="Blinded/Unblinded" value={study.blublType || 'N/A'} />
                <SummaryField label="Project Category" value={study.milestoneCategory || 'N/A'} />
              </div>
              
              {study.projectDescription && (
                <div className="mt-6">
                  <SummaryField label="Project Description" value={study.projectDescription} />
                </div>
              )}
              
              <div className="mt-6">
                <SummaryField 
                  label="Generated Project Name" 
                  value={<span className="font-mono text-sm text-primary">{generateProjectName(study)}</span>}
                />
              </div>
              
              {study.projectTags && (
                <div className="mt-6">
                  <SummaryField label="Project Tags" value={study.projectTags} />
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-6 mt-6">
                <SummaryField label="Project Environment" value={study.projectEnvironment || 'N/A'} />
                <SummaryField label="Hardware Tier" value={study.hardwareTier || 'N/A'} />
              </div>
            </div>

            {/* Project Metadata Section */}
            <div>
              <h2 className="text-[20px] mb-6 pb-2 border-b border-border" style={{ color: '#00857C' }}>
                Project Metadata
              </h2>
              
              <div className="grid grid-cols-3 gap-6">
                <SummaryField label="Status" value={study.status || 'N/A'} />
                <SummaryField label="Submitted Date" value={study.insertedDate || 'N/A'} />
                <SummaryField label="Created By" value={study.createdBy || 'N/A'} />
                <SummaryField label="Last Update Date" value={study.lastUpdateDate || 'N/A'} />
                <SummaryField label="Updated By" value={study.updatedBy || 'N/A'} />
              </div>
            </div>

            {/* Team Members Section */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
                <h2 className="text-[20px]" style={{ color: '#00857C' }}>
                  Project Team Members
                </h2>
                {!isEditingTeam && (
                  <button
                    onClick={() => setIsEditingTeam(true)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity text-sm"
                  >
                    Edit Team Members
                  </button>
                )}
              </div>

              {isEditingTeam && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-[var(--radius)] flex items-start gap-3">
                  <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-primary text-sm">
                    You are now editing the project team members. Add or remove members as needed, then click "Save Changes" to update.
                  </p>
                </div>
              )}

              {isEditingTeam && (
                <div className="flex items-end gap-3 mb-6">
                  <div className="w-32">
                    <label className="block text-foreground text-sm mb-2">Search By:</label>
                    <Select
                      placeholder="Select"
                      options={SEARCH_BY_OPTIONS}
                      value={searchBy}
                      onChange={(value) => {
                        setSearchBy(value);
                        setSelectedEmail('');
                        setSelectedISID('');
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <Select
                      placeholder="Select Email"
                      options={EMAIL_DIRECTORY_OPTIONS}
                      value={selectedEmail}
                      onChange={setSelectedEmail}
                      disabled={searchBy !== 'Email'}
                    />
                  </div>

                  <div className="flex-1">
                    <Select
                      placeholder="Select ISID"
                      options={ISID_DIRECTORY_OPTIONS}
                      value={selectedISID}
                      onChange={setSelectedISID}
                      disabled={searchBy !== 'ISID'}
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-foreground text-sm mb-2">Role:</label>
                    <Select
                      placeholder="Select Role"
                      options={ROLE_OPTIONS}
                      value={role}
                      onChange={(value) => setRole(value as TeamMember['role'])}
                    />
                  </div>

                  <button
                    onClick={handleAddMember}
                    disabled={!searchBy || (!selectedEmail && !selectedISID) || !role}
                    className={`px-8 py-2 transition-opacity rounded-[var(--radius-button)] ${
                      searchBy && (selectedEmail || selectedISID) && role
                        ? 'bg-primary text-primary-foreground hover:opacity-90 cursor-pointer'
                        : 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'
                    }`}
                  >
                    Add
                  </button>
                </div>
              )}

              {teamMembers.length > 0 ? (
                <div className="bg-white border border-border rounded-[var(--radius)] overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted border-b border-border">
                        <th className="text-left py-4 px-4">
                          <span className="font-bold text-foreground">First Name</span>
                        </th>
                        <th className="text-left py-4 px-4">
                          <span className="font-bold text-foreground">Last Name</span>
                        </th>
                        <th className="text-left py-4 px-4">
                          <span className="font-bold text-foreground">Role</span>
                        </th>
                        {isEditingTeam && (
                          <th className="text-left py-4 px-4">
                            <span className="font-bold text-foreground">Actions</span>
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member: TeamMember, index: number) => (
                        <tr key={index} className="border-b border-border last:border-b-0">
                          <td className="py-4 px-4 text-foreground">{member.firstName}</td>
                          <td className="py-4 px-4 text-foreground">{member.lastName}</td>
                          <td className="py-4 px-4 text-foreground">{member.role}</td>
                          {isEditingTeam && (
                            <td className="py-4 px-4">
                              <button
                                onClick={() => handleRemoveMember(index)}
                                className="text-destructive hover:text-destructive/80 flex items-center gap-1"
                              >
                                <X size={16} />
                                <span className="text-sm">Remove</span>
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">No team members assigned to this project.</p>
              )}

              {teamMembers.length > 0 && (
                <p className="text-muted-foreground text-sm mt-3">
                  Total team members: {teamMembers.length}
                </p>
              )}

              {isEditingTeam && (
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleSaveTeamMembers}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-muted text-foreground px-6 py-2 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity border border-border"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Repository & Environment Section */}
            <div>
              <h2 className="text-[20px] mb-6 pb-2 border-b border-border" style={{ color: '#00857C' }}>
                Repository & Environment Configuration
              </h2>
              
              <div className="space-y-6">
                <SummaryField 
                  label="Main Git Repository" 
                  value={<span className="font-mono text-sm">&lt;&lt;{generateProjectName(study)}&gt;&gt;</span>}
                />
                
                {/* Code Folders - Collapsible */}
                <div className="bg-white border border-border">
                  <button
                    onClick={() => setIsCodeFoldersExpanded(!isCodeFoldersExpanded)}
                    className="w-full bg-[rgba(0,0,0,0.02)] border-b border-[#949494] cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] pl-[12px] pr-[16px] py-[12px]">
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 14 14" 
                        fill="none"
                        className={`text-[rgba(0,0,0,0.88)] flex-shrink-0 transition-transform ${isCodeFoldersExpanded ? 'rotate-90' : ''}`}
                      >
                        <path d="M5.5 3L9.5 7L5.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="flex-1 text-left">
                        <div className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px]">Code Folders</div>
                      </div>
                    </div>
                  </button>
                  
                  {isCodeFoldersExpanded && (
                    <div className="p-[16px] border-b border-[#949494]">
                      <p className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px] mb-3">Executable logic, macros, programs</p>
                      <FolderTree
                        nodes={[
                          {
                            name: 'code',
                            type: 'folder',
                            children: [
                              {
                                name: 'pgm',
                                type: 'folder',
                                children: [
                                  {
                                    name: 'tests-dbll-pgm',
                                    type: 'folder',
                                    children: [
                                      { name: 'test-pgm', type: 'folder' }
                                    ]
                                  },
                                  {
                                    name: 'tests-dev-pgm',
                                    type: 'folder',
                                    children: [
                                      { name: 'test-pgm', type: 'folder' }
                                    ]
                                  },
                                  {
                                    name: 'tests-ind-pgm',
                                    type: 'folder',
                                    children: [
                                      { name: 'test-pgm', type: 'folder' }
                                    ]
                                  }
                                ]
                              },
                              {
                                name: 'macrolib',
                                type: 'folder',
                                children: [
                                  {
                                    name: 'pgm',
                                    type: 'folder',
                                    children: [
                                      {
                                        name: 'tests-dev-pgm',
                                        type: 'folder',
                                        children: [
                                          { name: 'test-dev-pgm', type: 'folder' }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]}
                      />
                    </div>
                  )}
                </div>

                {/* Artifacts Folders - Collapsible */}
                <div className="bg-white border border-border">
                  <button
                    onClick={() => setIsArtifactsFoldersExpanded(!isArtifactsFoldersExpanded)}
                    className="w-full bg-[rgba(0,0,0,0.02)] border-b border-[#949494] cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] pl-[12px] pr-[16px] py-[12px]">
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 14 14" 
                        fill="none"
                        className={`text-[rgba(0,0,0,0.88)] flex-shrink-0 transition-transform ${isArtifactsFoldersExpanded ? 'rotate-90' : ''}`}
                      >
                        <path d="M5.5 3L9.5 7L5.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="flex-1 text-left">
                        <div className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px]">Artifacts Folders</div>
                      </div>
                    </div>
                  </button>
                  
                  {isArtifactsFoldersExpanded && (
                    <div className="p-[16px] border-b border-[#949494]">
                      <p className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px] mb-3">Generated outputs from runs (read-only results)</p>
                      <FolderTree
                        nodes={[
                          {
                            name: 'artifacts',
                            type: 'folder',
                            children: [
                              {
                                name: 'tests-dbll-pgm',
                                type: 'folder',
                                children: [
                                  { name: 'outgraph', type: 'folder' },
                                  { name: 'outlist', type: 'folder' },
                                  { name: 'outtable', type: 'folder' }
                                ]
                              },
                              {
                                name: 'tests-dev-pgm',
                                type: 'folder',
                                children: [
                                  { name: 'outgraph', type: 'folder' },
                                  { name: 'outlist', type: 'folder' },
                                  { name: 'outlog', type: 'folder' },
                                  { name: 'outparam', type: 'folder' },
                                  { name: 'outtable', type: 'folder' }
                                ]
                              },
                              {
                                name: 'tests-ind-pgm',
                                type: 'folder',
                                children: [
                                  { name: 'outgraph', type: 'folder' },
                                  { name: 'outlist', type: 'folder' },
                                  { name: 'outlog', type: 'folder' },
                                  { name: 'outtable', type: 'folder' }
                                ]
                              }
                            ]
                          }
                        ]}
                      />
                    </div>
                  )}
                </div>

                {/* Data Folders - Collapsible */}
                <div className="bg-white border border-border">
                  <button
                    onClick={() => setIsDataFoldersExpanded(!isDataFoldersExpanded)}
                    className="w-full bg-[rgba(0,0,0,0.02)] border-b border-[#949494] cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] pl-[12px] pr-[16px] py-[12px]">
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 14 14" 
                        fill="none"
                        className={`text-[rgba(0,0,0,0.88)] flex-shrink-0 transition-transform ${isDataFoldersExpanded ? 'rotate-90' : ''}`}
                      >
                        <path d="M5.5 3L9.5 7L5.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="flex-1 text-left">
                        <div className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px]">Data Folders</div>
                      </div>
                    </div>
                  </button>
                  
                  {isDataFoldersExpanded && (
                    <div className="p-[16px] border-b border-[#949494]">
                      <p className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px] mb-3">Inputs, mappings, analysis data, documentation</p>
                      <FolderTree
                        nodes={[
                          {
                            name: 'data',
                            type: 'folder',
                            children: [
                              {
                                name: 'datamaps',
                                type: 'folder',
                                children: [
                                  { name: 'userexploration', type: 'folder' },
                                  {
                                    name: 'tests-dbll-pgm',
                                    type: 'folder',
                                    children: [
                                      { name: 'test-datanalysis', type: 'folder' },
                                      { name: 'test-outdata', type: 'folder' }
                                    ]
                                  }
                                ]
                              },
                              {
                                name: 'tests',
                                type: 'folder',
                                children: [
                                  {
                                    name: 'tests-dbll-pgm',
                                    type: 'folder',
                                    children: [
                                      { name: 'test-datanalysis', type: 'folder' },
                                      { name: 'test-outdata', type: 'folder' }
                                    ]
                                  },
                                  {
                                    name: 'tests-dev-pgm',
                                    type: 'folder',
                                    children: [
                                      { name: 'test-outdata', type: 'folder' }
                                    ]
                                  },
                                  {
                                    name: 'tests-ind-pgm',
                                    type: 'folder',
                                    children: [
                                      { name: 'test-datanalysis', type: 'folder' },
                                      { name: 'test-outdata', type: 'folder' }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Back to Projects CTA */}
          <div className="mt-8 pt-6 border-t border-border">
            <button
              onClick={() => onNavigate('my-studies')}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card py-4 text-center text-sm text-muted-foreground border-t border-border">
        Copyright © 2025 Merck & Co., Inc., Rahway, NJ, USA and its affiliates. All rights reserved.
      </footer>
    </div>
  );
}