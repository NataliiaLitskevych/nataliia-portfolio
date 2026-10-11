import { SectionShell } from '@/shared/ui/section-shell/section-shell';
import { SurfaceCard } from '@/shared/ui/surface-card/surface-card';
import styles from './about-section.module.scss';

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="A recruiter-friendly snapshot"
    >
      <div className={styles.grid} data-reveal>
        <SurfaceCard className={styles.primaryCard}>
          <p className={styles.copy}>
            I&apos;m a Frontend Developer focused on React and modern
            JavaScript, building responsive, user-friendly web applications with
            clean and reusable UI components.
          </p>
          <p className={styles.copy}>
            I work with React, Redux Toolkit, REST APIs, SCSS, and responsive
            design, with hands-on experience in both independent projects and
            collaborative development using Feature-Sliced Design architecture
            and Git-based workflows.
          </p>
          <p className={styles.copy}>
            I enjoy turning designs into functional interfaces and building
            applications that combine thoughtful UI with practical frontend
            logic. I&apos;m also expanding my backend knowledge with Node.js,
            Express.js, and MongoDB.
          </p>
        </SurfaceCard>

        <SurfaceCard className={styles.secondaryCard}>
          <p className={styles.eyebrow}>Focus</p>
          <ul className={styles.list}>
            <li>React and modern JavaScript</li>
            <li>Responsive, user-friendly interfaces</li>
            <li>Reusable UI components and practical frontend logic</li>
            <li>Feature-Sliced Design and Git-based collaboration</li>
          </ul>
        </SurfaceCard>
      </div>
    </SectionShell>
  );
}
