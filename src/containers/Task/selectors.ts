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

export const isAddTaskLoadingSlc = createSelector(
  selectTask,
  task => task.isAddTaskLoading
);

export const filterFieldProjectSlc = createSelector(
  selectTask,
  task => task.filterFieldProject
);

export const filteredTasksSlc = createSelector(
  tasksSlc,
  filterFieldProjectSlc,
  (tasks, filterFieldProject) => {
    let filteredTasks = tasks.filter(task => {
      if (filterFieldProject.length && task.project !== filterFieldProject)
        return false;

      return true;
    });

    return filteredTasks;
  }
);
