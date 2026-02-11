// ============================================
// Butterflaw Coach — User Store (Zustand)
// Manages user profile, onboarding, preferences
// ============================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  User,
  Goal,
  Level,
  DailyDuration,
  Language,
  OnboardingState,
  UserPreferences,
} from '../types';

// ---------- Helpers ----------

function generateId(): string {
  return `u_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

// ---------- Initial onboarding state ----------

const initialOnboarding: OnboardingState = {
  step: 0,
  goals: [],
  level: null,
  dailyDuration: null,
  reminderTime: '08:00',
  reminderEnabled: true,
  preferences: {},
};

// ---------- Store interface ----------

interface UserStore {
  user: User | null;
  onboarding: OnboardingState;

  // Onboarding
  setOnboardingStep: (step: number) => void;
  toggleGoal: (goal: Goal) => void;
  setLevel: (level: Level) => void;
  setDailyDuration: (d: DailyDuration) => void;
  setReminderTime: (t: string) => void;
  setReminderEnabled: (e: boolean) => void;
  setPreferences: (p: Partial<UserPreferences>) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;

  // User mutations
  updateGoals: (goals: Goal[]) => void;
  updateLevel: (level: Level) => void;
  updateDuration: (d: DailyDuration) => void;
  setLanguage: (l: Language) => void;
  markActive: () => void;
  joinProgram: (programId: string) => void;
  leaveProgram: (programId: string) => void;
  resetUser: () => void;
}

// ---------- Store implementation ----------

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      onboarding: { ...initialOnboarding },

      // ---- Onboarding ----

      setOnboardingStep: (step) =>
        set((s) => ({ onboarding: { ...s.onboarding, step } })),

      toggleGoal: (goal) =>
        set((s) => {
          const goals = s.onboarding.goals.includes(goal)
            ? s.onboarding.goals.filter((g) => g !== goal)
            : [...s.onboarding.goals, goal];
          return { onboarding: { ...s.onboarding, goals } };
        }),

      setLevel: (level) =>
        set((s) => ({ onboarding: { ...s.onboarding, level } })),

      setDailyDuration: (dailyDuration) =>
        set((s) => ({ onboarding: { ...s.onboarding, dailyDuration } })),

      setReminderTime: (reminderTime) =>
        set((s) => ({ onboarding: { ...s.onboarding, reminderTime } })),

      setReminderEnabled: (reminderEnabled) =>
        set((s) => ({ onboarding: { ...s.onboarding, reminderEnabled } })),

      setPreferences: (p) =>
        set((s) => ({
          onboarding: {
            ...s.onboarding,
            preferences: { ...s.onboarding.preferences, ...p },
          },
        })),

      completeOnboarding: () => {
        const { onboarding } = get();
        const user: User = {
          id: generateId(),
          createdAt: new Date().toISOString(),
          goals: onboarding.goals,
          level: onboarding.level ?? 'beginner',
          dailyDuration: onboarding.dailyDuration ?? 10,
          reminderTime: onboarding.reminderTime,
          reminderEnabled: onboarding.reminderEnabled,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: 'sl',
          preferences: onboarding.preferences,
          activePrograms: [],
          onboardingCompleted: true,
          lastActiveDate: todayISO(),
        };
        set({ user, onboarding: { ...initialOnboarding } });
      },

      resetOnboarding: () =>
        set({ onboarding: { ...initialOnboarding } }),

      // ---- User mutations ----

      updateGoals: (goals) =>
        set((s) => (s.user ? { user: { ...s.user, goals } } : s)),

      updateLevel: (level) =>
        set((s) => (s.user ? { user: { ...s.user, level } } : s)),

      updateDuration: (dailyDuration) =>
        set((s) => (s.user ? { user: { ...s.user, dailyDuration } } : s)),

      setLanguage: (language) =>
        set((s) => (s.user ? { user: { ...s.user, language } } : s)),

      markActive: () =>
        set((s) => {
          if (!s.user) return s;
          const today = todayISO();
          if (s.user.lastActiveDate === today) return s;
          return { user: { ...s.user, lastActiveDate: today } };
        }),

      joinProgram: (programId) =>
        set((s) => {
          if (!s.user) return s;
          if (s.user.activePrograms.includes(programId)) return s;
          return {
            user: {
              ...s.user,
              activePrograms: [...s.user.activePrograms, programId],
            },
          };
        }),

      leaveProgram: (programId) =>
        set((s) =>
          s.user
            ? {
                user: {
                  ...s.user,
                  activePrograms: s.user.activePrograms.filter(
                    (p) => p !== programId,
                  ),
                },
              }
            : s,
        ),

      resetUser: () =>
        set({ user: null, onboarding: { ...initialOnboarding } }),
    }),
    { name: 'butterflaw-user' },
  ),
);
