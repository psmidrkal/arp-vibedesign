import { Toaster } from 'sonner';

export function ToastProvider() {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        style: {
          fontFamily: 'var(--font-family)',
          fontSize: 'var(--text-base)',
        },
        className: 'toast-custom',
      }}
    />
  );
}

export { toast } from 'sonner';
