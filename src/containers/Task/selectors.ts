import { createSelector } from "reselect";
import { RootState } from "../../store/rootReducer";

export const selectTask = (state: RootState) => state.task;

export const projectsSlc = createSelector(
  selectTask,
  task => task.projects
);

export const tasksSlc = createSelector(
  selectTask,
  task => task.tasks
);
