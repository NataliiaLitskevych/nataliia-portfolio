import { skillGroups } from '@/entities/skill/model/skill-placeholders';
import { SectionShell } from '@/shared/ui/section-shell/section-shell';
import { SurfaceCard } from '@/shared/ui/surface-card/surface-card';
import { Tag } from '@/shared/ui/tag/tag';
import styles from './skills-section.module.scss';

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Frontend & React Skills"
    >
      <div className={styles.grid} data-reveal>
        {skillGroups.map((group) => (
          <SurfaceCard
            key={group.title + group.accent}
            className={styles[`${group.emphasis}Card`] ?? styles.card}
          >
            <h3 className={styles.title}>{group.title}</h3>
            <p className={styles.note}>{group.note}</p>
            <div className={styles.tags}>
              {group.items.map((item) => (
                <Tag
                  key={item}
                  accent={group.accent}
                  className={styles[`${group.emphasis}Tag`]}
                >
                  {item}
                </Tag>
              ))}
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
