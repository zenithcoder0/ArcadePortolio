import type { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-mono">
    <header className="p-4 text-xl border-b border-gray-700 bg-gray-900">
      🕹️ ArcadePortfolio
    </header>
    <main className="flex-1 p-6">{children}</main>
    <footer className="p-2 text-sm text-center border-t border-gray-700 bg-gray-900">
      Press Start to Begin · © 2025 You
    </footer>
  </div>
);
