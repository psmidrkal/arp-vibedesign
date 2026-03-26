import svgPaths from "@/imports/svg-6hwcrc560a";
import { User, ChevronRight, X, ChevronDown, FolderOpen, Home, ClipboardList, Settings, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import EmptyState from "./shared/EmptyState";
import LoadingState from "./shared/LoadingState";
import ErrorState from "./shared/ErrorState";
import SearchBar from "./shared/SearchBar";
import FilterDropdown from "./shared/FilterDropdown";
import ExportButton from "./shared/ExportButton";
import TableHeader from "./shared/TableHeader";
import { toast, ToastProvider } from "./shared/Toast";
import { sortData, searchData, SortConfig } from "@/app/utils/tableUtils";
import { ExportColumn } from "@/app/utils/exportUtils";
import TopNav from "./shared/TopNav";
import RequestSDTMModal from "./RequestSDTMModal";

export interface TeamMember {
  firstName: string;
  lastName: string;
  role: 'Statistician' | 'Programmer' | 'Output Consumer' | 'Project Lead';
  isid?: string;
  email?: string;
}

export interface Study {
  id: string;
  businessArea: string;
  blublType: string;
  therapeuticArea: string;
  mkVNumber: string;
  indication: string;
  protocolNumber: string;
  milestoneName: string;
  milestoneCategory: string;
  status: 'Active' | 'Firewalled';
  insertedDate: string;
  createdBy: string;
  lastUpdateDate?: string;
  updatedBy?: string;
  collaborators: TeamMember[];
  // Additional fields from form
  trialType?: string;
  phase?: string;
  trialTypeSecondary?: string;
  protocolTitle?: string;
  projectDescription?: string;
  visibility?: string;
  projectTags?: string;
  projectEnvironment?: string;
  hardwareTier?: string;
}

// Helper function to generate project name
function generateProjectName(study: Study): string {
  const businessArea = study.businessArea.toLowerCase().replace(/\s+/g, '-');
  const therapeuticArea = study.therapeuticArea.toLowerCase().substring(0, 3);
  const blinding = study.blublType.toLowerCase().includes('blinded') ? 'bl' : 'unbl';
  const mkv = study.mkVNumber.toLowerCase().replace(/\s+/g, '');
  const indication = study.indication.toLowerCase().replace(/\s+/g, '-');
  const protocol = study.protocolNumber.toLowerCase().replace(/\s+/g, '');
  const milestone = study.milestoneName.toLowerCase().replace(/\s+/g, '');
  
  return `${businessArea}-${therapeuticArea}-${blinding}-${mkv}-${indication}-${protocol}-${milestone}`;
}

interface MyStudiesProps {
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin' | 'sdtm-extract') => void;
  studies: Study[];
  onUpdateCollaborators: (studyId: string, newCollaborators: TeamMember[]) => void;
  onSDTMExtractRequest: (study: Study) => void;
  onProjectDetails: (study: Study) => void;
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

// Mock user directory for team member selection
const mockUsers = [
  { isid: 'smidrkal', email: 'smidrkal@merck.com', firstName: 'Katherine', lastName: 'Smidr', department: 'BARDS IT' },
  { isid: 'petrovai', email: 'petrovai@merck.com', firstName: 'Ivan', lastName: 'Petrov', department: 'AMS RIR' },
  { isid: 'brownkr', email: 'brownkr@merck.com', firstName: 'Kevin', lastName: 'Brown', department: 'Clinical Research' },
  { isid: 'chengju', email: 'chengju@merck.com', firstName: 'Julia', lastName: 'Cheng', department: 'BARDS IT' },
  { isid: 'garciamr', email: 'garciamr@merck.com', firstName: 'Maria', lastName: 'Garcia', department: 'BARDS IT' },
  { isid: 'arnoldi', email: 'arnold.elizabeth@merck.com', firstName: 'Elizabeth', lastName: 'Arnold', department: 'BARDS IT' },
  { isid: 'chaudmo', email: 'chaudmo@merck.com', firstName: 'Monica', lastName: 'Chaud', department: 'BARDS IT' },
  { isid: 'smithj', email: 'smith.john@merck.com', firstName: 'John', lastName: 'Smith', department: 'Clinical Research' },
  { isid: 'tengch', email: 'tengch@merck.com', firstName: 'Charles', lastName: 'Teng', department: 'BARDS IT' },
  { isid: 'johnsond', email: 'johnsond@merck.com', firstName: 'David', lastName: 'Johnson', department: 'AMS RIR' },
  { isid: 'wilsonm', email: 'wilsonm@merck.com', firstName: 'Michelle', lastName: 'Wilson', department: 'BARDS IT' },
  { isid: 'andersonp', email: 'andersonp@merck.com', firstName: 'Patricia', lastName: 'Anderson', department: 'Clinical Research' },
  { isid: 'thomasr', email: 'thomasr@merck.com', firstName: 'Robert', lastName: 'Thomas', department: 'BARDS IT' },
  { isid: 'martinl', email: 'martinl@merck.com', firstName: 'Laura', lastName: 'Martin', department: 'AMS RIR' },
  { isid: 'leej', email: 'leej@merck.com', firstName: 'Jennifer', lastName: 'Lee', department: 'Clinical Research' },
  { isid: 'garciac', email: 'garciac@merck.com', firstName: 'Carlos', lastName: 'Garcia', department: 'BARDS IT' },
  { isid: 'rodriguezm', email: 'rodriguezm@merck.com', firstName: 'Maria', lastName: 'Rodriguez', department: 'BARDS IT' },
  { isid: 'hernandezj', email: 'hernandezj@merck.com', firstName: 'Jose', lastName: 'Hernandez', department: 'AMS RIR' },
  { isid: 'lopezs', email: 'lopezs@merck.com', firstName: 'Sofia', lastName: 'Lopez', department: 'Clinical Research' },
  { isid: 'gonzaleza', email: 'gonzaleza@merck.com', firstName: 'Ana', lastName: 'Gonzalez', department: 'BARDS IT' },
];

// Searchable Select Component
function SearchableSelect({
  options = [],
  value = '',
  onChange,
  placeholder = 'Select...',
}: {
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? options.filter(o => o.toLowerCase().includes(query.toLowerCase()))
    : options;

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const handleSelect = (option: string) => {
    onChange?.(option);
    setOpen(false);
    setQuery('');
  };

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={handleOpen}
        className="w-full bg-input-background border border-border px-2.5 py-1.5 rounded-[var(--radius)] text-left flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors text-sm"
      >
        <span className={value ? 'text-foreground' : 'text-muted-foreground'}>
          {value || placeholder}
        </span>
        <ChevronDown size={14} className={`text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute z-50 mt-1 w-full bg-card border border-border rounded-[var(--radius)] shadow-lg overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-2 px-2.5 py-1.5 border-b border-border bg-muted/40">
            <Search size={13} className="text-muted-foreground shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Type to search..."
              className="flex-1 bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground text-sm"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-muted-foreground hover:text-foreground">
                <X size={12} />
              </button>
            )}
          </div>

          {/* Option list */}
          <ul className="max-h-52 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-2.5 py-1.5 text-sm text-muted-foreground">No matches found</li>
            ) : (
              filtered.map(option => (
                <li
                  key={option}
                  onMouseDown={() => handleSelect(option)}
                  className={`px-2.5 py-1.5 text-sm cursor-pointer transition-colors ${
                    option === value
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {option}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

function TeamMembersCell({ 
  study
}: { 
  study: Study;
}) {
  const [showAll, setShowAll] = useState(false);
  
  // Ensure Petr Smidrkal (Project Lead) is always first
  const sortedCollaborators = [...study.collaborators].sort((a, b) => {
    // Project Lead always first
    if (a.role === 'Project Lead' && a.lastName === 'Smidrkal' && a.firstName === 'Petr') return -1;
    if (b.role === 'Project Lead' && b.lastName === 'Smidrkal' && b.firstName === 'Petr') return 1;
    return 0;
  });
  
  const maxVisible = 2;
  const hasMore = sortedCollaborators.length > maxVisible;
  const visibleMembers = showAll ? sortedCollaborators : sortedCollaborators.slice(0, maxVisible);

  return (
    <div className="min-w-[250px]">
      <div className="flex flex-col gap-1">
        {visibleMembers.map((member, idx) => {
          const isProjectLead = member.role === 'Project Lead' && member.lastName === 'Smidrkal' && member.firstName === 'Petr';
          
          return (
            <div 
              key={idx}
              className="text-foreground text-sm"
            >
              <span className={isProjectLead ? 'font-bold' : 'font-medium'}>
                {member.lastName}, {member.firstName}
              </span>
              <span className="text-muted-foreground"> - {member.role}</span>
            </div>
          );
        })}
        
        {!showAll && hasMore && (
          <button
            onClick={() => setShowAll(true)}
            className="text-primary hover:underline text-sm text-left mt-1"
          >
            +{sortedCollaborators.length - maxVisible} more
          </button>
        )}
        
        {showAll && hasMore && (
          <button
            onClick={() => setShowAll(false)}
            className="text-primary hover:underline text-sm text-left mt-1"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default function MyStudies({ onNavigate, studies, onUpdateCollaborators, onSDTMExtractRequest, onProjectDetails }: MyStudiesProps) {
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingStudyId, setEditingStudyId] = useState<string | null>(null);
  const [newCollaborators, setNewCollaborators] = useState<TeamMember[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig | null>({ key: 'insertedDate', direction: 'desc' });
  const [selectedTAs, setSelectedTAs] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showMyMilestonesOnly, setShowMyMilestonesOnly] = useState(false);
  const [sdtmExtractStudy, setSDTMExtractStudy] = useState<Study | null>(null);

  // Current user (in real app, this would come from auth context)
  const currentUser = 'smidrkal';

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter, search, and sort logic
  const processedStudies = () => {
    let filtered = [...studies];

    // Apply "My Milestones Only" filter
    if (showMyMilestonesOnly) {
      filtered = filtered.filter(study => 
        study.createdBy === currentUser || 
        study.collaborators.some(member => `${member.firstName} ${member.lastName}` === currentUser)
      );
    }

    // Apply therapeutic area filter
    if (selectedTAs.length > 0) {
      filtered = filtered.filter(study => selectedTAs.includes(study.therapeuticArea));
    }

    // Apply milestone category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(study => selectedCategories.includes(study.milestoneCategory));
    }

    // Apply search - search through generated project name
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(study => {
        const projectName = generateProjectName(study);
        return projectName.toLowerCase().includes(query);
      });
    }

    // Apply sort
    if (sortConfig) {
      filtered = sortData(filtered, sortConfig);
    }

    return filtered;
  };

  const filteredStudies = processedStudies();

  // Handlers
  const handleSort = (key: string) => {
    setSortConfig(current => {
      if (!current || current.key !== key) {
        return { key, direction: 'asc' };
      }
      if (current.direction === 'asc') {
        return { key, direction: 'desc' };
      }
      return null;
    });
  };

  const handleEditStudyLeads = (studyId: string) => {
    setEditingStudyId(studyId);
    setNewCollaborators(studies.find(study => study.id === studyId)?.collaborators || []);
  };

  const handleSaveStudyLeads = (studyId: string) => {
    onUpdateCollaborators(studyId, newCollaborators);
    setEditingStudyId(null);
    toast.success('Team members updated successfully');
  };

  const handleCancelEdit = () => {
    setEditingStudyId(null);
  };

  // Export columns
  const exportColumns: ExportColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'businessArea', label: 'Business Area' },
    { key: 'blublType', label: 'BL/UBL Type' },
    { key: 'therapeuticArea', label: 'Therapeutic Area' },
    { key: 'mkVNumber', label: 'MK/V Number' },
    { key: 'indication', label: 'Indication' },
    { key: 'protocolNumber', label: 'Protocol Number' },
    { key: 'milestoneName', label: 'Project Name' },
    { key: 'milestoneCategory', label: 'Project Category' },
    { key: 'insertedDate', label: 'Inserted Date' },
    { key: 'createdBy', label: 'Created By' },
    { key: 'status', label: 'Status' },
    { 
      key: 'collaborators', 
      label: 'Project Team Members', 
      format: (val) => Array.isArray(val) 
        ? val.map((m: TeamMember) => `${m.lastName}, ${m.firstName} - ${m.role}`).join('; ') 
        : '' 
    },
  ];

  // Filter options
  const uniqueTAs = Array.from(new Set(studies.map(s => s.therapeuticArea))).sort();
  const taOptions = uniqueTAs.map(ta => ({
    value: ta,
    label: ta,
    count: studies.filter(s => s.therapeuticArea === ta).length
  }));

  const uniqueCategories = Array.from(new Set(studies.map(s => s.milestoneCategory))).sort();
  const categoryOptions = uniqueCategories.map(cat => ({
    value: cat,
    label: cat,
    count: studies.filter(s => s.milestoneCategory === cat).length
  }));

  // Error state
  if (error) {
    return (
      <div className="bg-background min-h-screen">
        <ToastProvider />
        <header className="bg-primary px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconWhite />
            <span className="text-primary-foreground font-bold">ARP</span>
          </div>
        </header>
        <main className="p-8">
          <ErrorState
            type="server"
            onRetry={() => {
              setError(null);
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 800);
            }}
            onGoHome={() => onNavigate('home')}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <ToastProvider />
      <TopNav onNavigate={onNavigate} activeScreen="my-studies" />

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
          <span className="text-foreground">Projects</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-8 bg-muted">
        <div className="max-w-[95%] mx-auto bg-card p-8 rounded-[var(--radius-card)]">
          {/* Page Header with Title and CTA */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-primary text-[24px]">Projects</h1>
              <p className="text-muted-foreground text-sm mt-1">
                View and manage projects across studies.
              </p>
            </div>
            <button
              onClick={() => onNavigate('milestone-details')}
              className="bg-primary text-primary-foreground px-6 py-2.5 hover:opacity-90 transition-opacity rounded-[var(--radius-button)] cursor-pointer"
            >
              Create New Project
            </button>
          </div>

          {isLoading ? (
            <LoadingState rows={5} />
          ) : studies.length === 0 ? (
            <EmptyState
              icon={FolderOpen}
              title="No studies yet"
              description="You haven't created any studies. Get started by creating a new project."
              action={{
                label: "Create New Project",
                onClick: () => onNavigate('milestone-details')
              }}
            />
          ) : (
            <>
              {/* Filters and Search Bar */}
              <div className="flex items-center mb-6 gap-3 flex-wrap">
                <SearchBar
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={setSearchQuery}
                  className="min-w-[300px]"
                />
                <FilterDropdown
                  label="Therapeutic Area"
                  options={taOptions}
                  selectedValues={selectedTAs}
                  onChange={setSelectedTAs}
                />
                <FilterDropdown
                  label="Project Category"
                  options={categoryOptions}
                  selectedValues={selectedCategories}
                  onChange={setSelectedCategories}
                />
              </div>

              {/* Studies Table */}
              {filteredStudies.length === 0 ? (
                <EmptyState
                  icon={FolderOpen}
                  title="No projects match your filters"
                  description="Try adjusting or clearing filters to see more results."
                />
              ) : (
                <>
                  {/* Table with horizontal scroll and sticky columns */}
                  <div className="border border-border rounded-[var(--radius)] overflow-auto">
                    <table className="w-full relative">
                      <thead>
                        <tr className="border-b border-border">
                          <th 
                            className="text-left py-4 px-4 text-foreground sticky left-0 z-20 min-w-[280px]"
                            style={{ backgroundColor: '#F5F5F5' }}
                          >
                            <span className="font-bold">Project Name/Details</span>
                          </th>
                          <TableHeader
                            label="Therapeutic Area"
                            sortable
                            sortDirection={sortConfig?.key === 'therapeuticArea' ? sortConfig.direction : null}
                            onSort={() => handleSort('therapeuticArea')}
                          />
                          <TableHeader
                            label="Project Lead"
                            sortable={false}
                          />
                          <th className="text-left py-4 px-4 text-foreground bg-muted/50 min-w-[250px]">
                            <span className="font-bold">Project Team Members</span>
                          </th>
                          <TableHeader
                            label="Project Category"
                            sortable
                            sortDirection={sortConfig?.key === 'milestoneCategory' ? sortConfig.direction : null}
                            onSort={() => handleSort('milestoneCategory')}
                          />
                          <TableHeader
                            label="Submitted Date"
                            sortable
                            sortDirection={sortConfig?.key === 'insertedDate' ? sortConfig.direction : null}
                            onSort={() => handleSort('insertedDate')}
                          />
                          <th className="text-left py-4 px-4 text-foreground bg-muted/50">
                            <span className="font-bold">Last Update Date</span>
                          </th>
                          <th className="text-left py-4 px-4 text-foreground bg-muted/50 min-w-[150px]">
                            <span className="font-bold">SDTM Extract</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredStudies.map((study, index) => {
                          // Determine solid background color for sticky column
                          const stickyBgColor = index % 2 === 0 ? '#FFFFFF' : '#FCFCFC';
                          
                          return (
                            <tr 
                              key={study.id} 
                              className={`border-b border-border transition-colors ${
                                index % 2 === 0 
                                  ? 'bg-card hover:bg-muted/20' 
                                  : 'bg-muted/10 hover:bg-muted/30'
                              }`}
                            >
                              <td 
                                className="py-4 px-4 align-top sticky left-0 z-10 min-w-[280px]"
                                style={{ 
                                  backgroundColor: stickyBgColor,
                                  boxShadow: '2px 0 4px rgba(0,0,0,0.05)' 
                                }}
                              >
                                <button
                                  onClick={() => onProjectDetails(study)}
                                  className="text-primary font-mono text-sm hover:underline cursor-pointer text-left"
                                >
                                  {generateProjectName(study)}
                                </button>
                              </td>
                              <td className="py-4 px-4 text-foreground align-top">{study.therapeuticArea}</td>
                              <td className="py-4 px-4 text-foreground align-top">
                                {study.collaborators.find(member => member.role === 'Project Lead')?.lastName}, 
                                {study.collaborators.find(member => member.role === 'Project Lead')?.firstName}
                              </td>
                              <td className="py-4 px-4 align-top min-w-[250px]">
                                <TeamMembersCell
                                  study={study}
                                />
                              </td>
                              <td className="py-4 px-4 text-foreground align-top">{study.milestoneCategory}</td>
                              <td className="py-4 px-4 text-foreground align-top">{study.insertedDate}</td>
                              <td className="py-4 px-4 text-foreground align-top">{study.lastUpdateDate || '-'}</td>
                              <td className="py-4 px-4 align-top min-w-[150px]">
                                <button
                                  onClick={() => study.milestoneCategory !== 'Stealth' && setSDTMExtractStudy(study)}
                                  disabled={study.milestoneCategory === 'Stealth'}
                                  className={`px-4 py-2 rounded-[var(--radius-button)] transition-opacity ${
                                    study.milestoneCategory === 'Stealth'
                                      ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                                      : 'bg-primary text-primary-foreground hover:opacity-90 cursor-pointer'
                                  }`}
                                  title={study.milestoneCategory === 'Stealth' ? 'SDTM Extract not available for Stealth projects' : 'Extract SDTM data'}
                                >
                                  Extract SDTM
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Summary Info */}
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-foreground">
                      Showing {filteredStudies.length} of {studies.length} studies
                    </span>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card py-4 text-center text-sm text-muted-foreground border-t border-border">
        Copyright © 2025 Merck & Co., Inc., Rahway, NJ, USA and its affiliates. All rights reserved.\n        </footer>

      {/* SDTM Extract Modal */}
      {sdtmExtractStudy && (
        <RequestSDTMModal
          study={sdtmExtractStudy}
          onClose={() => setSDTMExtractStudy(null)}
          onConfirm={() => {
            onSDTMExtractRequest(sdtmExtractStudy);
            setSDTMExtractStudy(null);
            toast.success('SDTM extract request submitted successfully');
          }}
        />
      )}
    </div>
  );
}