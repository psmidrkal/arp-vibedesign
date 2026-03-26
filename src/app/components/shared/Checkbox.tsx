import { forwardRef } from 'react';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  'aria-label'?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onChange, disabled, label, className = '', 'aria-label': ariaLabel }, ref) => {
    return (
      <label className={`inline-flex items-center gap-2 cursor-pointer ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}>
        <div className="relative inline-flex items-center justify-center">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.checked)}
            aria-label={ariaLabel || label}
            className="peer appearance-none w-4 h-4 border-2 border-border rounded-sm bg-input-background cursor-pointer
              checked:bg-primary checked:border-primary
              hover:border-primary/60 
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted
              transition-all duration-200"
          />
          {/* Checkmark icon */}
          <svg
            className="absolute w-3 h-3 pointer-events-none hidden peer-checked:block text-primary-foreground"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4L6 11.5L2.5 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {label && <span className="text-foreground select-none">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
