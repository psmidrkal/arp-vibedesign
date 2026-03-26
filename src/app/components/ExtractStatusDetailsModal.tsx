import { X } from "lucide-react";
import { SDTMExtractRequest } from "./SDTMDataExtract";

interface ExtractStatusDetailsModalProps {
  onClose: () => void;
  request: SDTMExtractRequest;
}

export default function ExtractStatusDetailsModal({ onClose, request }: ExtractStatusDetailsModalProps) {
  // Generate mock status data from the request
  const statusData = {
    jobRunErrorDetails: `Schema '${request.schemaName}' does not exist in catalog '${request.catalogName}'`,
    jobRunStatus: 'invalid_schema',
    objectLocation: '-',
    requestId: request.requestId,
    runId: request.runId,
    runIdDetails: '',
    runIdStatus: 'SUCCESS',
    timestamp: new Date().toISOString().replace('Z', ''),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card rounded-[var(--radius-card)] shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-foreground" style={{ fontSize: 'var(--text-h3)' }}>
            Extract Status Details
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
          <h3 className="text-foreground mb-4" style={{ fontSize: 'var(--text-h4)' }}>
            Extract Status Information
          </h3>

          {/* Status Table */}
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
                    {statusData.jobRunErrorDetails}
                  </td>
                </tr>
                <tr className="border-b border-border bg-muted/10">
                  <td className="py-3 px-4 text-foreground font-medium">
                    jobRunStatus
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {statusData.jobRunStatus}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-foreground font-medium">
                    objectLocation
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {statusData.objectLocation}
                  </td>
                </tr>
                <tr className="border-b border-border bg-muted/10">
                  <td className="py-3 px-4 text-foreground font-medium">
                    requestId
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {statusData.requestId}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-foreground font-medium">
                    runId
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {statusData.runId}
                  </td>
                </tr>
                <tr className="border-b border-border bg-muted/10">
                  <td className="py-3 px-4 text-foreground font-medium">
                    runIdDetails
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {statusData.runIdDetails}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-foreground font-medium">
                    runIdStatus
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {statusData.runIdStatus}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    timestamp
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {statusData.timestamp}
                  </td>
                </tr>
              </tbody>
            </table>
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