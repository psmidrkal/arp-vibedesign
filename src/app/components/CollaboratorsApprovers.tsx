import svgPaths from "@/imports/svg-9zpeyuk6ua";
import { ChevronRight, AlertCircle, X } from "lucide-react";
import FormField from "./shared/FormField";
import { toast, ToastProvider } from "./shared/Toast";
import { useState } from "react";
import TopNav from "./shared/TopNav";

interface CollaboratorsApproversProps {
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin') => void;
  onNext: (data: any) => void;
  onBack: () => void;
  previousScreen?: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin' | null;
  initialData: any;
}

interface TeamMember {
  firstName: string;
  lastName: string;
  role: 'Statistician' | 'Programmer' | 'Output Consumer' | 'Project Lead';
}

// Mock user directory - maps email/ISID to user info
const USER_DIRECTORY: Record<string, { firstName: string; lastName: string; email: string; isid: string }> = {
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
};

function Select({ placeholder = "Select", options = [], value = "", onChange, disabled = false }: { placeholder?: string; options?: string[]; value?: string; onChange?: (value: string) => void; disabled?: boolean }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={`w-full bg-input-background border border-border px-3 py-2 appearance-none text-foreground rounded-[var(--radius)] ${
          disabled ? 'opacity-60 cursor-not-allowed bg-muted' : 'cursor-pointer'
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d={svgPaths.p1d223800} fill="black" fillOpacity="0.45" />
        </svg>
      </div>
    </div>
  );
}

export default function CollaboratorsApprovers({ onNavigate, onNext, onBack, initialData }: CollaboratorsApproversProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialData?.teamMembers || []);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Team member form state
  const [searchBy, setSearchBy] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectedISID, setSelectedISID] = useState('');
  const [role, setRole] = useState<TeamMember['role'] | ''>('');

  const isFormValid = teamMembers.length > 0;

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
    const isDuplicate = teamMembers.some(
      member => member.firstName === userInfo.firstName && member.lastName === userInfo.lastName
    );

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

  const handleNext = () => {
    setFormSubmitted(true);
    if (isFormValid) {
      onNext({ teamMembers });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <ToastProvider />
      <TopNav onNavigate={onNavigate} />

      {/* Breadcrumbs */}
      <div className="bg-card px-6 py-3 border-b border-border">
        <div className="flex items-center gap-2 text-sm">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="text-primary hover:underline cursor-pointer"
          >
            Home
          </a>
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="text-foreground">Create New Project</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-8 bg-muted">
        <div className="max-w-7xl mx-auto bg-card p-8 rounded-[var(--radius-card)]">

          {/* Page Header */}
          <div className="mb-6 pb-6 border-b border-border">
            <div className="mb-6">
              <h1 className="text-[24px]" style={{ color: '#00857C' }}>New Project Creation</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Add project team members for your project.
              </p>
            </div>

            {/* Progress Steps */}
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
                  2
                </div>
                <div className="flex-1">
                  <div className="text-foreground font-bold">Project Team Members</div>
                  <div className="text-muted-foreground text-xs">Add team members</div>
                </div>
              </div>

              <div className="h-[2px] bg-border flex-shrink-0" style={{ width: '40px' }}></div>

              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-border text-muted-foreground font-bold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <div className="text-muted-foreground font-bold">Project Environments</div>
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

          <div className="flex justify-end mb-6">
            <span className="text-destructive text-sm">* Required Fields</span>
          </div>

          {/* Validation Alert */}
          {formSubmitted && !isFormValid && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive rounded-[var(--radius)] flex items-start gap-3">
              <AlertCircle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-destructive font-bold mb-1">Please complete the following requirements:</p>
                <ul className="text-destructive text-sm list-disc list-inside space-y-1">
                  {teamMembers.length === 0 && <li>Add at least one project team member</li>}
                </ul>
              </div>
            </div>
          )}

          {/* Add Project Team Members Section */}
          <div className="mt-6">
            <h3 className="text-primary mb-4 pb-2 border-b-2 border-primary flex items-center gap-1">
              <span className="text-destructive">*</span>
              Add Project Team Members
            </h3>

            <div className="flex items-end gap-3 mb-6">
              <div className="w-32">
                <FormField label="Search By:">
                  <Select
                    placeholder="Select"
                    options={['Email', 'ISID']}
                    value={searchBy}
                    onChange={(value) => {
                      setSearchBy(value);
                      setSelectedEmail('');
                      setSelectedISID('');
                    }}
                  />
                </FormField>
              </div>

              <div className="flex-1">
                <FormField label="">
                  <Select
                    placeholder="Select Email"
                    options={[
                      'arpitteam@example.com',
                      'arpitusers@example.com',
                      'john.doe@example.com',
                      'sarah.smith@example.com',
                      'michael.chen@example.com'
                    ]}
                    value={selectedEmail}
                    onChange={setSelectedEmail}
                    disabled={searchBy !== 'Email'}
                  />
                </FormField>
              </div>

              <div className="flex-1">
                <FormField label="">
                  <Select
                    placeholder="Select ISID"
                    options={[
                      'ARPITTeam',
                      'ARPITUsers',
                      'JDoe',
                      'SSmith',
                      'MChen'
                    ]}
                    value={selectedISID}
                    onChange={setSelectedISID}
                    disabled={searchBy !== 'ISID'}
                  />
                </FormField>
              </div>

              <div className="flex-1">
                <FormField label="Role:">
                  <Select
                    placeholder="Select Role"
                    options={['Statistician', 'Programmer', 'Output Consumer', 'Project Lead']}
                    value={role}
                    onChange={(value) => setRole(value as TeamMember['role'])}
                  />
                </FormField>
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

            {/* Project Team Members Table */}
            {teamMembers.length > 0 && (
              <div className="bg-white mt-6 border border-border rounded-[var(--radius)] overflow-hidden">
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
                      <th className="text-left py-4 px-4">
                        <span className="font-bold text-foreground">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member, index) => (
                      <tr key={index} className="border-b border-border last:border-b-0">
                        <td className="py-4 px-4 text-foreground">{member.firstName}</td>
                        <td className="py-4 px-4 text-foreground">{member.lastName}</td>
                        <td className="py-4 px-4 text-foreground">{member.role}</td>
                        <td className="py-4 px-4">
                          <button
                            onClick={() => handleRemoveMember(index)}
                            className="text-destructive hover:text-destructive/80 flex items-center gap-1"
                          >
                            <X size={16} />
                            <span className="text-sm">Remove</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {teamMembers.length > 0 && (
              <p className="text-muted-foreground text-sm mt-3">
                Total team members: {teamMembers.length}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4 mt-8">
            <button
              onClick={onBack}
              className="bg-card border border-border text-foreground px-8 py-2.5 hover:bg-muted transition-colors rounded-[var(--radius-button)] cursor-pointer"
            >
              Back
            </button>
            <div className="flex gap-4">
              <button
                onClick={() => onNavigate('home')}
                className="bg-card border border-border text-foreground px-8 py-2.5 hover:bg-muted transition-colors rounded-[var(--radius-button)] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleNext}
                className={`px-8 py-2.5 transition-opacity rounded-[var(--radius-button)] ${
                  isFormValid
                    ? 'bg-primary text-primary-foreground hover:opacity-90 cursor-pointer'
                    : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                }`}
                disabled={!isFormValid}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
