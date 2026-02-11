import type { ReactNode } from 'react';
import Header from './Header';
import BottomNav from './BottomNav';

interface PageProps {
  children: ReactNode;
  hideHeader?: boolean;
  hideNav?: boolean;
}

export default function Page({ children, hideHeader, hideNav }: PageProps) {
  return (
    <div className="flex flex-col min-h-dvh">
      {!hideHeader && <Header />}
      <main className="flex-1 px-4 py-4 max-w-lg mx-auto w-full pb-24">
        {children}
      </main>
      {!hideNav && <BottomNav />}
    </div>
  );
}
