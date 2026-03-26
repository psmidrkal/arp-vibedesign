import TopNav from "./shared/TopNav";
import { User, Mail, MessageSquare, HelpCircle, Home, FolderOpen, ClipboardList, Settings, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import svgPaths from '@/imports/svg-6hwcrc560a';
import FolderTree from "./shared/FolderTree";
import { toast, ToastProvider } from "./shared/Toast";

interface TeamMember {
  firstName: string;
  lastName: string;
  role: string;
}

interface MilestoneSummaryProps {
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin') => void;
  onSubmit: () => void;
  formData?: any;
}

function IconWhite() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.0001 35">
        <g>
          <path clipRule="evenodd" d={svgPaths.p176e6880} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function NavItem({ children, active = false, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`text-primary-foreground hover:opacity-80 transition-opacity ${active ? 'border-b-2 border-primary-foreground' : ''}`}
    >
      {children}
    </a>
  );
}

function NavItemWithBadge({ children, badge, active = false, onClick }: { children: React.ReactNode; badge?: number; active?: boolean; onClick?: () => void }) {
  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`text-primary-foreground hover:opacity-80 transition-opacity relative ${active ? 'border-b-2 border-primary-foreground' : ''}`}
    >
      {children}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-2 bg-destructive text-destructive-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
          {badge}
        </span>
      )}
    </a>
  );
}

