import { Download, FileSpreadsheet, FileText } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { exportToExcel, exportToCSV, ExportColumn } from "@/app/utils/exportUtils";
import { toast } from "./Toast";

interface ExportButtonProps {
  data: any[];
  columns: ExportColumn[];
  filename: string;
  disabled?: boolean;
}

export default function ExportButton({ data, columns, filename, disabled = false }: ExportButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleExport = (format: 'excel' | 'csv') => {
    try {
      if (format === 'excel') {
        exportToExcel({ filename, columns, data });
        toast.success(`Exported ${data.length} items to Excel`);
      } else {
        exportToCSV({ filename, columns, data });
        toast.success(`Exported ${data.length} items to CSV`);
      }
      setIsOpen(false);
    } catch (error) {
      toast.error('Export failed. Please try again.');
      console.error('Export error:', error);
    }
  };

  if (disabled || data.length === 0) {
    return (
      <button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-[var(--radius-button)] cursor-not-allowed"
      >
        <Download size={16} />
        Export
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-card text-foreground border border-border rounded-[var(--radius-button)] hover:bg-muted transition-colors"
      >
        <Download size={16} />
        Export
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-[var(--radius)] shadow-elevation-sm z-50 min-w-[180px]">
          <button
            onClick={() => handleExport('excel')}
            className="flex items-center gap-3 w-full px-4 py-3 hover:bg-muted transition-colors text-left text-foreground"
          >
            <FileSpreadsheet size={16} className="text-chart-2" />
            <div>
              <div className="text-sm font-bold">Excel (.xlsx)</div>
              <div className="text-xs text-muted-foreground">Optimized for analysis</div>
            </div>
          </button>
          <div className="border-t border-border"></div>
          <button
            onClick={() => handleExport('csv')}
            className="flex items-center gap-3 w-full px-4 py-3 hover:bg-muted transition-colors text-left text-foreground"
          >
            <FileText size={16} className="text-primary" />
            <div>
              <div className="text-sm font-bold">CSV (.csv)</div>
              <div className="text-xs text-muted-foreground">Plain text format</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}