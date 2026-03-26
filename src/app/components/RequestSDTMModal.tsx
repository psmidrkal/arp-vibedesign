import { X } from "lucide-react";
import { Study } from "./MyStudies";

interface RequestSDTMModalProps {
  study?: Study;
  onClose: () => void;
  onConfirm: (data?: {
    arpMilestone: string;
    dataLifecycle: string;
    maskedBlinded: string;
    studyLifecycle: string;
    mkVNumber: string;
    protocolNumber: string;
    model: string;
    sdtmVersion: string;
    stageNumber: string;
    schemaName: string;
  }) => void;
}

export default function RequestSDTMModal({ study, onClose, onConfirm }: RequestSDTMModalProps) {
  // Pre-filled data based on study if provided
  const formData = study ? {
    arpMilestone: 'Tst',
    dataLifecycle: 'Prod Preview',
    maskedBlinded: study.blublType.toLowerCase().includes('blinded') ? 'Masked & Blinded' : 'Unmasked & Unblinded',
    studyLifecycle: study.status,
    mkVNumber: study.mkVNumber,
    protocolNumber: study.protocolNumber,
    model: 'sdtm',
    sdtmVersion: '3.4',
    stageNumber: '0',
    schemaName: `${study.mkVNumber}-${study.protocolNumber}_sdtm34_0`,
  } : {
    arpMilestone: 'Tst',
    dataLifecycle: 'Prod Preview',
    maskedBlinded: 'Masked & Blinded',
    studyLifecycle: 'Active',
    mkVNumber: '6652',
    protocolNumber: '003_tst2',
    model: 'sdtm',
    sdtmVersion: '3.4',
    stageNumber: '0',
    schemaName: '6652-003_tst2_sdtm34_0',
  };

  const handleSubmit = () => {
    onConfirm(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div 
        className="bg-card rounded-[var(--radius-card)] max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: 'var(--elevation-sm)' }}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-primary" style={{ fontSize: 'var(--text-h3)' }}>
            Request New SDTM Data Extract
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-6">
          {/* Top Section - 4 fields in 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* ARP Milestone Deliverable */}
            <div>
              <label className="block text-foreground mb-2">
                ARP Milestone Deliverable (Tst/Prod)
              </label>
              <div className="relative">
                <select
                  value={formData.arpMilestone}
                  disabled
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed appearance-none pr-10"
                >
                  <option value="Tst">Tst</option>
                  <option value="Prod">Prod</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Data Lifecycle */}
            <div>
              <label className="block text-foreground mb-2">
                Data Lifecycle
              </label>
              <div className="relative">
                <select
                  value={formData.dataLifecycle}
                  disabled
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed appearance-none pr-10"
                >
                  <option value="Prod Preview">Prod Preview</option>
                  <option value="First Preview">First Preview</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Masked/Blinded */}
            <div>
              <label className="block text-foreground mb-2">
                Masked/Blinded
              </label>
              <div className="relative">
                <select
                  value={formData.maskedBlinded}
                  disabled
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed appearance-none pr-10"
                >
                  <option value="Masked & Blinded">Masked & Blinded</option>
                  <option value="Unmasked & Unblinded">Unmasked & Unblinded</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Study Lifecycle */}
            <div>
              <label className="block text-foreground mb-2">
                Study Lifecycle
              </label>
              <div className="relative">
                <select
                  value={formData.studyLifecycle}
                  disabled
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed appearance-none pr-10"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Study Details Section */}
          <div className="mb-6">
            <h3 
              className="text-foreground mb-4 pb-2 border-b-2 border-primary" 
              style={{ fontSize: 'var(--text-h4)' }}
            >
              Study Details
            </h3>

            {/* First Row: MKN Number, Protocol Number, Model */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* MK/V Number */}
              <div>
                <label className="block text-foreground mb-2">
                  MK/V Number
                </label>
                <input
                  type="text"
                  value={formData.mkVNumber}
                  disabled
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed"
                />
              </div>

              {/* Protocol Number */}
              <div>
                <label className="block text-foreground mb-2">
                  Protocol Number
                </label>
                <input
                  type="text"
                  value={formData.protocolNumber}
                  disabled
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed"
                />
              </div>

              {/* Model */}
              <div>
                <label className="block text-foreground mb-2">
                  Model
                </label>
                <div className="relative">
                  <select
                    value={formData.model}
                    disabled
                    className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed appearance-none pr-10"
                  >
                    <option value="sdtm">sdtm</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: SDTM Version, Stage Number */}
            <div className="grid grid-cols-3 gap-4">
              {/* SDTM Version */}
              <div>
                <label className="block text-foreground mb-2">
                  SDTM Version
                </label>
                <div className="relative">
                  <select
                    value={formData.sdtmVersion}
                    disabled
                    className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed appearance-none pr-10"
                  >
                    <option value="3.4">3.4</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stage Number */}
              <div>
                <label className="block text-foreground mb-2">
                  Stage Number
                </label>
                <input
                  type="text"
                  value={formData.stageNumber}
                  disabled
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Matching SDTM Schema Section */}
          <div className="mb-6">
            <label className="block text-foreground mb-3">
              Matching SDTM Schema
            </label>
            <div className="border border-border rounded-[var(--radius)] p-4">
              <div className="mb-2">
                <span className="text-foreground font-medium">Schema Name</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="schema-option"
                  name="schema"
                  checked
                  disabled
                  className="w-4 h-4 accent-primary cursor-not-allowed"
                />
                <label htmlFor="schema-option" className="text-foreground cursor-not-allowed">
                  {formData.schemaName}
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-card border-t border-border px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-[var(--radius-button)] border border-border bg-card text-foreground hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-[var(--radius-button)] bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Request Extract
          </button>
        </div>
      </div>
    </div>
  );
}