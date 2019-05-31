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

export const isLoadingTasksSlc = createSelector(
  selectTask,
  task => task.isLoadingTasks
);

export const tasksErrorSlc = createSelector(
  selectTask,
  task => task.tasksError
);
