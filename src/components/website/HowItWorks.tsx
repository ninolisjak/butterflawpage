import { Heart, ClipboardList, Flame } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Tell us your goals',
    description:
      'Skin glow? Better posture? Healthier hair? Pick what matters to you and we\'ll build a plan around it.',
    icon: Heart,
  },
  {
    number: '02',
    title: 'Get your daily plan',
    description:
      'Every day you get 3 simple cards: one habit to practice, one quick check-in, and one mini lesson to learn from.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Build your streak',
    description:
      'Complete your tasks, grow your streak, and watch yourself transform. Consistency beats perfection.',
    icon: Flame,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Simple as <span className="text-secondary">1 — 2 — 3</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            From download to your first daily plan in under 2 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-5">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-xs font-bold text-primary mb-2 tracking-widest uppercase">
                Step {step.number}
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
