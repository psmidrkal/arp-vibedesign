import svgPaths from "@/imports/svg-6hwcrc560a";
import { X, ChevronRight, Plus, Upload, Users, UserCheck, AlertTriangle, Info, ChevronDown, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import EmptyState from "./shared/EmptyState";
import LoadingState from "./shared/LoadingState";
import SearchBar from "./shared/SearchBar";
import FilterDropdown from "./shared/FilterDropdown";
import ExportButton from "./shared/ExportButton";
import TableHeader from "./shared/TableHeader";
import { toast, ToastProvider } from "./shared/Toast";
import { sortData, searchData, SortConfig } from "@/app/utils/tableUtils";
import { ExportColumn } from "@/app/utils/exportUtils";
import Checkbox from "./shared/Checkbox";
import TopNav from "./shared/TopNav";
import { useRole } from "@/app/context/RoleContext";

interface AdminPageProps {
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'admin' | 'reports') => void;
}

// ── Data types ────────────────────────────────────────────────────────────────

interface TALeadRecord {
  id: string;
  therapeuticArea: string;
  compound: string;
  isid: string;
  email: string;
  fullName: string;
  department: string;
  dateAdded: string;
  hidden: boolean;
}

interface ProtocolLeadRecord {
  id: string;
  therapeuticArea: string;
  protocolNumber: string;
  mkNumber: string;
  isid: string;
  email: string;
  fullName: string;
  department: string;
  dateAdded: string;
  hidden: boolean;
}

// ── Reusable sub-components ───────────────────────────────────────────────────

