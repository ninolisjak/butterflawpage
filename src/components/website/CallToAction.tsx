import logo from '../../assets/butterflawlogo.png';

export default function CallToAction() {
  return (
    <section id="download" className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="dreamy-hero rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Decorative sparkles */}
          <div className="absolute top-6 right-8 text-primary/30 text-xl animate-pulse-soft">✦</div>
          <div className="absolute bottom-8 left-10 text-secondary/30 text-lg animate-pulse-soft" style={{ animationDelay: '1s' }}>✦</div>
          <div className="absolute top-1/2 right-12 text-accent/40 text-sm animate-pulse-soft" style={{ animationDelay: '0.5s' }}>✦</div>

          <img src={logo} alt="Butterflaw" className="h-32 mx-auto mb-6 object-contain" />

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Start your glow-up today
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-lg mx-auto">
            Join thousands building better beauty and wellness habits — 
            just 3 minutes a day. Free to download.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store button */}
            <a
              href="#"
              className="flex items-center gap-3 bg-bg-dark text-white px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Download on the</div>
                <div className="text-base font-semibold -mt-0.5">App Store</div>
              </div>
            </a>

            {/* Google Play button */}
            <a
              href="#"
              className="flex items-center gap-3 bg-bg-dark text-white px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.91L19.59 12l-1.87-2.21-2.27 2.27 2.27 2.15zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
                <div className="text-base font-semibold -mt-0.5">Google Play</div>
              </div>
            </a>
          </div>

          <p className="text-xs text-text-muted mt-6">
            Free • No credit card required • Available on iOS &amp; Android
          </p>
        </div>
      </div>
    </section>
  );
}
