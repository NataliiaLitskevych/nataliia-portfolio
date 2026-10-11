import { createSlice } from '@reduxjs/toolkit';
import { projectPlaceholders } from '@/entities/project/model/project-placeholders';

const initialState = {
  activeCategory: 'all',
  selectedProjectId: projectPlaceholders[0].id,
};

const projectsUiSlice = createSlice({
  name: 'projectsUi',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSelectedProjectId(state, action) {
      state.selectedProjectId = action.payload;
    },
  },
});

export const {
  setActiveCategory,
  setSelectedProjectId,
} = projectsUiSlice.actions;

export const projectsUiReducer = projectsUiSlice.reducer;
