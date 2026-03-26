import { CheckCircle, XCircle, X } from "lucide-react";

interface BulkActionBarProps {
  selectedCount: number;
  onApprove?: () => void;
  onReject?: () => void;
  onClear: () => void;
  approveLabel?: string;
  rejectLabel?: string;
}

export default function BulkActionBar({ 
  selectedCount, 
  onApprove, 
  onReject, 
  onClear,
  approveLabel = "Approve Selected",
  rejectLabel = "Reject Selected"
}: BulkActionBarProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="sticky top-0 z-10 bg-primary/10 border border-primary rounded-[var(--radius)] p-4 mb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-foreground">
          <CheckCircle size={18} className="text-primary" />
          <span className="font-bold">{selectedCount} item{selectedCount !== 1 ? 's' : ''} selected</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {onApprove && (
          <button
            onClick={onApprove}
            className="flex items-center gap-2 bg-chart-2 text-white px-6 py-2 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity"
          >
            <CheckCircle size={16} />
            Approve Selected
          </button>
        )}
        {onReject && (
          <button
            onClick={onReject}
            className="flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-2 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity"
          >
            <XCircle size={16} />
            {rejectLabel}
          </button>
        )}
        <button
          onClick={onClear}
          className="flex items-center gap-2 bg-card text-foreground px-4 py-2 rounded-[var(--radius-button)] border border-border hover:bg-muted transition-colors"
        >
          <X size={16} />
          Clear
        </button>
      </div>
    </div>
  );
}