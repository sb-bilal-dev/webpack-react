import * as taskActions from "./actions";

export interface TaskModel {
  title: string;
  body: string;
  project: string;
  urgency: string;
  date: null | Date;
}

export interface ProjectModel {
  name: string;
  id: string;
}

export interface TaskStore {
  tasks: TaskModel[];
  projects: ProjectModel[];
}

const initialState: TaskStore = {
  tasks: [],
  projects: []
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case taskActions.TASK_GET_TASKS_SUCCESS:
      return {
        tasks: action.tasks
      };

    case taskActions.TASK_GET_PROJECTS_SUCCESS:
      return {
        projects: action.projects
      };
    default:
      return state;
  }
};

export default taskReducer;
