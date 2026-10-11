import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ButtonLink } from '@/shared/ui/button-link/button-link';
import { SurfaceCard } from '@/shared/ui/surface-card/surface-card';
import { Tag } from '@/shared/ui/tag/tag';
import styles from './projects-section.module.scss';

export function ProjectDetailPanel({ project, desktop }) {
  const detailRef = useRef(null);
  useLayoutEffect(() => {
    const element = detailRef.current;
    return () => {
      const active = document.activeElement;
      if (!element?.contains(active)) return;
      const href = active.getAttribute('href');
      queueMicrotask(() => {
        if (document.activeElement !== document.body) return;
        const region = document.getElementById(`project-details-${project.id}`);
        const link = href && [...(region?.closest('article')?.querySelectorAll('a') ?? [])]
          .find((candidate) => candidate.getAttribute('href') === href);
        (link || region || document.getElementById(`project-button-${project.id}`))?.focus({ preventScroll: true });
      });
    };
  }, [project.id]);
  useLayoutEffect(() => {
    if (!detailRef.current) {
      return undefined;
    }

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
    }, detailRef);

    return () => media.revert();
  }, [project, desktop]);

  return (
    <SurfaceCard className={styles.detailCard}>
      <div ref={detailRef} className={styles.detailInner}>
        <div
          key={project.id}
          className={styles.detailContent}
          role="region"
          id={`project-details-${project.id}`}
          aria-labelledby={`project-detail-title-${project.id}`}
          tabIndex={desktop ? 0 : -1}
        >
          <p className={styles.cardEyebrow}>{project.label}</p>
          {project.subtitle ? (
            <p className={styles.cardMeta}>{project.subtitle}</p>
          ) : null}
          <h3 id={`project-detail-title-${project.id}`} className={styles.detailTitle}>{project.title}</h3>
          <div className={styles.detailImageFrame}>
            <img
              className={styles.detailImage}
              src={project.image}
              alt={project.imageAlt}
            />
          </div>
          <p className={styles.detailCopy}>{project.description}</p>

          {project.contributionSummary ? (
            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>My Contribution</p>
              <p className={styles.detailCopy}>{project.contributionSummary}</p>
            </div>
          ) : null}

          {project.contributionDetails?.length ? (
            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>Confirmed contribution details</p>
              <ul className={styles.detailList}>
                {project.contributionDetails.map((item) => (
                  <li key={item} className={styles.detailItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className={styles.detailBlock}>
            <p className={styles.detailLabel}>Tech stack</p>
            <div className={styles.tagRow}>
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.actionRow} data-project-actions>
          <ButtonLink
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </ButtonLink>
          {project.github ? (
            <ButtonLink
              href={project.github}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </SurfaceCard>
  );
}
