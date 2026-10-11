import { ButtonLink } from '@/shared/ui/button-link/button-link';
import styles from './hero-section.module.scss';

export function HeroSection() {
  return (
    <section className={styles.hero} data-reveal>
      <div className={styles.layout}>
        <div className={styles.copyColumn}>
          <div className={styles.copyStack}>
            <p className={styles.name}>Nataliia Litskevych</p>
            <p className={styles.role}>Frontend Developer · React Developer</p>
            <h1 className={styles.title}>
              Building responsive, user-friendly web experiences with React and
              modern JavaScript.
            </h1>
            <p className={styles.description}>
              I create clean, reusable interfaces with a focus on responsive
              design, practical functionality, and thoughtful user experience.
            </p>
          </div>

          <div className={styles.actions}>
            <ButtonLink href="#projects">View Projects</ButtonLink>
            <ButtonLink
              href="/resume.pdf"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </ButtonLink>
            <ButtonLink
              href="https://github.com/NataliiaLitskevych"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
