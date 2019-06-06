import api from "../../utils/mockApi";
import { TaskModel } from "./reducer";
import {
  TASK_GET_TASKS_REQUEST,
  TASK_GET_TASKS_SUCCESS,
  TASK_GET_TASKS_ERROR,
  TASK_GET_PROJECTS_SUCCESS,
  TASK_SET_FILTER_FIELD_PROJECT,
  TASK_ADD_TASK_SUCCESS,
  TASK_ADD_TASK_ERROR,
  TASK_ADD_TASK_REQUEST
} from "./constants";
import { RootState } from "../../store/rootReducer";
import { tasksSlc } from "./selectors";

export const getTasks = () => async (dispatch: any) => {
  dispatch({
    type: TASK_GET_TASKS_REQUEST
  });

  try {
    const { response } = await api().get("tasks");

    dispatch({
      type: TASK_GET_TASKS_SUCCESS,
      tasks: response || []
    });
  } catch (error) {
    dispatch({
      type: TASK_GET_TASKS_ERROR,
      error
    });
  }
};

export const getProjects = () => async (dispatch: any) => {
  const { response } = await api().get("projects");

  dispatch({
    type: TASK_GET_PROJECTS_SUCCESS,
    projects: response || []
  });
};

export const addTask = (newTask: TaskModel) => async (
  dispatch: any,
  getState: () => RootState
) => {
  const state = getState();

  dispatch({
    type: TASK_ADD_TASK_REQUEST
  });

  try {
    const tasks = tasksSlc(state);
    const { response } = await api().set("tasks", [newTask, ...tasks]);
    dispatch({
      type: TASK_ADD_TASK_SUCCESS,
      tasks: response || []
    });
  } catch (error) {
    dispatch({
      type: TASK_ADD_TASK_ERROR,
      error
    });
  }
};

export const setFilterFieldProject = (value: string) => ({
  type: TASK_SET_FILTER_FIELD_PROJECT,
  value
});
