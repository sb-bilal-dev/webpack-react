import { History } from "history";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import task, { TaskStore } from "../containers/Task/reducer";
import { RouterState } from "react-router-redux";

export interface RootState {
  router: RouterState;
  task: TaskStore;
}

export default (history?: History) =>
  combineReducers({
    router: connectRouter(history),
    task
  });
