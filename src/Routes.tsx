import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Task from "./containers/Task";
import NotFound from "./components/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Task} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
