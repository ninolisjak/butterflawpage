import { PROGRAMS } from '../../data/seed';
import { Calendar, Dumbbell, BookOpen, Sparkles, Activity, Waves } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const programIcons: Record<string, LucideIcon> = {
  'skin-glow-basics': Sparkles,
  'posture-reset': Activity,
  'hair-care-essentials': Waves,
};

export default function Programs() {
  return (
    <section id="programs" className="py-20 md:py-28 px-6 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-accent/30 text-primary-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Guided programs for{' '}
            <span className="text-primary">every goal</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Structured multi-day programs with daily habits and lessons, designed for real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => {
            const Icon = programIcons[program.id];
            return (
              <div
                key={program.id}
                className="relative overflow-hidden dreamy-card-solid rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
              >
                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl"
                  style={{ backgroundColor: program.color }}
                />

                <div className="ml-2">
                  <div className="flex items-center gap-3 mb-3">
                    {Icon && <Icon className="w-8 h-8" style={{ color: program.color }} />}
                    <h3 className="font-display font-bold text-lg">{program.title}</h3>
                  </div>

                <p className="text-sm text-text-muted mb-4 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {program.durationDays} days
                  </span>
                  <span className="flex items-center gap-1">
                    <Dumbbell className="w-3.5 h-3.5" /> {program.habits.length} habits
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> {program.lessons.length} lessons
                  </span>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
