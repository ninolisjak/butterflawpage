import { cn } from '../../utils/cn';
import { useStreakStore } from '../../store/streakStore';

export default function StreakWidget() {
  const streak = useStreakStore((s) => s.streak);

  if (!streak) return null;

  return (
    <div className="flex items-center gap-4 bg-bg-card border border-border rounded-2xl p-4">
      {/* Fire */}
      <div
        className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center text-2xl',
          streak.currentCount > 0
            ? 'bg-accent/15 animate-pulse-soft'
            : 'bg-border/30',
        )}
      >
        {streak.currentCount > 0 ? '🔥' : '💤'}
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="font-bold text-xl text-text">
          {streak.currentCount}{' '}
          <span className="text-sm font-normal text-text-muted">
            {streak.currentCount === 1 ? 'dan' : 'dni'}
          </span>
        </p>
        <p className="text-sm text-text-muted">
          Najboljši: {streak.bestCount} dni
        </p>
      </div>

      {/* Badge */}
      {streak.currentCount >= 7 && (
        <div className="bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
          🏆 {streak.currentCount >= 30 ? '30+' : streak.currentCount >= 7 ? '7+' : ''}
        </div>
      )}
    </div>
  );
}
