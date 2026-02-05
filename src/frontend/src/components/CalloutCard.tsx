import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Lightbulb, AlertCircle } from 'lucide-react';

interface CalloutCardProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'info' | 'science' | 'warning';
  className?: string;
}

export function CalloutCard({ title, children, variant = 'default', className = '' }: CalloutCardProps) {
  const icons = {
    default: null,
    info: <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    science: <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    warning: <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />,
  };

  const borderColors = {
    default: 'border-l-4 border-l-muted-foreground',
    info: 'border-l-4 border-l-amber-500',
    science: 'border-l-4 border-l-emerald-500',
    warning: 'border-l-4 border-l-orange-500',
  };

  return (
    <Card className={`${borderColors[variant]} ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {icons[variant]}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
