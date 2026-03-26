import svgPaths from "@/imports/svg-9zpeyuk6ua";

interface SelectProps {
  placeholder?: string;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function Select({ 
  placeholder = "Select", 
  options = [], 
  value = "", 
  onChange, 
  disabled = false 
}: SelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={`w-full bg-input-background border border-border px-3 py-2 appearance-none text-foreground rounded-[var(--radius)] ${
          disabled ? 'opacity-60 cursor-not-allowed bg-muted' : 'cursor-pointer'
        }`}
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