function Breadcrumbs({ onNavigate }: { onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin') => void }) {
  return (
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
            onNavigate('milestone-details');
          }}
          className="text-primary hover:underline cursor-pointer"
        >
          Create New Project
        </a>
        <ChevronRight size={14} className="text-muted-foreground" />
        <span className="text-foreground">Review & Submit</span>
      </div>
    </div>
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

export default function MilestoneSummary({ onNavigate, onSubmit, formData }: MilestoneSummaryProps) {
  const [isDataFoldersExpanded, setIsDataFoldersExpanded] = useState(false);
  const [isCodeFoldersExpanded, setIsCodeFoldersExpanded] = useState(false);
  const [isArtifactsFoldersExpanded, setIsArtifactsFoldersExpanded] = useState(false);
  const [isLibrariesExpanded, setIsLibrariesExpanded] = useState(false);

  const handleCreateProject = () => {
    // Show success message
    toast.success('Project created successfully!', {
      description: 'Redirecting to My Projects...',
      duration: 2000,
    });
    
    // Delay navigation to allow toast to be seen
    setTimeout(() => {
      onSubmit();
    }, 2000);
  };

  // Mock data for folders and libraries
  const dataFolders = [
    'adlb', 'adae', 'adcm', 'addv', 'adeg', 'ademg', 'adex', 'adlbh', 'admh', 
    'adpc', 'adpp', 'adqs', 'adsl', 'adtte', 'advs', 'ae', 'cm', 'dm', 'ds', 
    'ex', 'lb', 'mh', 'sv', 'vs'
  ];
  
  const codeFolders = ['adhoc', 'macrolib', 'pgmanual', 'pgmsetup', 'test'];
  
  const artifactFolders = [
    'analysis-plan', 'clinical-study-report', 'data-review', 'define-xml', 
    'efficacy-tables', 'figures', 'graphs', 'interim-analysis', 'lab-reports',
    'listings', 'programming-specs', 'protocol', 'qc-documentation', 'safety-tables',
    'sap-addendum', 'sdtm-specs', 'shells', 'standard-files', 'statistical-plan',
    'study-data-guide', 'study-design', 'tables', 'validation-reports', 'workflows'
  ];
  
  const importedLibraries = [
    { uri: 'https://github.com/merck/standard-macros', refType: 'branch', refValue: 'main', serviceProvider: 'github:Enterprise' }
  ];

  return (
    <div className="bg-background min-h-screen">
      <ToastProvider />
      <TopNav onNavigate={onNavigate} />
      {/* Breadcrumbs */}
      <Breadcrumbs onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="p-8 bg-muted">
        <div className="max-w-7xl mx-auto bg-card p-8 rounded-[var(--radius-card)]">
          {/* Page Header */}
          <div className="mb-6 pb-6 border-b border-border">
            <div className="mb-6">
              <h1 className="text-[24px]" style={{ color: '#00857C' }}>New Project Creation</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Review your project details before creation.
              </p>
            </div>

            {/* Timeline/Progress Steps */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  ✓
                </div>
                <div className="flex-1">
                  <div className="text-foreground font-bold">Project Details</div>
                  <div className="text-muted-foreground text-xs">Basic information</div>
                </div>
              </div>
              
              <div className="h-[2px] bg-primary flex-shrink-0" style={{ width: '40px' }}></div>
              
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  ✓
                </div>
                <div className="flex-1">
                  <div className="text-foreground font-bold">Project Team Members</div>
                  <div className="text-muted-foreground text-xs">Add team members</div>
                </div>
              </div>

              <div className="h-[2px] bg-primary flex-shrink-0" style={{ width: '40px' }}></div>
              
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  ✓
                </div>
                <div className="flex-1">
                  <div className="text-foreground font-bold">Project Environments</div>
                  <div className="text-muted-foreground text-xs">Repository setup</div>
                </div>
              </div>

              <div className="h-[2px] bg-primary flex-shrink-0" style={{ width: '40px' }}></div>
              
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <div className="text-foreground font-bold">Create Project</div>
                  <div className="text-muted-foreground text-xs">Review and submit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Content */}
          <div className="space-y-8">
            {/* Project Details Section */}
            <div>
              <h2 className="text-[20px] mb-6 pb-2 border-b border-border" style={{ color: '#00857C' }}>
                Project Details
              </h2>
              
              <div className="grid grid-cols-3 gap-6">
                <SummaryField label="Business Area" value={formData?.businessArea || 'N/A'} />
                <SummaryField label="TrialType" value={formData?.trialType || 'N/A'} />
                <SummaryField label="Therapeutic Area" value={formData?.therapeuticArea || 'N/A'} />
                <SummaryField label="MK/V Number" value={formData?.mkVNumber || 'N/A'} />
                <SummaryField label="Indication" value={formData?.indication || 'N/A'} />
                <SummaryField label="Protocol Number" value={formData?.protocolNumber || 'N/A'} />
                <SummaryField label="Phase" value={formData?.phase || 'N/A'} />
                <SummaryField label="Trial Type" value={formData?.trialTypeSecondary || 'N/A'} />
                <SummaryField label="Protocol Title" value={formData?.protocolTitle || 'N/A'} />
                <SummaryField label="Milestone Name" value={formData?.milestoneName || 'N/A'} />
                <SummaryField label="Blinded/Unblinded" value={formData?.blublType || 'N/A'} />
                <SummaryField label="Project Category" value={formData?.milestoneCategory || 'N/A'} />
              </div>
              
              {formData?.projectDescription && (
                <div className="mt-6">
                  <SummaryField label="Project Description" value={formData.projectDescription} />
                </div>
              )}
              
              <div className="mt-6">
                <SummaryField 
                  label="Generated Project Name" 
                  value={<span className="font-mono text-sm text-primary">{formData?.generatedProjectName || 'N/A'}</span>}
                />
              </div>
              
              {formData?.projectTags && (
                <div className="mt-6">
                  <SummaryField label="Project Tags" value={formData.projectTags} />
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-6 mt-6">
                <SummaryField label="Project Environment" value={formData?.projectEnvironment || 'N/A'} />
                <SummaryField label="Hardware Tier" value={formData?.hardwareTier || 'N/A'} />
              </div>
            </div>

            {/* Team Members Section */}
            <div>
              <h2 className="text-[20px] mb-6 pb-2 border-b border-border" style={{ color: '#00857C' }}>
                Project Team Members
              </h2>
              
              {formData?.teamMembers && formData.teamMembers.length > 0 ? (
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
                      </tr>
                    </thead>
                    <tbody>
                      {formData.teamMembers.map((member: TeamMember, index: number) => (
                        <tr key={index} className="border-b border-border last:border-b-0">
                          <td className="py-4 px-4 text-foreground">{member.firstName}</td>
                          <td className="py-4 px-4 text-foreground">{member.lastName}</td>
                          <td className="py-4 px-4 text-foreground">{member.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted-foreground">No team members added</p>
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
                  value={<span className="font-mono text-sm">&lt;&lt;{formData?.generatedProjectName || 'N/A'}&gt;&gt;</span>}
                />
                
                {/* Code Folders - Collapsible */}
                <div className="bg-white border border-border">
                  <button
                    onClick={() => setIsCodeFoldersExpanded(!isCodeFoldersExpanded)}
                    className="w-full bg-[rgba(0,0,0,0.02)] border-b border-[#949494] cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] pl-[12px] pr-[16px] py-[12px]">
                      {isCodeFoldersExpanded ? (
                        <ChevronDown size={14} className="text-[rgba(0,0,0,0.88)] flex-shrink-0" />
                      ) : (
                        <ChevronRight size={14} className="text-[rgba(0,0,0,0.88)] flex-shrink-0" />
                      )}
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
                      {isArtifactsFoldersExpanded ? (
                        <ChevronDown size={14} className="text-[rgba(0,0,0,0.88)] flex-shrink-0" />
                      ) : (
                        <ChevronRight size={14} className="text-[rgba(0,0,0,0.88)] flex-shrink-0" />
                      )}
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
                      {isDataFoldersExpanded ? (
                        <ChevronDown size={14} className="text-[rgba(0,0,0,0.88)] flex-shrink-0" />
                      ) : (
                        <ChevronRight size={14} className="text-[rgba(0,0,0,0.88)] flex-shrink-0" />
                      )}
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
                              },
                              {
                                name: 'documents',
                                type: 'folder',
                                children: [
                                  { name: 'specs', type: 'folder' }
                                ]
                              },
                              {
                                name: 'work',
                                type: 'folder',
                                children: [
                                  { name: 'documents', type: 'folder' },
                                  { name: 'worklists', type: 'folder' },
                                  { name: 'adhoc', type: 'folder' }
                                ]
                              }
                            ]
                          }
                        ]}
                      />
                    </div>
                  )}
                </div>

                {/* Imported Libraries - Collapsible */}
                <div className="bg-white border border-border">
                  <button
                    onClick={() => setIsLibrariesExpanded(!isLibrariesExpanded)}
                    className="w-full bg-[rgba(0,0,0,0.02)] border-b border-[#949494] cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] pl-[12px] pr-[16px] py-[12px]">
                      {isLibrariesExpanded ? (
                        <ChevronDown size={14} className="text-[rgba(0,0,0,0.88)] flex-shrink-0" />
                      ) : (
                        <ChevronRight size={14} className="text-[rgba(0,0,0,0.88)] flex-shrink-0" />
                      )}
                      <div className="flex-1 text-left">
                        <div className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px]">Imported Libraries</div>
                      </div>
                    </div>
                  </button>
                  
                  {isLibrariesExpanded && (
                    <div className="p-[16px] border-b border-[#949494]">
                      <p className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px] mb-3">{importedLibraries.length} library imported</p>
                      <div className="bg-white border border-border rounded-[var(--radius)] overflow-hidden">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)]">
                              <th className="text-left py-3 px-4 font-bold text-foreground border-r border-r-[#f0f0f0]">Library URI</th>
                              <th className="text-left py-3 px-4 font-bold text-foreground border-r border-r-[#f0f0f0]">Ref Type</th>
                              <th className="text-left py-3 px-4 font-bold text-foreground border-r border-r-[#f0f0f0]">Ref Value</th>
                              <th className="text-left py-3 px-4 font-bold text-foreground">Service Provider</th>
                            </tr>
                          </thead>
                          <tbody>
                            {importedLibraries.map((lib, index) => (
                              <tr key={index} className="border-b border-[#f0f0f0] last:border-b-0">
                                <td className="py-3 px-4 border-r border-r-[#f0f0f0]">
                                  <a href={lib.uri} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline font-mono text-sm">
                                    {lib.uri}
                                  </a>
                                </td>
                                <td className="py-3 px-4 text-foreground border-r border-r-[#f0f0f0]">{lib.refType}</td>
                                <td className="py-3 px-4 text-foreground border-r border-r-[#f0f0f0]">{lib.refValue}</td>
                                <td className="py-3 px-4 text-foreground">{lib.serviceProvider}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
            <button 
              onClick={() => onNavigate('repository-setup')}
              className="bg-card border border-border text-foreground px-8 py-2.5 hover:bg-muted transition-colors rounded-[var(--radius-button)] cursor-pointer"
            >
              Back
            </button>
            <button 
              onClick={handleCreateProject}
              className="bg-primary text-primary-foreground px-8 py-2.5 hover:opacity-90 transition-opacity rounded-[var(--radius-button)] cursor-pointer"
            >
              Create Project
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}