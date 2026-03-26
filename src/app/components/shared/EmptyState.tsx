import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="mb-4 p-4 bg-muted rounded-full">
        <Icon size={48} className="text-muted-foreground" />
      </div>
      <h3 className="text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
