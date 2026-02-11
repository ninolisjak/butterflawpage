import { useTranslation } from 'react-i18next';
import Page from '../components/layout/Page';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useUserStore } from '../store/userStore';
import { PROGRAMS } from '../data/seed';
import { cn } from '../utils/cn';

export default function ProgramsPage() {
  const { t } = useTranslation();
  const user = useUserStore((s) => s.user);
  const { joinProgram, leaveProgram } = useUserStore();

  if (!user) return null;

  return (
    <Page>
      <h1 className="text-2xl font-display font-bold mb-1">
        {t('programs.title')}
      </h1>
      <p className="text-text-muted mb-6">{t('programs.subtitle')}</p>

      <div className="grid gap-4">
        {PROGRAMS.map((program) => {
          const isActive = user.activePrograms.includes(program.id);
          return (
            <Card
              key={program.id}
              className={cn(
                'relative overflow-hidden',
                isActive && 'border-primary/40',
              )}
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl"
                style={{ backgroundColor: program.color }}
              />

              <div className="ml-3">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{program.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{program.title}</h3>
                    {isActive && (
                      <span className="text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
                        {t('programs.active')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-muted mb-3">
                  {program.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                  <span>📅 {t('programs.days', { count: program.durationDays })}</span>
                  <span>💪 {t('programs.habits', { count: program.habits.length })}</span>
                  <span>📖 {t('programs.lessons', { count: program.lessons.length })}</span>
                </div>

                {/* CTA */}
                <Button
                  variant={isActive ? 'outline' : 'primary'}
                  size="sm"
                  fullWidth
                  onClick={() =>
                    isActive
                      ? leaveProgram(program.id)
                      : joinProgram(program.id)
                  }
                >
                  {isActive ? t('programs.leave') : t('programs.join')}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Page>
  );
}
