import { useState, useRef, useEffect } from "react";
import { X, Info } from "lucide-react";
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
    selectedTables: string[];
    mountProjects: string[];
  }) => void;
}

const SDTM_TABLES = ['cm', 'co', 'dm', 'ds', 'ec', 'ex'];

// Values sourced from existing app screens (App, Admin, MilestoneDetails, NewMilestoneForm)
const MKV_OPTIONS = [
  '1084a',
  '2095b',
  '3456c',
  '4567e',
  '7890d',
  'mk3475',
  'MK-3475',
  'MK-8900',
  'V999',
];
const PROTOCOL_OPTIONS = [
  'prot005',
  'prot006',
  'prot007',
  'prot008',
  'prot009',
  'prot057',
  'PN-001',
  'PROT-001',
  'PROT-002',
  'PROT-003',
  'PROT-004',
];
const DATA_LIFECYCLE_OPTIONS = ['Prod Preview', 'First Preview'];
const MASKED_BLINDED_OPTIONS = ['Masked & Blinded', 'Unmasked & Unblinded'];
const STUDY_LIFECYCLE_OPTIONS = ['Active', 'Inactive', 'DBL (Locked)', 'CSR (Locked)', 'Firewalled'];
const SDTM_VERSION_OPTIONS = ['3.4', '3.3', '3.2'];
const STAGE_OPTIONS = Array.from({ length: 16 }, (_, i) => String(i));

