import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../../store/userStore';
import { useStreakStore } from '../../store/streakStore';
import { GOALS } from '../../data/seed';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';
import logo from '../../assets/butterflawlogo.png';
import { cn } from '../../utils/cn';
import type { Goal, Level, DailyDuration } from '../../types';

const TOTAL_STEPS = 5;

export default function OnboardingFlow() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    onboarding,
    toggleGoal,
    setLevel,
    setDailyDuration,
    setReminderTime,
    setReminderEnabled,
    completeOnboarding,
  } = useUserStore();
  const { initStreak } = useStreakStore();

  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const finish = () => {
    completeOnboarding();
    const user = useUserStore.getState().user;
    if (user) initStreak(user.id);
    navigate('/home', { replace: true });
  };

  return (
    <div className="min-h-dvh flex flex-col bg-bg">
      {/* Progress */}
      <div className="px-6 pt-6">
        <ProgressBar value={((step + 1) / TOTAL_STEPS) * 100} height="sm" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 py-8">
        {step === 0 && <WelcomeStep onNext={next} t={t} />}
        {step === 1 && (
          <GoalStep
            selected={onboarding.goals}
            onToggle={toggleGoal}
            t={t}
          />
        )}
        {step === 2 && (
          <LevelStep
            selected={onboarding.level}
            onSelect={setLevel}
            t={t}
          />
        )}
        {step === 3 && (
          <DurationStep
            selected={onboarding.dailyDuration}
            onSelect={setDailyDuration}
            t={t}
          />
        )}
        {step === 4 && (
          <ReminderStep
            time={onboarding.reminderTime}
            enabled={onboarding.reminderEnabled}
            onTimeChange={setReminderTime}
            onEnabledChange={setReminderEnabled}
            t={t}
          />
        )}
      </div>

      {/* Nav buttons */}
      <div className="px-6 pb-8 flex gap-3">
        {step > 0 && (
          <Button variant="ghost" onClick={back} className="flex-1">
            {t('common.back')}
          </Button>
        )}
        {step < TOTAL_STEPS - 1 ? (
          <Button
            onClick={next}
            fullWidth={step === 0}
            className={step > 0 ? 'flex-1' : ''}
            disabled={step === 1 && onboarding.goals.length === 0}
          >
            {t('common.next')}
          </Button>
        ) : (
          <Button onClick={finish} fullWidth className="flex-1">
            {t('onboarding.letsGo')}
          </Button>
        )}
      </div>
    </div>
  );
}

// ─── Step Components ────────────────────────

function WelcomeStep({ onNext, t }: { onNext: () => void; t: (k: string) => string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 animate-fade-in">
      <img src={logo} alt="Butterflaw" className="h-24 w-24 rounded-3xl shadow-lg" />
      <div>
        <h1 className="text-3xl font-display font-bold text-text mb-2">
          {t('onboarding.welcome')}
        </h1>
        <p className="text-text-muted text-lg">{t('onboarding.subtitle')}</p>
      </div>
      <Button onClick={onNext} size="lg">
        {t('common.next')}
      </Button>
    </div>
  );
}

