import { ErrorModel } from "../../components/RenderError";
import {
  TASK_GET_PROJECTS_SUCCESS,
  TASK_GET_TASKS_SUCCESS,
  TASK_GET_TASKS_REQUEST,
  TASK_GET_TASKS_ERROR,
  TASK_ADD_TASK_REQUEST,
  TASK_ADD_TASK_ERROR,
  TASK_ADD_TASK_SUCCESS,
  TASK_SET_FILTER_FIELD_PROJECT
} from "./constants";

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

export interface TaskState {
  tasks: TaskModel[];
  projects: ProjectModel[];
  isLoadingTasks: boolean;
  tasksError: null | ErrorModel;
  isAddTaskLoading: boolean;
  addTaskError: null | ErrorModel;
  filterFieldProject: string;
}

const initialState: TaskState = {
  tasks: [],
  projects: [],
  isLoadingTasks: false,
  tasksError: null,
  isAddTaskLoading: false,
  addTaskError: null,
  filterFieldProject: ""
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TASK_GET_TASKS_REQUEST:
      return {
        ...state,
        isLoadingTasks: true,
        tasksError: null
      };

    case TASK_GET_TASKS_ERROR:
      return {
        ...state,
        isLoadingTasks: false,
        tasksError: action.error
      };

    case TASK_GET_TASKS_SUCCESS:
      return {
        ...state,
        isLoadingTasks: false,
        tasks: action.tasks
      };

    case TASK_ADD_TASK_REQUEST:
      return {
        ...state,
        isAddTaskLoading: true,
        addTaskError: null
      };

    case TASK_ADD_TASK_ERROR:
      return {
        ...state,
        isAddTaskLoading: false,
        addTaskError: action.error
      };

    case TASK_ADD_TASK_SUCCESS:
      return {
        ...state,
        isAddTaskLoading: false,
        tasks: action.tasks
      };

    case TASK_GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.projects
      };
    case TASK_SET_FILTER_FIELD_PROJECT:
      return {
        ...state,
        filterFieldProject: action.value
      };
    default:
      return state;
  }
};

export default taskReducer;
