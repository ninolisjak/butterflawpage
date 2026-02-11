import { cn } from '../../utils/cn';
import type { DailyTask } from '../../types';

interface TaskCardProps {
  task: DailyTask;
  onComplete: (taskId: string) => void;
  onUndo: (taskId: string) => void;
  onTap: (task: DailyTask) => void;
  index: number;
}

const typeBadge: Record<string, { bg: string; label: string }> = {
  habit: { bg: 'bg-white/40 text-primary-dark', label: 'Navada' },
  lesson: { bg: 'bg-white/40 text-primary', label: 'Lekcija' },
  checkin: { bg: 'bg-white/40 text-secondary', label: 'Prijava' },
};

export default function TaskCard({
  task,
  onComplete,
  onUndo,
  onTap,
  index,
}: TaskCardProps) {
  const badge = typeBadge[task.type];
  const delay = `stagger-${Math.min(index + 1, 5)}`;

  return (
    <div
      className={cn(
        'relative dreamy-card-solid rounded-2xl p-4 transition-all duration-200 animate-fade-in opacity-0 sparkle overflow-hidden',
        delay,
        task.completed && 'opacity-60',
      )}
    >
      {/* Sparkle decorations */}
      <span className="absolute top-2 right-3 text-[10px] text-primary/40 pointer-events-none">✦</span>
      <span className="absolute bottom-2 left-3 text-[8px] text-primary/30 pointer-events-none">✦</span>

      <div className="relative z-10 flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            task.completed ? onUndo(task.id) : onComplete(task.id);
          }}
          className={cn(
            'mt-0.5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all shrink-0',
            task.completed
              ? 'border-success bg-success shadow-sm'
              : 'border-white/60 bg-white/30 hover:border-primary hover:bg-white/50',
          )}
        >
          {task.completed && <span className="text-white text-sm">✓</span>}
        </button>

        {/* Content — tappable for lessons / checkin */}
        <button
          onClick={() => onTap(task)}
          className="flex-1 text-left"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{task.icon}</span>
            <span
              className={cn(
                'font-semibold text-text',
                task.completed && 'line-through',
              )}
            >
              {task.title}
            </span>
          </div>

          {task.description && (
            <p className="text-sm text-text-muted ml-7 line-clamp-2">
              {task.description}
            </p>
          )}

          <div className="flex items-center gap-2 mt-2 ml-7">
            <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium backdrop-blur-sm', badge.bg)}>
              {badge.label}
            </span>
            {task.durationMinutes && (
              <span className="text-xs text-text-muted">
                {task.durationMinutes} min
              </span>
            )}
            {task.durationSeconds && (
              <span className="text-xs text-text-muted">
                ~{task.durationSeconds} sek
              </span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
