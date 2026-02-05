import { TopNav } from './components/TopNav';
import { SiteFooter } from './components/SiteFooter';
import { SectionShell } from './components/SectionShell';
import { CalloutCard } from './components/CalloutCard';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { blueLightContent } from './content/blueLightCircadianContent';
import { references } from './content/references';
import { Separator } from '@/components/ui/separator';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-amber-50 via-background to-emerald-50 dark:from-amber-950/20 dark:via-background dark:to-emerald-950/20 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {blueLightContent.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {blueLightContent.hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <a 
                    href="#what-is-blue-light" 
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Learn the Science
                  </a>
                  <a 
                    href="#practical-strategies" 
                    className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Practical Tips
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/assets/generated/hero-blue-light.dim_1600x700.png" 
                  alt="Illustration showing blue light from screens affecting human circadian rhythm and sleep patterns"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is Blue Light */}
        <SectionShell id="what-is-blue-light" title={blueLightContent.whatIsBlueLight.title}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{blueLightContent.whatIsBlueLight.intro}</p>
            
            <CalloutCard variant="info" title="Key Definition">
              <p>{blueLightContent.whatIsBlueLight.definition}</p>
            </CalloutCard>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Common Sources</h3>
            <ul className="space-y-2">
              {blueLightContent.whatIsBlueLight.sources.map((source, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionShell>

        <Separator className="my-0" />

        {/* Circadian Rhythm & Melatonin */}
        <SectionShell id="circadian-rhythm" title={blueLightContent.circadianRhythm.title}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{blueLightContent.circadianRhythm.intro}</p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <CalloutCard variant="default" title="Circadian Rhythm">
                <p className="text-sm">{blueLightContent.circadianRhythm.circadianExplained}</p>
              </CalloutCard>
              <CalloutCard variant="default" title="Melatonin">
                <p className="text-sm">{blueLightContent.circadianRhythm.melatoninExplained}</p>
              </CalloutCard>
            </div>

            <p className="text-lg leading-relaxed">{blueLightContent.circadianRhythm.connection}</p>
          </div>
        </SectionShell>

        <Separator className="my-0" />

        {/* Mechanisms */}
        <SectionShell id="mechanisms" title={blueLightContent.mechanisms.title}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{blueLightContent.mechanisms.intro}</p>
            
            <CalloutCard variant="science" title="The Biological Pathway">
              <div className="space-y-3 text-sm">
                <p><strong>Step 1:</strong> {blueLightContent.mechanisms.pathway.step1}</p>
                <p><strong>Step 2:</strong> {blueLightContent.mechanisms.pathway.step2}</p>
                <p><strong>Step 3:</strong> {blueLightContent.mechanisms.pathway.step3}</p>
                <p><strong>Step 4:</strong> {blueLightContent.mechanisms.pathway.step4}</p>
              </div>
            </CalloutCard>

            <div className="my-8">
              <img 
                src="/assets/generated/melatonin-pathway-infographic.dim_1400x900.png" 
                alt="Infographic showing the pathway from blue light exposure through ipRGCs to the suprachiasmatic nucleus and melatonin suppression"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Additional Effects</h3>
            <ul className="space-y-2">
              {blueLightContent.mechanisms.additionalEffects.map((effect, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
                  <span>{effect}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionShell>

        <Separator className="my-0" />

        {/* Evidence Summary */}
        <SectionShell id="evidence" title={blueLightContent.evidence.title}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{blueLightContent.evidence.intro}</p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">What Research Shows</h3>
            <div className="space-y-4">
              {blueLightContent.evidence.findings.map((finding, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <span className="text-amber-600 dark:text-amber-400 font-bold text-lg">→</span>
                  <p className="flex-1">{finding}</p>
                </div>
              ))}
            </div>

            <CalloutCard variant="info" title="Important Context" className="mt-8">
              <p className="text-sm">{blueLightContent.evidence.context}</p>
            </CalloutCard>
          </div>
        </SectionShell>

        <Separator className="my-0" />

        {/* Practical Strategies */}
        <SectionShell id="practical-strategies" title={blueLightContent.practicalStrategies.title}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-8">{blueLightContent.practicalStrategies.intro}</p>
            
            <div className="grid md:grid-cols-3 gap-6 not-prose mb-8">
              <div className="text-center">
                <img 
                  src="/assets/generated/blue-light-icons-set.dim_512x512.png" 
                  alt="Icons representing screen devices, light bulbs, and moon for sleep"
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
              </div>
            </div>

            <div className="space-y-6">
              {blueLightContent.practicalStrategies.strategies.map((strategy, idx) => (
                <div key={idx} className="border-l-4 border-amber-500 dark:border-amber-400 pl-6 py-2">
                  <h4 className="text-xl font-semibold mb-2">{strategy.category}</h4>
                  <ul className="space-y-2 mt-3">
                    {strategy.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start gap-3">
                        <span className="text-emerald-600 dark:text-emerald-400 mt-1">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <Separator className="my-0" />

        {/* Cautions & Limitations */}
        <SectionShell id="cautions" title={blueLightContent.cautions.title}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-8">{blueLightContent.cautions.intro}</p>
            
            <DisclaimerBanner />

            <h3 className="text-2xl font-semibold mt-8 mb-4">Important Considerations</h3>
            <ul className="space-y-3">
              {blueLightContent.cautions.considerations.map((consideration, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">!</span>
                  <span>{consideration}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionShell>

        <Separator className="my-0" />

        {/* References */}
        <SectionShell id="references" title="References & Further Reading">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              The information presented on this site is based on current scientific understanding. 
              Below are credible sources for further exploration:
            </p>
            
            <div className="space-y-4">
              {references.map((ref, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-border bg-card">
                  <p className="font-semibold text-base mb-1">{ref.title}</p>
                  <p className="text-sm text-muted-foreground mb-2">{ref.source}</p>
                  {ref.url && (
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      Visit source →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionShell>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
