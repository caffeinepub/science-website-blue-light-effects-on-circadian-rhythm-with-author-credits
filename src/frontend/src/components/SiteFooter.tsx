import { Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">About This Site</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An educational resource exploring the scientific relationship between blue light exposure 
              and circadian rhythm regulation.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Authors</h3>
            <p className="text-sm text-muted-foreground">
              <strong>PushpakSaha</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Md. Zawraiz Khan</strong>
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#mechanisms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#practical-strategies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Practical Tips
              </a>
              <a href="#references" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                References
              </a>
            </nav>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            © 2026. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-amber-400 hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs">
            For educational purposes only. Not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
