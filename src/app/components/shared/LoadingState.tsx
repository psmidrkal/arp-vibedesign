interface LoadingStateProps {
  rows?: number;
  message?: string;
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="animate-pulse">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="border-b border-border py-4 px-4">
          <div className="flex gap-4">
            <div className="h-4 bg-muted rounded-[var(--radius)] flex-1"></div>
            <div className="h-4 bg-muted rounded-[var(--radius)] flex-1"></div>
            <div className="h-4 bg-muted rounded-[var(--radius)] flex-1"></div>
            <div className="h-4 bg-muted rounded-[var(--radius)] w-24"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LoadingSpinner({ message = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="relative w-12 h-12 mb-4">
        <div className="absolute inset-0 border-4 border-muted rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}

export default function LoadingState({ rows = 5, message }: LoadingStateProps) {
  if (message) {
    return <LoadingSpinner message={message} />;
  }
  return <TableSkeleton rows={rows} />;
}
