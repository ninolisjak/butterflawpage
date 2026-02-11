// ============================================
// Butterflaw Coach — Streak Store (Zustand)
// Manages current/best streak tracking
// ============================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Streak } from '../types';

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

// ---------- Store interface ----------

interface StreakStore {
  streak: Streak | null;

  initStreak: (userId: string) => void;
  recordDay: () => void;
  checkAndReset: () => void;
  getStreak: () => Streak | null;
  reset: () => void;
}

// ---------- Store implementation ----------

export const useStreakStore = create<StreakStore>()(
  persist(
    (set, get) => ({
      streak: null,

      initStreak: (userId) => {
        if (get().streak) return;
        set({
          streak: {
            userId,
            currentCount: 0,
            lastCompletedDate: '',
            startDate: todayISO(),
            bestCount: 0,
            bestStartDate: todayISO(),
            resetCount: 0,
          },
        });
      },

      recordDay: () =>
        set((s) => {
          if (!s.streak) return s;
          const today = todayISO();
          if (s.streak.lastCompletedDate === today) return s; // already recorded

          const yesterday = yesterdayISO();
          const isConsecutive =
            s.streak.lastCompletedDate === yesterday ||
            s.streak.currentCount === 0;

          const newCount = isConsecutive ? s.streak.currentCount + 1 : 1;
          const startDate = isConsecutive ? s.streak.startDate : today;
          const bestCount = Math.max(s.streak.bestCount, newCount);
          const bestStartDate =
            newCount > s.streak.bestCount ? startDate : s.streak.bestStartDate;
          const resetCount =
            !isConsecutive && s.streak.currentCount > 0
              ? s.streak.resetCount + 1
              : s.streak.resetCount;

          return {
            streak: {
              ...s.streak,
              currentCount: newCount,
              lastCompletedDate: today,
              startDate,
              bestCount,
              bestStartDate,
              resetCount,
            },
          };
        }),

      checkAndReset: () =>
        set((s) => {
          if (!s.streak) return s;
          const today = todayISO();
          const yesterday = yesterdayISO();
          // If last completed date is not today or yesterday, reset streak
          if (
            s.streak.lastCompletedDate !== today &&
            s.streak.lastCompletedDate !== yesterday &&
            s.streak.currentCount > 0
          ) {
            return {
              streak: {
                ...s.streak,
                currentCount: 0,
                startDate: today,
                resetCount: s.streak.resetCount + 1,
              },
            };
          }
          return s;
        }),

      getStreak: () => get().streak,

      reset: () => set({ streak: null }),
    }),
    { name: 'butterflaw-streak' },
  ),
);