function GoalStep({
  selected,
  onToggle,
  t,
}: {
  selected: Goal[];
  onToggle: (g: Goal) => void;
  t: (k: string) => string;
}) {
  return (
    <div className="flex-1 flex flex-col animate-fade-in">
      <h2 className="text-2xl font-display font-bold mb-1">
        {t('onboarding.chooseGoals')}
      </h2>
      <p className="text-text-muted mb-6">{t('onboarding.chooseGoalsSub')}</p>
      <div className="grid gap-3">
        {GOALS.map((g) => {
          const active = selected.includes(g.id);
          return (
            <button
              key={g.id}
              onClick={() => onToggle(g.id)}
              className={cn(
                'flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left',
                active
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border bg-bg-card hover:border-primary/30',
              )}
            >
              <span className="text-3xl">{g.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-text">{t(`goals.${g.id}`)}</p>
                <p className="text-sm text-text-muted">{g.descriptionSl}</p>
              </div>
              <div
                className={cn(
                  'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors',
                  active ? 'border-primary bg-primary' : 'border-border',
                )}
              >
                {active && <span className="text-white text-xs">✓</span>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LevelStep({
  selected,
  onSelect,
  t,
}: {
  selected: Level | null;
  onSelect: (l: Level) => void;
  t: (k: string) => string;
}) {
  const levels: { value: Level; emoji: string }[] = [
    { value: 'beginner', emoji: '🌱' },
    { value: 'intermediate', emoji: '🌿' },
    { value: 'advanced', emoji: '🌳' },
  ];

  return (
    <div className="flex-1 flex flex-col animate-fade-in">
      <h2 className="text-2xl font-display font-bold mb-6">
        {t('onboarding.chooseLevel')}
      </h2>
      <div className="grid gap-3">
        {levels.map((l) => {
          const active = selected === l.value;
          return (
            <button
              key={l.value}
              onClick={() => onSelect(l.value)}
              className={cn(
                'flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left',
                active
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-bg-card hover:border-primary/30',
              )}
            >
              <span className="text-3xl">{l.emoji}</span>
              <div>
                <p className="font-semibold">{t(`onboarding.${l.value}`)}</p>
                <p className="text-sm text-text-muted">
                  {t(`onboarding.${l.value}Desc`)}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DurationStep({
  selected,
  onSelect,
  t,
}: {
  selected: DailyDuration | null;
  onSelect: (d: DailyDuration) => void;
  t: (k: string) => string;
}) {
  const durations: { value: DailyDuration; key: string; emoji: string }[] = [
    { value: 5, key: 'duration5', emoji: '⚡' },
    { value: 10, key: 'duration10', emoji: '⚖️' },
    { value: 15, key: 'duration15', emoji: '🧘' },
  ];

  return (
    <div className="flex-1 flex flex-col animate-fade-in">
      <h2 className="text-2xl font-display font-bold mb-6">
        {t('onboarding.chooseDuration')}
      </h2>
      <div className="grid gap-3">
        {durations.map((d) => {
          const active = selected === d.value;
          return (
            <button
              key={d.value}
              onClick={() => onSelect(d.value)}
              className={cn(
                'flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left',
                active
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-bg-card hover:border-primary/30',
              )}
            >
              <span className="text-3xl">{d.emoji}</span>
              <p className="font-semibold">{t(`onboarding.${d.key}`)}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ReminderStep({
  time,
  enabled,
  onTimeChange,
  onEnabledChange,
  t,
}: {
  time: string;
  enabled: boolean;
  onTimeChange: (t: string) => void;
  onEnabledChange: (e: boolean) => void;
  t: (k: string) => string;
}) {
  return (
    <div className="flex-1 flex flex-col animate-fade-in">
      <h2 className="text-2xl font-display font-bold mb-2">
        {t('onboarding.reminder')}
      </h2>
      <p className="text-text-muted mb-8">{t('onboarding.reminderDesc')}</p>

      {/* Toggle */}
      <div className="flex items-center justify-between mb-6 bg-bg-card border border-border rounded-2xl p-4">
        <span className="font-medium">{t('onboarding.reminder')}</span>
        <button
          onClick={() => onEnabledChange(!enabled)}
          className={cn(
            'w-12 h-7 rounded-full transition-colors relative',
            enabled ? 'bg-primary' : 'bg-border',
          )}
        >
          <span
            className={cn(
              'absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform',
              enabled ? 'translate-x-5' : 'translate-x-0.5',
            )}
          />
        </button>
      </div>

      {/* Time picker */}
      {enabled && (
        <div className="bg-bg-card border border-border rounded-2xl p-4 animate-fade-in">
          <label className="block text-sm text-text-muted mb-2">
            {t('settings.reminderTime')}
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
            className="w-full text-2xl font-display font-bold text-center bg-transparent text-text outline-none"
          />
        </div>
      )}

      <div className="flex-1" />
      <p className="text-center text-text-muted text-sm">
        {t('onboarding.almostDone')}
      </p>
    </div>
  );
}
