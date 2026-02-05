import { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function SectionShell({ id, title, children, className = '' }: SectionShellProps) {
  return (
    <section id={id} className={`py-16 md:py-20 scroll-mt-20 ${className}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}
