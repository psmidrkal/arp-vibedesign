import { useState } from "react";
import svgPaths from "@/imports/svg-9zpeyuk6ua";
import { User, Mail, MessageSquare, HelpCircle, ChevronRight, AlertCircle, Home, FolderOpen, ClipboardList, Settings } from "lucide-react";
import FormField from "./shared/FormField";
import { toast, ToastProvider } from "./shared/Toast";
import Checkbox from "./shared/Checkbox";
import Radio from "./shared/Radio";

interface NewMilestoneFormProps {
  onNavigate: (screen: 'home' | 'new-milestone' | 'repository-setup' | 'my-studies' | 'my-tasks' | 'admin') => void;
  onNext: (data: any) => void;
  previousScreen?: 'home' | 'new-milestone' | 'repository-setup' | 'my-studies' | 'my-tasks' | 'admin' | null;
}

interface Collaborator {
  email: string;
  username: string;
  role: string;
}

interface Approver {
  therapeuticArea: string;
  type: string;
  name: string;
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

function Input({ placeholder = "" }: { placeholder?: string }) {
  return (
    <input 
      type="text"
      placeholder={placeholder}
      className="w-full bg-input-background border border-border px-3 py-2 text-foreground rounded-[var(--radius)]"
    />
  );
}

function TextArea({ placeholder = "" }: { placeholder?: string }) {
  return (
    <textarea 
      placeholder={placeholder}
      rows={3}
      className="w-full bg-input-background border border-border px-3 py-2 text-foreground rounded-[var(--radius)] resize-none"
    />
  );
}

export default function NewMilestoneForm({ onNavigate, onNext, previousScreen }: NewMilestoneFormProps) {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [approvers, setApprovers] = useState<Approver[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Collaborator form state
  const [collabSearchBy, setCollabSearchBy] = useState('');
  const [collabEmail, setCollabEmail] = useState('');
  const [collabUsername, setCollabUsername] = useState('');
  const [collabRole, setCollabRole] = useState('');
  
  // Approver form state
  const [approverEmail, setApproverEmail] = useState('');
  const [approverUsername, setApproverUsername] = useState('');
  const [approverType, setApproverType] = useState('');
  const [approverName, setApproverName] = useState('');

  // Required field states - PRE-FILLED with dummy data for testing
  const [businessArea, setBusinessArea] = useState('Oncology');
  const [devPrd, setDevPrd] = useState('Development');
  const [indication, setIndication] = useState('Melanoma');
  const [therapeuticArea, setTherapeuticArea] = useState('Oncology');
  const [mkVNumber, setMkVNumber] = useState('MK-3475');
  const [trialType, setTrialType] = useState('Interventional');
  const [protocolNumber, setProtocolNumber] = useState('PN-001');
  const [phase, setPhase] = useState('Phase III');
  const [blindedUnblinded, setBlindedUnblinded] = useState('Blinded');
  const [protocolTitle, setProtocolTitle] = useState('Study of Drug X in Patients');
  const [milestoneName, setMilestoneName] = useState('Database Lock');
  const [milestoneCategory, setMilestoneCategory] = useState('General');

  // Check if all required fields are filled and at least one collaborator and approver
  const isFormValid = businessArea && devPrd && indication && therapeuticArea && 
                      mkVNumber && trialType && protocolNumber && phase && 
                      blindedUnblinded && protocolTitle && milestoneName &&
                      collaborators.length > 0 && approvers.length === 1;

  // Validation messages
  const getValidationMessage = () => {
    if (!formSubmitted) return null;
    
    if (collaborators.length === 0) {
      return "Please add at least one collaborator";
    }
    if (approvers.length === 0) {
      return "Please add exactly one approver";
    }
    return null;
  };

  const validationMessage = getValidationMessage();

  console.log('Form Validation:', {
    businessArea, devPrd, indication, therapeuticArea,
    mkVNumber, trialType, protocolNumber, phase,
    blindedUnblinded, protocolTitle, milestoneName,
    collaboratorsCount: collaborators.length,
    approversCount: approvers.length,
    isFormValid
  });

  return (
    <div className="bg-background min-h-screen">
      <ToastProvider />
      
      {/* Top Navigation Bar */}
      <header className="bg-primary px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconWhite />
          <span className="text-primary-foreground font-bold">ARP</span>
          <nav className="flex gap-6 ml-8">
            <NavItem onClick={() => onNavigate('home')}>
              <div className="flex items-center gap-2">
                <Home size={16} />
                <span>Home</span>
              </div>
            </NavItem>
            <NavItemWithBadge badge={2} onClick={() => onNavigate('my-tasks')}>
              <div className="flex items-center gap-2">
                <ClipboardList size={16} />
                <span>My Tasks</span>
              </div>
            </NavItemWithBadge>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <NavItem onClick={() => onNavigate('admin')}>
            <div className="flex items-center gap-2">
              <Settings size={16} />
              <span>Admin</span>
            </div>
          </NavItem>
          <div className="flex items-center gap-2 text-primary-foreground">
            <User size={16} />
            <span className="text-sm">smidrkal</span>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <Breadcrumbs onNavigate={onNavigate} previousScreen={previousScreen} />

      {/* Main Content */}
      <main className="p-8 bg-muted">
        <div className="max-w-7xl mx-auto bg-card p-8 rounded-[var(--radius-card)]">
          {/* Page Header */}
          <div className="mb-6 pb-6 border-b border-border">
            <div className="mb-6">
              <h1 className="text-[24px]" style={{ color: '#00857C' }}>New Milestone Deliverable Request</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Complete the form below to request a new milestone deliverable setup.
              </p>
            </div>

            {/* Timeline/Progress Steps */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <div className="text-foreground font-bold">Milestone Details</div>
                  <div className="text-muted-foreground text-xs">Basic information and configuration</div>
                </div>
              </div>
              
              <div className="h-[2px] bg-border flex-shrink-0" style={{ width: '60px' }}></div>
              
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-border text-muted-foreground font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <div className="text-muted-foreground font-bold">Milestone Environments</div>
                  <div className="text-muted-foreground text-xs">Repository and environment setup</div>
                </div>
              </div>

              <div className="h-[2px] bg-border flex-shrink-0" style={{ width: '60px' }}></div>
              
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-border text-muted-foreground font-bold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <div className="text-muted-foreground font-bold">Submit Request</div>
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
                  {collaborators.length === 0 && <li>Add at least one collaborator</li>}
                  {approvers.length !== 1 && <li>Add exactly one approver</li>}
                </ul>
              </div>
            </div>
          )}

          {/* Form Grid */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-6">
            {/* Column 1 */}
            <FormField label="Business Area" required>
              <Select 
                options={['Oncology', 'Vaccines', 'Hospital', 'Animal Health']} 
                value={businessArea}
                onChange={setBusinessArea}
                disabled={true}
              />
            </FormField>

            <FormField label="Dev/Prd" required>
              <Select 
                options={['Development', 'Production']} 
                value={devPrd}
                onChange={setDevPrd}
                disabled={true}
              />
            </FormField>

            <FormField label="Indication" required>
              <Select 
                options={['Melanoma', 'Lung Cancer', 'Breast Cancer', 'Prostate Cancer']} 
                value={indication}
                onChange={setIndication}
                disabled={true}
              />
            </FormField>

            <FormField label="Therapeutic Area" required>
              <Select 
                options={['Oncology', 'Cardiovascular', 'Immunology', 'Neuroscience']} 
                value={therapeuticArea}
                onChange={setTherapeuticArea}
                disabled={true}
              />
            </FormField>

            <FormField label="MK/V Number" required>
              <Select 
                options={['MK-3475', 'MK-1234', 'V-920', 'MK-7625']} 
                value={mkVNumber}
                onChange={setMkVNumber}
                disabled={true}
              />
            </FormField>

            <FormField label="Trial Type" required>
              <Select 
                options={['Interventional', 'Observational', 'Expanded Access']} 
                value={trialType}
                onChange={setTrialType}
                disabled={true}
              />
            </FormField>

            <FormField label="Protocol Number" required>
              <Select 
                options={['PN-001', 'PN-002', 'PN-003', 'PN-004']} 
                value={protocolNumber}
                onChange={setProtocolNumber}
                disabled={true}
              />
            </FormField>

            <FormField label="Phase" required>
              <Select 
                options={['Phase I', 'Phase II', 'Phase III', 'Phase IV']} 
                value={phase}
                onChange={setPhase}
                disabled={true}
              />
            </FormField>

            <FormField label="Blinded/Unblinded" required>
              <Select 
                options={['Blinded', 'Unblinded', 'Double-Blind']} 
                value={blindedUnblinded}
                onChange={setBlindedUnblinded}
                disabled={true}
              />
            </FormField>

            <FormField label="Protocol Title" required>
              <Select 
                options={['Study of Drug X in Patients', 'Safety and Efficacy Trial', 'Long-term Follow-up Study']} 
                value={protocolTitle}
                onChange={setProtocolTitle}
                disabled={true}
              />
            </FormField>

            <FormField label="Milestone Name" required>
              <Select 
                options={['Database Lock', 'Final Analysis', 'Interim Analysis', 'Study Completion']} 
                value={milestoneName}
                onChange={setMilestoneName}
                disabled={true}
              />
            </FormField>
          </div>

          {/* Milestone Category */}
          <div className="mt-6">
            <FormField label="Milestone Category" required>
              <div className="flex items-center gap-6">
                {['General', 'Firewalled', 'Stealth'].map((category) => (
                  <Radio 
                    key={category} 
                    name="milestoneCategory"
                    label={category} 
                    value={category} 
                    checked={milestoneCategory === category} 
                    onChange={setMilestoneCategory} 
                  />
                ))}
              </div>
            </FormField>
          </div>

          {/* Milestone Description */}
          <div className="mt-6">
            <FormField label="Milestone Description">
              <div className="flex items-center gap-2 mb-1">
                <HelpCircle size={14} className="text-muted-foreground" />
              </div>
              <TextArea placeholder="Briefly describe the milestone" />
            </FormField>
          </div>

          {/* Milestone Name and Restricted Milestone */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-6 mt-6">
            <FormField label="Milestone Name">
              <Input />
            </FormField>

            <div className="flex items-end">
              <Checkbox label="Restricted Milestone" />
            </div>
          </div>

          {/* Milestone Tags */}
          <div className="mt-6">
            <FormField label="Milestone Tags">
              <Input />
            </FormField>
          </div>

          {/* Milestone Environment and Hardware Tier */}
          <div className="grid grid-cols-2 gap-x-6 mt-6">
            <FormField label="Milestone Environment">
              <Select placeholder="SAS Analytics Pro" />
            </FormField>

            <FormField label="Hardware Tier">
              <Select placeholder="Small +8G" />
            </FormField>
          </div>

          {/* Add Collaborators Section */}
          <div className="mt-10">
            <h3 className="text-primary mb-4 pb-2 border-b-2 border-primary flex items-center gap-1">
              <span className="text-destructive">*</span>
              Add Collaborators
            </h3>
            
            <div className="flex items-end gap-3 mb-6">
              <div className="flex-1">
                <FormField label="Search by :">
                  <Select 
                    options={['Email', 'ISID']} 
                    value={collabSearchBy} 
                    onChange={(value) => {
                      setCollabSearchBy(value);
                      // Clear both fields when changing search type
                      setCollabEmail('');
                      setCollabUsername('');
                    }} 
                  />
                </FormField>
              </div>

              <div className="flex-1">
                <FormField label="">
                  <div className="relative">
                    <select 
                      value={collabEmail}
                      onChange={(e) => setCollabEmail(e.target.value)}
                      disabled={collabSearchBy === 'ISID'}
                      className={`w-full bg-input-background border border-border px-3 py-2 appearance-none text-foreground rounded-[var(--radius)] ${
                        collabSearchBy === 'ISID' ? 'opacity-50 cursor-not-allowed bg-muted' : 'cursor-pointer'
                      }`}
                    >
                      <option value="">Collaborator Email</option>
                      <option value="ARPITTeam@example.com">ARPITTeam@example.com</option>
                      <option value="arpitusers@example.com">arpitusers@example.com</option>
                      <option value="john.doe@example.com">john.doe@example.com</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d={svgPaths.p1d223800} fill="black" fillOpacity="0.45" />
                      </svg>
                    </div>
                  </div>
                </FormField>
              </div>

              <div className="flex-1">
                <FormField label="">
                  <div className="relative">
                    <select 
                      value={collabUsername}
                      onChange={(e) => setCollabUsername(e.target.value)}
                      disabled={collabSearchBy === 'Email'}
                      className={`w-full bg-input-background border border-border px-3 py-2 appearance-none text-foreground rounded-[var(--radius)] ${
                        collabSearchBy === 'Email' ? 'opacity-50 cursor-not-allowed bg-muted' : 'cursor-pointer'
                      }`}
                    >
                      <option value="">Collaborator ISID</option>
                      <option value="ARPITTeam">ARPITTeam</option>
                      <option value="ARPITUsers">ARPITUsers</option>
                      <option value="JDoe">JDoe</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d={svgPaths.p1d223800} fill="black" fillOpacity="0.45" />
                      </svg>
                    </div>
                  </div>
                </FormField>
              </div>

              <div className="flex-1">
                <FormField label="Role :">
                  <Select 
                    options={['Statistician', 'Programmer', 'Data Manager', 'Medical Writer']} 
                    value={collabRole}
                    onChange={setCollabRole}
                  />
                </FormField>
              </div>

              <button 
                onClick={() => {
                  // Add one collaborator at a time - require either email or username based on search by
                  const hasValidData = collabSearchBy === 'Email' 
                    ? (collabEmail && collabRole)
                    : (collabUsername && collabRole);
                    
                  if (hasValidData) {
                    const newCollaborator: Collaborator = {
                      email: collabEmail || 'N/A',
                      username: collabUsername || 'N/A',
                      role: collabRole
                    };
                    setCollaborators([...collaborators, newCollaborator]);
                    // Clear the form
                    setCollabEmail('');
                    setCollabUsername('');
                    setCollabRole('');
                  }
                }}
                className="bg-primary text-primary-foreground px-6 py-2 hover:opacity-90 transition-opacity rounded-[var(--radius-button)] cursor-pointer"
              >
                Add
              </button>
            </div>

            {/* Collaborators Table */}
            {collaborators.length > 0 && (
              <div className="bg-white mt-4">
                <div className="flex">
                  {/* Email Column */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)] py-4 px-4">
                      <p className="font-bold text-foreground">Email</p>
                    </div>
                    {collaborators.map((collab, index) => (
                      <div key={index} className="border-b border-[#f0f0f0] py-4 px-4">
                        <p className="text-foreground">{collab.email}</p>
                      </div>
                    ))}
                  </div>

                  {/* Username Column */}
                  <div className="flex-1 min-w-0 border-l border-l-[#f0f0f0]">
                    <div className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)] py-4 px-4">
                      <p className="font-bold text-foreground">Username</p>
                    </div>
                    {collaborators.map((collab, index) => (
                      <div key={index} className="border-b border-[#f0f0f0] py-4 px-4">
                        <p className="text-foreground">{collab.username}</p>
                      </div>
                    ))}
                  </div>

                  {/* Role Column */}
                  <div className="flex-1 min-w-0 border-l border-l-[#f0f0f0]">
                    <div className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)] py-4 px-4">
                      <p className="font-bold text-foreground">Role</p>
                    </div>
                    {collaborators.map((collab, index) => (
                      <div key={index} className="border-b border-[#f0f0f0] py-4 px-4">
                        <p className="text-foreground">{collab.role}</p>
                      </div>
                    ))}
                  </div>

                  {/* Action Column */}
                  <div className="flex-1 min-w-0 border-l border-l-[#f0f0f0]">
                    <div className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)] py-4 px-4">
                      <p className="font-bold text-foreground">Action</p>
                    </div>
                    {collaborators.map((_, index) => (
                      <div key={index} className="border-b border-[#f0f0f0] py-4 px-4">
                        <button 
                          onClick={() => {
                            setCollaborators(collaborators.filter((_, i) => i !== index));
                          }}
                          className="text-primary hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Add Approver Section */}
          <div className="mt-10">
            <h3 className="text-primary mb-4 pb-2 border-b-2 border-primary flex items-center gap-1">
              <span className="text-destructive">*</span>
              Add Approver
            </h3>
            
            <div className="flex items-end gap-3 mb-6">
              <div className="flex-1">
                <FormField label="Therapeutic Area :">
                  <div className="relative">
                    <input
                      type="text"
                      value={therapeuticArea || ''}
                      disabled
                      className="w-full bg-muted border border-border px-3 py-2 text-foreground rounded-[var(--radius)] cursor-not-allowed opacity-75"
                      placeholder="Select Therapeutic Area above first"
                    />
                  </div>
                </FormField>
              </div>

              <div className="flex-1">
                <FormField label="Approver Type :">
                  <Select 
                    placeholder="Select Approver Type" 
                    options={['Primary Approver', 'Emergency Approver']} 
                    value={approverType}
                    onChange={setApproverType}
                  />
                </FormField>
              </div>

              <div className="flex-1">
                <FormField label="Approver Name :">
                  <Select 
                    placeholder="Select Approver" 
                    options={['Dr. Sarah Johnson', 'Dr. Michael Chen', 'Dr. Emily Rodriguez', 'Dr. David Kim', 'Dr. Lisa Anderson']} 
                    value={approverName}
                    onChange={setApproverName}
                  />
                </FormField>
              </div>

              <button 
                onClick={() => {
                  // Add one approver - only allow one approver total
                  if (therapeuticArea && approverType && approverName && approvers.length === 0) {
                    const newApprover: Approver = {
                      therapeuticArea: therapeuticArea,
                      type: approverType,
                      name: approverName
                    };
                    setApprovers([newApprover]);
                    // Clear the form
                    setApproverType('');
                    setApproverName('');
                  }
                }}
                disabled={!therapeuticArea || approvers.length >= 1}
                className={`px-6 py-2 transition-opacity rounded-[var(--radius-button)] ${
                  therapeuticArea && approvers.length === 0
                    ? 'bg-primary text-primary-foreground hover:opacity-90 cursor-pointer' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                }`}
              >
                Add
              </button>
            </div>

            {/* Approver Table */}
            {approvers.length > 0 && (
              <div className="bg-white mt-4">
                <div className="flex">
                  {/* Therapeutic Area Column */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)] py-4 px-4">
                      <p className="font-bold text-foreground">Therapeutic Area</p>
                    </div>
                    {approvers.map((approver, index) => (
                      <div key={index} className="border-b border-[#f0f0f0] py-4 px-4">
                        <p className="text-foreground">{approver.therapeuticArea}</p>
                      </div>
                    ))}
                  </div>

                  {/* Type Column */}
                  <div className="flex-1 min-w-0 border-l border-l-[#f0f0f0]">
                    <div className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)] py-4 px-4">
                      <p className="font-bold text-foreground">Approver Type</p>
                    </div>
                    {approvers.map((approver, index) => (
                      <div key={index} className="border-b border-[#f0f0f0] py-4 px-4">
                        <p className="text-foreground">{approver.type}</p>
                      </div>
                    ))}
                  </div>

                  {/* Name Column */}
                  <div className="flex-1 min-w-0 border-l border-l-[#f0f0f0]">
                    <div className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)] py-4 px-4">
                      <p className="font-bold text-foreground">Approver Name</p>
                    </div>
                    {approvers.map((approver, index) => (
                      <div key={index} className="border-b border-[#f0f0f0] py-4 px-4">
                        <p className="text-foreground">{approver.name}</p>
                      </div>
                    ))}
                  </div>

                  {/* Action Column */}
                  <div className="flex-1 min-w-0 border-l border-l-[#f0f0f0]">
                    <div className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)] py-4 px-4">
                      <p className="font-bold text-foreground">Action</p>
                    </div>
                    {approvers.map((_, index) => (
                      <div key={index} className="border-b border-[#f0f0f0] py-4 px-4">
                        <button 
                          onClick={() => {
                            setApprovers([]);
                          }}
                          className="text-primary hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Next Button */}
          <div className="flex justify-end mt-8">
            <button 
              onClick={() => {
                setFormSubmitted(true);
                if (isFormValid) {
                  onNext({
                    businessArea,
                    devPrd,
                    indication,
                    therapeuticArea,
                    mkVNumber,
                    trialType,
                    protocolNumber,
                    phase,
                    blindedUnblinded,
                    protocolTitle,
                    milestoneName,
                    milestoneCategory,
                    collaborators,
                    approvers
                  });
                }
              }}
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

          {/* Validation Message */}
          {validationMessage && (
            <div className="mt-4 text-sm text-red-500">
              {validationMessage}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function Breadcrumbs({ onNavigate, previousScreen }: { onNavigate: (screen: 'home' | 'new-milestone' | 'repository-setup' | 'my-studies' | 'my-tasks' | 'admin') => void; previousScreen?: 'home' | 'new-milestone' | 'repository-setup' | 'my-studies' | 'my-tasks' | 'admin' | null; }) {
  // Function to get screen display name
  const getScreenName = (screen: string | null) => {
    switch (screen) {
      case 'my-studies': return 'Milestone Updates';
      case 'my-tasks': return 'My Tasks';
      case 'admin': return 'Admin';
      default: return null;
    }
  };

  const middleScreenName = getScreenName(previousScreen);

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
        
        {/* Show middle screen if coming from my-studies, my-tasks, or admin */}
        {middleScreenName && previousScreen && (
          <>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onNavigate(previousScreen as 'my-studies' | 'my-tasks' | 'admin');
              }}
              className="text-primary hover:underline cursor-pointer"
            >
              {middleScreenName}
            </a>
            <ChevronRight size={14} className="text-muted-foreground" />
          </>
        )}
        
        <span className="text-foreground">Request New Milestone</span>
      </div>
    </div>
  );
}