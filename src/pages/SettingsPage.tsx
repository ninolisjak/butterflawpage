import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Page from '../components/layout/Page';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { useUserStore } from '../store/userStore';
import { useDailyPlanStore } from '../store/dailyPlanStore';
import { useStreakStore } from '../store/streakStore';
import { GOALS } from '../data/seed';
import { cn } from '../utils/cn';
import type { Goal, Level, DailyDuration, Language } from '../types';

export default function SettingsPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const user = useUserStore((s) => s.user);
  const {
    updateGoals,
    updateLevel,
    updateDuration,
    setLanguage,
    resetUser,
  } = useUserStore();
  const { reset: resetDaily } = useDailyPlanStore();
  const { reset: resetStreak } = useStreakStore();

  const [confirmOpen, setConfirmOpen] = useState(false);

  if (!user) return null;

  const handleToggleGoal = (g: Goal) => {
    const goals = user.goals.includes(g)
      ? user.goals.filter((x) => x !== g)
      : [...user.goals, g];
    if (goals.length > 0) updateGoals(goals);
  };

  const handleLang = (lang: Language) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('butterflaw-lang', lang);
  };

  const handleReset = () => {
    resetUser();
    resetDaily();
    resetStreak();
    navigate('/', { replace: true });
  };

  return (
    <Page>
      <h1 className="text-2xl font-display font-bold mb-6">
        {t('settings.title')}
      </h1>

      {/* Goals */}
      <Card className="mb-4">
        <h3 className="font-semibold mb-3">{t('settings.goals')}</h3>
        <div className="flex flex-wrap gap-2">
          {GOALS.map((g) => {
            const active = user.goals.includes(g.id);
            return (
              <button
                key={g.id}
                onClick={() => handleToggleGoal(g.id)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-sm font-medium border transition-colors',
                  active
                    ? 'bg-primary text-white border-primary'
                    : 'bg-transparent text-text-muted border-border hover:border-primary/40',
                )}
              >
                {g.icon} {t(`goals.${g.id}`)}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Level */}
      <Card className="mb-4">
        <h3 className="font-semibold mb-3">{t('settings.level')}</h3>
        <div className="grid grid-cols-3 gap-2">
          {(['beginner', 'intermediate', 'advanced'] as Level[]).map((l) => (
            <button
              key={l}
              onClick={() => updateLevel(l)}
              className={cn(
                'py-2 rounded-xl text-sm font-medium border transition-colors',
                user.level === l
                  ? 'bg-primary text-white border-primary'
                  : 'border-border text-text-muted hover:border-primary/40',
              )}
            >
              {t(`onboarding.${l}`)}
            </button>
          ))}
        </div>
      </Card>

      {/* Duration */}
      <Card className="mb-4">
        <h3 className="font-semibold mb-3">{t('settings.duration')}</h3>
        <div className="grid grid-cols-3 gap-2">
          {([5, 10, 15] as DailyDuration[]).map((d) => (
            <button
              key={d}
              onClick={() => updateDuration(d)}
              className={cn(
                'py-2 rounded-xl text-sm font-medium border transition-colors',
                user.dailyDuration === d
                  ? 'bg-primary text-white border-primary'
                  : 'border-border text-text-muted hover:border-primary/40',
              )}
            >
              {d} min
            </button>
          ))}
        </div>
      </Card>

      {/* Language */}
      <Card className="mb-4">
        <h3 className="font-semibold mb-3">{t('settings.language')}</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleLang('sl')}
            className={cn(
              'py-2 rounded-xl text-sm font-medium border transition-colors',
              user.language === 'sl'
                ? 'bg-primary text-white border-primary'
                : 'border-border text-text-muted hover:border-primary/40',
            )}
          >
            🇸🇮 {t('settings.slovenian')}
          </button>
          <button
            onClick={() => handleLang('en')}
            className={cn(
              'py-2 rounded-xl text-sm font-medium border transition-colors',
              user.language === 'en'
                ? 'bg-primary text-white border-primary'
                : 'border-border text-text-muted hover:border-primary/40',
            )}
          >
            🇬🇧 {t('settings.english')}
          </button>
        </div>
      </Card>

      {/* Reminder */}
      <Card className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">{t('settings.reminder')}</h3>
          <button
            onClick={() => {
              // need to update through user store directly
              const updated = { ...user, reminderEnabled: !user.reminderEnabled };
              useUserStore.setState({ user: updated });
            }}
            className={cn(
              'w-12 h-7 rounded-full transition-colors relative flex-shrink-0',
              user.reminderEnabled ? 'bg-primary' : 'bg-border',
            )}
          >
            <span
              className={cn(
                'absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-200',
                user.reminderEnabled ? 'translate-x-5' : 'translate-x-0',
              )}
            />
          </button>
        </div>
        {user.reminderEnabled && (
          <input
            type="time"
            value={user.reminderTime}
            onChange={(e) => {
              const updated = { ...user, reminderTime: e.target.value };
              useUserStore.setState({ user: updated });
            }}
            className="w-full text-lg font-medium bg-transparent text-text outline-none border border-border rounded-xl px-3 py-2"
          />
        )}
      </Card>

      {/* About */}
      <Card className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-text-muted">{t('settings.version')}</span>
          <span className="text-sm font-mono text-text-muted">1.0.0-beta</span>
        </div>
      </Card>

      {/* Reset */}
      <Button
        variant="danger"
        fullWidth
        onClick={() => setConfirmOpen(true)}
      >
        {t('settings.resetData')}
      </Button>

      {/* Confirm modal */}
      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title={t('settings.resetData')}
        size="sm"
      >
        <p className="text-text-muted mb-4">{t('settings.resetConfirm')}</p>
        <div className="flex gap-3">
          <Button
            variant="ghost"
            className="flex-1"
            onClick={() => setConfirmOpen(false)}
          >
            {t('common.cancel')}
          </Button>
          <Button
            variant="danger"
            className="flex-1"
            onClick={handleReset}
          >
            {t('common.yes')}
          </Button>
        </div>
      </Modal>
    </Page>
  );
}
