import { X } from "lucide-react";
import { Study } from "./MyStudies";

interface SDTMExtractModalProps {
  study: Study;
  onClose: () => void;
  onConfirm: () => void;
}

export default function SDTMExtractModal({ study, onClose, onConfirm }: SDTMExtractModalProps) {
  // Generate schema name based on study details
  const schemaName = `${study.mkVNumber}-${study.protocolNumber}_sdtm34_0`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div 
        className="bg-card rounded-[var(--radius-card)] max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: 'var(--elevation-sm)' }}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-primary" style={{ fontSize: 'var(--text-h3)' }}>
            Request SDTM Extract
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
          {/* Study Details Section */}
          <div className="mb-6">
            <h3 
              className="text-foreground mb-4 pb-2 border-b border-border" 
              style={{ fontSize: 'var(--text-h4)' }}
            >
              Study Details
            </h3>

            {/* First Row: MKN Number, Protocol Number, Model */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* MKN Number */}
              <div>
                <label className="block text-foreground mb-2">
                  MKN Number
                </label>
                <input
                  type="text"
                  value={study.mkVNumber}
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
                  value={study.protocolNumber}
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
                    value="sdtm"
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
                    value="3.4"
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
                <div className="relative">
                  <select
                    value="0"
                    disabled
                    className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-muted text-foreground cursor-not-allowed appearance-none pr-10"
                  >
                    <option value="0">0</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
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
                  {schemaName}
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
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-6 py-2.5 rounded-[var(--radius-button)] bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Request Extract
          </button>
        </div>
      </div>
    </div>
  );
}
