import { cn } from '../../utils/cn';

interface ProgressBarProps {
  value: number;       // 0–100
  color?: string;      // Tailwind bg-class
  height?: 'sm' | 'md';
  label?: string;
  showPercent?: boolean;
}

export default function ProgressBar({
  value,
  color = 'bg-primary',
  height = 'md',
  label,
  showPercent = false,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div>
      {(label || showPercent) && (
        <div className="flex items-center justify-between mb-1 text-sm">
          {label && <span className="text-text-muted">{label}</span>}
          {showPercent && (
            <span className="font-semibold text-text">{clamped}%</span>
          )}
        </div>
      )}
      <div
        className={cn(
          'w-full rounded-full bg-border/50 overflow-hidden',
          height === 'sm' ? 'h-1.5' : 'h-2.5',
        )}
      >
        <div
          className={cn('h-full rounded-full transition-all duration-500', color)}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
