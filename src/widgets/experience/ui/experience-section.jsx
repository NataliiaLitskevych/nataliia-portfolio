import { experiencePlaceholders } from '@/entities/experience/model/experience-placeholders';
import { SectionShell } from '@/shared/ui/section-shell/section-shell';
import { SurfaceCard } from '@/shared/ui/surface-card/surface-card';
import styles from './experience-section.module.scss';

const bulletPlaceholders = [
  'Placeholder for measurable impact or responsibility',
  'Placeholder for tools, team context, or delivery scope',
  'Placeholder for a second achievement or outcome',
];

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Relevant experience section ready for your confirmed details"
    >
      <div className={styles.stack} data-reveal>
        {experiencePlaceholders.map((item) => (
          <SurfaceCard key={item.id} className={styles.card}>
            <div className={styles.layout}>
              <div className={styles.copyColumn}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.period}>{item.period}</p>
                <p className={styles.copy}>
                  Confirmed role, company, dates, and achievement-focused
                  summary will appear here.
                </p>
              </div>

              <ul className={styles.points}>
                {bulletPlaceholders.map((point) => (
                  <li key={point} className={styles.point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
