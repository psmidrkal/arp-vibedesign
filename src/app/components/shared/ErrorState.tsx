import { AlertTriangle, WifiOff, ShieldAlert, FileQuestion } from "lucide-react";

interface ErrorStateProps {
  type?: 'network' | 'permission' | 'notfound' | 'server' | 'generic';
  title?: string;
  message?: string;
  onRetry?: () => void;
  onGoHome?: () => void;
}

export default function ErrorState({ 
  type = 'generic',
  title,
  message,
  onRetry,
  onGoHome
}: ErrorStateProps) {
  const getErrorConfig = () => {
    switch (type) {
      case 'network':
        return {
          icon: WifiOff,
          title: title || 'Connection lost',
          message: message || 'Please check your internet connection and try again.',
          showRetry: true
        };
      case 'permission':
        return {
          icon: ShieldAlert,
          title: title || 'Access denied',
          message: message || "You don't have permission to view this page. Contact your administrator if you believe this is a mistake.",
          showRetry: false
        };
      case 'notfound':
        return {
          icon: FileQuestion,
          title: title || 'Page not found',
          message: message || "The page you're looking for doesn't exist or has been moved.",
          showRetry: false
        };
      case 'server':
        return {
          icon: AlertTriangle,
          title: title || 'Something went wrong',
          message: message || 'We encountered an unexpected error. Our team has been notified. Please try again in a few minutes.',
          showRetry: true
        };
      default:
        return {
          icon: AlertTriangle,
          title: title || 'Error',
          message: message || 'An unexpected error occurred. Please try again.',
          showRetry: true
        };
    }
  };

  const config = getErrorConfig();
  const Icon = config.icon;

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="mb-4 p-4 bg-destructive/10 rounded-full">
        <Icon size={48} className="text-destructive" />
      </div>
      <h3 className="text-foreground mb-2">{config.title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        {config.message}
      </p>
      <div className="flex gap-3">
        {config.showRetry && onRetry && (
          <button
            onClick={onRetry}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-[var(--radius-button)] hover:opacity-90 transition-opacity"
          >
            Retry
          </button>
        )}
        {onGoHome && (
          <button
            onClick={onGoHome}
            className="bg-card text-foreground px-6 py-2 rounded-[var(--radius-button)] border border-border hover:bg-muted transition-colors"
          >
            Go to Home
          </button>
        )}
      </div>
    </div>
  );
}
