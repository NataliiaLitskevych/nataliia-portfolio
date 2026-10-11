import { Fragment, useEffect } from 'react';
import { useMediaQuery } from '@/shared/lib/hooks/use-media-query';
import { ProjectDetailPanel } from './project-detail-panel';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectControls } from '@/features/project-browser/ui/project-controls';
import { setSelectedProjectId } from '@/features/project-browser/model/projects-ui-slice';
import {
  selectFilteredProjects,
  selectSelectedProject,
} from '@/features/project-browser/model/selectors';
import { SectionShell } from '@/shared/ui/section-shell/section-shell';
import { SurfaceCard } from '@/shared/ui/surface-card/surface-card';
import { Tag } from '@/shared/ui/tag/tag';
import { classNames } from '@/shared/lib/class-names';
import styles from './projects-section.module.scss';

export function ProjectsSection() {
  const dispatch = useDispatch();
  const projects = useSelector(selectFilteredProjects);
  const selectedProject = useSelector(selectSelectedProject);
  const desktop = useMediaQuery('(min-width: 1160px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  const visibleProject = projects.find((project) => project.id === selectedProject.id) ?? projects[0] ?? selectedProject;

  useEffect(() => {
    if (!projects.some((project) => project.id === selectedProject.id) && projects[0]) {
      dispatch(setSelectedProjectId(projects[0].id));
    }
  }, [dispatch, projects, selectedProject.id]);

  const selectedIndex = projects.findIndex((project) => project.id === visibleProject.id);
  const rowEnd = tablet ? Math.min(projects.length - 1, Math.floor(selectedIndex / 2) * 2 + 1) : selectedIndex;

  return (
    <SectionShell
      id="projects"
      eyebrow="Featured Projects"
      title="Selected Work"
    >
      <div data-reveal>
        <ProjectControls />
        <div className={styles.layout}>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <Fragment key={project.id}>
                <SurfaceCard
                  className={classNames(
                    styles.card,
                    project.emphasis === 'primary' ? styles.cardPrimary : styles.cardSecondary,
                    visibleProject.id === project.id ? styles.cardActive : ''
                  )}
                  as="article"
                >
                  <button
                    className={styles.cardButton}
                    type="button"
                    id={`project-button-${project.id}`}
                    aria-labelledby={`project-card-title-${project.id}`}
                    aria-pressed={desktop ? visibleProject.id === project.id : undefined}
                    aria-expanded={!desktop ? visibleProject.id === project.id : undefined}
                    aria-controls={visibleProject.id === project.id ? `project-details-${project.id}` : undefined}
                    onClick={() => dispatch(setSelectedProjectId(project.id))}
                  >
                    <div className={styles.cardImageFrame}>
                      <img
                        className={styles.cardImage}
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                      />
                    </div>
                    <p className={styles.cardEyebrow}>{project.label}</p>
                    {project.subtitle ? (
                      <p className={styles.cardMeta}>{project.subtitle}</p>
                    ) : null}
                    <h3 id={`project-card-title-${project.id}`} className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardCopy}>{project.description}</p>
                    {project.subtitle === 'Team Project' ? (
                      <span className={styles.teamBadge}>Team Project</span>
                    ) : null}
                    <div className={styles.tagRow}>
                      {project.stack.map((badge) => (
                        <Tag key={badge}>{badge}</Tag>
                      ))}
                    </div>
                  </button>
                </SurfaceCard>
                {!desktop && index === rowEnd && <ProjectDetailPanel project={visibleProject} desktop={false} />}
              </Fragment>
            ))}
          </div>

          {desktop && <ProjectDetailPanel project={visibleProject} desktop />}
        </div>
      </div>
    </SectionShell>
  );
}
