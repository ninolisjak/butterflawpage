import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1800);
    const timer2 = setTimeout(() => onComplete(), 2300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ background: 'linear-gradient(160deg, #EDE0F5 0%, #F3E8F9 25%, #FCE4F0 50%, #E8DCF5 75%, #F0E0FA 100%)' }}
    >
      <img
        src="/butterflawlogo.png"
        alt="Butterflaw"
        className="w-52 h-52 object-contain animate-splash-logo"
      />
    </div>
  );
}
