import { ChevronDown, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  multiSelect?: boolean;
}

export default function FilterDropdown({ 
  label, 
  options, 
  selectedValues, 
  onChange,
  multiSelect = true 
}: FilterDropdownProps) {
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

  const handleToggle = (value: string) => {
    if (multiSelect) {
      if (selectedValues.includes(value)) {
        onChange(selectedValues.filter(v => v !== value));
      } else {
        onChange([...selectedValues, value]);
      }
    } else {
      onChange([value]);
      setIsOpen(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange([]);
  };

  const selectedCount = selectedValues.length;
  const displayLabel = selectedCount > 0 
    ? `${label} (${selectedCount})` 
    : label;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-[var(--radius)] hover:bg-muted transition-colors text-foreground"
      >
        <span>{displayLabel}</span>
        {selectedCount > 0 && (
          <button
            onClick={handleClear}
            className="ml-1 hover:text-destructive transition-colors"
            aria-label="Clear filter"
          >
            <X size={14} />
          </button>
        )}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-[var(--radius)] shadow-elevation-sm z-50 min-w-[200px] max-h-[300px] overflow-y-auto">
          {options.length === 0 ? (
            <div className="px-4 py-3 text-muted-foreground text-sm">
              No options available
            </div>
          ) : (
            options.map(option => (
              <label
                key={option.value}
                className="flex items-center gap-2 px-4 py-2 hover:bg-muted cursor-pointer transition-colors"
              >
                {multiSelect ? (
                  <Checkbox
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleToggle(option.value)}
                  />
                ) : (
                  <Radio
                    name={`filter-${label}`}
                    value={option.value}
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleToggle(option.value)}
                  />
                )}
                <span className="text-foreground flex-1">
                  {option.label}
                  {option.count !== undefined && (
                    <span className="text-muted-foreground ml-1">({option.count})</span>
                  )}
                </span>
              </label>
            ))
          )}
        </div>
      )}
    </div>
  );
}