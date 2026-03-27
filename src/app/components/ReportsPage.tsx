import { useState } from "react";
import { ChevronRight, FileText, Search, Filter, Download, Clock, Calendar } from "lucide-react";
import TopNav from "./shared/TopNav";
import { useRole } from "@/app/context/RoleContext";

interface ReportsPageProps {
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'admin' | 'reports') => void;
}

interface AuditEntry {
  id: string;
  timestamp: string;
  action: string;
  actor: string;
  actorRole: string;
  target: string;
  targetType: 'TA Lead' | 'Project Lead' | 'Project Team Member' | 'Project';
  detail: string;
  protocol?: string;
  therapeuticArea?: string;
}

// User directory mapping ISID to full name
const USER_DIRECTORY: Record<string, string> = {
  'smidrkal': 'Smidrkal, Katherine',
  'petrovai': 'Petrov, Ivan',
  'brownkr': 'Brown, Kevin',
  'chengju': 'Cheng, Julia',
  'garciamr': 'Garcia, Maria',
  'arnoldi': 'Arnold, Elizabeth',
  'chaudmo': 'Chaud, Monica',
  'smithj': 'Smith, John',
  'tengch': 'Teng, Charles',
  'johnsond': 'Johnson, David',
  'wilsonm': 'Wilson, Michelle',
  'andersonp': 'Anderson, Patricia',
  'thomasr': 'Thomas, Robert',
  'martinl': 'Martin, Laura',
  'leej': 'Lee, Jennifer',
  'garciac': 'Garcia, Carlos',
  'rodriguezm': 'Rodriguez, Maria',
  'hernandezj': 'Hernandez, Jose',
  'lopezs': 'Lopez, Sofia',
  'gonzaleza': 'Gonzalez, Ana',
  'wallaceb': 'Wallace, Brian',
  'nguyentt': 'Nguyen, Tina',
  'clinops4': 'Clinton, Patricia',
  'prakashu': 'Prakash, Uma',
  'jastis': 'Jasti, Srinivas',
  'harrispl': 'Harris, Paul',
  'okaforec': 'Okafor, Emmanuel',
  'kunmylil': 'Kunmyil, Lila',
};

// Helper function to get display name
function getDisplayName(isidOrTarget: string): string {
  return USER_DIRECTORY[isidOrTarget] || isidOrTarget;
}

