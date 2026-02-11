import { cn } from '../../utils/cn';

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div
        className={cn(
          'flex items-center gap-3 bg-text text-bg-card px-5 py-3 rounded-2xl shadow-xl text-sm font-medium',
        )}
      >
        <span>{message}</span>
        {onClose && (
          <button onClick={onClose} className="text-bg-card/60 hover:text-bg-card">
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
