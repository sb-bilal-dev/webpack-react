import { History } from "history";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import todo from "../containers/Todo/reducer";

export default (history?: History) =>
  combineReducers({
    router: connectRouter(history),
    todo
  });
