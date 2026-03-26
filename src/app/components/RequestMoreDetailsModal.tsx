import { X, Check } from "lucide-react";
import { SDTMExtractRequest } from "./SDTMDataExtract";

interface RequestMoreDetailsModalProps {
  onClose: () => void;
  request: SDTMExtractRequest;
}

export default function RequestMoreDetailsModal({ onClose, request }: RequestMoreDetailsModalProps) {
  // Mock additional data
  const requestDetails = {
    requestedBy: 'petr.smidrkal@msd.com',
    consumerName: 'ARP',
    domainsRequested: 'ae, co, faae, ho, operational, suppae',
    receivedDomains: '-',
    convertedDomains: '-',
    rowAndColumnCounts: '-',
    netAppVolumeName: `prod_preview-unmask_bl-${request.mkVNumber.toLowerCase()}-${request.protocolNumber.toLowerCase()}_tst1-sdtm34-active-0`,
    emailStatus: [
      {
        subject: 'SDTM Data Extraction - Request Submitted',
        to: 'petr.smidrkal@msd.com',
        sent: '2026-03-11 08:55:14',
        status: 'Success'
      },
      {
        subject: 'SDTM Data Extraction - Completed',
        to: 'petr.smidrkal@msd.com',
        sent: '2026-03-11 09:04:52',
        status: 'Success'
      }
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card rounded-[var(--radius-card)] shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-foreground" style={{ fontSize: 'var(--text-h3)' }}>
            Request More Details
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-6">
            {/* Requested By */}
            <div className="pb-4 border-b border-border">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-foreground font-medium">Requested By</div>
                <div className="col-span-2 text-foreground">{requestDetails.requestedBy}</div>
              </div>
            </div>

            {/* Consumer Name */}
            <div className="pb-4 border-b border-border">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-foreground font-medium">Consumer Name</div>
                <div className="col-span-2 text-foreground">{requestDetails.consumerName}</div>
              </div>
            </div>

            {/* Domains Requested */}
            <div className="pb-4 border-b border-border">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-foreground font-medium">Domains Requested</div>
                <div className="col-span-2 text-foreground">{requestDetails.domainsRequested}</div>
              </div>
            </div>

            {/* Received Domains */}
            <div className="pb-4 border-b border-border">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-foreground font-medium">Received Domains</div>
                <div className="col-span-2 text-foreground">{requestDetails.receivedDomains}</div>
              </div>
            </div>

            {/* Converted Domains */}
            <div className="pb-4 border-b border-border">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-foreground font-medium">Converted Domains</div>
                <div className="col-span-2 text-foreground">{requestDetails.convertedDomains}</div>
              </div>
            </div>

            {/* Row and Column Counts */}
            <div className="pb-4 border-b border-border">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-foreground font-medium">Row and Column Counts</div>
                <div className="col-span-2 text-foreground">{requestDetails.rowAndColumnCounts}</div>
              </div>
            </div>

            {/* NetApp Volume Name */}
            <div className="pb-4 border-b border-border">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-foreground font-medium">NetApp Volume Name</div>
                <div className="col-span-2 text-foreground break-all">{requestDetails.netAppVolumeName}</div>
              </div>
            </div>

            {/* Email Status */}
            <div className="pb-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-foreground font-medium">Email Status</div>
                <div className="col-span-2 space-y-4">
                  {requestDetails.emailStatus.map((email, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-foreground">
                        <span className="font-medium">Subject:</span> {email.subject}
                      </div>
                      <div className="text-foreground">
                        <span className="font-medium">To:</span> {email.to}
                      </div>
                      <div className="text-foreground">
                        <span className="font-medium">Sent:</span> {email.sent}
                      </div>
                      <div className="text-foreground flex items-center gap-2">
                        <span className="font-medium">Status:</span>
                        <Check size={16} className="text-green-600" />
                        <span>{email.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Extract Status Details Section */}
            <div className="pt-4 border-t-2 border-border">
              <h3 className="text-foreground mb-4 font-medium" style={{ fontSize: 'var(--text-h4)' }}>
                Extract Status Information
              </h3>
              <div className="bg-white border border-border rounded-[var(--radius)] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="text-left py-3 px-4 text-foreground font-bold w-[35%]">
                        Property
                      </th>
                      <th className="text-left py-3 px-4 text-foreground font-bold">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-foreground font-medium">
                        jobRunErrorDetails
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        Schema '{request.schemaName}' does not exist in catalog '{request.catalogName}'
                      </td>
                    </tr>
                    <tr className="border-b border-border bg-muted/10">
                      <td className="py-3 px-4 text-foreground font-medium">
                        jobRunStatus
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        invalid_schema
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-foreground font-medium">
                        objectLocation
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        -
                      </td>
                    </tr>
                    <tr className="border-b border-border bg-muted/10">
                      <td className="py-3 px-4 text-foreground font-medium">
                        requestId
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {request.requestId}
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-foreground font-medium">
                        runId
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {request.runId}
                      </td>
                    </tr>
                    <tr className="border-b border-border bg-muted/10">
                      <td className="py-3 px-4 text-foreground font-medium">
                        runIdDetails
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-foreground font-medium">
                        runIdStatus
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        SUCCESS
                      </td>
                    </tr>
                    <tr className="border-b border-border bg-muted/10">
                      <td className="py-3 px-4 text-foreground font-medium">
                        requestedDate
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {request.requestedDate}
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-foreground font-medium">
                        archivedStaged
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {request.archivedStaged}
                      </td>
                    </tr>
                    <tr className="border-b border-border bg-muted/10">
                      <td className="py-3 px-4 text-foreground font-medium">
                        dataLifecycle
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {request.dataLifecycle}
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-foreground font-medium">
                        maskedBlinded
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {request.maskedBlinded}
                      </td>
                    </tr>
                    <tr className="border-b border-border bg-muted/10">
                      <td className="py-3 px-4 text-foreground font-medium">
                        catalogName
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {request.catalogName}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-foreground font-medium">
                        schemaName
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {request.schemaName}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-card border-t border-border px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-[var(--radius-button)] bg-card border border-border text-foreground hover:bg-muted transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
