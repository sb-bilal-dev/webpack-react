import { History } from "history";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import task, { TaskState } from "../containers/Task/reducer";
import { RouterState } from "react-router-redux";

export interface RootState {
  router: RouterState;
  task: TaskState;
}

export default (history?: History) =>
  combineReducers({
    router: connectRouter(history),
    task
  });
