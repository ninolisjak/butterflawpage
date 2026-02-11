import { NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';

const tabs = [
  { to: '/home', label: 'Danes', icon: '🏠' },
  { to: '/progress', label: 'Napredek', icon: '📊' },
  { to: '/programs', label: 'Programi', icon: '📚' },
  { to: '/settings', label: 'Nastavitve', icon: '⚙️' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 backdrop-blur-xl border-t border-border/50 pb-safe" style={{ background: 'linear-gradient(135deg, rgba(225, 200, 245, 0.9) 0%, rgba(245, 210, 230, 0.9) 50%, rgba(215, 195, 245, 0.9) 100%)' }}>
      <div className="flex items-center justify-around max-w-lg mx-auto py-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-0.5 text-xs font-medium py-1.5 px-4 rounded-2xl transition-all duration-200',
                isActive
                  ? 'text-primary-dark bg-white/50 shadow-sm'
                  : 'text-text-muted hover:text-primary',
              )
            }
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