function Modal({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-[var(--radius-card)] p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-foreground m-0">{title}</h3>
          <button onClick={onClose} className="text-foreground hover:opacity-70 transition-opacity">
            <X size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ConfirmModal({ isOpen, onClose, onConfirm, title, message, confirmLabel = 'Confirm', danger = false }: {
  isOpen: boolean; onClose: () => void; onConfirm: () => void; title: string; message: string; confirmLabel?: string; danger?: boolean;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-[var(--radius-card)] p-6 max-w-md w-full mx-4">
        <div className="flex items-start gap-3 mb-4">
          {danger ? <AlertTriangle size={20} className="text-destructive mt-0.5 shrink-0" /> : <Info size={20} className="text-primary mt-0.5 shrink-0" />}
          <div>
            <h4 className="text-foreground m-0 mb-1">{title}</h4>
            <p className="text-muted-foreground text-sm">{message}</p>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border border-border text-foreground rounded-[var(--radius-button)] hover:bg-muted transition-colors">
            Cancel
          </button>
          <button
            onClick={() => { onConfirm(); onClose(); }}
            className={`px-4 py-2 rounded-[var(--radius-button)] text-white transition-opacity hover:opacity-90 ${danger ? 'bg-destructive' : 'bg-primary'}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, required = false, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex gap-1 items-center text-foreground">
        {required && <span className="text-destructive">*</span>}
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({ placeholder = "Select", options = [], value = "", onChange }: { placeholder?: string; options?: string[]; value?: string; onChange?: (value: string) => void }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-input-background border border-border px-3 py-2 appearance-none cursor-pointer text-foreground rounded-[var(--radius)]"
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

function Input({ placeholder = "", value = "", onChange, type = "text" }: { placeholder?: string; value?: string; onChange?: (value: string) => void; type?: string }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-input-background border border-border px-3 py-2 text-foreground rounded-[var(--radius)]"
    />
  );
}

function RoleAnnotation({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/20 rounded-[var(--radius)] mb-4">
      <Info size={14} className="text-primary mt-0.5 shrink-0" />
      <p className="text-sm text-foreground m-0">{text}</p>
    </div>
  );
}

// ── Searchable combobox for long option lists ─────────────────────────────────

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
        className="w-full bg-input-background border border-border px-3 py-2 rounded-[var(--radius)] text-left flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors"
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
          <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/40">
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
              <li className="px-3 py-2 text-sm text-muted-foreground">No matches found</li>
            ) : (
              filtered.map(option => (
                <li
                  key={option}
                  onMouseDown={() => handleSelect(option)}
                  className={`px-3 py-2 text-sm cursor-pointer transition-colors ${
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

// ── Main Component ────────────────────────────────────────────────────────────

export default function AdminPage({ onNavigate }: AdminPageProps) {
  const { permissions, currentRole } = useRole();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'ta-leads' | 'protocol-leads'>('ta-leads');

  // Mock user directory - ISIDs and emails
  const mockUsers = [
    { isid: 'smidrkal', email: 'smidrkal@merck.com', name: 'Katherine Smidr', department: 'BARDS IT' },
    { isid: 'petrovai', email: 'petrovai@merck.com', name: 'Ivan Petrov', department: 'AMS RIR' },
    { isid: 'brownkr', email: 'brownkr@merck.com', name: 'Kevin Brown', department: 'Clinical Research' },
    { isid: 'chengju', email: 'chengju@merck.com', name: 'Julia Cheng', department: 'BARDS IT' },
    { isid: 'garciamr', email: 'garciamr@merck.com', name: 'Maria Garcia', department: 'BARDS IT' },
    { isid: 'arnoldi', email: 'arnold.elizabeth@merck.com', name: 'Elizabeth Arnold', department: 'BARDS IT' },
    { isid: 'chaudmo', email: 'chaudmo@merck.com', name: 'Monica Chaud', department: 'BARDS IT' },
    { isid: 'smithj', email: 'smith.john@merck.com', name: 'John Smith', department: 'Clinical Research' },
    { isid: 'tengch', email: 'tengch@merck.com', name: 'Charles Teng', department: 'BARDS IT' },
    { isid: 'johnsond', email: 'johnsond@merck.com', name: 'David Johnson', department: 'AMS RIR' },
    { isid: 'wilsonm', email: 'wilsonm@merck.com', name: 'Michelle Wilson', department: 'BARDS IT' },
    { isid: 'andersonp', email: 'andersonp@merck.com', name: 'Patricia Anderson', department: 'Clinical Research' },
    { isid: 'thomasr', email: 'thomasr@merck.com', name: 'Robert Thomas', department: 'BARDS IT' },
    { isid: 'martinl', email: 'martinl@merck.com', name: 'Laura Martin', department: 'AMS RIR' },
    { isid: 'leej', email: 'leej@merck.com', name: 'Jennifer Lee', department: 'Clinical Research' },
    { isid: 'garciac', email: 'garciac@merck.com', name: 'Carlos Garcia', department: 'BARDS IT' },
    { isid: 'rodriguezm', email: 'rodriguezm@merck.com', name: 'Maria Rodriguez', department: 'BARDS IT' },
    { isid: 'hernandezj', email: 'hernandezj@merck.com', name: 'Jose Hernandez', department: 'AMS RIR' },
    { isid: 'lopezs', email: 'lopezs@merck.com', name: 'Sofia Lopez', department: 'Clinical Research' },
    { isid: 'gonzaleza', email: 'gonzaleza@merck.com', name: 'Ana Gonzalez', department: 'BARDS IT' },
  ];

  // Search / sort / filter shared
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig | null>({ key: 'dateAdded', direction: 'desc' });
  const [selectedTAs, setSelectedTAs] = useState<string[]>([]);
  const [selectedCompounds, setSelectedCompounds] = useState<string[]>([]);
  const [selectedMKNumbers, setSelectedMKNumbers] = useState<string[]>([]);
  const [selectedProtocols, setSelectedProtocols] = useState<string[]>([]);

  // ── TA Leads data ──────────────────────────────────────────────────────
  const [taLeads, setTALeads] = useState<TALeadRecord[]>([
    { id: '1', therapeuticArea: 'Oncology', compound: 'MK-3475', isid: 'smidrkal', email: 'smidrkal@merck.com', fullName: 'Katherine Smidr', department: 'BARDS IT', dateAdded: 'Jan 10, 2024', hidden: false },
    { id: '2', therapeuticArea: 'Vaccines', compound: 'V999', isid: 'petrovai', email: 'petrovai@merck.com', fullName: 'Ivan Petrov', department: 'AMS RIR', dateAdded: 'Mar 5, 2024', hidden: false },
    { id: '3', therapeuticArea: 'Cardiovascular', compound: 'MK-8900', isid: 'brownkr', email: 'brownkr@merck.com', fullName: 'Kevin Brown', department: 'Clinical Research', dateAdded: 'Feb 20, 2024', hidden: false },
    { id: '4', therapeuticArea: 'Neuroscience', compound: 'MK-1234', isid: 'chengju', email: 'chengju@merck.com', fullName: 'Julia Cheng', department: 'BARDS IT', dateAdded: 'Apr 1, 2024', hidden: false },
    { id: '5', therapeuticArea: 'Immunology', compound: 'MK-5678', isid: 'garciamr', email: 'garciamr@merck.com', fullName: 'Maria Garcia', department: 'BARDS IT', dateAdded: 'May 15, 2024', hidden: false },
  ]);
  const [selectedTALeads, setSelectedTALeads] = useState<Set<string>>(new Set());
  const [showAddTALeadModal, setShowAddTALeadModal] = useState(false);
  const [addTALeadTA, setAddTALeadTA] = useState('');
  const [addTALeadCompound, setAddTALeadCompound] = useState('');
  const [addTALeadValue, setAddTALeadValue] = useState('');
  const [addTALeadSearchBy, setAddTALeadSearchBy] = useState('ISID');

  // ── Protocol Leads data ──────────────────────────────────────────────────
  const [protocolLeads, setProtocolLeads] = useState<ProtocolLeadRecord[]>([
    { id: '1', therapeuticArea: 'Oncology', protocolNumber: 'PROT-001', mkNumber: 'MK-3475', isid: 'arnoldi', email: 'arnold.elizabeth@merck.com', fullName: 'Elizabeth Arnold', department: 'BARDS IT', dateAdded: 'Jun 26, 2024', hidden: false },
    { id: '2', therapeuticArea: 'Vaccines', protocolNumber: 'PROT-002', mkNumber: 'V999', isid: 'arnoldi', email: 'arnold.elizabeth@merck.com', fullName: 'Elizabeth Arnold', department: 'AMS RIR', dateAdded: 'Apr 6, 2024', hidden: false },
    { id: '3', therapeuticArea: 'Oncology', protocolNumber: 'PROT-003', mkNumber: 'MK-3475', isid: 'chaudmo', email: 'chaudmo@merck.com', fullName: 'Monica Chaud', department: 'BARDS IT', dateAdded: 'Jul 20, 2024', hidden: false },
    { id: '4', therapeuticArea: 'Cardiovascular', protocolNumber: 'PROT-004', mkNumber: 'MK-8900', isid: 'smithj', email: 'smith.john@merck.com', fullName: 'John Smith', department: 'Clinical Research', dateAdded: 'Jan 15, 2025', hidden: false },
    { id: '5', therapeuticArea: 'Oncology', protocolNumber: 'PROT-001', mkNumber: 'MK-3475', isid: 'tengch', email: 'tengch@merck.com', fullName: 'Charles Teng', department: 'BARDS IT', dateAdded: 'Feb 10, 2025', hidden: false },
  ]);
  const [selectedProtocolLeads, setSelectedProtocolLeads] = useState<Set<string>>(new Set());
  const [showAddProtocolLeadModal, setShowAddProtocolLeadModal] = useState(false);
  const [addPLTA, setAddPLTA] = useState('');
  const [addPLMKNumber, setAddPLMKNumber] = useState('');
  const [addPLProtocol, setAddPLProtocol] = useState('');
  const [addPLValue, setAddPLValue] = useState('');
  const [addPLSearchBy, setAddPLSearchBy] = useState('ISID');
  const [confirmRemovePL, setConfirmRemovePL] = useState(false);

  // Sort / confirm state
  const [protocolLeadSortConfig, setProtocolLeadSortConfig] = useState<SortConfig | null>({ key: 'dateAdded', direction: 'desc' });
  const [taLeadSortConfig, setTALeadSortConfig] = useState<SortConfig | null>({ key: 'dateAdded', direction: 'desc' });

  const therapeuticAreas = ['Oncology', 'Vaccines', 'Cardiovascular', 'Immunology', 'Neuroscience'];

  // Master compound list (MK numbers) — derived from existing records
  const compounds = Array.from(new Set([
    'MK-3475', 'MK-8900', 'MK-1234', 'MK-5678', 'V999', 'MK-7890',
    ...taLeads.filter(t => !t.hidden).map(t => t.compound),
  ])).sort();

  // Master protocol number list — derived from existing records
  const protocolNumbers = Array.from(new Set([
    'PROT-001', 'PROT-002', 'PROT-003', 'PROT-004', 'PROT-005', 'PROT-006',
    ...protocolLeads.filter(p => !p.hidden).map(p => p.protocolNumber),
  ])).sort();

  const mkNumbers = Array.from(new Set([
    ...protocolLeads.filter(p => !p.hidden).map(p => p.mkNumber),
  ])).sort();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // ── Tab access logic ─────────────────────────────────────────────────────
  const canSeeTALeads = permissions.canManageTALeads;
  const canSeeProtocolLeads = permissions.canManageProtocolLeads || permissions.canManageTALeads;

  // Set default visible tab based on role
  useEffect(() => {
    if (!canSeeTALeads && canSeeProtocolLeads) setActiveTab('protocol-leads');
    else setActiveTab('ta-leads');
  }, [currentRole]);

  // ── Filtered/sorted data ─────────────────────────────────────────────────
  const visibleTALeads = taLeads.filter(t => !t.hidden);
  const filteredTALeads = (() => {
    let data = visibleTALeads;
    if (selectedTAs.length) data = data.filter(r => selectedTAs.includes(r.therapeuticArea));
    if (selectedCompounds.length) data = data.filter(r => selectedCompounds.includes(r.compound));
    if (searchQuery.trim()) data = searchData(data, searchQuery, ['therapeuticArea', 'compound', 'isid', 'email', 'department']);
    if (taLeadSortConfig) data = sortData(data, taLeadSortConfig);
    return data;
  })();

  const visiblePL = protocolLeads.filter(p => !p.hidden);
  const filteredPL = (() => {
    let data = visiblePL;
    if (selectedTAs.length) data = data.filter(r => selectedTAs.includes(r.therapeuticArea));
    if (selectedMKNumbers.length) data = data.filter(r => selectedMKNumbers.includes(r.mkNumber));
    if (selectedProtocols.length) data = data.filter(r => selectedProtocols.includes(r.protocolNumber));
    if (searchQuery.trim()) data = searchData(data, searchQuery, ['therapeuticArea', 'mkNumber', 'protocolNumber', 'isid', 'email', 'department']);
    if (protocolLeadSortConfig) data = sortData(data, protocolLeadSortConfig);
    return data;
  })();

  const uniqueTAs = Array.from(new Set([
    ...taLeads.filter(t => !t.hidden).map(t => t.therapeuticArea),
    ...protocolLeads.filter(p => !p.hidden).map(p => p.therapeuticArea),
  ])).sort();

  const taOptions = uniqueTAs.map(ta => ({ value: ta, label: ta, count: visibleTALeads.filter(t => t.therapeuticArea === ta).length }));
  const compoundOptions = compounds.map(c => ({ value: c, label: c, count: visibleTALeads.filter(t => t.compound === c).length }));
  const mkNumberOptions = mkNumbers.map(mk => ({ value: mk, label: mk, count: visiblePL.filter(pl => pl.mkNumber === mk).length }));
  const protocolOptions = protocolNumbers.map(p => ({ value: p, label: p, count: visiblePL.filter(pl => pl.protocolNumber === p).length }));

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleAddTALead = () => {
    if (addTALeadTA && addTALeadCompound && addTALeadValue) {
      setTALeads(prev => [...prev, {
        id: String(Date.now()),
        therapeuticArea: addTALeadTA,
        compound: addTALeadCompound,
        isid: addTALeadSearchBy === 'ISID' ? addTALeadValue : addTALeadValue.split('@')[0],
        email: addTALeadSearchBy === 'Email' ? addTALeadValue : `${addTALeadValue}@merck.com`,
        fullName: mockUsers.find(u => u.isid === addTALeadValue || u.email === addTALeadValue)?.name || '',
        department: 'BARDS IT',
        dateAdded: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        hidden: false,
      }]);
      setShowAddTALeadModal(false);
      setAddTALeadTA(''); setAddTALeadCompound(''); setAddTALeadValue('');
      toast.success('Therapy Lead added successfully');
    }
  };

  const handleRemoveTALeads = () => {
    setTALeads(prev => prev.map(t => selectedTALeads.has(t.id) ? { ...t, hidden: true } : t));
    setSelectedTALeads(new Set());
    toast.success('Therapy Lead(s) removed');
  };

  const handleAddProtocolLead = () => {
    if (addPLTA && addPLMKNumber && addPLProtocol && addPLValue) {
      setProtocolLeads(prev => [...prev, {
        id: String(Date.now()),
        therapeuticArea: addPLTA,
        protocolNumber: addPLProtocol,
        mkNumber: addPLMKNumber,
        isid: addPLSearchBy === 'ISID' ? addPLValue : addPLValue.split('@')[0],
        email: addPLSearchBy === 'Email' ? addPLValue : `${addPLValue}@merck.com`,
        fullName: mockUsers.find(u => u.isid === addPLValue || u.email === addPLValue)?.name || '',
        department: 'BARDS IT',
        dateAdded: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        hidden: false,
      }]);
      setShowAddProtocolLeadModal(false);
      setAddPLTA(''); setAddPLMKNumber(''); setAddPLProtocol(''); setAddPLValue('');
      toast.success('Project Lead added successfully');
    }
  };

  const handleRemoveProtocolLeads = () => {
    // Hard rule: never allow removing the last project lead for a protocol
    const protocolsAffected = Array.from(selectedProtocolLeads)
      .map(id => protocolLeads.find(p => p.id === id)?.protocolNumber)
      .filter(Boolean);

    const wouldBeLastLead = protocolsAffected.some(protocol => {
      const remaining = visiblePL.filter(
        p => p.protocolNumber === protocol && !selectedProtocolLeads.has(p.id)
      );
      return remaining.length === 0;
    });

    if (wouldBeLastLead) {
      toast.error('Cannot remove the last Project Lead for a protocol. Add a replacement lead first.');
      return;
    }

    setProtocolLeads(prev =>
      prev.map(p => selectedProtocolLeads.has(p.id) ? { ...p, hidden: true } : p)
    );
    setSelectedProtocolLeads(new Set());
    toast.success('Project Lead(s) removed');
  };

  const handleConfirmRemovePL = () => {
    setProtocolLeads(prev => prev.map(p => selectedProtocolLeads.has(p.id) ? { ...p, hidden: true } : p));
    setSelectedProtocolLeads(new Set());
    toast.success('Project Lead(s) removed (override by elevated role)');
  };

  const exportTALeadsColumns: ExportColumn[] = [
    { key: 'therapeuticArea', label: 'Therapeutic Area' },
    { key: 'compound', label: 'MK Number' },
    { key: 'isid', label: 'ISID' },
    { key: 'email', label: 'Email' },
    { key: 'department', label: 'Department' },
    { key: 'dateAdded', label: 'Date Added' },
  ];
  const exportPLColumns: ExportColumn[] = [
    { key: 'therapeuticArea', label: 'Therapeutic Area' },
    { key: 'protocolNumber', label: 'Protocol Number' },
    { key: 'isid', label: 'ISID' },
    { key: 'email', label: 'Email' },
    { key: 'department', label: 'Department' },
    { key: 'dateAdded', label: 'Date Added' },
  ];

  // Tabs to display
  const tabs = [
    ...(canSeeTALeads ? [{ id: 'ta-leads' as const, label: 'Therapy Leads', icon: <Users size={15} />, count: visibleTALeads.length }] : []),
    ...(canSeeProtocolLeads ? [{ id: 'protocol-leads' as const, label: 'Project Leads', icon: <UserCheck size={15} />, count: visiblePL.length }] : []),
  ];

  return (
    <div className="bg-background min-h-screen">
      <ToastProvider />
      <TopNav onNavigate={onNavigate} activeScreen="admin" />

      {/* Breadcrumbs */}
      <div className="bg-card px-6 py-3 border-b border-border">
        <div className="flex items-center gap-2 text-sm">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-primary hover:underline cursor-pointer">Home</a>
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="text-muted-foreground">Roles</span>
        </div>
      </div>

      {/* Main content */}
      <main className="p-8 bg-muted min-h-[calc(100vh-100px)]">
        <div className="max-w-7xl mx-auto">

          {/* Page title */}
          <div className="mb-6">
            <h3 className="text-foreground m-0 mb-1" style={{ color: '#00857C' }}>Role Management</h3>
            <p className="text-muted-foreground text-sm">
              Manage TA leads and project leads across therapeutic areas.
            </p>
          </div>

          {/* Tab bar */}
          <div className="flex border-b border-border mb-6 bg-card">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSearchQuery(''); setSelectedTAs([]); setSelectedCompounds([]); setSelectedMKNumbers([]); setSelectedProtocols([]); }}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors cursor-pointer border-0 bg-transparent ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className="ml-1 px-1.5 py-0.5 bg-muted rounded-[var(--radius-tag)] text-xs text-muted-foreground">{tab.count}</span>
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="bg-card p-8 rounded-[var(--radius-card)]"><LoadingState rows={5} /></div>
          ) : (
            <>
              {/* ── TA LEADS TAB ── */}
              {activeTab === 'ta-leads' && (
                <div className="bg-card p-6 rounded-[var(--radius-card)]">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-foreground m-0 mb-1">Therapy Leads</h4>
                    </div>
                    <div className="flex gap-2">
                      {permissions.canManageTALeads && (
                        <button
                          onClick={() => setShowAddTALeadModal(true)}
                          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity text-sm"
                        >
                          <Plus size={14} />
                          Add Therapy Lead
                        </button>
                      )}
                    </div>
                  </div>

                  {!permissions.canManageTALeads && (
                    <RoleAnnotation text="Your current role has view-only access to Therapy Lead assignments. Contact the Support Team to make changes." />
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <SearchBar placeholder="Search therapy leads..." value={searchQuery} onChange={setSearchQuery} className="min-w-[280px]" />
                    <FilterDropdown label="Therapeutic Area" options={taOptions} selectedValues={selectedTAs} onChange={setSelectedTAs} />
                    <FilterDropdown label="MK Number" options={compoundOptions} selectedValues={selectedCompounds} onChange={setSelectedCompounds} />
                    <ExportButton data={filteredTALeads} columns={exportTALeadsColumns} filename="therapy-leads-export" />
                  </div>

                  {selectedTALeads.size > 0 && permissions.canManageTALeads && (
                    <div className="mb-4 p-3 bg-primary/5 border border-primary/20 rounded-[var(--radius)] flex items-center justify-between">
                      <span className="text-sm text-foreground">{selectedTALeads.size} selected</span>
                      <button
                        onClick={handleRemoveTALeads}
                        className="flex items-center gap-2 bg-destructive text-destructive-foreground px-3 py-1.5 rounded-[var(--radius-button)] hover:opacity-90 text-sm transition-opacity"
                      >
                        <X size={14} />
                        Remove Selected
                      </button>
                    </div>
                  )}

                  <div className="border border-border rounded-[var(--radius)] overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          {permissions.canManageTALeads && (
                            <th className="text-left p-3 w-10">
                              <Checkbox
                                checked={filteredTALeads.length > 0 && filteredTALeads.every(t => selectedTALeads.has(t.id))}
                                onChange={(checked) => {
                                  if (checked) setSelectedTALeads(new Set(filteredTALeads.map(t => t.id)));
                                  else setSelectedTALeads(new Set());
                                }}
                                aria-label="Select all"
                              />
                            </th>
                          )}
                          <TableHeader label="Therapeutic Area" sortable sortDirection={taLeadSortConfig?.key === 'therapeuticArea' ? taLeadSortConfig.direction : null} onSort={() => setTALeadSortConfig(c => c?.key === 'therapeuticArea' && c.direction === 'asc' ? { key: 'therapeuticArea', direction: 'desc' } : { key: 'therapeuticArea', direction: 'asc' })} />
                          <TableHeader label="MK Number" sortable sortDirection={taLeadSortConfig?.key === 'compound' ? taLeadSortConfig.direction : null} onSort={() => setTALeadSortConfig(c => c?.key === 'compound' && c.direction === 'asc' ? { key: 'compound', direction: 'desc' } : { key: 'compound', direction: 'asc' })} />
                          <TableHeader label="Full Name" sortable sortDirection={taLeadSortConfig?.key === 'fullName' ? taLeadSortConfig.direction : null} onSort={() => setTALeadSortConfig(c => c?.key === 'fullName' && c.direction === 'asc' ? { key: 'fullName', direction: 'desc' } : { key: 'fullName', direction: 'asc' })} />
                          <TableHeader label="ISID" sortable sortDirection={taLeadSortConfig?.key === 'isid' ? taLeadSortConfig.direction : null} onSort={() => setTALeadSortConfig(c => c?.key === 'isid' && c.direction === 'asc' ? { key: 'isid', direction: 'desc' } : { key: 'isid', direction: 'asc' })} />
                          <TableHeader label="Email" />
                          <TableHeader label="Department" />
                          <TableHeader label="Date Added" sortable sortDirection={taLeadSortConfig?.key === 'dateAdded' ? taLeadSortConfig.direction : null} onSort={() => setTALeadSortConfig(c => c?.key === 'dateAdded' && c.direction === 'asc' ? { key: 'dateAdded', direction: 'desc' } : { key: 'dateAdded', direction: 'asc' })} />
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTALeads.map(ta => (
                          <tr key={ta.id} className={`border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors ${selectedTALeads.has(ta.id) ? 'bg-primary/5 border-l-4 border-l-primary' : ''}`}>
                            {permissions.canManageTALeads && (
                              <td className="p-3">
                                <Checkbox checked={selectedTALeads.has(ta.id)} onChange={() => {
                                  const s = new Set(selectedTALeads);
                                  s.has(ta.id) ? s.delete(ta.id) : s.add(ta.id);
                                  setSelectedTALeads(s);
                                }} aria-label={`Select ${ta.isid}`} />
                              </td>
                            )}
                            <td className="p-3 text-foreground">{ta.therapeuticArea}</td>
                            <td className="p-3 text-foreground">{ta.compound}</td>
                            <td className="p-3 text-foreground">{ta.fullName}</td>
                            <td className="p-3 text-foreground">{ta.isid}</td>
                            <td className="p-3 text-foreground">{ta.email}</td>
                            <td className="p-3 text-foreground">{ta.department}</td>
                            <td className="p-3 text-foreground">{ta.dateAdded}</td>
                          </tr>
                        ))}
                        {filteredTALeads.length === 0 && (
                          <tr><td colSpan={8} className="p-8 text-center text-muted-foreground">No therapy leads found</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Showing {filteredTALeads.length} of {visibleTALeads.length} therapy leads
                  </p>
                </div>
              )}

              {/* ── PROTOCOL LEADS TAB ── */}
              {activeTab === 'protocol-leads' && (
                <div className="bg-card p-6 rounded-[var(--radius-card)]">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-foreground m-0 mb-1">Project Leads</h4>
                      <p className="text-sm text-muted-foreground">Therapy Leads assign one or more project leads per protocol. Multiple leads share equal authority.</p>
                    </div>
                    {permissions.canManageProtocolLeads && (
                      <button
                        onClick={() => setShowAddProtocolLeadModal(true)}
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity text-sm"
                      >
                        <Plus size={14} />
                        Add Project Lead
                      </button>
                    )}
                  </div>

                  {!permissions.canManageProtocolLeads && (
                    <RoleAnnotation text="Your current role has view-only access to Project Lead assignments. Therapy Leads and above can make changes." />
                  )}

                  {/* Info rule banner */}
                  <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/20 rounded-[var(--radius)] mb-4">
                    <Info size={14} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground m-0">
                      Each protocol must always have at least one Project Lead. Leads marked <span className="inline-flex items-center gap-1 align-middle"><span className="inline-block px-1.5 py-0.5 rounded-[var(--radius-tag)] bg-amber-100 text-amber-700 text-xs border border-amber-300">Last Lead</span></span> cannot be removed until a replacement is added.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <SearchBar placeholder="Search project leads..." value={searchQuery} onChange={setSearchQuery} className="min-w-[280px]" />
                    <FilterDropdown label="Therapeutic Area" options={taOptions} selectedValues={selectedTAs} onChange={setSelectedTAs} />
                    <FilterDropdown label="MK Number" options={mkNumberOptions} selectedValues={selectedMKNumbers} onChange={setSelectedMKNumbers} />
                    <FilterDropdown label="Protocol Number" options={protocolOptions} selectedValues={selectedProtocols} onChange={setSelectedProtocols} />
                    <ExportButton data={filteredPL} columns={exportPLColumns} filename="project-leads-export" />
                  </div>

                  {selectedProtocolLeads.size > 0 && permissions.canManageProtocolLeads && (
                    <div className="mb-4 p-3 bg-primary/5 border border-primary/20 rounded-[var(--radius)] flex items-center justify-between">
                      <span className="text-sm text-foreground">{selectedProtocolLeads.size} selected</span>
                      <button
                        onClick={handleRemoveProtocolLeads}
                        className="flex items-center gap-2 bg-destructive text-destructive-foreground px-3 py-1.5 rounded-[var(--radius-button)] hover:opacity-90 text-sm transition-opacity"
                      >
                        <X size={14} />
                        Remove Selected
                      </button>
                    </div>
                  )}

                  <div className="border border-border rounded-[var(--radius)] overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          {permissions.canManageProtocolLeads && (
                            <th className="text-left p-3 w-10">
                              <Checkbox
                                checked={
                                  filteredPL.filter(p => visiblePL.filter(v => v.protocolNumber === p.protocolNumber).length > 1).length > 0 &&
                                  filteredPL
                                    .filter(p => visiblePL.filter(v => v.protocolNumber === p.protocolNumber).length > 1)
                                    .every(p => selectedProtocolLeads.has(p.id))
                                }
                                onChange={(checked) => {
                                  // Only selectable rows (not last leads)
                                  const selectable = filteredPL.filter(
                                    p => visiblePL.filter(v => v.protocolNumber === p.protocolNumber).length > 1
                                  );
                                  if (checked) setSelectedProtocolLeads(new Set(selectable.map(p => p.id)));
                                  else setSelectedProtocolLeads(new Set());
                                }}
                                aria-label="Select all"
                              />
                            </th>
                          )}
                          <TableHeader label="Therapeutic Area" sortable sortDirection={protocolLeadSortConfig?.key === 'therapeuticArea' ? protocolLeadSortConfig.direction : null} onSort={() => setProtocolLeadSortConfig(c => c?.key === 'therapeuticArea' && c.direction === 'asc' ? { key: 'therapeuticArea', direction: 'desc' } : { key: 'therapeuticArea', direction: 'asc' })} />
                          <TableHeader label="MK Number" sortable sortDirection={protocolLeadSortConfig?.key === 'mkNumber' ? protocolLeadSortConfig.direction : null} onSort={() => setProtocolLeadSortConfig(c => c?.key === 'mkNumber' && c.direction === 'asc' ? { key: 'mkNumber', direction: 'desc' } : { key: 'mkNumber', direction: 'asc' })} />
                          <TableHeader label="Protocol Number" sortable sortDirection={protocolLeadSortConfig?.key === 'protocolNumber' ? protocolLeadSortConfig.direction : null} onSort={() => setProtocolLeadSortConfig(c => c?.key === 'protocolNumber' && c.direction === 'asc' ? { key: 'protocolNumber', direction: 'desc' } : { key: 'protocolNumber', direction: 'asc' })} />
                          <TableHeader label="Full Name" sortable sortDirection={protocolLeadSortConfig?.key === 'fullName' ? protocolLeadSortConfig.direction : null} onSort={() => setProtocolLeadSortConfig(c => c?.key === 'fullName' && c.direction === 'asc' ? { key: 'fullName', direction: 'desc' } : { key: 'fullName', direction: 'asc' })} />
                          <TableHeader label="ISID" />
                          <TableHeader label="Email" />
                          <TableHeader label="Department" />
                          <TableHeader label="Date Added" sortable sortDirection={protocolLeadSortConfig?.key === 'dateAdded' ? protocolLeadSortConfig.direction : null} onSort={() => setProtocolLeadSortConfig(c => c?.key === 'dateAdded' && c.direction === 'asc' ? { key: 'dateAdded', direction: 'desc' } : { key: 'dateAdded', direction: 'asc' })} />
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPL.map(pl => {
                          const isLastLead = visiblePL.filter(p => p.protocolNumber === pl.protocolNumber).length === 1;
                          return (
                            <tr
                              key={pl.id}
                              className={`border-b border-border last:border-b-0 transition-colors ${
                                isLastLead
                                  ? 'bg-amber-50/60'
                                  : selectedProtocolLeads.has(pl.id)
                                  ? 'bg-primary/5 border-l-4 border-l-primary'
                                  : 'hover:bg-muted/50'
                              }`}
                            >
                              {permissions.canManageProtocolLeads && (
                                <td className="p-3">
                                  {isLastLead ? (
                                    <span
                                      title="Cannot remove: this is the last Project Lead for this protocol"
                                      className="flex items-center justify-center w-4 h-4 rounded border border-border bg-muted/60 cursor-not-allowed opacity-40"
                                    />
                                  ) : (
                                    <Checkbox
                                      checked={selectedProtocolLeads.has(pl.id)}
                                      onChange={() => {
                                        const s = new Set(selectedProtocolLeads);
                                        s.has(pl.id) ? s.delete(pl.id) : s.add(pl.id);
                                        setSelectedProtocolLeads(s);
                                      }}
                                      aria-label={`Select ${pl.isid}`}
                                    />
                                  )}
                                </td>
                              )}
                              <td className="p-3 text-foreground">{pl.therapeuticArea}</td>
                              <td className="p-3 text-foreground">{pl.mkNumber}</td>
                              <td className="p-3">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-foreground">{pl.protocolNumber}</span>
                                  {isLastLead && (
                                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[var(--radius-tag)] bg-amber-100 text-amber-700 border border-amber-300 text-xs whitespace-nowrap">
                                      <AlertTriangle size={10} />
                                      Last Lead
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="p-3 text-foreground">{pl.fullName}</td>
                              <td className="p-3 text-foreground">{pl.isid}</td>
                              <td className="p-3 text-foreground">{pl.email}</td>
                              <td className="p-3 text-foreground">{pl.department}</td>
                              <td className="p-3 text-foreground">{pl.dateAdded}</td>
                            </tr>
                          );
                        })}
                        {filteredPL.length === 0 && (
                          <tr><td colSpan={9} className="p-8 text-center text-muted-foreground">No project leads found</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 flex items-center gap-4">
                    <p className="text-sm text-muted-foreground">Showing {filteredPL.length} of {visiblePL.length} project leads</p>
                    <div className="flex items-center gap-1.5 text-sm text-amber-600">
                      <AlertTriangle size={13} />
                      <span>Rows highlighted in amber are the sole lead for their protocol — add another lead before removing</span>
                    </div>
                  </div>
                </div>
              )}

            </>
          )}
        </div>
      </main>

      {/* ── Add Therapy Lead Modal ── */}
      <Modal isOpen={showAddTALeadModal} onClose={() => setShowAddTALeadModal(false)} title="Add Therapy Lead">
        <div className="flex flex-col gap-4">
          <FormField label="Therapeutic Area" required>
            <Select options={therapeuticAreas} value={addTALeadTA} onChange={setAddTALeadTA} placeholder="Select Therapeutic Area" />
          </FormField>
          <FormField label="MK Number" required>
            <SearchableSelect
              options={compounds}
              value={addTALeadCompound}
              onChange={setAddTALeadCompound}
              placeholder="Search or select MK Number..."
            />
          </FormField>
          <FormField label="Search By">
            <Select options={['ISID', 'Email']} value={addTALeadSearchBy} onChange={setAddTALeadSearchBy} />
          </FormField>
          <FormField label={addTALeadSearchBy} required>
            <SearchableSelect
              options={addTALeadSearchBy === 'ISID' ? mockUsers.map(u => u.isid) : mockUsers.map(u => u.email)}
              value={addTALeadValue}
              onChange={setAddTALeadValue}
              placeholder={addTALeadSearchBy === 'ISID' ? 'Search or select ISID...' : 'Search or select email...'}
            />
          </FormField>
          <div className="flex justify-end gap-3 pt-2">
            <button onClick={() => setShowAddTALeadModal(false)} className="px-4 py-2 border border-border text-foreground rounded-[var(--radius-button)] hover:bg-muted">Cancel</button>
            <button onClick={handleAddTALead} className="px-4 py-2 bg-primary text-primary-foreground rounded-[var(--radius-button)] hover:opacity-90">Add Therapy Lead</button>
          </div>
        </div>
      </Modal>

      {/* ── Add Protocol Lead Modal ── */}
      <Modal isOpen={showAddProtocolLeadModal} onClose={() => setShowAddProtocolLeadModal(false)} title="Add Project Lead">
        <div className="flex flex-col gap-4">
          <FormField label="Therapeutic Area" required>
            <Select options={therapeuticAreas} value={addPLTA} onChange={setAddPLTA} placeholder="Select Therapeutic Area" />
          </FormField>
          <FormField label="MK Number" required>
            <SearchableSelect
              options={compounds}
              value={addPLMKNumber}
              onChange={setAddPLMKNumber}
              placeholder="Search or select MK number..."
            />
          </FormField>
          <FormField label="Protocol Number" required>
            <SearchableSelect
              options={protocolNumbers}
              value={addPLProtocol}
              onChange={setAddPLProtocol}
              placeholder="Search or select protocol number..."
            />
          </FormField>
          <FormField label="Search By">
            <Select options={['ISID', 'Email']} value={addPLSearchBy} onChange={setAddPLSearchBy} />
          </FormField>
          <FormField label={addPLSearchBy} required>
            <SearchableSelect
              options={addPLSearchBy === 'ISID' ? mockUsers.map(u => u.isid) : mockUsers.map(u => u.email)}
              value={addPLValue}
              onChange={setAddPLValue}
              placeholder={addPLSearchBy === 'ISID' ? 'Search or select ISID...' : 'Search or select email...'}
            />
          </FormField>
          <div className="flex justify-end gap-3 pt-2">
            <button onClick={() => setShowAddProtocolLeadModal(false)} className="px-4 py-2 border border-border text-foreground rounded-[var(--radius-button)] hover:bg-muted">Cancel</button>
            <button onClick={handleAddProtocolLead} className="px-4 py-2 bg-primary text-primary-foreground rounded-[var(--radius-button)] hover:opacity-90">Add Project Lead</button>
          </div>
        </div>
      </Modal>

      {/* ── Confirm Last-Lead Override Modal ── */}
      <ConfirmModal
        isOpen={confirmRemovePL}
        onClose={() => setConfirmRemovePL(false)}
        onConfirm={handleConfirmRemovePL}
        title="Remove Last Project Lead"
        message="You are about to remove the last Project Lead for one or more protocols. This will leave those protocols unmanaged. Your TA Lead role allows this override — proceed only if a replacement is being assigned immediately."
        confirmLabel="Override & Remove"
        danger
      />
    </div>
  );
}