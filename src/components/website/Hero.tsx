import logo from '../../assets/butterflawlogo.png';
import { Droplets, Sparkles, BookOpen, Check, Flame } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-6">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Your Personal Beauty & Wellness Coach
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            3 minutes a day for{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              your best self
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-xl mb-8 mx-auto md:mx-0">
            Better skin, stronger hair, perfect posture. Micro-habits that stick.
            No overwhelm — just simple daily routines built for real life.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#download"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full text-base font-semibold transition-colors shadow-lg shadow-primary/25 flex items-center gap-2"
            >
              Download Free
            </a>
            <a
              href="#how-it-works"
              className="text-text-muted hover:text-primary font-medium transition-colors"
            >
              See how it works →
            </a>
          </div>
        </div>

        {/* Hero visual */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Phone mockup frame */}
            <div className="w-64 md:w-72 dreamy-hero rounded-3xl p-8 shadow-2xl shadow-primary/15">
              <div className="flex flex-col items-center gap-6">
                <img src={logo} alt="Butterflaw" className="w-24 h-24 object-contain" />
                <div className="text-center">
                  <p className="font-display font-bold text-lg mb-1">Today's Plan</p>
                  <p className="text-sm text-text-muted">3 simple tasks</p>
                </div>
                {/* Mini task previews */}
                <div className="w-full space-y-3">
                  <div className="bg-white/60 rounded-xl px-4 py-3 flex items-center gap-3 text-sm">
                    <Droplets className="w-4 h-4 text-primary" />
                    <span className="font-medium">Morning face wash</span>
                    <Check className="ml-auto w-4 h-4 text-success" />
                  </div>
                  <div className="bg-white/60 rounded-xl px-4 py-3 flex items-center gap-3 text-sm">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="font-medium">Scalp massage</span>
                    <span className="ml-auto text-text-muted">3 min</span>
                  </div>
                  <div className="bg-white/60 rounded-xl px-4 py-3 flex items-center gap-3 text-sm">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="font-medium">Mini lesson</span>
                    <span className="ml-auto text-text-muted">1 min</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <Flame className="w-4 h-4" /> 7 day streak
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-6 bg-white shadow-lg rounded-2xl px-4 py-2 text-sm font-bold text-success animate-pulse-soft flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Streak!
            </div>
            <div className="absolute -bottom-3 -left-6 bg-white shadow-lg rounded-2xl px-4 py-2 text-sm font-bold text-secondary flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Glow up
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
