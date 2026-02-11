import { useTranslation } from 'react-i18next';
import Page from '../components/layout/Page';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import { useStreakStore } from '../store/streakStore';
import { useDailyPlanStore } from '../store/dailyPlanStore';
import { cn } from '../utils/cn';

export default function ProgressPage() {
  const { t } = useTranslation();
  const streak = useStreakStore((s) => s.streak);
  const { plans, getCompletionRate } = useDailyPlanStore();

  // Build last 7 days
  const days: { date: string; label: string; rate: number }[] = [];
  const dayLabels = ['Ne', 'Po', 'To', 'Sr', 'Če', 'Pe', 'So'];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const iso = d.toISOString().slice(0, 10);
    days.push({
      date: iso,
      label: dayLabels[d.getDay()],
      rate: getCompletionRate(iso),
    });
  }

  const weekAvg = days.length
    ? Math.round(days.reduce((s, d) => s + d.rate, 0) / days.length)
    : 0;

  return (
    <Page>
      <h1 className="text-2xl font-display font-bold mb-6">
        {t('progress.title')}
      </h1>

      {/* Streak cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Card className="text-center">
          <p className="text-3xl font-bold text-primary">
            {streak?.currentCount ?? 0}
          </p>
          <p className="text-sm text-text-muted">{t('progress.currentStreak')}</p>
        </Card>
        <Card className="text-center">
          <p className="text-3xl font-bold text-accent">
            {streak?.bestCount ?? 0}
          </p>
          <p className="text-sm text-text-muted">{t('progress.bestStreak')}</p>
        </Card>
      </div>

      {/* Weekly overview */}
      <Card className="mb-6">
        <h3 className="font-semibold mb-4">{t('progress.thisWeek')}</h3>
        <div className="flex items-end justify-between gap-1 h-28 mb-3">
          {days.map((d) => (
            <div key={d.date} className="flex flex-col items-center flex-1 gap-1">
              <div className="w-full flex-1 flex flex-col justify-end">
                <div
                  className={cn(
                    'rounded-t-lg transition-all duration-500 min-h-1',
                    d.rate === 100
                      ? 'bg-success'
                      : d.rate > 0
                        ? 'bg-primary'
                        : 'bg-border/30',
                  )}
                  style={{ height: `${Math.max(d.rate, 5)}%` }}
                />
              </div>
              <span className="text-xs text-text-muted">{d.label}</span>
            </div>
          ))}
        </div>
        <ProgressBar
          value={weekAvg}
          showPercent
          label={t('progress.completionRate')}
        />
      </Card>

      {/* No data state */}
      {Object.keys(plans).length === 0 && (
        <div className="text-center text-text-muted py-12">
          <p className="text-4xl mb-3">📊</p>
          <p>{t('progress.noData')}</p>
        </div>
      )}
    </Page>
  );
}
