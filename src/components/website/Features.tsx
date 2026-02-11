import { Target, Flame, Zap, Sparkles, BookOpen, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Micro-Habits That Stick',
    description:
      'Just 3 personalized tasks per day — a habit, a check-in, and a mini lesson. Small enough to actually do, powerful enough to transform.',
  },
  {
    icon: Flame,
    title: 'Streak Psychology',
    description:
      'Duolingo-style streaks keep you motivated. Track your daily consistency, celebrate milestones, and watch your progress grow.',
  },
  {
    icon: Zap,
    title: '2-Minute Onboarding',
    description:
      'Pick your goals, set your level, choose your time. Get a fully personalized plan in under 2 minutes. No overwhelm.',
  },
  {
    icon: Sparkles,
    title: '5 Goal Areas',
    description:
      'Skin, hair, posture, style, and energy. Each area has curated habits and lessons. Mix and match what matters to you.',
  },
  {
    icon: BookOpen,
    title: 'Structured Programs',
    description:
      'Follow guided programs like "Skin Glow 30" or "Posture Bootcamp" with day-by-day plans designed by wellness experts.',
  },
  {
    icon: BarChart3,
    title: 'Visual Progress',
    description:
      'See your weekly completion rate, track streaks over time, and celebrate how consistent you\'ve become.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything you need for your{' '}
            <span className="text-primary">glow-up</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Simple, science-backed daily routines for real results — no complicated regimens.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="dreamy-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
            >
              <f.icon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
