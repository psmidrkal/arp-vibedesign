import { forwardRef } from 'react';

interface RadioProps {
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  'aria-label'?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ name, value, checked, onChange, disabled, label, className = '', 'aria-label': ariaLabel }, ref) => {
    return (
      <label className={`inline-flex items-center gap-2 cursor-pointer ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}>
        <div className="relative inline-flex items-center justify-center">
          <input
            ref={ref}
            type="radio"
            name={name}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
            aria-label={ariaLabel || label}
            className="peer appearance-none w-4 h-4 border-2 border-border rounded-full bg-input-background cursor-pointer
              checked:border-primary checked:border-[6px]
              hover:border-primary/60 
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted
              transition-all duration-200"
          />
        </div>
        {label && <span className="text-foreground select-none">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