const MOCK_AUDIT: AuditEntry[] = [
  { id: '1',  timestamp: '2026-03-04 09:14', action: 'Added',    actor: 'smidrkal',  actorRole: 'TA Lead', target: 'tengch',     targetType: 'Project Lead',       detail: 'Added as Project Lead for MK-3475 (Oncology)',                                           protocol: 'MK-3475',       therapeuticArea: 'Oncology' },
  { id: '2',  timestamp: '2026-03-03 15:42', action: 'Removed',  actor: 'petrovai',  actorRole: 'Therapy Lead',              target: 'wallaceb',   targetType: 'Project Team Member', detail: 'Removed wallaceb from project team for V999-cough',                                      protocol: 'V999-cough',    therapeuticArea: 'Vaccines' },
  { id: '3',  timestamp: '2026-03-03 11:08', action: 'Added',    actor: 'petrovai',  actorRole: 'Therapy Lead',              target: 'nguyentt',   targetType: 'Project Lead',       detail: 'Added as Project Lead for V999-cough (Vaccines)',                                         protocol: 'V999-cough',    therapeuticArea: 'Vaccines' },
  { id: '4',  timestamp: '2026-03-02 14:30', action: 'Added',    actor: 'brownkr',   actorRole: 'Therapy Lead',              target: 'smithj',     targetType: 'Project Lead',       detail: 'Added as Project Lead for MK-8900-heart (Cardiovascular)',                               protocol: 'MK-8900-heart', therapeuticArea: 'Cardiovascular' },
  { id: '5',  timestamp: '2026-03-01 10:05', action: 'Created',  actor: 'smithj',    actorRole: 'Project Lead',         target: 'cv-study-02',targetType: 'Project',            detail: 'New project created: cv-study-02 (General, Cardiovascular)',                             protocol: 'MK-8900-heart', therapeuticArea: 'Cardiovascular' },
  { id: '6',  timestamp: '2026-02-28 16:22', action: 'Removed',  actor: 'smidrkal',  actorRole: 'TA Lead', target: 'clinops4',   targetType: 'Project Team Member', detail: 'Removed clinops4 from project team for MK-8900-heart',                                   protocol: 'MK-8900-heart', therapeuticArea: 'Cardiovascular' },
  { id: '7',  timestamp: '2026-02-27 09:50', action: 'Added',    actor: 'smidrkal',  actorRole: 'TA Lead', target: 'garciamr',   targetType: 'Therapy Lead',            detail: 'Assigned garciamr as Therapy Lead for Immunology',                                            therapeuticArea: 'Immunology' },
  { id: '8',  timestamp: '2026-02-25 13:17', action: 'Created',  actor: 'kunmylil',  actorRole: 'Project Lead',         target: 'test10',     targetType: 'Project',            detail: 'New project created: test10 (General, Oncology)',                                        protocol: 'prot005',       therapeuticArea: 'Oncology' },
  { id: '9',  timestamp: '2026-02-24 11:40', action: 'Added',    actor: 'kunmylil',  actorRole: 'Project Lead',         target: 'prakashu',   targetType: 'Project Team Member', detail: 'Added prakashu as Project Team Member to project test10',                                protocol: 'prot005',       therapeuticArea: 'Oncology' },
  { id: '10', timestamp: '2026-02-20 08:30', action: 'Removed',  actor: 'smidrkal',  actorRole: 'TA Lead', target: 'arnoldi',    targetType: 'Project Lead',       detail: 'Removed arnoldi as Project Lead for MK-3475 (tengch remains as active Project Lead)',        protocol: 'MK-3475',  therapeuticArea: 'Oncology' },
  { id: '11', timestamp: '2026-02-18 14:05', action: 'Added',    actor: 'chaudmo',   actorRole: 'Project Lead',         target: 'jastis',     targetType: 'Project Team Member', detail: 'Added jastis as Project Team Member to project test11',                                  protocol: 'prot006',       therapeuticArea: 'Oncology' },
  { id: '12', timestamp: '2026-02-15 10:20', action: 'Added',    actor: 'smidrkal',  actorRole: 'TA Lead', target: 'chengju',    targetType: 'Therapy Lead',            detail: 'Assigned chengju as Therapy Lead for Neuroscience',                                           therapeuticArea: 'Neuroscience' },
  { id: '13', timestamp: '2026-02-12 09:00', action: 'Removed',  actor: 'smidrkal',  actorRole: 'TA Lead', target: 'harrispl',   targetType: 'Therapy Lead',            detail: 'Removed harrispl as Therapy Lead for Immunology',                                             therapeuticArea: 'Immunology' },
  { id: '14', timestamp: '2026-02-10 14:33', action: 'Added',    actor: 'brownkr',   actorRole: 'Therapy Lead',              target: 'okaforec',   targetType: 'Project Team Member', detail: 'Added okaforec as Project Team Member to project MK-8900-heart',                        protocol: 'MK-8900-heart', therapeuticArea: 'Cardiovascular' },
  { id: '15', timestamp: '2026-02-07 11:15', action: 'Created',  actor: 'tengch',    actorRole: 'Project Lead',         target: 'onc-fw-01',  targetType: 'Project',            detail: 'New project created: onc-fw-01 (Firewalled, Oncology)',                                  protocol: 'MK-3475',       therapeuticArea: 'Oncology' },
];

const ACTION_COLORS: Record<string, { bg: string; text: string }> = {
  Added:   { bg: 'bg-green-100', text: 'text-green-800' },
  Removed: { bg: 'bg-red-100',   text: 'text-red-700' },
  Created: { bg: 'bg-primary/10',text: 'text-primary' },
};

const DEFAULT_ACTION_COLORS = { bg: 'bg-muted', text: 'text-muted-foreground' };

const TARGET_COLORS: Record<string, string> = {
  'Therapy Lead':        'bg-muted border border-border text-muted-foreground',
  'Project Lead':   'bg-blue-50 text-blue-700',
  'Project Team Member': 'bg-purple-50 text-purple-700',
  'Project':        'bg-primary/10 text-primary',
};

const DEFAULT_TARGET_COLORS = 'bg-muted text-muted-foreground';

function toUniqueSortedValues<T extends string>(values: T[]): T[] {
  return Array.from(new Set(values)).sort();
}

const ALL_ACTIONS = toUniqueSortedValues(MOCK_AUDIT.map((entry) => entry.action));
const ALL_TYPES = toUniqueSortedValues(MOCK_AUDIT.map((entry) => entry.targetType));
const ALL_TAS = toUniqueSortedValues(
  MOCK_AUDIT.map((entry) => entry.therapeuticArea).filter(Boolean) as string[]
);

function ActionBadge({ action }: { action: string }) {
  const colors = ACTION_COLORS[action] ?? DEFAULT_ACTION_COLORS;
  return <span className={`px-2 py-0.5 rounded-[var(--radius-tag)] text-xs ${colors.bg} ${colors.text}`}>{action}</span>;
}

