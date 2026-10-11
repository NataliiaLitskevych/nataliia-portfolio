import { BackToTop } from '@/shared/ui/back-to-top/back-to-top';
import { PageShell } from '@/shared/ui/page-shell/page-shell';
import { useRevealAnimation } from '@/shared/lib/hooks/use-reveal-animation';
import { SiteHeader } from '@/widgets/site-header';
import { HeroSection } from '@/widgets/hero';
import { AboutSection } from '@/widgets/about';
import { SkillsSection } from '@/widgets/skills';
import { ProjectsSection } from '@/widgets/projects';
import { ContactSection } from '@/widgets/contact';
import { SiteFooter } from '@/widgets/footer';

export function HomePage() {
  const revealScopeRef = useRevealAnimation(true);

  return (
    <PageShell>
      <div ref={revealScopeRef}>
        <SiteHeader />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <SiteFooter />
      </div>
      <BackToTop />
    </PageShell>
  );
}
