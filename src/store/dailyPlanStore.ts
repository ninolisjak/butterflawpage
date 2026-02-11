// ============================================
// Butterflaw Coach — Daily Plan Store (Zustand)
// Manages daily plans, task completions
// ============================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { DailyPlan, Completion } from '../types';

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

// ---------- Store interface ----------

interface DailyPlanStore {
  plans: Record<string, DailyPlan>;       // keyed by date
  completions: Completion[];

  // Plan CRUD
  setPlan: (plan: DailyPlan) => void;
  getPlan: (date?: string) => DailyPlan | null;

  // Task completion
  completeTask: (date: string, taskId: string, extra?: Partial<Completion>) => void;
  uncompleteTask: (date: string, taskId: string) => void;
  isTaskCompleted: (date: string, taskId: string) => boolean;
  getCompletionRate: (date: string) => number;

  // History
  getCompletionsForDate: (date: string) => Completion[];
  getCompletedDates: (days: number) => string[];
  reset: () => void;
}

// ---------- Store implementation ----------

export const useDailyPlanStore = create<DailyPlanStore>()(
  persist(
    (set, get) => ({
      plans: {},
      completions: [],

      setPlan: (plan) =>
        set((s) => ({
          plans: { ...s.plans, [plan.date]: plan },
        })),

      getPlan: (date) => {
        const d = date ?? todayISO();
        return get().plans[d] ?? null;
      },

      completeTask: (date, taskId, extra) => {
        const now = new Date().toISOString();

        // Mark task as completed in the plan
        set((s) => {
          const plan = s.plans[date];
          if (!plan) return s;

          const tasks = plan.tasks.map((t) =>
            t.id === taskId ? { ...t, completed: true, completedAt: now } : t,
          );
          const allDone = tasks.every((t) => t.completed);

          return {
            plans: {
              ...s.plans,
              [date]: {
                ...plan,
                tasks,
                completedAt: allDone ? now : undefined,
              },
            },
          };
        });

        // Record completion
        const plan = get().plans[date];
        const task = plan?.tasks.find((t) => t.id === taskId);
        if (!task) return;

        const completion: Completion = {
          id: `c_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          userId: plan!.userId,
          taskId,
          taskType: task.type,
          contentId: task.contentId,
          date,
          completedAt: now,
          ...extra,
        };

        set((s) => ({
          completions: [...s.completions, completion],
        }));
      },

      uncompleteTask: (date, taskId) =>
        set((s) => {
          const plan = s.plans[date];
          if (!plan) return s;
          const tasks = plan.tasks.map((t) =>
            t.id === taskId
              ? { ...t, completed: false, completedAt: undefined }
              : t,
          );
          return {
            plans: {
              ...s.plans,
              [date]: { ...plan, tasks, completedAt: undefined },
            },
            completions: s.completions.filter(
              (c) => !(c.date === date && c.taskId === taskId),
            ),
          };
        }),

      isTaskCompleted: (date, taskId) => {
        const plan = get().plans[date];
        return plan?.tasks.find((t) => t.id === taskId)?.completed ?? false;
      },

      getCompletionRate: (date) => {
        const plan = get().plans[date];
        if (!plan || plan.tasks.length === 0) return 0;
        const done = plan.tasks.filter((t) => t.completed).length;
        return Math.round((done / plan.tasks.length) * 100);
      },

      getCompletionsForDate: (date) =>
        get().completions.filter((c) => c.date === date),

      getCompletedDates: (days) => {
        const now = new Date();
        const dates: string[] = [];
        for (let i = 0; i < days; i++) {
          const d = new Date(now);
          d.setDate(d.getDate() - i);
          const iso = d.toISOString().slice(0, 10);
          const plan = get().plans[iso];
          if (plan && plan.tasks.every((t) => t.completed) && plan.tasks.length > 0) {
            dates.push(iso);
          }
        }
        return dates;
      },

      reset: () => set({ plans: {}, completions: [] }),
    }),
    { name: 'butterflaw-daily' },
  ),
);
