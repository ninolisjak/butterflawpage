// ============================================
// Butterflaw Coach — Daily Plan Generator
// Picks habits + lessons for the day with rotation
// ============================================

import type { DailyPlan, DailyTask, User, Habit, Lesson } from '../types';
import { HABITS, LESSONS } from '../data/seed';

// Deterministic seeded shuffle (same seed = same order)
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Convert a date string ("2025-01-15") to a numeric seed
function dateSeed(dateStr: string): number {
  return dateStr.split('-').reduce((acc, n) => acc * 31 + parseInt(n, 10), 0);
}

// ---------- Generator ----------

export function generateDailyPlan(
  user: User,
  date: string,
  completedContentIds: string[] = [],
): DailyPlan {
  const seed = dateSeed(date);

  // 1. Filter habits by user goals + level
  const candidateHabits = HABITS.filter(
    (h) =>
      user.goals.includes(h.goal) &&
      difficultyValue(h.difficulty) <= difficultyValue(user.level),
  );

  // 2. Filter lessons by user goals + level, de-prioritise completed ones
  const candidateLessons = LESSONS.filter(
    (l) =>
      user.goals.includes(l.goal) &&
      difficultyValue(l.difficulty) <= difficultyValue(user.level),
  );
  const unseenLessons = candidateLessons.filter(
    (l) => !completedContentIds.includes(l.id),
  );
  const lessonPool = unseenLessons.length > 0 ? unseenLessons : candidateLessons;

  // 3. Shuffle deterministically by date
  const shuffledHabits = seededShuffle(candidateHabits, seed);
  const shuffledLessons = seededShuffle(lessonPool, seed + 1);

  // 4. Pick tasks based on dailyDuration
  const taskSlots = taskSlotCount(user.dailyDuration);
  const habitCount = taskSlots.habits;
  const lessonCount = taskSlots.lessons;

  const pickedHabits = shuffledHabits.slice(0, habitCount);
  const pickedLessons = shuffledLessons.slice(0, lessonCount);

  // 5. Build task list
  const tasks: DailyTask[] = [];
  let order: 0 | 1 | 2 = 0;

  for (const h of pickedHabits) {
    tasks.push({
      id: `t_${date}_${h.id}`,
      type: 'habit',
      contentId: h.id,
      title: h.title,
      description: h.description,
      durationMinutes: h.durationMinutes,
      order: order as 0 | 1 | 2,
      completed: false,
      icon: h.icon,
    });
    order = Math.min(order + 1, 2) as 0 | 1 | 2;
  }

  // Check-in task (always included)
  tasks.push({
    id: `t_${date}_checkin`,
    type: 'checkin',
    title: 'Daily check-in',
    description: 'How does your skin/hair/body feel today?',
    durationMinutes: 1,
    order: order as 0 | 1 | 2,
    completed: false,
    icon: '📊',
  });
  order = Math.min(order + 1, 2) as 0 | 1 | 2;

  for (const l of pickedLessons) {
    tasks.push({
      id: `t_${date}_${l.id}`,
      type: 'lesson',
      contentId: l.id,
      title: l.title,
      description: l.description,
      durationSeconds: l.durationSeconds,
      order: order as 0 | 1 | 2,
      completed: false,
      icon: l.icon,
    });
    order = Math.min(order + 1, 2) as 0 | 1 | 2;
  }

  return {
    id: `plan_${date}_${user.id}`,
    userId: user.id,
    date,
    tasks,
    createdAt: new Date().toISOString(),
  };
}

// ---------- Helpers ----------

function difficultyValue(d: string): number {
  switch (d) {
    case 'beginner':
      return 1;
    case 'intermediate':
      return 2;
    case 'advanced':
      return 3;
    default:
      return 1;
  }
}

function taskSlotCount(duration: number): { habits: number; lessons: number } {
  switch (duration) {
    case 5:
      return { habits: 2, lessons: 1 };
    case 10:
      return { habits: 3, lessons: 1 };
    case 15:
      return { habits: 4, lessons: 2 };
    default:
      return { habits: 3, lessons: 1 };
  }
}

// ---------- Lookup helpers ----------

export function getHabitById(id: string): Habit | undefined {
  return HABITS.find((h) => h.id === id);
}

export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export function formatDate(dateStr: string, lang: 'sl' | 'en' = 'sl'): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString(lang === 'sl' ? 'sl-SI' : 'en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}
