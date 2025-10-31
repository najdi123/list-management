import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  maxWidth?: string;
}

export function PageLayout({ children, maxWidth = "max-w-4xl" }: PageLayoutProps) {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-8">
      <div className={`${maxWidth} mx-auto`}>
        {children}
      </div>
    </div>
  );
}
