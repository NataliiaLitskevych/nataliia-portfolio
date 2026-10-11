import { createSelector } from '@reduxjs/toolkit';
import {
  projectCategories,
  projectPlaceholders,
} from '@/entities/project/model/project-placeholders';
import { filterProjects } from '@/entities/project/lib/filter-projects';

export const selectProjectCategories = () => projectCategories;
export const selectProjectsUi = (state) => state.projectsUi;

export const selectFilteredProjects = createSelector(
  [selectProjectsUi],
  (projectsUi) => filterProjects(projectPlaceholders, projectsUi.activeCategory)
);

export const selectSelectedProject = createSelector(
  [selectProjectsUi],
  (projectsUi) =>
    projectPlaceholders.find((project) => project.id === projectsUi.selectedProjectId) ??
    projectPlaceholders[0]
);
