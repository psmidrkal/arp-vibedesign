import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { SortDirection } from "@/app/utils/tableUtils";

interface TableHeaderProps {
  label: string;
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
}

export default function TableHeader({ label, sortable, sortDirection, onSort }: TableHeaderProps) {
  if (!sortable) {
    return (
      <th className="text-left py-4 px-4 text-foreground bg-muted/50">
        <span className="font-bold">{label}</span>
      </th>
    );
  }

  return (
    <th className="text-left py-4 px-4 text-foreground bg-muted/50">
      <button
        onClick={onSort}
        className="flex items-center gap-2 hover:text-primary transition-colors group w-full"
        aria-label={`Sort by ${label}`}
      >
        <span className="font-bold">{label}</span>
        <span className="opacity-50 group-hover:opacity-100 transition-opacity">
          {!sortDirection && <ArrowUpDown size={14} />}
          {sortDirection === 'asc' && <ArrowUp size={14} className="text-primary" />}
          {sortDirection === 'desc' && <ArrowDown size={14} className="text-primary" />}
        </span>
      </button>
    </th>
  );
}
