import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '@/features/project-browser/model/projects-ui-slice';
import {
  selectProjectCategories,
  selectProjectsUi,
} from '@/features/project-browser/model/selectors';
import styles from './project-controls.module.scss';

export function ProjectControls() {
  const dispatch = useDispatch();
  const categories = selectProjectCategories();
  const { activeCategory } = useSelector(selectProjectsUi);

  return (
    <div className={styles.controls}>
      <div className={styles.group} role="group" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category.id}
            className={category.id === activeCategory ? styles.activeChip : styles.chip}
            type="button"
            aria-pressed={category.id === activeCategory}
            onClick={() => dispatch(setActiveCategory(category.id))}
          >
            {category.label}
          </button>
        ))}
      </div>

    </div>
  );
}
