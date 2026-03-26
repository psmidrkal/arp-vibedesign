import { HelpCircle, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  helpText?: string;
  error?: string;
  success?: boolean;
  id?: string;
}

export default function FormField({ 
  label, 
  required = false, 
  children, 
  helpText,
  error,
  success,
  id
}: FormFieldProps) {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="flex gap-1 items-center text-foreground">
        {required && <span className="text-destructive">*</span>}
        <span>{label}</span>
        {helpText && (
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setShowHelp(true)}
              onMouseLeave={() => setShowHelp(false)}
              onClick={() => setShowHelp(!showHelp)}
              className="text-muted-foreground hover:text-primary transition-colors ml-1"
              aria-label="Help"
            >
              <HelpCircle size={14} />
            </button>
            {showHelp && (
              <div className="absolute left-0 top-full mt-1 bg-popover text-popover-foreground border border-border rounded-[var(--radius)] shadow-elevation-sm p-3 z-50 min-w-[250px] max-w-[400px]">
                <p className="text-sm">{helpText}</p>
              </div>
            )}
          </div>
        )}
      </label>
      <div className="relative">
        {children}
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <AlertCircle size={16} className="text-destructive" />
          </div>
        )}
        {success && !error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <CheckCircle size={16} className="text-chart-2" />
          </div>
        )}
      </div>
      {error && (
        <span className="text-destructive text-sm flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </span>
      )}
      {!error && helpText && (
        <span className="text-muted-foreground text-sm">
          {helpText}
        </span>
      )}
    </div>
  );
}