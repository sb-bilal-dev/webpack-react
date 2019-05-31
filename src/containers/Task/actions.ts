import { getStorageObj } from "../../utils/api";
import { TaskModel, ProjectModel } from "./reducer";

export const TASK_GET_TASKS_REQUEST = "TASK_GET_TASKS_REQUEST";
export const TASK_GET_TASKS_SUCCESS = "TASK_GET_TASKS_SUCCESS";
export const TASK_GET_TASKS_ERROR = "TASK_GET_TASKS_ERROR";

export const TASK_GET_PROJECTS_REQUEST = "TASK_GET_PROJECTS_REQUEST";
export const TASK_GET_PROJECTS_SUCCESS = "TASK_GET_PROJECTS_SUCCESS";
export const TASK_GET_PROJECTS_ERROR = "TASK_GET_PROJECTS_ERROR";

export const getTasks = () => async (dispatch: any) => {
  dispatch({
    type: TASK_GET_TASKS_REQUEST
  });

  try {
    const response = (await getStorageObj("tasks")) || [];

    dispatch({
      type: TASK_GET_TASKS_SUCCESS,
      tasks: response
    });
  } catch (error) {
    dispatch({
      type: TASK_GET_TASKS_ERROR,
      error
    });
  }
};

export const getProjects = () => async (dispatch: any) => {
  dispatch({
    type: TASK_GET_PROJECTS_REQUEST
  });

  try {
    const response = (await getStorageObj("projects")) || [];

    dispatch({
      type: TASK_GET_PROJECTS_SUCCESS,
      projects: response
    });
  } catch (error) {
    dispatch({
      type: TASK_GET_PROJECTS_ERROR,
      error
    });
  }
};
