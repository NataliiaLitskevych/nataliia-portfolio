import { configureStore } from '@reduxjs/toolkit';
import { projectsUiReducer } from '@/features/project-browser/model/projects-ui-slice';

export const store = configureStore({
  reducer: {
    projectsUi: projectsUiReducer,
  },
});
