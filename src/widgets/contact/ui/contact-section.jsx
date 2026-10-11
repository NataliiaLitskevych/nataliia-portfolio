import { ButtonLink } from '@/shared/ui/button-link/button-link';
import sectionStyles from '@/shared/ui/section-shell/section-shell.module.scss';
import { SurfaceCard } from '@/shared/ui/surface-card/surface-card';
import styles from './contact-section.module.scss';

export function ContactSection() {
  return (
    <section id="contact" className={sectionStyles.section}>
      <SurfaceCard className={styles.shell} data-reveal>
        <div className={styles.content}>
          <p className={sectionStyles.eyebrow}>Contact</p>
          <h2 className={sectionStyles.title}>Let’s connect</h2>
          <p className={styles.copy}>
            Open to frontend development opportunities and collaboration. Feel free
            to reach out — I'd love to hear from you.
          </p>
        </div>

        <div className={styles.actions}>
          <ButtonLink href="mailto:nataliia.litskevych@gmail.com">
            Email
          </ButtonLink>
          <ButtonLink
            href="https://www.linkedin.com/in/nataliia-litskevych"
            variant="secondary"
            target="_blank"
            rel="noreferrer"
            ariaLabel="Open Nataliia Litskevych LinkedIn profile in a new tab"
          >
            LinkedIn
          </ButtonLink>
          <ButtonLink
            href="https://github.com/NataliiaLitskevych"
            variant="secondary"
            target="_blank"
            rel="noreferrer"
            ariaLabel="Open Nataliia Litskevych GitHub profile in a new tab"
          >
            GitHub
          </ButtonLink>
        </div>
      </SurfaceCard>
    </section>
  );
}