function Chevron() {
  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

interface SearchableComboboxProps {
  value: string;
  options: string[];
  onChange: (val: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

function SearchableCombobox({ value, options, onChange, disabled, placeholder }: SearchableComboboxProps) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setQuery(value); }, [value]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const filtered = query.length >= 3
    ? options.filter(o => o.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleInputChange = (val: string) => {
    setQuery(val);
    setOpen(val.length >= 3);
    if (val !== value) onChange('');
  };

  const handleSelect = (opt: string) => {
    setQuery(opt);
    onChange(opt);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        value={query}
        onChange={e => handleInputChange(e.target.value)}
        disabled={disabled}
        placeholder={disabled ? '' : (placeholder ?? 'Type 3+ characters to search...')}
        className={`w-full border border-border rounded-[var(--radius)] px-3 py-2 transition-colors ${
          disabled ? 'bg-muted text-foreground cursor-not-allowed' : 'bg-background text-foreground'
        }`}
        autoComplete="off"
      />
      {open && filtered.length > 0 && (
        <ul className="absolute z-50 top-full left-0 w-full mt-1 bg-card border border-border rounded-[var(--radius)] shadow-md max-h-48 overflow-y-auto">
          {filtered.map(opt => (
            <li
              key={opt}
              onMouseDown={() => handleSelect(opt)}
              className="px-3 py-2 text-sm text-foreground cursor-pointer hover:bg-muted"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
      {open && filtered.length === 0 && query.length >= 3 && (
        <div className="absolute z-50 top-full left-0 w-full mt-1 bg-card border border-border rounded-[var(--radius)] shadow-md px-3 py-2 text-sm text-muted-foreground">
          No matches found
        </div>
      )}
    </div>
  );
}

function selectCls(enabled: boolean) {
  return `w-full border border-border rounded-[var(--radius)] px-3 py-2 appearance-none pr-10 transition-colors ${
    enabled ? 'bg-background text-foreground' : 'bg-muted text-muted-foreground cursor-not-allowed'
  }`;
}

function inputCls(enabled: boolean) {
  return `w-full border border-border rounded-[var(--radius)] px-3 py-2 transition-colors ${
    enabled ? 'bg-background text-foreground' : 'bg-muted text-foreground cursor-not-allowed'
  }`;
}

export default function RequestSDTMModal({ study, onClose, onConfirm }: RequestSDTMModalProps) {
  // isCascade = true when opened from SDTMDataExtract (no study prefilled)
  const isCascade = !study;

  // All fields — initial values depend on mode
  const [arpMilestone, setArpMilestone] = useState(isCascade ? '' : 'Tst');
  const [dataLifecycle, setDataLifecycle] = useState(isCascade ? '' : 'Prod Preview');
  const [maskedBlinded, setMaskedBlinded] = useState(
    isCascade ? '' : (study?.blublType?.toLowerCase().includes('blinded') ? 'Masked & Blinded' : 'Unmasked & Unblinded')
  );
  const [studyLifecycle, setStudyLifecycle] = useState('');
  const [mkVNumber, setMkVNumber] = useState(isCascade ? '' : (study?.mkVNumber ?? ''));
  const [protocolNumber, setProtocolNumber] = useState(isCascade ? '' : (study?.protocolNumber ?? ''));
  const [sdtmVersion, setSdtmVersion] = useState('');
  const [stageNumber, setStageNumber] = useState('');
  const [selectedTables, setSelectedTables] = useState<string[]>([]);
  const [mountProjects, setMountProjects] = useState<string[]>(
    []
  );

  // Unlock chain for the two modes:
  // - Cascade mode (no study): full chain from top fields
  // - Study mode: only editable fields are sequential (Study Lifecycle -> SDTM Version -> Stage)
  const dlUnlocked = isCascade ? !!arpMilestone : false;
  const mbUnlocked = isCascade ? (dlUnlocked && !!dataLifecycle) : false;
  const slUnlocked = isCascade ? (mbUnlocked && !!maskedBlinded) : true;
  const mkvUnlocked = isCascade ? (slUnlocked && !!studyLifecycle) : false;
  const protUnlocked = isCascade ? (mkvUnlocked && !!mkVNumber) : false;
  const sdtmVUnlocked = isCascade ? (protUnlocked && !!protocolNumber) : !!studyLifecycle;
  const stageUnlocked = sdtmVUnlocked && !!sdtmVersion;
  const schemaVisible = stageUnlocked && !!stageNumber;
  const mountUnlocked = schemaVisible && selectedTables.length > 0;

  // MK/V and Protocol are editable only in cascade mode (pre-filled = disabled read-only)
  const mkvEditable  = isCascade && mkvUnlocked;
  const protEditable = isCascade && protUnlocked;

  const schemaName = mkVNumber && protocolNumber && sdtmVersion && stageNumber
    ? `${mkVNumber}-${protocolNumber}_sdtm${sdtmVersion.replace('.', '')}_${stageNumber}`
    : '';

  const mountSuggestion = mkVNumber && protocolNumber
    ? `ids-tst-bl-${mkVNumber.toLowerCase()}-prot${protocolNumber.toLowerCase()}-test11`
    : '';

  // Cascade change handlers — reset all fields downstream when upstream changes
  const changeArpMilestone = (val: string) => {
    setArpMilestone(val);
    if (isCascade) {
      setDataLifecycle(''); setMaskedBlinded(''); setStudyLifecycle('');
      setMkVNumber(''); setProtocolNumber(''); setSdtmVersion('');
      setStageNumber(''); setSelectedTables([]); setMountProjects([]);
    }
  };
  const changeDataLifecycle = (val: string) => {
    setDataLifecycle(val);
    if (isCascade) {
      setMaskedBlinded(''); setStudyLifecycle('');
      setMkVNumber(''); setProtocolNumber(''); setSdtmVersion('');
      setStageNumber(''); setSelectedTables([]); setMountProjects([]);
    }
  };
  const changeMaskedBlinded = (val: string) => {
    setMaskedBlinded(val);
    if (isCascade) {
      setStudyLifecycle('');
      setMkVNumber(''); setProtocolNumber(''); setSdtmVersion('');
      setStageNumber(''); setSelectedTables([]); setMountProjects([]);
    }
  };
  const changeStudyLifecycle = (val: string) => {
    setStudyLifecycle(val);
    setSdtmVersion('');
    setStageNumber('');
    setSelectedTables([]);
    setMountProjects([]);

    if (isCascade) {
      setMkVNumber('');
      setProtocolNumber('');
    }
  };
  const changeMkVNumber = (val: string) => {
    setMkVNumber(val);
    if (isCascade) {
      setProtocolNumber(''); setSdtmVersion('');
      setStageNumber(''); setSelectedTables([]); setMountProjects([]);
    }
  };
  const changeProtocolNumber = (val: string) => {
    setProtocolNumber(val);
    if (isCascade) {
      setSdtmVersion('');
      setStageNumber(''); setSelectedTables([]); setMountProjects([]);
    }
  };
  const changeSdtmVersion = (val: string) => {
    setSdtmVersion(val);
    setStageNumber('');
    setSelectedTables([]);
    setMountProjects([]);
  };
  const changeStageNumber = (val: string) => {
    setStageNumber(val);
    setSelectedTables([]);
    setMountProjects([]);
  };

  const handleSelectAllTables = (checked: boolean) => {
    setSelectedTables(checked ? [...SDTM_TABLES] : []);
  };
  const handleTableToggle = (table: string) => {
    setSelectedTables(prev =>
      prev.includes(table) ? prev.filter(t => t !== table) : [...prev, table]
    );
  };

  const canSubmit = !!arpMilestone && !!dataLifecycle && !!maskedBlinded && !!studyLifecycle &&
    !!mkVNumber && !!protocolNumber && !!sdtmVersion && !!stageNumber;

  const handleSubmit = () => {
    onConfirm({
      arpMilestone, dataLifecycle, maskedBlinded, studyLifecycle,
      mkVNumber, protocolNumber, model: 'sdtm', sdtmVersion,
      stageNumber, schemaName, selectedTables, mountProjects,
    });
    onClose();
  };

  const handleReset = () => {
    if (isCascade) {
      setArpMilestone('');
      setDataLifecycle(''); setMaskedBlinded(''); setStudyLifecycle('');
      setMkVNumber(''); setProtocolNumber(''); setSdtmVersion('');
      setStageNumber(''); setSelectedTables([]); setMountProjects([]);
    } else {
      setStudyLifecycle('');
      setSdtmVersion('');
      setStageNumber('');
      setSelectedTables([]);
      setMountProjects([]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="bg-card rounded-[var(--radius-card)] max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: 'var(--elevation-sm)' }}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-primary" style={{ fontSize: 'var(--text-h3)' }}>
            Request New SDTM Data Extract
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {}}
              className="text-primary text-sm underline hover:opacity-80 transition-opacity"
            >
              Go to View Submitted Request Page
            </button>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-6">
          {/* Top Section - 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* ARP Milestone Deliverable */}
            <div>
              <label className="block text-foreground mb-2">ARP Milestone Deliverable (Tst/Prod)</label>
              <div className="relative">
                <select
                  value={arpMilestone}
                  onChange={e => changeArpMilestone(e.target.value)}
                  disabled={!isCascade}
                  className={selectCls(isCascade)}
                >
                  {isCascade && <option value="" disabled>Select...</option>}
                  <option value="Tst">Tst</option>
                  <option value="Prod">Prod</option>
                </select>
                <Chevron />
              </div>
            </div>

            {/* Data Lifecycle */}
            <div>
              <label className="block text-foreground mb-2">Data Lifecycle</label>
              <div className="relative">
                <select
                  value={dataLifecycle}
                  onChange={e => changeDataLifecycle(e.target.value)}
                  disabled={!dlUnlocked}
                  className={selectCls(dlUnlocked && isCascade)}
                >
                  {isCascade && <option value="" disabled>Select...</option>}
                  {DATA_LIFECYCLE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <Chevron />
              </div>
            </div>

            {/* Masked/Blinded */}
            <div>
              <label className="block text-foreground mb-2">Masked/Blinded</label>
              <div className="relative">
                <select
                  value={maskedBlinded}
                  onChange={e => changeMaskedBlinded(e.target.value)}
                  disabled={!mbUnlocked}
                  className={selectCls(mbUnlocked && isCascade)}
                >
                  {isCascade && <option value="" disabled>Select...</option>}
                  {MASKED_BLINDED_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <Chevron />
              </div>
            </div>

            {/* Study Lifecycle */}
            <div>
              <label className="block text-foreground mb-2">Study Lifecycle</label>
              <div className="relative">
                <select
                  value={studyLifecycle}
                  onChange={e => changeStudyLifecycle(e.target.value)}
                  disabled={!slUnlocked}
                  className={selectCls(slUnlocked)}
                >
                  <option value="" disabled>Select...</option>
                  {STUDY_LIFECYCLE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <Chevron />
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

            {/* Row 1: MK/V Number, Protocol Number, Model */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-foreground mb-2">MK/V Number</label>
                {mkvEditable ? (
                  <SearchableCombobox
                    value={mkVNumber}
                    options={MKV_OPTIONS}
                    onChange={changeMkVNumber}
                    placeholder="Type 3+ characters to search..."
                  />
                ) : (
                  <input
                    type="text"
                    value={mkVNumber}
                    disabled
                    className={inputCls(false)}
                  />
                )}
              </div>
              <div>
                <label className="block text-foreground mb-2">Protocol Number</label>
                {protEditable ? (
                  <SearchableCombobox
                    value={protocolNumber}
                    options={PROTOCOL_OPTIONS}
                    onChange={changeProtocolNumber}
                    placeholder="Type 3+ characters to search..."
                  />
                ) : (
                  <input
                    type="text"
                    value={protocolNumber}
                    disabled
                    className={inputCls(false)}
                  />
                )}
              </div>
              <div>
                <label className="block text-foreground mb-2">Model</label>
                <div className="relative">
                  <select value="sdtm" disabled className={selectCls(false)}>
                    <option value="sdtm">sdtm</option>
                  </select>
                  <Chevron />
                </div>
              </div>
            </div>

            {/* Row 2: SDTM Version, Stage Number */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-foreground mb-2">SDTM Version</label>
                <div className="relative">
                  <select
                    value={sdtmVersion}
                    onChange={e => changeSdtmVersion(e.target.value)}
                    disabled={!sdtmVUnlocked}
                    className={selectCls(sdtmVUnlocked)}
                  >
                    <option value="" disabled>Select...</option>
                    {SDTM_VERSION_OPTIONS.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                  <Chevron />
                </div>
              </div>
              <div>
                <label className="block text-foreground mb-2">Stage Number</label>
                <div className="relative">
                  <select
                    value={stageNumber}
                    onChange={e => changeStageNumber(e.target.value)}
                    disabled={!stageUnlocked}
                    className={selectCls(stageUnlocked)}
                  >
                    <option value="" disabled>Select...</option>
                    {STAGE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <Chevron />
                </div>
              </div>
            </div>
          </div>

          {/* Matching SDTM Schema + Tables — shown once stage is filled */}
          {schemaVisible && (
            <div className="mb-6 border border-border rounded-[var(--radius)] overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-border">
                {/* Left: Matching SDTM Schema */}
                <div className="p-4">
                  <label className="block text-foreground font-medium mb-3">Matching SDTM Schema</label>
                  <div className="text-sm text-foreground font-medium mb-2 border-b border-border pb-1">Schema Name</div>
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="radio"
                      id="schema-option"
                      name="schema"
                      checked
                      readOnly
                      className="w-4 h-4 accent-primary"
                    />
                    <label htmlFor="schema-option" className="text-foreground text-sm">{schemaName}</label>
                  </div>
                </div>

                {/* Right: Tables in Selected Schema */}
                <div className="p-4">
                  <label className="block text-foreground font-medium mb-3">Tables in Selected Schema</label>
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      id="select-all-tables"
                      checked={selectedTables.length === SDTM_TABLES.length}
                      onChange={e => handleSelectAllTables(e.target.checked)}
                      className="w-4 h-4 accent-primary"
                    />
                    <label htmlFor="select-all-tables" className="text-foreground text-sm">Select All</label>
                  </div>
                  <div className="border-t border-border pt-2">
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 items-center">
                      <span className="text-xs text-muted-foreground font-medium">Select</span>
                      <span className="text-xs text-muted-foreground font-medium">Table Name</span>
                      {SDTM_TABLES.map(table => (
                        <>
                          <input
                            key={`chk-${table}`}
                            type="checkbox"
                            id={`table-${table}`}
                            checked={selectedTables.includes(table)}
                            onChange={() => handleTableToggle(table)}
                            className="w-4 h-4 accent-primary"
                          />
                          <label key={`lbl-${table}`} htmlFor={`table-${table}`} className="text-foreground text-sm cursor-pointer">
                            {table}
                          </label>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Milestone Deliverable Projects — shown once tables are selected */}
          {(mountUnlocked || !isCascade) && (
            <div className="mb-6">
              <div className="pb-2 border-b-2 border-primary mb-3">
                <label className="text-foreground inline-flex items-center gap-1.5" style={{ fontSize: 'var(--text-h4)' }}>
                  Milestone Deliverable Projects to Mount Data
                  <Info size={16} className="text-muted-foreground" />
                </label>
              </div>
              <div className={`border border-border rounded-[var(--radius)] px-3 py-2 flex flex-wrap gap-2 min-h-[42px] items-center ${mountUnlocked ? 'bg-background' : 'bg-muted'}`}>
                {mountProjects.map(project => (
                  <span
                    key={project}
                    className="inline-flex items-center gap-1 bg-muted text-foreground text-sm px-2 py-0.5 rounded"
                  >
                    {project}
                    {mountUnlocked && (
                      <button
                        onClick={() => setMountProjects(prev => prev.filter(p => p !== project))}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label={`Remove ${project}`}
                      >
                        <X size={12} />
                      </button>
                    )}
                  </span>
                ))}
                {mountUnlocked && (
                  <select
                    className="flex-1 min-w-[120px] outline-none bg-transparent text-foreground text-sm appearance-none"
                    onChange={e => {
                      if (e.target.value && !mountProjects.includes(e.target.value)) {
                        setMountProjects(prev => [...prev, e.target.value]);
                      }
                      e.target.value = '';
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>Select project...</option>
                    {mountSuggestion && (
                      <option value={mountSuggestion}>{mountSuggestion}</option>
                    )}
                  </select>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-card border-t border-border px-6 py-4 flex justify-start gap-3">
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="px-6 py-2.5 rounded-[var(--radius-button)] bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Request
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-[var(--radius-button)] border border-border bg-card text-foreground hover:bg-muted transition-colors"
          >
            Reset Form
          </button>
        </div>
      </div>
    </div>
  );
}