import * as taskActions from "./actions";
import { ErrorModel } from "../../components/RenderError";

export interface TaskModel {
  id: string;
  title: string;
  body: string;
  project: string;
  urgency: string;
  date: string;
}

export interface ProjectModel {
  name: string;
  id: string;
}

export interface TaskStore {
  tasks: TaskModel[];
  projects: ProjectModel[];
  isLoadingTasks: boolean;
  tasksError: null | ErrorModel;
}

const initialState: TaskStore = {
  tasks: [],
  projects: [],
  isLoadingTasks: false,
  tasksError: null
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case taskActions.TASK_GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.tasks
      };

    case taskActions.TASK_GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.projects
      };
    default:
      return state;
  }
};

export default taskReducer;
