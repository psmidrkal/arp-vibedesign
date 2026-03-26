import { useState, useMemo } from "react";
import svgPaths from "@/imports/svg-9zpeyuk6ua";
import { User, Home, ClipboardList, Settings, ChevronRight, HelpCircle } from "lucide-react";
import FormField from "./shared/FormField";
import Radio from "./shared/Radio";
import Checkbox from "./shared/Checkbox";
import TopNav from "./shared/TopNav";
import { ToastProvider } from "./shared/Toast";

interface MilestoneDetailsProps {
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin') => void;
  onNext: (data: any) => void;
  previousScreen?: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin' | null;
  initialData?: any;
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

function Breadcrumbs({ onNavigate, previousScreen }: { onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin') => void; previousScreen?: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'my-tasks' | 'admin' | null }) {
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
        <span className="text-foreground">Create New Project</span>
      </div>
    </div>
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

function Input({ placeholder = "", value = "", onChange, disabled = false }: { placeholder?: string; value?: string; onChange?: (value: string) => void; disabled?: boolean }) {
  return (
    <input 
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      className={`w-full bg-input-background border border-border px-3 py-2 text-foreground rounded-[var(--radius)] ${
        disabled ? 'opacity-60 cursor-not-allowed bg-muted' : ''
      }`}
    />
  );
}

function TextArea({ placeholder = "", value = "", onChange, disabled = false, maxLength }: { placeholder?: string; value?: string; onChange?: (value: string) => void; disabled?: boolean; maxLength?: number }) {
  return (
    <div className="relative">
      <textarea 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        maxLength={maxLength}
        rows={3}
        className={`w-full bg-input-background border border-border px-3 py-2 text-foreground rounded-[var(--radius)] resize-none ${
          disabled ? 'opacity-60 cursor-not-allowed bg-muted' : ''
        }`}
      />
      {maxLength && (
        <div className="absolute bottom-2 right-3 text-xs text-muted-foreground">
          {value.length} / {maxLength}
        </div>
      )}
    </div>
  );
}

export default function MilestoneDetails({ onNavigate, onNext, previousScreen, initialData }: MilestoneDetailsProps) {
  // All fields are PRE-FILLED and DISABLED (non-editable)
  const [businessArea, setBusinessArea] = useState(initialData?.businessArea || 'Epidemiology');
  const [trialType, setTrialType] = useState(initialData?.trialType || '1st');
  const [therapeuticArea, setTherapeuticArea] = useState(initialData?.therapeuticArea || 'oncology');
  const [mkVNumber, setMkVNumber] = useState(initialData?.mkVNumber || 'mk3475');
  const [indication, setIndication] = useState(initialData?.indication || 'bladder');
  const [protocolNumber, setProtocolNumber] = useState(initialData?.protocolNumber || 'prot057');
  const [phase, setPhase] = useState(initialData?.phase || 'PHASE III TRIAL');
  const [trialTypeSecondary, setTrialTypeSecondary] = useState(initialData?.trialTypeSecondary || 'ALCOHOL EFFECT');
  const [protocolTitle, setProtocolTitle] = useState(initialData?.protocolTitle || 'Pgm');
  const [milestoneName, setMilestoneName] = useState(initialData?.milestoneName || 'test16');
  const [blublType, setBlublType] = useState(initialData?.blublType || 'Blinded');
  const [milestoneCategory, setMilestoneCategory] = useState(initialData?.milestoneCategory || 'General');
  const [projectDescription, setProjectDescription] = useState(initialData?.projectDescription || '');
  const [visibility, setVisibility] = useState(initialData?.visibility || 'private');
  const [projectTags, setProjectTags] = useState(initialData?.projectTags || 'Int, EPI, oncology, mk3475, bladder, prot057, PHASE III TRIAL, ALCOHOL EFFECT, Pgm, test16, Blinded, General');
  const [projectEnvironment, setProjectEnvironment] = useState(initialData?.projectEnvironment || 'SAS Analytics Pro');
  const [hardwareTier, setHardwareTier] = useState(initialData?.hardwareTier || 'small-16G');

  // Auto-generate project name based on fields
  // Format: {businessArea}-{trialType}-{bl/unbl}-{mkVNumber}-{indication}-{protocolNumber}-{milestoneName}
  const generatedProjectName = useMemo(() => {
    const businessAreaShort = businessArea.toLowerCase().substring(0, 3);
    const trialTypeShort = trialType.toLowerCase();
    const blType = blublType.toLowerCase().includes('blinded') ? 'bl' : 'unbl';
    const mkv = mkVNumber.toLowerCase().replace(/\s+/g, '');
    const ind = indication.toLowerCase().replace(/\s+/g, '-');
    const prot = protocolNumber.toLowerCase().replace(/\s+/g, '');
    const milestone = milestoneName.toLowerCase().replace(/\s+/g, '');
    
    return `${businessAreaShort}-${trialTypeShort}-${blType}-${mkv}-${ind}-${prot}-${milestone}`;
  }, [businessArea, trialType, blublType, mkVNumber, indication, protocolNumber, milestoneName]);

  // Check if all required fields are filled
  const isFormValid = businessArea && trialType && therapeuticArea && mkVNumber && 
                      indication && protocolNumber && phase && trialTypeSecondary && 
                      protocolTitle && milestoneName && blublType && milestoneCategory;

  const handleNext = () => {
    if (isFormValid) {
      onNext({
        businessArea,
        trialType,
        therapeuticArea,
        mkVNumber,
        indication,
        protocolNumber,
        phase,
        trialTypeSecondary,
        protocolTitle,
        milestoneName,
        blublType,
        milestoneCategory,
        projectDescription,
        visibility,
        projectTags,
        projectEnvironment,
        hardwareTier,
        generatedProjectName
      });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <ToastProvider />
      <TopNav onNavigate={onNavigate} />

      {/* Breadcrumbs */}
      <Breadcrumbs onNavigate={onNavigate} previousScreen={previousScreen} />

      {/* Main Content */}
      <main className="p-8 bg-muted">
        <div className="max-w-7xl mx-auto bg-card p-8 rounded-[var(--radius-card)]">
          {/* Page Header */}
          <div className="mb-6 pb-6 border-b border-border">
            <div className="mb-6">
              <h1 className="text-[24px]" style={{ color: '#00857C' }}>New Project Creation</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Complete the form below to create a new project setup.
              </p>
            </div>

            {/* Timeline/Progress Steps */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <div className="text-foreground font-bold">Project Details</div>
                  <div className="text-muted-foreground text-xs">Basic information</div>
                </div>
              </div>
              
              <div className="h-[2px] bg-border flex-shrink-0" style={{ width: '40px' }}></div>
              
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-border text-muted-foreground font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <div className="text-muted-foreground font-bold">Project Team Members</div>
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

          {/* Form Grid */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-6">
            {/* Row 1 */}
            <FormField label="Business Area" required>
              <Input 
                placeholder="Business Area" 
                value={businessArea}
                onChange={setBusinessArea}
                disabled={true}
              />
            </FormField>

            <FormField label="TrialType" required>
              <Input 
                placeholder="TrialType" 
                value={trialType}
                onChange={setTrialType}
                disabled={true}
              />
            </FormField>

            <div></div>

            {/* Row 2 */}
            <FormField label="Therapeutic Area" required>
              <Input 
                placeholder="Therapeutic Area" 
                value={therapeuticArea}
                onChange={setTherapeuticArea}
                disabled={true}
              />
            </FormField>

            <FormField label="MK/V Number" required>
              <Input 
                placeholder="MK/V Number" 
                value={mkVNumber}
                onChange={setMkVNumber}
                disabled={true}
              />
            </FormField>

            <FormField label="Indication" required>
              <Input 
                placeholder="Indication" 
                value={indication}
                onChange={setIndication}
                disabled={true}
              />
            </FormField>

            {/* Row 3 */}
            <FormField label="Protocol Number" required>
              <Input 
                placeholder="Protocol Number" 
                value={protocolNumber}
                onChange={setProtocolNumber}
                disabled={true}
              />
            </FormField>

            <FormField label="Phase" required>
              <Input 
                placeholder="Phase" 
                value={phase}
                onChange={setPhase}
                disabled={true}
              />
            </FormField>

            <FormField label="Trial Type" required>
              <Input 
                placeholder="Trial Type" 
                value={trialTypeSecondary}
                onChange={setTrialTypeSecondary}
                disabled={true}
              />
            </FormField>

            {/* Row 4 */}
            <FormField label="Protocol Title">
              <Input 
                placeholder="Protocol Title" 
                value={protocolTitle}
                onChange={setProtocolTitle}
                disabled={true}
              />
            </FormField>

            <FormField label="Milestone Name" required>
              <div className="relative">
                <Input 
                  placeholder="Milestone Name" 
                  value={milestoneName}
                  onChange={setMilestoneName}
                  disabled={true}
                />
                <div className="absolute bottom-2 right-3 text-xs text-muted-foreground">
                  0 / 2700
                </div>
              </div>
            </FormField>

            <FormField label="Blinded/Unblinded" required>
              <Input 
                placeholder="Blinded/Unblinded" 
                value={blublType}
                onChange={setBlublType}
                disabled={true}
              />
            </FormField>
          </div>

          {/* Project Category - ONLY EDITABLE FIELD */}
          <div className="mt-6">
            <FormField label="Project Category" required>
              <div className="flex items-center gap-6">
                {['General', 'Firewalled', 'Stealth'].map((category) => (
                  <Radio 
                    key={category} 
                    name="milestoneCategory"
                    label={category}
                    checked={milestoneCategory === category}
                    onChange={() => setMilestoneCategory(category)}
                  />
                ))}
              </div>
            </FormField>
          </div>

          {/* Project Description */}
          <div className="mt-6">
            <FormField label="Project Description">
              <div className="flex items-center gap-2 mb-1">
                <HelpCircle size={14} className="text-muted-foreground" />
              </div>
              <TextArea 
                placeholder="Briefly describe the project" 
                value={projectDescription}
                onChange={setProjectDescription}
                disabled={true}
                maxLength={2700}
              />
            </FormField>
          </div>

          {/* Auto-Generated Project Name */}
          <div className="mt-6">
            <FormField label="Project Name">
              <div className="relative">
                <Input 
                  value={generatedProjectName}
                  disabled={true}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-green-600">
                  [Extension=status]
                </div>
              </div>
            </FormField>
          </div>

          {/* Project Tags */}
          <div className="mt-6">
            <FormField label="Project Tags">
              <Input 
                value={projectTags}
                onChange={setProjectTags}
                disabled={true}
              />
            </FormField>
          </div>

          {/* Project Environment and Hardware Tier */}
          <div className="grid grid-cols-2 gap-x-6 mt-6">
            <FormField label="Project Environment">
              <Input 
                value={projectEnvironment}
                onChange={setProjectEnvironment}
                disabled={true}
              />
            </FormField>

            <FormField label="Hardware Tier">
              <Input 
                value={hardwareTier}
                onChange={setHardwareTier}
                disabled={true}
              />
            </FormField>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
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
      </main>
    </div>
  );
}