function TypeBadge({ type }: { type: string }) {
  const colors = TARGET_COLORS[type] ?? DEFAULT_TARGET_COLORS;
  return <span className={`px-2 py-0.5 rounded-[var(--radius-tag)] text-xs ${colors}`}>{type}</span>;
}

// Parse "YYYY-MM-DD HH:mm" to comparable date string (YYYY-MM-DD)
function entryDate(timestamp: string) {
  return timestamp.split(' ')[0];
}

type Tab = 'audit-trail' | 'annual-report';

export default function ReportsPage({ onNavigate }: ReportsPageProps) {
  const { permissions } = useRole();
  const [activeTab, setActiveTab] = useState<Tab>('audit-trail');

  // Audit trail filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAction, setFilterAction] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterTA, setFilterTA] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const hasActiveFilters = Boolean(searchQuery || filterAction || filterType || filterTA || dateFrom || dateTo);

  const filtered = MOCK_AUDIT.filter(entry => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || [entry.actor, entry.target, entry.detail, entry.protocol ?? '', entry.therapeuticArea ?? ''].some(v => v.toLowerCase().includes(q));
    const matchesAction = !filterAction || entry.action === filterAction;
    const matchesType   = !filterType   || entry.targetType === filterType;
    const matchesTA     = !filterTA     || entry.therapeuticArea === filterTA;
    const eDate = entryDate(entry.timestamp);
    const matchesFrom   = !dateFrom || eDate >= dateFrom;
    const matchesTo     = !dateTo   || eDate <= dateTo;
    return matchesSearch && matchesAction && matchesType && matchesTA && matchesFrom && matchesTo;
  });

  const handleExport = () => {
    const csv = [
      ['Timestamp', 'Action', 'Actor', 'Actor Role', 'Target', 'Target Type', 'Detail', 'Protocol', 'Therapeutic Area'],
      ...filtered.map(e => [e.timestamp, e.action, e.actor, e.actorRole, e.target, e.targetType, e.detail, e.protocol ?? '', e.therapeuticArea ?? '']),
    ].map(row => row.map(v => `"${v}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'audit-trail.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setFilterAction('');
    setFilterType('');
    setFilterTA('');
    setDateFrom('');
    setDateTo('');
  };

  return (
    <div className="bg-background min-h-screen">
      <TopNav onNavigate={onNavigate} activeScreen="reports" />

      {/* Breadcrumbs */}
      <div className="bg-card px-6 py-3 border-b border-border">
        <div className="flex items-center gap-2 text-sm">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-primary hover:underline cursor-pointer">Home</a>
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="text-muted-foreground">Reports</span>
        </div>
      </div>

      {/* Main */}
      <main className="p-8 bg-muted min-h-[calc(100vh-100px)]">
        <div className="max-w-7xl mx-auto">

          {/* Page header */}
          <div className="flex items-center gap-3 mb-6">
            <div style={{ backgroundColor: 'rgba(0,133,124,0.1)' }} className="p-3 rounded-[var(--radius)]">
              <FileText size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="m-0" style={{ color: '#00857C' }}>Reports</h3>
              <p className="m-0 text-muted-foreground text-sm">Audit trail and access history</p>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="bg-card rounded-t-[var(--radius-card)] border border-border border-b-0">
            <div className="flex">
              {/* Audit Trail Tab */}
              <button
                onClick={() => setActiveTab('audit-trail')}
                className={`relative px-6 py-4 text-sm transition-colors cursor-pointer focus:outline-none ${
                  activeTab === 'audit-trail'
                    ? 'text-primary font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Audit Trail
                {activeTab === 'audit-trail' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t" />
                )}
              </button>

              {/* Annual Report Tab — disabled */}
              <button
                disabled
                title="Coming soon"
                className="relative px-6 py-4 text-sm text-muted-foreground opacity-40 cursor-not-allowed select-none focus:outline-none flex items-center gap-2"
              >
                Annual Report
                <span className="px-1.5 py-0.5 bg-muted border border-border rounded text-[10px] text-muted-foreground leading-none">
                  Coming soon
                </span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-card p-6 rounded-b-[var(--radius-card)] rounded-tr-[var(--radius-card)] border border-border border-t-0">

            {activeTab === 'audit-trail' && (
              <>
                {/* Section header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h4 className="text-foreground m-0 mb-1">Access Audit Trail</h4>
                    <p className="text-sm text-muted-foreground">Full record of who granted access, when, and which role or access level was assigned.</p>
                  </div>
                  <button
                    onClick={handleExport}
                    className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-[var(--radius-button)] hover:bg-muted transition-colors text-sm"
                  >
                    <Download size={14} />
                    Export CSV
                  </button>
                </div>

                {/* Filters */}
                <div className="space-y-3 mb-5">
                  {/* Row 1: search + action + type + TA */}
                  <div className="flex flex-wrap gap-3">
                    {/* Search */}
                    <div className="relative flex-1 min-w-[220px]">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search actor, target, detail..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 bg-input-background border border-border rounded-[var(--radius)] text-foreground text-sm"
                      />
                    </div>

                    {/* Action filter */}
                    <div className="relative">
                      <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <select
                        value={filterAction}
                        onChange={e => setFilterAction(e.target.value)}
                        className="pl-8 pr-6 py-2 bg-input-background border border-border rounded-[var(--radius)] text-foreground text-sm appearance-none cursor-pointer"
                      >
                        <option value="">All Actions</option>
                        {ALL_ACTIONS.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>

                    {/* Type filter */}
                    <div className="relative">
                      <select
                        value={filterType}
                        onChange={e => setFilterType(e.target.value)}
                        className="px-3 py-2 bg-input-background border border-border rounded-[var(--radius)] text-foreground text-sm appearance-none cursor-pointer"
                      >
                        <option value="">All Types</option>
                        {ALL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    {/* TA filter */}
                    <div className="relative">
                      <select
                        value={filterTA}
                        onChange={e => setFilterTA(e.target.value)}
                        className="px-3 py-2 bg-input-background border border-border rounded-[var(--radius)] text-foreground text-sm appearance-none cursor-pointer"
                      >
                        <option value="">All TAs</option>
                        {ALL_TAS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Row 2: date range filter */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>Date range:</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="text-sm text-muted-foreground whitespace-nowrap">From</label>
                      <input
                        type="date"
                        value={dateFrom}
                        max={dateTo || undefined}
                        onChange={e => setDateFrom(e.target.value)}
                        className="px-3 py-2 bg-input-background border border-border rounded-[var(--radius)] text-foreground text-sm cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="text-sm text-muted-foreground whitespace-nowrap">To</label>
                      <input
                        type="date"
                        value={dateTo}
                        min={dateFrom || undefined}
                        onChange={e => setDateTo(e.target.value)}
                        className="px-3 py-2 bg-input-background border border-border rounded-[var(--radius)] text-foreground text-sm cursor-pointer"
                      />
                    </div>

                    {(dateFrom || dateTo) && (
                      <button
                        onClick={() => { setDateFrom(''); setDateTo(''); }}
                        className="text-xs text-muted-foreground hover:text-foreground underline"
                      >
                        Clear dates
                      </button>
                    )}

                    {/* Summary pill when dates are set */}
                    {(dateFrom || dateTo) && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-[var(--radius-tag)]">
                        {dateFrom && dateTo
                          ? `${dateFrom} → ${dateTo}`
                          : dateFrom
                          ? `From ${dateFrom}`
                          : `Until ${dateTo}`}
                      </span>
                    )}

                    {/* Clear all filters */}
                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="ml-auto px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-[var(--radius-button)] hover:bg-muted transition-colors"
                      >
                        Clear all filters
                      </button>
                    )}
                  </div>
                </div>

                {/* Table */}
                <div className="border border-border rounded-[var(--radius)] overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 text-foreground text-sm w-36">Timestamp</th>
                        <th className="text-left p-3 text-foreground text-sm w-24">Action</th>
                        <th className="text-left p-3 text-foreground text-sm">Actor</th>
                        <th className="text-left p-3 text-foreground text-sm">Target</th>
                        <th className="text-left p-3 text-foreground text-sm w-32">Type</th>
                        <th className="text-left p-3 text-foreground text-sm">Detail</th>
                        <th className="text-left p-3 text-foreground text-sm w-32">Therapeutic Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map(entry => (
                        <tr key={entry.id} className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                          <td className="p-3">
                            <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                              <Clock size={11} />
                              <span>{entry.timestamp}</span>
                            </div>
                          </td>
                          <td className="p-3"><ActionBadge action={entry.action} /></td>
                          <td className="p-3">
                            <p className="m-0 text-foreground text-sm">{getDisplayName(entry.actor)}</p>
                            <p className="m-0 text-muted-foreground text-xs">{entry.actorRole}</p>
                          </td>
                          <td className="p-3 text-foreground text-sm">{getDisplayName(entry.target)}</td>
                          <td className="p-3"><TypeBadge type={entry.targetType} /></td>
                          <td className="p-3 text-foreground text-sm">{entry.detail}</td>
                          <td className="p-3 text-muted-foreground text-sm">{entry.therapeuticArea ?? '—'}</td>
                        </tr>
                      ))}
                      {filtered.length === 0 && (
                        <tr>
                          <td colSpan={7} className="p-10 text-center text-muted-foreground">
                            No audit entries match your filters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  Showing {filtered.length} of {MOCK_AUDIT.length} entries
                </p>
              </>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}