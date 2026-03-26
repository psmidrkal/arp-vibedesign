import { ChevronRight, RefreshCw, Database } from "lucide-react";
import { useState, useEffect } from "react";
import TopNav from "./shared/TopNav";
import SearchBar from "./shared/SearchBar";
import TableHeader from "./shared/TableHeader";
import EmptyState from "./shared/EmptyState";
import LoadingState from "./shared/LoadingState";
import RequestSDTMModal from "./RequestSDTMModal";
import RequestMoreDetailsModal from "./RequestMoreDetailsModal";
import { sortData, SortConfig } from "@/app/utils/tableUtils";

export interface SDTMExtractRequest {
  id: string;
  requestId: string;
  runId: string;
  requestedDate: string;
  archivedStaged: string;
  dataLifecycle: string;
  maskedBlinded: string;
  mkVNumber: string;
  protocolNumber: string;
  catalogName: string;
  schemaName: string;
  extractStatus: string;
  convertStatus: string;
  convertProgress: string;
}

interface SDTMDataExtractProps {
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'admin' | 'reports' | 'sdtm-extract') => void;
  extractRequests: SDTMExtractRequest[];
  fromProjects?: boolean;
  onNewSDTMRequest?: (data: any) => void;
}

export default function SDTMDataExtract({ onNavigate, extractRequests, fromProjects, onNewSDTMRequest }: SDTMDataExtractProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchBy, setSearchBy] = useState('Study');
  const [mkVNumber, setMkVNumber] = useState('');
  const [protocolNumber, setProtocolNumber] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig | null>({ key: 'requestedDate', direction: 'desc' });
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showStatusDetailsModal, setShowStatusDetailsModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<SDTMExtractRequest | null>(null);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Get unique MK/V Numbers for dropdown
  const uniqueMkVNumbers = Array.from(new Set(extractRequests.map(req => req.mkVNumber))).sort();

  // Get unique Protocol Numbers for dropdown
  const uniqueProtocolNumbers = Array.from(new Set(extractRequests.map(req => req.protocolNumber))).sort();

  // Filter and sort logic
  const processedRequests = () => {
    let filtered = [...extractRequests];

    // Apply MK/V Number filter
    if (mkVNumber) {
      filtered = filtered.filter(req => req.mkVNumber === mkVNumber);
    }

    // Apply Protocol Number filter
    if (protocolNumber) {
      filtered = filtered.filter(req => req.protocolNumber === protocolNumber);
    }

    // Apply sort
    if (sortConfig) {
      filtered = sortData(filtered, sortConfig);
    }

    return filtered;
  };

  const filteredRequests = processedRequests();

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

  const handleReset = () => {
    setMkVNumber('');
    setProtocolNumber('');
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  const handleStatusDetails = (request: SDTMExtractRequest) => {
    setSelectedRequest(request);
    setShowStatusDetailsModal(true);
  };

  return (
    <div className="bg-background min-h-screen">
      <TopNav onNavigate={onNavigate} activeScreen="sdtm-extract" />

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
          {fromProjects && (
            <>
              <ChevronRight size={14} className="text-muted-foreground" />
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('my-studies');
                }}
                className="text-primary hover:underline cursor-pointer"
              >
                Projects
              </a>
            </>
          )}
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="text-foreground">SDTM Data Extract</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-8 bg-muted">
        <div className="max-w-[95%] mx-auto bg-card p-8 rounded-[var(--radius-card)]">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-primary" style={{ fontSize: 'var(--text-h3)' }}>
              Search Requested SDTM Data Extract
            </h1>
            <button
              onClick={() => setShowRequestModal(true)}
              className="px-6 py-2.5 rounded-[var(--radius-button)] bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Request SDTM
            </button>
          </div>

          {/* Search Section */}
          <div className="bg-muted/30 p-6 rounded-[var(--radius)] mb-8">
            <div className="grid grid-cols-3 gap-4">
              {/* Search By */}
              <div>
                <label className="block text-foreground mb-2">
                  Search by
                </label>
                <select
                  value={searchBy}
                  onChange={(e) => setSearchBy(e.target.value)}
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-input-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="Study">Study</option>
                </select>
              </div>

              {/* MK/V Number */}
              <div>
                <label className="block text-foreground mb-2">
                  MK/V Number
                </label>
                <select
                  value={mkVNumber}
                  onChange={(e) => setMkVNumber(e.target.value)}
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-input-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select MK/V Number</option>
                  {uniqueMkVNumbers.map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Protocol Number */}
              <div>
                <label className="block text-foreground mb-2">
                  Protocol Number
                </label>
                <select
                  value={protocolNumber}
                  onChange={(e) => setProtocolNumber(e.target.value)}
                  className="w-full border border-border rounded-[var(--radius)] px-3 py-2 bg-input-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select Protocol Number</option>
                  {uniqueProtocolNumbers.map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* My Recent SDTM Extract Requests */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-foreground" style={{ fontSize: 'var(--text-h4)' }}>
                My Recent SDTM Extract Requests
              </h2>
              <button
                onClick={handleRefresh}
                className="text-primary hover:opacity-80 transition-opacity"
                aria-label="Refresh"
              >
                <RefreshCw size={20} />
              </button>
            </div>

            {isLoading ? (
              <LoadingState rows={5} />
            ) : extractRequests.length === 0 ? (
              <div className="text-center py-16">
                <EmptyState
                  icon={Database}
                  title="No SDTM extracts yet"
                  description="You haven't requested any SDTM extracts yet. Go to the Projects page to submit your first extract request."
                  actionLabel="Go to Projects"
                  onAction={() => onNavigate('my-studies')}
                />
              </div>
            ) : filteredRequests.length === 0 ? (
              <EmptyState
                icon={RefreshCw}
                title="No SDTM extract requests found"
                description="No extract requests match your search criteria."
              />
            ) : (
              <>
                {/* Table */}
                <div className="border border-border rounded-[var(--radius)] overflow-auto mb-4">
                  <table className="w-full relative">
                    <thead>
                      <tr className="border-b border-border">
                        {/* Static Column: Study */}
                        <th 
                          className="text-left py-4 px-4 text-foreground sticky left-0 z-20 min-w-[200px]"
                          style={{ backgroundColor: '#F5F5F5' }}
                        >
                          <span className="font-bold">Study</span>
                        </th>
                        {/* Static Column: MK Number */}
                        <th 
                          className="text-left py-4 px-4 text-foreground sticky left-[200px] z-20 min-w-[120px]"
                          style={{ backgroundColor: '#F5F5F5' }}
                        >
                          <span className="font-bold">MK Number</span>
                        </th>
                        {/* Static Column: Protocol Number */}
                        <th 
                          className="text-left py-4 px-4 text-foreground sticky left-[320px] z-20 min-w-[140px]"
                          style={{ backgroundColor: '#F5F5F5' }}
                        >
                          <span className="font-bold">Protocol Number</span>
                        </th>
                        <TableHeader
                          label="Extract Status"
                          sortable
                          sortDirection={sortConfig?.key === 'extractStatus' ? sortConfig.direction : null}
                          onSort={() => handleSort('extractStatus')}
                        />
                        <TableHeader
                          label="Convert Status"
                          sortable
                          sortDirection={sortConfig?.key === 'convertStatus' ? sortConfig.direction : null}
                          onSort={() => handleSort('convertStatus')}
                        />
                        <th className="text-left py-4 px-4 text-foreground bg-muted/50">
                          <span className="font-bold">Convert Progress</span>
                        </th>
                        <th className="text-left py-4 px-4 text-foreground bg-muted/50 min-w-[120px]">
                          <span className="font-bold">View More</span>
                        </th>
                        <th className="text-left py-4 px-4 text-foreground bg-muted/50 min-w-[120px]">
                          <span className="font-bold">Go to Volume</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRequests.map((request, index) => {
                        // Determine solid background color for sticky columns
                        const stickyBgColor = index % 2 === 0 ? '#FFFFFF' : '#FCFCFC';
                        
                        return (
                          <tr
                            key={request.id}
                            className={`border-b border-border transition-colors ${
                              index % 2 === 0
                                ? 'bg-card hover:bg-muted/20'
                                : 'bg-muted/10 hover:bg-muted/30'
                            }`}
                          >
                            {/* Static Column: Study */}
                            <td 
                              className="py-4 px-4 align-top sticky left-0 z-10 min-w-[200px]"
                              style={{ 
                                backgroundColor: stickyBgColor,
                                boxShadow: '2px 0 4px rgba(0,0,0,0.05)' 
                              }}
                            >
                              <span className="text-foreground">{request.mkVNumber} - {request.protocolNumber}</span>
                            </td>
                            {/* Static Column: MK Number */}
                            <td 
                              className="py-4 px-4 text-foreground align-top sticky left-[200px] z-10 min-w-[120px]"
                              style={{ 
                                backgroundColor: stickyBgColor,
                                boxShadow: '2px 0 4px rgba(0,0,0,0.05)' 
                              }}
                            >{request.mkVNumber}</td>
                            {/* Static Column: Protocol Number */}
                            <td 
                              className="py-4 px-4 text-foreground align-top sticky left-[320px] z-10 min-w-[140px]"
                              style={{ 
                                backgroundColor: stickyBgColor,
                                boxShadow: '2px 0 4px rgba(0,0,0,0.05)' 
                              }}
                            >{request.protocolNumber}</td>
                            {/* Extract Status */}
                            <td className="py-4 px-4 text-foreground align-top">{request.extractStatus}</td>
                            {/* Convert Status */}
                            <td className="py-4 px-4 text-foreground align-top">{request.convertStatus}</td>
                            {/* Convert Progress */}
                            <td className="py-4 px-4 text-foreground align-top">{request.convertProgress}</td>
                            {/* View More */}
                            <td className="py-4 px-4 align-top">
                              <button
                                onClick={() => handleStatusDetails(request)}
                                className="text-primary hover:underline cursor-pointer"
                              >
                                View More
                              </button>
                            </td>
                            {/* Go to Volume */}
                            <td className="py-4 px-4 align-top">
                              <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="text-primary hover:underline cursor-pointer"
                              >
                                Go to Volume
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between">
                  <span className="text-foreground">
                    {filteredRequests.length > 0 ? '1' : '0'}-{filteredRequests.length} of {filteredRequests.length} requests
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        disabled
                        className="w-8 h-8 flex items-center justify-center border border-border rounded-[var(--radius)] bg-card text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        1
                      </button>
                    </div>
                    <span className="text-foreground">15 / page</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card py-4 text-center text-sm text-muted-foreground border-t border-border">
        Copyright © 2025 Merck & Co., Inc., Rahway, NJ, USA and its affiliates. All rights reserved.
      </footer>

      {/* Request SDTM Modal */}
      {showRequestModal && (
        <RequestSDTMModal
          onClose={() => setShowRequestModal(false)}
          onConfirm={(data) => {
            if (onNewSDTMRequest) {
              onNewSDTMRequest(data);
            }
            setShowRequestModal(false);
          }}
        />
      )}

      {/* Extract Status Details Modal */}
      {showStatusDetailsModal && selectedRequest && (
        <RequestMoreDetailsModal
          onClose={() => setShowStatusDetailsModal(false)}
          request={selectedRequest}
        />
      )}
    </div>
  );
}