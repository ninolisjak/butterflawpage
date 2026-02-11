// ============================================
// Butterflaw Coach — Core Type Definitions
// ============================================

// --- Enums & Literals ---

export type Goal = 'skin' | 'hair' | 'posture' | 'style' | 'energy';

export type Level = 'beginner' | 'intermediate' | 'advanced';

export type DailyDuration = 5 | 10 | 15;

export type Language = 'sl' | 'en';

export type TaskType = 'habit' | 'checkin' | 'lesson';

// --- User ---

export interface UserPreferences {
  skinType?: 'dry' | 'normal' | 'oily' | 'combination';
  hairConcern?: string[];
  postureIssue?: string;
  styleGoal?: string;
  energyLevel?: 'low' | 'medium' | 'high';
}

export interface User {
  id: string;
  createdAt: string;
  goals: Goal[];
  level: Level;
  dailyDuration: DailyDuration;
  reminderTime: string;
  reminderEnabled: boolean;
  timezone: string;
  language: Language;
  preferences: UserPreferences;
  activePrograms: string[];
  onboardingCompleted: boolean;
  lastActiveDate: string;
}

// --- Program ---

export interface Program {
  id: string;
  title: string;
  description: string;
  durationDays: number;
  difficulty: Level;
  goals: Goal[];
  isPremium: boolean;
  habits: string[];
  lessons: string[];
  icon: string;
  color: string;
}

// --- Habit ---

export interface Habit {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  goal: Goal;
  difficulty: Level;
  category?: string;
  instructions?: string;
  icon: string;
}

// --- Lesson ---

export interface Lesson {
  id: string;
  title: string;
  description: string;
  durationSeconds: number;
  goal: Goal;
  difficulty: Level;
  content: string;
  icon: string;
}

// --- Daily Plan ---

export interface DailyTask {
  id: string;
  type: TaskType;
  contentId?: string;
  title: string;
  description?: string;
  durationMinutes?: number;
  durationSeconds?: number;
  order: 0 | 1 | 2;
  completed: boolean;
  completedAt?: string;
  icon: string;
}

export interface DailyPlan {
  id: string;
  userId: string;
  date: string;
  tasks: DailyTask[];
  createdAt: string;
  completedAt?: string;
}

// --- Completion ---

export interface Completion {
  id: string;
  userId: string;
  taskId: string;
  taskType: TaskType;
  contentId?: string;
  date: string;
  completedAt: string;
  checkinValue?: number;
  lessonWatchedToEnd?: boolean;
}

// --- Streak ---

export interface Streak {
  userId: string;
  currentCount: number;
  lastCompletedDate: string;
  startDate: string;
  bestCount: number;
  bestStartDate?: string;
  resetCount: number;
}

// --- Onboarding State ---

export interface OnboardingState {
  step: number;
  goals: Goal[];
  level: Level | null;
  dailyDuration: DailyDuration | null;
  reminderTime: string;
  reminderEnabled: boolean;
  preferences: UserPreferences;
}

// --- Goal Metadata (for UI) ---

export interface GoalMeta {
  id: Goal;
  label: string;
  labelSl: string;
  icon: string;
  color: string;
  description: string;
  descriptionSl: string;
}
