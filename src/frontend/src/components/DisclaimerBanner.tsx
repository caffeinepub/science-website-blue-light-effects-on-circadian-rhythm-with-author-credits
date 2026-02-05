import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

export function DisclaimerBanner() {
  return (
    <Alert variant="default" className="border-2 border-amber-500 dark:border-amber-400 bg-amber-50 dark:bg-amber-950/20">
      <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      <AlertTitle className="text-lg font-bold text-amber-900 dark:text-amber-100">
        Important Disclaimer
      </AlertTitle>
      <AlertDescription className="text-amber-900 dark:text-amber-100 space-y-2 mt-2">
        <p>
          <strong>This website is for educational purposes only and does not constitute medical advice.</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Individual responses to blue light vary significantly based on genetics, age, and health status</li>
          <li>The effects depend heavily on brightness, duration, timing, and distance from light sources</li>
          <li>If you have sleep disorders or health concerns, consult a qualified healthcare professional</li>
          <li>Do not make significant changes to your health routine without professional guidance</li>
        </ul>
      </AlertDescription>
    </Alert>
  );
}
