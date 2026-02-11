import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/layout/Page';
import TaskCard from '../components/daily/TaskCard';
import CheckInModal from '../components/daily/CheckInModal';
import LessonModal from '../components/daily/LessonModal';
import { useUserStore } from '../store/userStore';
import { useDailyPlanStore } from '../store/dailyPlanStore';
import { useStreakStore } from '../store/streakStore';
import { generateDailyPlan, todayISO, formatDate, getLessonById } from '../utils/generator';
import type { DailyTask, Lesson } from '../types';

export default function HomePage() {
  const { t } = useTranslation();
  const user = useUserStore((s) => s.user);
  const { markActive } = useUserStore();
  const { plans, setPlan, completeTask, uncompleteTask, getCompletionRate } =
    useDailyPlanStore();
  const streak = useStreakStore((s) => s.streak);
  const { recordDay, checkAndReset } = useStreakStore();

  const today = todayISO();
  const plan = plans[today] ?? null;
  const rate = plan ? getCompletionRate(today) : 0;

  const [checkinOpen, setCheckinOpen] = useState(false);
  const [lessonOpen, setLessonOpen] = useState(false);
  const [activeLessonTask, setActiveLessonTask] = useState<DailyTask | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    if (!user) return;
    markActive();
    checkAndReset();
    if (!plan) {
      const newPlan = generateDailyPlan(user, today);
      setPlan(newPlan);
    }
  }, [user, today]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (plan && plan.tasks.length > 0 && plan.tasks.every((t) => t.completed)) {
      recordDay();
    }
  }, [plan, recordDay]);

  const handleComplete = useCallback(
    (taskId: string) => completeTask(today, taskId),
    [completeTask, today],
  );

  const handleUndo = useCallback(
    (taskId: string) => uncompleteTask(today, taskId),
    [uncompleteTask, today],
  );

  const handleTap = useCallback(
    (task: DailyTask) => {
      if (task.type === 'checkin' && !task.completed) {
        setCheckinOpen(true);
      } else if (task.type === 'lesson' && !task.completed && task.contentId) {
        const lesson = getLessonById(task.contentId);
        if (lesson) {
          setActiveLesson(lesson);
          setActiveLessonTask(task);
          setLessonOpen(true);
        }
      }
    },
    [],
  );

  const handleCheckinSubmit = (value: number) => {
    const checkinTask = plan?.tasks.find((t) => t.type === 'checkin');
    if (checkinTask) {
      completeTask(today, checkinTask.id, { checkinValue: value });
    }
  };

  const handleLessonComplete = () => {
    if (activeLessonTask) {
      completeTask(today, activeLessonTask.id, { lessonWatchedToEnd: true });
    }
    setLessonOpen(false);
    setActiveLesson(null);
    setActiveLessonTask(null);
  };

  if (!user || !plan) return null;

  const allDone = plan.tasks.every((t) => t.completed);
  const doneCount = plan.tasks.filter((t) => t.completed).length;
  const totalCount = plan.tasks.length;
  const streakCount = streak?.currentCount ?? 0;
  const bestStreak = streak?.bestCount ?? 0;

  return (
    <Page>
      {/* ✦ Hero card — dreamy gradient with greeting ✦ */}
      <div className="relative overflow-hidden dreamy-hero rounded-3xl p-6 mb-5 animate-fade-in">
        {/* Sparkle decorations */}
        <span className="absolute top-3 right-4 text-sm text-primary/40 pointer-events-none">✦</span>
        <span className="absolute top-5 right-16 text-[10px] text-secondary/30 pointer-events-none">✦</span>
        <span className="absolute bottom-4 left-5 text-[10px] text-primary/30 pointer-events-none">✦</span>
        <span className="absolute bottom-3 right-8 text-xs text-secondary/25 pointer-events-none">✦</span>

        <div className="relative z-10">
          <p className="text-sm text-text-muted capitalize mb-1 font-medium">
            {formatDate(today, user.language)}
          </p>
          <h1 className="text-2xl font-display font-bold text-text mb-3">
            {t('home.greeting')} ✨
          </h1>

          {/* Progress bar inside hero */}
          <div className="mt-2">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-text-muted font-medium">Današnji napredek</span>
              <span className="font-bold text-primary-dark">{Math.round(rate)}%</span>
            </div>
            <div className="h-2.5 bg-white/40 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${Math.max(rate, 2)}%`,
                  background: 'linear-gradient(90deg, #C17ADB, #E879A5, #D9A4EE)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✦ Stats row — streak + tasks ✦ */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {/* Streak */}
        <div className="relative dreamy-card-solid rounded-2xl p-4 animate-fade-in stagger-1 opacity-0 overflow-hidden">
          <span className="absolute top-2 right-3 text-[10px] text-primary/35 pointer-events-none">✦</span>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-2xl ${streakCount > 0 ? 'animate-pulse-soft' : ''}`}>
              {streakCount > 0 ? '🔥' : '💤'}
            </span>
            <span className="text-2xl font-display font-bold text-text">
              {streakCount}
            </span>
          </div>
          <p className="text-xs text-text-muted font-medium">
            {streakCount === 1 ? 'Dan zapored' : 'Dni zapored'}
          </p>
          {bestStreak > 0 && (
            <p className="text-[11px] text-text-muted mt-0.5">
              Najboljši: {bestStreak}
            </p>
          )}
        </div>

        {/* Tasks summary */}
        <div className="relative dreamy-card-solid rounded-2xl p-4 flex flex-col items-center justify-center animate-fade-in stagger-2 opacity-0 overflow-hidden">
          <span className="absolute top-2 right-3 text-[10px] text-secondary/35 pointer-events-none">✦</span>
          <div className="relative w-16 h-16 mb-1.5">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32" cy="32" r="26"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="5"
              />
              <circle
                cx="32" cy="32" r="26"
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={`${(rate / 100) * 163.4} 163.4`}
                className="transition-all duration-700"
                style={{ stroke: 'url(#progressGrad)' }}
              />
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C17ADB" />
                  <stop offset="100%" stopColor="#E879A5" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-text">
              {doneCount}/{totalCount}
            </span>
          </div>
          <p className="text-xs text-text-muted font-medium">
            Opravljeno
          </p>
        </div>
      </div>

      {/* ✦ All-done celebration ✦ */}
      {allDone && (
        <div className="relative text-center rounded-3xl p-6 mb-5 animate-scale-in overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(139, 216, 176, 0.2) 0%, rgba(220, 190, 255, 0.2) 50%, rgba(240, 176, 208, 0.15) 100%)', border: '1.5px solid rgba(139, 216, 176, 0.3)' }}>
          <span className="absolute top-3 left-5 text-lg animate-float-up pointer-events-none" style={{ animationDelay: '0s' }}>🎊</span>
          <span className="absolute top-4 right-5 text-sm animate-float-up pointer-events-none" style={{ animationDelay: '0.2s' }}>✨</span>
          <span className="absolute top-3 right-1/3 text-sm animate-float-up pointer-events-none" style={{ animationDelay: '0.4s' }}>⭐</span>
          <div className="relative z-10">
            <div className="text-4xl mb-2 animate-pulse-soft">🏆</div>
            <h2 className="font-display font-bold text-lg text-text mb-1">{t('home.allDone')}</h2>
            <p className="text-sm text-text-muted">{t('home.allDoneMsg')}</p>
          </div>
        </div>
      )}

      {/* ✦ Section label ✦ */}
      <div className="flex items-center gap-3 mb-3 animate-fade-in stagger-3 opacity-0">
        <h2 className="font-display font-semibold text-base text-text">
          {t('home.yourDay')}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        <span className="text-xs text-text-muted font-medium bg-white/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border/50">
          {doneCount}/{totalCount}
        </span>
      </div>

      {/* ✦ Task list ✦ */}
      <div className="grid gap-3 mb-4">
        {plan.tasks.map((task, idx) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={handleComplete}
            onUndo={handleUndo}
            onTap={handleTap}
            index={idx}
          />
        ))}
      </div>

      {/* Modals */}
      <CheckInModal
        open={checkinOpen}
        onClose={() => setCheckinOpen(false)}
        onSubmit={handleCheckinSubmit}
      />
      <LessonModal
        open={lessonOpen}
        onClose={() => setLessonOpen(false)}
        lesson={activeLesson}
        onComplete={handleLessonComplete}
      />
    </Page>
  );
}
