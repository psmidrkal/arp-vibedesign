import TopNav from "./shared/TopNav";
import { User, Mail, MessageSquare, HelpCircle, Home, FolderOpen, ClipboardList, Settings, ChevronRight, ChevronDown, Search, Check } from "lucide-react";
import { useState } from "react";
import svgPaths from '@/imports/svg-6hwcrc560a';
import FolderTree from "./shared/FolderTree";
import RepositorySettingsModal from "./RepositorySettingsModal";

interface RepositorySetupProps {
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin') => void;
  onSubmit: () => void;
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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-[var(--radius-tag)] border border-border bg-white text-foreground text-sm">
      {children}
    </span>
  );
}

function Breadcrumbs({ onNavigate }: { onNavigate: (screen: 'home' | 'new-milestone' | 'repository-setup' | 'my-studies' | 'my-tasks' | 'admin') => void }) {
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
            onNavigate('new-milestone');
          }}
          className="text-primary hover:underline cursor-pointer"
        >
          Create New Project
        </a>
        <ChevronRight size={14} className="text-muted-foreground" />
        <span className="text-foreground">Repository Setup</span>
      </div>
    </div>
  );
}

export default function RepositorySetup({ onNavigate, onSubmit }: RepositorySetupProps) {
  const [isFolderStructureExpanded, setIsFolderStructureExpanded] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [useExistingRepo, setUseExistingRepo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRepository, setSelectedRepository] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [repositories, setRepositories] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Mock repository data
  const mockRepositories = [
    'merck-gen/st_eds-tst-bl-1084-prot005-edstest3',
    'merck-gen/eds-tst-bl-1084-bladder-prot005-edstest1',
    'merck-gen/st_eds-tst-bl-1084-prot005-edstest7',
    'merck-gen/fw_eds-tst-bl-1084-prot005-edstest1',
    'merck-gen/fw_eds-tst-bl-1084-prot005-edstest4',
  ];

  const handleSearch = () => {
    // Filter repositories based on search query
    const filtered = mockRepositories.filter(repo => 
      repo.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRepositories(filtered);
    setHasSearched(true);
  };

  const handleUseExistingRepo = () => {
    setUseExistingRepo(true);
    setSearchQuery('');
    setSelectedRepository('');
    setHasSearched(false);
    setRepositories([]);
    setShowDropdown(false);
  };

  const handleRepositorySelect = (repo: string) => {
    setSelectedRepository(repo);
    setShowDropdown(false);
  };
  
  return (
    <div className="bg-background min-h-screen">
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
                Configure repository and environment settings for your project.
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
                  3
                </div>
                <div className="flex-1">
                  <div className="text-foreground font-bold">Project Environments</div>
                  <div className="text-muted-foreground text-xs">Repository setup</div>
                </div>
              </div>

              <div className="h-[2px] bg-border flex-shrink-0" style={{ width: '40px' }}></div>
              
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-border text-muted-foreground font-bold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <div className="text-muted-foreground font-bold">Create Project</div>
                  <div className="text-muted-foreground text-xs">Review and submit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Git Repository Section */}
          <div className="mb-10">
            <h3 className="text-primary mb-4 pb-2 border-b-2 border-primary">Main Git Repository</h3>
            <div className="mt-4">
              {!useExistingRepo ? (
                <>
                  <p className="text-foreground mb-4">
                    The default code repository <span className="font-mono">&lt;&lt;lds-dev-mk0653h-hypercholesterolemia-prot001-test-test-bl&gt;&gt;</span> will be created.
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setIsSettingsModalOpen(true)}
                      className="bg-primary text-primary-foreground px-6 py-2.5 hover:opacity-90 transition-opacity rounded-[var(--radius-button)] cursor-pointer"
                    >
                      View Settings
                    </button>
                    <button
                      onClick={handleUseExistingRepo}
                      className="bg-card text-foreground px-6 py-2.5 border-2 border-border hover:bg-muted transition-colors rounded-[var(--radius-button)] cursor-pointer"
                    >
                      Use Existing Repo
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  {/* Search Section */}
                  <div>
                    <label className="text-foreground mb-2 block">
                      Enter Search Word
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Enter search query..."
                        className="flex-1 bg-input-background border border-border px-3 py-2 text-foreground rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      <button
                        onClick={handleSearch}
                        className="bg-primary text-primary-foreground px-6 py-2.5 hover:opacity-90 transition-opacity rounded-[var(--radius-button)] cursor-pointer flex items-center gap-2"
                      >
                        <Search size={18} />
                        Search
                      </button>
                    </div>
                  </div>

                  {/* Success Message */}
                  {hasSearched && repositories.length > 0 && (
                    <div className="flex items-center gap-2 text-green-600">
                      <Check size={18} />
                      <span className="font-medium">Fetched top matched repositories</span>
                    </div>
                  )}

                  {/* No Results Message */}
                  {hasSearched && repositories.length === 0 && (
                    <div className="text-muted-foreground">
                      No repositories found matching "{searchQuery}"
                    </div>
                  )}

                  {/* Repository Selection */}
                  {hasSearched && repositories.length > 0 && (
                    <div>
                      <label className="text-foreground mb-2 block">
                        Select Repository
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={selectedRepository}
                          onChange={(e) => setSelectedRepository(e.target.value)}
                          onFocus={() => setShowDropdown(true)}
                          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                          placeholder="Select a repository"
                          className="w-full bg-input-background border border-primary px-3 py-2 text-foreground rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                        
                        {/* Dropdown list - only show when focused */}
                        {showDropdown && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-[var(--radius)] max-h-[200px] overflow-y-auto z-10 shadow-lg">
                            {repositories.map((repo, index) => (
                              <div
                                key={repo}
                                onClick={() => handleRepositorySelect(repo)}
                                className={`px-4 py-3 text-foreground cursor-pointer hover:bg-muted transition-colors ${
                                  index !== repositories.length - 1 ? 'border-b border-border' : ''
                                } ${selectedRepository === repo ? 'bg-muted' : ''}`}
                              >
                                {repo}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Back to Default Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setUseExistingRepo(false)}
                      className="text-primary hover:underline cursor-pointer bg-transparent border-0 p-0"
                    >
                      ← Back to default repository
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Imported Libraries Section */}
          <div className="mb-10">
            <h3 className="text-primary mb-4 pb-2 border-b-2 border-primary">Imported Libraries</h3>
            
            <div className="bg-white border border-border rounded-[var(--radius)]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)]">
                    <th className="text-left py-4 px-4 font-bold text-foreground border-r border-r-[#f0f0f0]">Library URI</th>
                    <th className="text-left py-4 px-4 font-bold text-foreground border-r border-r-[#f0f0f0]">Ref Type</th>
                    <th className="text-left py-4 px-4 font-bold text-foreground border-r border-r-[#f0f0f0]">Ref Value</th>
                    <th className="text-left py-4 px-4 font-bold text-foreground border-r border-r-[#f0f0f0]">Service Provider</th>
                    <th className="text-left py-4 px-4 font-bold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0f0f0]">
                    <td className="py-4 px-4 border-r border-r-[#f0f0f0]">
                      <a href="#" className="text-primary underline hover:no-underline">Link</a>
                    </td>
                    <td className="py-4 px-4 text-foreground border-r border-r-[#f0f0f0]">branch</td>
                    <td className="py-4 px-4 text-foreground border-r border-r-[#f0f0f0]">main</td>
                    <td className="py-4 px-4 text-foreground border-r border-r-[#f0f0f0]">github:Enterprise</td>
                    <td className="py-4 px-4">
                      <button className="text-primary hover:underline cursor-pointer">Remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Folder Creation Section - Collapsible and Informational */}
          <div className="mb-10">
            <button
              onClick={() => setIsFolderStructureExpanded(!isFolderStructureExpanded)}
              className="w-full flex items-center justify-between text-primary mb-4 pb-2 border-b-2 border-primary cursor-pointer bg-transparent p-0 hover:opacity-80 transition-opacity"
            >
              <h3 className="text-primary">Folder Structure (Informational)</h3>
              <ChevronDown 
                size={20} 
                className={`text-primary transition-transform ${isFolderStructureExpanded ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {isFolderStructureExpanded && (
              <div className="space-y-6">
                {/* Code Folders - Static Display */}
                <div className="bg-white border border-border">
                  <div className="bg-[rgba(0,0,0,0.02)] border-b border-[#949494]">
                    <div className="flex items-center gap-[12px] pl-[12px] pr-[16px] py-[12px]">
                      <div className="flex-1 text-left">
                        <div className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px]">Code Folders</div>
                      </div>
                    </div>
                  </div>
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
                </div>

                {/* Artifacts Folders - Static Display */}
                <div className="bg-white border border-border">
                  <div className="bg-[rgba(0,0,0,0.02)] border-b border-[#949494]">
                    <div className="flex items-center gap-[12px] pl-[12px] pr-[16px] py-[12px]">
                      <div className="flex-1 text-left">
                        <div className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px]">Artifacts Folders</div>
                      </div>
                    </div>
                  </div>
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
                </div>

                {/* Data Folders - Static Display */}
                <div className="bg-white border border-border">
                  <div className="bg-[rgba(0,0,0,0.02)] border-b border-[#949494]">
                    <div className="flex items-center gap-[12px] pl-[12px] pr-[16px] py-[12px]">
                      <div className="flex-1 text-left">
                        <div className="text-[rgba(0,0,0,0.88)] text-[14px] leading-[22px]">Data Folders</div>
                      </div>
                    </div>
                  </div>
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
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button 
              onClick={() => onNavigate('collaborators-approvers')}
              className="bg-card border border-border text-foreground px-8 py-2.5 hover:bg-muted transition-colors rounded-[var(--radius-button)] cursor-pointer"
            >
              Back
            </button>
            <button 
              onClick={onSubmit}
              className="bg-primary text-primary-foreground px-8 py-2.5 hover:opacity-90 transition-opacity rounded-[var(--radius-button)] cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Repository Settings Modal */}
      <RepositorySettingsModal 
        isOpen={isSettingsModalOpen} 
        onClose={() => setIsSettingsModalOpen(false)} 
      />
    </div>
  );
}