import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function SearchBar({ 
  placeholder = "Search...", 
  value, 
  onChange,
  className = ""
}: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue]);

  // Sync with external value changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className={`relative ${className}`}>
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-input-background border border-border pl-10 pr-10 py-2 text-foreground rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {localValue && (
        <button
          onClick={() => {
            setLocalValue('');
            onChange('');
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
