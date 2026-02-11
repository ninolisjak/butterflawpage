import logo from '../../assets/butterflawlogo.png';
import { useStreakStore } from '../../store/streakStore';

export default function Header() {
  const streak = useStreakStore((s) => s.streak);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl border-b border-border/50" style={{ background: 'linear-gradient(135deg, rgba(225, 200, 245, 0.85) 0%, rgba(245, 210, 230, 0.85) 50%, rgba(215, 195, 245, 0.85) 100%)' }}>
      <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">
        {/* Logo + name */}
        <div className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Butterflaw"
            className="h-9 w-9 object-contain"
          />
          <span className="font-display font-bold text-lg bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Butterflaw
          </span>
        </div>

        {/* Streak badge */}
        {streak && streak.currentCount > 0 && (
          <div className="flex items-center gap-1.5 bg-white/40 backdrop-blur-sm text-primary-dark px-3.5 py-1.5 rounded-full text-sm font-bold border border-primary/20">
            🔥 {streak.currentCount}
          </div>
        )}
      </div>
    </header>
  );
}
